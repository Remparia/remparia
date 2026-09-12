import type { Lang } from "./content";

export type CommerceAgentPageCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  proof: readonly { value: string; label: string; source: string }[];
  dual: {
    eyebrow: string;
    title: string;
    body: string;
    shopping: {
      title: string;
      forWhom: string;
      does: string;
      skills: readonly string[];
      never: string;
    };
    merchant: {
      title: string;
      forWhom: string;
      does: string;
      skills: readonly string[];
      never: string;
    };
  };
  security: {
    eyebrow: string;
    title: string;
    body: string;
    rules: readonly { title: string; desc: string }[];
  };
  tracks: {
    eyebrow: string;
    title: string;
    body: string;
    own: { title: string; desc: string };
    third: { title: string; desc: string };
    note: string;
  };
  offer: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly {
      index: string;
      title: string;
      duration: string;
      items: readonly string[];
    }[];
  };
  pilot: {
    eyebrow: string;
    title: string;
    rows: readonly { weeks: string; work: string; see: string }[];
  };
  training: {
    eyebrow: string;
    title: string;
    body: string;
    courses: readonly {
      code: string;
      title: string;
      audience: string;
      duration: string;
      outcomes: readonly string[];
    }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    segments: readonly { title: string; desc: string; angle: string }[];
  };
  final: {
    title: string;
    body: string;
    steps: readonly string[];
  };
  agentsHeading: string;
  sectorLink: { label: string; href: string };
};

const fr: CommerceAgentPageCopy = {
  eyebrow: "SOLUTIONS / AGENT COMMERCE",
  title: "Votre boutique devient ",
  titleAccent: "un vendeur.",
  sub: "Un agent qui conseille vos clients, compose leur panier et suit leur commande — dans une seule conversation, sur votre site, avec vos règles gravées dans le code. Et qui ne touche jamais au paiement.",
  ctaPrimary: "Lancer SIGNAL commerce",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "Voir le vertical e-commerce",
  ctaSecondaryHref: "/secteurs/e-commerce",
  proof: [
    {
      value: "1 / 3",
      label: "acheteurs en ligne utilisent déjà l’IA dans leur parcours",
      source: "Fevad 2026",
    },
    {
      value: "42 %",
      label: "des commerçants expérimentent déjà le commerce agentique",
      source: "Checkout.com / Fevad",
    },
    {
      value: "+15–35 %",
      label: "de conversion assistée observée sur agents conversationnels bien intégrés",
      source: "BCG cité Fevad",
    },
    {
      value: "0",
      label: "outil de paiement exposé à l’agent — le checkout reste humain",
      source: "Sécurité by design",
    },
  ],
  dual: {
    eyebrow: "01 / DEUX AGENTS",
    title: "Shopping côté client. Marchand côté équipe.",
    body: "Un seul agent conversationnel côté site — pas un routeur d’intentions qui perd le contexte. Et un agent marchand pour le back-office, où chaque écriture attend votre validation.",
    shopping: {
      title: "Agent shopping",
      forWhom: "Le client final, dans votre site ou votre app",
      does: "Recherche multi-contraintes, comparaison, panier, handoff checkout, SAV (commande, retours, politiques) — dans une seule conversation.",
      skills: [
        "Recherche & découverte",
        "Comparaison produit",
        "Composition de panier",
        "Suivi commande & retours",
        "Mémoire gouvernée (opt-in)",
      ],
      never: "Il n’invente pas un prix, n’hallucine pas un SKU et ne paie jamais.",
    },
    merchant: {
      title: "Agent marchand",
      forWhom: "L’équipe qui exploite la boutique",
      does: "Analyse ventes et stocks, recommande prix / promos, rédige des campagnes — chaque changement reste en attente jusqu’à approbation.",
      skills: [
        "Insights performance",
        "Alertes stock",
        "Pricing & promotions",
        "Campagnes",
        "File d’approbation",
      ],
      never: "Il n’applique jamais une baisse de prix ou une promo sans validation humaine.",
    },
  },
  security: {
    eyebrow: "02 / SÉCURITÉ DANS LE CODE",
    title: "Ce qui rassure un dirigeant, un DAF et un DPO.",
    body: "Les garde-fous ne vivent pas dans une consigne fragile. Ils sont appliqués dans le harness — avant d’atteindre vos systèmes.",
    rules: [
      {
        title: "L’agent ne paie jamais",
        desc: "Aucun outil de paiement. Le panier s’affiche avec un bouton ; la commande reste une action humaine.",
      },
      {
        title: "Seuls vos identifiants comptent",
        desc: "Un produit halluciné, collé ou glissé dans un avis est refusé avant votre backend. Prix et stock viennent de vos données.",
      },
      {
        title: "Validation humaine côté marchand",
        desc: "Baisse de prix, promo, campagne : rien ne s’applique sans approbation dans votre outil habituel.",
      },
      {
        title: "Contenu tiers assaini",
        desc: "Fiches, avis, politiques : matière à rapporter, jamais des instructions à exécuter. Protection contre l’injection.",
      },
      {
        title: "Mentions légales mot pour mot",
        desc: "Frais, conditions, disclosures servis depuis votre copie approuvée — jamais paraphrasés.",
      },
      {
        title: "Mémoire gouvernée (RGPD)",
        desc: "Préférences dans votre base, typées, avec rétention, droit d’accès / suppression et interrupteur par déploiement.",
      },
    ],
  },
  tracks: {
    eyebrow: "03 / DEUX CHANTIERS",
    title: "Être visible ailleurs. Garder la relation chez vous.",
    body: "Les agents tiers orientent déjà l’achat. Votre propre agent garde la marque, la donnée et le contexte.",
    own: {
      title: "Agent propriétaire",
      desc: "Sur votre site : conseille, compose le panier, suit la commande — sous Remparia OS, avec vos règles.",
    },
    third: {
      title: "Visibilité agents tiers",
      desc: "Catalogue propre, données structurées, protocoles (UCP / storefronts) pour ChatGPT, Gemini, Copilot, Perplexity.",
    },
    note: "SIGNAL couvre les deux. Le pilote livre le premier. L’exploitation entretient les deux.",
  },
  offer: {
    eyebrow: "04 / OFFRE",
    title: "Commencer petit. Mesurer. Étendre.",
    body: "Quatre paliers — du diagnostic mesurable au run continu. Les connecteurs et le ROI sont cadrés en SIGNAL, pas inventés en démo.",
    steps: [
      {
        index: "01",
        title: "Diagnostic Agent-Ready",
        duration: "2–3 semaines",
        items: [
          "Audit données produit & systèmes",
          "Visibilité dans les agents tiers",
          "Business case chiffré",
          "Démo sur un extrait de votre catalogue",
        ],
      },
      {
        index: "02",
        title: "Pilote Agent Shopping",
        duration: "8 semaines",
        items: [
          "Recherche, comparaison, panier, checkout",
          "2–3 flux SAV (commande, retours, politiques)",
          "Mémoire opt-in & suite d’évals",
          "Mise en production progressive + bilan J+30",
        ],
      },
      {
        index: "03",
        title: "Programme complet",
        duration: "3–6 mois",
        items: [
          "Multi-langue / canaux",
          "Agent marchand + file d’approbation",
          "Campagnes branchées sur votre emailing",
          "Gouvernance multi-équipes",
        ],
      },
      {
        index: "04",
        title: "Operate & améliorer",
        duration: "Mensuel",
        items: [
          "Run : incidents, sécurité, coûts, cache",
          "Care : revue conversations, évals, gel pré-pics",
          "Grow : roadmap, nouveaux flux, nouveaux modèles",
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
        work: "Branchement catalogue, contrats d’outils, recherche et fiches, cartes à votre marque",
        see: "L’agent parle de vos vrais produits",
      },
      {
        weeks: "3–4",
        work: "Panier, checkout, commandes, règles de sécurité, mémoire gouvernée",
        see: "Le parcours complet, sécurisé",
      },
      {
        weeks: "5–6",
        work: "Choix du modèle par mesure, latence, tests, recette, formation",
        see: "Un agent prêt pour vos équipes",
      },
      {
        weeks: "7–8",
        work: "Canary 5 % → 50 % → 100 %, revue quotidienne",
        see: "Les premiers chiffres, bilan à J+30",
      },
    ],
  },
  training: {
    eyebrow: "06 / FORMATION",
    title: "Vendre et piloter avec un agent — pas seulement le déployer.",
    body: "Trois formats, du comité de direction à l’équipe technique. Inclus ou à la carte selon le palier.",
    courses: [
      {
        code: "F1",
        title: "Commerce agentique pour décideurs",
        audience: "Direction, e-commerce, marketing, finance",
        duration: "½ journée",
        outcomes: [
          "Chatbot vs agent",
          "Deux chantiers (propre / tiers)",
          "Lire un business case et fixer les KPI",
        ],
      },
      {
        code: "F2",
        title: "Piloter l’agent au quotidien",
        audience: "E-commerce, SAV, catégorie, marketing",
        duration: "1 journée",
        outcomes: [
          "Lire une conversation et son tracé",
          "Qualifier un incident",
          "Approuver les recommandations marchand",
          "Préparer un pic (fêtes, soldes)",
        ],
      },
      {
        code: "F3",
        title: "Maintenir et faire évoluer",
        audience: "Développeurs, DSI, data, product",
        duration: "2 journées",
        outcomes: [
          "Architecture, tools, skills, évals",
          "CI et garde-fous testés",
          "Canary, retour arrière, gel",
        ],
      },
    ],
  },
  audience: {
    eyebrow: "07 / POUR QUI",
    title: "Là où l’agent commerce crée de la valeur vite",
    segments: [
      {
        title: "Marques & DTC",
        desc: "Shopify, catalogue vivant, équipe e-com 3–15 personnes.",
        angle: "Pilote shopping avant les pics — démo sur votre catalogue.",
      },
      {
        title: "Retailers multicanaux",
        desc: "PrestaShop / Magento, SAV chargé, réseau magasin.",
        angle: "Conseil produit + SAV d’abord, puis agent marchand.",
      },
      {
        title: "E-commerce B2B",
        desc: "Catalogues techniques, tarifs par compte, devis.",
        angle: "Recherche multi-contraintes, panier vers devis.",
      },
      {
        title: "Services datés",
        desc: "Voyage, billetterie, inventaire réglementé.",
        angle: "Frais et disponibilités servis mot pour mot depuis vos systèmes.",
      },
    ],
  },
  final: {
    title: "Prochaine étape : savoir exactement ce que l’agent vous rapporterait.",
    body: "En SIGNAL, on cadre les données, les systèmes et le business case — puis on fait tourner une démo sur votre catalogue.",
    steps: [
      "Atelier de cadrage (e-commerce, SAV, marketing, DSI)",
      "Audit des données et des systèmes, business case chiffré",
      "Démo sur votre catalogue et feuille de route 6–12 mois",
    ],
  },
  agentsHeading: "Fiches agents Remparia — déclencheur, livrable, stop humain",
  sectorLink: {
    label: "Voir le détail vertical e-commerce & boutiques",
    href: "/secteurs/e-commerce",
  },
};

const en: CommerceAgentPageCopy = {
  eyebrow: "SOLUTIONS / COMMERCE AGENT",
  title: "Your store becomes ",
  titleAccent: "a seller.",
  sub: "An agent that advises shoppers, builds their cart and tracks their order — in one conversation, on your site, with your rules enforced in code. And never touches payment.",
  ctaPrimary: "Start commerce SIGNAL",
  ctaPrimaryHref: "/demarrer",
  ctaSecondary: "See the e-commerce vertical",
  ctaSecondaryHref: "/secteurs/e-commerce",
  proof: [
    {
      value: "1 / 3",
      label: "online buyers already use AI in their purchase journey",
      source: "Fevad 2026",
    },
    {
      value: "42 %",
      label: "of merchants already experiment with agentic commerce",
      source: "Checkout.com / Fevad",
    },
    {
      value: "+15–35 %",
      label: "assisted conversion lift for well-integrated conversational agents",
      source: "BCG via Fevad",
    },
    {
      value: "0",
      label: "payment tool exposed to the agent — checkout stays human",
      source: "Security by design",
    },
  ],
  dual: {
    eyebrow: "01 / TWO AGENTS",
    title: "Shopping for customers. Merchant for your team.",
    body: "One conversational agent on-site — not an intent router that drops context. And a merchant agent for back-office, where every write waits for your approval.",
    shopping: {
      title: "Shopping agent",
      forWhom: "The end customer, in your site or app",
      does: "Multi-constraint search, comparison, cart, checkout handoff, care (orders, returns, policies) — in one conversation.",
      skills: [
        "Search & discovery",
        "Product comparison",
        "Cart composition",
        "Order tracking & returns",
        "Governed memory (opt-in)",
      ],
      never: "It never invents a price, hallucinates a SKU, or pays.",
    },
    merchant: {
      title: "Merchant agent",
      forWhom: "The team running the store",
      does: "Sales and stock analysis, price / promo recommendations, campaign drafts — every change stays staged until approved.",
      skills: [
        "Performance insights",
        "Stock alerts",
        "Pricing & promotions",
        "Campaigns",
        "Approval queue",
      ],
      never: "It never applies a price cut or promo without human validation.",
    },
  },
  security: {
    eyebrow: "02 / SECURITY IN CODE",
    title: "What reassures a CEO, a CFO and a DPO.",
    body: "Guards don’t live in a fragile prompt. They run in the harness — before they reach your systems.",
    rules: [
      {
        title: "The agent never pays",
        desc: "No payment tool. The cart shows a button; checkout stays a human action.",
      },
      {
        title: "Only your IDs count",
        desc: "A hallucinated, pasted or review-injected product is refused before your backend. Price and stock come from your data.",
      },
      {
        title: "Human validation for merchant writes",
        desc: "Price cuts, promos, campaigns: nothing applies without approval in your usual tools.",
      },
      {
        title: "Third-party content sanitized",
        desc: "Sheets, reviews, policies: material to report, never instructions to execute. Injection protection.",
      },
      {
        title: "Legal copy verbatim",
        desc: "Fees, terms, disclosures served from your approved copy — never paraphrased.",
      },
      {
        title: "Governed memory (GDPR)",
        desc: "Preferences in your database, typed, with retention, access / deletion rights and a per-deployment kill switch.",
      },
    ],
  },
  tracks: {
    eyebrow: "03 / TWO TRACKS",
    title: "Be visible elsewhere. Keep the relationship with you.",
    body: "Third-party agents already steer purchase. Your own agent keeps brand, data and context.",
    own: {
      title: "Owned agent",
      desc: "On your site: advises, builds the cart, tracks the order — under Remparia OS, with your rules.",
    },
    third: {
      title: "Third-party visibility",
      desc: "Clean catalog, structured data, protocols (UCP / storefronts) for ChatGPT, Gemini, Copilot, Perplexity.",
    },
    note: "SIGNAL covers both. The pilot ships the first. Operations maintain both.",
  },
  offer: {
    eyebrow: "04 / OFFER",
    title: "Start small. Measure. Extend.",
    body: "Four tiers — from a measurable diagnostic to continuous run. Connectors and ROI are scoped in SIGNAL, not invented in a demo.",
    steps: [
      {
        index: "01",
        title: "Agent-Ready diagnostic",
        duration: "2–3 weeks",
        items: [
          "Product data & systems audit",
          "Third-party agent visibility",
          "Quantified business case",
          "Demo on an extract of your catalog",
        ],
      },
      {
        index: "02",
        title: "Shopping agent pilot",
        duration: "8 weeks",
        items: [
          "Search, compare, cart, checkout",
          "2–3 care flows (order, returns, policies)",
          "Opt-in memory & eval suite",
          "Progressive production + D+30 review",
        ],
      },
      {
        index: "03",
        title: "Full program",
        duration: "3–6 months",
        items: [
          "Multi-language / channels",
          "Merchant agent + approval queue",
          "Campaigns wired to your email stack",
          "Multi-team governance",
        ],
      },
      {
        index: "04",
        title: "Operate & improve",
        duration: "Monthly",
        items: [
          "Run: incidents, security, cost, cache",
          "Care: transcript review, evals, pre-peak freeze",
          "Grow: roadmap, new flows, new models",
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
        work: "Catalog wiring, tool contracts, search and sheets, branded cards",
        see: "The agent talks about your real products",
      },
      {
        weeks: "3–4",
        work: "Cart, checkout, orders, security rules, governed memory",
        see: "The full journey, secured",
      },
      {
        weeks: "5–6",
        work: "Model choice by measurement, latency, tests, UAT, training",
        see: "An agent ready for your teams",
      },
      {
        weeks: "7–8",
        work: "Canary 5% → 50% → 100%, daily review",
        see: "First numbers, D+30 debrief",
      },
    ],
  },
  training: {
    eyebrow: "06 / TRAINING",
    title: "Sell and operate with an agent — don’t just ship it.",
    body: "Three formats, from the exec committee to engineering. Included or à la carte by tier.",
    courses: [
      {
        code: "F1",
        title: "Agentic commerce for decision-makers",
        audience: "Leadership, e-commerce, marketing, finance",
        duration: "Half day",
        outcomes: [
          "Chatbot vs agent",
          "Two tracks (owned / third-party)",
          "Read a business case and set KPIs",
        ],
      },
      {
        code: "F2",
        title: "Operate the agent day to day",
        audience: "E-commerce, care, category, marketing",
        duration: "1 day",
        outcomes: [
          "Read a conversation and its trace",
          "Qualify an incident",
          "Approve merchant recommendations",
          "Prepare a peak (holidays, sales)",
        ],
      },
      {
        code: "F3",
        title: "Maintain and evolve",
        audience: "Developers, IT, data, product",
        duration: "2 days",
        outcomes: [
          "Architecture, tools, skills, evals",
          "CI and tested guards",
          "Canary, rollback, freeze",
        ],
      },
    ],
  },
  audience: {
    eyebrow: "07 / WHO IT’S FOR",
    title: "Where commerce agents create value fast",
    segments: [
      {
        title: "Brands & DTC",
        desc: "Shopify, living catalog, e-com team of 3–15.",
        angle: "Shopping pilot before peaks — demo on your catalog.",
      },
      {
        title: "Multichannel retailers",
        desc: "PrestaShop / Magento, heavy care load, store network.",
        angle: "Product advice + care first, then merchant agent.",
      },
      {
        title: "B2B e-commerce",
        desc: "Technical catalogs, account pricing, quotes.",
        angle: "Multi-constraint search, cart to quote.",
      },
      {
        title: "Dated services",
        desc: "Travel, ticketing, regulated inventory.",
        angle: "Fees and availability served verbatim from your systems.",
      },
    ],
  },
  final: {
    title: "Next step: know exactly what the agent would return for you.",
    body: "In SIGNAL we scope data, systems and the business case — then run a demo on your catalog.",
    steps: [
      "Scoping workshop (e-commerce, care, marketing, IT)",
      "Data and systems audit, quantified business case",
      "Demo on your catalog and 6–12 month roadmap",
    ],
  },
  agentsHeading: "Remparia agent cards — trigger, deliverable, human stop",
  sectorLink: {
    label: "See the e-commerce & store vertical detail",
    href: "/secteurs/e-commerce",
  },
};

export const COMMERCE_AGENT_PAGE = { fr, en } as const;

export function commerceAgentPage(lang: Lang): CommerceAgentPageCopy {
  return COMMERCE_AGENT_PAGE[lang];
}
