import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "건강검진센터",
  description:
    "연령과 건강 상태에 맞춘 예방검진, 노령검진, 맞춤형 건강검진을 제공합니다.",
  path: "/health-checkup",
});

const checkups = [
  "기초 신체검사",
  "혈액·소변검사",
  "방사선·초음파 검사",
  "노령동물 맞춤검진",
  "만성질환 추적검사",
  "예방 중심 건강관리",
];

export default function HealthCheckupPage() {
  return (
    <>
      <PageHero
        title="건강검진센터"
        description="증상이 나타나기 전 위험요인을 확인하고, 연령과 상태에 맞춘 검진을 설계합니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "건강검진센터" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="/images/services/health-checkup.webp"
                alt="여기로양한방동물병원 건강검진 장면"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                Health Checkup
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                예방을 위한 검진부터
                <br />
                노령동물 맞춤검진까지
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                현재 상태와 연령, 과거 병력, 생활환경을 함께 고려해 필요한
                검사 항목을 제안합니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={SITE.naverReservation} size="lg">
                  건강검진 예약
                  <Icon name="arrow" />
                </Button>

                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 font-semibold text-gray-800 transition-colors hover:border-primary-300 hover:text-primary-700"
                >
                  <Icon name="phone" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {checkups.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="check" />
                </div>

                <h3 className="font-bold text-gray-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
