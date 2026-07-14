import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "내과진료센터",
  description:
    "만성질환, 노령질환, 신장·간·췌장 질환, 심장·호흡기 질환, 내분비 질환과 건강검진을 체계적으로 진료합니다.",
  path: "/internal-medicine",
});

const specialties = [
  ["만성질환 관리", "오랜 기간 반복되거나 여러 질환이 함께 있는 환자의 상태를 종합적으로 평가하고 장기 관리 계획을 세웁니다."],
  ["노령동물 진료", "노령 반려동물의 식욕, 체중, 보행, 심장, 신장, 내분비 변화를 함께 살펴 삶의 질을 유지하도록 돕습니다."],
  ["신장·간·췌장 질환", "혈액검사와 영상검사를 바탕으로 장기 기능을 평가하고 환자 상태에 맞춘 치료와 추적검사를 진행합니다."],
  ["심장·호흡기 질환", "기침, 호흡곤란, 운동불내성 등 증상을 평가하고 필요한 검사와 약물 관리를 연결합니다."],
  ["내분비 질환", "당뇨, 갑상선 질환, 쿠싱증후군 등 장기적인 모니터링이 필요한 질환을 체계적으로 관리합니다."],
  ["건강검진", "증상이 나타나기 전 위험요인을 확인하고 연령과 상태에 맞춘 예방 중심 검진 계획을 제안합니다."],
] as const;

const process = [
  "문진 및 신체검사",
  "혈액·소변검사",
  "방사선·초음파 등 영상검사",
  "진단 및 치료계획 설명",
  "약물·식이·생활관리",
  "정기 추적검사와 장기관리",
];

export default function InternalMedicinePage() {
  return (
    <>
      <PageHero
        title="내과진료센터"
        description="복잡하고 오래된 문제일수록 더 깊이 살피고, 치료 이후의 장기 관리까지 함께 계획합니다."
        breadcrumb={[{ label: "홈", href: "/" }, { label: "내과진료센터" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                Internal Medicine
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                20년 이상의 임상경험을 바탕으로
                <br />
                환자 전체를 함께 살핍니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                하나의 증상만 보는 것이 아니라 나이, 기존 질환, 복용약,
                검사 결과와 생활환경을 함께 고려해 진료 방향을 정합니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={SITE.naverReservation} size="lg">
                  진료 예약하기
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

            <div className="grid gap-4 sm:grid-cols-2">
              {specialties.map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Icon name="stethoscope" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Care Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              내과 진료 과정
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <div key={item} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-primary-600">STEP {index + 1}</p>
                <p className="mt-2 font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
