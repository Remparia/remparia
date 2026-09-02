/** Canonical public origin — single source for domain redirects. */
export const CANONICAL_SITE_ORIGIN = "https://www.remparia.com";

/** Hostnames that must 308-redirect to CANONICAL_SITE_ORIGIN (same path + query). */
export const LEGACY_FR_HOSTS = new Set(["remparia.fr", "www.remparia.fr"]);

/** English-friendly slugs → existing localized routes (308). */
export const EN_SLUG_ALIASES: Record<string, string> = {
  "/en/about": "/en/a-propos",
  "/en/about-us": "/en/a-propos",
  "/en/get-started": "/en/demarrer",
  "/en/start": "/en/demarrer",
  "/en/use-cases": "/en/cas-d-usage",
  "/en/careers": "/en/carrieres",
  "/en/privacy": "/en/confidentialite",
  "/en/legal": "/en/mentions-legales",
  "/en/legal-notice": "/en/mentions-legales",
  "/en/method": "/en/signal",
  "/en/methodology": "/en/signal",
  "/en/industries": "/en/secteurs",
  "/en/sectors": "/en/secteurs",
  "/en/solutions": "/en/secteurs",
  "/en/who-it-is-for": "/en/cas-d-usage",
  "/en/for-who": "/en/cas-d-usage",
};
