import type { Lang } from "./content";

export type StudioLayerId =
  | "agents"
  | "skills"
  | "tools"
  | "knowledge"
  | "workflows"
  | "approvals";

export type StudioLayer = {
  id: StudioLayerId;
  tag: string;
  title: string;
  desc: string;
  canvas: string;
};

const studio = {
  fr: {
    eyebrow: "02 / STUDIO",
    crumbs: "Studio",
    titleLine1: "N’ajoutez pas un chatbot.",
    titleAccent: "Construisez la force de travail.",
    sub: "Après SIGNAL, Studio assemble agents, compétences, outils, connaissance et validations humaines, prêts à tourner dans Remparia OS.",
    ctaPrimary: "Parler Studio",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    canvas: {
      mark: "STUDIO",
      status: "Composition active",
      mission: "Mission · Qualification leads",
    },
    problem: {
      eyebrow: "01 / LE CONSTAT",
      titleBefore: "Un prompt n’est pas une ",
      titleAccent: "organisation.",
      sideLead: "Le défi",
      sideRest: "n’est plus de faire parler un modèle. C’est de concevoir des agents qui agissent dans votre métier et restent ",
      sideAccent: "sous contrôle.",
      today: "AUJOURD’HUI",
      withUs: "AVEC STUDIO",
      rows: [
        { today: "Chatbot générique", withUs: "Agent métier spécialisé" },
        { today: "Prompt isolé", withUs: "Compétences versionnées" },
        { today: "Outils collés après", withUs: "Connecteurs dès la conception" },
        { today: "Un agent seul", withUs: "Workflow multi-agents" },
        { today: "Shadow AI", withUs: "Né gouverné" },
      ],
    },
    layers: {
      eyebrow: "02 / LES COUCHES",
      title: "Ce que Studio compose.",
      body: "Six couches, un seul atelier. Rien n’est publié dans l’OS s’il manque une compétence, un outil ou une porte humaine.",
      items: [
        {
          id: "agents",
          tag: "AGENTS",
          title: "Exécutants spécialisés",
          desc: "Persistants, cadrés sur un métier, jamais génériques.",
          canvas: "Agent Ventes",
        },
        {
          id: "skills",
          tag: "COMPÉTENCES",
          title: "Capacités réutilisables",
          desc: "Qualifier, extraire, rédiger, contrôler. Versionnées.",
          canvas: "Skill · Qualifier",
        },
        {
          id: "tools",
          tag: "OUTILS",
          title: "Le SI reste la source",
          desc: "CRM, ERP, e-mail, GED, APIs. Branchés, pas remplacés.",
          canvas: "Outil · CRM",
        },
        {
          id: "knowledge",
          tag: "CONNAISSANCE",
          title: "Sources autorisées",
          desc: "Règles métier, corpus, politiques. Rien hors périmètre.",
          canvas: "Knowledge · Offre",
        },
        {
          id: "workflows",
          tag: "WORKFLOWS",
          title: "Enchaînements et escalades",
          desc: "Qui fait quoi, dans quel ordre, jusqu’à quel seuil.",
          canvas: "Workflow · 4 nœuds",
        },
        {
          id: "approvals",
          tag: "HUMAIN",
          title: "Portes de validation",
          desc: "Toute décision engageante s’arrête ici.",
          canvas: "Porte · Approuver",
        },
      ] satisfies StudioLayer[],
    },
    protocol: {
      eyebrow: "03 / LE PROTOCOLE",
      titleBefore: "De l’opportunité ",
      titleAccent: "à l’agent opérable.",
      body: "Studio ne part pas d’une idée. Il part d’un cas SIGNAL scoré. Ensuite on compose, on simule et on publie.",
      steps: [
        {
          n: "01",
          title: "Cadrer depuis SIGNAL",
          desc: "Reprendre le cas prioritaire : impact, faisabilité, risque, données.",
        },
        {
          n: "02",
          title: "Composer l’agent",
          desc: "Rôle, compétences, limites. Ce qu’il fait. Ce qu’il ne fait jamais.",
        },
        {
          n: "03",
          title: "Brancher le réel",
          desc: "Outils, sources autorisées, identité. Le SI reste la vérité.",
        },
        {
          n: "04",
          title: "Dessiner le workflow",
          desc: "Délégation, enchaînements, escalades entre agents.",
        },
        {
          n: "05",
          title: "Poser les portes humaines",
          desc: "Seuils, approbations, exceptions. Rien d’engageant sans humain.",
        },
        {
          n: "06",
          title: "Publier dans l’OS",
          desc: "L’agent est publié avec identité, permissions et journal d’audit.",
        },
      ],
    },
    workforce: {
      eyebrow: "04 / FORCE DE TRAVAIL",
      titleBefore: "Des agents de métier, ",
      titleAccent: "pas des assistants.",
      body: "Ils ne travaillent pas seuls. Ils collaborent dans des workflows gouvernés par Remparia OS.",
      agents: [
        {
          tag: "RESEARCH",
          title: "Agent Recherche",
          desc: "Recherche et synthèse sous règles métier.",
        },
        {
          tag: "SALES",
          title: "Agent Ventes",
          desc: "Qualification, suivi et préparation commerciale.",
        },
        {
          tag: "DOCUMENT",
          title: "Agent Document",
          desc: "Collecte, contrôle et production documentaire.",
        },
        {
          tag: "OPS",
          title: "Agent Opérations",
          desc: "Processus récurrents, escalades et reporting.",
        },
        {
          tag: "FINANCE",
          title: "Agent Finance",
          desc: "Contrôles, rapprochements et préparation analytique.",
        },
        {
          tag: "CUSTOM",
          title: "Agent sur mesure",
          desc: "Composez l’agent que votre métier exige.",
          href: "/demarrer",
        },
      ],
    },
    action: {
      eyebrow: "05 / EN ACTION",
      titleBefore: "Une mission entre. ",
      titleAccent: "L’atelier orchestre.",
      body: "Studio a posé les rôles. L’OS exécute. L’humain valide. Tout est journalisé.",
      mission: "Qualifier 12 leads immobilier",
      nodes: [
        { tag: "SIGNAL", title: "Cas scoré", desc: "Valeur €€€ · faisable" },
        { tag: "STUDIO", title: "Agent Ventes", desc: "Skill Qualifier + CRM" },
        { tag: "HUMAIN", title: "Porte ouverte", desc: "Seuil > 80 · valider" },
        { tag: "OS", title: "Journalisé", desc: "Identité · audit · budget" },
      ],
    },
    governed: {
      eyebrow: "06 / NÉ GOUVERNÉ",
      titleBefore: "Aucun agent ne sort de Studio ",
      titleAccent: "sans contrôle.",
      body: "L’atelier n’est pas un bac à sable. Chaque publication hérite de l’identité, des politiques et de l’observabilité de Remparia OS.",
      items: [
        {
          title: "Identité",
          desc: "Qui peut lancer, lire, modifier. Zéro privilège par défaut.",
        },
        {
          title: "Politiques",
          desc: "Règles métier et seuils d’arrêt encodés avant le premier run.",
        },
        {
          title: "Audit",
          desc: "Chaque action, outil et décision est traçable.",
        },
        {
          title: "Validation humaine",
          desc: "Les portes posées dans Studio sont opposables dans l’OS.",
        },
      ],
      cta: "Voir la gouvernance",
      href: "/governance",
    },
    path: {
      eyebrow: "07 / TRAJECTOIRE",
      title: "SIGNAL trouve. Studio construit. L’OS opère.",
      steps: [
        {
          n: "01",
          tag: "SIGNAL",
          title: "Trouver la valeur",
          desc: "Découvrir, scorer, prioriser.",
          href: "/signal",
        },
        {
          n: "02",
          tag: "STUDIO",
          title: "Construire la force de travail",
          desc: "Composer agents et workflows.",
        },
        {
          n: "03",
          tag: "OS",
          title: "Faire tourner le système",
          desc: "Orchestrer, observer, gouverner.",
          href: "/solution",
        },
      ],
    },
    cta: {
      tag: "STUDIO",
      title: "Construire votre première force de travail IA.",
      text: "On part d’un cas SIGNAL. On compose dans Studio. On publie dans l’OS.",
      href: "/demarrer",
      label: "Réserver une session SIGNAL",
    },
  },
  en: {
    eyebrow: "02 / STUDIO",
    crumbs: "Studio",
    titleLine1: "Don't add a chatbot.",
    titleAccent: "Build the workforce.",
    sub: "After SIGNAL, Studio assembles agents, skills, tools, knowledge and human approvals, ready to run in Remparia OS.",
    ctaPrimary: "Talk Studio",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    canvas: {
      mark: "STUDIO",
      status: "Live composition",
      mission: "Mission · Lead qualification",
    },
    problem: {
      eyebrow: "01 / THE GAP",
      titleBefore: "A prompt is not an ",
      titleAccent: "organization.",
      sideLead: "The challenge",
      sideRest: "is no longer getting a model to talk. It is designing agents that act in your business and stay ",
      sideAccent: "under control.",
      today: "TODAY",
      withUs: "WITH STUDIO",
      rows: [
        { today: "Generic chatbot", withUs: "Specialized business agent" },
        { today: "Isolated prompt", withUs: "Versioned skills" },
        { today: "Tools bolted on later", withUs: "Connectors from day one" },
        { today: "A lone agent", withUs: "Multi-agent workflow" },
        { today: "Shadow AI", withUs: "Born governed" },
      ],
    },
    layers: {
      eyebrow: "02 / LAYERS",
      title: "What Studio composes.",
      body: "Six layers, one atelier. Nothing ships to the OS missing a skill, a tool or a human gate.",
      items: [
        {
          id: "agents",
          tag: "AGENTS",
          title: "Specialized executors",
          desc: "Persistent, scoped to a job, never generic.",
          canvas: "Sales Agent",
        },
        {
          id: "skills",
          tag: "SKILLS",
          title: "Reusable capabilities",
          desc: "Qualify, extract, draft, check. Versioned.",
          canvas: "Skill · Qualify",
        },
        {
          id: "tools",
          tag: "TOOLS",
          title: "Systems stay the source",
          desc: "CRM, ERP, email, DMS, APIs. Wired, not replaced.",
          canvas: "Tool · CRM",
        },
        {
          id: "knowledge",
          tag: "KNOWLEDGE",
          title: "Approved sources",
          desc: "Business rules, corpus, policies. Nothing out of scope.",
          canvas: "Knowledge · Offer",
        },
        {
          id: "workflows",
          tag: "WORKFLOWS",
          title: "Sequences and escalations",
          desc: "Who does what, in which order, up to which threshold.",
          canvas: "Workflow · 4 nodes",
        },
        {
          id: "approvals",
          tag: "HUMAN",
          title: "Approval gates",
          desc: "Every binding decision stops here.",
          canvas: "Gate · Approve",
        },
      ] satisfies StudioLayer[],
    },
    protocol: {
      eyebrow: "03 / THE PROTOCOL",
      titleBefore: "From opportunity ",
      titleAccent: "to operable agent.",
      body: "Studio does not start from an idea. It starts from a scored SIGNAL case. Then we compose, simulate and publish.",
      steps: [
        {
          n: "01",
          title: "Frame from SIGNAL",
          desc: "Take the priority case: impact, feasibility, risk, data.",
        },
        {
          n: "02",
          title: "Compose the agent",
          desc: "Role, skills, limits. What it does. What it never does.",
        },
        {
          n: "03",
          title: "Wire the real world",
          desc: "Tools, approved sources, identity. Systems stay the truth.",
        },
        {
          n: "04",
          title: "Draw the workflow",
          desc: "Delegation, sequences, escalations between agents.",
        },
        {
          n: "05",
          title: "Set human gates",
          desc: "Thresholds, approvals, exceptions. Nothing binding without a human.",
        },
        {
          n: "06",
          title: "Publish to the OS",
          desc: "The agent ships with identity, permissions and an audit log.",
        },
      ],
    },
    workforce: {
      eyebrow: "04 / AI WORKFORCE",
      titleBefore: "Business agents, ",
      titleAccent: "not assistants.",
      body: "They do not work alone. They collaborate in workflows governed by Remparia OS.",
      agents: [
        {
          tag: "RESEARCH",
          title: "Research Agent",
          desc: "Research and synthesis under business rules.",
        },
        {
          tag: "SALES",
          title: "Sales Agent",
          desc: "Qualification, follow-up and deal preparation.",
        },
        {
          tag: "DOCUMENT",
          title: "Document Agent",
          desc: "Collection, checks and document production.",
        },
        {
          tag: "OPS",
          title: "Operations Agent",
          desc: "Recurring processes, escalations and reporting.",
        },
        {
          tag: "FINANCE",
          title: "Finance Agent",
          desc: "Controls, reconciliations and analytical prep.",
        },
        {
          tag: "CUSTOM",
          title: "Custom Agent",
          desc: "Compose the agent your business needs.",
          href: "/demarrer",
        },
      ],
    },
    action: {
      eyebrow: "05 / IN ACTION",
      titleBefore: "A mission comes in. ",
      titleAccent: "The atelier orchestrates.",
      body: "Studio set the roles. The OS executes. A human validates. Everything is logged.",
      mission: "Qualify 12 real-estate leads",
      nodes: [
        { tag: "SIGNAL", title: "Scored case", desc: "Value €€€ · feasible" },
        { tag: "STUDIO", title: "Sales Agent", desc: "Qualify skill + CRM" },
        { tag: "HUMAN", title: "Gate open", desc: "Score > 80 · approve" },
        { tag: "OS", title: "Logged", desc: "Identity · audit · budget" },
      ],
    },
    governed: {
      eyebrow: "06 / BORN GOVERNED",
      titleBefore: "No agent leaves Studio ",
      titleAccent: "without control.",
      body: "The atelier is not a sandbox. Every publication inherits Remparia OS identity, policies and observability.",
      items: [
        {
          title: "Identity",
          desc: "Who can run, read, change. Zero privilege by default.",
        },
        {
          title: "Policies",
          desc: "Business rules and stop thresholds encoded before the first run.",
        },
        {
          title: "Audit",
          desc: "Every action, tool and decision is traceable.",
        },
        {
          title: "Human validation",
          desc: "Gates set in Studio are enforceable in the OS.",
        },
      ],
      cta: "See governance",
      href: "/governance",
    },
    path: {
      eyebrow: "07 / PATH",
      title: "SIGNAL finds. Studio builds. The OS operates.",
      steps: [
        {
          n: "01",
          tag: "SIGNAL",
          title: "Find the value",
          desc: "Discover, score, prioritize.",
          href: "/signal",
        },
        {
          n: "02",
          tag: "STUDIO",
          title: "Build the workforce",
          desc: "Compose agents and workflows.",
        },
        {
          n: "03",
          tag: "OS",
          title: "Run the system",
          desc: "Orchestrate, observe, govern.",
          href: "/solution",
        },
      ],
    },
    cta: {
      tag: "STUDIO",
      title: "Build your first AI workforce.",
      text: "Start from a SIGNAL case. Compose in Studio. Publish to the OS.",
      href: "/demarrer",
      label: "Book a SIGNAL session",
    },
  },
} as const;

export function studioPage(lang: Lang) {
  return studio[lang];
}
