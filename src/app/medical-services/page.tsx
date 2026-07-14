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
  title: "진료과목",
  description:
    "여기로양한방동물병원은 내과, 외과, 치과, 노령동물 진료, 한방재활, 보행평가를 통합적으로 고려하는 과천 동물병원입니다.",
  path: "/medical-services",
  keywords: [
    "과천 동물병원",
    "동물병원 내과",
    "동물병원 외과",
    "노령견 진료",
    "강아지 수술",
    "동물병원 건강검진",
  ],
});

const services = [
  {
    title: "내과 진료",
    description:
      "소화기, 호흡기, 심장, 비뇨기, 내분비, 피부 등 다양한 만성질환과 일반 질환을 평가합니다.",
    items: ["구토·설사", "피부·알러지", "심장·호흡기", "신장·비뇨기", "내분비 질환"],
  },
  {
    title: "외과 진료",
    description:
      "수술이 필요한 상황인지, 비수술 관리가 가능한지 먼저 평가하고 치료 방향을 안내합니다.",
    items: ["중성화", "종양 수술", "상처 봉합", "소화기 이물", "비뇨기 수술"],
  },
  {
    title: "노령동물 진료",
    description:
      "나이, 기저질환, 통증, 보행, 식욕, 구강 상태를 함께 살피며 삶의 질 관리를 돕습니다.",
    items: ["노령견 검진", "만성질환 관리", "통증 관리", "영양 상담", "보행 변화 평가"],
  },
  {
    title: "건강검진",
    description:
      "증상이 나타나기 전 조기 발견을 목표로 혈액검사, 소변검사, 영상검사 등을 조합합니다.",
    items: ["혈액검사", "소변검사", "방사선", "초음파", "수술 전 검사"],
  },
  {
    title: "통증 관리",
    description:
      "관절염, 디스크, 수술 후 통증, 노령성 통증을 평가하고 약물·재활·한방치료를 함께 고려합니다.",
    items: ["관절 통증", "디스크 통증", "수술 후 통증", "노령견 통증", "보행 불편"],
  },
  {
    title: "예방 진료",
    description:
      "예방접종, 구충, 체중관리, 구강관리, 생애주기별 검진을 통해 질병을 미리 관리합니다.",
    items: ["예방접종", "심장사상충", "구충", "체중관리", "구강관리"],
  },
];

const surgeryStrengths = [
  "최우 원장 4,000건 이상 외과 수술 집도",
  "최우 원장 3,500건 이상 치과 수술 집도",
  "최은영 대표원장 10,500건 이상 외과 수술 집도",
  "수술 전 전신 상태 평가",
  "수술 후 한방재활 연계",
];

const process = [
  { step: "01", title: "문진·상담", desc: "증상, 생활습관, 병력, 나이, 기존 질환을 확인합니다." },
  { step: "02", title: "진찰·검사", desc: "필요한 검사로 질환의 원인과 현재 상태를 평가합니다." },
  { step: "03", title: "치료 방향 결정", desc: "수술, 약물, 재활, 한방치료 중 필요한 방향을 설명드립니다." },
  { step: "04", title: "치료·수술", desc: "아이 상태에 맞춰 치료 또는 수술을 진행합니다." },
  { step: "05", title: "회복 관리", desc: "통증관리, 재활, 식이, 재검진 계획까지 이어서 관리합니다." },
];

export default function MedicalServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "진료과목", url: `${SITE.url}/medical-services` },
        ]}
      />

      <PageHero
        title="진료과목"
        description="내과·외과·치과·한방재활·보행평가를 연결해 아이의 상태를 통합적으로 살핍니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "진료과목" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Medical Services"
            title="증상 하나가 아니라 몸 전체의 흐름을 봅니다"
            description="다리가 불편해 보여도 원인은 관절, 신경, 통증, 만성질환, 구강 문제 등 여러 곳에서 시작될 수 있습니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="stethoscope" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check" className="text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Surgery & Recovery"
                title="수술이 필요한지, 비수술 관리가 가능한지 함께 판단합니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  모든 질환이 수술로만 해결되는 것은 아닙니다. 반대로 수술이 필요한 상황을
                  놓쳐서도 안 됩니다.
                </p>
                <p>
                  여기로양한방동물병원은 외과적 판단, 전신 상태, 통증, 보행 상태를 함께 평가해
                  수술 여부와 회복 계획을 보호자님께 설명드립니다.
                </p>
                <p>
                  수술 후에는 통증관리와 한방재활, 보행평가를 연계해 회복 과정을 함께 관리합니다.
                </p>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">외과·수술 진료 기반</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                {surgeryStrengths.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icon name="check" className="mt-0.5 text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Process"
            title="진료는 단계적으로 진행합니다"
            description="검사부터 치료, 회복관리까지 보호자가 이해할 수 있도록 설명드립니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <Card key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              증상이 애매할수록, 먼저 진료 방향을 확인하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              지금 수술이 필요한지, 약물치료가 적절한지, 재활을 함께 해야 하는지
              아이의 상태를 기준으로 설명드리겠습니다.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={SITE.naverReservation} variant="secondary">
                진료 예약하기
                <Icon name="arrow" />
              </Button>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
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