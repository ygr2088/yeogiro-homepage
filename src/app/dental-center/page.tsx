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
  description:
    "여기로양한방동물병원 치과센터는 구강 X-ray 기반 진단과 3,500건 이상 치과 수술 집도 경험을 바탕으로 반려동물 치과 진료를 제공합니다.",
  path: "/dental-center",
  keywords: [
    "과천 동물병원 치과",
    "강아지 스케일링",
    "강아지 발치",
    "고양이 구내염",
    "반려동물 치과",
    "구강 X-ray",
  ],
});

const warningSigns = [
  "입 냄새가 심해졌을 때",
  "음식을 한쪽으로만 씹을 때",
  "딱딱한 사료를 피할 때",
  "잇몸이 붓거나 피가 날 때",
  "침을 많이 흘릴 때",
  "얼굴이 붓거나 눈 밑이 부을 때",
  "치아가 흔들리거나 깨졌을 때",
  "고양이가 밥을 먹다 갑자기 도망갈 때",
];

const treatments = [
  {
    title: "구강검진",
    description:
      "치아, 잇몸, 구강 점막, 교합 상태를 확인하고 필요한 검사 방향을 정합니다.",
  },
  {
    title: "구강 X-ray",
    description:
      "눈으로 보이지 않는 치근, 치조골, 흡수성 병변, 치근 농양 등을 확인합니다.",
  },
  {
    title: "스케일링",
    description:
      "치석과 치태를 제거하고 잇몸 상태를 확인해 구강 질환 진행을 관리합니다.",
  },
  {
    title: "발치",
    description:
      "심한 치주염, 치아 파절, 치근 문제 등 발치가 필요한 치아를 평가해 치료합니다.",
  },
  {
    title: "치주질환 치료",
    description:
      "잇몸 염증과 치주 조직 손상을 평가하고 통증과 감염 관리를 함께 진행합니다.",
  },
  {
    title: "고양이 구내염·치아흡수성병변",
    description:
      "고양이에서 흔한 만성 구내염과 치아흡수성병변을 구강검사와 X-ray로 평가합니다.",
  },
  {
    title: "치아 파절·외상",
    description:
      "깨진 치아, 노출된 치수, 구강 외상 상태를 확인하고 치료 방향을 안내합니다.",
  },
  {
    title: "노령동물 치과",
    description:
      "나이, 기저질환, 마취 위험도를 함께 고려해 안전한 치과 치료 계획을 세웁니다.",
  },
];

const process = [
  { step: "01", title: "상담 및 문진", desc: "입 냄새, 식욕, 통증 행동, 기저질환을 확인합니다." },
  { step: "02", title: "구강검사", desc: "치석, 잇몸, 치아 흔들림, 파절, 구강 종양 여부를 살핍니다." },
  { step: "03", title: "전신 상태 평가", desc: "마취 전 혈액검사와 필요한 검사를 통해 안전성을 확인합니다." },
  { step: "04", title: "구강 X-ray", desc: "치근과 치조골 상태까지 확인해 치료 범위를 결정합니다." },
  { step: "05", title: "치과 치료", desc: "스케일링, 발치, 치주치료 등 필요한 치료를 진행합니다." },
  { step: "06", title: "회복 및 홈케어", desc: "통증관리, 식이, 약 복용, 양치 관리 방법을 안내합니다." },
];

const doctorPoints = [
  "22년 임상경력",
  "51,000건 이상 임상 진료",
  "4,000건 이상 외과 수술 집도",
  "3,500건 이상 치과 수술 집도",
  "경북대학교 수의대학원 외과 석사 졸업",
  "SCI 및 국내외 학술지 논문 11편 발표",
];

const differences = [
  {
    title: "구강 X-ray 기반 진단",
    desc: "겉으로 보이는 치석만 보지 않고, 치근과 치조골까지 확인해 치료 방향을 세웁니다.",
  },
  {
    title: "치과와 전신 상태를 함께 고려",
    desc: "노령동물, 심장·신장·간 질환 등 기저질환을 함께 고려해 마취와 치료 계획을 세웁니다.",
  },
  {
    title: "보존과 발치의 균형",
    desc: "무조건 발치하거나 무조건 보존하지 않고, 통증과 예후를 기준으로 설명드립니다.",
  },
  {
    title: "수술 후 회복까지 관리",
    desc: "치료 후 통증관리, 식이, 약 복용, 재검진 계획까지 이어서 안내합니다.",
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
        description="치아 하나가 아니라, 아이의 통증과 삶의 질을 함께 생각합니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "치과센터" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Dental Center"
                title="구강 X-ray 기반으로 보이지 않는 통증까지 살핍니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  반려동물의 치과 질환은 단순히 입 냄새나 치석의 문제가 아닐 수 있습니다.
                  치주염, 치아 파절, 치근 농양, 고양이 치아흡수성병변은 통증과 식욕 저하,
                  전신 건강 문제로 이어질 수 있습니다.
                </p>
                <p>
                  여기로양한방동물병원 치과센터는 구강 X-ray와 전신 상태 평가를 바탕으로
                  스케일링, 발치, 치주질환, 고양이 구내염, 노령동물 치과 진료를 진행합니다.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={SITE.naverReservation}>
                  치과 진료 예약
                  <Icon name="arrow" />
                </Button>
                <Button href="/team" variant="outline">
                  의료진 보기
                </Button>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                이런 증상이 보이면 치과 검진이 필요합니다
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {warningSigns.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-700"
                  >
                    <Icon name="check" className="text-primary-600" />
                    {item}
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
            eyebrow="Dental Treatments"
            title="치과 진료 항목"
            description="치석 제거부터 고양이 만성 구내염, 노령동물 치과까지 구강 상태와 전신 상태를 함께 평가합니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment) => (
              <Card key={treatment.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="tooth" />
                </div>
                <h3 className="font-bold text-gray-900">{treatment.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {treatment.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Dental Process"
                title="치과 진료는 단계적으로 진행합니다"
                align="left"
              />
              <div className="space-y-4">
                {process.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Dental Doctor"
                title="최우 원장의 치과·외과 기반 진료"
                align="left"
              />
              <p className="mb-6 leading-relaxed text-gray-600">
                최우 원장은 치과 수술과 외과 수술 경험을 바탕으로 구강 질환만 따로 보지 않고,
                마취 안전성, 전신 건강, 통증관리, 회복 과정까지 함께 고려합니다.
              </p>

              <Card className="border-primary-100 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  치과 진료 경력 및 임상 성과
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  {doctorPoints.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="check" className="mt-0.5 text-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/team" variant="outline" className="mt-6">
                  의료진 자세히 보기
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Why Dental Center"
            title="여기로 치과센터의 진료 기준"
            description="겉으로 보이는 치석만이 아니라 통증, 치근, 전신 상태, 회복 과정을 함께 봅니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differences.map((item) => (
              <Card key={item.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="check" />
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

      <section className="section-padding">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              입 냄새, 치석, 식욕 변화가 보인다면
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              구강 통증은 아이가 말로 표현하기 어렵습니다. 치과 검진을 통해
              현재 구강 상태와 필요한 치료 방향을 확인해 보세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={SITE.naverReservation} variant="secondary">
                치과 진료 예약
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