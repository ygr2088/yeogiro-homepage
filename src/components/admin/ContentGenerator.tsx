"use client";

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

import ContentHistory from "@/components/admin/ContentHistory";
import {
  loadDrafts,
  saveDrafts,
  upsertDraft,
} from "@/lib/content/storage";
import type {
  ContentForm,
  ContentTone,
  GeneratedContent,
  SavedContentDraft,
  VideoMeta,
} from "@/types/content";

const initialForm: ContentForm = {
  patientName: "",
  species: "강아지",
  breed: "",
  age: "",
  category: "재활",
  condition: "",
  treatments: "",
  stage: "치료 중",
  highlight: "",
  tone: "balanced",
  regionTags: true,
  consentConfirmed: false,
};

type ApiResponse = {
  mode?: "demo" | "ai";
  content?: GeneratedContent;
  error?: string;
};

function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 MB";
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remain = Math.floor(seconds % 60);
  return `${minutes}:${String(remain).padStart(2, "0")}`;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-[#d8a6af] px-3 py-1.5 text-xs font-semibold text-[#7b3343] transition hover:bg-[#fff4f6]"
    >
      {copied ? "복사됨" : "복사"}
    </button>
  );
}

function ResultCard({
  title,
  text,
  onChange,
}: {
  title: string;
  text: string;
  onChange: (value: string) => void;
}) {
  return (
    <section className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-bold text-[#3e3033]">{title}</h3>
        <CopyButton text={text} />
      </div>
      <textarea
        value={text}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-48 w-full resize-y rounded-2xl border border-black/10 bg-[#fcfbfa] p-4 text-sm leading-7 outline-none focus:border-[#a95767]"
      />
    </section>
  );
}

export default function ContentGenerator() {
  const [form, setForm] = useState<ContentForm>(initialForm);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [mode, setMode] = useState<"demo" | "ai" | null>(null);
  const [video, setVideo] = useState<VideoMeta | null>(null);
  const [drafts, setDrafts] = useState<SavedContentDraft[]>([]);
  const [selectedDraftId, setSelectedDraftId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setDrafts(loadDrafts());
  }, []);

  useEffect(() => {
    return () => {
      if (video?.objectUrl) URL.revokeObjectURL(video.objectUrl);
    };
  }, [video]);

  const canGenerate = useMemo(
    () =>
      form.condition.trim().length > 0 &&
      form.treatments.trim().length > 0 &&
      form.consentConfirmed &&
      !isLoading,
    [form, isLoading],
  );

  function update<K extends keyof ContentForm>(
    key: K,
    value: ContentForm[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function clearVideo() {
    if (video?.objectUrl) URL.revokeObjectURL(video.objectUrl);
    setVideo(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function handleVideoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setError("영상 파일만 선택해 주세요.");
      event.target.value = "";
      return;
    }

    const maxBytes = 500 * 1024 * 1024;
    if (file.size > maxBytes) {
      setError("현재 버전에서는 500MB 이하 영상만 선택할 수 있습니다.");
      event.target.value = "";
      return;
    }

    if (video?.objectUrl) URL.revokeObjectURL(video.objectUrl);

    const objectUrl = URL.createObjectURL(file);
    setError("");
    setVideo({
      fileName: file.name,
      fileSize: file.size,
      duration: 0,
      objectUrl,
    });
  }

  async function generate() {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok || !data.content) {
        throw new Error(data.error || "콘텐츠 생성에 실패했습니다.");
      }

      setResult(data.content);
      setMode(data.mode || null);
      setSelectedDraftId(null);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "콘텐츠 생성 중 오류가 발생했습니다.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function saveCurrentDraft() {
    if (!result) return;

    const now = new Date().toISOString();
    const existing = selectedDraftId
      ? drafts.find((item) => item.id === selectedDraftId)
      : undefined;

    const draft: SavedContentDraft = {
      id: existing?.id || crypto.randomUUID(),
      createdAt: existing?.createdAt || now,
      updatedAt: now,
      form,
      content: result,
      video: video
        ? {
            fileName: video.fileName,
            fileSize: video.fileSize,
            duration: video.duration,
          }
        : undefined,
    };

    const next = upsertDraft(drafts, draft);
    setDrafts(next);
    saveDrafts(next);
    setSelectedDraftId(draft.id);
  }

  function loadDraft(draft: SavedContentDraft) {
    setForm(draft.form);
    setResult(draft.content);
    setMode(null);
    setSelectedDraftId(draft.id);
    clearVideo();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function deleteDraft(id: string) {
    const next = drafts.filter((item) => item.id !== id);
    setDrafts(next);
    saveDrafts(next);

    if (selectedDraftId === id) {
      setSelectedDraftId(null);
    }
  }

  function resetAll() {
    setForm(initialForm);
    setResult(null);
    setMode(null);
    setSelectedDraftId(null);
    setError("");
    clearVideo();
  }

  return (
    <div className="min-h-screen bg-[#fcfbfa] px-4 py-8 text-[#3e3033] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-8 rounded-[2rem] bg-[#7b3343] p-7 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-white/70">
            YEOGIRO CONTENT STUDIO
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            SNS 콘텐츠 자동 생성
          </h1>
          <p className="mt-4 max-w-3xl leading-7 text-white/80">
            영상 미리보기와 환자 정보를 바탕으로 플랫폼별 문구를 만들고,
            작성 결과를 브라우저에 임시 저장할 수 있습니다.
          </p>
        </header>

        <div className="grid gap-6 2xl:grid-cols-[0.85fr_1.15fr_0.7fr]">
          <section className="self-start rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold">콘텐츠 정보</h2>
              <p className="mt-2 text-sm leading-6 text-black/55">
                영상은 현재 브라우저에서만 미리보기되며 서버에 업로드되지
                않습니다.
              </p>
            </div>

            <div className="mb-6 rounded-3xl border border-dashed border-[#d8a6af] bg-[#fff9fa] p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold">릴스 영상</h3>
                  <p className="mt-1 text-xs text-black/50">
                    MP4·MOV 등 영상 파일, 최대 500MB
                  </p>
                </div>
                {video && (
                  <button
                    type="button"
                    onClick={clearVideo}
                    className="text-xs font-semibold text-red-600 underline underline-offset-4"
                  >
                    영상 제거
                  </button>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-[#a95767] file:px-4 file:py-2 file:font-semibold file:text-white"
              />

              {video && (
                <div className="mt-4 overflow-hidden rounded-2xl bg-black">
                  <video
                    controls
                    playsInline
                    src={video.objectUrl}
                    onLoadedMetadata={(event) =>
                      setVideo((current) =>
                        current
                          ? {
                              ...current,
                              duration: event.currentTarget.duration,
                            }
                          : current,
                      )
                    }
                    className="max-h-[420px] w-full object-contain"
                  />
                  <div className="flex flex-wrap gap-x-4 gap-y-1 bg-black px-4 py-3 text-xs text-white/70">
                    <span>{video.fileName}</span>
                    <span>{formatBytes(video.fileSize)}</span>
                    <span>{formatDuration(video.duration)}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold">환자 표시명</span>
                <input
                  value={form.patientName}
                  onChange={(event) =>
                    update("patientName", event.target.value)
                  }
                  placeholder="예: 구름이 또는 익명"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold">동물</span>
                <select
                  value={form.species}
                  onChange={(event) =>
                    update(
                      "species",
                      event.target.value as ContentForm["species"],
                    )
                  }
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
                >
                  <option>강아지</option>
                  <option>고양이</option>
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold">견종·묘종</span>
                <input
                  value={form.breed}
                  onChange={(event) => update("breed", event.target.value)}
                  placeholder="예: 말티즈"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold">나이</span>
                <input
                  value={form.age}
                  onChange={(event) => update("age", event.target.value)}
                  placeholder="예: 11살"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold">진료 분야</span>
                <select
                  value={form.category}
                  onChange={(event) =>
                    update(
                      "category",
                      event.target.value as ContentForm["category"],
                    )
                  }
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
                >
                  {["재활", "치과", "한방", "통증", "내과", "외과", "예방"].map(
                    (item) => (
                      <option key={item}>{item}</option>
                    ),
                  )}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold">영상 단계</span>
                <select
                  value={form.stage}
                  onChange={(event) =>
                    update(
                      "stage",
                      event.target.value as ContentForm["stage"],
                    )
                  }
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
                >
                  {["치료 전", "치료 중", "회복 중", "회복 후", "예방 관리"].map(
                    (item) => (
                      <option key={item}>{item}</option>
                    ),
                  )}
                </select>
              </label>
            </div>

            <label className="mt-5 block space-y-2">
              <span className="text-sm font-semibold">질환 또는 현재 상태 *</span>
              <textarea
                value={form.condition}
                onChange={(event) => update("condition", event.target.value)}
                placeholder="예: 디스크 수술 후 후지 근력 저하와 보행 불안정"
                className="min-h-24 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
              />
            </label>

            <label className="mt-5 block space-y-2">
              <span className="text-sm font-semibold">치료 내용 *</span>
              <textarea
                value={form.treatments}
                onChange={(event) => update("treatments", event.target.value)}
                placeholder="예: 침 치료, 레이저, 관절가동범위 운동, 수중보행"
                className="min-h-24 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
              />
            </label>

            <label className="mt-5 block space-y-2">
              <span className="text-sm font-semibold">영상에서 강조할 내용</span>
              <textarea
                value={form.highlight}
                onChange={(event) => update("highlight", event.target.value)}
                placeholder="예: 보조 없이 스스로 일어나 걷는 장면"
                className="min-h-24 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
              />
            </label>

            <label className="mt-5 block space-y-2">
              <span className="text-sm font-semibold">기본 문체</span>
              <select
                value={form.tone}
                onChange={(event) =>
                  update("tone", event.target.value as ContentTone)
                }
                className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-[#a95767]"
              >
                <option value="balanced">전문성 + 공감 균형</option>
                <option value="warm">따뜻한 진료일기</option>
                <option value="professional">전문 설명 중심</option>
                <option value="playful">귀엽고 친근하게</option>
              </select>
            </label>

            <div className="mt-6 space-y-4 rounded-2xl bg-[#fff6f7] p-5">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.regionTags}
                  onChange={(event) =>
                    update("regionTags", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-[#a95767]"
                />
                <span className="text-sm leading-6">
                  과천·안양·인덕원·군포 지역 해시태그 포함
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.consentConfirmed}
                  onChange={(event) =>
                    update("consentConfirmed", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-[#a95767]"
                />
                <span className="text-sm leading-6">
                  보호자에게 SNS 게시 동의를 받았으며 개인정보를 확인했습니다.
                  *
                </span>
              </label>
            </div>

            {error && (
              <p className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="button"
              disabled={!canGenerate}
              onClick={generate}
              className="mt-6 w-full rounded-2xl bg-[#a95767] px-5 py-4 font-bold text-white transition hover:bg-[#8d4251] disabled:cursor-not-allowed disabled:bg-black/20"
            >
              {isLoading ? "콘텐츠 생성 중..." : "플랫폼별 콘텐츠 생성"}
            </button>
          </section>

          <div className="space-y-6">
            {!result ? (
              <section className="rounded-[2rem] border border-dashed border-[#d8a6af] bg-white p-10 text-center shadow-sm">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f3] text-2xl">
                  ✍️
                </div>
                <h2 className="text-xl font-bold">생성 결과가 표시됩니다</h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-black/55">
                  정보를 입력하고 보호자 동의를 확인한 뒤 생성 버튼을 누르세요.
                </p>
              </section>
            ) : (
              <>
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#efe5e7] px-5 py-4">
                  <p className="text-sm font-semibold">
                    {mode === "ai"
                      ? "AI 생성 모드"
                      : mode === "demo"
                        ? "데모 모드 · OPENAI_API_KEY를 추가하면 AI로 전환됩니다"
                        : "저장된 콘텐츠를 불러왔습니다"}
                  </p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={saveCurrentDraft}
                      className="rounded-full bg-[#7b3343] px-4 py-2 text-xs font-bold text-white"
                    >
                      {selectedDraftId ? "수정 저장" : "작성 이력 저장"}
                    </button>
                    <button
                      type="button"
                      onClick={resetAll}
                      className="text-sm font-semibold underline underline-offset-4"
                    >
                      새 콘텐츠
                    </button>
                  </div>
                </div>

                <ResultCard
                  title="Instagram 릴스"
                  text={result.instagramCaption}
                  onChange={(value) =>
                    setResult((current) =>
                      current
                        ? { ...current, instagramCaption: value }
                        : current,
                    )
                  }
                />

                <ResultCard
                  title="Threads · 따뜻한 진료일기형"
                  text={result.threadsWarm}
                  onChange={(value) =>
                    setResult((current) =>
                      current ? { ...current, threadsWarm: value } : current,
                    )
                  }
                />

                <ResultCard
                  title="Threads · 전문 설명형"
                  text={result.threadsProfessional}
                  onChange={(value) =>
                    setResult((current) =>
                      current
                        ? { ...current, threadsProfessional: value }
                        : current,
                    )
                  }
                />

                <ResultCard
                  title="Threads · 짧은 대화형"
                  text={result.threadsShort}
                  onChange={(value) =>
                    setResult((current) =>
                      current ? { ...current, threadsShort: value } : current,
                    )
                  }
                />

                <ResultCard
                  title="TikTok"
                  text={result.tiktokCaption}
                  onChange={(value) =>
                    setResult((current) =>
                      current ? { ...current, tiktokCaption: value } : current,
                    )
                  }
                />

                <section className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-bold text-[#3e3033]">
                      YouTube Shorts 제목
                    </h3>
                    <CopyButton text={result.shortsTitles.join("\n")} />
                  </div>
                  <div className="space-y-2">
                    {result.shortsTitles.map((title, index) => (
                      <input
                        key={index}
                        value={title}
                        onChange={(event) =>
                          setResult((current) => {
                            if (!current) return current;
                            const next = [...current.shortsTitles];
                            next[index] = event.target.value;
                            return { ...current, shortsTitles: next };
                          })
                        }
                        className="w-full rounded-2xl border border-black/10 bg-[#fcfbfa] px-4 py-3 text-sm outline-none focus:border-[#a95767]"
                      />
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-bold text-[#3e3033]">해시태그</h3>
                    <CopyButton text={result.hashtags.join(" ")} />
                  </div>
                  <textarea
                    value={result.hashtags.join(" ")}
                    onChange={(event) =>
                      setResult((current) =>
                        current
                          ? {
                              ...current,
                              hashtags: event.target.value
                                .split(/\s+/)
                                .filter(Boolean),
                            }
                          : current,
                      )
                    }
                    className="min-h-28 w-full rounded-2xl border border-black/10 bg-[#fcfbfa] p-4 text-sm leading-7 outline-none focus:border-[#a95767]"
                  />
                </section>

                <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
                  <strong>게시 전 확인:</strong> {result.safetyNote}
                </section>
              </>
            )}
          </div>

          <div className="self-start 2xl:sticky 2xl:top-6">
            <ContentHistory
              drafts={drafts}
              selectedId={selectedDraftId}
              onLoad={loadDraft}
              onDelete={deleteDraft}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
