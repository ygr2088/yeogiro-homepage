import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "재활치료",
  description: "수술 후 회복, 관절 질환, 만성 통증 관리를 위한 반려동물 맞춤형 재활치료 프로그램.",
  path: "/rehabilitation",
  keywords: ["재활치료", "물리치료", "관절", "수술 후 회복"],
});

const programs = [
  {
    title: "수중 treadmill",
    description: "관절 부담을 줄이면서 근력을 회복하는 수중 운동 치료입니다.",
    benefits: ["관절염 완화", "체중 관리", "수술 후 회복"],
  },
  {
    title: "레이저 치료",
    description: "저출력 레이저로 염증을 줄이고 조직 재생을 촉진합니다.",
    benefits: ["통증 완화", "상처 치유", "염증 감소"],
  },
  {
    title: "전기 자극 치료",
    description: "약한 전기 자극으로 근육 수축을 유도하여 근력을 회복합니다.",
    benefits: ["근육 위축 방지", "신경 손상 회복", "통증 관리"],
  },
  {
    title: "수동 운동 치료",
    description: "전문 재활 치료사의 도수치료로 관절 가동 범위를 회복합니다.",
    benefits: ["관절 경직 완화", "유연성 향상", "균형 회복"],
  },
];

export default function RehabilitationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "재활치료", url: `${SITE.url}/rehabilitation` },
        ]}
      />
      <PageHero
        title="재활치료"
        description="수술 후 빠른 회복과 만성 통증 관리를 위한 전문 재활 프로그램"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "재활치료" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Rehabilitation"
                title="왜 재활치료가 필요할까요?"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  수술만으로는 완전한 회복이 어렵습니다. 체계적인 재활치료는
                  회복 속도를 높이고, 재발을 방지하며, 반려동물의 삶의 질을
                  크게 향상시킵니다.
                </p>
                <p>
                  여기로 동물병원 재활센터는 수의 재활 전문의와 물리치료사가
                  개별 맞춤 프로그램을 설계하여 1:1 케어를 제공합니다.
                </p>
              </div>
              <Button href="/contact" className="mt-8">
                재활 상담 예약
                <Icon name="arrow" />
              </Button>
            </div>
            <Card className="bg-primary-50 border-primary-100">
              <h3 className="text-lg font-bold text-gray-900">재활치료 대상</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "슬개골·십자인대 수술 후",
                  "관절염·디스크 질환",
                  "골절 수술 후 회복",
                  "비만 관리",
                  "노령견·노령묘 기능 유지",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <Icon name="check" className="text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            title="재활 프로그램"
            description="최신 장비와 전문 인력으로 다양한 재활 치료를 제공합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="heart" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{program.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
