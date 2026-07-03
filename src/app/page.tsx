import {
  Hero,
  StatsBar,
  ServicesPreview,
  WhyUs,
  CtaBanner,
} from "@/components/home/HomeSections";
import { ReviewsPreview, BlogPreview } from "@/components/home/BlogReviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <WhyUs />
      <ReviewsPreview />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
