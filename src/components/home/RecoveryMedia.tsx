"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import {
  SOCIAL_LINKS,
  getFeaturedRecoveryContents,
  type RecoveryContent,
} from "@/data/content";
import { Icon } from "@/components/ui/Icon";

function VideoCard({ item }: { item: RecoveryContent }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video || !item.video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_14px_38px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(17,24,39,0.13)]">
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={item.video}
          poster={item.poster}
          preload="metadata"
          playsInline
          controls={playing}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className="h-full w-full object-cover"
        />

        {!playing && (
          <button
            type="button"
            onClick={toggleVideo}
            className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors hover:bg-black/25"
            aria-label={`${item.title} 영상 재생`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/20 text-white shadow-xl backdrop-blur-md transition-transform group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-7 w-7"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5.6v12.8c0 .8.9 1.3 1.6.8l9.2-6.4a1 1 0 0 0 0-1.6L9.6 4.8A1 1 0 0 0 8 5.6Z" />
              </svg>
            </span>
          </button>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          {item.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {item.caseHref && (
            <Link
              href={item.caseHref}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700"
            >
              사례 자세히 보기
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          )}

          {item.instagram && (
            <a
              href={item.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 transition-colors hover:text-primary-700"
            >
              Instagram
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          )}

          {item.blog && (
            <a
              href={item.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 transition-colors hover:text-primary-700"
            >
              블로그
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function RecoveryMedia() {
  const recoveryVideos = getFeaturedRecoveryContents(4);

  return (
    <section className="section-padding bg-[#FCFBFA]">
      <div className="container-main">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Recovery Stories
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              영상으로 확인하는 실제 회복 기록
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              사진과 글만으로는 확인하기 어려운 보행 변화를 실제 치료
              영상으로 보여드립니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-5 font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Instagram 전체보기
              <Icon name="arrow" className="h-4 w-4" />
            </a>

            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-700 px-5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-lg"
            >
              YouTube Shorts 보기
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recoveryVideos.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 lg:col-span-2">
            <p className="text-sm font-bold text-primary-800">영상 안내</p>
            <p className="mt-2 text-sm leading-6 text-primary-800/80">
              각 영상은 대표적인 치료 과정을 보여주기 위한 자료입니다.
              치료 반응과 회복 속도는 환자의 질환, 연령과 전신상태에 따라
              달라질 수 있습니다.
            </p>
          </div>

          <Link
            href="/cases"
            className="flex items-center justify-between rounded-2xl bg-gray-900 p-5 text-white transition-transform hover:-translate-y-0.5"
          >
            <div>
              <p className="text-sm text-white/60">더 자세히 보기</p>
              <p className="mt-1 font-bold">치료사례 전체보기</p>
            </div>
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
