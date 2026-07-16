"use client";

import type { SavedContentDraft } from "@/types/content";

type Props = {
  drafts: SavedContentDraft[];
  selectedId: string | null;
  onLoad: (draft: SavedContentDraft) => void;
  onDelete: (id: string) => void;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatDuration(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "재생시간 미확인";
  const minutes = Math.floor(seconds / 60);
  const remain = Math.floor(seconds % 60);
  return `${minutes}:${String(remain).padStart(2, "0")}`;
}

export default function ContentHistory({
  drafts,
  selectedId,
  onLoad,
  onDelete,
}: Props) {
  return (
    <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold">작성 이력</h2>
        <p className="mt-2 text-sm leading-6 text-black/55">
          현재 브라우저에 임시 저장됩니다. 다른 PC나 브라우저에서는 보이지
          않습니다.
        </p>
      </div>

      {drafts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/10 p-6 text-center text-sm text-black/45">
          저장된 콘텐츠가 없습니다.
        </div>
      ) : (
        <div className="space-y-3">
          {drafts.map((draft) => (
            <article
              key={draft.id}
              className={`rounded-2xl border p-4 transition ${
                selectedId === draft.id
                  ? "border-[#a95767] bg-[#fff7f8]"
                  : "border-black/10 bg-[#fcfbfa]"
              }`}
            >
              <button
                type="button"
                onClick={() => onLoad(draft)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold">
                      {draft.form.patientName || "익명 환자"} ·{" "}
                      {draft.form.category}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-black/60">
                      {draft.form.condition}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#efe5e7] px-2.5 py-1 text-xs font-semibold">
                    {draft.form.stage}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-black/45">
                  <span>{formatDate(draft.updatedAt)}</span>
                  {draft.video && (
                    <>
                      <span>{draft.video.fileName}</span>
                      <span>{formatDuration(draft.video.duration)}</span>
                    </>
                  )}
                </div>
              </button>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => onDelete(draft.id)}
                  className="text-xs font-semibold text-red-600 underline underline-offset-4"
                >
                  삭제
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
