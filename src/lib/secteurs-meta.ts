export type SecteurCategory =
  | "industries"
  | "professions"
  | "commerce"
  | "operations"
  | "organisation";

export type SecteurMeta = {
  category: SecteurCategory;
  image: string;
};

/** Catalogue central : catégorie + image (remplaçable par une vraie photo au même chemin). */
export const SECTEUR_META: Record<string, SecteurMeta> = {
  "finance-assurance": {
    category: "industries",
    image: "/secteurs/finance-assurance.svg",
  },
  sante: { category: "industries", image: "/secteurs/sante.svg" },
  industrie: { category: "industries", image: "/secteurs/industrie.svg" },
  "services-conseil": {
    category: "industries",
    image: "/secteurs/services-conseil.svg",
  },
  "tech-produit": { category: "industries", image: "/secteurs/tech-produit.svg" },
  "secteur-public": {
    category: "industries",
    image: "/secteurs/secteur-public.svg",
  },
  "cabinet-paramedical": {
    category: "professions",
    image: "/secteurs/cabinet-paramedical.svg",
  },
  "cabinet-avocat": {
    category: "professions",
    image: "/secteurs/cabinet-avocat.svg",
  },
  "cabinet-dentaire": {
    category: "professions",
    image: "/secteurs/cabinet-dentaire.svg",
  },
  "etude-notariale": {
    category: "professions",
    image: "/secteurs/etude-notariale.svg",
  },
  "expertise-comptable": {
    category: "professions",
    image: "/secteurs/expertise-comptable.svg",
  },
  "clinique-veterinaire": {
    category: "professions",
    image: "/secteurs/clinique-veterinaire.svg",
  },
  "courtier-assurance": {
    category: "professions",
    image: "/secteurs/courtier-assurance.svg",
  },
  "agence-immobiliere": {
    category: "commerce",
    image: "/secteurs/agence-immobiliere.svg",
  },
  "salon-beaute": { category: "commerce", image: "/secteurs/salon-beaute.svg" },
  "artisan-btp": { category: "commerce", image: "/secteurs/artisan-btp.svg" },
  restaurant: { category: "commerce", image: "/secteurs/restaurant.svg" },
  "garage-automobile": {
    category: "commerce",
    image: "/secteurs/garage-automobile.svg",
  },
  "e-commerce": { category: "commerce", image: "/secteurs/e-commerce.svg" },
  "plombier-chauffagiste": {
    category: "commerce",
    image: "/secteurs/plombier-chauffagiste.svg",
  },
  "hotel-tourisme": {
    category: "commerce",
    image: "/secteurs/hotel-tourisme.svg",
  },
  "logistique-transport": {
    category: "operations",
    image: "/secteurs/logistique-transport.svg",
  },
  "retail-distribution": {
    category: "operations",
    image: "/secteurs/retail-distribution.svg",
  },
  "energie-utilities": {
    category: "operations",
    image: "/secteurs/energie-utilities.svg",
  },
  "agriculture-agroalimentaire": {
    category: "operations",
    image: "/secteurs/agriculture-agroalimentaire.svg",
  },
  "pharma-sciences-vie": {
    category: "operations",
    image: "/secteurs/pharma-sciences-vie.svg",
  },
  "rh-recrutement": {
    category: "organisation",
    image: "/secteurs/rh-recrutement.svg",
  },
  "education-formation": {
    category: "organisation",
    image: "/secteurs/education-formation.svg",
  },
  "media-contenu": {
    category: "organisation",
    image: "/secteurs/media-contenu.svg",
  },
};

export const SECTEUR_CATEGORY_LABELS = {
  fr: {
    all: "Tous",
    industries: "Industries",
    professions: "Professions",
    commerce: "Commerce & services",
    operations: "Ops & filière",
    organisation: "Organisation",
  },
  en: {
    all: "All",
    industries: "Industries",
    professions: "Professions",
    commerce: "Commerce & services",
    operations: "Ops & value chain",
    organisation: "Organisation",
  },
} as const;

export const SECTEUR_PLACEHOLDER = "/secteurs/_placeholder.svg";

export function getSecteurMeta(slug: string): SecteurMeta {
  return (
    SECTEUR_META[slug] ?? {
      category: "industries",
      image: SECTEUR_PLACEHOLDER,
    }
  );
}

export function getSecteurImage(slug: string) {
  return getSecteurMeta(slug).image;
}
