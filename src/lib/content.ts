import { EXTRA_SECTEUR_ITEMS } from "./secteurs-extra";

export type Lang = "fr" | "en";

export const NAV = {
  fr: {
    services: "Services",
    methode: "Méthode",
    secteurs: "Secteurs",
    realisations: "Réalisations",
    aPropos: "À propos",
    ressources: "Ressources",
    carrieres: "Carrières",
    hiring: "We're hiring",
    contact: "Contact",
    demo: "Let's connect",
    demoShort: "Connect →",
    navLabel: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    servicesMenu: "Sous-menu services",
    switchLang: "Passer en anglais",
    skipToContent: "Aller au contenu",
  },
  en: {
    services: "Services",
    methode: "Method",
    secteurs: "Industries",
    realisations: "Our Work",
    aPropos: "About",
    ressources: "Resources",
    carrieres: "Careers",
    hiring: "We're hiring",
    contact: "Contact",
    demo: "Let's connect",
    demoShort: "Connect →",
    navLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    servicesMenu: "Services submenu",
    switchLang: "Switch to French",
    skipToContent: "Skip to content",
  },
} as const;

export const FOOTER = {
  fr: {
    tagline: "Collectif IA souveraine · France",
    servicesTitle: "Services",
    secteursTitle: "Solutions par secteur",
    secteursAll: "Voir plus",
    ressourcesTitle: "Ressources",
    contactTitle: "Contact",
    socialTitle: "Réseaux",
    legalTitle: "Légal",
    mentions: "Mentions légales",
    privacy: "Confidentialité",
    cookies: "Cookies",
    cookiePrefs: "Gérer les cookies",
    rights: "© 2026 REMPARIA. Tous droits réservés.",
    logoAlt: "Remparia — Agents IA métier",
  },
  en: {
    tagline: "Sovereign AI collective · France",
    servicesTitle: "Services",
    secteursTitle: "Solutions by industry",
    secteursAll: "See more",
    ressourcesTitle: "Resources",
    contactTitle: "Contact",
    socialTitle: "Social",
    legalTitle: "Legal",
    mentions: "Legal notice",
    privacy: "Privacy",
    cookies: "Cookies",
    cookiePrefs: "Cookie settings",
    rights: "© 2026 REMPARIA. All rights reserved.",
    logoAlt: "Remparia — Business AI agents",
  },
} as const;

/** Profils sociaux Remparia — URLs publiques */
export const SOCIAL_LINKS = [
  { id: "x", label: "X", href: "https://x.com/remparia" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@remparia" },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@remparia",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/remparia",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/remparia",
  },
] as const;

export const HOME = {
  fr: {
    eyebrow: "DU POC À L'AGENT EN PRODUCTION",
    h1a: "Agents.",
    h1b: "Production.",
    protocolAria: "Protocole SIGNAL",
    introSkip: "Passer",
    introLine: "rempart + ia",
    introNoise: "Bruit",
    introHint: "extraction du signal",
    sub: "Entre le POC qui impressionne et l'agent qui travaille tous les jours : le fossé de l'intégration métier et de la conformité. Nous le comblons.",
    cta: "Let's connect",
    constat: "LE CONSTAT",
    constatH: "Tout le monde a testé l'IA. Peu en ont tiré des gains durables.",
    constatP:
      "Les démos impressionnent, les pilotes s'enlisent. Le vrai enjeu n'est pas le modèle — c'est l'intégration dans vos process réels, sous contrainte de conformité. C'est là que la valeur se crée, ou se perd.",
    conviction: "NOTRE CONVICTION",
    convH1: "L'humain décide,",
    convH2: "l'agent exécute.",
    convP:
      "L'IA n'est pas là pour remplacer. Elle est là pour vous libérer du temps sur ce qui compte. Vos équipes gardent la main, la décision et la responsabilité — les agents portent la charge répétitive.",
    method: "LA MÉTHODE",
    methodH: "Le protocole SIGNAL",
    methodCta: "Explorer SIGNAL",
    position: "LE POSITIONNEMENT",
    positionH:
      "Trois façons de faire de l'IA en France. Une seule va jusqu'au bout.",
    servicesEyebrow: "SERVICES",
    servicesH: "Mettre l'IA au travail dans votre métier.",
    servicesCta: "Voir tous les services",
    ctaTag: "PRÊT À COMMENCER",
    ctaH: "Passons du bruit au signal.",
    ctaP:
      "On sait ce qui marche en IA — et ce qui n'aboutit pas. Parlons de ce qui est possible chez vous.",
  },
  en: {
    eyebrow: "FROM POC TO THE AGENT IN PRODUCTION",
    h1a: "Agents.",
    h1b: "Production.",
    protocolAria: "SIGNAL protocol",
    introSkip: "Skip",
    introLine: "rampart + ai",
    introNoise: "Noise",
    introHint: "extracting signal",
    sub: "Between the POC that dazzles and the agent that works every day lies a gap: business integration and compliance. We close it.",
    cta: "Let's connect",
    constat: "THE REALITY",
    constatH: "Everyone tried AI. Few turned it into lasting gains.",
    constatP:
      "Demos impress, pilots stall. The real challenge isn't the model — it's integration into your actual workflows under compliance constraints. That's where value is made, or lost.",
    conviction: "OUR CONVICTION",
    convH1: "Humans decide,",
    convH2: "agents execute.",
    convP:
      "AI isn't here to replace. It's here to free up time for what matters. Your teams keep control, decisions and accountability — agents carry the repetitive load.",
    method: "THE METHOD",
    methodH: "The SIGNAL protocol",
    methodCta: "Explore SIGNAL",
    position: "POSITIONING",
    positionH: "Three ways to do AI in France. Only one goes all the way.",
    servicesEyebrow: "SERVICES",
    servicesH: "Put AI to work in your business.",
    servicesCta: "See all services",
    ctaTag: "READY TO START",
    ctaH: "From noise to signal.",
    ctaP:
      "We know what works in AI — and what doesn't. Let's talk about what's possible for you.",
  },
} as const;

export const PILLARS = {
  fr: [
    { tag: "AGENTS IA MÉTIER", title: "Conçus pour vos process réels" },
    { tag: "DONNÉES SOUS CONTRÔLE", title: "Hébergement FR ou on-prem" },
    { tag: "AGNOSTIQUE LLM", title: "Le meilleur modèle par tâche" },
  ],
  en: [
    { tag: "BUSINESS AI AGENTS", title: "Built for your real workflows" },
    { tag: "DATA UNDER CONTROL", title: "Hosted in France or on-prem" },
    { tag: "LLM-AGNOSTIC", title: "The best model per task" },
  ],
} as const;

export const SERVICES = {
  fr: {
    eyebrow: "CE QUE NOUS FAISONS",
    title: "Services",
    sub: "Mettre l'IA au travail dans votre métier — de la stratégie à la production.",
    overview: "Vue d'ensemble",
    items: [
      {
        slug: "strategie-ia",
        tag: "01",
        title: "Stratégie & feuille de route IA",
        desc: "Prioriser les cas d'usage à ROI réel, définir la gouvernance et tracer le chemin vers la production.",
        points: [
          "Stratégie de transformation IA",
          "Ateliers ROI & roadmap",
          "Stratégie de déploiement d'agents",
          "Gouvernance & conformité",
        ],
      },
      {
        slug: "agents-metier",
        tag: "02",
        title: "Agents IA métier",
        desc: "Des agents conçus pour vos process réels — intégrés à vos outils, pas des démos hors-sol.",
        points: [
          "Automatisation agentique",
          "Intégration outils & données",
          "Human-in-the-loop",
          "Mesure des gains",
        ],
      },
      {
        slug: "infra-souveraine",
        tag: "03",
        title: "Infra souveraine & données",
        desc: "Vos données restent en France. Traçabilité, conformité et préparation des données pour l'IA.",
        points: [
          "Hébergement souverain",
          "Préparation & gouvernance des données",
          "RAG sur données propriétaires",
          "Observabilité & audit",
        ],
      },
      {
        slug: "equipes-embarquees",
        tag: "04",
        title: "Équipes IA embarquées",
        desc: "Des profils intégrés à vos équipes pour accélérer la roadmap sans courbe d'apprentissage externe.",
        points: [
          "Ingénieurs déployés",
          "Pods agents dédiés",
          "Transfert de compétences",
          "Industrialisation continue",
        ],
      },
    ],
  },
  en: {
    eyebrow: "WHAT WE DO",
    title: "Services",
    sub: "Put AI to work in your business — from strategy to production.",
    overview: "Overview",
    items: [
      {
        slug: "strategie-ia",
        tag: "01",
        title: "AI strategy & roadmap",
        desc: "Prioritize real-ROI use cases, define governance, and map the path to production.",
        points: [
          "AI transformation strategy",
          "ROI & roadmap workshops",
          "Agent deployment strategy",
          "Governance & compliance",
        ],
      },
      {
        slug: "agents-metier",
        tag: "02",
        title: "Business AI agents",
        desc: "Agents built for your real workflows — plugged into your tools, not disconnected demos.",
        points: [
          "Agentic automation",
          "Tool & data integration",
          "Human-in-the-loop",
          "Outcome measurement",
        ],
      },
      {
        slug: "infra-souveraine",
        tag: "03",
        title: "Sovereign infra & data",
        desc: "Your data stays in France. Traceability, compliance, and data readiness for AI.",
        points: [
          "Sovereign hosting",
          "Data readiness & governance",
          "RAG on proprietary data",
          "Observability & audit",
        ],
      },
      {
        slug: "equipes-embarquees",
        tag: "04",
        title: "Embedded AI teams",
        desc: "People embedded in your teams to accelerate the roadmap without an external learning curve.",
        points: [
          "Forward-deployed engineers",
          "Dedicated agent pods",
          "Skills transfer",
          "Continuous industrialization",
        ],
      },
    ],
  },
} as const;

export const METHODE = {
  fr: {
    eyebrow: "NOTRE APPROCHE",
    title: "Le protocole SIGNAL",
    sub: "Un chemin répétable de l'idée à la production — comme une méthodologie propriétaire, adaptée à l'IA souveraine et aux métiers réglementés.",
    steps: [
      {
        letter: "S",
        title: "Scoper",
        desc: "Cibler les cas d'usage à ROI réel, pas les gadgets.",
      },
      {
        letter: "I",
        title: "Intégrer",
        desc: "Brancher les agents sur vos outils et données existants.",
      },
      {
        letter: "G",
        title: "Garantir",
        desc: "Conformité, traçabilité, souveraineté par défaut.",
      },
      {
        letter: "N",
        title: "Normaliser",
        desc: "Industrialiser du POC jusqu'à la production quotidienne.",
      },
      {
        letter: "A",
        title: "Augmenter",
        desc: "L'humain garde la main ; l'agent porte la charge.",
      },
      {
        letter: "L",
        title: "Livrer",
        desc: "Mesurer les gains, itérer, prouver la valeur.",
      },
    ],
    acceleratorsTitle: "Accélérateurs",
    acceleratorsSub: "Pour aller plus vite vers le ROI.",
    accelerators: [
      {
        title: "Diagnostic SIGNAL",
        desc: "Identifier les cas d'usage à fort impact et les freins conformité / data.",
      },
      {
        title: "Prototype guidé",
        desc: "Valider un cas d'usage à faible risque avant d'industrialiser.",
      },
      {
        title: "RAG souverain",
        desc: "Connecter vos données propriétaires à l'IA — différenciation réelle.",
      },
      {
        title: "Passage en production",
        desc: "De la démo au quotidien : monitoring, gouvernance, itération.",
      },
    ],
  },
  en: {
    eyebrow: "OUR APPROACH",
    title: "The SIGNAL protocol",
    sub: "A repeatable path from idea to production — a proprietary methodology for sovereign AI and regulated workflows.",
    steps: [
      {
        letter: "S",
        title: "Scope",
        desc: "Target real-ROI use cases, not gadgets.",
      },
      {
        letter: "I",
        title: "Integrate",
        desc: "Plug agents into your existing tools and data.",
      },
      {
        letter: "G",
        title: "Guarantee",
        desc: "Compliance, traceability, sovereignty by default.",
      },
      {
        letter: "N",
        title: "Normalize",
        desc: "Industrialize from POC to daily production.",
      },
      {
        letter: "A",
        title: "Augment",
        desc: "Humans keep control; agents carry the load.",
      },
      {
        letter: "L",
        title: "Land",
        desc: "Measure gains, iterate, prove the value.",
      },
    ],
    acceleratorsTitle: "Accelerators",
    acceleratorsSub: "Get to ROI faster.",
    accelerators: [
      {
        title: "SIGNAL diagnostic",
        desc: "Find high-impact use cases and compliance / data blockers.",
      },
      {
        title: "Guided prototype",
        desc: "Validate a use case with low risk before industrializing.",
      },
      {
        title: "Sovereign RAG",
        desc: "Connect proprietary data to AI — real differentiation.",
      },
      {
        title: "Production launch",
        desc: "From demo to daily ops: monitoring, governance, iteration.",
      },
    ],
  },
} as const;

export const SECTEURS = {
  fr: {
    eyebrow: "SECTEURS",
    title: "Une approche IA adaptée à votre métier",
    sub: "Remparia comprend les contraintes de votre secteur. Choisissez le vôtre pour découvrir douleurs, livrables et scénarios d'accompagnement.",
    overview: "Tous les secteurs",
    discover: "Découvrir →",
    filterLabel: "Filtrer",
    searchPlaceholder: "Rechercher un secteur…",
    results: "secteurs",
    hubMoreTitle: "Pour aller plus loin",
    hubLinks: [
      { label: "Le protocole SIGNAL", href: "/methode" },
      { label: "Nos services", href: "/services" },
      { label: "Diagnostic SIGNAL", href: "/contact" },
    ],
    labels: {
      signals: "Ce qui guide nos missions",
      pains: "Le problème",
      painsH: "Les douleurs qu'on connaît trop bien",
      deliver: "La solution",
      deliverH: "Ce que Remparia livre pour vous",
      scenarios: "En pratique",
      scenariosH: "Comment Remparia intervient, concrètement",
      services: "Services liés",
      servicesH: "Missions utiles pour ce secteur",
      faq: "FAQ",
      faqH: "Questions fréquentes",
      more: "Autres secteurs",
      moreH: "Explorer d'autres industries",
      cta: "Let's connect",
      need: "Besoin",
      remparia: "Remparia",
    },
    items: [
      {
        slug: "finance-assurance",
        title: "Finance & assurance",
        desc: "Agents pour back-office, conformité, analyse documentaire — données sous contrôle.",
      },
      {
        slug: "sante",
        title: "Santé & professions réglementées",
        desc: "Automatisation respectueuse du secret professionnel et des cadres légaux.",
      },
      {
        slug: "industrie",
        title: "Industrie & opérations",
        desc: "Agents sur la maintenance, la qualité, la supply — branchés sur vos systèmes.",
      },
      {
        slug: "services-conseil",
        title: "Services & conseil",
        desc: "Accélérer la production de livrables sans diluer l'expertise humaine.",
      },
      {
        slug: "tech-produit",
        title: "Tech & produit",
        desc: "Industrialiser l'IA dans vos produits et vos process internes.",
      },
      {
        slug: "secteur-public",
        title: "Secteur public",
        desc: "Souveraineté, traçabilité et gains opérationnels pour les missions d'intérêt général.",
      },
      ...EXTRA_SECTEUR_ITEMS.fr,
    ],
  },
  en: {
    eyebrow: "INDUSTRIES",
    title: "An AI approach shaped to your industry",
    sub: "Remparia understands your sector constraints. Pick yours to explore pains, deliverables and engagement scenarios.",
    overview: "All industries",
    discover: "Discover →",
    filterLabel: "Filter",
    searchPlaceholder: "Search an industry…",
    results: "industries",
    hubMoreTitle: "Go further",
    hubLinks: [
      { label: "The SIGNAL protocol", href: "/methode" },
      { label: "Our services", href: "/services" },
      { label: "SIGNAL diagnostic", href: "/contact" },
    ],
    labels: {
      signals: "What guides our engagements",
      pains: "The problem",
      painsH: "Pains we know too well",
      deliver: "The solution",
      deliverH: "What Remparia delivers for you",
      scenarios: "In practice",
      scenariosH: "How Remparia engages, concretely",
      services: "Related services",
      servicesH: "Missions that fit this industry",
      faq: "FAQ",
      faqH: "Frequently asked questions",
      more: "Other industries",
      moreH: "Explore other sectors",
      cta: "Let's connect",
      need: "Need",
      remparia: "Remparia",
    },
    items: [
      {
        slug: "finance-assurance",
        title: "Finance & insurance",
        desc: "Agents for back-office, compliance, document analysis — data under control.",
      },
      {
        slug: "sante",
        title: "Healthcare & regulated professions",
        desc: "Automation that respects professional secrecy and legal frameworks.",
      },
      {
        slug: "industrie",
        title: "Industry & operations",
        desc: "Agents for maintenance, quality, supply — plugged into your systems.",
      },
      {
        slug: "services-conseil",
        title: "Services & consulting",
        desc: "Accelerate deliverables without diluting human expertise.",
      },
      {
        slug: "tech-produit",
        title: "Tech & product",
        desc: "Industrialize AI in your products and internal processes.",
      },
      {
        slug: "secteur-public",
        title: "Public sector",
        desc: "Sovereignty, traceability and operational gains for public-interest missions.",
      },
      ...EXTRA_SECTEUR_ITEMS.en,
    ],
  },
} as const;

export const SERVICE_SLUGS = SERVICES.fr.items.map((i) => i.slug);
export const SECTEUR_SLUGS = SECTEURS.fr.items.map((i) => i.slug);

export const SERVICE_IMAGES: Record<string, string> = {
  "strategie-ia": "/services/strategie-ia.png",
  "agents-metier": "/services/agents-metier.png",
  "infra-souveraine": "/services/infra-souveraine.png",
  "equipes-embarquees": "/services/equipes-embarquees.png",
};

export function getServiceImage(slug: string) {
  return SERVICE_IMAGES[slug] ?? "/services/strategie-ia.png";
}

export function getService(slug: string, lang: Lang = "fr") {
  return SERVICES[lang].items.find((i) => i.slug === slug) ?? null;
}

export function getSecteur(slug: string, lang: Lang = "fr") {
  return SECTEURS[lang].items.find((i) => i.slug === slug) ?? null;
}

export { getSecteurDetail } from "./secteurs-details";
export type { SecteurDetail } from "./secteurs-details";
export {
  getSecteurImage,
  getSecteurMeta,
  SECTEUR_CATEGORY_LABELS,
  SECTEUR_META,
  type SecteurCategory,
} from "./secteurs-meta";

export const REALISATIONS = {
  fr: {
    eyebrow: "NOTRE TRAVAIL",
    title: "Comment nos clients passent de la promesse à la valeur",
    sub: "Des résultats mesurables — pas des démos isolées. Cas anonymisés, méthode SIGNAL.",
    proofsTitle: "Ce que nous garantissons sur chaque mission",
    proofs: [
      "Données hébergées / traitées en France quand le cadre l’exige",
      "Human-in-the-loop sur les sorties sensibles",
      "Mesure des gains avant de scaler",
      "Traçabilité et gouvernance dès le cadrage",
    ],
    items: [
      {
        tag: "CAS 01",
        title: "Du POC bloqué à l'agent en production",
        context: "PME industrielle — back-office saturé par des exceptions documentaires.",
        problem:
          "Un POC impressionnait en démo mais n’était branché ni aux outils métier ni à la validation humaine.",
        approach:
          "Cadrage SIGNAL → intégration ERP / messagerie → règles d’escalade → KPIs de throughput.",
        result:
          "Agent en production quotidienne ; file d’attente traitée sans sortie de données hors cadre.",
        metric: "Production quotidienne",
      },
      {
        tag: "CAS 02",
        title: "RAG souverain sur données critiques",
        context: "Cabinet / métier réglementé — base documentaire sensible.",
        problem:
          "Les outils grand public ne passaient pas la revue conformité ; la connaissance restait silotée.",
        approach:
          "Index souverain, périmètre de sources validées, droits d’accès, journalisation des requêtes.",
        result:
          "Réponses utiles pour les équipes sans exposition hors France ; adoption interne progressive.",
        metric: "Données en France",
      },
      {
        tag: "CAS 03",
        title: "Automatisation documentaire réglementée",
        context: "Opérations à fort volume de dossiers à contrôler.",
        problem:
          "Temps de traitement trop long ; risque d’erreur et fatigue des équipes sur le répétitif.",
        approach:
          "Pipeline de pré-analyse + validation humaine obligatoire sur les décisions critiques.",
        result:
          "Réduction nette du temps de cycle ; responsabilité humaine conservée et auditable.",
        metric: "Human-in-the-loop",
      },
    ],
    labels: {
      context: "Contexte",
      problem: "Problème",
      approach: "Approche SIGNAL",
      result: "Résultat",
    },
    note: "Les clients ne sont pas nommés ici. Des études de cas détaillées seront publiées avec leur accord.",
  },
  en: {
    eyebrow: "OUR WORK",
    title: "How clients turn AI promise into real value",
    sub: "Measurable outcomes — not isolated demos. Anonymized cases, SIGNAL method.",
    proofsTitle: "What we hold on every engagement",
    proofs: [
      "Data hosted / processed in France when the frame requires it",
      "Human-in-the-loop on sensitive outputs",
      "Outcome measurement before scaling",
      "Traceability and governance from day one",
    ],
    items: [
      {
        tag: "CASE 01",
        title: "From stuck POC to production agent",
        context: "Industrial SMB — back-office saturated by document exceptions.",
        problem:
          "A POC looked great in demos but wasn’t wired to business tools or human validation.",
        approach:
          "SIGNAL scoping → ERP / messaging integration → escalation rules → throughput KPIs.",
        result:
          "Agent in daily production; queue handled without data leaving the agreed frame.",
        metric: "Daily production",
      },
      {
        tag: "CASE 02",
        title: "Sovereign RAG on critical data",
        context: "Regulated practice — sensitive document base.",
        problem:
          "Consumer tools failed compliance review; knowledge stayed siloed.",
        approach:
          "Sovereign index, approved sources, access rights, query logging.",
        result:
          "Useful answers for teams without exposure outside France; gradual internal adoption.",
        metric: "Data in France",
      },
      {
        tag: "CASE 03",
        title: "Regulated document automation",
        context: "High-volume dossier operations.",
        problem:
          "Cycle times too long; error risk and team fatigue on repetitive work.",
        approach:
          "Pre-analysis pipeline + mandatory human validation on critical decisions.",
        result:
          "Clear cycle-time reduction; human accountability kept and auditable.",
        metric: "Human-in-the-loop",
      },
    ],
    labels: {
      context: "Context",
      problem: "Problem",
      approach: "SIGNAL approach",
      result: "Outcome",
    },
    note: "Clients are not named here. Detailed case studies will be published with their consent.",
  },
} as const;

export const APROPOS = {
  fr: {
    eyebrow: "QUI NOUS SOMMES",
    title: "Un collectif IA souveraine",
    sub: "Remparia existe pour combler le fossé entre le POC qui impressionne et l'agent qui travaille tous les jours.",
    convictionH: "L'humain décide, l'agent exécute.",
    convictionP:
      "L'IA n'est pas là pour remplacer. Elle est là pour libérer du temps sur ce qui compte. Vos équipes gardent la main, la décision et la responsabilité — les agents portent la charge répétitive.",
    collectiveTitle: "Le collectif",
    collectiveSub:
      "Pas une usine à slides : des profils qui livrent jusqu’à la production.",
    collective: [
      {
        tag: "STRATÉGIE",
        title: "Feuille de route & gouvernance",
        desc: "Prioriser les cas à ROI réel, cadrer conformité et ownership métier.",
      },
      {
        tag: "AGENTS",
        title: "Conception & intégration",
        desc: "Agents branchés sur vos outils, avec human-in-the-loop et mesure.",
      },
      {
        tag: "INFRA",
        title: "Souveraineté & données",
        desc: "Hébergement, accès, traçabilité — le cadre technique de la confiance.",
      },
    ],
    engagementTitle: "Nos engagements",
    engagement: [
      "Souveraineté des données quand le métier l’exige",
      "Conformité intégrée dès le cadrage SIGNAL",
      "Production quotidienne avant le discours",
      "Transfert de compétences — pas de boîte noire",
    ],
    contactLine: "Écrire à l’équipe",
    pillars: [
      {
        tag: "AGENTS IA MÉTIER",
        title: "Conçus pour vos process réels",
      },
      {
        tag: "INFRA SOUVERAINE",
        title: "Vos données restent en France",
      },
      {
        tag: "AGNOSTIQUE LLM",
        title: "Le meilleur modèle par tâche",
      },
    ],
    positionH: "Trois façons de faire de l'IA en France. Une seule va jusqu'au bout.",
    positions: [
      {
        tag: "[ 01 ] FORMATION",
        title: "Ils expliquent",
        desc: "Excellents pour comprendre l'IA. Mais la formation seule ne transforme pas vos opérations.",
        highlight: false,
      },
      {
        tag: "[ 02 ] INTÉGRATEURS",
        title: "Ils outillent",
        desc: "Ils déploient des outils. La conformité métier et la souveraineté restent des angles morts.",
        highlight: false,
      },
      {
        tag: "[ 03 ] REMPARIA",
        title: "Nous augmentons",
        desc: "Des agents intégrés, conformes et souverains — jusqu'à la production quotidienne.",
        highlight: true,
      },
    ],
  },
  en: {
    eyebrow: "WHO WE ARE",
    title: "A sovereign AI collective",
    sub: "Remparia exists to close the gap between the POC that dazzles and the agent that works every day.",
    convictionH: "Humans decide, agents execute.",
    convictionP:
      "AI isn't here to replace. It's here to free up time for what matters. Your teams keep control, decisions and accountability — agents carry the repetitive load.",
    collectiveTitle: "The collective",
    collectiveSub:
      "Not a slide factory: people who ship through to production.",
    collective: [
      {
        tag: "STRATEGY",
        title: "Roadmap & governance",
        desc: "Prioritize real-ROI cases; frame compliance and business ownership.",
      },
      {
        tag: "AGENTS",
        title: "Design & integration",
        desc: "Agents wired into your tools, with human-in-the-loop and measurement.",
      },
      {
        tag: "INFRA",
        title: "Sovereignty & data",
        desc: "Hosting, access, traceability — the technical frame for trust.",
      },
    ],
    engagementTitle: "Our commitments",
    engagement: [
      "Data sovereignty when the business requires it",
      "Compliance built into SIGNAL scoping",
      "Daily production before the pitch",
      "Skills transfer — no black box",
    ],
    contactLine: "Email the team",
    pillars: [
      {
        tag: "BUSINESS AI AGENTS",
        title: "Built for your real workflows",
      },
      {
        tag: "SOVEREIGN INFRA",
        title: "Your data stays in France",
      },
      {
        tag: "LLM-AGNOSTIC",
        title: "The best model per task",
      },
    ],
    positionH: "Three ways to do AI in France. Only one goes all the way.",
    positions: [
      {
        tag: "[ 01 ] TRAINING",
        title: "They explain",
        desc: "Great for understanding AI. But training alone won't transform operations.",
        highlight: false,
      },
      {
        tag: "[ 02 ] INTEGRATORS",
        title: "They tool up",
        desc: "They deploy tools. Business compliance and sovereignty stay blind spots.",
        highlight: false,
      },
      {
        tag: "[ 03 ] REMPARIA",
        title: "We augment",
        desc: "Integrated, compliant, sovereign agents — all the way to daily production.",
        highlight: true,
      },
    ],
  },
} as const;

export const RESSOURCES = {
  fr: {
    eyebrow: "RESSOURCES",
    title: "Restez à jour sur l'IA utile",
    sub: "Insights, méthode et outils pour passer du bruit au signal.",
    items: [
      {
        tag: "MÉTHODE",
        title: "Le protocole SIGNAL",
        desc: "Notre chemin répétable de l'idée à la production.",
        href: "/methode",
      },
      {
        tag: "CONTACT",
        title: "Diagnostic SIGNAL",
        desc: "Identifiez où les agents créent le plus d'impact chez vous.",
        href: "/contact",
      },
    ],
  },
  en: {
    eyebrow: "RESOURCES",
    title: "Stay current on useful AI",
    sub: "Insights, method and tools to go from noise to signal.",
    items: [
      {
        tag: "METHOD",
        title: "The SIGNAL protocol",
        desc: "Our repeatable path from idea to production.",
        href: "/methode",
      },
      {
        tag: "CONTACT",
        title: "SIGNAL diagnostic",
        desc: "Find where agents create the most impact for you.",
        href: "/contact",
      },
    ],
  },
} as const;

export const CONTACT = {
  fr: {
    eyebrow: "CONTACT",
    title: "Parlons de ce qui est possible",
    sub: "On sait ce qui marche en IA — et ce qui n'aboutit pas. Let's connect ou écrivez-nous.",
    email: "contact@remparia.fr",
    cta: "Let's connect",
    fields: {
      name: "Nom",
      company: "Entreprise",
      email: "Email",
      message: "Message",
      submit: "Envoyer",
      sending: "Envoi…",
    },
    success:
      "Message envoyé. Nous vous répondons sous peu à l’adresse indiquée.",
    error:
      "Envoi impossible pour le moment. Réessayez ou écrivez-nous directement.",
    errorConfig:
      "Le formulaire n’est pas encore configuré côté serveur. Écrivez-nous par e-mail.",
    errorRate: "Trop de tentatives. Réessayez dans une minute.",
  },
  en: {
    eyebrow: "CONTACT",
    title: "Let's talk about what's possible",
    sub: "We know what works in AI — and what doesn't. Let's connect or write to us.",
    email: "contact@remparia.fr",
    cta: "Let's connect",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      message: "Message",
      submit: "Send",
      sending: "Sending…",
    },
    success: "Message sent. We’ll get back to you shortly at the address you provided.",
    error: "Couldn’t send right now. Try again or email us directly.",
    errorConfig:
      "The form isn’t configured on the server yet. Please email us instead.",
    errorRate: "Too many attempts. Please try again in a minute.",
  },
} as const;

export const STATS = {
  fr: [
    {
      value: "80%",
      label: "des projets IA n'atteignent jamais la production",
      color: "#c8ff00",
    },
    {
      value: "x3",
      label: "l'écart d'adoption entre grands groupes et PME",
      color: "#fff",
    },
    {
      value: "0",
      label:
        "outil grand public conforme par défaut aux professions réglementées",
      color: "#fff",
    },
  ],
  en: [
    {
      value: "80%",
      label: "of AI projects never reach production",
      color: "#c8ff00",
    },
    {
      value: "x3",
      label: "the adoption gap between large firms and SMBs",
      color: "#fff",
    },
    {
      value: "0",
      label: "consumer tools compliant by default for regulated professions",
      color: "#fff",
    },
  ],
} as const;
