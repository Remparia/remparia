import type { MetadataRoute } from "next";
import { getAllContentPaths, SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getAllContentPaths().map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/contact" || path === "/services" || path === "/methode"
          ? 0.9
          : path.startsWith("/services/") || path.startsWith("/secteurs/")
            ? 0.7
            : 0.8,
  }));
}
