import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE, BLOG_POSTS } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = createMetadata({
  title: "블로그",
  description: "반려동물 건강 정보, 질병 예방, 영양 관리 등 유용한 수의학 정보를 제공합니다.",
  path: "/blog",
  keywords: ["반려동물 건강", "건강정보", "질병예방", "영양관리"],
});

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
        description="반려동물 건강 관리에 도움이 되는 정보를 공유합니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "블로그" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} id={post.slug}>
                <Card hover className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-400">{post.date}</time>
                    <span className="text-sm text-gray-400">· {post.readTime} 읽기</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
                  <p className="mt-3 leading-relaxed text-gray-600">{post.excerpt}</p>
                  <p className="mt-4 text-sm text-gray-500">
                    반려동물의 건강한 삶을 위해 꾸준한 관리와 예방이 중요합니다.
                    더 자세한 내용은 병원에 방문하시거나 전화 상담을 이용해 주세요.
                  </p>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
