import {
  Hero,
  ServicesPreview,
  WhyUs,
  RecoveryFeature,
  TreatmentTechnology,
  FacilityPreview,
  RecoveryMedia,
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
      <TreatmentTechnology />
      <RecoveryMedia />
      <FacilityPreview />
      <ReviewsPreview />
      <BlogPreview />
      <InstagramPreview />
      <CtaBanner />
    </>
  );
}
