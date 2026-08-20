import { CONTACT_EMAIL } from "@/lib/contact-email";

function legalEnv(key: string, placeholder: string) {
  const value = process.env[key]?.trim();
  return value || placeholder;
}

/**
 * Infos société — surcharger via LEGAL_* dans Vercel / .env.local.
 * Les fallbacks correspondent à .env.example (SIRET/TVA à remplacer par les valeurs réelles).
 */
export const LEGAL_ENTITY = {
  name: legalEnv("LEGAL_NAME", "Remparia"),
  legalForm: legalEnv("LEGAL_FORM", "SAS"),
  shareCapital: legalEnv("LEGAL_SHARE_CAPITAL", "1 000 €"),
  siret: legalEnv("LEGAL_SIRET", "000 000 000 00000"),
  rcs: legalEnv("LEGAL_RCS", "RCS Nanterre"),
  vat: legalEnv("LEGAL_VAT", "FR00 000000000"),
  address: legalEnv("LEGAL_ADDRESS", "7 avenue de la Cristallerie, 92310 Sèvres"),
  country: "France",
  email: CONTACT_EMAIL,
  publicationDirector: legalEnv("LEGAL_PUBLICATION_DIRECTOR", "Tannous Mekari"),
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, United States",
    website: "https://vercel.com",
  },
} as const;

/** True when a legal field still uses bracketed placeholder copy. */
export function isLegalPlaceholder(value: string): boolean {
  return /\[.*(à compléter|to complete)/i.test(value);
}
