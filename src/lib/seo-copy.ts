import type { Lang } from "@/lib/content";

export type SeoCopy = {
  title: string;
  description: string;
};

const COPY = {
  "/": {
    fr: {
      title: "IA gouvernée : modèle d’exploitation pour votre entreprise",
      description:
        "Remparia fait de l’IA un système d’exploitation gouverné. SIGNAL cadre, Studio assemble, Remparia OS fait tourner sous ALLOW / REVIEW / BLOCK.",
    },
    en: {
      title: "Governed AI: an operating model for your company",
      description:
        "Remparia turns AI into a governed operating system. SIGNAL frames, Studio assembles, Remparia OS runs under ALLOW / REVIEW / BLOCK.",
    },
  },
  "/signal": {
    fr: {
      title: "SIGNAL : cartographier où l’IA crée de la valeur",
      description:
        "Méthode Remparia en six étapes (10 à 12 semaines) : observer le travail réel, scorer les cas, gouverner, puis automatiser sous supervision. Livrable : carte d’opportunités priorisée.",
    },
    en: {
      title: "SIGNAL: map where AI creates value",
      description:
        "Remparia’s six-stage method (10 to 12 weeks): observe real work, score cases, govern, then automate under supervision. Deliverable: a prioritized opportunity map.",
    },
  },
  "/solution": {
    fr: {
      title: "Remparia OS : control plane ALLOW / REVIEW / BLOCK",
      description:
        "Remparia OS orchestre agents, modèles, données d’entreprise et décisions humaines. Identité, politiques, audit : chaque action passe ALLOW, REVIEW ou BLOCK.",
    },
    en: {
      title: "Remparia OS: ALLOW / REVIEW / BLOCK control plane",
      description:
        "Remparia OS orchestrates agents, models, enterprise data and human decisions. Identity, policies, audit: every action hits ALLOW, REVIEW or BLOCK.",
    },
  },
  "/studio": {
    fr: {
      title: "Studio : assembler les agents métier gouvernés",
      description:
        "Après SIGNAL, Studio compose agents, compétences, outils, connaissance et validations humaines, prêts à tourner dans Remparia OS. Rien n’est publié sans porte humaine.",
    },
    en: {
      title: "Studio: assemble governed business agents",
      description:
        "After SIGNAL, Studio composes agents, skills, tools, knowledge and human approvals, ready to run in Remparia OS. Nothing ships without a human gate.",
    },
  },
  "/governance": {
    fr: {
      title: "Gouvernance IA : ALLOW, REVIEW, BLOCK dans l’OS",
      description:
        "Les règles vivent dans Remparia OS : identité, permissions, politiques versionnées et journal. Pas un PDF. La gouvernance accélère l’adoption parce que chacun sait ce qui est autorisé.",
    },
    en: {
      title: "AI governance: ALLOW, REVIEW, BLOCK in the OS",
      description:
        "Rules live in Remparia OS: identity, permissions, versioned policies and a log. Not a PDF. Governance speeds adoption because everyone knows what is allowed.",
    },
  },
  "/sovereignty": {
    fr: {
      title: "Souveraineté : Cloud Remparia, souverain ou on-prem",
      description:
        "Même OS, mêmes politiques ALLOW / REVIEW / BLOCK, quel que soit le périmètre : Cloud Remparia, cloud souverain ou on-premise. On durcit l’hébergement sans réécrire les agents.",
    },
    en: {
      title: "Sovereignty: Remparia Cloud, sovereign or on-prem",
      description:
        "Same OS, same ALLOW / REVIEW / BLOCK policies, whatever the perimeter: Remparia Cloud, sovereign cloud or on-premise. Harden hosting without rewriting agents.",
    },
  },
  "/services": {
    fr: {
      title: "Services : SIGNAL, Studio, déploiement, adoption",
      description:
        "Couche delivery de Remparia OS : cadrer avec SIGNAL, construire dans Studio, déployer en souveraineté, faire adopter. Forfait cadré avant signature, pas un produit parallèle.",
    },
    en: {
      title: "Services: SIGNAL, Studio, deploy, adoption",
      description:
        "Remparia OS delivery layer: frame with SIGNAL, build in Studio, deploy under sovereignty, drive adoption. Fee framed before signature, not a parallel product.",
    },
  },
  "/secteurs": {
    fr: {
      title: "Métiers spécialisés : agents supervisés par profession",
      description:
        "Agents Remparia pour les métiers où la donnée est sensible, la responsabilité forte et le temps expert rare. SIGNAL, Studio, OS, hébergement au périmètre choisi.",
    },
    en: {
      title: "Specialized professions: supervised agents by trade",
      description:
        "Remparia agents for professions where data is sensitive, accountability is high and expert time is scarce. SIGNAL, Studio, OS, hosting in the chosen perimeter.",
    },
  },
  "/cas-d-usage": {
    fr: {
      title: "Cas d’usage : ce que l’agent fait, ce qu’il ne fait jamais",
      description:
        "Fiches processus métier Remparia : collecte, complétude, instruction. Ce que l’agent fait, ce qu’il ne valide jamais, et ce qu’on mesure.",
    },
    en: {
      title: "Use cases: what the agent does, and never does",
      description:
        "Remparia workflow sheets: collection, completeness, case prep. What the agent does, what it never signs off, and what we measure.",
    },
  },
  "/pour-qui": {
    fr: {
      title: "Pour qui : métiers à responsabilité et données sensibles",
      description:
        "Commerce, immobilier, notariat, juridique, finance, conseil. Remparia intervient là où chaque décision engage une responsabilité et où l’IA générique échoue.",
    },
    en: {
      title: "Who it is for: accountability trades, sensitive data",
      description:
        "Commerce, real estate, notaries, legal, finance, consulting. Remparia works where every decision carries accountability and generic AI fails.",
    },
  },
  "/demarrer": {
    fr: {
      title: "Démarrer : session SIGNAL, diagnostic ou premier agent",
      description:
        "Trois façons de commencer avec Remparia : l’heure (gratuite), le diagnostic forfaitaire, ou un premier agent en production supervisée. Forfait cadré avant signature.",
    },
    en: {
      title: "Get started: SIGNAL session, diagnostic or first agent",
      description:
        "Three ways to start with Remparia: the hour (free), a fixed-fee diagnostic, or a first agent in supervised production. Fee framed before you sign.",
    },
  },
  "/contact": {
    fr: {
      title: "Contact : session SIGNAL ou cas d’usage agents",
      description:
        "Présentez le processus qui coûte du temps à vos experts. Cadrage du répétitif, des données et des gains à mesurer. Contact : contact@remparia.com.",
    },
    en: {
      title: "Contact: SIGNAL session or agent use case",
      description:
        "Bring the workflow that costs your experts time. Frame the repetitive work, data constraints and outcomes to measure. Contact: contact@remparia.com.",
    },
  },
  "/a-propos": {
    fr: {
      title: "À propos : agents pour les métiers de confiance",
      description:
        "Vision Remparia : des agents qui renforcent les métiers de confiance, préservent la décision humaine et transfèrent la maîtrise. Terrain avant la technologie.",
    },
    en: {
      title: "About: agents for professions built on trust",
      description:
        "Remparia’s vision: agents that strengthen professions built on trust, keep human decisions and transfer control. Fieldwork before technology.",
    },
  },
  "/carrieres": {
    fr: {
      title: "Carrières : experts agents métier supervisés",
      description:
        "Rejoindre le réseau d’experts indépendants Remparia pour des déploiements d’agents supervisés dans les métiers spécialisés.",
    },
    en: {
      title: "Careers: supervised business-agent experts",
      description:
        "Join Remparia’s independent expert network for supervised business-agent deployments in specialized professions.",
    },
  },
  "/solutions/legal": {
    fr: {
      title: "Pack juridique : la machine prépare, l’avocat tranche",
      description:
        "Force de travail IA juridique gouvernée : revue documentaire, préparation de dossiers et contrôles. Pas d’avis automatisé, pas de signature machine.",
    },
    en: {
      title: "Legal pack: the machine prepares, counsel decides",
      description:
        "Governed legal AI workforce: document review, case prep and compliance checks. No automated advice, no machine signature.",
    },
  },
  "/solutions/finance": {
    fr: {
      title: "Pack finance : contrôler sans diluer la décision",
      description:
        "Force de travail IA finance gouvernée : KYC assisté, reporting et préparation risque, avec piste d’audit et seuils tranchés par un humain.",
    },
    en: {
      title: "Finance pack: control without diluting the decision",
      description:
        "Governed finance AI workforce: assisted KYC, reporting and risk prep, with an audit trail and human calls on thresholds.",
    },
  },
  "/solutions/real-estate": {
    fr: {
      title: "Pack immobilier : le temps expert sur la décision",
      description:
        "Force de travail IA immobilière gouvernée : qualification, matching, dossiers et relances. Stops humains sur mandat, visite et négociation.",
    },
    en: {
      title: "Real estate pack: expert time on the decision",
      description:
        "Governed real-estate AI workforce: qualification, matching, files and follow-ups. Human stops on mandate, viewing and negotiation.",
    },
  },
  "/solutions/commerce": {
    fr: {
      title: "Agent Commerce : la boutique conseille et compose le panier",
      description:
        "Agent shopping gouverné : conseille, compose le panier et suit les commandes, sans toucher au paiement. Tourne dans Remparia OS, sous vos règles.",
    },
    en: {
      title: "Commerce agent: the store advises and builds the cart",
      description:
        "A governed shopping agent that advises, builds the cart and tracks orders, without touching payment. Runs in Remparia OS, under your rules.",
    },
  },
  "/mentions-legales": {
    fr: {
      title: "Mentions légales",
      description:
        "Éditeur, hébergeur et propriété intellectuelle du site remparia.com.",
    },
    en: {
      title: "Legal notice",
      description:
        "Publisher, host and intellectual property for remparia.com.",
    },
  },
  "/confidentialite": {
    fr: {
      title: "Politique de confidentialité",
      description:
        "Traitement des données personnelles collectées via le site Remparia et le formulaire de contact.",
    },
    en: {
      title: "Privacy policy",
      description:
        "How Remparia processes personal data collected via the website and contact form.",
    },
  },
  "/cookies": {
    fr: {
      title: "Cookies et traceurs",
      description:
        "Cookies et traceurs du site Remparia : indispensables, mesure d’audience, consentement.",
    },
    en: {
      title: "Cookies and trackers",
      description:
        "Cookies and trackers on the Remparia website: essential, analytics, consent.",
    },
  },
} as const satisfies Record<string, { fr: SeoCopy; en: SeoCopy }>;

export type SeoPath = keyof typeof COPY;

export function pageSeo(path: SeoPath, lang: Lang): SeoCopy {
  return COPY[path][lang];
}
