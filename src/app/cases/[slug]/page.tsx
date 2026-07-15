import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

import { caseDetails, getCaseDetail } from "../caseData";

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseDetails.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = getCaseDetail(slug);

  if (!caseItem) {
    return createMetadata({
      title: "치료사례",
      path: "/cases",
    });
  }

  return createMetadata({
    title: caseItem.title,
    description: caseItem.overview,
    path: `/cases/${caseItem.slug}`,
  });
}

export default async function CaseDetailPage({
  params,
}: CasePageProps) {
  const { slug } = await params;
  const caseItem = getCaseDetail(slug);

  if (!caseItem) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#FCFBFA]">
        <div className="container-main py-6 sm:py-8">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(17,24,39,0.12)]">
            <Image
              src={caseItem.image}
              alt={caseItem.imageAlt}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${caseItem.imagePosition}`}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

            <div className="relative z-10 flex min-h-[560px] items-end px-8 py-12 text-white sm:px-14 sm:py-16">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  {caseItem.category}
                </span>

                <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                  {caseItem.title}
                </h1>

                <p className="mt-4 text-base text-white/70 sm:text-lg">
                  {caseItem.pet}
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  {caseItem.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Symptoms
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                내원 당시 확인된 증상
              </h2>

              <ul className="mt-6 space-y-3">
                {caseItem.symptoms.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Evaluation
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                검사와 평가
              </h2>

              <ul className="mt-6 space-y-3">
                {caseItem.evaluations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                      <Icon name="stethoscope" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[480px]">
              <Image
                src={caseItem.image}
                alt={caseItem.imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className={`object-cover ${caseItem.imagePosition}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>

            <div className="p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Treatment Plan
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                환자 상태에 맞춘 치료 방향
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {caseItem.treatments.map((item) => (
                  <article
                    key={item}
                    className="rounded-2xl border border-primary-100 bg-primary-50 p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                      <Icon name="check" />
                    </div>
                    <h3 className="mt-4 font-bold text-gray-900">{item}</h3>
                  </article>
                ))}
              </div>

              <Button
                href={caseItem.relatedHref}
                className="mt-8"
              >
                {caseItem.relatedLabel} 알아보기
                <Icon name="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Recovery
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                치료와 회복 과정
              </h2>

              <div className="mt-6 space-y-5">
                {caseItem.progress.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="pt-1 text-sm leading-7 text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-gray-100 bg-gray-50 p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Home Care
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                보호자 홈케어
              </h2>

              <ul className="mt-6 space-y-3">
                {caseItem.homeCare.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <Icon name="heart" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5 text-sm leading-7 text-gray-500">
            본 사례는 대표적인 진료 과정을 설명하기 위한 예시입니다.
            개인정보 보호를 위해 일부 정보는 익명 처리되며, 검사와 치료 결과는
            환자의 상태에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="rounded-[2rem] bg-primary-700 px-8 py-14 text-center text-white shadow-[0_18px_45px_rgba(116,47,65,0.2)] sm:px-14 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Consultation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              비슷한 증상으로 고민하고 계신가요?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80">
              현재 증상과 과거 검사자료를 바탕으로 필요한 진료 방향을 함께
              확인하겠습니다.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={SITE.naverReservation}
                variant="secondary"
                size="lg"
              >
                네이버 예약하기
                <Icon name="arrow" />
              </Button>

              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="phone" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
