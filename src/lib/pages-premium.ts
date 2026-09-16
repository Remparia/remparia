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
    links?: readonly { label: string; href: string }[];
  }[];
};

const signal = {
  fr: {
    eyebrow: "METHOD / SIGNAL",
    title: "Trouver où l’IA ",
    titleAccent: "compte vraiment.",
    sub: "SIGNAL est la méthode Remparia : découvrir, cartographier, scorer, prioriser, estimer la charge et bâtir la roadmap avant le build.",
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
        body: "On ne vend pas un agent. On cadre d’abord où l’IA crée de la valeur : gouvernance, données et mesures avant le build.",
      },
    ],
  },
  en: {
    eyebrow: "METHOD / SIGNAL",
    title: "Find where AI ",
    titleAccent: "actually matters.",
    sub: "SIGNAL is the Remparia method: discover, map, score, prioritize, estimate load and build the roadmap before the build.",
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
        body: "We don't sell an agent. We first frame where AI creates value: governance, data and measures before the build.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const studio = {
  fr: {
    eyebrow: "02 / STUDIO",
    title: "N’ajoutez pas un chatbot. ",
    titleAccent: "Construisez la force de travail.",
    sub: "Après SIGNAL, Studio assemble agents, compétences, outils, connaissance et validations humaines, prêts à tourner dans Remparia OS.",
    ctaPrimary: "Parler Studio",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / LE CONSTAT",
        title: "Un prompt n’est pas une organisation.",
        body: "Le défi n’est plus de faire parler un modèle. C’est de concevoir des agents qui agissent dans votre métier et restent sous contrôle.",
        rows: [
          { label: "Chatbot générique", value: "Agent métier spécialisé" },
          { label: "Prompt isolé", value: "Compétences versionnées" },
          { label: "Outils collés après", value: "Connecteurs dès la conception" },
          { label: "Un agent seul", value: "Workflow multi-agents" },
          { label: "Shadow AI", value: "Né gouverné" },
        ],
      },
      {
        id: "couches",
        eyebrow: "02 / LES COUCHES",
        title: "Ce que Studio compose",
        blocks: [
          { title: "Agents", desc: "Exécutants spécialisés, persistants, jamais génériques." },
          { title: "Compétences", desc: "Capacités réutilisables et versionnées." },
          { title: "Outils", desc: "CRM, ERP, e-mail, GED, APIs. Branchés, pas remplacés." },
          { title: "Connaissance", desc: "Règles métier et sources autorisées." },
          { title: "Workflows", desc: "Enchaînements, escalades, seuils." },
          { title: "Validations humaines", desc: "Toute décision engageante s’arrête ici." },
        ],
      },
      {
        id: "protocole",
        eyebrow: "03 / LE PROTOCOLE",
        title: "De l’opportunité à l’agent opérable",
        flow: [
          "Cadrer depuis SIGNAL",
          "Composer l’agent",
          "Brancher le réel",
          "Dessiner le workflow",
          "Poser les portes humaines",
          "Publier dans l’OS",
        ],
      },
    ],
  },
  en: {
    eyebrow: "02 / STUDIO",
    title: "Don't add a chatbot. ",
    titleAccent: "Build the workforce.",
    sub: "After SIGNAL, Studio assembles agents, skills, tools, knowledge and human approvals, ready to run in Remparia OS.",
    ctaPrimary: "Talk Studio",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / THE GAP",
        title: "A prompt is not an organization.",
        body: "The challenge is no longer getting a model to talk. It is designing agents that act in your business and stay under control.",
        rows: [
          { label: "Generic chatbot", value: "Specialized business agent" },
          { label: "Isolated prompt", value: "Versioned skills" },
          { label: "Tools bolted on later", value: "Connectors from day one" },
          { label: "A lone agent", value: "Multi-agent workflow" },
          { label: "Shadow AI", value: "Born governed" },
        ],
      },
      {
        id: "couches",
        eyebrow: "02 / LAYERS",
        title: "What Studio composes",
        blocks: [
          { title: "Agents", desc: "Specialized, persistent executors, never generic." },
          { title: "Skills", desc: "Reusable, versioned capabilities." },
          { title: "Tools", desc: "CRM, ERP, email, DMS, APIs. Wired, not replaced." },
          { title: "Knowledge", desc: "Business rules and approved sources." },
          { title: "Workflows", desc: "Sequences, escalations, thresholds." },
          { title: "Human approvals", desc: "Every binding decision stops here." },
        ],
      },
      {
        id: "protocole",
        eyebrow: "03 / THE PROTOCOL",
        title: "From opportunity to operable agent",
        flow: [
          "Frame from SIGNAL",
          "Compose the agent",
          "Wire the real world",
          "Draw the workflow",
          "Set human gates",
          "Publish to the OS",
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
    sub: "Remparia OS est le control plane entre votre force de travail IA et votre entreprise : modèles, agents, outils, données, identité, politiques, observabilité et validations humaines.",
    ctaPrimary: "Demander une démo OS",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Studio",
    ctaSecondaryHref: "/studio",
    sections: [
      {
        id: "plane",
        eyebrow: "01 / CONTROL PLANE",
        title: "Pas un chatbot. Un plan de contrôle.",
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
        flow: ["Matin : dossiers prêts", "Journée : bon agent", "Soir : compte rendu"],
        body: "L’OS prépare, route, journalise et remonte ce qui demande un humain.",
      },
    ],
  },
  en: {
    eyebrow: "PLATFORM / REMPARIA OS",
    title: "The operating system for ",
    titleAccent: "enterprise AI.",
    sub: "Remparia OS is the control plane between your AI workforce and your company: models, agents, tools, data, identity, policies, observability and human approvals.",
    ctaPrimary: "Request an OS demo",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Studio",
    ctaSecondaryHref: "/studio",
    sections: [
      {
        id: "plane",
        eyebrow: "01 / CONTROL PLANE",
        title: "Not a chatbot. A control plane.",
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
        flow: ["Morning: files ready", "Day: right agent", "Evening: report"],
        body: "The OS prepares, routes, logs and escalates what needs a human.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const governance = {
  fr: {
    eyebrow: "04 / GOUVERNANCE",
    title: "Une gouvernance qui accélère l’adoption — ",
    titleAccent: "sans lâcher le contrôle.",
    sub: "Le risque n’est pas le futur rollout. C’est l’IA non gouvernée déjà en cours. Remparia met les rails dans l’OS : ALLOW / REVIEW / BLOCK, identité, journal. Pas un PDF que personne ne lit.",
    ctaPrimary: "Cadrer la gouvernance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "pourquoi",
        eyebrow: "01 / POURQUOI MAINTENANT",
        title: "Le risque arrive avant la politique.",
        body: "L’adoption n’attend pas la permission. Données réelles dans des logins que l’IT n’a jamais validés.",
        list: [
          "Tout le monde construit sans standard",
          "Données sur logins perso",
          "Cinq personnes, cinq façons",
          "Pas de porte avant le live",
        ],
      },
      {
        id: "constat",
        eyebrow: "02 / LE CONSTAT",
        title: "L’autonomie sans règles n’est pas de l’IA.",
        body: "Le défi n’est plus de faire agir un agent. C’est de décider ce qu’il peut faire, ce qu’il prépare, et ce qu’il ne touche jamais.",
        rows: [
          { label: "Shadow AI", value: "IA permissionnée" },
          { label: "Prompt libre", value: "Politiques versionnées" },
          { label: "Accès trop large", value: "Zéro privilège par défaut" },
          { label: "Décision opaque", value: "Journal opposable" },
          { label: "Gouvernance après coup", value: "Contrôle dès la conception" },
        ],
      },
      {
        id: "rails",
        eyebrow: "03 / LES RAILS",
        title: "La gouvernance vit dans le travail — pas dans un PDF.",
        blocks: [
          { title: "Politique d’usage", desc: "Qui, quelles données, où : versionné dans l’OS." },
          { title: "Stack approuvée", desc: "Outils et modèles autorisés par métier." },
          { title: "Accès & classification", desc: "RBAC, zéro privilège par défaut." },
          { title: "ALLOW / REVIEW / BLOCK", desc: "Chaque action passe une porte." },
          { title: "Audit & monitoring", desc: "Actions traçables, direction informée." },
          { title: "Propriétaire & runbook", desc: "Humain nommé, contrôle tenu." },
        ],
      },
      {
        id: "pillars",
        eyebrow: "05 / LES PILIERS",
        title: "Le contrôle n’est pas un correctif",
        blocks: [
          { title: "Identité & RBAC", desc: "Accès zéro par défaut. Chaque agent a un propriétaire humain nommé." },
          { title: "Permissions agent", desc: "Périmètre d’action explicite : outils, dossiers, canaux, plafonds." },
          { title: "Politiques", desc: "ALLOW, REVIEW, BLOCK : règles métier et seuils d’arrêt versionnés." },
          { title: "Budgets", desc: "Coûts modèles, plafonds d’usage, alertes avant dépassement." },
          { title: "Observabilité", desc: "Latence, échecs, escalades, qualité : mesurés en continu." },
          { title: "Audit opposable", desc: "Qui a fait quoi, sur quelle ressource, avec quelle décision humaine." },
        ],
      },
      {
        id: "policies",
        eyebrow: "06 / POLITIQUES",
        title: "ALLOW · REVIEW · BLOCK",
        flow: ["ALLOW : Exécuter", "REVIEW : Préparer et attendre", "BLOCK : Ne jamais faire"],
      },
    ],
  },
  en: {
    eyebrow: "04 / GOVERNANCE",
    title: "Governance that speeds adoption — ",
    titleAccent: "without letting go of control.",
    sub: "The risk is not the future rollout. It is the ungoverned AI already running. Remparia puts the rails in the OS: ALLOW / REVIEW / BLOCK, identity, log. Not a PDF nobody reads.",
    ctaPrimary: "Frame governance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    sections: [
      {
        id: "why",
        eyebrow: "01 / WHY NOW",
        title: "Risk shows up before any policy does.",
        body: "Adoption never waits for permission. Real data in logins IT never approved.",
        list: [
          "Everyone builds without a standard",
          "Company data on personal logins",
          "Five people, five different ways",
          "No gate between built and shipped",
        ],
      },
      {
        id: "constat",
        eyebrow: "02 / THE GAP",
        title: "Autonomy without rules is not AI.",
        body: "The challenge is no longer getting an agent to act. It is deciding what it can do, what it prepares, and what it never touches.",
        rows: [
          { label: "Shadow AI", value: "Permissioned AI" },
          { label: "Free-form prompt", value: "Versioned policies" },
          { label: "Over-broad access", value: "Zero privilege by default" },
          { label: "Opaque decision", value: "Auditable log" },
          { label: "Governance after the fact", value: "Control by design" },
        ],
      },
      {
        id: "rails",
        eyebrow: "03 / THE RAILS",
        title: "Governance lives in the work — not in a PDF.",
        blocks: [
          { title: "Usage policy", desc: "Who, what data, where: versioned in the OS." },
          { title: "Approved stack", desc: "Tools and models sanctioned by job." },
          { title: "Access & classification", desc: "RBAC, zero privilege by default." },
          { title: "ALLOW / REVIEW / BLOCK", desc: "Every action passes a gate." },
          { title: "Audit & monitoring", desc: "Traceable actions, visible to leadership." },
          { title: "Owner & runbook", desc: "Named human, control that holds." },
        ],
      },
      {
        id: "pillars",
        eyebrow: "05 / PILLARS",
        title: "Control is not a retrofit",
        blocks: [
          { title: "Identity & RBAC", desc: "Zero access by default. Each agent has a named human owner." },
          { title: "Agent permissions", desc: "Explicit action scope: tools, files, channels, caps." },
          { title: "Policies", desc: "ALLOW, REVIEW, BLOCK: versioned business rules and stop thresholds." },
          { title: "Budgets", desc: "Model costs, usage caps, alerts before overrun." },
          { title: "Observability", desc: "Latency, failures, escalations, quality: measured continuously." },
          { title: "Auditable logs", desc: "Who did what, on which resource, with which human decision." },
        ],
      },
      {
        id: "policies",
        eyebrow: "06 / POLICIES",
        title: "ALLOW · REVIEW · BLOCK",
        flow: ["ALLOW: Execute", "REVIEW: Prepare and wait", "BLOCK: Never do"],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const sovereignty = {
  fr: {
    eyebrow: "06 / SOUVERAINETÉ",
    title: "Votre IA. Votre infrastructure. ",
    titleAccent: "Vos règles.",
    sub: "Cloud Remparia, cloud souverain ou on-premise : mêmes agents, même OS, même gouvernance. Vous durcissez le périmètre ; agents et politiques restent les mêmes.",
    ctaPrimary: "Cadrer le déploiement",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir la gouvernance",
    ctaSecondaryHref: "/governance",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / LE CONSTAT",
        title: "Un cloud « souverain » sans contrôle n’est qu’un autre cloud.",
        body: "Le défi n’est pas d’afficher une région. C’est de garder les mêmes stops humains, le même journal et les mêmes politiques, quel que soit le périmètre.",
        rows: [
          { label: "Souveraineté marketing", value: "Périmètre d’architecture" },
          { label: "Produit cloud parallèle", value: "Même OS, trois modes" },
          { label: "Contrôle dilué par l’hébergeur", value: "Contrôle inchangé" },
          { label: "Certifs en vitrine", value: "Cadrage SIGNAL sérieux" },
          { label: "Agents différents selon le cloud", value: "Même force de travail" },
        ],
      },
      {
        id: "pourquoi",
        eyebrow: "02 / POURQUOI MAINTENANT",
        title: "La résilience a rejoint le stack.",
        body: "Acheteurs, régulateurs et conseils demandent où vit votre IA, et qui peut l’éteindre.",
        list: [
          "Dépendance métier hors périmètre",
          "Règles et drapeaux (extraterritorialité)",
          "Exigence board : mode gouverné, pas une région",
        ],
      },
      {
        id: "piliers",
        eyebrow: "03 / TROIS PILIERS",
        title: "Vos données. Votre IA. Votre contrôle.",
        blocks: [
          { title: "Vos données", desc: "Résidence dans le périmètre convenu." },
          { title: "Votre IA", desc: "Agents et modèles dans le mode choisi." },
          { title: "Votre contrôle", desc: "ALLOW / REVIEW / BLOCK identiques partout." },
        ],
      },
      {
        id: "modes",
        eyebrow: "04 / LES MODES",
        title: "Trois périmètres. Un même système.",
        body: "La souveraineté n’est pas binaire : démarrez en Cloud Remparia, durcissez vers souverain ou on-prem, sans changer agents ni politiques.",
        blocks: [
          { title: "Cloud Remparia", desc: "Mise en production en jours, gouvernance incluse." },
          { title: "Cloud souverain", desc: "Périmètre EU / France, réseau isolé, audit." },
          { title: "On-premise", desc: "Rien ne sort. Clés et modèles sous votre contrôle." },
        ],
      },
      {
        id: "invariant",
        eyebrow: "05 / INVARIANT",
        title: "L’hébergement se choisit. Le contrôle ne se négocie pas.",
        list: [
          "Mêmes agents",
          "Mêmes politiques ALLOW / REVIEW / BLOCK",
          "Même journal opposable",
          "Même stop humain",
        ],
      },
    ],
  },
  en: {
    eyebrow: "06 / SOVEREIGNTY",
    title: "Your AI. Your infrastructure. ",
    titleAccent: "Your rules.",
    sub: "Remparia Cloud, sovereign cloud or on-premise: the same agents, the same OS, the same governance. You harden the perimeter; agents and policies stay the same.",
    ctaPrimary: "Frame the deployment",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See governance",
    ctaSecondaryHref: "/governance",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / THE GAP",
        title: "A “sovereign” cloud without control is just another cloud.",
        body: "The challenge is not displaying a region. It is keeping the same human stops, the same log and the same policies, whatever the perimeter.",
        rows: [
          { label: "Marketing sovereignty", value: "Architecture perimeter" },
          { label: "Parallel cloud product", value: "Same OS, three modes" },
          { label: "Control diluted by host", value: "Control unchanged" },
          { label: "Certifications on display", value: "Serious SIGNAL scoping" },
          { label: "Different agents per cloud", value: "Same workforce" },
        ],
      },
      {
        id: "why",
        eyebrow: "02 / WHY NOW",
        title: "Resilience has reached the stack.",
        body: "Buyers, regulators and boards ask where your AI lives, and who can turn it off.",
        list: [
          "Business dependency outside the perimeter",
          "Rules and flags (extraterritoriality)",
          "Board requirement: governed mode, not a region",
        ],
      },
      {
        id: "pillars",
        eyebrow: "03 / THREE PILLARS",
        title: "Your data. Your AI. Your control.",
        blocks: [
          { title: "Your data", desc: "Residency in the agreed perimeter." },
          { title: "Your AI", desc: "Agents and models in the chosen mode." },
          { title: "Your control", desc: "ALLOW / REVIEW / BLOCK identical everywhere." },
        ],
      },
      {
        id: "modes",
        eyebrow: "04 / MODES",
        title: "Three perimeters. One system.",
        body: "Sovereignty is not binary: start on Remparia Cloud, harden to sovereign or on-prem, without changing agents or policies.",
        blocks: [
          { title: "Remparia Cloud", desc: "Production in days, governance included." },
          { title: "Sovereign cloud", desc: "EU / France perimeter, isolated network, audit." },
          { title: "On-premise", desc: "Nothing leaves. Keys and models under your control." },
        ],
      },
      {
        id: "invariant",
        eyebrow: "05 / INVARIANT",
        title: "Hosting is a choice. Control is not negotiable.",
        list: [
          "Same agents",
          "Same ALLOW / REVIEW / BLOCK policies",
          "Same auditable log",
          "Same human stop",
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const realEstate = {
  fr: {
    eyebrow: "SOLUTIONS / IMMOBILIER",
    title: "Le temps expert reste ",
    titleAccent: "sur la décision.",
    sub: "Qualification, matching, dossiers et relances sous gouvernance, sans déléguer mandat, visite ou négociation à la machine.",
    ctaPrimary: "Lancer SIGNAL immobilier",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir le métier agence",
    ctaSecondaryHref: "/secteurs/agence-immobiliere",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / CONSTAT",
        title: "Là où le temps disparaît",
        body: "Les équipes absorbent la qualification, le matching et la chasse aux pièces, pendant que le conseil qui convertit attend. L’IA générique répond ; elle ne prépare pas un dossier opposable sous vos règles.",
        list: [
          "Qualification leads manuelle et inégale",
          "Matching biens / critères dispersé",
          "Documents et relances chronophages",
          "Support locataire saturé",
          "Reporting opérationnel tardif",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / FORCE DE TRAVAIL",
        title: "Agents du pack immobilier",
        body: "Des exécutants spécialisés qui préparent ; le conseiller tranche. Chaque agent a un déclencheur, un livrable et un stop humain.",
        blocks: [
          { title: "Lead immo qualifié", desc: "Scorer et préparer le premier contact." },
          { title: "Bien proposé, conseiller décide", desc: "Short-list, envoi validé par l’humain." },
          { title: "Pièces du dossier réunies", desc: "Collecte, classement, relances tracées." },
          { title: "Locataire orienté, exception humaine", desc: "L1 process, litige au gestionnaire." },
        ],
      },
      {
        id: "governance",
        eyebrow: "03 / GOUVERNANCE",
        title: "Le conseiller décide. L’agent prépare.",
        list: [
          "Mandat, visite et négociation restent humains.",
          "Aucune sélection envoyée au client sans validation.",
          "Complétude juridique et signature : l’étude / le conseiller.",
          "Chaque action est journalisée dans Remparia OS.",
        ],
      },
      {
        id: "signal",
        eyebrow: "04 / TRAJECTOIRE SIGNAL",
        title: "Du cadrage à la production supervisée",
        body: "On ne déploie pas un pack en boîte noire : on cartographie d’abord où l’IA compte vraiment.",
        flow: ["SIGNAL", "Studio", "OS + gouvernance", "AgentOps"],
        note: "Les connecteurs exacts (CRM, portails, GED) sont cadrés en SIGNAL. Pas de fake case.",
      },
      {
        id: "secteurs",
        eyebrow: "05 / MÉTIERS",
        title: "Pages métiers liées",
        links: [
          { label: "Agence immobilière", href: "/secteurs/agence-immobiliere" },
          { label: "Étude notariale", href: "/secteurs/etude-notariale" },
          { label: "Tous les métiers", href: "/secteurs" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / REAL ESTATE",
    title: "Expert time stays ",
    titleAccent: "on the decision.",
    sub: "Qualification, matching, files and follow-ups under governance, without handing mandate, viewing or negotiation to the machine.",
    ctaPrimary: "Start real-estate SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See the agency vertical",
    ctaSecondaryHref: "/secteurs/agence-immobiliere",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / THE GAP",
        title: "Where time disappears",
        body: "Teams absorb qualification, matching and document chase, while converting advice waits. Generic AI answers; it does not prepare an auditable file under your rules.",
        list: [
          "Manual, uneven lead qualification",
          "Scattered property matching",
          "Document chase-ups",
          "Overloaded tenant support",
          "Late operational reporting",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Real-estate pack agents",
        body: "Specialized executors that prepare; the advisor decides. Each agent has a trigger, a deliverable and a human stop.",
        blocks: [
          { title: "Qualified property lead", desc: "Score and prepare first contact." },
          { title: "Property proposed, advisor decides", desc: "Short-list, human-approved send." },
          { title: "Transaction documents gathered", desc: "Collect, file, logged chase-ups." },
          { title: "Tenant routed, exception human", desc: "L1 process, disputes to the manager." },
        ],
      },
      {
        id: "governance",
        eyebrow: "03 / GOVERNANCE",
        title: "The advisor decides. The agent prepares.",
        list: [
          "Mandate, viewing and negotiation stay human.",
          "No selection is sent to the client without validation.",
          "Legal completeness and signature: the office / the advisor.",
          "Every action is logged in Remparia OS.",
        ],
      },
      {
        id: "signal",
        eyebrow: "04 / SIGNAL PATH",
        title: "From framing to supervised production",
        body: "We do not ship a black-box pack: we map where AI actually matters first.",
        flow: ["SIGNAL", "Studio", "OS + governance", "AgentOps"],
        note: "Exact connectors (CRM, portals, DMS) are scoped in SIGNAL. No fake case studies.",
      },
      {
        id: "secteurs",
        eyebrow: "05 / INDUSTRIES",
        title: "Related industry pages",
        links: [
          { label: "Real-estate agency", href: "/secteurs/agence-immobiliere" },
          { label: "Notarial office", href: "/secteurs/etude-notariale" },
          { label: "All industries", href: "/secteurs" },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const legal = {
  fr: {
    eyebrow: "SOLUTIONS / JURIDIQUE",
    title: "La machine prépare. ",
    titleAccent: "L’avocat tranche.",
    sub: "Revue documentaire, préparation de dossiers et contrôles de conformité sous gouvernance, sans avis automatisé ni signature machine.",
    ctaPrimary: "Lancer SIGNAL juridique",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir le métier avocat",
    ctaSecondaryHref: "/secteurs/cabinet-avocat",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / CONSTAT",
        title: "Là où le temps disparaît",
        body: "Les dossiers saturent avant l’audience. La revue, la collecte et les contrôles absorbent l’expertise, sans que la machine décide à votre place.",
        list: [
          "Revue documentaire manuelle",
          "Préparation de dossiers dispersée",
          "Contrôles de conformité chronophages",
          "Veille et synthèse tardives",
          "Intake client non qualifié",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / FORCE DE TRAVAIL",
        title: "Agents du pack juridique",
        body: "Des agents qui trient, assemblent et signalent. Jamais qui conseillent ou engagent.",
        blocks: [
          { title: "Dossier lu, écarts signalés", desc: "Trier, synthétiser, marquer les manques." },
          { title: "Dossier prêt pour l’audience", desc: "Assembler la liasse et les échéances." },
          { title: "Contrôle cadré, doute escaladé", desc: "Check-list conformité, piste d’audit." },
          { title: "Demande client orientée", desc: "Intake qualifié, sans conseil au prospect." },
        ],
      },
      {
        id: "governance",
        eyebrow: "03 / GOUVERNANCE",
        title: "L’avocat décide. L’agent prépare.",
        list: [
          "L’agent ne rend pas d’avis et ne signe rien.",
          "Chaque écart de conformité remonte.",
          "Les sources sont citées, les accès journalisés.",
          "Politiques ALLOW / REVIEW / BLOCK dans Remparia OS.",
        ],
      },
      {
        id: "signal",
        eyebrow: "04 / TRAJECTOIRE SIGNAL",
        title: "Du cadrage à la production supervisée",
        body: "Prioriser les processus à fort impact avant de construire, avec données autorisées et stops humains définis.",
        flow: ["SIGNAL", "Studio", "OS + gouvernance", "AgentOps"],
        note: "Les connecteurs exacts (CRM, GED, calendrier) sont cadrés en SIGNAL. Pas de fake case.",
      },
      {
        id: "secteurs",
        eyebrow: "05 / MÉTIERS",
        title: "Pages métiers liées",
        links: [
          { label: "Cabinet d’avocat", href: "/secteurs/cabinet-avocat" },
          { label: "Étude notariale", href: "/secteurs/etude-notariale" },
          { label: "Tous les métiers", href: "/secteurs" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / LEGAL",
    title: "The machine prepares. ",
    titleAccent: "Counsel decides.",
    sub: "Document review, case prep and compliance checks under governance, with no automated advice or machine signature.",
    ctaPrimary: "Start legal SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See the law-firm vertical",
    ctaSecondaryHref: "/secteurs/cabinet-avocat",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / THE GAP",
        title: "Where time disappears",
        body: "Files saturate before hearing. Review, collection and checks absorb expertise, without the machine deciding in your place.",
        list: [
          "Manual document review",
          "Scattered case preparation",
          "Time-consuming compliance checks",
          "Late monitoring and synthesis",
          "Unqualified client intake",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Legal pack agents",
        body: "Agents that sort, assemble and flag. Never advise or commit.",
        blocks: [
          { title: "File read, gaps flagged", desc: "Sort, synthesize, mark missing items." },
          { title: "File ready for hearing", desc: "Assemble the pack and deadlines." },
          { title: "Framed check, doubt escalated", desc: "Compliance checklist, audit trail." },
          { title: "Client request routed", desc: "Qualified intake, no advice to the prospect." },
        ],
      },
      {
        id: "governance",
        eyebrow: "03 / GOVERNANCE",
        title: "The lawyer decides. The agent prepares.",
        list: [
          "The agent does not issue an opinion or sign.",
          "Every compliance gap is escalated.",
          "Sources are cited, access is logged.",
          "ALLOW / REVIEW / BLOCK policies in Remparia OS.",
        ],
      },
      {
        id: "signal",
        eyebrow: "04 / SIGNAL PATH",
        title: "From framing to supervised production",
        body: "Prioritize high-impact workflows before building, with allowed data and human stops defined.",
        flow: ["SIGNAL", "Studio", "OS + governance", "AgentOps"],
        note: "Exact connectors (CRM, DMS, calendar) are scoped in SIGNAL. No fake case studies.",
      },
      {
        id: "secteurs",
        eyebrow: "05 / INDUSTRIES",
        title: "Related industry pages",
        links: [
          { label: "Law firm", href: "/secteurs/cabinet-avocat" },
          { label: "Notarial office", href: "/secteurs/etude-notariale" },
          { label: "All industries", href: "/secteurs" },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const finance = {
  fr: {
    eyebrow: "SOLUTIONS / FINANCE",
    title: "Contrôler sans ",
    titleAccent: "diluer la décision.",
    sub: "KYC assisté, reporting et préparation risque, avec pistes d’audit et décisions humaines sur les seuils.",
    ctaPrimary: "Lancer SIGNAL finance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir finance & assurance",
    ctaSecondaryHref: "/secteurs/finance-assurance",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / CONSTAT",
        title: "Là où le temps disparaît",
        body: "La collecte, le reporting et la préparation risque saturent les analystes, pendant que l’entrée en relation et les seuils restent des décisions humaines non négociables.",
        list: [
          "Collecte KYC répétitive",
          "Reporting opérationnel tardif",
          "Préparation risque fragmentée",
          "Rapprochements et anomalies en retard",
          "Pistes d’audit incomplètes",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / FORCE DE TRAVAIL",
        title: "Agents du pack finance",
        body: "Des agents qui préparent le dossier et journalisent. Jamais qui acceptent un client ou envoient un reporting.",
        blocks: [
          { title: "KYC prêt pour décision", desc: "Collecte, contrôles, piste d’audit, sans acceptation." },
          { title: "Reporting prêt pour revue", desc: "Brouillon sourcé, non envoyé." },
          { title: "Alerte préparée, décision humaine", desc: "Dossier d’alerte pour l’analyste." },
          { title: "Écarts visibles avant clôture", desc: "Rapprochements et anomalies priorisés." },
        ],
      },
      {
        id: "governance",
        eyebrow: "03 / GOUVERNANCE",
        title: "Le métier tranche. L’agent journalise.",
        list: [
          "Aucune entrée en relation sans humain.",
          "Aucun reporting envoyé sans revue.",
          "Les seuils de risque restent des décisions humaines.",
          "Traçabilité opposable dans Remparia OS.",
        ],
      },
      {
        id: "signal",
        eyebrow: "04 / TRAJECTOIRE SIGNAL",
        title: "Du cadrage à la production supervisée",
        body: "Cartographier impact, sensibilité et faisabilité avant le build, puis brancher le SI réel.",
        flow: ["SIGNAL", "Studio", "OS + gouvernance", "AgentOps"],
        note: "Les connecteurs exacts (CRM, core banking, outils KYC) sont cadrés en SIGNAL. Pas de fake case.",
      },
      {
        id: "secteurs",
        eyebrow: "05 / MÉTIERS",
        title: "Pages métiers liées",
        links: [
          { label: "Finance & assurance", href: "/secteurs/finance-assurance" },
          { label: "Courtage & assurance", href: "/secteurs/courtier-assurance" },
          { label: "Expertise comptable", href: "/secteurs/expertise-comptable" },
          { label: "Tous les métiers", href: "/secteurs" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / FINANCE",
    title: "Control without ",
    titleAccent: "diluting the decision.",
    sub: "Assisted KYC, reporting and risk prep, with audit trails and human decisions on thresholds.",
    ctaPrimary: "Start finance SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See finance & insurance",
    ctaSecondaryHref: "/secteurs/finance-assurance",
    sections: [
      {
        id: "constat",
        eyebrow: "01 / THE GAP",
        title: "Where time disappears",
        body: "Collection, reporting and risk prep saturate analysts, while onboarding and thresholds stay non-negotiable human decisions.",
        list: [
          "Repetitive KYC collection",
          "Late operational reporting",
          "Fragmented risk preparation",
          "Late reconciliations and anomalies",
          "Incomplete audit trails",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AI WORKFORCE",
        title: "Finance pack agents",
        body: "Agents that prepare the file and log. Never accept a client or send a report.",
        blocks: [
          { title: "KYC ready for a decision", desc: "Collection, checks, audit trail, no acceptance." },
          { title: "Report ready for review", desc: "Sourced draft, not sent." },
          { title: "Alert prepared, human decision", desc: "Alert file for the analyst." },
          { title: "Gaps visible before close", desc: "Reconciliations and ranked anomalies." },
        ],
      },
      {
        id: "governance",
        eyebrow: "03 / GOVERNANCE",
        title: "The business decides. The agent logs.",
        list: [
          "No onboarding without a human.",
          "No report sent without review.",
          "Risk thresholds stay human decisions.",
          "Auditable trail in Remparia OS.",
        ],
      },
      {
        id: "signal",
        eyebrow: "04 / SIGNAL PATH",
        title: "From framing to supervised production",
        body: "Map impact, sensitivity and feasibility before the build, then wire the real systems.",
        flow: ["SIGNAL", "Studio", "OS + governance", "AgentOps"],
        note: "Exact connectors (CRM, core banking, KYC tools) are scoped in SIGNAL. No fake case studies.",
      },
      {
        id: "secteurs",
        eyebrow: "05 / INDUSTRIES",
        title: "Related industry pages",
        links: [
          { label: "Finance & insurance", href: "/secteurs/finance-assurance" },
          { label: "Insurance brokerage", href: "/secteurs/courtier-assurance" },
          { label: "Accounting firm", href: "/secteurs/expertise-comptable" },
          { label: "All industries", href: "/secteurs" },
        ],
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const commerce = {
  fr: {
    eyebrow: "SOLUTIONS / COMMERCE",
    title: "Votre boutique devient ",
    titleAccent: "un vendeur.",
    sub: "Un agent qui conseille vos clients, compose le panier et suit la commande, sans jamais toucher au paiement. Sécurité dans le code, formation incluse, exploitation continue.",
    ctaPrimary: "Lancer SIGNAL commerce",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir le vertical e-commerce",
    ctaSecondaryHref: "/secteurs/e-commerce",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTIONS",
        title: "Là où le commerce agentique bloque encore",
        list: [
          "Assistants qui répondent mais ne vendent pas",
          "Catalogue vivant hors de la conversation",
          "SAV commande / retours qui sature le L1",
          "Peur prix / paiement / RGPD sans garde-fous",
          "Visibilité agents tiers vs relation propriétaire",
          "Pas de formation pour piloter l’agent après go-live",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / AGENT COMMERCE",
        title: "Shopping côté client. Marchand côté équipe.",
        body: "Un agent shopping poursuit l’objectif d’achat. Un agent marchand prépare prix, stocks et campagnes : chaque écriture attend votre validation.",
        blocks: [
          { title: "Recherche multi-contraintes", desc: "Intention réelle → catalogue live → cartes marque." },
          { title: "Panier composé, checkout humain", desc: "Handoff propre, aucun outil de paiement." },
          { title: "SAV dans la conversation", desc: "Commande, retours, politiques mot pour mot." },
          { title: "Agent marchand", desc: "Digest, alertes, promos en file d’approbation." },
          { title: "Deux chantiers", desc: "Agent propriétaire + visibilité agents tiers." },
          { title: "Formation & operate", desc: "Décideurs, métiers, technique, puis run continu." },
        ],
      },
      {
        id: "hitl",
        eyebrow: "03 / CONTRÔLE HUMAIN",
        title: "Le commercial décide. L’agent exécute.",
        list: [
          "Paiement et checkout : humains.",
          "Prix hors grille, discount et promo : file d’approbation.",
          "Publication catalogue et claims : merchandising.",
          "Chaque action est journalisée dans Remparia OS.",
        ],
      },
      {
        id: "integrations",
        eyebrow: "04 / INTÉGRATIONS",
        title: "Connecteurs types",
        flow: ["Shopify", "PrestaShop", "PIM", "OMS", "Helpdesk", "CRM", "Emailing"],
        note: "Les connecteurs exacts sont cadrés en SIGNAL. Le réseau se branche, on n’invente pas la stack.",
      },
    ],
  },
  en: {
    eyebrow: "SOLUTIONS / COMMERCE",
    title: "Your store becomes ",
    titleAccent: "a seller.",
    sub: "An agent that advises customers, builds the cart and tracks the order, without ever touching payment. Security in code, training included, continuous operations.",
    ctaPrimary: "Start commerce SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See the e-commerce vertical",
    ctaSecondaryHref: "/secteurs/e-commerce",
    sections: [
      {
        id: "pain",
        eyebrow: "01 / FRICTION",
        title: "Where agentic commerce still stalls",
        list: [
          "Assistants that answer but do not sell",
          "Living catalog outside the conversation",
          "Order / returns care flooding L1",
          "Price / payment / GDPR fear without guards",
          "Third-party visibility vs owned relationship",
          "No training to operate the agent after go-live",
        ],
      },
      {
        id: "workforce",
        eyebrow: "02 / COMMERCE AGENT",
        title: "Shopping for customers. Merchant for your team.",
        body: "A shopping agent pursues purchase. A merchant agent prepares prices, stock and campaigns: every write waits for your validation.",
        blocks: [
          { title: "Multi-constraint search", desc: "Real intent → live catalog → branded cards." },
          { title: "Built cart, human checkout", desc: "Clean handoff, no payment tool." },
          { title: "Care in the conversation", desc: "Order, returns, policies verbatim." },
          { title: "Merchant agent", desc: "Digest, alerts, promos in approval queue." },
          { title: "Two tracks", desc: "Owned agent + third-party visibility." },
          { title: "Training & operate", desc: "Leaders, ops, engineering, then continuous run." },
        ],
      },
      {
        id: "hitl",
        eyebrow: "03 / HUMAN CONTROL",
        title: "Sales decides. The agent executes.",
        list: [
          "Payment and checkout: human.",
          "Off-grid pricing, discounts and promos: approval queue.",
          "Catalog publish and claims: merchandising.",
          "Every action is logged in Remparia OS.",
        ],
      },
      {
        id: "integrations",
        eyebrow: "04 / INTEGRATIONS",
        title: "Typical connectors",
        flow: ["Shopify", "PrestaShop", "PIM", "OMS", "Helpdesk", "CRM", "Email"],
        note: "Exact connectors are scoped in SIGNAL. The network is wired, the stack is not invented.",
      },
    ],
  },
} as const satisfies Record<Lang, PremiumPageCopy>;

const about = {
  fr: {
    eyebrow: "COMPANY / ABOUT",
    title: "Une plateforme + une méthode + ",
    titleAccent: "une capacité d’exploitation.",
    sub: "Remparia convertit l’IA en capacité opérationnelle gouvernée : pas des chatbots, pas de régie ouverte.",
    ctaPrimary: "Book a SIGNAL Session",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Nous contacter",
    ctaSecondaryHref: "/contact",
    sections: [
      {
        id: "position",
        eyebrow: "01 / POSITION",
        title: "Ce que Remparia est, et n’est pas",
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
    sub: "Remparia turns AI into governed operational capacity: not chatbots, not open-ended billing.",
    ctaPrimary: "Book a SIGNAL Session",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Contact us",
    ctaSecondaryHref: "/contact",
    sections: [
      {
        id: "position",
        eyebrow: "01 / POSITION",
        title: "What Remparia is, and is not",
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
    sub: "Avant de vous engager : cadrer, diagnostiquer, ou déployer le premier agent. Forfaits cadrés.",
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
    sub: "Before you commit: frame, diagnose, or deploy the first agent. Framed fees.",
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
    sub: "Métiers à responsabilité, données sensibles, décisions humaines à préserver. Pas le volume low-stakes.",
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
    sub: "Accountability professions, sensitive data, human decisions to preserve. Not low-stakes volume.",
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
          { title: "Qualification & triage", desc: "Trier, scorer, router. Décision humaine sur les seuils." },
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
          { title: "Qualification & triage", desc: "Sort, score, route. Human decision on thresholds." },
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
  commerce,
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
