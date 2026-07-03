import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, EQUIPMENT } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "첨단 의료장비",
  description:
    "여기로 동물병원의 CT, 초음파, EKICO 보행분석, 수중 treadmill 등 첨단 의료장비를 소개합니다.",
  path: "/equipment",
  keywords: ["의료장비", "CT", "초음파", "재활장비", "영상의학"],
});

const categories = ["영상의학", "재활치료", "치과", "수술실"] as const;

export default function EquipmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "첨단 의료장비", url: `${SITE.url}/equipment` },
        ]}
      />
      <PageHero
        title="첨단 의료장비"
        description="정확한 진단과 안전한 치료를 위한 최신 의료 장비를 갖추고 있습니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "첨단 의료장비" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Advanced Equipment"
                title="정밀 진단, 안전한 치료"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  여기로 동물병원은 정확한 진단과 효과적인 치료를 위해
                  영상의학, 재활치료, 치과, 수술 분야의 첨단 장비를
                  지속적으로 도입·업그레이드하고 있습니다.
                </p>
                <p>
                  모든 장비는 정기 점검과 교정을 통해 최상의 성능을
                  유지하며, 의료진 교육을 병행하여 안전하고 효과적인
                  활용을 보장합니다.
                </p>
              </div>
              <Button href="/contact" className="mt-8">
                검사·진료 예약
                <Icon name="arrow" />
              </Button>
            </div>
            <Card className="bg-gradient-to-br from-primary-50 to-white">
              <h3 className="text-lg font-bold text-gray-900">장비 분류</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="rounded-xl bg-white p-4 text-center shadow-sm"
                  >
                    <p className="text-2xl font-bold text-primary-600">
                      {EQUIPMENT.filter((e) => e.category === cat).length}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{cat}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {categories.map((category) => {
        const items = EQUIPMENT.filter((e) => e.category === category);
        if (items.length === 0) return null;

        return (
          <section
            key={category}
            className={`section-padding ${category === "영상의학" ? "bg-gray-50" : ""}`}
          >
            <div className="container-main">
              <SectionHeading
                eyebrow={category}
                title={`${category} 장비`}
                align="left"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Card key={item.name} hover>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <Icon name="stethoscope" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
