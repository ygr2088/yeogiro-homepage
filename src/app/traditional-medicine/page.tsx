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
  title: "한방진료",
  description: "반려동물 한방진료. 침, 뜸, 한약 처방으로 면역력 강화 및 만성 질환 관리.",
  path: "/traditional-medicine",
  keywords: ["한방", "침치료", "한약", "면역력", "만성질환"],
});

const treatments = [
  {
    title: "침 치료",
    description: "경혈 자극으로 통증 완화, 신경 기능 회복, 면역력 강화에 효과적입니다.",
    indications: ["관절염", "디스크", "마비", "신경통"],
  },
  {
    title: "뜸 치료",
    description: "온열 자극으로 혈액순환을 촉진하고 면역 기능을 활성화합니다.",
    indications: ["만성 설사", "허약", "노령견", "수술 후 회복"],
  },
  {
    title: "한약 처방",
    description: "체질과 증상에 맞는 맞춤 한약으로 근본적인 치료를 목표로 합니다.",
    indications: ["만성 피부염", "소화불량", "면역력 저하", "암 보조치료"],
  },
  {
    title: "부항 치료",
    description: "부항으로 혈액순환을 개선하고 근육 긴장을 완화합니다.",
    indications: ["근육통", "허리 통증", "순환 장애"],
  },
];

export default function TraditionalMedicinePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "한방진료", url: `${SITE.url}/traditional-medicine` },
        ]}
      />
      <PageHero
        title="한방진료"
        description="양방과 한방의 통합 진료로 반려동물의 근본적인 건강 회복을 돕습니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "한방진료" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Traditional Medicine"
                title="양한방 협진, 더 나은 치료"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  여기로 동물병원은 양방 진료와 한방 진료를 함께 제공하는
                  통합 의료 시스템을 운영합니다. 급성 질환은 양방으로,
                  만성 질환과 면역력 관리는 한방으로 접근하여
                  최적의 치료 결과를 도출합니다.
                </p>
                <p>
                  한방 수의사 자격을 보유한 전문의가 반려동물의 체질과
                  증상을 종합적으로 분석하여 맞춤 치료를 제공합니다.
                </p>
              </div>
              <Button href="/contact" className="mt-8">
                한방 상담 예약
                <Icon name="arrow" />
              </Button>
            </div>
            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">한방진료가 효과적인 경우</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "만성 피부염·알레르기",
                  "반복되는 소화기 문제",
                  "관절염·디스크 등 만성 통증",
                  "수술·항암 후 회복",
                  "노령견·노령묘 건강 관리",
                  "면역력 저하·기력 회복",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <Icon name="leaf" className="text-primary-600" />
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
            title="한방 치료 프로그램"
            description="반려동물에게 안전하고 효과적인 한방 치료를 제공합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {treatments.map((treatment) => (
              <Card key={treatment.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="leaf" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{treatment.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{treatment.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase text-gray-500">적응증</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {treatment.indications.map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
