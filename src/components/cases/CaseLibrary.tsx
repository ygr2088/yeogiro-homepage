"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CASES, CASE_CATEGORIES, type CaseCategory } from "@/data/cases";
import { Icon } from "@/components/ui/Icon";

export function CaseLibrary() {
  const [category, setCategory] = useState<CaseCategory>("전체");
  const items = useMemo(
    () => category === "전체" ? CASES : CASES.filter((item) => item.category === category),
    [category],
  );

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CASE_CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${category === item ? "bg-primary-700 text-white shadow-md" : "border border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-700"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">총 {items.length}개의 사례</p>

      <div className="mt-8 grid gap-7 lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.slug} className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">{item.category}</span>
              <div className="absolute right-5 top-5 flex gap-2">
                {item.instagram && <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">영상</span>}
                {item.blog && <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">블로그</span>}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-2 text-sm text-white/75">{item.pet}</p>
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-sm leading-7 text-gray-600">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.treatments.map((treatment) => <span key={treatment} className="rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700">{treatment}</span>)}
              </div>
              <Link href={`/cases/${item.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-700">
                치료 과정 자세히 보기 <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
