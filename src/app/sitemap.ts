import type { MetadataRoute } from "next";
import { CONTENT_UPDATED_DATE, SITE_URL, siteRoutes } from "@/lib/site";

const lastModified = new Date(CONTENT_UPDATED_DATE);

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
