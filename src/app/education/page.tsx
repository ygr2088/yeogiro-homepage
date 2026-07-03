import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, EDUCATION_PROGRAMS } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "보호자 교육",
  description:
    "반려동물 응급처치, 노령견 케어, 구강 관리, 수술 전후 관리 등 보호자를 위한 교육 프로그램을 제공합니다.",
  path: "/education",
  keywords: ["보호자 교육", "응급처치", "노령견", "구강관리", "반려동물 케어"],
});

export default function EducationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "보호자 교육", url: `${SITE.url}/education` },
        ]}
      />
      <PageHero
        title="보호자 교육"
        description="반려동물과 함께하는 건강한 일상을 위한 보호자 교육 프로그램"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "보호자 교육" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Pet Parent Education"
                title="올바른 케어, 건강한 반려생활"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  여기로 동물병원은 병원 진료만으로는 부족한 부분을 보완하기 위해
                  보호자 교육 프로그램을 운영합니다. 집에서 실천할 수 있는
                  케어 방법을 배우고, 질병 예방과 조기 발견에 도움이 되는
                  지식을 얻을 수 있습니다.
                </p>
                <p>
                  모든 교육은 수의사와 전문 스태프가 진행하며, 그룹 강의와
                  1:1 상담 형태로 제공됩니다.
                </p>
              </div>
            </div>
            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">교육 참여 혜택</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "무료 또는 저렴한 참가비",
                  "교육 자료 및 체크리스트 제공",
                  "수의사 직접 Q&A",
                  "정기 건강검진 할인 (참가자 한정)",
                  "카카오톡 채널 건강 정보 제공",
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
            title="교육 프로그램"
            description="관심 분야에 맞는 프로그램을 선택해 참여하실 수 있습니다."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDUCATION_PROGRAMS.map((program) => (
              <Card key={program.title} hover className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{program.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase text-gray-500">주요 주제</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs text-primary-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
                  <span>{program.format}</span>
                  <span>{program.frequency}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">교육 프로그램 신청</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              참가를 원하시면 전화 또는 온라인 예약을 통해 신청해 주세요.
              정원이 제한되어 있으니 미리 예약하시는 것을 권장합니다.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                교육 신청하기
                <Icon name="arrow" />
              </Button>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
              >
                <Icon name="phone" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
