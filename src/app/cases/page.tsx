import type { Metadata } from "next";
import Image from "next/image";

import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = createMetadata({
  title: "치료사례",
  description:
    "여기로양한방동물병원의 재활, 침치료, 치과, 외과, 내과, 보행평가 치료사례를 소개합니다.",
  path: "/cases",
  keywords: [
    "과천 동물병원 치료사례",
    "강아지 재활 치료사례",
    "강아지 치과 치료사례",
    "강아지 외과 수술",
    "노령견 통증관리",
    "보행평가",
  ],
});

const cases = [
  {
    category: "한방재활",
    title: "보행이 불편한 환자의 단계별 재활 관리",
    pet: "강아지 · 보행 저하",
    image: "/images/cases/rehab-walking.webp",
    imageAlt: "여기로양한방동물병원 수중재활 치료 장면",
    symptom: "뒷다리 힘 저하, 보행 불안정, 산책 시간 감소",
    evaluation: "통증 반응, 관절 가동범위, 근육량과 보행 상태를 함께 평가",
    treatment: "침치료 · 레이저 · 수중재활 · 단계별 운동",
    progress: "치료 반응과 피로도를 확인하며 재활 강도를 조절합니다.",
    link: "/rehabilitation",
    accent: "from-[#7A4452] to-[#9B5B6D]",
  },
  {
    category: "침치료",
    title: "노령 환자의 통증과 움직임 관리",
    pet: "노령견 · 만성 통증",
    image: "/images/cases/acupuncture.webp",
    imageAlt: "여기로양한방동물병원 침치료 장면",
    symptom: "일어나기 어려움, 활동량 감소, 관절 주변 통증 반응",
    evaluation: "통증 부위와 전신상태, 기존 질환 및 복용약을 함께 확인",
    treatment: "침치료 · 레이저 · 생활환경 조정 · 저강도 운동",
    progress: "무리하지 않는 범위에서 일상 움직임과 삶의 질을 관리합니다.",
    link: "/rehabilitation",
    accent: "from-[#6D4C56] to-[#8D6570]",
  },
  {
    category: "치과",
    title: "치주질환 환자의 구강 정밀평가와 치료",
    pet: "강아지 · 치주질환",
    image: "/images/cases/dental.webp",
    imageAlt: "여기로양한방동물병원 치과 진료 장면",
    symptom: "구취, 잇몸 출혈, 딱딱한 음식 회피",
    evaluation: "구강검사와 구강 X-ray를 통해 치근과 치조골 상태를 평가",
    treatment: "스케일링 · 발치 평가 · 국소통증관리 · 홈케어",
    progress: "치료 후 식이와 양치 관리, 정기 구강검진을 이어갑니다.",
    link: "/dental-center",
    accent: "from-[#82505E] to-[#A66E7D]",
  },
  {
    category: "외과",
    title: "수술 전 평가부터 회복까지 연결한 외과 관리",
    pet: "강아지 · 외과수술",
    image: "/images/cases/surgery.webp",
    imageAlt: "여기로양한방동물병원 외과 수술 장면",
    symptom: "수술적 처치가 필요한 연부조직 또는 종괴 질환",
    evaluation: "전신상태, 혈액검사, 영상검사와 마취 위험도를 함께 평가",
    treatment: "개별 마취계획 · 수술 · 통증관리 · 회복 모니터링",
    progress: "수술 후 상태에 따라 식이, 활동량과 재활 계획을 조정합니다.",
    link: "/surgery",
    accent: "from-[#6E3547] to-[#923F58]",
  },
  {
    category: "내과",
    title: "반복되는 증상의 원인을 찾는 내과 진료",
    pet: "강아지 · 만성 내과질환",
    image: "/images/cases/internal.webp",
    imageAlt: "여기로양한방동물병원 초음파 검사 장면",
    symptom: "구토, 식욕 저하, 활력 감소 또는 체중 변화",
    evaluation: "문진, 혈액·소변검사와 영상검사를 통해 원인을 단계적으로 확인",
    treatment: "수액 · 약물 · 식이조절 · 재검진과 장기관리",
    progress: "증상과 검사 수치의 변화를 바탕으로 치료 계획을 조정합니다.",
    link: "/internal-medicine",
    accent: "from-[#66515A] to-[#857079]",
  },
  {
    category: "보행평가",
    title: "눈으로만 보기 어려운 보행 변화를 데이터로 평가",
    pet: "강아지 · 보행 이상",
    image: "/images/cases/gait.webp",
    imageAlt: "여기로양한방동물병원 EKICO 보행평가 장면",
    symptom: "절뚝거림, 체중부하 불균형, 수술 후 보행 변화",
    evaluation: "보행 영상과 분석 데이터를 통해 좌우 균형과 변화를 평가",
    treatment: "통증관리 · 운동재활 · 보호자 생활관리 교육",
    progress: "치료 전후 데이터를 비교해 회복 방향과 강도를 결정합니다.",
    link: "/ekico",
    accent: "from-[#72505D] to-[#936B78]",
  },
];

const process = [
  {
    step: "01",
    title: "현재 상태 확인",
    description: "증상, 병력, 생활환경과 보호자의 고민을 충분히 듣습니다.",
  },
  {
    step: "02",
    title: "검사와 평가",
    description: "필요한 검사와 보행·통증 평가를 통해 문제를 구체화합니다.",
  },
  {
    step: "03",
    title: "치료계획 수립",
    description: "환자의 나이와 전신상태를 고려해 치료의 우선순위를 정합니다.",
  },
  {
    step: "04",
    title: "회복과 추적관리",
    description: "치료 반응을 확인하며 약물, 재활과 생활관리를 조정합니다.",
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

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Treatment Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              증상부터 회복 과정까지 기록합니다
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              아래 사례는 대표적인 진료 과정을 설명하기 위한 예시입니다.
              개인정보 보호를 위해 일부 정보는 익명 처리되며, 치료 결과는
              환자의 상태에 따라 달라질 수 있습니다.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_16px_42px_rgba(17,24,39,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(17,24,39,0.12)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75">{item.pet}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                        증상
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.symptom}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary-600">
                        평가
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.evaluation}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mt-6 rounded-2xl bg-gradient-to-br ${item.accent} p-5 text-white`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/65">
                      치료 방향
                    </p>
                    <p className="mt-2 font-semibold leading-7">
                      {item.treatment}
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl bg-gray-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      치료 과정
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.progress}
                    </p>
                  </div>

                  <Button
                    href={item.link}
                    variant="outline"
                    className="mt-6"
                  >
                    관련 진료센터 보기
                    <Icon name="arrow" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Care Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              여기로의 진료 과정
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-primary-600">
                  STEP {item.step}
                </p>
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="rounded-[2rem] bg-primary-700 px-8 py-14 text-center text-white shadow-[0_18px_45px_rgba(116,47,65,0.2)] sm:px-14 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Consultation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              비슷한 증상으로 고민하고 계신가요?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80">
              현재 증상과 과거 검사자료를 바탕으로 필요한 진료 방향을 함께
              확인하겠습니다.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={SITE.naverReservation}
                variant="secondary"
                size="lg"
              >
                네이버 예약하기
                <Icon name="arrow" />
              </Button>

              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
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
