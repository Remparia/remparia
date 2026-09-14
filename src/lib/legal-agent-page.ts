import type { Lang } from "./content";
import type { PackRichPageCopy } from "./pack-rich-page";

const fr: PackRichPageCopy = {
  eyebrow: "SOLUTIONS / JURIDIQUE",
  title: "La machine prépare. ",
  titleAccent: "L’avocat tranche.",
  sub: "Revue documentaire, préparation de dossiers et contrôles de conformité sous gouvernance, sans avis automatisé ni signature machine.",
  ctaPrimary: "Lancer SIGNAL juridique",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "Voir le métier avocat",
  ctaSecondaryHref: "/secteurs/cabinet-avocat",
  heroSecteurSlug: "cabinet-avocat",
  proof: [
    {
      value: "0",
      label: "avis juridique ou signature produits par l’agent",
      source: "Stop humain",
    },
    {
      value: "4",
      label: "agents pack — revue, audience, conformité, intake",
      source: "Force de travail",
    },
    {
      value: "100 %",
      label: "écarts de conformité escaladés, jamais enterrés",
      source: "Gouvernance",
    },
    {
      value: "SIGNAL",
      label: "avant le build : sources autorisées et seuils cadrés",
      source: "Méthode",
    },
  ],
  workforce: {
    eyebrow: "01 / FORCE DE TRAVAIL",
    title: "Trier, assembler, signaler. Jamais conseiller.",
    body: "Des agents qui accélèrent la préparation. La stratégie et le conseil restent humains.",
    agents: [
      {
        title: "Dossier lu, écarts signalés",
        forWhom: "Associés, collaborateurs, clercs",
        does: "Trier, synthétiser, marquer les manques. Synthèse sourcée pour l’humain.",
        skills: ["Tri", "Synthèse", "Écarts", "Sources citées"],
        never: "Il ne rend pas d’avis et ne signe rien.",
      },
      {
        title: "Dossier prêt pour l’audience",
        forWhom: "Contentieux / actes",
        does: "Assembler la liasse, échéances et brouillon de trame.",
        skills: ["Liasse", "Échéances", "Trame", "Points à trancher"],
        never: "Il n’engage pas le cabinet auprès du client ou du juge.",
      },
      {
        title: "Contrôle cadré, doute escaladé",
        forWhom: "Conformité / risque",
        does: "Check-list, écarts, piste d’audit. Décision humaine sur l’acceptation.",
        skills: ["Check-list", "Écarts", "Audit", "Escalade"],
        never: "Il ne décide pas de l’acceptation du risque ou du client.",
      },
      {
        title: "Demande client orientée",
        forWhom: "Intake / secrétariat",
        does: "Qualifier l’intake et préparer le premier dossier, sans conseil au prospect.",
        skills: ["Intake", "Orientation", "Pièces", "CRM"],
        never: "Il ne donne pas de conseil juridique au prospect.",
      },
    ],
  },
  governance: {
    eyebrow: "02 / GOUVERNANCE",
    title: "Déontologie dans le code, pas dans un slide.",
    body: "ALLOW / REVIEW / BLOCK appliqués à chaque geste métier.",
    rules: [
      {
        title: "Pas d’avis machine",
        desc: "L’agent cite et prépare ; l’avocat conseille et engage.",
      },
      {
        title: "Écarts toujours visibles",
        desc: "Aucun contrôle « vert » sans piste. Le doute remonte.",
      },
      {
        title: "Sources journalisées",
        desc: "Accès et citations tracés pour revue opposable.",
      },
      {
        title: "Signature hors périmètre",
        desc: "Aucun acte, aucun envoi engageant sans humain.",
      },
    ],
  },
  path: {
    eyebrow: "03 / TRAJECTOIRE",
    title: "Du cadrage à la production supervisée.",
    body: "Prioriser les processus à fort impact avant de construire.",
    steps: [
      { title: "SIGNAL", desc: "Observer dossiers, données autorisées, seuils déontologiques." },
      { title: "Studio", desc: "Composer agents et portes humaines." },
      { title: "OS + gouvernance", desc: "Publier sous politiques du cabinet." },
      { title: "AgentOps", desc: "Revue traces, budgets, amélioration continue." },
    ],
    note: "Connecteurs (CRM, GED, calendrier) cadrés en SIGNAL. Pas de fake case.",
  },
  offer: {
    eyebrow: "04 / OFFRE",
    title: "On commence petit, on mesure, on étend.",
    body: "Quatre niveaux : diagnostic, pilote, multi-workflows, AgentOps.",
    steps: [
      {
        index: "01",
        title: "Diagnostic juridique",
        duration: "2–3 semaines",
        items: ["Cartographie dossiers / intake", "Score impact / sensibilité", "KPI + backlog", "Démo sur extract"],
      },
      {
        index: "02",
        title: "Pilote premier agent",
        duration: "8 semaines",
        items: ["Un agent en production supervisée", "Stops humains", "Journal", "Revue D+30"],
      },
      {
        index: "03",
        title: "Programme multi-dossiers",
        duration: "3–6 mois",
        items: ["Revue + audience + conformité", "Intake si prioritaire", "Gouvernance associée", "Transfert"],
      },
      {
        index: "04",
        title: "AgentOps",
        duration: "Mensuel",
        items: ["Supervision", "Revue déontologique des traces", "Budgets", "Amélioration"],
      },
    ],
  },
  pilot: {
    eyebrow: "05 / PILOTE 8 SEMAINES",
    title: "Ce que vous voyez, semaine après semaine",
    rows: [
      { weeks: "1–2", work: "SIGNAL, sources autorisées, check-lists", see: "Carte et KPI signés" },
      { weeks: "3–5", work: "Build Studio, GED / CRM, stops", see: "Agent sur vrais dossiers" },
      { weeks: "6–7", work: "UAT associés, formation, canary", see: "Équipes qui pilotent" },
      { weeks: "8", work: "Montée en charge, revue D+30", see: "Chiffres et suite" },
    ],
  },
  training: {
    eyebrow: "06 / FORMATION",
    title: "Adopter sans diluer la responsabilité.",
    body: "Trois formats pour associés, collaborateurs et IT.",
    courses: [
      {
        code: "LEG-01",
        title: "IA gouvernée pour associés",
        audience: "Associés, risk",
        duration: "Demi-journée",
        outcomes: ["Périmètre", "Stops", "Lire un KPI"],
      },
      {
        code: "LEG-02",
        title: "Exploiter au quotidien",
        audience: "Collaborateurs, clercs, secrétariat",
        duration: "1 jour",
        outcomes: ["Lire une synthèse", "Escalader", "Corriger une pièce"],
      },
      {
        code: "LEG-03",
        title: "Maintenir",
        audience: "IT / ops",
        duration: "2 jours",
        outcomes: ["Connecteurs", "Politiques", "Audit"],
      },
    ],
  },
  audience: {
    eyebrow: "07 / POUR QUI",
    title: "Cabinets où la preuve et le temps expert comptent",
    segments: [
      { title: "Cabinets d’avocats", desc: "Volume documentaire, intake, échéances.", angle: "Pilote revue ou intake." },
      { title: "Études notariales", desc: "Pièces, relances, complétude.", angle: "Collecte sous stop humain." },
      { title: "Départements juridiques", desc: "Contrôles et synthèse interne.", angle: "Conformité + journal." },
      { title: "Réseaux multi-cabinets", desc: "Besoin d’un OS commun.", angle: "SIGNAL réseau puis pilote." },
    ],
  },
  final: {
    title: "Prochaine étape : cadrer où l’IA est légitime chez vous.",
    body: "SIGNAL pose les sources, les stops et le premier agent, sans promettre un avis machine.",
    steps: [
      "Atelier associés / risk / IT",
      "Cartographie dossiers et KPI",
      "Démo sur extract et trajectoire",
    ],
  },
  agentsHeading: "Fiches agents Remparia — déclencheur, livrable, stop humain",
  sectorLinks: [
    { label: "Cabinet d’avocat", href: "/secteurs/cabinet-avocat" },
    { label: "Étude notariale", href: "/secteurs/etude-notariale" },
  ],
};

const en: PackRichPageCopy = {
  eyebrow: "SOLUTIONS / LEGAL",
  title: "The machine prepares. ",
  titleAccent: "Counsel decides.",
  sub: "Document review, case prep and compliance checks under governance, with no automated advice or machine signature.",
  ctaPrimary: "Start legal SIGNAL",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "See the law-firm vertical",
  ctaSecondaryHref: "/secteurs/cabinet-avocat",
  heroSecteurSlug: "cabinet-avocat",
  proof: [
    {
      value: "0",
      label: "legal opinions or signatures produced by the agent",
      source: "Human stop",
    },
    {
      value: "4",
      label: "pack agents — review, hearing, compliance, intake",
      source: "Workforce",
    },
    {
      value: "100 %",
      label: "compliance gaps escalated, never buried",
      source: "Governance",
    },
    {
      value: "SIGNAL",
      label: "before the build: allowed sources and thresholds scoped",
      source: "Method",
    },
  ],
  workforce: {
    eyebrow: "01 / AI WORKFORCE",
    title: "Sort, assemble, flag. Never advise.",
    body: "Agents that accelerate preparation. Strategy and counsel stay human.",
    agents: [
      {
        title: "File read, gaps flagged",
        forWhom: "Partners, associates, clerks",
        does: "Sort, synthesize, mark missing items. Sourced brief for the human.",
        skills: ["Sort", "Synthesis", "Gaps", "Cited sources"],
        never: "It does not issue an opinion or sign.",
      },
      {
        title: "File ready for hearing",
        forWhom: "Litigation / deeds",
        does: "Assemble the pack, deadlines and draft outline.",
        skills: ["Pack", "Deadlines", "Outline", "Decision points"],
        never: "It does not commit the firm to the client or the court.",
      },
      {
        title: "Framed check, doubt escalated",
        forWhom: "Compliance / risk",
        does: "Checklist, gaps, audit trail. Human decision on acceptance.",
        skills: ["Checklist", "Gaps", "Audit", "Escalation"],
        never: "It does not decide client or risk acceptance.",
      },
      {
        title: "Client request routed",
        forWhom: "Intake / secretariat",
        does: "Qualify intake and prepare the first file, with no advice to the prospect.",
        skills: ["Intake", "Routing", "Documents", "CRM"],
        never: "It does not give legal advice to a prospect.",
      },
    ],
  },
  governance: {
    eyebrow: "02 / GOVERNANCE",
    title: "Ethics in code, not in a slide.",
    body: "ALLOW / REVIEW / BLOCK applied to every business gesture.",
    rules: [
      { title: "No machine advice", desc: "The agent cites and prepares; counsel advises and commits." },
      { title: "Gaps always visible", desc: "No “green” check without a trail. Doubt escalates." },
      { title: "Sources logged", desc: "Access and citations traced for auditable review." },
      { title: "Signature out of scope", desc: "No deed, no binding send without a human." },
    ],
  },
  path: {
    eyebrow: "03 / PATH",
    title: "From framing to supervised production.",
    body: "Prioritize high-impact workflows before building.",
    steps: [
      { title: "SIGNAL", desc: "Observe files, allowed data, ethics thresholds." },
      { title: "Studio", desc: "Compose agents and human gates." },
      { title: "OS + governance", desc: "Publish under firm policies." },
      { title: "AgentOps", desc: "Trace review, budgets, continuous improvement." },
    ],
    note: "Connectors (CRM, DMS, calendar) scoped in SIGNAL. No fake case studies.",
  },
  offer: {
    eyebrow: "04 / OFFER",
    title: "Start small, measure, then extend.",
    body: "Four tiers: diagnostic, pilot, multi-workflows, AgentOps.",
    steps: [
      {
        index: "01",
        title: "Legal diagnostic",
        duration: "2–3 weeks",
        items: ["Map files / intake", "Impact / sensitivity score", "KPI + backlog", "Demo on extract"],
      },
      {
        index: "02",
        title: "First-agent pilot",
        duration: "8 weeks",
        items: ["One agent in supervised production", "Human stops", "Log", "D+30 review"],
      },
      {
        index: "03",
        title: "Multi-matter program",
        duration: "3–6 months",
        items: ["Review + hearing + compliance", "Intake if prioritized", "Partner governance", "Transfer"],
      },
      {
        index: "04",
        title: "AgentOps",
        duration: "Monthly",
        items: ["Supervision", "Ethics review of traces", "Budgets", "Improvement"],
      },
    ],
  },
  pilot: {
    eyebrow: "05 / 8-WEEK PILOT",
    title: "What you see, week by week",
    rows: [
      { weeks: "1–2", work: "SIGNAL, allowed sources, checklists", see: "Map and signed KPIs" },
      { weeks: "3–5", work: "Studio build, DMS / CRM, stops", see: "Agent on real files" },
      { weeks: "6–7", work: "Partner UAT, training, canary", see: "Teams operating" },
      { weeks: "8", work: "Ramp-up, D+30 review", see: "Numbers and next step" },
    ],
  },
  training: {
    eyebrow: "06 / TRAINING",
    title: "Adopt without diluting accountability.",
    body: "Three formats for partners, associates and IT.",
    courses: [
      {
        code: "LEG-01",
        title: "Governed AI for partners",
        audience: "Partners, risk",
        duration: "Half day",
        outcomes: ["Scope", "Stops", "Read a KPI"],
      },
      {
        code: "LEG-02",
        title: "Day-to-day operations",
        audience: "Associates, clerks, secretariat",
        duration: "1 day",
        outcomes: ["Read a brief", "Escalate", "Fix a document"],
      },
      {
        code: "LEG-03",
        title: "Maintain",
        audience: "IT / ops",
        duration: "2 days",
        outcomes: ["Connectors", "Policies", "Audit"],
      },
    ],
  },
  audience: {
    eyebrow: "07 / WHO IT’S FOR",
    title: "Firms where evidence and expert time matter",
    segments: [
      { title: "Law firms", desc: "Document volume, intake, deadlines.", angle: "Review or intake pilot." },
      { title: "Notarial offices", desc: "Documents, chase-ups, completeness.", angle: "Collection under human stop." },
      { title: "In-house legal", desc: "Internal checks and synthesis.", angle: "Compliance + log." },
      { title: "Multi-firm networks", desc: "Need for one shared OS.", angle: "Network SIGNAL then pilot." },
    ],
  },
  final: {
    title: "Next step: frame where AI is legitimate for you.",
    body: "SIGNAL sets sources, stops and the first agent, without promising machine advice.",
    steps: [
      "Workshop partners / risk / IT",
      "File map and KPIs",
      "Demo on extract and path",
    ],
  },
  agentsHeading: "Remparia agent cards — trigger, deliverable, human stop",
  sectorLinks: [
    { label: "Law firm", href: "/secteurs/cabinet-avocat" },
    { label: "Notarial office", href: "/secteurs/etude-notariale" },
  ],
};

export function legalAgentPage(lang: Lang): PackRichPageCopy {
  return lang === "fr" ? fr : en;
}
