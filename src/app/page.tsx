import {
  Hero,
  ServicesPreview,
  WhyUs,
  RecoveryFeature,
  FacilityPreview,
  InstagramPreview,
  CtaBanner,
} from "@/components/home/HomeSections";
import { ReviewsPreview, BlogPreview } from "@/components/home/BlogReviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <RecoveryFeature />
      <FacilityPreview />
      <ReviewsPreview />
      <BlogPreview />
      <InstagramPreview />
      <CtaBanner />
    </>
  );
}
