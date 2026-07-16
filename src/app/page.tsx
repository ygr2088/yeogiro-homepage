import {
  Hero,
  ServicesPreview,
  WhyUs,
  RecoveryFeature,
  TreatmentTechnology,
  FacilityPreview,
  InstagramPreview,
  CtaBanner,
} from "@/components/home/HomeSections";

import { RecoveryMedia } from "@/components/home/RecoveryMedia";

import {
  ReviewsPreview,
  BlogPreview,
} from "@/components/home/BlogReviews";

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