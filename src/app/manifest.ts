import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Remparia — Du temps rendu, la décision préservée",
    short_name: "Remparia",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050604",
    theme_color: "#C5FF32",
    lang: "fr",
    icons: [
      {
        src: "/favicon-remparia.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-remparia.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
