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

function hqImage(file: string) {
  return `/secteurs/remparia-hq-${file}.png`;
}

/** Catalogue central : catégorie + image */
export const SECTEUR_META: Record<string, SecteurMeta> = {
  "finance-assurance": {
    category: "industries",
    image: hqImage("finance-assurance"),
  },
  sante: { category: "industries", image: hqImage("sante") },
  industrie: {
    category: "industries",
    image: hqImage("industrie"),
  },
  "services-conseil": {
    category: "industries",
    image: hqImage("services-conseil"),
  },
  "tech-produit": { category: "industries", image: hqImage("tech-produit") },
  "secteur-public": {
    category: "industries",
    image: hqImage("secteur-public"),
  },
  "cabinet-paramedical": {
    category: "professions",
    image: hqImage("cabinet-paramedical"),
  },
  "cabinet-avocat": {
    category: "professions",
    image: hqImage("cabinet-avocat"),
  },
  "cabinet-dentaire": {
    category: "professions",
    image: hqImage("cabinet-dentaire"),
  },
  "etude-notariale": {
    category: "professions",
    image: hqImage("etude-notariale"),
  },
  "expertise-comptable": {
    category: "professions",
    image: hqImage("expertise-comptable"),
  },
  "clinique-veterinaire": {
    category: "professions",
    image: hqImage("clinique-veterinaire"),
  },
  "courtier-assurance": {
    category: "professions",
    image: hqImage("courtier-assurance"),
  },
  "agence-immobiliere": {
    category: "commerce",
    image: hqImage("agence-immobiliere"),
  },
  "salon-beaute": { category: "commerce", image: hqImage("salon-beaute") },
  "artisan-btp": { category: "commerce", image: hqImage("artisan-btp") },
  restaurant: { category: "commerce", image: hqImage("restaurant") },
  "garage-automobile": {
    category: "commerce",
    image: hqImage("garage-automobile"),
  },
  "e-commerce": { category: "commerce", image: hqImage("ecommerce-boutique") },
  "plombier-chauffagiste": {
    category: "commerce",
    image: hqImage("plombier-chauffagiste"),
  },
  "hotel-tourisme": {
    category: "commerce",
    image: hqImage("hotellerie-tourisme"),
  },
  "logistique-transport": {
    category: "operations",
    image: hqImage("logistique-transport"),
  },
  "retail-distribution": {
    category: "operations",
    image: hqImage("retail-distribution"),
  },
  "energie-utilities": {
    category: "operations",
    image: hqImage("energie-utilities"),
  },
  "agriculture-agroalimentaire": {
    category: "operations",
    image: hqImage("agriculture"),
  },
  "pharma-sciences-vie": {
    category: "operations",
    image: hqImage("pharma-sciences-vie"),
  },
  "rh-recrutement": {
    category: "organisation",
    image: hqImage("rh-recrutement"),
  },
  "education-formation": {
    category: "organisation",
    image: hqImage("education-formation"),
  },
  "media-contenu": {
    category: "organisation",
    image: hqImage("media-contenu"),
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
