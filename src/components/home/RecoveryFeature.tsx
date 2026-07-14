import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function RecoveryFeature() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 shadow-[0_22px_60px_rgba(17,24,39,0.18)]">
          <Image
            src="/images/home/recovery-feature.webp"
            alt="여기로양한방동물병원 수중재활 치료 장면"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/10" />

          <div className="relative z-10 max-w-2xl px-8 py-16 text-white sm:px-14 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
              Recovery Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              회복은 한 번의 치료가 아니라
              <br />
              이어지는 과정입니다
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              침치료, 레이저, 수중재활과 보행평가를 통해 환자의 현재 상태와
              회복 단계에 맞는 계획을 세웁니다.
            </p>

            <Button href="/rehabilitation" variant="secondary" size="lg" className="mt-8">
              재활치료 알아보기
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
