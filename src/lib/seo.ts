import type { Metadata } from "next";
import type { Lang } from "@/lib/content";
import { APROPOS, SECTEUR_SLUGS, SERVICE_SLUGS, getSecteur, getSecteurDetail, getSecteurImage, getService, getServiceImage } from "@/lib/content";
import { DEFAULT_LOCALE, LOCALES, withLocale, type Locale } from "@/lib/i18n";

import { CONTACT_EMAIL } from "./contact-email";
import { LEGAL_ENTITY, isLegalPlaceholder } from "./legal-entity";
import { getTeamMembers } from "./team";

const DEFAULT_SITE_ORIGIN = "https://www.remparia.com";

/** Canonical public origin — always www when the apex is remparia.com. */
export function getSiteUrl() {
  const raw = (
    process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_ORIGIN
  ).replace(/\/$/, "");
  try {
    const url = new URL(raw);
    if (url.hostname === "remparia.com") {
      url.hostname = "www.remparia.com";
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_ORIGIN;
  }
}

export const SITE = {
  name: "Remparia",
  legalName: "Remparia",
  get url() {
    return getSiteUrl();
  },
  locale: "fr_FR",
  localeAlternate: "en_US",
  email: CONTACT_EMAIL,
  description:
    "Remparia renforce les métiers spécialisés avec des agents supervisés : du temps rendu, la décision préservée et les données sous contrôle.",
  twitter: "@remparia",
  ogImage: "/4a7fe64c-880c-4c2d-b5ff-451c58be4fc0.png",
} as const;

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  lang?: Lang | Locale;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Shared hreflang set for HTML metadata and sitemap alternates. */
export function hreflangAlternates(path = "/") {
  const logical = path.startsWith("/") ? path : `/${path}`;
  return {
    "fr-FR": absoluteUrl(withLocale("fr", logical)),
    "en-US": absoluteUrl(withLocale("en", logical)),
    "x-default": absoluteUrl(withLocale("fr", logical)),
  } as const;
}

const SITEMAP_EXCLUDED = new Set([
  "/carrieres/candidature/1",
  "/carrieres/candidature/2",
  "/carrieres/candidature/3",
]);

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
  lang = DEFAULT_LOCALE,
}: PageSeoInput): Metadata {
  const locale = lang as Locale;
  const localizedPath = withLocale(locale, path);
  const url = absoluteUrl(localizedPath);
  const imageUrl = absoluteUrl(image);
  const languages = { ...hreflangAlternates(path) };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? SITE.localeAlternate : SITE.locale,
      alternateLocale:
        locale === "en" ? [SITE.locale] : [SITE.localeAlternate],
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

function orgLegalField(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed || isLegalPlaceholder(trimmed)) return undefined;
  return trimmed;
}

function buildOrganizationJsonLd(lang: Lang = "fr") {
  const founders = getTeamMembers(lang).map((person) => ({
    "@type": "Person" as const,
    name: person.name,
    jobTitle: person.role,
    ...(person.linkedin ? { sameAs: person.linkedin } : {}),
  }));

  const address = orgLegalField(LEGAL_ENTITY.address);
  const vatId = orgLegalField(LEGAL_ENTITY.vat);
  const legalName = orgLegalField(LEGAL_ENTITY.name) ?? SITE.legalName;

  return {
    "@type": "Organization",
    "@id": `${getSiteUrl()}/#organization`,
    name: SITE.name,
    legalName,
    url: getSiteUrl(),
    logo: absoluteUrl("/logo-remparia.png"),
    email: SITE.email,
    description: APROPOS[lang].sub,
    founder: founders,
    employee: founders,
    knowsAbout: [
      lang === "en" ? "Supervised business agents" : "Agents métier supervisés",
      lang === "en" ? "Sovereign AI infrastructure" : "Infrastructure IA souveraine",
      lang === "en" ? "Data governance" : "Gouvernance des données",
      "SIGNAL",
    ],
    ...(address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: address,
            addressCountry: "FR",
          },
        }
      : {}),
    ...(vatId ? { vatID: vatId } : {}),
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

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...buildOrganizationJsonLd("fr"),
  };
}

export function aboutPageJsonLd(lang: Lang = "fr") {
  const locale = lang === "en" ? "en" : "fr";
  const path = withLocale(locale, "/a-propos");
  const isEn = lang === "en";

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isEn ? "About Remparia" : "À propos de Remparia",
    url: absoluteUrl(path),
    inLanguage: isEn ? "en-US" : "fr-FR",
    description: APROPOS[lang].sub,
    mainEntity: buildOrganizationJsonLd(lang),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: getSiteUrl(),
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
    url: getSiteUrl(),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    email: SITE.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    serviceType: [
      "Agents métier",
      "Stratégie & gouvernance",
      "Infrastructure souveraine",
      "Adoption & transfert",
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
        url: absoluteUrl(withLocale("fr", `/services/${slug}`)),
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
        url: absoluteUrl(withLocale("fr", `/secteurs/${slug}`)),
        description: item?.desc,
      };
    }),
  };
}

export function signalArticleJsonLd(lang: Lang | Locale = "fr") {
  const locale = lang === "en" ? "en" : "fr";
  const path = withLocale(locale, "/methode");
  const isEn = locale === "en";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isEn ? "SIGNAL protocol — Remparia" : "Protocole SIGNAL — Remparia",
    description: isEn
      ? "Remparia's six-stage method from fieldwork to measurable agent deployment."
      : "Méthode Remparia en six étapes, du terrain à un usage mesurable.",
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: getSiteUrl(),
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-remparia.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    inLanguage: isEn ? "en-US" : "fr-FR",
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Remparia",
    url: absoluteUrl(withLocale("fr", "/contact")),
    description:
      "Contactez Remparia pour un diagnostic SIGNAL ou une discussion sur vos cas d'usage des agents.",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      email: SITE.email,
      url: getSiteUrl(),
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  lang: Lang | Locale = "fr",
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(withLocale(lang as Locale, item.path)),
    })),
  };
}

export function serviceJsonLd(slug: string, lang: Lang | Locale = "fr") {
  const item = getService(slug, lang === "en" ? "en" : "fr");
  if (!item) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.desc,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: getSiteUrl(),
    },
    areaServed: "FR",
    url: absoluteUrl(withLocale(lang as Locale, `/services/${slug}`)),
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
    "/a-propos",
    "/carrieres",
    "/ressources",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
  ];
  const servicePaths = SERVICE_SLUGS.map((slug) => `/services/${slug}`);
  const secteurPaths = SECTEUR_SLUGS.map((slug) => `/secteurs/${slug}`);
  const bare = [...staticPaths, ...servicePaths, ...secteurPaths].filter(
    (path) => !SITEMAP_EXCLUDED.has(path),
  );
  return LOCALES.flatMap((locale) =>
    bare.map((path) => withLocale(locale, path)),
  );
}

export function secteurMeta(slug: string) {
  const item = getSecteur(slug, "fr");
  const detail = getSecteurDetail(slug, "fr");
  return {
    title: detail?.heroH ?? item?.title ?? "Secteur",
    description:
      detail?.heroP ??
      item?.desc ??
      "Approche Remparia pour intégrer l'infrastructure souveraine dans votre secteur.",
    image: getSecteurImage(slug),
  };
}

export function serviceMeta(slug: string) {
  const item = getService(slug, "fr");
  return {
    title: item?.title ?? "Service",
    description:
      item?.desc ??
      "Service Remparia pour déployer l'infrastructure souveraine jusqu'à la production.",
    image: getServiceImage(slug),
  };
}
