export type Lang = "fr" | "en";

export const NAV = {
  fr: {
    services: "Services",
    methode: "Méthode",
    secteurs: "Secteurs",
    realisations: "Réalisations",
    aPropos: "À propos",
    ressources: "Ressources",
    contact: "Contact",
    demo: "Let's connect",
    demoShort: "Connect →",
  },
  en: {
    services: "Services",
    methode: "Method",
    secteurs: "Industries",
    realisations: "Our Work",
    aPropos: "About",
    ressources: "Resources",
    contact: "Contact",
    demo: "Let's connect",
    demoShort: "Connect →",
  },
} as const;

export const FOOTER = {
  fr: {
    tagline: "Collectif IA souveraine · France",
    servicesTitle: "Services",
    methodeTitle: "Méthode",
    ressourcesTitle: "Ressources",
    contactTitle: "Contact",
    rights: "© 2026 REMPARIA. Tous droits réservés.",
  },
  en: {
    tagline: "Sovereign AI collective · France",
    servicesTitle: "Services",
    methodeTitle: "Method",
    ressourcesTitle: "Resources",
    contactTitle: "Contact",
    rights: "© 2026 REMPARIA. All rights reserved.",
  },
} as const;

export const HOME = {
  fr: {
    eyebrow: "L'IA SOUVERAINE QUI AUGMENTE VOS ÉQUIPES",
    h1a: "Souverain.",
    h1b: "Augmenté.",
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
    eyebrow: "SOVEREIGN AI THAT AUGMENTS YOUR TEAMS",
    h1a: "Sovereign.",
    h1b: "Augmented.",
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
    { tag: "INFRA SOUVERAINE", title: "Vos données restent en France" },
    { tag: "AGNOSTIQUE LLM", title: "Le meilleur modèle par tâche" },
  ],
  en: [
    { tag: "BUSINESS AI AGENTS", title: "Built for your real workflows" },
    { tag: "SOVEREIGN INFRA", title: "Your data stays in France" },
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
    eyebrow: "INDUSTRIES",
    title: "Des secteurs où la conformité n'est pas optionnelle",
    sub: "Nous travaillons là où l'IA doit s'intégrer aux process réels — sous contrainte réglementaire.",
    overview: "Tous les secteurs",
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
    ],
  },
  en: {
    eyebrow: "INDUSTRIES",
    title: "Sectors where compliance is non-negotiable",
    sub: "We work where AI must plug into real workflows — under regulatory constraints.",
    overview: "All industries",
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
    ],
  },
} as const;

export const SERVICE_SLUGS = SERVICES.fr.items.map((i) => i.slug);
export const SECTEUR_SLUGS = SECTEURS.fr.items.map((i) => i.slug);

export function getService(slug: string, lang: Lang = "fr") {
  return SERVICES[lang].items.find((i) => i.slug === slug) ?? null;
}

export function getSecteur(slug: string, lang: Lang = "fr") {
  return SECTEURS[lang].items.find((i) => i.slug === slug) ?? null;
}

export const REALISATIONS = {
  fr: {
    eyebrow: "NOTRE TRAVAIL",
    title: "Comment nos clients passent de la promesse à la valeur",
    sub: "Des résultats mesurables — pas des démos isolées.",
    items: [
      {
        tag: "CAS 01",
        title: "Du POC bloqué à l'agent en production",
        desc: "Industrialisation d'un agent métier intégré aux outils existants, avec gouvernance et mesure des gains.",
        metric: "Production quotidienne",
      },
      {
        tag: "CAS 02",
        title: "RAG souverain sur données critiques",
        desc: "Connexion des connaissances internes à l'IA sans sortie de données hors France.",
        metric: "Données en France",
      },
      {
        tag: "CAS 03",
        title: "Automatisation documentaire réglementée",
        desc: "Réduction du temps de traitement tout en conservant la validation humaine.",
        metric: "Human-in-the-loop",
      },
    ],
    note: "Des études de cas détaillées seront publiées au fil des déploiements.",
  },
  en: {
    eyebrow: "OUR WORK",
    title: "How clients turn AI promise into real value",
    sub: "Measurable outcomes — not isolated demos.",
    items: [
      {
        tag: "CASE 01",
        title: "From stuck POC to production agent",
        desc: "Industrialized a business agent into existing tools, with governance and outcome tracking.",
        metric: "Daily production",
      },
      {
        tag: "CASE 02",
        title: "Sovereign RAG on critical data",
        desc: "Connected internal knowledge to AI without data leaving France.",
        metric: "Data in France",
      },
      {
        tag: "CASE 03",
        title: "Regulated document automation",
        desc: "Cut processing time while keeping human validation in the loop.",
        metric: "Human-in-the-loop",
      },
    ],
    note: "Detailed case studies will be published as deployments go live.",
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
    },
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
    },
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
