import type { Metadata } from "next";
import Image from "next/image";

import { CaseLibrary } from "@/components/cases/CaseLibrary";
import { PageHero } from "@/components/layout/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "치료사례",
  description: "재활, 침치료, 수중재활, 보행평가, 치과와 외과 치료사례를 소개합니다.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <PageHero title="치료사례" description="실제 진료와 회복 과정을 분야별로 확인하세요." breadcrumb={[{ label: "홈", href: "/" }, { label: "치료사례" }]} />
      <section className="bg-white pb-6 pt-10 sm:pt-14">
        <div className="container-main">
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <Image src="/images/cases/rehab-walking.webp" alt="재활치료 장면" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/50 to-black/10" />
            <div className="relative z-10 max-w-3xl px-8 py-16 text-white sm:px-14 sm:py-24">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">Recovery Library</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">실제 치료 과정과<br />회복 기록을 한곳에서</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">사진, 영상과 블로그를 하나의 사례로 연결했습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Treatment Cases</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">분야별 치료사례</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">카테고리를 선택하면 관련 사례만 모아볼 수 있습니다.</p>
          </div>
          <CaseLibrary />
        </div>
      </section>
    </>
  );
}
