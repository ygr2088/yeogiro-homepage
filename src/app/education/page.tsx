import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "보호자 교육센터",
  description:
    "여기로양한방동물병원 보호자 교육센터는 수술 전후 관리, 치과 홈케어, 디스크·슬개골 관리, 노령견 관리, 응급 상황 체크 등 보호자를 위한 건강 정보를 제공합니다.",
  path: "/education",
  keywords: [
    "보호자 교육",
    "강아지 수술 후 관리",
    "강아지 치과 관리",
    "노령견 관리",
    "강아지 디스크 관리",
    "슬개골 관리",
  ],
});

const educationTopics = [
  {
    title: "수술 전·후 관리",
    description:
      "금식·금수, 넥카라, 상처 확인, 약 복용, 회복기 주의사항을 보호자가 이해하기 쉽게 안내합니다.",
    topics: ["금식·금수", "상처 관리", "넥카라", "약 복용", "재검진"],
  },
  {
    title: "치과 홈케어",
    description:
      "양치, 치석 관리, 입 냄새, 잇몸 출혈, 식욕 변화 등 집에서 확인할 수 있는 구강 신호를 안내합니다.",
    topics: ["양치", "치석", "입 냄새", "잇몸염", "정기 검진"],
  },
  {
    title: "디스크·슬개골 관리",
    description:
      "계단, 미끄러운 바닥, 산책량, 체중관리, 보행 변화 체크 등 생활 속 관리법을 정리합니다.",
    topics: ["디스크", "슬개골", "보행 체크", "체중관리", "운동 제한"],
  },
  {
    title: "노령견·노령묘 케어",
    description:
      "나이가 들며 나타나는 통증, 식욕 변화, 보행 변화, 인지 변화, 만성질환 관리 포인트를 안내합니다.",
    topics: ["통증", "식욕", "보행", "인지 변화", "만성질환"],
  },
  {
    title: "한방재활 홈케어",
    description:
      "재활치료 후 집에서 할 수 있는 운동, 마사지, 온열·냉각 관리, 무리한 움직임을 피하는 법을 안내합니다.",
    topics: ["홈운동", "마사지", "재활 후 관리", "산책 조절", "통증 관찰"],
  },
  {
    title: "응급 상황 체크",
    description:
      "구토, 호흡곤란, 경련, 배뇨 문제, 급성 통증 등 병원에 바로 연락해야 하는 상황을 정리합니다.",
    topics: ["구토", "호흡곤란", "경련", "배뇨 이상", "급성 통증"],
  },
];

const guideFormats = [
  "PDF 체크리스트",
  "카카오톡 안내문",
  "블로그 가이드",
  "진료 후 보호자 설명자료",
  "수술 전 안내문",
  "재활 홈케어 가이드",
];

export default function EducationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "보호자 교육센터", url: `${SITE.url}/education` },
        ]}
      />

      <PageHero
        title="보호자 교육센터"
        description="병원 밖에서도 아이를 잘 돌볼 수 있도록, 보호자가 이해하기 쉬운 관리법을 안내합니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "보호자 교육센터" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Pet Parent Education"
                title="치료는 병원에서 끝나지 않습니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  반려동물의 회복과 건강 관리는 병원 진료 후 집에서의 관리가
                  함께 이어질 때 더 안정적으로 진행될 수 있습니다.
                </p>
                <p>
                  여기로양한방동물병원은 보호자가 증상 변화를 빨리 알아차리고,
                  수술 후 회복기나 재활치료 중에도 아이를 안전하게 돌볼 수 있도록
                  교육 콘텐츠를 제공합니다.
                </p>
                <p>
                  앞으로 이 페이지는 PDF 가이드, 체크리스트, 블로그 글, 보호자 안내문을
                  모아두는 교육 플랫폼으로 확장할 예정입니다.
                </p>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                교육센터에서 다룰 내용
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "집에서 확인해야 할 위험 신호",
                  "수술 전후 보호자 체크리스트",
                  "치과·구강 홈케어 방법",
                  "디스크·슬개골 생활관리",
                  "노령견·노령묘 삶의 질 관리",
                  "재활치료 후 홈운동과 주의사항",
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
            eyebrow="Education Topics"
            title="보호자 교육 주제"
            description="진료실에서 자주 설명드리는 내용을 보호자가 다시 확인할 수 있도록 정리합니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {educationTopics.map((topic) => (
              <Card key={topic.title} hover className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <Icon name="heart" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{topic.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {topic.description}
                </p>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    주요 내용
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {topic.topics.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary-50 px-3 py-1 text-xs text-primary-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Future Contents"
                title="앞으로 체크리스트와 보호자 안내문으로 확장합니다"
                align="left"
              />
              <p className="leading-relaxed text-gray-600">
                보호자가 병원에서 들은 설명을 집에서도 다시 확인할 수 있도록,
                수술 안내문, 재활 홈케어, 치과 관리, 응급 체크리스트를 순차적으로
                정리해 나갈 예정입니다.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {guideFormats.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 text-sm font-medium text-gray-700"
                >
                  <Icon name="check" className="text-primary-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              아이의 상태가 걱정된다면 교육보다 진료가 먼저입니다
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              교육 콘텐츠는 진료를 대신할 수 없습니다. 통증, 식욕 저하, 보행 이상,
              호흡곤란, 배뇨 이상이 있다면 먼저 진료 상담을 권합니다.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={SITE.naverReservation} variant="secondary" size="lg">
                진료 예약하기
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