import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";
import { HeroBenefits } from "./HeroBenefits";
import { HeroStats } from "./HeroStats";

function getCareerYears(baseYear: number, baseExperience: number) {
  return baseExperience + (new Date().getFullYear() - baseYear);
}

export function Hero() {
  const clinicalYears = getCareerYears(2026, 22);
  const rehabilitationDoctorYears = getCareerYears(2026, 21);

  const heroStats = [
    { value: `${clinicalYears}년+`, label: "임상경력", icon: "clinical" as const },
    { value: "11,960+", label: "한방재활 진료", icon: "rehab" as const },
    { value: "14,500+", label: "외과 수술", icon: "surgery" as const },
    { value: "3,500+", label: "치과수술", icon: "dental" as const },
  ];

  const heroBenefits = [
    { title: "두 의료진이 함께하는 통합진료", description: "각 분야의 경험을 연결해 아이의 상태를 함께 판단합니다.", icon: "people" as const },
    { title: "국내외 교육기관 정식 인증 및 수료", description: "미국 교육기관을 포함한 전문 교육과정을 이수했습니다.", icon: "certificate" as const },
  ];

  return (
    <section className="overflow-hidden bg-[#FCFBFA]">
      <div className="container-main py-4 sm:py-6 lg:py-7">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#EAD8DC] bg-[#F7F0EB] shadow-[0_18px_55px_rgba(74,45,52,0.14)]">
          <div className="absolute inset-y-0 right-0 hidden w-[90%] overflow-hidden lg:block">
            <Image
              src="/images/home/home-hero-photo.png"
              alt="여기로양한방동물병원 최은영 대표원장과 최우 원장"
              fill
              priority
              sizes="90vw"
              className="object-cover object-[80%_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F0EB] via-[#F7F0EB]/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#F7F0EB]/96 via-[#F7F0EB]/58 to-transparent" />
          </div>

          <div className="relative z-10 flex min-h-[800px] flex-col">
            <div className="grid flex-1 lg:grid-cols-[40%_60%]">
              <div className="relative z-20 px-6 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-11 lg:px-14 lg:pb-10 lg:pt-12 xl:px-16">
                <div className="max-w-[510px]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold text-[#7E3F4C] shadow-sm backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A95767]" />
                    One-Stop Long Life Care
                  </span>

                  <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    우리 아이,
                    <br />
                    <span className="text-[#944356]">다시 건강하게!</span>
                  </h1>

                  <p className="mt-5 max-w-[500px] text-sm leading-7 text-gray-700 sm:text-base lg:text-lg lg:leading-8">
                    {clinicalYears}년·{rehabilitationDoctorYears}년 임상경력의 의료진이
                    <br className="hidden sm:block" />
                    내과, 외과, 치과, 한방재활,
                    <br />
                    보행평가를 통합하여 아이의 삶 전체를 살핍니다.
                  </p>

                  <div className="mt-8 flex gap-3 sm:gap-4">
                    <Button href={SITE.naverReservation} size="lg" className="h-14 w-[170px] justify-center whitespace-nowrap px-3 text-sm font-semibold sm:w-[175px] sm:text-base">
                      진료 예약하기
                      <Icon name="arrow" />
                    </Button>

                    <Button href="/about" variant="outline" size="lg" className="h-14 w-[170px] justify-center whitespace-nowrap px-3 text-sm font-semibold sm:w-[175px] sm:text-base">
                      병원 소개 보기
                      <Icon name="arrow" />
                    </Button>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-gray-600">
                    과학적 진단과 따뜻한 마음으로
                    <br />
                    아이의 평생 건강을 함께합니다.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block" />

              <div className="relative min-h-[380px] overflow-hidden lg:hidden">
                <Image
                  src="/images/home/home-hero-photo.png"
                  alt="여기로양한방동물병원 의료진"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-[68%_35%]"
                />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F7F0EB] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F0EB] to-transparent" />
              </div>
            </div>

            <div className="relative z-30 px-6 pb-8 sm:px-10 sm:pb-10 lg:px-14 lg:pb-10 xl:px-16">
              <HeroStats items={heroStats} />
              <HeroBenefits items={heroBenefits} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
