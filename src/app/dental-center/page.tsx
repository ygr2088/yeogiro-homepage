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
  title: "치과센터",
  description: "반려동물 전문 치과 진료. 스케일링, 발치, 구강 질환 치료 및 예방 관리.",
  path: "/dental-center",
  keywords: ["반려동물 치과", "스케일링", "발치", "구강 질환"],
});

const treatments = [
  {
    title: "스케일링",
    description: "초음파 스케일러로 치석을 제거하고 잇몸 건강을 회복합니다.",
  },
  {
    title: "발치",
    description: "치주염, 치아 파절 등 발치가 필요한 경우 안전하게 시술합니다.",
  },
  {
    title: "구강외과",
    description: "구강 종양, 턱 골절 등 복잡한 구강외과 수술을 진행합니다.",
  },
  {
    title: "치주 치료",
    description: "잇몸 질환을 조기에 발견하고 치료하여 치아 상실을 방지합니다.",
  },
  {
    title: "치아 교정",
    description: "부정교합으로 인한 구강 문제를 교정합니다.",
  },
  {
    title: "구강 검진",
    description: "정기적인 구강 검진으로 치아 건강을 관리합니다.",
  },
];

export default function DentalCenterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "치과센터", url: `${SITE.url}/dental-center` },
        ]}
      />
      <PageHero
        title="치과센터"
        description="반려동물 구강 건강을 위한 전문 치과 진료"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "치과센터" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Card className="bg-gradient-to-br from-primary-50 to-white">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Icon name="tooth" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                구강 건강, 전신 건강의 시작
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                반려동물의 80% 이상이 3세 이후 구강 질환을 경험합니다. 치석과
                잇몸 질환은 심장, 간, 신장 등 전신 건강에도 영향을 미칩니다.
                정기적인 치과 검진과 관리가 필요합니다.
              </p>
            </Card>
            <div>
              <SectionHeading
                eyebrow="Warning Signs"
                title="이런 증상이 보이면 치과 검진이 필요합니다"
                align="left"
              />
              <ul className="space-y-3">
                {[
                  "입 냄새가 심해졌을 때",
                  "음식을 잘 씹지 못할 때",
                  "잇몸이 붓거나 출혈이 있을 때",
                  "침을 많이 흘릴 때",
                  "치아가 흔들리거나 빠졌을 때",
                ].map((symptom) => (
                  <li key={symptom} className="flex items-center gap-3 text-gray-700">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                      !
                    </span>
                    {symptom}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-8">
                치과 예약하기
                <Icon name="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            title="치과 진료 항목"
            description="치과 전문 수의사가 안전한 마취 하에 정밀 시술을 진행합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <Card key={treatment.title} hover>
                <h3 className="font-bold text-gray-900">{treatment.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{treatment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
