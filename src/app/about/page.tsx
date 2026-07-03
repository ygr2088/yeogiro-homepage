import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, TEAM } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = createMetadata({
  title: "병원소개",
  description: "여기로 동물병원의 비전, 의료진, 시설을 소개합니다. 15년 경력의 전문 수의사 팀이 반려동물의 건강을 책임집니다.",
  path: "/about",
  keywords: ["병원소개", "수의사", "동물병원 시설"],
});

const values = [
  {
    title: "정확한 진단",
    description: "최신 장비와 풍부한 임상 경험을 바탕으로 정확한 진단을 제공합니다.",
  },
  {
    title: "따뜻한 소통",
    description: "보호자와의 충분한 상담을 통해 치료 계획을 함께 수립합니다.",
  },
  {
    title: "지속적인 케어",
    description: "진료 후에도 꾸준한 관리와 재방문 상담으로 건강을 지켜드립니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "병원소개", url: `${SITE.url}/about` },
        ]}
      />
      <PageHero
        title="병원소개"
        description="반려동물과 보호자 모두가 행복한 진료 환경을 만들어 갑니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "병원소개" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About Us"
                title="반려동물의 건강한 삶을 위한 약속"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  여기로 동물병원은 2011년 개원 이래 15년간 강남 지역 반려동물의 건강을
                  책임져 왔습니다. 내과, 외과, 재활치료, 치과, 한방진료를 아우르는
                  종합 진료 시스템으로 반려동물의 모든 건강 문제를 한곳에서 해결합니다.
                </p>
                <p>
                  우리는 단순히 질병을 치료하는 것을 넘어, 반려동물과 보호자 모두가
                  행복한 삶을 영위할 수 있도록 최선을 다합니다.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Icon name="check" />
                  </div>
                  <h3 className="font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Our Team"
            title="의료진 소개"
            description="각 분야 전문의가 협진하여 최적의 치료를 제공합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <Card key={member.name} hover className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-2xl font-bold text-white">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary-600">{member.role}</p>
                <p className="mt-3 text-sm text-gray-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Facilities"
            title="시설 안내"
            description="쾌적하고 안전한 진료 환경을 갖추고 있습니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "수술실", desc: "무균 수술실과 최신 마취 장비" },
              { title: "재활센터", desc: "수중 treadmill, 레이저 치료 장비" },
              { title: "치과실", desc: "치과 전용 X-ray 및 스케일링 장비" },
              { title: "검사실", desc: "혈액·소변·영상 검사 일원화" },
              { title: "입원실", desc: "24시간 모니터링 입원 케어" },
              { title: "대기실", desc: "넓고 쾌적한 보호자 대기 공간" },
            ].map((facility) => (
              <Card key={facility.title} hover>
                <h3 className="font-bold text-gray-900">{facility.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{facility.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
