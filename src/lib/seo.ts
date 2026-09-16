import type { Metadata } from "next";
import type { Lang } from "@/lib/content";
import {
  APROPOS,
  SECTEUR_SLUGS,
  SERVICE_SLUGS,
  SOCIAL_LINKS,
  getSecteur,
  getSecteurDetail,
  getSecteurImage,
  getService,
  getServiceImage,
} from "@/lib/content";
import { DEFAULT_LOCALE, LOCALES, withLocale, type Locale } from "@/lib/i18n";
import { homePremium } from "@/lib/home-premium";
import { osPage } from "@/lib/os-page";
import { studioPage } from "@/lib/studio-page";
import { governancePage } from "@/lib/governance-page";
import { sovereigntyPage } from "@/lib/sovereignty-page";
import { CAS_USAGE, DEMARRER, isHeartSecteur } from "@/lib/strategy";

import { CONTACT_EMAIL } from "./contact-email";
import { LEGAL_ENTITY, isLegalPlaceholder } from "./legal-entity";
import { signalPage } from "./signal-page";
import { getTeamMembers } from "./team";
import { legalAgentPage } from "./legal-agent-page";
import { financeAgentPage } from "./finance-agent-page";
import { realEstateAgentPage } from "./real-estate-agent-page";
import { commerceAgentPage } from "./commerce-agent-page";

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
    "Remparia déploie des agents métier supervisés chez les métiers spécialisés. L’humain garde la décision ; les données restent sous contrôle.",
  twitter: "@remparia",
  ogImage: "/4a7fe64c-880c-4c2d-b5ff-451c58be4fc0.png",
  logo: "/logo-remparia-v3.png",
  linkedIn: "https://www.linkedin.com/company/remparia",
} as const;

function seoLang(lang: Lang | Locale = "fr"): Lang {
  return lang === "en" ? "en" : "fr";
}

function inLanguage(lang: Lang | Locale) {
  return seoLang(lang) === "en" ? "en-US" : "fr-FR";
}

function orgId() {
  return `${getSiteUrl()}/#organization`;
}

function logoImageObject() {
  return {
    "@type": "ImageObject" as const,
    url: absoluteUrl(SITE.logo),
  };
}

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  lang?: Lang | Locale;
  ogType?: "website" | "article";
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
  "/design-system",
]);

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
  lang = DEFAULT_LOCALE,
  ogType = "website",
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
      types: {
        "text/plain": absoluteUrl("/llms.txt"),
      },
    },
    openGraph: {
      type: ogType,
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
      site: SITE.twitter,
      creator: SITE.twitter,
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
    "@id": orgId(),
    name: SITE.name,
    legalName,
    url: getSiteUrl(),
    logo: logoImageObject(),
    image: absoluteUrl(SITE.ogImage),
    email: SITE.email,
    description: APROPOS[lang].sub,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    founder: founders,
    employee: founders,
    knowsAbout: [
      lang === "en" ? "Supervised business agents" : "Agents métier supervisés",
      lang === "en" ? "Sovereign AI infrastructure" : "Infrastructure IA souveraine",
      lang === "en" ? "Data governance" : "Gouvernance des données",
      "SIGNAL",
      "Remparia OS",
      "ALLOW / REVIEW / BLOCK",
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
  const locale = seoLang(lang);
  const path = withLocale(locale, "/a-propos");
  const isEn = locale === "en";

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isEn ? "About Remparia" : "À propos de Remparia",
    url: absoluteUrl(path),
    inLanguage: inLanguage(locale),
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
    inLanguage: ["fr-FR", "en-US"],
    publisher: {
      "@id": orgId(),
    },
    hasPart: {
      "@type": "WebPage",
      name: "llms.txt",
      url: absoluteUrl("/llms.txt"),
      encodingFormat: "text/plain",
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
    parentOrganization: { "@id": orgId() },
  };
}

export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function webPageJsonLd({
  lang,
  path,
  name,
  description,
}: {
  lang: Lang | Locale;
  path: string;
  name: string;
  description: string;
}) {
  const locale = seoLang(lang);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(withLocale(locale, path)),
    inLanguage: inLanguage(locale),
    isPartOf: { "@id": orgId() },
    publisher: { "@id": orgId() },
  };
}

export function servicesItemListJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "en" ? "Remparia services" : "Services Remparia",
    itemListElement: SERVICE_SLUGS.map((slug, index) => {
      const item = getService(slug, locale);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item?.title ?? slug,
        url: absoluteUrl(withLocale(locale, `/services/${slug}`)),
        description: item?.desc,
      };
    }),
  };
}

export function secteursItemListJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "en" ? "Remparia industries" : "Secteurs Remparia",
    itemListElement: SECTEUR_SLUGS.map((slug, index) => {
      const item = getSecteur(slug, locale);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item?.title ?? slug,
        url: absoluteUrl(withLocale(locale, `/secteurs/${slug}`)),
        description: item?.desc,
      };
    }),
  };
}

export function casUsageItemListJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const copy = CAS_USAGE[locale];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.title,
    description: copy.sub,
    itemListElement: copy.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.process,
      description: item.withAgent,
    })),
  };
}

export function demarrerItemListJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const copy = DEMARRER[locale];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.title,
    description: copy.sub,
    itemListElement: copy.paths.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: `${item.what} ${item.duration}. ${item.price}.`,
    })),
  };
}

export function signalArticleJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const path = withLocale(locale, "/signal");
  const isEn = locale === "en";
  const page = signalPage(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isEn ? "SIGNAL — Remparia" : "SIGNAL — Remparia",
    description: page.sub,
    author: {
      "@id": orgId(),
    },
    publisher: {
      "@id": orgId(),
      name: SITE.name,
      logo: logoImageObject(),
    },
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    inLanguage: inLanguage(locale),
  };
}

export function signalHowToJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const { journey } = signalPage(locale);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: journey.title,
    description: journey.sub,
    totalTime: "P12W",
    url: absoluteUrl(withLocale(locale, "/signal")),
    inLanguage: inLanguage(locale),
    step: journey.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `${step.letter} — ${step.title}`,
      text: step.desc,
      url: `${absoluteUrl(withLocale(locale, "/signal"))}#protocol`,
    })),
  };
}

export function osSoftwareJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const path = withLocale(locale, "/solution");
  const page = osPage(locale);
  const isEn = locale === "en";

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Remparia OS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: page.hero.sub,
    url: absoluteUrl(path),
    image: absoluteUrl(SITE.ogImage),
    inLanguage: inLanguage(locale),
    featureList: [
      "ALLOW / REVIEW / BLOCK",
      isEn ? "Agent identity" : "Identité agents",
      isEn ? "Audit log" : "Journal d’audit",
      isEn ? "Model routing" : "Routage des modèles",
    ],
    provider: { "@id": orgId() },
    publisher: { "@id": orgId() },
  };
}

/** @deprecated Use osSoftwareJsonLd. Kept as alias for existing imports. */
export function osArticleJsonLd(lang: Lang | Locale = "fr") {
  return osSoftwareJsonLd(lang);
}

export function studioServiceJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const page = studioPage(locale);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Remparia Studio",
    description: page.sub,
    provider: { "@id": orgId() },
    areaServed: "FR",
    url: absoluteUrl(withLocale(locale, "/studio")),
    inLanguage: inLanguage(locale),
  };
}

export function signalFaqJsonLd(lang: Lang | Locale = "fr") {
  const { faq } = signalPage(seoLang(lang));
  return faqJsonLd(faq.items);
}

export function homeFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(homePremium(seoLang(lang)).faq.items);
}

export function osFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(osPage(seoLang(lang)).faq.items);
}

export function studioFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(studioPage(seoLang(lang)).faq.items);
}

export function governanceFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(governancePage(seoLang(lang)).faq.items);
}

export function sovereigntyFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(sovereigntyPage(seoLang(lang)).faq.items);
}

export function legalPackFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(legalAgentPage(seoLang(lang)).faq.items);
}

export function financePackFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(financeAgentPage(seoLang(lang)).faq.items);
}

export function realEstatePackFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(realEstateAgentPage(seoLang(lang)).faq.items);
}

export function commercePackFaqJsonLd(lang: Lang | Locale = "fr") {
  return faqJsonLd(commerceAgentPage(seoLang(lang)).faq.items);
}

export function contactPageJsonLd(lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isEn ? "Contact Remparia" : "Contact Remparia",
    url: absoluteUrl(withLocale(locale, "/contact")),
    inLanguage: inLanguage(locale),
    description: isEn
      ? "Contact Remparia for a SIGNAL diagnostic or an agent use case."
      : "Contactez Remparia pour un diagnostic SIGNAL ou pour parler d’un cas d’usage agents.",
    mainEntity: {
      "@id": orgId(),
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
      item: absoluteUrl(withLocale(seoLang(lang), item.path)),
    })),
  };
}

export function homeCrumb(lang: Lang | Locale = "fr") {
  return {
    name: seoLang(lang) === "en" ? "Home" : "Accueil",
    path: "/",
  };
}

export function serviceJsonLd(slug: string, lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const item = getService(slug, locale);
  if (!item) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.desc,
    provider: {
      "@id": orgId(),
      name: SITE.name,
      url: getSiteUrl(),
    },
    areaServed: "FR",
    url: absoluteUrl(withLocale(locale, `/services/${slug}`)),
    inLanguage: inLanguage(locale),
  };
}

export function secteurFaqJsonLd(slug: string, lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const detail = getSecteurDetail(slug, locale);
  if (!detail?.faqs.length) return null;
  return faqJsonLd(detail.faqs);
}

export function getAllContentPaths() {
  const staticPaths = [
    "/",
    "/services",
    "/solution",
    "/studio",
    "/governance",
    "/sovereignty",
    "/signal",
    "/cas-d-usage",
    "/pour-qui",
    "/demarrer",
    "/secteurs",
    "/solutions/real-estate",
    "/solutions/legal",
    "/solutions/finance",
    "/solutions/commerce",
    "/a-propos",
    "/carrieres",
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

export function sitemapPriority(logical: string): number {
  if (logical === "/") return 1;
  if (
    logical === "/demarrer" ||
    logical === "/solution" ||
    logical === "/studio" ||
    logical === "/signal"
  ) {
    return 0.9;
  }
  if (logical.startsWith("/secteurs/")) {
    const slug = logical.slice("/secteurs/".length);
    return isHeartSecteur(slug) ? 0.8 : 0.6;
  }
  if (
    logical === "/cas-d-usage" ||
    logical === "/pour-qui" ||
    logical === "/services" ||
    logical === "/secteurs" ||
    logical === "/contact" ||
    logical === "/governance" ||
    logical === "/sovereignty" ||
    logical === "/a-propos" ||
    logical.startsWith("/solutions/") ||
    logical.startsWith("/services/")
  ) {
    return 0.7;
  }
  if (
    logical === "/mentions-legales" ||
    logical === "/confidentialite" ||
    logical === "/cookies"
  ) {
    return 0.4;
  }
  return 0.6;
}

export function secteurMeta(slug: string, lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const item = getSecteur(slug, locale);
  const detail = getSecteurDetail(slug, locale);
  const fallback =
    locale === "en"
      ? "Remparia business agents for this profession: SIGNAL, Studio, OS, hosting in France."
      : "Agents métier Remparia pour ce secteur : SIGNAL, Studio, OS, hébergement France.";
  return {
    title: detail?.heroH ?? item?.title ?? (locale === "en" ? "Industry" : "Secteur"),
    description: detail?.heroP ?? item?.desc ?? fallback,
    image: getSecteurImage(slug),
  };
}

export function serviceMeta(slug: string, lang: Lang | Locale = "fr") {
  const locale = seoLang(lang);
  const item = getService(slug, locale);
  const fallback =
    locale === "en"
      ? "Remparia service: from SIGNAL framing to production."
      : "Service Remparia : du cadrage SIGNAL au déploiement en production.";
  return {
    title: item?.title ?? (locale === "en" ? "Service" : "Service"),
    description: item?.desc ?? fallback,
    image: getServiceImage(slug),
  };
}
