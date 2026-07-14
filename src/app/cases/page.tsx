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
  title: "치료사례",
  description:
    "여기로양한방동물병원의 디스크, 슬개골, 한방재활, 치과, 노령견, 고양이 치료사례를 소개합니다.",
  path: "/cases",
  keywords: [
    "과천 동물병원 치료사례",
    "강아지 디스크 치료사례",
    "강아지 슬개골 치료사례",
    "강아지 재활 치료사례",
    "고양이 치과",
    "노령견 재활",
  ],
});

const categories = [
  "전체",
  "디스크",
  "슬개골",
  "한방재활",
  "치과",
  "노령견",
  "내과",
  "고양이",
];

const cases = [
  {
    category: "한방재활",
    title: "디스크로 보행이 불편했던 아이의 재활 관리",
    pet: "강아지 · 보행 이상",
    symptom: "뒷다리 힘 빠짐, 보행 불안정, 계단 거부",
    diagnosis: "신경계 문제와 통증 가능성을 함께 평가",
    treatment: "통증관리 · 침치료 · 레이저 · 단계별 운동재활",
    progress: "통증 반응과 보행 상태를 주기적으로 확인하며 재활 강도를 조절",
    status: "보호자와 함께 일상 보행 상태를 확인하며 관리 중",
    link: "/rehabilitation",
  },
  {
    category: "슬개골",
    title: "슬개골 질환으로 절뚝이던 아이의 통합 관리",
    pet: "강아지 · 슬개골",
    symptom: "한쪽 다리를 들고 걷거나 산책 중 멈추는 증상",
    diagnosis: "슬개골, 관절 통증, 근육 상태를 함께 평가",
    treatment: "통증관리 · 보행평가 · 운동재활 · 생활관리",
    progress: "보행 변화와 통증 반응을 기준으로 치료 계획을 조정",
    status: "재활과 체중관리, 생활습관 관리를 병행",
    link: "/ekico",
  },
  {
    category: "치과",
    title: "치주염과 구취가 심했던 아이의 치과 치료",
    pet: "강아지 · 치주질환",
    symptom: "입 냄새, 잇몸 염증, 딱딱한 음식 회피",
    diagnosis: "구강검사와 구강 X-ray를 통해 치근과 잇몸 상태 평가",
    treatment: "스케일링 · 발치 평가 · 통증관리 · 홈케어 안내",
    progress: "치료 후 식이와 양치 관리 방법을 보호자에게 안내",
    status: "정기 구강검진과 홈케어를 통해 관리 중",
    link: "/dental-center",
  },
  {
    category: "노령견",
    title: "노령견의 관절 통증과 근감소 관리",
    pet: "노령견 · 보행 저하",
    symptom: "산책 시간 감소, 앉았다 일어날 때 불편함",
    diagnosis: "관절, 근육, 체중, 만성질환 여부를 함께 평가",
    treatment: "통증관리 · 저강도 재활 · 영양·생활관리",
    progress: "무리하지 않는 범위에서 단계적으로 운동량을 조절",
    status: "삶의 질 유지를 목표로 장기 관리 중",
    link: "/medical-services",
  },
  {
    category: "고양이",
    title: "고양이 구강 통증과 식욕 저하 관리",
    pet: "고양이 · 구강질환",
    symptom: "밥을 먹다 멈춤, 침 흘림, 예민한 반응",
    diagnosis: "구강검사와 필요 시 X-ray를 통해 치아흡수성병변과 구내염 평가",
    treatment: "통증관리 · 치과 치료 계획 · 식이 관리",
    progress: "통증 반응과 식욕 변화를 기준으로 치료 방향 조정",
    status: "보호자와 함께 식욕과 구강 상태를 추적 관리",
    link: "/dental-center",
  },
  {
    category: "내과",
    title: "반복되는 구토와 식욕 저하를 보인 아이의 내과 관리",
    pet: "강아지 · 내과",
    symptom: "구토, 식욕 저하, 활력 저하",
    diagnosis: "혈액검사, 영상검사, 식이력 확인을 통해 원인 평가",
    treatment: "수액 · 약물치료 · 식이 조절 · 재검진 계획",
    progress: "증상 변화와 검사 결과를 바탕으로 치료 계획 조정",
    status: "재발 방지를 위해 식이와 생활습관을 관리",
    link: "/medical-services",
  },
];

export default function CasesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "치료사례", url: `${SITE.url}/cases` },
        ]}
      />

      <PageHero
        title="치료사례"
        description="비슷해 보이는 증상도 원인은 다를 수 있습니다. 아이의 상태에 맞춰 진단과 치료 방향을 함께 찾아갑니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "치료사례" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Treatment Cases"
            title="증상부터 회복 과정까지 기록합니다"
            description="개인정보 보호를 위해 일부 정보는 익명 처리되며, 치료 결과는 환자 상태에 따라 달라질 수 있습니다."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-700"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-8">
            {cases.map((caseItem) => (
              <Card key={caseItem.title} hover className="overflow-hidden p-0">
                <div className="grid lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white lg:col-span-1">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                      {caseItem.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold">{caseItem.title}</h3>
                    <p className="mt-3 text-sm text-primary-100">{caseItem.pet}</p>
                  </div>

                  <div className="p-8 lg:col-span-2">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          증상
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {caseItem.symptom}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          평가
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {caseItem.diagnosis}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          치료 방향
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {caseItem.treatment}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          현재 관리
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {caseItem.status}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        치료 과정
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {caseItem.progress}
                      </p>
                    </div>

                    <Button href={caseItem.link} variant="outline" className="mt-6">
                      관련 진료센터 보기
                      <Icon name="arrow" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main text-center">
          <SectionHeading
            title="우리 아이도 비슷한 증상인가요?"
            description="같은 증상처럼 보여도 원인과 치료 방향은 다를 수 있습니다. 먼저 현재 상태를 확인해 보세요."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={SITE.naverReservation} size="lg">
              진료 상담 예약
              <Icon name="arrow" />
            </Button>
            <Button href="/ekico" variant="outline" size="lg">
              보행평가센터 보기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}