import type { MetadataRoute } from "next";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = NAV_ITEMS.map((item) => ({
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  return routes;
}
