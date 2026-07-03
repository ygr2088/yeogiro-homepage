import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm, ContactInfo } from "@/components/contact/ContactSections";

export const metadata: Metadata = createMetadata({
  title: "오시는 길",
  description: "여기로 동물병원 위치, 진료시간, 연락처 및 온라인 예약 안내.",
  path: "/contact",
  keywords: ["오시는길", "예약", "연락처", "진료시간", "위치"],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "오시는 길", url: `${SITE.url}/contact` },
        ]}
      />
      <PageHero
        title="오시는 길"
        description="진료 예약 및 문의를 환영합니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "오시는 길" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
