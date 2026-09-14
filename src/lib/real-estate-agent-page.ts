import type { Lang } from "./content";
import type { PackRichPageCopy } from "./pack-rich-page";

const fr: PackRichPageCopy = {
  eyebrow: "SOLUTIONS / IMMOBILIER",
  title: "Le temps expert reste ",
  titleAccent: "sur la décision.",
  sub: "Qualification, matching, dossiers et relances sous gouvernance, sans déléguer mandat, visite ou négociation à la machine.",
  ctaPrimary: "Lancer SIGNAL immobilier",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "Voir le métier agence",
  ctaSecondaryHref: "/secteurs/agence-immobiliere",
  heroSecteurSlug: "agence-immobiliere",
  proof: [
    {
      value: "0",
      label: "mandat, visite ou négociation délégués à l’agent",
      source: "Stop humain",
    },
    {
      value: "4",
      label: "agents pack prêts — lead, matching, dossier, locataire",
      source: "Force de travail",
    },
    {
      value: "1",
      label: "OS, mêmes politiques ALLOW / REVIEW / BLOCK partout",
      source: "Remparia OS",
    },
    {
      value: "SIGNAL",
      label: "avant le build : connecteurs et KPI cadrés, pas inventés",
      source: "Méthode",
    },
  ],
  workforce: {
    eyebrow: "01 / FORCE DE TRAVAIL",
    title: "L’agent prépare. Le conseiller tranche.",
    body: "Quatre exécutants spécialisés : chaque action a un déclencheur, un livrable et un stop humain non négociable.",
    agents: [
      {
        title: "Lead immo qualifié",
        forWhom: "Acquisition et transaction",
        does: "Scorer, enrichir et préparer le premier contact, sans engager le conseiller.",
        skills: ["Scoring", "Enrichissement", "Premier contact préparé", "CRM à jour"],
        never: "Il ne promet pas une visite ni une estimation.",
      },
      {
        title: "Bien proposé, conseiller décide",
        forWhom: "Transaction",
        does: "Short-list selon critères, brouillon d’envoi. Validation humaine avant le client.",
        skills: ["Matching", "Short-list", "Brouillon client", "File d’approbation"],
        never: "Aucune sélection n’est envoyée sans validation.",
      },
      {
        title: "Pièces du dossier réunies",
        forWhom: "Transaction / études partenaires",
        does: "Collecte, classement, relances tracées jusqu’à complétude.",
        skills: ["Collecte", "Classement", "Relances", "Piste d’audit"],
        never: "Il ne valide pas la complétude juridique ni ne signe.",
      },
      {
        title: "Locataire orienté",
        forWhom: "Gestion locative",
        does: "L1 process, FAQ et orientation. Litige et exception au gestionnaire.",
        skills: ["L1", "FAQ", "Orientation", "Escalade"],
        never: "Il n’engage pas de recouvrement ni d’action juridique.",
      },
    ],
  },
  governance: {
    eyebrow: "02 / GOUVERNANCE",
    title: "Ce qui reste humain est gravé dans l’OS.",
    body: "Les garde-fous ne vivent pas dans un prompt fragile. Ils tournent dans Remparia OS.",
    rules: [
      {
        title: "Mandat et négociation humains",
        desc: "L’agent prépare ; le conseiller engage. Aucune promesse client automatisée.",
      },
      {
        title: "Envoi client sous validation",
        desc: "Short-lists et messages sortants passent en REVIEW avant envoi.",
      },
      {
        title: "Complétude juridique hors machine",
        desc: "Signature, acte et complétude restent à l’étude / au conseiller.",
      },
      {
        title: "Journal opposable",
        desc: "Chaque action est tracée : qui, quoi, quelle règle, quel stop.",
      },
    ],
  },
  path: {
    eyebrow: "03 / TRAJECTOIRE",
    title: "Du cadrage à la production supervisée.",
    body: "On ne déploie pas un pack en boîte noire.",
    steps: [
      {
        title: "SIGNAL",
        desc: "Cartographier processus, données et KPI. Connecteurs exacts cadrés.",
      },
      {
        title: "Studio",
        desc: "Composer agents, compétences et portes humaines.",
      },
      {
        title: "OS + gouvernance",
        desc: "Publier sous politiques ALLOW / REVIEW / BLOCK.",
      },
      {
        title: "AgentOps",
        desc: "Exploitation, revue et budgets, sans retomber en projet.",
      },
    ],
    note: "Les connecteurs (CRM, portails, GED) sont cadrés en SIGNAL. Pas de fake case.",
  },
  offer: {
    eyebrow: "04 / OFFRE",
    title: "On commence petit, on mesure, on étend.",
    body: "Quatre niveaux, du diagnostic mesurable au run continu.",
    steps: [
      {
        index: "01",
        title: "Diagnostic immobilier",
        duration: "2–3 semaines",
        items: [
          "Cartographie leads / dossiers / locatif",
          "Score impact / risque / données",
          "Cas d’usage priorisé + KPI",
          "Démo sur un extract de vos flux",
        ],
      },
      {
        index: "02",
        title: "Pilote premier agent",
        duration: "8 semaines",
        items: [
          "Un agent en production supervisée",
          "Connecteurs cadrés",
          "Stops humains + journal",
          "Revue D+30",
        ],
      },
      {
        index: "03",
        title: "Programme multi-workflows",
        duration: "3–6 mois",
        items: [
          "Lead + matching + dossier",
          "Gestion locative si prioritaire",
          "Gouvernance multi-équipes",
          "Transfert documentation",
        ],
      },
      {
        index: "04",
        title: "AgentOps",
        duration: "Mensuel",
        items: [
          "Supervision et incidents",
          "Revue traces et seuils",
          "Budgets modèles",
          "Amélioration continue",
        ],
      },
    ],
  },
  pilot: {
    eyebrow: "05 / PILOTE 8 SEMAINES",
    title: "Ce que vous voyez, semaine après semaine",
    rows: [
      {
        weeks: "1–2",
        work: "Cadrage SIGNAL, données CRM / portails, règles d’escalade",
        see: "Carte des processus et KPI signés",
      },
      {
        weeks: "3–5",
        work: "Build Studio, connecteurs, stops humains, journal",
        see: "Agent qui prépare sur vos vrais dossiers",
      },
      {
        weeks: "6–7",
        work: "UAT, formation conseillers, canary progressif",
        see: "Équipes qui pilotent sans boîte noire",
      },
      {
        weeks: "8",
        work: "Montée en charge, revue D+30",
        see: "Premiers chiffres, suite multi-workflows ou pause",
      },
    ],
  },
  training: {
    eyebrow: "06 / FORMATION",
    title: "Piloter l’agent au quotidien.",
    body: "Trois formats, du comité de direction au terrain.",
    courses: [
      {
        code: "IMMO-01",
        title: "Immobilier agentique pour décideurs",
        audience: "Direction, managers transaction / gestion",
        duration: "Demi-journée",
        outcomes: ["Où l’IA compte", "Stops humains", "Lire un business case"],
      },
      {
        code: "IMMO-02",
        title: "Exploiter au quotidien",
        audience: "Conseillers, assistants, gestionnaires",
        duration: "1 jour",
        outcomes: ["Lire une trace", "Valider un envoi", "Escalader proprement"],
      },
      {
        code: "IMMO-03",
        title: "Maintenir et faire évoluer",
        audience: "IT, ops digitaux",
        duration: "2 jours",
        outcomes: ["Connecteurs", "Politiques OS", "Canary / rollback"],
      },
    ],
  },
  audience: {
    eyebrow: "07 / POUR QUI",
    title: "Où la force de travail immo crée de la valeur vite",
    segments: [
      {
        title: "Agences transaction",
        desc: "Volume de leads, matching dispersé, dossiers chronophages.",
        angle: "Pilote lead + matching avant multi-biens.",
      },
      {
        title: "Réseaux multi-agences",
        desc: "Processus hétérogènes, besoin d’un OS commun.",
        angle: "SIGNAL réseau puis pilote sur 1–2 agences.",
      },
      {
        title: "Gestion locative",
        desc: "L1 saturé, exceptions mal triées.",
        angle: "Agent orientation + escalade litige.",
      },
      {
        title: "Études partenaires",
        desc: "Pièces et relances entre agence et notaire.",
        angle: "Collecte dossier sous stop humain.",
      },
    ],
  },
  final: {
    title: "Prochaine étape : savoir ce que l’agent rendrait chez vous.",
    body: "En SIGNAL, on cadre données, outils et gains à mesurer. Ensuite on décide du premier agent.",
    steps: [
      "Atelier de cadrage (transaction, gestion, IT)",
      "Audit flux et KPI, cas d’usage priorisé",
      "Démo sur vos données et trajectoire 6–12 mois",
    ],
  },
  agentsHeading: "Fiches agents Remparia — déclencheur, livrable, stop humain",
  sectorLinks: [
    { label: "Agence immobilière", href: "/secteurs/agence-immobiliere" },
    { label: "Étude notariale", href: "/secteurs/etude-notariale" },
  ],
};

const en: PackRichPageCopy = {
  eyebrow: "SOLUTIONS / REAL ESTATE",
  title: "Expert time stays ",
  titleAccent: "on the decision.",
  sub: "Qualification, matching, files and follow-ups under governance, without handing mandate, viewing or negotiation to the machine.",
  ctaPrimary: "Start real-estate SIGNAL",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "See the agency vertical",
  ctaSecondaryHref: "/secteurs/agence-immobiliere",
  heroSecteurSlug: "agence-immobiliere",
  proof: [
    {
      value: "0",
      label: "mandate, viewing or negotiation handed to the agent",
      source: "Human stop",
    },
    {
      value: "4",
      label: "pack agents ready — lead, matching, file, tenant",
      source: "Workforce",
    },
    {
      value: "1",
      label: "OS, same ALLOW / REVIEW / BLOCK policies everywhere",
      source: "Remparia OS",
    },
    {
      value: "SIGNAL",
      label: "before the build: connectors and KPIs scoped, not invented",
      source: "Method",
    },
  ],
  workforce: {
    eyebrow: "01 / AI WORKFORCE",
    title: "The agent prepares. The advisor decides.",
    body: "Four specialized executors: every action has a trigger, a deliverable and a non-negotiable human stop.",
    agents: [
      {
        title: "Qualified property lead",
        forWhom: "Acquisition and sales",
        does: "Score, enrich and prepare first contact, without committing the advisor.",
        skills: ["Scoring", "Enrichment", "Prepared first contact", "CRM up to date"],
        never: "It does not promise a viewing or a valuation.",
      },
      {
        title: "Property proposed, advisor decides",
        forWhom: "Sales",
        does: "Short-list by criteria, draft send. Human validation before the client.",
        skills: ["Matching", "Short-list", "Client draft", "Approval queue"],
        never: "No selection is sent without validation.",
      },
      {
        title: "Transaction documents gathered",
        forWhom: "Sales / partner offices",
        does: "Collect, file, logged chase-ups until completeness.",
        skills: ["Collection", "Filing", "Chase-ups", "Audit trail"],
        never: "It does not validate legal completeness or sign.",
      },
      {
        title: "Tenant routed",
        forWhom: "Property management",
        does: "L1 process, FAQ and routing. Disputes and exceptions go to the manager.",
        skills: ["L1", "FAQ", "Routing", "Escalation"],
        never: "It does not commit to recovery or legal action.",
      },
    ],
  },
  governance: {
    eyebrow: "02 / GOVERNANCE",
    title: "What stays human is enforced in the OS.",
    body: "Guards don’t live in a fragile prompt. They run in Remparia OS.",
    rules: [
      {
        title: "Mandate and negotiation stay human",
        desc: "The agent prepares; the advisor commits. No automated client promise.",
      },
      {
        title: "Client send under validation",
        desc: "Short-lists and outbound messages go through REVIEW before send.",
      },
      {
        title: "Legal completeness off-machine",
        desc: "Signature, deed and completeness stay with the office / advisor.",
      },
      {
        title: "Auditable log",
        desc: "Every action is traced: who, what, which rule, which stop.",
      },
    ],
  },
  path: {
    eyebrow: "03 / PATH",
    title: "From framing to supervised production.",
    body: "We do not ship a black-box pack.",
    steps: [
      {
        title: "SIGNAL",
        desc: "Map processes, data and KPIs. Exact connectors scoped.",
      },
      {
        title: "Studio",
        desc: "Compose agents, skills and human gates.",
      },
      {
        title: "OS + governance",
        desc: "Publish under ALLOW / REVIEW / BLOCK policies.",
      },
      {
        title: "AgentOps",
        desc: "Operations, review and budgets, without sliding back into a project.",
      },
    ],
    note: "Connectors (CRM, portals, DMS) are scoped in SIGNAL. No fake case studies.",
  },
  offer: {
    eyebrow: "04 / OFFER",
    title: "Start small, measure, then extend.",
    body: "Four tiers, from a measurable diagnostic to continuous run.",
    steps: [
      {
        index: "01",
        title: "Real-estate diagnostic",
        duration: "2–3 weeks",
        items: [
          "Map leads / files / property management",
          "Impact / risk / data score",
          "Prioritized use case + KPI",
          "Demo on an extract of your flows",
        ],
      },
      {
        index: "02",
        title: "First-agent pilot",
        duration: "8 weeks",
        items: [
          "One agent in supervised production",
          "Scoped connectors",
          "Human stops + log",
          "D+30 review",
        ],
      },
      {
        index: "03",
        title: "Multi-workflow program",
        duration: "3–6 months",
        items: [
          "Lead + matching + file",
          "Property management if prioritized",
          "Multi-team governance",
          "Documentation transfer",
        ],
      },
      {
        index: "04",
        title: "AgentOps",
        duration: "Monthly",
        items: [
          "Supervision and incidents",
          "Trace and threshold review",
          "Model budgets",
          "Continuous improvement",
        ],
      },
    ],
  },
  pilot: {
    eyebrow: "05 / 8-WEEK PILOT",
    title: "What you see, week by week",
    rows: [
      {
        weeks: "1–2",
        work: "SIGNAL framing, CRM / portal data, escalation rules",
        see: "Process map and signed KPIs",
      },
      {
        weeks: "3–5",
        work: "Studio build, connectors, human stops, log",
        see: "An agent preparing on your real files",
      },
      {
        weeks: "6–7",
        work: "UAT, advisor training, progressive canary",
        see: "Teams operating without a black box",
      },
      {
        weeks: "8",
        work: "Ramp-up, D+30 review",
        see: "First numbers, multi-workflow path or pause",
      },
    ],
  },
  training: {
    eyebrow: "06 / TRAINING",
    title: "Operate the agent day to day.",
    body: "Three formats, from the exec committee to the field.",
    courses: [
      {
        code: "RE-01",
        title: "Agentic real estate for leaders",
        audience: "Leadership, sales / property managers",
        duration: "Half day",
        outcomes: ["Where AI matters", "Human stops", "Read a business case"],
      },
      {
        code: "RE-02",
        title: "Day-to-day operations",
        audience: "Advisors, assistants, property managers",
        duration: "1 day",
        outcomes: ["Read a trace", "Approve a send", "Escalate cleanly"],
      },
      {
        code: "RE-03",
        title: "Maintain and evolve",
        audience: "IT, digital ops",
        duration: "2 days",
        outcomes: ["Connectors", "OS policies", "Canary / rollback"],
      },
    ],
  },
  audience: {
    eyebrow: "07 / WHO IT’S FOR",
    title: "Where real-estate workforce creates value fast",
    segments: [
      {
        title: "Sales agencies",
        desc: "Lead volume, scattered matching, heavy files.",
        angle: "Lead + matching pilot before multi-property.",
      },
      {
        title: "Multi-agency networks",
        desc: "Heterogeneous processes, need for one shared OS.",
        angle: "Network SIGNAL then pilot on 1–2 agencies.",
      },
      {
        title: "Property management",
        desc: "Saturated L1, poorly triaged exceptions.",
        angle: "Routing agent + dispute escalation.",
      },
      {
        title: "Partner offices",
        desc: "Documents and chase-ups between agency and notary.",
        angle: "File collection under human stop.",
      },
    ],
  },
  final: {
    title: "Next step: know what the agent would return for you.",
    body: "In SIGNAL we frame data, tools and gains to measure. Then we choose the first agent.",
    steps: [
      "Scoping workshop (sales, property, IT)",
      "Flow and KPI audit, prioritized use case",
      "Demo on your data and 6–12 month path",
    ],
  },
  agentsHeading: "Remparia agent cards — trigger, deliverable, human stop",
  sectorLinks: [
    { label: "Real-estate agency", href: "/secteurs/agence-immobiliere" },
    { label: "Notarial office", href: "/secteurs/etude-notariale" },
  ],
};

export function realEstateAgentPage(lang: Lang): PackRichPageCopy {
  return lang === "fr" ? fr : en;
}
