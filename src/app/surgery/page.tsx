import type { Metadata } from "next";

import { SurgeryIcon } from "@/components/icons/SurgeryIcon";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "외과수술센터",
  description:
    "수술 전 검사, 마취계획, 정밀 수술, 통증관리와 재활 연계까지 체계적으로 관리합니다.",
  path: "/surgery",
});

const surgeryAreas = [
  ["일반·연부조직 수술", "피부와 피하조직, 복강 장기, 탈장, 종괴 등 환자 상태에 따라 필요한 외과적 처치를 계획합니다."],
  ["종괴 제거", "종괴의 위치와 크기, 환자의 전신상태를 평가해 수술 범위와 검사 계획을 세웁니다."],
  ["중성화 수술", "수술 전 검사와 개별 마취계획을 바탕으로 안전한 수술과 회복 관리를 진행합니다."],
  ["수술 후 통증관리", "전신 상태와 수술 종류에 맞춰 약물, 국소마취, 냉각, 레이저 등 통증 완화 방법을 함께 고려합니다."],
  ["재활 연계", "필요한 경우 침치료, 레이저, 도수치료, 보행평가 등 회복 단계에 맞는 재활치료로 연결합니다."],
  ["마취 모니터링", "수술 중 심박, 호흡, 산소포화도 등 생체신호를 지속적으로 확인하며 환자 상태를 관리합니다."],
] as const;

const safetyPoints = [
  "수술 전 혈액검사와 영상평가",
  "환자별 개별 마취계획",
  "수술 중 지속적인 생체신호 모니터링",
  "수술 후 통증과 회복상태 확인",
  "필요 시 재활치료와 장기관리 연계",
];

export default function SurgeryPage() {
  return (
    <>
      <PageHero
        title="외과수술센터"
        description="수술 전 평가부터 마취, 수술, 통증관리와 회복까지 한 과정으로 연결합니다."
        breadcrumb={[{ label: "홈", href: "/" }, { label: "외과수술센터" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                <SurgeryIcon className="h-8 w-8" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary-600">
                Surgery Center
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                안전한 수술은
                <br />
                정확한 평가에서 시작합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                수술 자체뿐 아니라 수술 전 검사, 마취계획, 통증관리와 회복 과정까지 환자별로 세심하게 연결합니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={SITE.naverReservation} size="lg">
                  수술 상담 예약
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
              {surgeryAreas.map(([title, description]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <SurgeryIcon className="h-6 w-6" />
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
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Safety First
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              수술 안전관리 원칙
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {safetyPoints.map((item) => (
                <div key={item} className="rounded-2xl bg-primary-50 p-5 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                    <Icon name="check" />
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-6 text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
