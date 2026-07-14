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
  title: "보행평가센터 | EKICO 보행분석",
  description:
    "걸음이 달라졌다면 몸이 보내는 신호일 수 있습니다. 여기로양한방동물병원 보행평가센터는 EKICO 보행분석을 통해 디스크, 슬개골, 관절염, 노령견 보행 변화를 평가합니다.",
  path: "/ekico",
  keywords: [
    "과천 보행분석",
    "EKICO",
    "보행평가센터",
    "강아지 절뚝거림",
    "강아지 디스크",
    "강아지 슬개골",
    "노령견 재활",
  ],
});

const analysisItems = [
  "좌우 체중 분포",
  "보행 균형",
  "보폭 변화",
  "착지 압력",
  "보행 대칭성",
  "재활 전후 변화",
];

const indications = [
  "절뚝거리는 아이",
  "디스크 진단 또는 의심",
  "슬개골 탈구",
  "십자인대 손상",
  "관절염",
  "노령견 보행 변화",
  "수술 전·후 평가",
  "재활치료 중 경과 확인",
  "한쪽 다리에 체중을 잘 싣지 않는 아이",
];

const process = [
  { step: "01", title: "문진", desc: "보호자가 느낀 걸음 변화와 병력을 확인합니다." },
  { step: "02", title: "기본 진찰", desc: "통증, 관절, 신경, 근육 상태를 함께 평가합니다." },
  { step: "03", title: "보행 촬영", desc: "아이의 자연스러운 걸음을 관찰하고 기록합니다." },
  { step: "04", title: "EKICO 분석", desc: "압력과 균형, 보행 패턴을 데이터로 확인합니다." },
  { step: "05", title: "수의사 판독", desc: "데이터와 임상 진찰 결과를 함께 해석합니다." },
  { step: "06", title: "치료 계획", desc: "침치료, 재활, 운동관리 등 필요한 방향을 안내합니다." },
];

const careFlow = [
  "보행평가",
  "원인 분석",
  "통증 관리",
  "침치료",
  "레이저·물리치료",
  "운동 재활",
  "재평가",
];

const doctorPoints = [
  "21년 임상경력",
  "11,000건 이상 한방재활 진료",
  "10,500건 이상 외과 수술 집도",
  "디스크·슬개골·보행재활 중심 진료",
  "CVA · CCRV · CCRT · CVTP · CVMMP 등 한방재활 자격",
];

export default function EkicoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "보행평가센터", url: `${SITE.url}/ekico` },
        ]}
      />

      <PageHero
        title="보행평가센터"
        description="걸음이 달라졌다면 몸이 보내는 신호일 수 있습니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "보행평가센터" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="EKICO Gait Analysis"
                title="눈으로만 보던 걸음을 데이터로 확인합니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  아이는 말을 하지 못합니다. 대신 걸음, 자세, 움직임의 변화로
                  몸의 불편함을 보여줍니다.
                </p>
                <p>
                  절뚝거림, 보폭 변화, 계단을 싫어하는 행동, 앉았다 일어날 때의
                  머뭇거림은 관절, 신경, 척추, 통증, 노령성 변화의 신호일 수 있습니다.
                </p>
                <p>
                  여기로양한방동물병원 보행평가센터는 EKICO 보행분석과 수의사의
                  임상 진찰을 함께 활용해 치료 방향을 세웁니다.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={SITE.naverReservation}>
                  보행평가 예약
                  <Icon name="arrow" />
                </Button>
                <Button href="/rehabilitation" variant="outline">
                  한방재활센터 보기
                </Button>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                EKICO는 무엇을 분석할까요?
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {analysisItems.map((item) => (
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
            eyebrow="When to Check"
            title="이런 아이들에게 보행평가를 권합니다"
            description="작은 걸음 변화가 통증과 질환의 초기 신호일 수 있습니다."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {indications.map((item) => (
              <Card key={item} hover>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                    <Icon name="check" />
                  </span>
                  <h3 className="font-bold text-gray-900">{item}</h3>
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
                eyebrow="Process"
                title="보행평가는 이렇게 진행됩니다"
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
                eyebrow="Treatment Connection"
                title="보행평가에서 끝나지 않습니다"
                align="left"
              />
              <p className="mb-6 leading-relaxed text-gray-600">
                보행분석 결과는 단순한 수치가 아니라 치료 방향을 정하는 기준이 됩니다.
                통증관리, 침치료, 재활운동, 물리치료, 재평가까지 한 흐름으로 연결합니다.
              </p>

              <div className="grid gap-3">
                {careFlow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold text-primary-600">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-xl border border-gray-100 bg-white px-4 py-3 font-medium text-gray-800">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Rehabilitation Doctor"
                title="보행평가 결과를 한방재활 진료로 연결합니다"
                align="left"
              />
              <p className="leading-relaxed text-gray-600">
                최은영 대표원장은 디스크, 슬개골, 보행재활, 통증관리 진료를 중심으로
                한방재활과 외과적 판단을 함께 고려합니다. 보행평가는 장비로 끝나는 검사가 아니라,
                아이에게 맞는 회복 방향을 찾기 위한 시작점입니다.
              </p>
            </div>

            <Card className="border-primary-100 bg-white">
              <h3 className="text-xl font-bold text-gray-900">최은영 대표원장</h3>
              <p className="mt-2 font-semibold text-primary-600">
                한방재활 · 디스크 · 슬개골 · 보행재활
              </p>
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
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              아이의 걸음이 예전과 다르다면
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              작은 변화가 중요한 신호일 수 있습니다. 보행평가부터 시작해
              현재 상태와 치료 방향을 함께 확인해 보세요.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={SITE.naverReservation} variant="secondary">
                보행평가 예약
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