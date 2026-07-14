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
  title: "블로그",
  description:
    "여기로양한방동물병원의 반려동물 건강정보 블로그입니다. 한방재활, 디스크, 슬개골, 치과, 노령견, 고양이 진료 정보를 제공합니다.",
  path: "/blog",
  keywords: [
    "과천 동물병원 블로그",
    "강아지 디스크",
    "강아지 슬개골",
    "강아지 치과",
    "노령견 관리",
    "한방재활",
  ],
});

const categories = [
  "전체",
  "한방재활",
  "디스크",
  "슬개골",
  "치과",
  "노령견",
  "고양이",
  "수술관리",
];

const posts = [
  {
    category: "한방재활",
    title: "강아지 침치료, 어떤 아이에게 도움이 될까요?",
    excerpt:
      "통증, 디스크, 관절염, 노령견 보행 문제에서 침치료를 고려할 수 있는 상황을 보호자가 이해하기 쉽게 정리합니다.",
    readTime: "5분",
    href: "/rehabilitation",
  },
  {
    category: "디스크",
    title: "강아지 디스크, 수술 전 확인해야 할 것들",
    excerpt:
      "응급 여부, 통증 정도, 신경 반응, 보행 상태를 바탕으로 수술과 비수술 관리 방향을 어떻게 판단하는지 설명합니다.",
    readTime: "6분",
    href: "/rehabilitation",
  },
  {
    category: "슬개골",
    title: "슬개골 탈구, 꼭 수술해야 할까요?",
    excerpt:
      "슬개골 질환에서 수술이 필요한 경우와 재활·체중관리·보행평가가 도움이 되는 경우를 구분해 설명합니다.",
    readTime: "5분",
    href: "/ekico",
  },
  {
    category: "치과",
    title: "강아지 입 냄새, 단순한 치석 문제일까요?",
    excerpt:
      "입 냄새, 잇몸염, 치주염, 치아 파절, 구강 X-ray가 필요한 상황을 정리합니다.",
    readTime: "4분",
    href: "/dental-center",
  },
  {
    category: "노령견",
    title: "노령견이 갑자기 산책을 싫어한다면",
    excerpt:
      "나이 때문이라고 넘기기 쉬운 보행 변화가 관절, 통증, 만성질환의 신호일 수 있습니다.",
    readTime: "5분",
    href: "/medical-services",
  },
  {
    category: "고양이",
    title: "고양이가 밥을 먹다 멈춘다면 구강 통증일 수 있습니다",
    excerpt:
      "고양이 구내염, 치아흡수성병변, 식욕 저하와 통증 신호를 보호자가 확인하는 방법을 안내합니다.",
    readTime: "4분",
    href: "/dental-center",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "블로그", url: `${SITE.url}/blog` },
        ]}
      />

      <PageHero
        title="블로그"
        description="보호자가 이해하기 쉬운 반려동물 건강정보를 정리합니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "블로그" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Health Articles"
            title="진료실에서 자주 듣는 질문을 글로 정리합니다"
            description="홈페이지 블로그는 네이버 블로그와 함께 운영하며, 보호자가 다시 찾아볼 수 있는 건강정보 플랫폼으로 확장할 예정입니다."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-primary-100 bg-white px-4 py-2 text-sm font-medium text-primary-700"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title}>
                <Card hover className="flex h-full flex-col">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.readTime} 읽기</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>

                  <Button href={post.href} variant="outline" className="mt-6">
                    관련 진료 보기
                    <Icon name="arrow" />
                  </Button>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Content Strategy"
                title="네이버 블로그와 홈페이지 SEO를 함께 키웁니다"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  네이버 블로그는 지역 검색과 보호자 유입에 강하고, 홈페이지 블로그는
                  병원의 전문성과 장기적인 검색 자산을 쌓는 데 도움이 됩니다.
                </p>
                <p>
                  앞으로 치료사례, 보호자 교육, 질환별 가이드를 홈페이지와 네이버 블로그에
                  함께 정리해 검색 노출과 신뢰도를 동시에 높이는 구조로 운영할 예정입니다.
                </p>
              </div>
            </div>

            <Card className="border-primary-100 bg-primary-50">
              <h3 className="text-lg font-bold text-gray-900">
                우선 작성할 글 주제
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                {[
                  "강아지 디스크 비수술 관리",
                  "강아지 슬개골 탈구와 보행평가",
                  "강아지 치과 스케일링과 발치",
                  "고양이 구내염과 치아흡수성병변",
                  "노령견 보행 변화 체크리스트",
                  "수술 후 재활치료가 필요한 이유",
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
            title="건강정보보다 진료가 먼저 필요한 순간이 있습니다"
            description="통증, 보행 이상, 식욕 저하, 호흡 이상, 배뇨 문제가 있다면 글을 읽기보다 먼저 진료 상담을 권합니다."
          />
          <Button href={SITE.naverReservation} size="lg">
            진료 예약하기
            <Icon name="arrow" />
          </Button>
        </div>
      </section>
    </>
  );
}