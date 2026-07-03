import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = createMetadata({
  title: "진료과목",
  description: "내과, 외과, 영상의학, 예방접종 등 반려동물 종합 진료 서비스를 제공합니다.",
  path: "/medical-services",
  keywords: ["내과", "외과", "예방접종", "건강검진", "영상의학"],
});

const services = [
  {
    title: "내과 진료",
    items: ["소화기 질환", "호흡기 질환", "내분비 질환", "신장·간 질환", "피부 질환"],
  },
  {
    title: "외과 수술",
    items: ["중성화 수술", "종양 제거", "슬개골 탈구", "십자인대 수술", "골절 정복"],
  },
  {
    title: "영상·검사",
    items: ["디지털 X-ray", "초음파 검사", "CT/MRI", "혈액·소변 검사", "세포 검사"],
  },
  {
    title: "예방·접종",
    items: ["종합 건강검진", "예방접종", "구충·심장사상충", "영양 상담", "행동 상담"],
  },
  {
    title: "응급 진료",
    items: ["24시간 응급 대응", "중독·외상", "호흡곤란", "경련·쇼크", "응급 수술"],
  },
  {
    title: "특수 진료",
    items: ["안과", "피부과", "종양학", "마취·통증", "호스피스 케어"],
  },
];

export default function MedicalServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "진료과목", url: `${SITE.url}/medical-services` },
        ]}
      />
      <PageHero
        title="진료과목"
        description="정밀 검진부터 수술, 응급 진료까지 종합적인 의료 서비스를 제공합니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "진료과목" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            title="종합 진료 서비스"
            description="반려동물의 생애 주기에 맞춘 맞춤형 진료를 제공합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="stethoscope" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check" className="text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            title="진료 프로세스"
            description="체계적인 4단계 진료 과정으로 정확한 치료를 제공합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "접수·상담", desc: "증상 확인 및 기본 문진" },
              { step: "02", title: "정밀 검사", desc: "필요한 검사 및 영상 진단" },
              { step: "03", title: "치료 계획", desc: "보호자와 함께 치료 방향 결정" },
              { step: "04", title: "치료·관리", desc: "치료 실행 및 사후 관리" },
            ].map((process) => (
              <div key={process.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="font-bold text-gray-900">{process.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
