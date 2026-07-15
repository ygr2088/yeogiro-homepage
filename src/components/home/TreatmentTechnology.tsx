import Link from "next/link";

import {
  TreatmentIcon,
  type TreatmentIconName,
} from "@/components/icons/TreatmentIcons";
import { Icon } from "@/components/ui/Icon";

type TreatmentItem = {
  title: string;
  description: string;
  icon: TreatmentIconName;
  href: string;
  instagram?: string;
};

const treatments: TreatmentItem[] = [
  {
    title: "침치료",
    description:
      "통증과 신경·근골격계 상태를 평가해 개별 환자에게 맞춘 침치료를 시행합니다.",
    icon: "acupuncture",
    href: "/rehabilitation",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/DZ6t4J2s_wq/",
  },
  {
    title: "수중재활",
    description:
      "부력을 이용해 관절 부담을 줄이면서 보행과 근력 회복을 단계적으로 돕습니다.",
    icon: "hydrotherapy",
    href: "/rehabilitation",
    instagram:
      "https://www.instagram.com/yeogiro_amc/p/DX6cJn2OOJt/",
  },
  {
    title: "고강도 레이저",
    description:
      "통증 완화와 조직 회복을 목표로 환자의 상태에 맞춰 레이저 치료를 적용합니다.",
    icon: "laser",
    href: "/rehabilitation",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/Daw_tELJsIY/",
  },
  {
    title: "체외충격파",
    description:
      "만성 근골격계 통증과 기능 저하 환자에게 비수술적 통증관리를 제공합니다.",
    icon: "shockwave",
    href: "/rehabilitation",
  },
  {
    title: "보행분석",
    description:
      "눈으로 놓치기 쉬운 좌우 체중부하와 움직임 변화를 데이터로 비교합니다.",
    icon: "gait",
    href: "/ekico",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/DaM2_Nmh3p4/",
  },
  {
    title: "키네시올로지 테이핑",
    description:
      "관절과 근육의 움직임을 보조하고 일상 활동을 편안하게 유지하도록 돕습니다.",
    icon: "taping",
    href: "/rehabilitation",
    instagram:
      "https://www.instagram.com/yeogiro_amc/p/DI_n7eWTMwU/",
  },
  {
    title: "구강 X-ray 치과진료",
    description:
      "치아 표면뿐 아니라 치근과 치조골까지 확인해 보존과 발치 여부를 판단합니다.",
    icon: "dental",
    href: "/dental-center",
  },
  {
    title: "초음파·내과검사",
    description:
      "반복되는 증상의 원인을 찾기 위해 혈액검사와 영상검사를 함께 연결합니다.",
    icon: "ultrasound",
    href: "/internal-medicine",
  },
];

export function TreatmentTechnology() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            Integrative Treatment
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            아이에게 필요한 치료를 연결합니다
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            약물과 수술만으로 끝내지 않고 침치료, 레이저, 수중재활,
            보행분석까지 환자의 상태와 회복 단계에 맞춰 통합합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[280px] flex-col rounded-[1.75rem] border border-gray-100 bg-[#FCFBFA] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                <TreatmentIcon name={item.icon} className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700"
                >
                  자세히 보기
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>

                {item.instagram && (
                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 transition-colors hover:text-primary-700"
                  >
                    영상 보기
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
