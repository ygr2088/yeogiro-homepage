import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, TEAM } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "의료진",
  description:
    "여기로 동물병원 전문 의료진을 소개합니다. 내과, 외과, 재활, 치과, 한방, 영상의학 분야 전문 수의사가 협진합니다.",
  path: "/team",
  keywords: ["의료진", "수의사", "전문의", "협진"],
});

export default function TeamPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "의료진", url: `${SITE.url}/team` },
        ]}
      />
      <PageHero
        title="의료진"
        description="각 분야 전문 수의사가 협진하여 최적의 치료를 제공합니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "의료진" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Medical Team"
                title="전문성과 따뜻함을 갖춘 의료진"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  여기로 동물병원 의료진은 각 분야에서 풍부한 임상 경험을 보유한
                  전문 수의사들로 구성되어 있습니다. 정기적인 학술 활동과
                  세미나 참여를 통해 최신 진료 지식을 지속적으로 업데이트합니다.
                </p>
                <p>
                  복잡한 증례는 관련 분야 의료진이 협진하여, 반려동물에게
                  가장 적합한 치료 방향을 함께 결정합니다.
                </p>
              </div>
            </div>
            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">협진 시스템</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "내과·외과 기본 진료 및 수술",
                  "재활·EKICO 보행분석 연계 치료",
                  "치과·한방 통합 진료",
                  "영상의학 기반 정밀 진단",
                  "정기 의료진 회의 및 증례 토론",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <Icon name="check" className="text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            title="의료진 소개"
            description="분야별 전문의가 반려동물의 건강을 책임집니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <Card key={member.name} hover>
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-2xl font-bold text-white">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary-600">{member.role}</p>
                <p className="mt-3 text-sm text-gray-600">{member.description}</p>
                <p className="mt-2 text-xs text-gray-500">{member.education}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.specialty.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main text-center">
          <SectionHeading
            title="진료 예약 및 상담"
            description="담당 의료진 지정 상담이 필요하시면 예약 시 요청해 주세요."
          />
          <Button href="/contact" size="lg">
            예약 상담하기
            <Icon name="arrow" />
          </Button>
        </div>
      </section>
    </>
  );
}
