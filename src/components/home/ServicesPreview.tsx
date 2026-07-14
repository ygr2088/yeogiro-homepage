import Image from "next/image";
import Link from "next/link";

import { SurgeryIcon } from "@/components/icons/SurgeryIcon";
import { Icon } from "@/components/ui/Icon";

type Service = {
  title: string;
  description: string;
  href: string;
  image: string;
  icon:
    | "stethoscope"
    | "surgery"
    | "tooth"
    | "heart"
    | "leaf"
    | "check";
};

function ServiceIcon({ name }: { name: Service["icon"] }) {
  return name === "surgery" ? (
    <SurgeryIcon className="h-6 w-6" />
  ) : (
    <Icon name={name} />
  );
}

export function ServicesPreview() {
  const services: Service[] = [
    {
      title: "내과진료센터",
      description: "만성질환 · 노령질환 · 건강검진",
      href: "/internal-medicine",
      image: "/images/services/internal.webp",
      icon: "stethoscope",
    },
    {
      title: "외과수술센터",
      description: "수술 계획부터 회복 관리까지",
      href: "/surgery",
      image: "/images/services/surgery.webp",
      icon: "surgery",
    },
    {
      title: "치과센터",
      description: "구강 X-ray 기반 치과 진료",
      href: "/dental-center",
      image: "/images/services/dental.webp",
      icon: "tooth",
    },
    {
      title: "침치료센터",
      description: "침치료 · 통증관리 · 회복지원",
      href: "/rehabilitation",
      image: "/images/services/acupuncture.webp",
      icon: "heart",
    },
    {
      title: "보행평가센터",
      description: "EKICO 보행분석",
      href: "/ekico",
      image: "/images/services/gait.webp",
      icon: "leaf",
    },
    {
      title: "건강검진센터",
      description: "예방검진 · 노령검진 · 맞춤검진",
      href: "/health-checkup",
      image: "/images/services/health-checkup.webp",
      icon: "check",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            Yeogiro Center
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            진료센터
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            진단, 치료, 수술, 통증관리와 회복을 한 병원 안에서 연결합니다.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_10px_30px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-[0_22px_50px_rgba(17,24,39,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={`${service.title} 실제 진료 장면`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                  자세히 보기
                  <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
