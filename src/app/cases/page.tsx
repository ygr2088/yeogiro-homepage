import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, TREATMENT_CASES } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "치료사례",
  description:
    "여기로 동물병원의 슬개골 수술, 십자인대 재활, 한방 치료, 치과 등 실제 치료 사례를 소개합니다.",
  path: "/cases",
  keywords: ["치료사례", "수술", "재활", "치료 결과", "증례"],
});

export default function CasesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "치료사례", url: `${SITE.url}/cases` },
        ]}
      />
      <PageHero
        title="치료사례"
        description="여기로 동물병원에서 치료받은 반려동물들의 회복 사례입니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "치료사례" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Treatment Cases"
            title="실제 치료 사례"
            description="개인정보 보호를 위해 일부 정보는 익명 처리되었으며, 치료 과정과 결과를 투명하게 공유합니다."
          />
          <div className="grid gap-8">
            {TREATMENT_CASES.map((caseItem) => (
              <Card key={caseItem.id} hover className="overflow-hidden p-0">
                <div className="grid lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white lg:col-span-1">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                      {caseItem.category}
                    </span>
                    <h3 className="mt-4 text-xl font-bold">{caseItem.title}</h3>
                    <p className="mt-2 text-sm text-primary-100">{caseItem.pet}</p>
                    <p className="mt-4 text-sm font-medium text-primary-200">
                      {caseItem.duration}
                    </p>
                  </div>
                  <div className="p-8 lg:col-span-2">
                    <p className="font-medium text-gray-900">{caseItem.summary}</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          치료 과정
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {caseItem.treatment}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          치료 결과
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {caseItem.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main text-center">
          <SectionHeading
            title="비슷한 증상이 있으신가요?"
            description="각 반려동물의 상태는 다릅니다. 정확한 진단과 치료 계획을 위해 상담을 받아보세요."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              진료 상담 예약
              <Icon name="arrow" />
            </Button>
            <Button href="/ekico" variant="outline" size="lg">
              EKICO 보행분석
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
