import Link from "next/link";

import {
  REVIEWS,
} from "@/lib/constants";
import {
  SOCIAL_LINKS,
  getFeaturedBlogContents,
} from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function ReviewsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeading
          eyebrow="Reviews"
          title="보호자 후기"
          description="실제 보호자분들이 전해주신 소중한 경험입니다."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {REVIEWS.slice(0, 2).map((review) => (
            <Card key={`${review.author}-${review.date}`} className="p-7">
              <div className="flex gap-1 text-primary-600">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Icon key={index} name="star" className="h-4 w-4" />
                ))}
              </div>

              <p className="mt-5 text-lg leading-8 text-gray-800">
                “{review.content}”
              </p>

              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="font-bold text-gray-900">{review.author}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {review.pet} · {review.date}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/reviews" variant="outline">
            모든 후기 보기
            <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function BlogPreview() {
  const posts = getFeaturedBlogContents(6);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Naver Blog"
            title="건강정보와 실제 진료 이야기"
            description="치료사례, 재활교육, 치과와 외과 정보를 네이버 블로그에서 확인하세요."
          />

          <a
            href={SOCIAL_LINKS.naverBlog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary-700 px-6 font-semibold text-white transition-colors hover:bg-primary-800"
          >
            네이버 블로그 전체보기
            <Icon name="arrow" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[260px] flex-col rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-xl"
            >
              <span className="w-fit rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700">
                {post.category}
              </span>

              <h3 className="mt-5 text-xl font-bold leading-8 text-gray-900">
                {post.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                {post.excerpt}
              </p>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
                블로그에서 읽기
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-primary-700"
          >
            홈페이지 건강정보 보기
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
