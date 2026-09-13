import type { Lang } from "./content";
import type { PackRichPageCopy } from "./pack-rich-page";

const fr: PackRichPageCopy = {
  eyebrow: "SOLUTIONS / FINANCE",
  title: "Contrôler sans ",
  titleAccent: "diluer la décision.",
  sub: "KYC assisté, reporting et préparation risque — avec pistes d’audit et décisions humaines sur les seuils.",
  ctaPrimary: "Lancer SIGNAL finance",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "Voir finance & assurance",
  ctaSecondaryHref: "/secteurs/finance-assurance",
  heroSecteurSlug: "finance-assurance",
  proof: [
    {
      value: "0",
      label: "entrée en relation ou reporting envoyé sans humain",
      source: "Stop humain",
    },
    {
      value: "4",
      label: "agents pack — KYC, reporting, alerte, écarts",
      source: "Force de travail",
    },
    {
      value: "1",
      label: "piste d’audit opposable par geste",
      source: "Gouvernance",
    },
    {
      value: "SIGNAL",
      label: "avant le build — seuils et systèmes cadrés",
      source: "Méthode",
    },
  ],
  workforce: {
    eyebrow: "01 / FORCE DE TRAVAIL",
    title: "Préparer le dossier. Journaliser. Ne jamais trancher à la place du métier.",
    body: "Des agents qui accélèrent la collecte et le contrôle — les seuils restent humains.",
    agents: [
      {
        title: "KYC prêt pour décision",
        forWhom: "Conformité / middle office",
        does: "Collecte, contrôles, piste d’audit — sans acceptation client.",
        skills: ["Collecte", "Contrôles", "Audit", "Escalade"],
        never: "Il n’accepte pas un client et n’ouvre pas de relation.",
      },
      {
        title: "Reporting prêt pour revue",
        forWhom: "Finance / reporting",
        does: "Brouillon sourcé, non envoyé — la revue humaine décide de la diffusion.",
        skills: ["Agrégation", "Sources", "Brouillon", "Revue"],
        never: "Aucun reporting n’est envoyé sans validation.",
      },
      {
        title: "Alerte préparée, décision humaine",
        forWhom: "Risque / analystes",
        does: "Dossier d’alerte structuré pour l’analyste.",
        skills: ["Signal", "Dossier", "Priorisation", "Escalade"],
        never: "Il ne clôture pas une alerte ni ne fixe un seuil.",
      },
      {
        title: "Écarts visibles avant clôture",
        forWhom: "Comptabilité / contrôle",
        does: "Rapprochements et anomalies priorisés avant clôture.",
        skills: ["Rapprochements", "Anomalies", "Priorisation", "Journal"],
        never: "Il ne valide pas une clôture.",
      },
    ],
  },
  governance: {
    eyebrow: "02 / GOUVERNANCE",
    title: "Le métier tranche. L’agent journalise.",
    body: "Politiques ALLOW / REVIEW / BLOCK sur chaque geste sensible.",
    rules: [
      { title: "Pas d’onboarding machine", desc: "Entrée en relation et acceptation restent humaines." },
      { title: "Pas d’envoi sans revue", desc: "Reporting et communications sortantes en REVIEW." },
      { title: "Seuils humains", desc: "Risque, dérogation et clôture hors machine." },
      { title: "Audit opposable", desc: "Qui a vu quoi, quelle règle, quel stop." },
    ],
  },
  path: {
    eyebrow: "03 / TRAJECTOIRE",
    title: "Du cadrage à la production supervisée.",
    body: "Cartographier sensibilité et SI réel avant le build.",
    steps: [
      { title: "SIGNAL", desc: "Processus, données, seuils, connecteurs." },
      { title: "Studio", desc: "Agents, compétences, portes humaines." },
      { title: "OS + gouvernance", desc: "Politiques identiques quel que soit l’hébergement." },
      { title: "AgentOps", desc: "Revue, budgets, amélioration continue." },
    ],
    note: "Connecteurs (CRM, core banking, KYC) cadrés en SIGNAL — pas de fake case.",
  },
  offer: {
    eyebrow: "04 / OFFRE",
    title: "Commencer petit. Mesurer. Étendre.",
    body: "Quatre niveaux — diagnostic, pilote, multi-workflows, AgentOps.",
    steps: [
      {
        index: "01",
        title: "Diagnostic finance",
        duration: "2–3 semaines",
        items: ["Cartographie KYC / reporting / risque", "Score impact / sensibilité", "KPI", "Démo extract"],
      },
      {
        index: "02",
        title: "Pilote premier agent",
        duration: "8 semaines",
        items: ["Un agent supervisé", "Stops + journal", "Connecteurs cadrés", "Revue D+30"],
      },
      {
        index: "03",
        title: "Programme multi-contrôles",
        duration: "3–6 mois",
        items: ["KYC + reporting + alertes", "Gouvernance risk", "Transfert", "Multi-équipes"],
      },
      {
        index: "04",
        title: "AgentOps",
        duration: "Mensuel",
        items: ["Supervision", "Revue seuils", "Budgets", "Amélioration"],
      },
    ],
  },
  pilot: {
    eyebrow: "05 / PILOTE 8 SEMAINES",
    title: "Ce que vous voyez, semaine après semaine",
    rows: [
      { weeks: "1–2", work: "SIGNAL, systèmes, seuils", see: "Carte et KPI signés" },
      { weeks: "3–5", work: "Build Studio, connecteurs, stops", see: "Agent sur flux réels" },
      { weeks: "6–7", work: "UAT conformité / finance, canary", see: "Équipes qui pilotent" },
      { weeks: "8", work: "Montée en charge, revue D+30", see: "Chiffres et suite" },
    ],
  },
  training: {
    eyebrow: "06 / FORMATION",
    title: "Contrôler l’IA comme on contrôle le risque.",
    body: "Trois formats pour direction, métiers et IT.",
    courses: [
      {
        code: "FIN-01",
        title: "IA gouvernée pour dirigeants",
        audience: "Direction, risk, conformité",
        duration: "Demi-journée",
        outcomes: ["Périmètre", "Seuils", "Lire un audit"],
      },
      {
        code: "FIN-02",
        title: "Exploiter au quotidien",
        audience: "Middle office, reporting, analystes",
        duration: "1 jour",
        outcomes: ["Lire une alerte", "Valider un reporting", "Escalader"],
      },
      {
        code: "FIN-03",
        title: "Maintenir",
        audience: "IT / data",
        duration: "2 jours",
        outcomes: ["Connecteurs", "Politiques", "Rollback"],
      },
    ],
  },
  audience: {
    eyebrow: "07 / POUR QUI",
    title: "Métiers où le seuil ne se délègue pas",
    segments: [
      { title: "Finance & assurance", desc: "KYC, reporting, contrôles.", angle: "Pilote KYC ou reporting." },
      { title: "Courtage", desc: "Dossiers client, comparaison, suivi.", angle: "Collecte + escalade." },
      { title: "Expertise comptable", desc: "Rapprochements, clôture, anomalies.", angle: "Écarts avant clôture." },
      { title: "Middle office banque", desc: "Volume de contrôles répétitifs.", angle: "SIGNAL puis pilote ciblé." },
    ],
  },
  final: {
    title: "Prochaine étape : cadrer seuils et systèmes.",
    body: "SIGNAL fixe ce que l’agent peut préparer — et ce qu’il ne tranchera jamais.",
    steps: [
      "Atelier risk / finance / IT",
      "Cartographie contrôles et KPI",
      "Démo extract et trajectoire",
    ],
  },
  agentsHeading: "Fiches agents Remparia — déclencheur, livrable, stop humain",
  sectorLinks: [
    { label: "Finance & assurance", href: "/secteurs/finance-assurance" },
    { label: "Courtage & assurance", href: "/secteurs/courtier-assurance" },
    { label: "Expertise comptable", href: "/secteurs/expertise-comptable" },
  ],
};

const en: PackRichPageCopy = {
  eyebrow: "SOLUTIONS / FINANCE",
  title: "Control without ",
  titleAccent: "diluting the decision.",
  sub: "Assisted KYC, reporting and risk prep — with audit trails and human decisions on thresholds.",
  ctaPrimary: "Start finance SIGNAL",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "See finance & insurance",
  ctaSecondaryHref: "/secteurs/finance-assurance",
  heroSecteurSlug: "finance-assurance",
  proof: [
    {
      value: "0",
      label: "onboarding or report sent without a human",
      source: "Human stop",
    },
    {
      value: "4",
      label: "pack agents — KYC, reporting, alert, gaps",
      source: "Workforce",
    },
    {
      value: "1",
      label: "auditable trail per gesture",
      source: "Governance",
    },
    {
      value: "SIGNAL",
      label: "before the build — thresholds and systems scoped",
      source: "Method",
    },
  ],
  workforce: {
    eyebrow: "01 / AI WORKFORCE",
    title: "Prepare the file. Log. Never decide for the business.",
    body: "Agents that accelerate collection and checks — thresholds stay human.",
    agents: [
      {
        title: "KYC ready for a decision",
        forWhom: "Compliance / middle office",
        does: "Collection, checks, audit trail — no client acceptance.",
        skills: ["Collection", "Checks", "Audit", "Escalation"],
        never: "It does not accept a client or open a relationship.",
      },
      {
        title: "Report ready for review",
        forWhom: "Finance / reporting",
        does: "Sourced draft, not sent — human review decides distribution.",
        skills: ["Aggregation", "Sources", "Draft", "Review"],
        never: "No report is sent without validation.",
      },
      {
        title: "Alert prepared, human decision",
        forWhom: "Risk / analysts",
        does: "Structured alert file for the analyst.",
        skills: ["Signal", "File", "Prioritization", "Escalation"],
        never: "It does not close an alert or set a threshold.",
      },
      {
        title: "Gaps visible before close",
        forWhom: "Accounting / control",
        does: "Reconciliations and ranked anomalies before close.",
        skills: ["Reconciliations", "Anomalies", "Prioritization", "Log"],
        never: "It does not validate a close.",
      },
    ],
  },
  governance: {
    eyebrow: "02 / GOVERNANCE",
    title: "The business decides. The agent logs.",
    body: "ALLOW / REVIEW / BLOCK policies on every sensitive gesture.",
    rules: [
      { title: "No machine onboarding", desc: "Relationship opening and acceptance stay human." },
      { title: "No send without review", desc: "Reporting and outbound communications in REVIEW." },
      { title: "Human thresholds", desc: "Risk, waiver and close off-machine." },
      { title: "Auditable trail", desc: "Who saw what, which rule, which stop." },
    ],
  },
  path: {
    eyebrow: "03 / PATH",
    title: "From framing to supervised production.",
    body: "Map sensitivity and real systems before the build.",
    steps: [
      { title: "SIGNAL", desc: "Processes, data, thresholds, connectors." },
      { title: "Studio", desc: "Agents, skills, human gates." },
      { title: "OS + governance", desc: "Identical policies whatever the hosting." },
      { title: "AgentOps", desc: "Review, budgets, continuous improvement." },
    ],
    note: "Connectors (CRM, core banking, KYC) scoped in SIGNAL — no fake case studies.",
  },
  offer: {
    eyebrow: "04 / OFFER",
    title: "Start small. Measure. Extend.",
    body: "Four tiers — diagnostic, pilot, multi-workflows, AgentOps.",
    steps: [
      {
        index: "01",
        title: "Finance diagnostic",
        duration: "2–3 weeks",
        items: ["Map KYC / reporting / risk", "Impact / sensitivity score", "KPI", "Extract demo"],
      },
      {
        index: "02",
        title: "First-agent pilot",
        duration: "8 weeks",
        items: ["One supervised agent", "Stops + log", "Scoped connectors", "D+30 review"],
      },
      {
        index: "03",
        title: "Multi-control program",
        duration: "3–6 months",
        items: ["KYC + reporting + alerts", "Risk governance", "Transfer", "Multi-team"],
      },
      {
        index: "04",
        title: "AgentOps",
        duration: "Monthly",
        items: ["Supervision", "Threshold review", "Budgets", "Improvement"],
      },
    ],
  },
  pilot: {
    eyebrow: "05 / 8-WEEK PILOT",
    title: "What you see, week by week",
    rows: [
      { weeks: "1–2", work: "SIGNAL, systems, thresholds", see: "Map and signed KPIs" },
      { weeks: "3–5", work: "Studio build, connectors, stops", see: "Agent on real flows" },
      { weeks: "6–7", work: "Compliance / finance UAT, canary", see: "Teams operating" },
      { weeks: "8", work: "Ramp-up, D+30 review", see: "Numbers and next step" },
    ],
  },
  training: {
    eyebrow: "06 / TRAINING",
    title: "Control AI the way you control risk.",
    body: "Three formats for leadership, business and IT.",
    courses: [
      {
        code: "FIN-01",
        title: "Governed AI for leaders",
        audience: "Leadership, risk, compliance",
        duration: "Half day",
        outcomes: ["Scope", "Thresholds", "Read an audit"],
      },
      {
        code: "FIN-02",
        title: "Day-to-day operations",
        audience: "Middle office, reporting, analysts",
        duration: "1 day",
        outcomes: ["Read an alert", "Approve a report", "Escalate"],
      },
      {
        code: "FIN-03",
        title: "Maintain",
        audience: "IT / data",
        duration: "2 days",
        outcomes: ["Connectors", "Policies", "Rollback"],
      },
    ],
  },
  audience: {
    eyebrow: "07 / WHO IT’S FOR",
    title: "Professions where thresholds are not delegated",
    segments: [
      { title: "Finance & insurance", desc: "KYC, reporting, controls.", angle: "KYC or reporting pilot." },
      { title: "Brokerage", desc: "Client files, comparison, follow-up.", angle: "Collection + escalation." },
      { title: "Accounting firms", desc: "Reconciliations, close, anomalies.", angle: "Gaps before close." },
      { title: "Bank middle office", desc: "Repetitive control volume.", angle: "SIGNAL then targeted pilot." },
    ],
  },
  final: {
    title: "Next step: frame thresholds and systems.",
    body: "SIGNAL defines what the agent can prepare — and what it will never decide.",
    steps: [
      "Workshop risk / finance / IT",
      "Control map and KPIs",
      "Extract demo and path",
    ],
  },
  agentsHeading: "Remparia agent cards — trigger, deliverable, human stop",
  sectorLinks: [
    { label: "Finance & insurance", href: "/secteurs/finance-assurance" },
    { label: "Insurance brokerage", href: "/secteurs/courtier-assurance" },
    { label: "Accounting firm", href: "/secteurs/expertise-comptable" },
  ],
};

export function financeAgentPage(lang: Lang): PackRichPageCopy {
  return lang === "fr" ? fr : en;
}
