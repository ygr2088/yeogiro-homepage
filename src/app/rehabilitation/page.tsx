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
  title: "한방재활센터",
  description:
    "여기로양한방동물병원 한방재활센터는 디스크, 슬개골, 관절염, 노령견 보행 문제, 수술 후 회복을 위한 양·한방 통합 재활 진료를 제공합니다.",
  path: "/rehabilitation",
  keywords: [
    "과천 한방재활",
    "강아지 재활",
    "강아지 디스크",
    "강아지 슬개골",
    "노령견 재활",
    "침치료",
    "수중재활",
  ],
});

const targets = [
  "디스크 질환",
  "슬개골 탈구",
  "십자인대 손상",
  "관절염",
  "수술 후 회복",
  "노령견 보행 문제",
  "만성 통증",
  "근감소·근위축",
];

const programs = [
  {
    title: "침치료",
    description:
      "통증과 긴장을 줄이고 신경·근육 기능 회복을 돕기 위해 환자 상태에 맞춰 적용합니다.",
    benefits: ["통증 관리", "신경 기능 보조", "보행 회복 보조"],
  },
  {
    title: "약침·주사 치료",
    description:
      "염증과 통증 상태를 평가한 뒤 필요한 경우 국소 치료와 함께 회복 방향을 조정합니다.",
    benefits: ["염증 관리", "통증 완화", "국소 치료"],
  },
  {
    title: "레이저 치료",
    description:
      "조직 회복과 통증 완화를 목적으로 재활 과정에서 보조적으로 활용합니다.",
    benefits: ["통증 완화", "조직 회복 보조", "염증 관리"],
  },
  {
    title: "수중재활",
    description:
      "물의 부력을 활용해 관절 부담을 줄이고 근력과 보행 기능 회복을 돕습니다.",
    benefits: ["관절 부담 감소", "근력 회복", "보행 훈련"],
  },
  {
    title: "체외충격파",
    description:
      "만성 통증과 근골격계 문제에서 통증 관리와 회복 보조를 위해 활용합니다.",
    benefits: ["만성 통증 관리", "근골격계 관리", "회복 보조"],
  },
  {
    title: "크라이오",
    description:
      "냉각 치료를 통해 통증과 염증 반응을 조절하는 데 도움을 줍니다.",
    benefits: ["염증 관리", "통증 완화", "회복기 관리"],
  },
];

const process = [
  { step: "01", title: "응급 여부 평가", desc: "수술이나 응급 처치가 우선인지 먼저 확인합니다." },
  { step: "02", title: "통증·보행 평가", desc: "통증 부위, 신경 반응, 관절 움직임, 보행 상태를 살핍니다." },
  { step: "03", title: "비수술 가능성 검토", desc: "수술이 필요한 상황인지, 재활로 시작할 수 있는지 판단합니다." },
  { step: "04", title: "맞춤 재활 계획", desc: "침치료, 물리치료, 운동재활, 보행평가를 조합합니다." },
  { step: "05", title: "단계별 치료", desc: "통증 감소 → 기능 회복 → 근력 강화 순서로 진행합니다." },
  { step: "06", title: "재평가", desc: "보행과 통증 변화를 확인하며 치료 강도를 조절합니다." },
];

const doctorPoints = [
  "21년 임상경력",
  "11,000건 이상 한방재활 진료",
  "10,500건 이상 외과 수술 집도",
  "CVA 수의침술",
  "CCRV 수의재활",
  "CCRT 반려견 재활",
  "CVTP 수의 추나요법",
  "CVMMP 수의 관절·척추 교정",
];

export default function RehabilitationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "한방재활센터", url: `${SITE.url}/rehabilitation` },
        ]}
      />

      <PageHero
        title="한방재활센터"
        description="수술 전 비수술 가능성부터 수술 후 회복까지, 아이의 상태에 맞는 재활 방향을 함께 찾습니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "한방재활센터" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Integrative Rehabilitation"
                title="다시 걷기 위한 회복은 진단에서 시작됩니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  디스크, 슬개골, 관절염, 노령성 보행 변화는 단순히 다리만의 문제가
                  아닐 수 있습니다. 신경, 근육, 관절, 통증, 생활 습관을 함께 살펴야
                  회복 방향을 세울 수 있습니다.
                </p>
                <p>
                  여기로양한방동물병원 한방재활센터는 수술이 필요한 상황인지,
                  비수술적 회복 가능성이 있는지 먼저 평가하고, 아이의 상태에 맞는
                  치료 계획을 세웁니다.
                </p>
                <p>
                  침치료, 약침, 레이저, 수중재활, 체외충격파, 크라이오, 보행평가를
                  환자 상태에 맞게 조합하여 통증 관리와 기능 회복을 돕습니다.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={SITE.naverReservation}>
                  재활 상담 예약
                  <Icon name="arrow" />
                </Button>
                <Button href="/ekico" variant="outline">
                  보행평가센터 보기
                </Button>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                한방재활이 필요한 경우
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {targets.map((item) => (
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
            eyebrow="Treatment Programs"
            title="아이 상태에 맞춰 조합하는 재활 프로그램"
            description="한 가지 치료만 고정적으로 적용하지 않고, 통증과 보행 상태에 따라 치료 구성을 조절합니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="heart" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {program.description}
                </p>
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

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Rehabilitation Process"
                title="재활은 단계적으로 진행합니다"
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
                eyebrow="Doctor"
                title="최은영 대표원장의 한방재활 진료"
                align="left"
              />
              <p className="mb-6 leading-relaxed text-gray-600">
                최은영 대표원장은 디스크, 슬개골, 보행재활, 통증관리 진료를
                중심으로 한방재활 진료 경험과 관련 자격을 임상에 적용하고 있습니다.
              </p>

              <Card className="border-primary-100 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  한방재활 진료 경력 및 자격
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
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              수술이 필요한지, 재활로 시작할 수 있는지 먼저 확인하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              아이의 통증, 보행, 신경 반응, 관절 상태를 함께 평가하고
              현재 상태에 맞는 치료 방향을 안내드립니다.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={SITE.naverReservation} variant="secondary">
                재활 상담 예약
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