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
  title: "첨단장비",
  description:
    "여기로양한방동물병원은 보행평가센터, 치과 X-ray, 수중재활, 레이저, 체외충격파, 크라이오, 수술·마취 장비를 통해 진단부터 치료와 회복까지 연결합니다.",
  path: "/equipment",
  keywords: [
    "과천 동물병원 장비",
    "EKICO 보행분석",
    "치과 X-ray",
    "강아지 수중재활",
    "체외충격파",
    "동물병원 레이저",
  ],
});

const equipmentGroups = [
  {
    category: "보행평가",
    title: "보행평가센터 · EKICO",
    description:
      "눈으로만 보기 어려운 보행 변화와 체중 분포를 데이터로 확인하여 치료 방향을 세우는 데 활용합니다.",
    items: ["좌우 체중 분포", "보행 균형", "착지 압력", "재활 전후 비교"],
    href: "/ekico",
  },
  {
    category: "치과",
    title: "치과 X-ray · 구강 진단",
    description:
      "겉으로 보이지 않는 치근, 치조골, 치아흡수성병변, 치근 농양 등을 확인해 치료 범위를 판단합니다.",
    items: ["치근 평가", "치조골 확인", "고양이 치아흡수성병변", "발치 계획"],
    href: "/dental-center",
  },
  {
    category: "재활치료",
    title: "수중재활 · 레이저 · 체외충격파 · 크라이오",
    description:
      "통증 관리와 기능 회복을 위해 환자 상태에 맞춰 다양한 재활 장비를 조합합니다.",
    items: ["수중재활", "레이저 치료", "체외충격파", "크라이오"],
    href: "/rehabilitation",
  },
  {
    category: "영상진단",
    title: "방사선 · 초음파",
    description:
      "흉부, 복부, 관절, 장기 상태를 확인하여 질환의 원인과 치료 방향을 평가합니다.",
    items: ["방사선 검사", "초음파 검사", "복부 평가", "관절 평가"],
    href: "/medical-services",
  },
  {
    category: "혈액·검사",
    title: "혈액검사 · 소변검사 · 임상병리",
    description:
      "간, 신장, 췌장, 염증, 빈혈, 전해질 등 전신 상태를 파악해 진료와 수술 전 평가에 활용합니다.",
    items: ["혈액검사", "소변검사", "수술 전 검사", "노령동물 평가"],
    href: "/medical-services",
  },
  {
    category: "수술·마취",
    title: "수술 장비 · 마취 모니터링",
    description:
      "수술 중 생체 신호를 확인하고, 외과·치과 수술을 보다 체계적으로 진행하기 위한 장비를 갖추고 있습니다.",
    items: ["마취 모니터링", "수술 장비", "전기지혈", "회복 관리"],
    href: "/medical-services",
  },
];

const careFlow = [
  "검사",
  "진단",
  "치료 계획",
  "수술·처치",
  "한방재활",
  "보행 재평가",
];

export default function EquipmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "첨단장비", url: `${SITE.url}/equipment` },
        ]}
      />

      <PageHero
        title="첨단장비"
        description="장비를 나열하는 것이 아니라, 진단부터 치료와 회복까지 연결합니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "첨단장비" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Advanced Equipment"
                title="정확히 보고, 안전하게 치료하고, 회복까지 확인합니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  여기로양한방동물병원은 단순히 장비를 보유하는 데서 끝나지 않습니다.
                  검사 결과를 수의사의 임상 판단과 연결해 아이에게 필요한 치료 방향을 세웁니다.
                </p>
                <p>
                  치과 X-ray, 방사선, 초음파, 혈액검사, 수술·마취 장비,
                  재활 장비, EKICO 보행분석을 통해 진단부터 치료, 재활,
                  재평가까지 한 흐름으로 관리합니다.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={SITE.naverReservation}>
                  진료 예약하기
                  <Icon name="arrow" />
                </Button>
                <Button href="/ekico" variant="outline">
                  보행평가센터 보기
                </Button>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                장비는 치료 흐름의 일부입니다
              </h3>
              <div className="mt-5 space-y-3">
                {careFlow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-xl bg-white px-4 py-3 text-sm font-medium text-gray-700">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Equipment System"
            title="진료 목적에 따라 연결되는 장비 시스템"
            description="검사, 치과, 수술, 재활, 보행평가 장비를 환자 상태에 맞게 조합합니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentGroups.map((group) => (
              <Card key={group.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="stethoscope" />
                </div>
                <p className="mb-2 text-sm font-semibold text-primary-600">
                  {group.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {group.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Button href={group.href} variant="outline" className="mt-6">
                  자세히 보기
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              검사 결과를 치료와 회복으로 연결합니다
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              장비 검사는 시작점입니다. 결과를 해석하고 아이에게 맞는 치료 계획으로
              연결하는 것이 여기로양한방동물병원이 중요하게 생각하는 진료입니다.
            </p>
            <Button href={SITE.naverReservation} variant="secondary" className="mt-8">
              진료 예약하기
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}