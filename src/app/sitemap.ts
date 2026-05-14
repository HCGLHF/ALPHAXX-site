import type { MetadataRoute } from "next";
import { SITE_URL, siteRoutes } from "@/lib/site";

const lastModified = new Date("2026-05-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
