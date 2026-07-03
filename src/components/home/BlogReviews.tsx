import Link from "next/link";
import { BLOG_POSTS, REVIEWS } from "@/lib/constants";
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
          description="여기로 동물병원을 이용해 주신 보호자님들의 소중한 후기입니다."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {REVIEWS.slice(0, 2).map((review) => (
            <Card key={review.id} hover>
              <div className="mb-3 flex gap-1 text-accent-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="star" />
                ))}
              </div>
              <p className="leading-relaxed text-gray-700">&ldquo;{review.content}&rdquo;</p>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="font-medium text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.pet}</p>
                </div>
                <time className="text-sm text-gray-400">{review.date}</time>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
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
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <SectionHeading
          eyebrow="Blog"
          title="건강 정보"
          description="반려동물 건강 관리에 도움이 되는 유용한 정보를 공유합니다."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog#${post.slug}`} className="group">
              <Card hover className="h-full">
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                  {post.category}
                </span>
                <h3 className="mt-4 font-bold text-gray-900 group-hover:text-primary-600">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime} 읽기</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/blog" variant="outline">
            블로그 전체 보기
            <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}
