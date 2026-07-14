import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "의료진 소개",
  description:
    "내과, 외과, 치과, 침치료, 한방재활과 보행평가를 연결하는 여기로양한방동물병원 의료진을 소개합니다.",
  path: "/team",
});

const sharedValues = [
  {
    title: "정확한 진단",
    description:
      "검사 결과와 임상 소견을 함께 검토하여 치료의 우선순위를 정합니다.",
    icon: "stethoscope" as const,
  },
  {
    title: "통합적인 치료",
    description:
      "내과, 외과, 치과, 침치료와 재활을 환자의 상태에 맞게 연결합니다.",
    icon: "heart" as const,
  },
  {
    title: "안전 우선",
    description:
      "마취와 수술 전후의 전신 상태, 통증과 회복 과정을 세심하게 살핍니다.",
    icon: "check" as const,
  },
  {
    title: "평생 관리",
    description:
      "치료가 끝난 뒤에도 예방, 추적검사와 삶의 질 관리를 이어갑니다.",
    icon: "leaf" as const,
  },
];

const doctors = [
  {
    name: "최은영",
    role: "대표원장",
    experience: "21년 이상의 임상경험",
    image: "/images/doctors/choi-eunyoung.webp",
    imagePosition: "object-[50%_38%]",
    summary:
      "한방재활과 통증관리, 노령동물의 장기적인 회복과 삶의 질을 함께 살핍니다.",
    specialties: [
      "한방재활",
      "침치료",
      "통증관리",
      "보행평가",
      "노령질환",
    ],
    highlights: [
      "한방재활 전문 교육과정 이수",
      "침치료·레이저·재활치료 통합 관리",
      "노령·만성질환 환자의 장기 회복 관리",
    ],
    credentials: [
      "한방재활 인증 수의사",
      "통증관리 및 재활치료 진료",
      "보행평가 기반 회복 프로그램 운영",
      "노령동물 장기관리 진료",
    ],
    philosophy:
      "아이의 몸과 마음을 함께 바라보며, 현재 할 수 있는 최선의 회복을 보호자와 함께 찾아갑니다.",
  },
  {
    name: "최우",
    role: "원장",
    experience: "22년 이상의 임상경험",
    image: "/images/doctors/choi-woo.webp",
    imagePosition: "object-[52%_38%]",
    summary:
      "외과와 치과를 기반으로 정확한 진단, 안전한 수술과 회복까지 한 과정으로 연결합니다.",
    specialties: [
      "외과수술",
      "치과진료",
      "내과진료",
      "영상진단",
      "수술 후 관리",
    ],
    highlights: [
      "경북대학교 외과 석사",
      "2차 병원 치과 원장 경력",
      "다양한 외과·치과 수술 경험",
    ],
    credentials: [
      "경북대학교 대학원 외과 석사",
      "2차 진료 동물병원 치과 원장 출신",
      "치과수술 2,800건 이상",
      "마취사고 0건",
    ],
    philosophy:
      "정확한 진단과 충분한 설명을 바탕으로, 환자에게 필요한 치료를 과하지 않게 선택합니다.",
  },
];

const milestones = [
  {
    value: "34,000+",
    label: "누적 진료",
    description: "다양한 내과·외과·치과 환자 진료 경험",
  },
  {
    value: "2,800+",
    label: "치과수술",
    description: "발치부터 보존적 치료까지 폭넓은 치과 경험",
  },
  {
    value: "0건",
    label: "마취사고",
    description: "수술 전 평가와 지속적인 마취 모니터링",
  },
  {
    value: "98.2%",
    label: "수술 성공률",
    description: "최근 3년간 회복 이상 사례 1.8% 기준",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-[#FCFBFA]">
        <div className="container-main py-6 sm:py-8">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-[#EAD8DC] bg-[#F7F0EB] shadow-[0_20px_55px_rgba(74,45,52,0.12)]">
            <Image
              src="/images/doctors/team-hero.webp"
              alt="여기로양한방동물병원 의료진"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[68%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F0EB] via-[#F7F0EB]/78 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#F7F0EB]/25 to-transparent lg:w-[62%]" />

            <div className="relative z-10 flex min-h-[560px] items-center px-7 py-12 sm:px-12 lg:px-16">
              <div className="max-w-[560px]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                  Medical Team
                </p>

                <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                  아이의 건강한 삶을
                  <br />
                  함께 지키는{" "}
                  <span className="text-primary-600">의료진</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-700 sm:text-lg">
                  두 의료진이 각자의 전문성을 연결해 진단, 치료, 수술,
                  통증관리와 재활까지 함께 계획합니다.
                </p>

                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                  {[
                    ["22년+", "임상경력"],
                    ["34,000+", "진료건수"],
                    ["0건", "마취사고"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur"
                    >
                      <p className="text-xl font-bold text-primary-700 sm:text-2xl">
                        {value}
                      </p>
                      <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={SITE.naverReservation} size="lg">
                    진료 예약하기
                    <Icon name="arrow" />
                  </Button>

                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary-300 bg-white/90 px-6 font-semibold text-primary-700 backdrop-blur transition-colors hover:bg-white"
                  >
                    <Icon name="phone" />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Our Doctors
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              대표 의료진 소개
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              풍부한 임상경험과 서로 다른 전문분야를 연결해 아이에게 필요한
              진료를 제공합니다.
            </p>
          </div>

          <div className="space-y-14">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.name}
                className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_16px_45px_rgba(17,24,39,0.08)] lg:min-h-[600px] lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[560px] sm:min-h-[620px] lg:min-h-[600px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} ${doctor.role} 진료 장면`}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className={`object-cover ${doctor.imagePosition}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="text-sm font-semibold text-primary-600">
                    {doctor.experience}
                  </p>

                  <div className="mt-2 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-3xl font-bold text-gray-950">
                      {doctor.name}
                    </h3>
                    <span className="font-semibold text-gray-600">
                      {doctor.role}
                    </span>
                  </div>

                  <p className="mt-5 text-lg leading-8 text-gray-600">
                    {doctor.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-sm font-semibold text-primary-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-7 space-y-3">
                    {doctor.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <blockquote className="mt-8 border-l-4 border-primary-300 pl-5 text-base font-medium leading-7 text-primary-800">
                    “{doctor.philosophy}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Education & Credentials
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              학력·경력·자격
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              실제 임상경험과 전문 교육을 바탕으로 각 환자에게 필요한 진료를
              제공합니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="text-2xl font-bold text-gray-950">
                    {doctor.name}
                  </h3>
                  <span className="font-semibold text-primary-600">
                    {doctor.role}
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  {doctor.credentials.map((credential) => (
                    <li
                      key={credential}
                      className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {credential}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary-700">
                  {item.value}
                </p>
                <h3 className="mt-2 font-bold text-gray-900">
                  {item.label}
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
          <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
                Yeogiro Philosophy
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                정확한 진단, 올바른 치료,
                <br />
                그리고{" "}
                <span className="text-primary-600">따뜻한 마음</span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                질환만 보지 않고 아이의 나이, 생활환경, 통증과 불안,
                보호자의 고민까지 함께 살핍니다.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {sharedValues.map((value) => (
                  <article
                    key={value.title}
                    className="rounded-2xl bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                      <Icon name={value.icon} />
                    </div>

                    <h3 className="mt-4 font-bold text-gray-900">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <Image
                src="/images/doctors/philosophy.webp"
                alt="보호자와 충분히 상담하는 여기로양한방동물병원"
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover object-[55%_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/5 via-transparent to-transparent" />
            </div>
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
              아이의 상태를 의료진과 상담하세요
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
