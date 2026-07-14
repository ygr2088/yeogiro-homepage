import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const reasons = [
  {
    title: "양·한방 통합진료",
    description: "약물, 수술, 침치료와 재활을 환자 상태에 맞게 연결합니다.",
  },
  {
    title: "외과 기반 의료진 2인",
    description: "복잡한 문제를 두 의료진이 함께 검토하고 치료 방향을 정합니다.",
  },
  {
    title: "치과·외과 전문성",
    description: "구강질환부터 연부조직 수술까지 체계적으로 접근합니다.",
  },
  {
    title: "보호자와 함께 결정",
    description: "검사 결과와 치료 선택지를 충분히 설명합니다.",
  },
  {
    title: "보행평가센터 운영",
    description: "치료 전후의 보행 변화를 데이터로 비교합니다.",
  },
  {
    title: "수술 후 재활 연계",
    description: "수술로 끝나지 않고 통증관리와 회복까지 이어갑니다.",
  },
];

const numbers = [
  { value: "22년+", label: "임상경력" },
  { value: "34,200+", label: "진료건수" },
  { value: "11,960+", label: "한방재활 진료" },
  { value: "3,500+", label: "치과수술" },
];

export function WhyUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="grid overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_18px_50px_rgba(17,24,39,0.08)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[520px]">
            <Image
              src="/images/home/why-us.webp"
              alt="여기로양한방동물병원 실제 진료 장면"
              fill
              sizes="(max-width:1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="text-sm font-medium text-white/75">
                경험을 숫자로, 진료를 결과로
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {numbers.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/20 bg-white/12 p-4 text-white backdrop-blur-md"
                  >
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="mt-1 text-xs text-white/75">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Why Yeogiro
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              왜 여기로 양한방
              <br className="hidden sm:block" />
              동물병원인가요?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              정확한 진단과 통합치료로 아이에게 필요한 치료를 한 과정으로
              설계합니다.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
                      <Icon name="check" />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Button href="/about" className="mt-8">
              병원 소개 보기
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
