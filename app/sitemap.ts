import type { MetadataRoute } from "next";
import { site, work } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", ...work.map((item) => `/work/${item.slug}`)];
  return pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
