import type { Metadata } from "next";
import { SECTEUR_SLUGS, SERVICE_SLUGS, getSecteur, getSecteurDetail, getSecteurImage, getService } from "@/lib/content";

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

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    email: SITE.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: [
      "IA souveraine",
      "Agents IA métier",
      "Stratégie IA",
      "Infrastructure souveraine",
    ],
  };
}

export function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Remparia",
    itemListElement: SERVICE_SLUGS.map((slug, index) => {
      const item = getService(slug, "fr");
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item?.title ?? slug,
        url: absoluteUrl(`/services/${slug}`),
        description: item?.desc,
      };
    }),
  };
}

export function secteursItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Secteurs Remparia",
    itemListElement: SECTEUR_SLUGS.map((slug, index) => {
      const item = getSecteur(slug, "fr");
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item?.title ?? slug,
        url: absoluteUrl(`/secteurs/${slug}`),
        description: item?.desc,
      };
    }),
  };
}

export function signalHowToJsonLd() {
  const steps = [
    {
      name: "Scoper",
      text: "Cibler les cas d'usage à ROI réel, pas les gadgets.",
    },
    {
      name: "Intégrer",
      text: "Brancher les agents sur vos outils et données existants.",
    },
    {
      name: "Garantir",
      text: "Conformité, traçabilité, souveraineté par défaut.",
    },
    {
      name: "Normaliser",
      text: "Industrialiser du POC jusqu'à la production quotidienne.",
    },
    {
      name: "Augmenter",
      text: "L'humain garde la main ; l'agent porte la charge.",
    },
    {
      name: "Livrer",
      text: "Mesurer les gains, itérer, prouver la valeur.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Protocole SIGNAL — Remparia",
    description:
      "Méthode Remparia pour passer de l'idée IA à la production quotidienne.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: absoluteUrl("/methode"),
    })),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Remparia",
    url: absoluteUrl("/contact"),
    description:
      "Contactez Remparia pour un diagnostic SIGNAL ou une discussion sur vos cas d'usage IA.",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      email: SITE.email,
      url: SITE.url,
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

export function secteurFaqJsonLd(slug: string) {
  const detail = getSecteurDetail(slug, "fr");
  if (!detail?.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
  const detail = getSecteurDetail(slug, "fr");
  return {
    title: detail?.heroH ?? item?.title ?? "Secteur",
    description:
      detail?.heroP ??
      item?.desc ??
      "Approche Remparia pour intégrer l'IA souveraine dans votre secteur.",
    image: getSecteurImage(slug),
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
