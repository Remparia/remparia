import type { Lang } from "./content";

export const GOVERNANCE_PAGE = {
  fr: {
    eyebrow: "PLATFORM / GOUVERNANCE",
    titleBefore: "La mise en production ",
    titleAccent: "commence par le contrôle.",
    sub: "Identité, permissions, politiques ALLOW / REVIEW / BLOCK, budgets, observabilité et audit opposable — avant que l’agent ne touche un client.",
    ctaPrimary: "Cadrer la gouvernance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    heroIndex: "01 / GOUVERNANCE",
    heatmap: {
      eyebrow: "02 / DÉLÉGATION",
      title: "Ce que l’agent porte, prépare, ou ne touche jamais",
      intro:
        "Le rouge est un choix, pas une limite technique — nous refusons d’y mettre un agent, même sur demande.",
      items: [
        {
          level: "green" as const,
          title: "L’agent porte",
          desc: "Collecte, relances, contrôles, reporting, qualification — l’humain traite les exceptions.",
        },
        {
          level: "amber" as const,
          title: "L’agent prépare",
          desc: "Propositions, analyses, restitutions : l’humain fait, l’agent assemble.",
        },
        {
          level: "red" as const,
          title: "L’humain, toujours",
          desc: "Prix hors grille, signature, remboursement hors politique, conseil engageant, stratégie.",
        },
      ],
    },
    pillars: {
      eyebrow: "03 / PILIERS",
      title: "Le contrôle n’est pas un correctif",
      items: [
        {
          title: "Identité & RBAC",
          desc: "Accès zéro par défaut. Chaque agent a un propriétaire humain nommé.",
        },
        {
          title: "Permissions agent",
          desc: "Périmètre d’action explicite : outils, dossiers, canaux, plafonds.",
        },
        {
          title: "Politiques",
          desc: "ALLOW, REVIEW, BLOCK — règles métier et seuils d’arrêt versionnés.",
        },
        {
          title: "Budgets",
          desc: "Coûts modèles, plafonds d’usage, alertes avant dépassement.",
        },
        {
          title: "Observabilité",
          desc: "Latence, échecs, escalades, qualité — mesurés en continu.",
        },
        {
          title: "Audit opposable",
          desc: "Qui a fait quoi, sur quelle ressource, avec quelle décision humaine.",
        },
      ],
    },
    policies: {
      eyebrow: "04 / POLITIQUES",
      title: "ALLOW · REVIEW · BLOCK",
      items: [
        {
          tag: "ALLOW",
          title: "Exécuter",
          desc: "Relance dans la cadence, mise à jour CRM, réponse L1 dans la politique.",
        },
        {
          tag: "REVIEW",
          title: "Préparer et attendre",
          desc: "Offre, geste commercial, publication fiche, reporting client.",
        },
        {
          tag: "BLOCK",
          title: "Ne jamais faire",
          desc: "Prix hors grille, remboursement hors politique, signature, conseil engageant.",
        },
      ],
    },
    scenario: {
      eyebrow: "05 / COMMERCE",
      title: "Un lead, un remboursement, une relance",
      body: "L’Agent Commerce illustre la gouvernance : chaque action a un stop, un journal, un propriétaire.",
      steps: [
        "Lead entrant → ALLOW : scorer, écrire le CRM, proposer la prochaine action.",
        "Relance J+3 → ALLOW si cadence respectée ; REVIEW si compte stratégique.",
        "Demande de remboursement hors politique → BLOCK agent, escalade CX, décision journalisée.",
        "Remparia OS conserve la trace : agent, ressource, politique, humain, horodatage.",
      ],
    },
    audit: {
      eyebrow: "06 / JOURNAL",
      title: "Chaque action est journalisée",
      note: "Exemple illustratif — format d’audit, pas une donnée client.",
      headers: ["Heure", "Agent", "Action", "Ressource", "Politique", "Humain"],
      rows: [
        ["14:02:11", "Agent Commerce", "Score lead", "Opportunity #4821", "ALLOW", "—"],
        ["14:02:18", "Agent Commerce", "Update CRM", "Opportunity #4821", "ALLOW", "—"],
        ["14:07:03", "Agent Commerce", "Draft discount", "Quote #1902", "REVIEW", "En attente"],
        ["14:11:44", "CX", "Refuse remboursement", "Order #7781", "BLOCK", "Marie D."],
      ],
    },
    sovereignty: {
      eyebrow: "07 / DÉPLOIEMENT",
      title: "La souveraineté est un mode, pas le produit",
      body: "Cloud Remparia, cloud souverain ou on-premise : même gouvernance, même journal, mêmes stops humains. Le mode d’hébergement se choisit ; le contrôle ne se négocie pas.",
      cta: "Voir les modes de déploiement",
      href: "/sovereignty",
    },
    finalCta: "Cadrer la gouvernance",
  },
  en: {
    eyebrow: "PLATFORM / GOVERNANCE",
    titleBefore: "Production starts ",
    titleAccent: "with control.",
    sub: "Identity, permissions, ALLOW / REVIEW / BLOCK policies, budgets, observability and auditable logs — before the agent touches a customer.",
    ctaPrimary: "Frame governance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    heroIndex: "01 / GOVERNANCE",
    heatmap: {
      eyebrow: "02 / DELEGATION",
      title: "What the agent carries, prepares, or never touches",
      intro:
        "Red is a choice, not a technical limit — we refuse to put an agent there, even on request.",
      items: [
        {
          level: "green" as const,
          title: "The agent carries",
          desc: "Collection, follow-ups, checks, reporting, qualification — humans handle exceptions.",
        },
        {
          level: "amber" as const,
          title: "The agent prepares",
          desc: "Proposals, analysis, client delivery: humans do, agents assemble.",
        },
        {
          level: "red" as const,
          title: "Humans, always",
          desc: "Off-grid pricing, signature, out-of-policy refund, binding advice, strategy.",
        },
      ],
    },
    pillars: {
      eyebrow: "03 / PILLARS",
      title: "Control is not a retrofit",
      items: [
        {
          title: "Identity & RBAC",
          desc: "Zero access by default. Each agent has a named human owner.",
        },
        {
          title: "Agent permissions",
          desc: "Explicit action scope: tools, files, channels, caps.",
        },
        {
          title: "Policies",
          desc: "ALLOW, REVIEW, BLOCK — versioned business rules and stop thresholds.",
        },
        {
          title: "Budgets",
          desc: "Model costs, usage caps, alerts before overrun.",
        },
        {
          title: "Observability",
          desc: "Latency, failures, escalations, quality — measured continuously.",
        },
        {
          title: "Auditable logs",
          desc: "Who did what, on which resource, with which human decision.",
        },
      ],
    },
    policies: {
      eyebrow: "04 / POLICIES",
      title: "ALLOW · REVIEW · BLOCK",
      items: [
        {
          tag: "ALLOW",
          title: "Execute",
          desc: "Follow-up in cadence, CRM update, L1 answer inside policy.",
        },
        {
          tag: "REVIEW",
          title: "Prepare and wait",
          desc: "Offer, goodwill, catalog publish, client reporting.",
        },
        {
          tag: "BLOCK",
          title: "Never do",
          desc: "Off-grid pricing, out-of-policy refund, signature, binding advice.",
        },
      ],
    },
    scenario: {
      eyebrow: "05 / COMMERCE",
      title: "A lead, a refund, a follow-up",
      body: "The Commerce Agent shows governance: every action has a stop, a log, an owner.",
      steps: [
        "Inbound lead → ALLOW: score, write CRM, propose next action.",
        "Day-3 follow-up → ALLOW if cadence holds; REVIEW on a strategic account.",
        "Out-of-policy refund → BLOCK the agent, escalate to CX, log the decision.",
        "Remparia OS keeps the trail: agent, resource, policy, human, timestamp.",
      ],
    },
    audit: {
      eyebrow: "06 / LOG",
      title: "Every action is logged",
      note: "Illustrative example — audit format, not client data.",
      headers: ["Time", "Agent", "Action", "Resource", "Policy", "Human"],
      rows: [
        ["14:02:11", "Commerce Agent", "Score lead", "Opportunity #4821", "ALLOW", "—"],
        ["14:02:18", "Commerce Agent", "Update CRM", "Opportunity #4821", "ALLOW", "—"],
        ["14:07:03", "Commerce Agent", "Draft discount", "Quote #1902", "REVIEW", "Pending"],
        ["14:11:44", "CX", "Refuse refund", "Order #7781", "BLOCK", "Marie D."],
      ],
    },
    sovereignty: {
      eyebrow: "07 / DEPLOYMENT",
      title: "Sovereignty is a mode, not the product",
      body: "Remparia Cloud, sovereign cloud or on-premise: the same governance, the same log, the same human stops. Hosting is a choice; control is not negotiable.",
      cta: "See deployment modes",
      href: "/sovereignty",
    },
    finalCta: "Frame governance",
  },
} as const;

export function governancePage(lang: Lang) {
  return GOVERNANCE_PAGE[lang];
}
