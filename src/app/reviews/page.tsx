import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, REVIEWS } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = createMetadata({
  title: "후기",
  description: "여기로 동물병원을 이용하신 보호자님들의 진료 후기입니다.",
  path: "/reviews",
  keywords: ["후기", "리뷰", "보호자 후기", "만족도"],
});

export default function ReviewsPage() {
  const avgRating = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "후기", url: `${SITE.url}/reviews` },
        ]}
      />
      <PageHero
        title="보호자 후기"
        description="소중한 반려동물을 맡겨주신 보호자님들의 따뜻한 후기입니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "후기" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-primary-50 px-8 py-4">
              <div className="flex gap-1 text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">{avgRating}</span>
              <span className="text-gray-600">/ 5.0 ({REVIEWS.length}개 후기)</span>
            </div>
          </div>

          <SectionHeading
            title="전체 후기"
            description="실제 진료를 받으신 보호자님들의 솔직한 후기입니다."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <Card key={review.id} hover>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex gap-1 text-accent-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="star" />
                    ))}
                  </div>
                  <time className="text-sm text-gray-400">{review.date}</time>
                </div>
                <p className="leading-relaxed text-gray-700">&ldquo;{review.content}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                    {review.author[0]}
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
    </>
  );
}
