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
  title: "보호자 후기",
  description:
    "여기로양한방동물병원을 방문한 보호자님들의 후기와 진료 경험을 소개합니다.",
  path: "/reviews",
  keywords: ["과천 동물병원 후기", "보호자 후기", "강아지 재활 후기", "동물병원 리뷰"],
});

const reviewCategories = [
  "전체",
  "한방재활",
  "치과",
  "수술",
  "노령견",
  "고양이",
];

const reviews = [
  {
    category: "한방재활",
    author: "보호자 후기",
    pet: "강아지 · 보행 불편",
    content:
      "걸음이 불편해 걱정이 많았는데, 현재 상태와 재활 방향을 자세히 설명해 주셔서 안심이 되었습니다.",
  },
  {
    category: "치과",
    author: "보호자 후기",
    pet: "강아지 · 치과 진료",
    content:
      "치과 치료 전 검사 과정과 마취, 회복 과정까지 설명을 잘 들을 수 있어 믿고 맡길 수 있었습니다.",
  },
  {
    category: "수술",
    author: "보호자 후기",
    pet: "강아지 · 외과 진료",
    content:
      "수술이 필요한 이유와 회복 과정, 집에서 관리해야 할 부분까지 차근차근 안내받았습니다.",
  },
  {
    category: "노령견",
    author: "보호자 후기",
    pet: "노령견 · 만성질환 관리",
    content:
      "나이가 많아 걱정이 컸는데, 약물과 통증관리, 생활관리까지 함께 설명해 주셔서 도움이 되었습니다.",
  },
  {
    category: "고양이",
    author: "보호자 후기",
    pet: "고양이 · 구강/내과 진료",
    content:
      "예민한 고양이라 걱정했는데 진료 과정에서 아이 상태를 세심하게 봐주셔서 감사했습니다.",
  },
  {
    category: "한방재활",
    author: "보호자 후기",
    pet: "강아지 · 디스크 재활",
    content:
      "수술 여부만 이야기하는 것이 아니라 비수술 관리 가능성과 재활 방향까지 함께 설명해 주셨습니다.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "보호자 후기", url: `${SITE.url}/reviews` },
        ]}
      />

      <PageHero
        title="보호자 후기"
        description="아이를 맡겨주신 보호자님들의 진료 경험을 모았습니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "보호자 후기" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Reviews"
            title="후기는 신뢰의 기록입니다"
            description="실제 후기는 추후 네이버 리뷰와 보호자 동의 자료를 기반으로 업데이트할 예정입니다."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {reviewCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-700"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={`${review.category}-${index}`} hover>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                    {review.category}
                  </span>
                  <div className="flex gap-1 text-accent-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" />
                    ))}
                  </div>
                </div>

                <p className="leading-relaxed text-gray-700">
                  &ldquo;{review.content}&rdquo;
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                    후
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.pet}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Review Policy"
                title="실제 후기 중심으로 운영하겠습니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  보호자 후기는 병원의 신뢰를 보여주는 중요한 자료입니다.
                  앞으로 네이버 리뷰, 보호자 동의 후기, 치료사례 후기를 구분해
                  투명하게 정리할 예정입니다.
                </p>
                <p>
                  과장된 표현이나 확인되지 않은 결과는 사용하지 않고,
                  보호자가 실제로 느낀 진료 경험과 설명 만족도를 중심으로 소개하겠습니다.
                </p>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                앞으로 추가할 후기 유형
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                {[
                  "네이버 실제 리뷰 연동",
                  "재활치료 보호자 후기",
                  "치과 진료 보호자 후기",
                  "수술 후 회복 후기",
                  "노령견 장기관리 후기",
                  "고양이 진료 후기",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icon name="check" className="mt-0.5 text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main text-center">
          <SectionHeading
            title="아이의 상태가 걱정되신다면 상담부터 시작하세요"
            description="후기와 비슷한 증상이 있어도 아이마다 원인과 치료 방향은 다를 수 있습니다."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={SITE.naverReservation} size="lg">
              진료 예약하기
              <Icon name="arrow" />
            </Button>
            <Button href="/cases" variant="outline" size="lg">
              치료사례 보기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}