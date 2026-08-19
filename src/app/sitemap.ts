import type { MetadataRoute } from "next";
import { getAllContentPaths, getSiteUrl, hreflangAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = getSiteUrl();

  return getAllContentPaths().map((path) => {
    const logical = path.replace(/^\/(fr|en)/, "") || "/";
    return {
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: logical === "/" ? "weekly" : "monthly",
      priority:
        logical === "/"
          ? 1
          : logical === "/contact" ||
              logical === "/services" ||
              logical === "/methode"
            ? 0.9
            : logical.startsWith("/services/") ||
                logical.startsWith("/secteurs/")
              ? 0.7
              : 0.8,
      alternates: {
        languages: hreflangAlternates(logical),
      },
    };
  });
}
