import type { MetadataRoute } from "next";
import {
  getAllContentPaths,
  getSiteUrl,
  hreflangAlternates,
  sitemapPriority,
} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = getSiteUrl();

  return getAllContentPaths().map((path) => {
    const logical = path.replace(/^\/(fr|en)/, "") || "/";
    const priority = sitemapPriority(logical);
    return {
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: logical === "/" ? "weekly" : "monthly",
      priority,
      alternates: {
        languages: hreflangAlternates(logical),
      },
    };
  });
}
