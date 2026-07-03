import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, EKICO_INFO } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "EKICO 보행분석",
  description:
    "EKICO 보행분석 시스템으로 반려동물의 보행 패턴을 정량 분석하고, 데이터 기반 맞춤형 재활 치료를 제공합니다.",
  path: "/ekico",
  keywords: ["EKICO", "보행분석", "재활", "보행 패턴", "체중 분배"],
});

export default function EkicoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "EKICO 보행분석", url: `${SITE.url}/ekico` },
        ]}
      />
      <PageHero
        title="EKICO 보행분석"
        description={EKICO_INFO.subtitle}
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "EKICO 보행분석" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="EKICO System"
                title={EKICO_INFO.title}
                align="left"
              />
              <p className="leading-relaxed text-gray-600">{EKICO_INFO.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">
                  보행분석 예약
                  <Icon name="arrow" />
                </Button>
                <Button href="/rehabilitation" variant="outline">
                  재활치료 안내
                </Button>
              </div>
            </div>
            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">분석 항목</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "좌우 체중 분배 비율",
                  "보행 속도 및 보폭",
                  "절뚝거림 패턴",
                  "발 착지 압력 분포",
                  "보행 대칭성 지수",
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
            title="EKICO의 장점"
            description="객관적 데이터로 더 정확한 재활 치료를 제공합니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EKICO_INFO.benefits.map((benefit) => (
              <Card key={benefit.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="heart" />
                </div>
                <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Indications"
                title="보행분석이 필요한 경우"
                align="left"
              />
              <ul className="space-y-3">
                {EKICO_INFO.indications.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <Icon name="check" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Process"
                title="보행분석 진행 과정"
                align="left"
              />
              <div className="space-y-4">
                {EKICO_INFO.process.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">보행분석으로 시작하는 맞춤 재활</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              EKICO 분석 결과를 바탕으로 재활치료, 수중 treadmill, 레이저 치료를
              연계한 통합 프로그램을 제공합니다.
            </p>
            <Button href="/cases" variant="secondary" className="mt-8">
              치료사례 보기
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
