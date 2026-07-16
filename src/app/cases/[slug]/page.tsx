import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CASES, getCaseBySlug } from "@/data/cases";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return CASES.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getCaseBySlug((await params).slug);
  return item ? createMetadata({ title: item.title, description: item.summary, path: `/cases/${item.slug}` }) : createMetadata({ title: "치료사례", path: "/cases" });
}

export default async function CaseDetailPage({ params }: Props) {
  const item = getCaseBySlug((await params).slug);
  if (!item) notFound();

  const sections = [
    ["내원 당시 증상", item.symptoms],
    ["검사와 평가", item.evaluations],
    ["치료 경과", item.progress],
    ["보호자 홈케어", item.homeCare],
  ] as const;

  return (
    <>
      <section className="bg-[#FCFBFA]">
        <div className="container-main py-6 sm:py-8">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image src={item.image} alt={item.imageAlt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/58 to-black/10" />
            <div className="relative z-10 flex min-h-[560px] items-end px-8 py-12 text-white sm:px-14 sm:py-16">
              <div className="max-w-3xl">
                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">{item.category}</span>
                <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{item.title}</h1>
                <p className="mt-4 text-lg text-white/70">{item.pet}</p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{item.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid gap-6 lg:grid-cols-2">
          {sections.map(([title, values]) => (
            <article key={title} className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <ul className="mt-6 space-y-3">
                {values.map((text) => <li key={text} className="flex gap-3 rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />{text}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900">환자 상태에 맞춘 치료 방향</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {item.treatments.map((text) => <div key={text} className="rounded-2xl border border-primary-100 bg-primary-50 p-5 font-bold text-gray-900">{text}</div>)}
            </div>
            <Button href={item.relatedHref} className="mt-8">{item.relatedLabel} 알아보기 <Icon name="arrow" /></Button>
          </div>
        </div>
      </section>

      {(item.instagram || item.blog) && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="rounded-[2rem] border border-primary-100 bg-primary-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">관련 영상과 설명자료</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.instagram && <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 font-semibold text-primary-700 shadow-sm">Instagram 영상</a>}
                {item.blog && <a href={item.blog} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 font-semibold text-primary-700 shadow-sm">네이버 블로그</a>}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <div className="rounded-[2rem] bg-primary-700 px-8 py-14 text-white">
            <h2 className="text-3xl font-bold sm:text-4xl">비슷한 증상으로 고민하고 계신가요?</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={SITE.naverReservation} variant="secondary" size="lg">네이버 예약하기 <Icon name="arrow" /></Button>
              <a href={`tel:${SITE.phone}`} className="rounded-full border-2 border-white/80 px-7 py-3.5 font-semibold">{SITE.phone}</a>
            </div>
          </div>
          <Link href="/cases" className="mt-8 inline-block font-semibold text-primary-700">← 치료사례 목록으로</Link>
        </div>
      </section>
    </>
  );
}
