import type { Metadata } from "next";
import { SECTEUR_SLUGS, SERVICE_SLUGS, getSecteur, getService } from "@/lib/content";

export const SITE = {
  name: "Remparia",
  legalName: "Remparia",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://remparia.vercel.app").replace(
    /\/$/,
    "",
  ),
  locale: "fr_FR",
  localeAlternate: "en_US",
  email: "contact@remparia.fr",
  description:
    "Remparia — IA souveraine qui augmente vos équipes. Agents métier, infra en France, conformité et passage du POC à la production.",
  keywords: [
    "IA souveraine",
    "agents IA",
    "intelligence artificielle France",
    "conformité IA",
    "intégration métier",
    "RAG souverain",
    "Remparia",
    "protocole SIGNAL",
    "automatisation agentique",
  ],
  twitter: "@remparia",
  ogImage: "/hero-temporal.png",
} as const;

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...SITE.keywords],
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      alternateLocale: [SITE.localeAlternate],
      url,
      siteName: SITE.name,
      title: `${title} · ${SITE.name}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE.name}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/logo-remparia.png"),
    email: SITE.email,
    description: SITE.description,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      availableLanguage: ["French", "English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: ["fr-FR", "en"],
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: absoluteUrl("/logo-remparia.png"),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const item = getService(slug, "fr");
  if (!item) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.desc,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "FR",
    url: absoluteUrl(`/services/${slug}`),
  };
}

export function getAllContentPaths() {
  const staticPaths = [
    "/",
    "/services",
    "/methode",
    "/secteurs",
    "/realisations",
    "/a-propos",
    "/ressources",
    "/contact",
  ];
  const servicePaths = SERVICE_SLUGS.map((slug) => `/services/${slug}`);
  const secteurPaths = SECTEUR_SLUGS.map((slug) => `/secteurs/${slug}`);
  return [...staticPaths, ...servicePaths, ...secteurPaths];
}

export function secteurMeta(slug: string) {
  const item = getSecteur(slug, "fr");
  return {
    title: item?.title ?? "Secteur",
    description:
      item?.desc ??
      "Approche Remparia pour intégrer l'IA souveraine dans votre secteur.",
  };
}

export function serviceMeta(slug: string) {
  const item = getService(slug, "fr");
  return {
    title: item?.title ?? "Service",
    description:
      item?.desc ??
      "Service Remparia pour déployer l'IA souveraine jusqu'à la production.",
  };
}
