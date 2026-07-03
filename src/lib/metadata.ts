import type { Metadata } from "next";
import { SITE } from "./constants";

type PageMeta = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description = SITE.description,
  path = "",
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "" || path === "/" ? `${SITE.name} | ${title}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "동물병원",
      "반려동물",
      "수의사",
      "강남 동물병원",
      "재활치료",
      "반려동물 치과",
      "한방진료",
      ...keywords,
    ],
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
