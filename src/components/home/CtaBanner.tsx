import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_22px_55px_rgba(116,47,65,0.2)]">
          <Image
            src="/images/home/cta.webp"
            alt="여기로양한방동물병원 상담 장면"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#6F2B3E]/98 via-[#7E3346]/86 to-[#7E3346]/28" />

          <div className="relative z-10 max-w-2xl px-8 py-16 text-white sm:px-14 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Consultation & Reservation
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              진료가 필요하다면
              <br />
              상담부터 시작하세요
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
              현재 상태와 고민을 듣고 필요한 검사와 치료 방향을 함께
              확인하겠습니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
      </div>
    </section>
  );
}
