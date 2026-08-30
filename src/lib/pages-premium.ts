import type { Lang } from "./content";

type Block = { title: string; desc: string; items?: readonly string[] };
type Row = { label: string; value: string };

export type PremiumPageCopy = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  sub: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  sections: readonly {
    id: string;
    eyebrow: string;
    title: string;
    titleAccent?: string;
    body?: string;
    blocks?: readonly Block[];
    list?: readonly string[];
    rows?: readonly Row[];
    flow?: readonly string[];
    note?: string;
  }[];
};

const signal = {
  fr: {
    eyebrow: "METHOD / SIGNAL",
    title: "Trouver où l’IA ",
    titleAccent: "compte vraiment.",
    sub: "SIGNAL vend la méthode avant la technologie : découvrir, cartographier, scorer, prioriser, quantifier le ROI et bâtir la roadmap.",
    ctaPrimary: "Lancer un SIGNAL Assessment",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "capabilities",
        eyebrow: "01 / CAPACITÉS",
        title: "Ce que SIGNAL permet",
        blocks: [
          { title: "Discover", desc: "Observer le travail réel et les exceptions métier." },
          { title: "Map", desc: "Cartographier processus, données et points de friction." },
          { title: "Score", desc: "Noter impact, faisabilité, risque et sensibilité." },
          { title: "Prioritize", desc: "Classer les cas d’usage par valeur opérable." },
          { title: "Quantify ROI", desc: "Estimer charge, FTE et valeur annuelle." },
          { title: "AI roadmap", desc: "Construire la trajectoire SIGNAL → Studio → OS." },
        ],
      },
      {
        id: "deliverables",
        eyebrow: "02 / LIVRABLES",
        title: "Ce que vous repartez avec",
        list: [
          "Process map",
          "AI opportunity map",
          "ROI matrix",
          "Risk assessment",
          "Prioritized backlog",
          "Architecture recommendations",
          "AI roadmap",
        ],
      },
      {
        id: "why",
        eyebrow: "03 / POURQUOI",
        title: "La méthode avant la technologie",
        body: "On ne vend pas un agent. On identifie une capacité de l’entreprise à augmenter — avec gouvernance, données et mesures définies avant le build.",
      },
    ],
  },
  en: {
    eyebrow: "METHOD / SIGNAL",
    title: "Find where AI ",
    titleAccent: "actually matters.",
    sub: "SIGNAL sells the method before the technology: discover, map, score, prioritize, quantify ROI and build the roadmap.",
    ctaPrimary: "Run a SIGNAL Assessment",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "capabilities",
        eyebrow: "01 / CAPABILITIES",
        title: "What SIGNAL enables",
        blocks: [
          { title: "Discover", desc: "Observe real work and business exceptions." },
          { title: "Map", desc: "Map processes, data and friction points." },
          { title: "Score", desc: "Score impact, feasibility, risk and sensitivity." },
          { title: "Prioritize", desc: "Rank use cases by operable value." },
          { title: "Quantify ROI", desc: "Estimate load, FTE and annual value." },
          { title: "AI roadmap", desc: "Build the SIGNAL → Studio → OS path." },
        ],
      },
      {
        id: "deliverables",
        eyebrow: "02 / DELIVERABLES",
        title: "What you leave with",
        list: [
          "Process map",
          "AI opportunity map",
          "ROI matrix",
          "Risk assessment",
          "Prioritized backlog",
          "Architecture recommendations",
          "AI roadmap",
        ],
      },
      {
        id: "why",
        eyebrow: "03 / WHY",
        title: "Method before technology",
        body: "We don't sell an agent. We identify a company capability to raise — with governance, data and measures defined before the build.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const studio = {
  fr: {
    eyebrow: "PLATFORM / STUDIO",
    title: "Construire votre ",
    titleAccent: "force de travail IA.",
    sub: "Studio assemble agents, skills, outils, knowledge, workflows et validations humaines — sur le même socle gouverné.",
    ctaPrimary: "Parler Studio",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir la gouvernance",
    ctaSecondaryHref: "/governance",
    sections: [
      {
        id: "builder",
        eyebrow: "01 / BUILDER",
        title: "Une interface de construction",
        body: "Composez des agents spécialisés, branchez les outils, encodez les règles et posez les points d’approbation humaine.",
        flow: [
          "Research Agent",
          "Document Agent",
          "Human validation",
          "CRM update",
        ],
      },
      {
        id: "layers",
        eyebrow: "02 / COUCHES",
        title: "Ce que Studio orchestre",
        blocks: [
          { title: "Agents", desc: "Exécutants spécialisés et persistants." },
          { title: "Skills", desc: "Capacités réutilisables, versionnées." },
          { title: "Tools", desc: "Connecteurs CRM, ERP, email, GED, APIs." },
          { title: "Knowledge", desc: "Règles et sources autorisées." },
          { title: "Workflows", desc: "Enchaînements et escalades." },
          { title: "Human approvals", desc: "Décisions engagantes toujours humaines." },
        ],
      },
    ],
  },
  en: {
    eyebrow: "PLATFORM / STUDIO",
    title: "Build your ",
    titleAccent: "AI workforce.",
    sub: "Studio assembles agents, skills, tools, knowledge, workflows and human approvals — on the same governed foundation.",
    ctaPrimary: "Talk Studio",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See governance",
    ctaSecondaryHref: "/governance",
    sections: [
      {
        id: "builder",
        eyebrow: "01 / BUILDER",
        title: "A builder interface",
        body: "Compose specialized agents, wire tools, encode rules and set human approval points.",
        flow: [
          "Research Agent",
          "Document Agent",
          "Human validation",
          "CRM update",
        ],
      },
      {
        id: "layers",
        eyebrow: "02 / LAYERS",
        title: "What Studio orchestrates",
        blocks: [
          { title: "Agents", desc: "Specialized, persistent executors." },
          { title: "Skills", desc: "Reusable, versioned capabilities." },
          { title: "Tools", desc: "CRM, ERP, email, DMS, API connectors." },
          { title: "Knowledge", desc: "Rules and approved sources." },
          { title: "Workflows", desc: "Sequences and escalations." },
          { title: "Human approvals", desc: "Binding decisions stay human." },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const os = {
  fr: {
    eyebrow: "PLATFORM / REMPARIA OS",
    title: "Le système d’exploitation ",
    titleAccent: "de l’IA d’entreprise.",
    sub: "Remparia OS est le control plane : modèles, agents, outils, données, identité, politiques, observabilité et validations humaines.",
    ctaPrimary: "Demander une démo OS",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Studio",
    ctaSecondaryHref: "/studio",
    sections: [
      {
        id: "plane",
        eyebrow: "01 / CONTROL PLANE",
        title: "Pas un chatbot — un plan de contrôle",
        blocks: [
          { title: "Models", desc: "Routage multi-fournisseurs, réversible." },
          { title: "Agents", desc: "Force de travail orchestrée." },
          { title: "Tools", desc: "Intégrations sans remplacer le SI." },
          { title: "Enterprise Data", desc: "Mémoire et sources sous périmètre." },
          { title: "Identity", desc: "Qui peut faire quoi, zéro par défaut." },
          { title: "Policies", desc: "Règles métier et seuils d’arrêt." },
          { title: "Observability", desc: "Traçabilité et budgets." },
          { title: "Human approvals", desc: "Escalade dès qu’une décision engage." },
        ],
      },
      {
        id: "day",
        eyebrow: "02 / AU QUOTIDIEN",
        title: "Une journée avec l’OS",
        flow: ["Matin — dossiers prêts", "Journée — bon agent", "Soir — compte rendu"],
        body: "L’OS prépare, route, journalise et remonte ce qui demande un humain.",
      },
    ],
  },
  en: {
    eyebrow: "PLATFORM / REMPARIA OS",
    title: "The operating system for ",
    titleAccent: "enterprise AI.",
    sub: "Remparia OS is the control plane: models, agents, tools, data, identity, policies, observability and human approvals.",
    ctaPrimary: "Request an OS demo",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Studio",
    ctaSecondaryHref: "/studio",
    sections: [
      {
        id: "plane",
        eyebrow: "01 / CONTROL PLANE",
        title: "Not a chatbot — a control plane",
        blocks: [
          { title: "Models", desc: "Multi-vendor routing, reversible." },
          { title: "Agents", desc: "Orchestrated workforce." },
          { title: "Tools", desc: "Integrations without replacing systems." },
          { title: "Enterprise Data", desc: "Memory and sources in scope." },
          { title: "Identity", desc: "Who may do what, zero by default." },
          { title: "Policies", desc: "Business rules and stop thresholds." },
          { title: "Observability", desc: "Traceability and budgets." },
          { title: "Human approvals", desc: "Escalate when decisions bind." },
        ],
      },
      {
        id: "day",
        eyebrow: "02 / DAY TO DAY",
        title: "A day with the OS",
        flow: ["Morning — files ready", "Day — right agent", "Evening — report"],
        body: "The OS prepares, routes, logs and escalates what needs a human.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const governance = {
  fr: {
    eyebrow: "PLATFORM / GOVERNANCE",
    title: "Rester ",
    titleAccent: "maître du système.",
    sub: "Identité, RBAC, audit, permissions agents, validations humaines, logs, observabilité, politiques, coûts, sécurité, conformité.",
    ctaPrimary: "Cadrer la gouvernance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Souveraineté",
    ctaSecondaryHref: "/sovereignty",
    sections: [
      {
        id: "pillars",
        eyebrow: "01 / PILIERS",
        title: "Le contrôle n’est pas un correctif",
        blocks: [
          { title: "Identity & RBAC", desc: "Accès zéro par défaut, rôles nommés." },
          { title: "Agent permissions", desc: "Périmètre d’action explicite." },
          { title: "Human approvals", desc: "Décision engageante hors machine." },
          { title: "Policies", desc: "Règles, budgets, seuils d’arrêt." },
          { title: "Observability", desc: "Mesure continue et revue." },
          { title: "Security & compliance", desc: "Journal opposable, contrôles." },
        ],
      },
      {
        id: "audit",
        eyebrow: "02 / AUDIT LOG",
        title: "Chaque action est journalisée",
        rows: [
          { label: "Agent", value: "Document Agent" },
          { label: "Action", value: "Fetch CRM record" },
          { label: "Resource", value: "Opportunity #4821" },
          { label: "Decision", value: "Human approved" },
          { label: "Timestamp", value: "2026-08-24 14:02:11" },
          { label: "Status", value: "OK" },
        ],
        note: "Exemple illustratif — format d’audit, pas une donnée client.",
      },
    ],
  },
  en: {
    eyebrow: "PLATFORM / GOVERNANCE",
    title: "Stay ",
    titleAccent: "in control.",
    sub: "Identity, RBAC, audit, agent permissions, human approvals, logs, observability, policies, cost, security, compliance.",
    ctaPrimary: "Frame governance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Sovereignty",
    ctaSecondaryHref: "/sovereignty",
    sections: [
      {
        id: "pillars",
        eyebrow: "01 / PILLARS",
        title: "Control is not a retrofit",
        blocks: [
          { title: "Identity & RBAC", desc: "Zero access by default, named roles." },
          { title: "Agent permissions", desc: "Explicit action scope." },
          { title: "Human approvals", desc: "Binding decisions stay human." },
          { title: "Policies", desc: "Rules, budgets, stop thresholds." },
          { title: "Observability", desc: "Continuous measure and review." },
          { title: "Security & compliance", desc: "Auditable logs and controls." },
        ],
      },
      {
        id: "audit",
        eyebrow: "02 / AUDIT LOG",
        title: "Every action is logged",
        rows: [
          { label: "Agent", value: "Document Agent" },
          { label: "Action", value: "Fetch CRM record" },
          { label: "Resource", value: "Opportunity #4821" },
          { label: "Decision", value: "Human approved" },
          { label: "Timestamp", value: "2026-08-24 14:02:11" },
          { label: "Status", value: "OK" },
        ],
        note: "Illustrative example — audit format, not client data.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const sovereignty = {
  fr: {
    eyebrow: "PLATFORM / SOVEREIGNTY",
    title: "Souveraineté ",
    titleAccent: "par architecture.",
    sub: "Remparia Cloud, Sovereign Cloud, Private Cloud, On-Premise — et air-gapped quand c’est pertinent. Les données, modèles, OS, agents, logs et clés restent sous votre contrôle.",
    ctaPrimary: "Choisir l’architecture",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir l’OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "modes",
        eyebrow: "01 / MODES",
        title: "Quatre modes de déploiement",
        blocks: [
          { title: "Remparia Cloud", desc: "Démarrage rapide, gouvernance incluse." },
          { title: "Sovereign Cloud", desc: "Région et fournisseurs cadrés." },
          { title: "Private Cloud", desc: "Votre cloud, vos frontières." },
          { title: "On-Premise", desc: "Dans votre datacenter." },
        ],
        list: ["Air-gapped lorsque pertinent"],
      },
      {
        id: "where",
        eyebrow: "02 / OÙ TOURNE QUOI",
        title: "Clarté d’architecture",
        rows: [
          { label: "Données", value: "Dans le périmètre convenu" },
          { label: "LLM", value: "Cloud choisi ou local selon sensibilité" },
          { label: "Remparia OS", value: "Control plane sous votre gouvernance" },
          { label: "Agents", value: "Sur le même socle, droits nommés" },
          { label: "Logs", value: "Journalisés, exportables, opposables" },
          { label: "Clés", value: "Vous les possédez / contrôlez" },
          { label: "Accès", value: "Vous définissez qui peut quoi" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "PLATFORM / SOVEREIGNTY",
    title: "Sovereignty ",
    titleAccent: "by architecture.",
    sub: "Remparia Cloud, Sovereign Cloud, Private Cloud, On-Premise — and air-gapped when relevant. Data, models, OS, agents, logs and keys stay under your control.",
    ctaPrimary: "Choose the architecture",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See the OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "modes",
        eyebrow: "01 / MODES",
        title: "Four deployment modes",
        blocks: [
          { title: "Remparia Cloud", desc: "Fast start, governance included." },
          { title: "Sovereign Cloud", desc: "Framed region and vendors." },
          { title: "Private Cloud", desc: "Your cloud, your boundaries." },
          { title: "On-Premise", desc: "In your datacenter." },
        ],
        list: ["Air-gapped when relevant"],
      },
      {
        id: "where",
        eyebrow: "02 / WHERE WHAT RUNS",
        title: "Architecture clarity",
        rows: [
          { label: "Data", value: "In the agreed perimeter" },
          { label: "LLM", value: "Chosen cloud or local by sensitivity" },
          { label: "Remparia OS", value: "Control plane under your governance" },
          { label: "Agents", value: "Same foundation, named rights" },
          { label: "Logs", value: "Logged, exportable, auditable" },
          { label: "Keys", value: "You own / control them" },
          { label: "Access", value: "You define who may do what" },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const realEstate = {
  fr: {
    eyebrow: "SOLUTIONS / REAL ESTATE",
    title: "Pack immobilier — ",
    titleAccent: "force de travail IA.",
    sub: "Premier vertical industrialisé : agents métier, orchestrateur, connecteurs et gouvernance — sans recréer chaque projet from scratch.",
    ctaPrimary: "Lancer SIGNAL immobilier",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir tous les métiers",
    ctaSecondaryHref: "/secteurs",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTIONS",
        title: "Là où le temps disparaît",
        list: [
          "Qualification leads manuelle",
          "Matching biens / critères dispersé",
          "Documents et relances chronophages",
          "Support locataire saturé",
          "Reporting opérationnel tardif",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Agents du pack",
        blocks: [
          { title: "Lead Qualification", desc: "Trier et scorer les demandes." },
          { title: "Property Matching", desc: "Croiser critères et stock." },
          { title: "Document Agent", desc: "Collecte et contrôle de pièces." },
          { title: "Tenant Support", desc: "Réponses L1 cadrées." },
          { title: "Operations Agent", desc: "Suivi et escalades." },
          { title: "Reporting / Rent", desc: "Préparation analytique." },
        ],
      },
      {
        id: "integrations",
        eyebrow: "03 / INTÉGRATIONS",
        title: "Connecteurs types",
        flow: ["CRM", "Email", "ERP", "GED", "Calendar", "Property platforms", "APIs"],
        note: "Les connecteurs exacts sont cadrés en SIGNAL — pas de fake case.",
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / REAL ESTATE",
    title: "Real estate pack — ",
    titleAccent: "AI workforce.",
    sub: "First industrialized vertical: business agents, orchestrator, connectors and governance — without rebuilding every project from scratch.",
    ctaPrimary: "Start real-estate SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See all industries",
    ctaSecondaryHref: "/secteurs",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTION",
        title: "Where time disappears",
        list: [
          "Manual lead qualification",
          "Scattered property matching",
          "Document chase-ups",
          "Overloaded tenant support",
          "Late operational reporting",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Pack agents",
        blocks: [
          { title: "Lead Qualification", desc: "Sort and score requests." },
          { title: "Property Matching", desc: "Match criteria and inventory." },
          { title: "Document Agent", desc: "Collection and checks." },
          { title: "Tenant Support", desc: "Framed L1 answers." },
          { title: "Operations Agent", desc: "Follow-up and escalations." },
          { title: "Reporting / Rent", desc: "Analytical preparation." },
        ],
      },
      {
        id: "integrations",
        eyebrow: "03 / INTEGRATIONS",
        title: "Typical connectors",
        flow: ["CRM", "Email", "ERP", "DMS", "Calendar", "Property platforms", "APIs"],
        note: "Exact connectors are scoped in SIGNAL — no fake case studies.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const legal = {
  fr: {
    eyebrow: "SOLUTIONS / LEGAL",
    title: "Pack juridique — ",
    titleAccent: "force de travail IA.",
    sub: "Revue documentaire, préparation de dossiers et contrôles de conformité — sous gouvernance et validation humaine.",
    ctaPrimary: "Lancer SIGNAL juridique",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir tous les métiers",
    ctaSecondaryHref: "/secteurs",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTIONS",
        title: "Là où le temps disparaît",
        list: [
          "Revue documentaire manuelle",
          "Préparation de dossiers dispersée",
          "Contrôles de conformité chronophages",
          "Veille et synthèse tardives",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Agents du pack",
        blocks: [
          { title: "Document Review", desc: "Trier, résumer, signaler les écarts." },
          { title: "Case Prep", desc: "Assembler le dossier pour l’humain." },
          { title: "Compliance Check", desc: "Contrôles cadrés, escalade si doute." },
        ],
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / LEGAL",
    title: "Legal pack — ",
    titleAccent: "AI workforce.",
    sub: "Document review, case prep and compliance checks — under governance and human validation.",
    ctaPrimary: "Start legal SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See all industries",
    ctaSecondaryHref: "/secteurs",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTION",
        title: "Where time disappears",
        list: [
          "Manual document review",
          "Scattered case preparation",
          "Time-consuming compliance checks",
          "Late monitoring and synthesis",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Pack agents",
        blocks: [
          { title: "Document Review", desc: "Sort, summarize, flag gaps." },
          { title: "Case Prep", desc: "Assemble the file for the human." },
          { title: "Compliance Check", desc: "Framed checks, escalate on doubt." },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const finance = {
  fr: {
    eyebrow: "SOLUTIONS / FINANCE",
    title: "Pack services financiers — ",
    titleAccent: "force de travail IA.",
    sub: "KYC assisté, reporting et préparation risque — avec pistes d’audit et décisions humaines sur les seuils.",
    ctaPrimary: "Lancer SIGNAL finance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir la gouvernance",
    ctaSecondaryHref: "/governance",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTIONS",
        title: "Là où le temps disparaît",
        list: [
          "Collecte KYC répétitive",
          "Reporting opérationnel tardif",
          "Préparation risque fragmentée",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Agents du pack",
        blocks: [
          { title: "KYC Assist", desc: "Collecte et contrôle de pièces." },
          { title: "Reporting", desc: "Préparation analytique cadrée." },
          { title: "Risk Prep", desc: "Dossiers prêts pour revue humaine." },
        ],
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / FINANCE",
    title: "Financial services pack — ",
    titleAccent: "AI workforce.",
    sub: "Assisted KYC, reporting and risk prep — with audit trails and human decisions on thresholds.",
    ctaPrimary: "Start finance SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See governance",
    ctaSecondaryHref: "/governance",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTION",
        title: "Where time disappears",
        list: [
          "Repetitive KYC collection",
          "Late operational reporting",
          "Fragmented risk preparation",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Pack agents",
        blocks: [
          { title: "KYC Assist", desc: "Document collection and checks." },
          { title: "Reporting", desc: "Framed analytical preparation." },
          { title: "Risk Prep", desc: "Files ready for human review." },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const about = {
  fr: {
    eyebrow: "COMPANY / ABOUT",
    title: "Une plateforme + une méthode + ",
    titleAccent: "une capacité d’exploitation.",
    sub: "Remparia transforme l’IA en capacité opérationnelle gouvernée — pas des chatbots, pas de régie ouverte.",
    ctaPrimary: "Book a SIGNAL Session",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Nous contacter",
    ctaSecondaryHref: "/contact",
    sections: [
      {
        id: "position",
        eyebrow: "01 / POSITION",
        title: "Ce que Remparia est — et n’est pas",
        list: [
          "Pas une agence de chatbot",
          "Pas un intégrateur n8n",
          "Pas du développement sur mesure sans méthode",
          "Pas un revendeur de LLM",
        ],
        body: "SIGNAL décide. Studio construit. OS orchestre. Governance contrôle. AI Operations maintient.",
      },
      {
        id: "system",
        eyebrow: "02 / SYSTÈME",
        title: "Le modèle opératoire",
        flow: ["SIGNAL", "STUDIO", "OS", "GOVERNANCE"],
      },
    ],
  },
  en: {
    eyebrow: "COMPANY / ABOUT",
    title: "A platform + a method + ",
    titleAccent: "an operating capability.",
    sub: "Remparia turns AI into governed operational capacity — not chatbots, not open-ended billing.",
    ctaPrimary: "Book a SIGNAL Session",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Contact us",
    ctaSecondaryHref: "/contact",
    sections: [
      {
        id: "position",
        eyebrow: "01 / POSITION",
        title: "What Remparia is — and is not",
        list: [
          "Not a chatbot agency",
          "Not an n8n integrator",
          "Not custom build without method",
          "Not an LLM reseller",
        ],
        body: "SIGNAL decides. Studio builds. OS orchestrates. Governance controls. AI Operations maintains.",
      },
      {
        id: "system",
        eyebrow: "02 / SYSTEM",
        title: "The operating model",
        flow: ["SIGNAL", "STUDIO", "OS", "GOVERNANCE"],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const demarrer = {
  fr: {
    eyebrow: "GET STARTED / SIGNAL",
    title: "Trois façons de ",
    titleAccent: "commencer.",
    sub: "Avant de vous engager : cadrer, diagnostiquer, ou déployer le premier agent — forfaits cadrés.",
    ctaPrimary: "Réserver une session SIGNAL",
    ctaPrimaryHref: "/contact",
    ctaSecondary: "Voir la méthode",
    ctaSecondaryHref: "/signal",
    sections: [
      {
        id: "paths",
        eyebrow: "01 / PARCOURS",
        title: "Choisissez le niveau d’engagement",
        blocks: [
          {
            title: "Session SIGNAL",
            desc: "1 h pour cadrer valeur, données et gouvernance.",
            items: ["Cadrage", "Hypothèses ROI", "Prochaine étape"],
          },
          {
            title: "Diagnostic",
            desc: "Cartographier, scorer et prioriser les cas d’usage.",
            items: ["Process map", "ROI matrix", "Roadmap"],
          },
          {
            title: "Premier agent",
            desc: "Construire et gouverner le premier exécutant métier.",
            items: ["Studio", "OS", "Human approvals"],
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: "GET STARTED / SIGNAL",
    title: "Three ways to ",
    titleAccent: "begin.",
    sub: "Before you commit: frame, diagnose, or deploy the first agent — framed fees.",
    ctaPrimary: "Book a SIGNAL Session",
    ctaPrimaryHref: "/contact",
    ctaSecondary: "See the method",
    ctaSecondaryHref: "/signal",
    sections: [
      {
        id: "paths",
        eyebrow: "01 / PATHS",
        title: "Choose the level of commitment",
        blocks: [
          {
            title: "SIGNAL Session",
            desc: "1 hr to frame value, data and governance.",
            items: ["Framing", "ROI assumptions", "Next step"],
          },
          {
            title: "Diagnostic",
            desc: "Map, score and prioritize use cases.",
            items: ["Process map", "ROI matrix", "Roadmap"],
          },
          {
            title: "First agent",
            desc: "Build and govern the first business executor.",
            items: ["Studio", "OS", "Human approvals"],
          },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const pourQui = {
  fr: {
    eyebrow: "RESOURCES / POUR QUI",
    title: "Là où Remparia ",
    titleAccent: "est légitime.",
    sub: "Métiers à responsabilité, données sensibles, décisions humaines à préserver — pas le volume low-stakes.",
    ctaPrimary: "Voir les solutions métiers",
    ctaPrimaryHref: "/secteurs",
    ctaSecondary: "Démarrer",
    ctaSecondaryHref: "/demarrer",
    sections: [
      {
        id: "fit",
        eyebrow: "01 / FIT",
        title: "Pour qui",
        blocks: [
          { title: "Droit & chiffre", desc: "Cabinets où la preuve et la responsabilité comptent." },
          { title: "Patrimoine & risque", desc: "Processus sensibles, conformité, traçabilité." },
          { title: "Cabinets spécialisés", desc: "Expertise humaine au centre, IA en support gouverné." },
        ],
      },
      {
        id: "not",
        eyebrow: "02 / HORS PÉRIMÈTRE",
        title: "Qui n’est pas notre client",
        list: [
          "Chatbots grand public sans gouvernance",
          "Projets « démo pour la démo »",
          "Automatisation low-stakes sans mesure",
        ],
      },
    ],
  },
  en: {
    eyebrow: "RESOURCES / WHO IT IS FOR",
    title: "Where Remparia ",
    titleAccent: "is legitimate.",
    sub: "Accountability professions, sensitive data, human decisions to preserve — not low-stakes volume.",
    ctaPrimary: "See industry solutions",
    ctaPrimaryHref: "/secteurs",
    ctaSecondary: "Get started",
    ctaSecondaryHref: "/demarrer",
    sections: [
      {
        id: "fit",
        eyebrow: "01 / FIT",
        title: "Who it is for",
        blocks: [
          { title: "Law & accounting", desc: "Firms where evidence and accountability matter." },
          { title: "Wealth & risk", desc: "Sensitive processes, compliance, traceability." },
          { title: "Specialized firms", desc: "Human expertise at the center, governed AI support." },
        ],
      },
      {
        id: "not",
        eyebrow: "02 / OUT OF SCOPE",
        title: "Who is not our client",
        list: [
          "Consumer chatbots without governance",
          "Demo-for-demo projects",
          "Low-stakes automation without measures",
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const casUsage = {
  fr: {
    eyebrow: "RESOURCES / CAS D’USAGE",
    title: "Des processus métier, ",
    titleAccent: "jamais une techno.",
    sub: "Chaque cas d’usage décrit ce que l’agent fait, ce qu’il ne fait jamais, et ce qu’on mesure.",
    ctaPrimary: "Lancer SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "examples",
        eyebrow: "01 / EXEMPLES",
        title: "Familles de processus",
        blocks: [
          { title: "Qualification & triage", desc: "Trier, scorer, router — décision humaine sur les seuils." },
          { title: "Documents & conformité", desc: "Collecte, contrôle, dossier prêt pour revue." },
          { title: "Support L1 cadré", desc: "Réponses dans le périmètre, escalade hors règles." },
          { title: "Reporting opérationnel", desc: "Préparation analytique, pas de décision engagée." },
        ],
      },
      {
        id: "measure",
        eyebrow: "02 / MESURE",
        title: "Ce qu’on mesure",
        list: [
          "Heures répétitives récupérées",
          "Taux d’escalade humaine",
          "Qualité des livrables",
          "Coût et latence du système",
        ],
      },
    ],
  },
  en: {
    eyebrow: "RESOURCES / USE CASES",
    title: "Business workflows, ",
    titleAccent: "never technology.",
    sub: "Each use case describes what the agent does, what it never does, and what we measure.",
    ctaPrimary: "Start SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "examples",
        eyebrow: "01 / EXAMPLES",
        title: "Process families",
        blocks: [
          { title: "Qualification & triage", desc: "Sort, score, route — human decision on thresholds." },
          { title: "Documents & compliance", desc: "Collect, check, file ready for review." },
          { title: "Framed L1 support", desc: "Answers in scope, escalate outside rules." },
          { title: "Operational reporting", desc: "Analytical prep, no binding decisions." },
        ],
      },
      {
        id: "measure",
        eyebrow: "02 / MEASURE",
        title: "What we measure",
        list: [
          "Repetitive hours recovered",
          "Human escalation rate",
          "Deliverable quality",
          "System cost and latency",
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

export const PAGES_PREMIUM = {
  signal,
  studio,
  os,
  governance,
  sovereignty,
  realEstate,
  legal,
  finance,
  about,
  demarrer,
  pourQui,
  casUsage,
} as const;

export function premiumPage(
  key: keyof typeof PAGES_PREMIUM,
  lang: Lang,
): PremiumPageCopy {
  return PAGES_PREMIUM[key][lang];
}
