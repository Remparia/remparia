type Lang = "fr" | "en";

type Localized = {
  fr: string;
  en: string;
};

export type UseCaseContext = {
  agent: string;
  sectors: { slug: string; label: string }[];
  workflow: string[];
};

type ContextDefinition = {
  agent: Localized;
  sectors: { slug: string; label: Localized }[];
  workflow: { fr: string[]; en: string[] };
};

const l = (fr: string, en: string): Localized => ({ fr, en });

const CONTEXTS: Record<string, ContextDefinition> = {
  "collecte-de-pieces": {
    agent: l("Agent collecte documentaire", "Document collection agent"),
    sectors: [
      { slug: "etude-notariale", label: l("Étude notariale", "Notarial office") },
      { slug: "expertise-comptable", label: l("Expertise comptable", "Accounting firm") },
      { slug: "courtier-assurance", label: l("Courtage", "Insurance brokerage") },
    ],
    workflow: {
      fr: ["Lit la liste attendue", "Identifie les manquants", "Relance selon les règles", "Escalade les exceptions"],
      en: ["Reads the expected list", "Finds missing items", "Follows up under policy", "Escalates exceptions"],
    },
  },
  "controle-de-completude": {
    agent: l("Agent contrôle de complétude", "Completeness control agent"),
    sectors: [
      { slug: "cabinet-avocat", label: l("Cabinet d’avocat", "Law firm") },
      { slug: "etude-notariale", label: l("Étude notariale", "Notarial office") },
      { slug: "finance-assurance", label: l("Finance & assurance", "Finance & insurance") },
    ],
    workflow: {
      fr: ["Ouvre les sources autorisées", "Applique la check-list métier", "Documente chaque écart", "Soumet le dossier à l’expert"],
      en: ["Opens approved sources", "Applies the business checklist", "Documents every gap", "Submits the file to the expert"],
    },
  },
  "preparation-de-revision": {
    agent: l("Agent préparation de révision", "Review preparation agent"),
    sectors: [
      { slug: "expertise-comptable", label: l("Expertise comptable", "Accounting firm") },
      { slug: "finance-assurance", label: l("Finance", "Finance") },
      { slug: "services-conseil", label: l("Conseil", "Consulting") },
    ],
    workflow: {
      fr: ["Assemble les écritures et pièces", "Rapproche les sources", "Signale les écarts", "Prépare la première lecture"],
      en: ["Assembles entries and evidence", "Reconciles sources", "Flags variances", "Prepares the first review"],
    },
  },
  "instruction-de-dossier": {
    agent: l("Agent instruction de dossier", "Case instruction agent"),
    sectors: [
      { slug: "secteur-public", label: l("Secteur public", "Public sector") },
      { slug: "finance-assurance", label: l("Finance & assurance", "Finance & insurance") },
      { slug: "agence-immobiliere", label: l("Immobilier", "Real estate") },
    ],
    workflow: {
      fr: ["Collecte les informations", "Structure le dossier", "Pré-remplit les champs autorisés", "Remonte les points à décider"],
      en: ["Collects information", "Structures the case", "Pre-fills approved fields", "Escalates points for decision"],
    },
  },
  "kyc-lcb-ft": {
    agent: l("Agent KYC / LCB-FT", "KYC / AML agent"),
    sectors: [
      { slug: "finance-assurance", label: l("Finance & assurance", "Finance & insurance") },
      { slug: "courtier-assurance", label: l("Courtage", "Insurance brokerage") },
      { slug: "etude-notariale", label: l("Notariat", "Notarial") },
    ],
    workflow: {
      fr: ["Demande les justificatifs", "Exécute les contrôles autorisés", "Journalise les sources", "Présente les alertes au responsable"],
      en: ["Requests evidence", "Runs approved controls", "Logs sources", "Presents alerts to the owner"],
    },
  },
  "reporting-client": {
    agent: l("Agent reporting client", "Client reporting agent"),
    sectors: [
      { slug: "services-conseil", label: l("Conseil", "Consulting") },
      { slug: "courtier-assurance", label: l("Courtage", "Insurance brokerage") },
      { slug: "retail-distribution", label: l("Retail", "Retail") },
    ],
    workflow: {
      fr: ["Collecte les données validées", "Applique le modèle client", "Explique les variations", "Attend la validation avant envoi"],
      en: ["Collects approved data", "Applies the client template", "Explains variances", "Waits for approval before send"],
    },
  },
  "comptes-rendus": {
    agent: l("Agent comptes rendus", "Meeting notes agent"),
    sectors: [
      { slug: "services-conseil", label: l("Conseil", "Consulting") },
      { slug: "cabinet-paramedical", label: l("Paramédical", "Allied health") },
      { slug: "industrie", label: l("Industrie", "Industry") },
    ],
    workflow: {
      fr: ["Reçoit les éléments autorisés", "Structure selon la trame", "Identifie décisions et actions", "Soumet la version à valider"],
      en: ["Receives approved inputs", "Structures to the template", "Finds decisions and actions", "Submits a version for approval"],
    },
  },
  "recherche-documentaire": {
    agent: l("Agent recherche sourcée", "Sourced research agent"),
    sectors: [
      { slug: "cabinet-avocat", label: l("Juridique", "Legal") },
      { slug: "pharma-sciences-vie", label: l("Pharma", "Life sciences") },
      { slug: "media-contenu", label: l("Média", "Media") },
    ],
    workflow: {
      fr: ["Interroge le corpus autorisé", "Classe les résultats", "Cite chaque origine", "Soumet la synthèse à l’expert"],
      en: ["Queries the approved corpus", "Ranks results", "Cites every origin", "Submits the synthesis to the expert"],
    },
  },
  "livrables-recurrents": {
    agent: l("Agent production récurrente", "Recurring delivery agent"),
    sectors: [
      { slug: "expertise-comptable", label: l("Expertise comptable", "Accounting firm") },
      { slug: "services-conseil", label: l("Conseil", "Consulting") },
      { slug: "e-commerce", label: l("E-commerce", "E-commerce") },
    ],
    workflow: {
      fr: ["Surveille le calendrier", "Assemble les données attendues", "Produit selon le modèle", "Bloque la publication avant revue"],
      en: ["Monitors the calendar", "Assembles expected data", "Produces to the template", "Blocks publishing before review"],
    },
  },
};

export const USE_CASE_CONTEXT_COPY = {
  fr: {
    agent: "Agent mobilisé",
    sectors: "Métiers concernés",
    workflow: "Chaîne d’exécution",
  },
  en: {
    agent: "Agent involved",
    sectors: "Relevant professions",
    workflow: "Execution chain",
  },
} as const;

export function getUseCaseContext(
  slug: string,
  lang: Lang,
): UseCaseContext | null {
  const context = CONTEXTS[slug];
  if (!context) return null;

  return {
    agent: context.agent[lang],
    sectors: context.sectors.map((sector) => ({
      slug: sector.slug,
      label: sector.label[lang],
    })),
    workflow: context.workflow[lang],
  };
}
