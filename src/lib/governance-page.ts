import type { Lang } from "./content";

export type GovPillarId =
  | "identity"
  | "permissions"
  | "policies"
  | "budgets"
  | "observability"
  | "audit";

export type GovPolicyId = "allow" | "review" | "block";

export type GovPillar = {
  id: GovPillarId;
  tag: string;
  title: string;
  desc: string;
  panel: string;
};

const governance = {
  fr: {
    eyebrow: "04 / GOUVERNANCE",
    crumbs: "Gouvernance",
    titleLine1: "Une gouvernance qui accélère l’adoption —",
    titleAccent: "sans lâcher le contrôle.",
    sub: "Le risque n’est pas le futur rollout. C’est l’IA non gouvernée déjà en cours. Remparia pose les rails dans l’OS — ALLOW / REVIEW / BLOCK, identité, journal — pas un PDF que personne ne lit.",
    ctaPrimary: "Cadrer la gouvernance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    panel: {
      mark: "GOUVERNANCE",
      status: "Contrôle actif",
      mission: "Mission · Remboursement hors politique",
    },
    why: {
      eyebrow: "01 / POURQUOI MAINTENANT",
      titleBefore: "Le risque arrive ",
      titleAccent: "avant la politique.",
      body: "L’adoption n’attend pas la permission. Une personne trouve un outil, en parle à deux collègues — et en un trimestre, la moitié de l’entreprise colle des données réelles dans des logins que l’IT n’a jamais validés.",
      items: [
        {
          title: "Tout le monde construit",
          desc: "L’IA a rendu la construction facile. Les équipes spin-up agents et workflows sans standard partagé — personne ne voit ce qui a été bâti ni ce que ça touche.",
        },
        {
          title: "Données sur logins perso",
          desc: "Le meilleur travail IA se fait souvent sur des comptes gratuits, avec clients et financiers qui transitent par des outils jamais revus pour la vie privée.",
        },
        {
          title: "Cinq personnes, cinq façons",
          desc: "Sans standard, chaque équipe utilise l’IA différemment. La qualité oscille, rien n’est répétable, ce qu’un collègue a compris ne devient jamais la façon de travailler.",
        },
        {
          title: "Pas de porte avant le live",
          desc: "Ça part en production avant qu’on ait vérifié l’accès aux données, la précision ou l’exposition. La direction découvre le système quand quelque chose casse.",
        },
      ],
    },
    problem: {
      eyebrow: "02 / LE CONSTAT",
      titleBefore: "L’autonomie sans règles ",
      titleAccent: "n’est pas de l’IA.",
      sideLead: "Le défi",
      sideRest: "n’est plus de faire agir un agent. C’est de décider ce qu’il peut faire, ce qu’il prépare, et ce qu’il ",
      sideAccent: "ne touche jamais.",
      today: "AUJOURD’HUI",
      withUs: "AVEC REMPARIA",
      rows: [
        { today: "Shadow AI", withUs: "IA permissionnée" },
        { today: "Prompt libre", withUs: "Politiques versionnées" },
        { today: "Accès trop large", withUs: "Zéro privilège par défaut" },
        { today: "Décision opaque", withUs: "Journal opposable" },
        { today: "Gouvernance après coup", withUs: "Contrôle dès la conception" },
      ],
    },
    rails: {
      eyebrow: "03 / LES RAILS",
      titleBefore: "La gouvernance vit dans le travail — ",
      titleAccent: "pas dans un PDF.",
      body: "Remparia installe le contrôle là où l’agent agit : outils, données, portes avant le live. Assez léger pour être suivi. Assez ferme pour faire confiance.",
      items: [
        {
          n: "01",
          title: "Politique d’usage",
          desc: "Qui peut utiliser l’IA, sur quelles données, où — en langage clair, versionné dans l’OS.",
        },
        {
          n: "02",
          title: "Stack et modèles approuvés",
          desc: "Outils et modèles autorisés par métier. Ce qui est hors périmètre pour les données entreprise.",
        },
        {
          n: "03",
          title: "Accès et classification",
          desc: "Données sensibles, RBAC, zéro privilège par défaut. Le mauvais profil ne voit pas le mauvais dossier.",
        },
        {
          n: "04",
          title: "Portes ALLOW / REVIEW / BLOCK",
          desc: "Chaque action d’agent passe une porte avant production. Pas de zone grise.",
        },
        {
          n: "05",
          title: "Audit et monitoring",
          desc: "Chaque action est traçable. La direction voit ce qui tourne et ce que ça touche.",
        },
        {
          n: "06",
          title: "Propriétaire et runbook",
          desc: "Chaque agent a un humain nommé. Le contrôle reste tenu quand les modèles changent.",
        },
      ],
    },
    heatmap: {
      eyebrow: "04 / DÉLÉGATION",
      titleBefore: "Ce que l’agent porte, prépare, ",
      titleAccent: "ou ne touche jamais.",
      body: "Le rouge est un choix, pas une limite technique — nous refusons d’y mettre un agent, même sur demande.",
      items: [
        {
          level: "green" as const,
          title: "L’agent porte",
          desc: "Collecte, relances, contrôles, reporting, qualification — l’humain traite les exceptions.",
        },
        {
          level: "amber" as const,
          title: "L’agent prépare",
          desc: "Propositions, analyses, restitutions : l’humain décide, l’agent assemble.",
        },
        {
          level: "red" as const,
          title: "L’humain, toujours",
          desc: "Prix hors grille, signature, remboursement hors politique, conseil engageant, stratégie.",
        },
      ],
    },
    pillars: {
      eyebrow: "05 / LES PILIERS",
      title: "Le contrôle n’est pas un correctif.",
      body: "Six piliers, un seul plan de contrôle. Rien ne tourne dans l’OS sans identité, politique et journal.",
      items: [
        {
          id: "identity",
          tag: "IDENTITÉ",
          title: "Identité & RBAC",
          desc: "Accès zéro par défaut. Chaque agent a un propriétaire humain nommé.",
          panel: "Owner · Marie D.",
        },
        {
          id: "permissions",
          tag: "PERMISSIONS",
          title: "Permissions agent",
          desc: "Périmètre d’action explicite : outils, dossiers, canaux, plafonds.",
          panel: "Scope · CRM lecture/écriture",
        },
        {
          id: "policies",
          tag: "POLITIQUES",
          title: "Politiques",
          desc: "ALLOW, REVIEW, BLOCK — règles métier et seuils d’arrêt versionnés.",
          panel: "Policy · BLOCK remboursements",
        },
        {
          id: "budgets",
          tag: "BUDGETS",
          title: "Budgets",
          desc: "Coûts modèles, plafonds d’usage, alertes avant dépassement.",
          panel: "Cap · 120 € / jour",
        },
        {
          id: "observability",
          tag: "OBSERVABILITÉ",
          title: "Observabilité",
          desc: "Latence, échecs, escalades, qualité — mesurés en continu.",
          panel: "Health · 98,7 % succès",
        },
        {
          id: "audit",
          tag: "AUDIT",
          title: "Audit opposable",
          desc: "Qui a fait quoi, sur quelle ressource, avec quelle décision humaine.",
          panel: "Log · Order #7781",
        },
      ] satisfies GovPillar[],
    },
    policies: {
      eyebrow: "06 / POLITIQUES",
      titleBefore: "ALLOW · REVIEW · ",
      titleAccent: "BLOCK.",
      body: "Chaque action d’agent tombe dans une de ces trois portes. Aucune zone grise.",
      items: [
        {
          id: "allow" as const,
          tag: "ALLOW",
          title: "Exécuter",
          desc: "Relance dans la cadence, mise à jour CRM, réponse L1 dans la politique.",
          example: "Score lead → CRM update",
        },
        {
          id: "review" as const,
          tag: "REVIEW",
          title: "Préparer et attendre",
          desc: "Offre, geste commercial, publication fiche, reporting client.",
          example: "Draft discount → humain",
        },
        {
          id: "block" as const,
          tag: "BLOCK",
          title: "Ne jamais faire",
          desc: "Prix hors grille, remboursement hors politique, signature, conseil engageant.",
          example: "Refund hors politique → stop",
        },
      ],
    },
    outcomes: {
      eyebrow: "07 / CE QUE ÇA CHANGE",
      titleBefore: "Adoption plus rapide. ",
      titleAccent: "Plus sûre. Plus cohérente.",
      body: "Les équipes viennent parce que l’IA est partout et que personne ne tient le volant. Elles repartent avec une adoption enfin alignée.",
      items: [
        {
          n: "01",
          title: "L’adoption accélère, en sécurité",
          desc: "La gouvernance cesse d’être ce qui freine. Avec des règles claires et une stack approuvée, les gens avancent parce qu’ils savent ce qui est autorisé.",
        },
        {
          n: "02",
          title: "Une entreprise, une façon de travailler",
          desc: "Fini les cinq façons différentes. Même stack, mêmes portes, même qualité — ce qu’un métier apprend devient le standard.",
        },
        {
          n: "03",
          title: "La direction voit tout",
          desc: "Plus de surprises. Chaque agent, chaque action, chaque stop : journalisé, opposable, traçable.",
        },
      ],
    },
    action: {
      eyebrow: "08 / EN ACTION",
      titleBefore: "Une décision engageante. ",
      titleAccent: "Le contrôle s’active.",
      body: "L’Agent Commerce illustre la gouvernance : chaque action a un stop, un journal, un propriétaire.",
      mission: "Lead → relance → remboursement hors politique",
      nodes: [
        { tag: "ALLOW", title: "Score + CRM", desc: "Lead #4821 · cadence OK" },
        { tag: "REVIEW", title: "Geste commercial", desc: "Compte stratégique · attente" },
        { tag: "BLOCK", title: "Remboursement", desc: "Hors politique · stop" },
        { tag: "HUMAIN", title: "Marie D.", desc: "Décision journalisée" },
      ],
      cta: "Voir l’Agent Commerce",
      href: "/solutions/commerce",
    },
    audit: {
      eyebrow: "09 / JOURNAL",
      titleBefore: "Chaque action est ",
      titleAccent: "journalisée.",
      note: "Exemple illustratif — format d’audit, pas une donnée client.",
      headers: ["Heure", "Agent", "Action", "Ressource", "Politique", "Humain"],
      rows: [
        ["14:02:11", "Agent Commerce", "Score lead", "Opportunity #4821", "ALLOW", "—"],
        ["14:02:18", "Agent Commerce", "Update CRM", "Opportunity #4821", "ALLOW", "—"],
        ["14:07:03", "Agent Commerce", "Draft discount", "Quote #1902", "REVIEW", "En attente"],
        ["14:11:44", "CX", "Refuse remboursement", "Order #7781", "BLOCK", "Marie D."],
      ],
    },
    path: {
      eyebrow: "10 / TRAJECTOIRE",
      title: "SIGNAL trouve. Studio construit. L’OS opère. La gouvernance tient.",
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
          href: "/studio",
        },
        {
          n: "03",
          tag: "OS",
          title: "Faire tourner le système",
          desc: "Orchestrer, observer, publier.",
          href: "/solution",
        },
        {
          n: "04",
          tag: "GOUVERNANCE",
          title: "Garder le contrôle",
          desc: "Identité, politiques, audit.",
        },
      ],
    },
    sovereignty: {
      body: "Cloud Remparia, cloud souverain ou on-premise : même gouvernance, même journal, mêmes stops humains. Le mode d’hébergement se choisit ; le contrôle ne se négocie pas.",
      cta: "Voir les modes de déploiement",
      href: "/sovereignty",
    },
    faq: {
      eyebrow: "11 / FAQ",
      title: "Questions fréquentes",
      sub: "Ce que la gouvernance signifie chez Remparia — sans jargon compliance.",
      items: [
        {
          q: "Qu’est-ce que la gouvernance IA chez Remparia ?",
          a: "Les règles, contrôles d’accès et portes de revue qui décident qui peut utiliser l’IA, sur quelles données, et comment ça part en production. Chez Remparia, ça vit dans l’OS — ALLOW / REVIEW / BLOCK — pas dans un PDF.",
        },
        {
          q: "Vous écrivez une politique, ou vous l’installez ?",
          a: "On l’installe. Identité, permissions, politiques versionnées, budgets, journal — dans Remparia OS, avant qu’un agent ne touche un client. SIGNAL cadre ; Studio et l’OS exécutent déjà gouvernés.",
        },
        {
          q: "La gouvernance va-t-elle ralentir les équipes ?",
          a: "L’inverse. L’IA non gouvernée ralentit : qualité inégale, reprise, peur de mal faire. Des règles claires et une stack approuvée laissent avancer plus vite, parce que chacun sait ce qui est autorisé.",
        },
        {
          q: "On a déjà des gens qui utilisent l’IA de leur côté. Trop tard ?",
          a: "C’est exactement le moment. On cadre le shadow AI, on pose les portes, on aligne sur une façon de travailler — sans geler l’adoption.",
        },
        {
          q: "Quelle différence avec la souveraineté ?",
          a: "La gouvernance décide ce que l’agent peut faire. La souveraineté décide où ça tourne. Même OS, mêmes politiques, quel que soit le périmètre d’hébergement.",
        },
        {
          q: "Est-ce un produit séparé de Remparia OS ?",
          a: "Non. C’est la couche de contrôle du même système. Rien ne tourne dans l’OS sans identité, politique et journal.",
        },
      ],
    },
    cta: {
      tag: "GOUVERNANCE",
      title: "Cadrer le contrôle avant le premier agent.",
      text: "On part d’un cas SIGNAL. On compose dans Studio. On publie dans l’OS — déjà gouverné.",
      href: "/demarrer",
      label: "Réserver une session SIGNAL",
    },
  },
  en: {
    eyebrow: "04 / GOVERNANCE",
    crumbs: "Governance",
    titleLine1: "Governance that speeds adoption —",
    titleAccent: "without letting go of control.",
    sub: "The risk is not the future rollout. It is the ungoverned AI already running. Remparia puts the rails in the OS — ALLOW / REVIEW / BLOCK, identity, log — not a PDF nobody reads.",
    ctaPrimary: "Frame governance",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    panel: {
      mark: "GOVERNANCE",
      status: "Control live",
      mission: "Mission · Out-of-policy refund",
    },
    why: {
      eyebrow: "01 / WHY NOW",
      titleBefore: "Risk shows up ",
      titleAccent: "before any policy does.",
      body: "Adoption never waits for permission. One person finds a tool, tells two coworkers — and within a quarter half the company is pasting real data into logins IT never approved.",
      items: [
        {
          title: "Everyone is a builder now",
          desc: "AI made building easy, so everyone is doing it. Teams spin up agents and workflows with no shared standard — no one can see what was built or what it touches.",
        },
        {
          title: "Company data on personal logins",
          desc: "The best AI work often happens on free and personal accounts, with customer and financial data flowing through tools never reviewed for privacy.",
        },
        {
          title: "Five people, five different ways",
          desc: "Without a standard, every team uses AI differently. Output quality swings, nothing is repeatable, and what one person figured out never becomes how the company works.",
        },
        {
          title: "No gate between built and shipped",
          desc: "Things go live before anyone checks data access, accuracy, or compliance exposure. Leadership hears about a system when something breaks.",
        },
      ],
    },
    problem: {
      eyebrow: "02 / THE GAP",
      titleBefore: "Autonomy without rules ",
      titleAccent: "is not AI.",
      sideLead: "The challenge",
      sideRest: "is no longer getting an agent to act. It is deciding what it can do, what it prepares, and what it ",
      sideAccent: "never touches.",
      today: "TODAY",
      withUs: "WITH REMPARIA",
      rows: [
        { today: "Shadow AI", withUs: "Permissioned AI" },
        { today: "Free-form prompt", withUs: "Versioned policies" },
        { today: "Over-broad access", withUs: "Zero privilege by default" },
        { today: "Opaque decision", withUs: "Auditable log" },
        { today: "Governance after the fact", withUs: "Control by design" },
      ],
    },
    rails: {
      eyebrow: "03 / THE RAILS",
      titleBefore: "Governance lives in the work — ",
      titleAccent: "not in a PDF.",
      body: "Remparia installs control where the agent acts: tools, data, gates before go-live. Light enough to follow. Firm enough to trust.",
      items: [
        {
          n: "01",
          title: "Usage policy",
          desc: "Who can use AI, on what data, where — plain language, versioned in the OS.",
        },
        {
          n: "02",
          title: "Approved stack and models",
          desc: "Tools and models sanctioned by job. What is off-limits for company data.",
        },
        {
          n: "03",
          title: "Access and classification",
          desc: "Sensitive data, RBAC, zero privilege by default. The wrong profile never sees the wrong record.",
        },
        {
          n: "04",
          title: "ALLOW / REVIEW / BLOCK gates",
          desc: "Every agent action passes a gate before production. No grey zone.",
        },
        {
          n: "05",
          title: "Audit and monitoring",
          desc: "Every action is traceable. Leadership can see what is running and what it touches.",
        },
        {
          n: "06",
          title: "Owner and runbook",
          desc: "Every agent has a named human. Control holds as models and tools change.",
        },
      ],
    },
    heatmap: {
      eyebrow: "04 / DELEGATION",
      titleBefore: "What the agent carries, prepares, ",
      titleAccent: "or never touches.",
      body: "Red is a choice, not a technical limit — we refuse to put an agent there, even on request.",
      items: [
        {
          level: "green" as const,
          title: "The agent carries",
          desc: "Collection, follow-ups, checks, reporting, qualification — humans handle exceptions.",
        },
        {
          level: "amber" as const,
          title: "The agent prepares",
          desc: "Proposals, analysis, client delivery: humans decide, agents assemble.",
        },
        {
          level: "red" as const,
          title: "Humans, always",
          desc: "Off-grid pricing, signature, out-of-policy refund, binding advice, strategy.",
        },
      ],
    },
    pillars: {
      eyebrow: "05 / PILLARS",
      title: "Control is not a retrofit.",
      body: "Six pillars, one control plane. Nothing runs in the OS without identity, policy and a log.",
      items: [
        {
          id: "identity",
          tag: "IDENTITY",
          title: "Identity & RBAC",
          desc: "Zero access by default. Each agent has a named human owner.",
          panel: "Owner · Marie D.",
        },
        {
          id: "permissions",
          tag: "PERMISSIONS",
          title: "Agent permissions",
          desc: "Explicit action scope: tools, files, channels, caps.",
          panel: "Scope · CRM read/write",
        },
        {
          id: "policies",
          tag: "POLICIES",
          title: "Policies",
          desc: "ALLOW, REVIEW, BLOCK — versioned business rules and stop thresholds.",
          panel: "Policy · BLOCK refunds",
        },
        {
          id: "budgets",
          tag: "BUDGETS",
          title: "Budgets",
          desc: "Model costs, usage caps, alerts before overrun.",
          panel: "Cap · €120 / day",
        },
        {
          id: "observability",
          tag: "OBSERVABILITY",
          title: "Observability",
          desc: "Latency, failures, escalations, quality — measured continuously.",
          panel: "Health · 98.7% success",
        },
        {
          id: "audit",
          tag: "AUDIT",
          title: "Auditable logs",
          desc: "Who did what, on which resource, with which human decision.",
          panel: "Log · Order #7781",
        },
      ] satisfies GovPillar[],
    },
    policies: {
      eyebrow: "06 / POLICIES",
      titleBefore: "ALLOW · REVIEW · ",
      titleAccent: "BLOCK.",
      body: "Every agent action falls into one of these three gates. No grey zone.",
      items: [
        {
          id: "allow" as const,
          tag: "ALLOW",
          title: "Execute",
          desc: "Follow-up in cadence, CRM update, L1 answer inside policy.",
          example: "Score lead → CRM update",
        },
        {
          id: "review" as const,
          tag: "REVIEW",
          title: "Prepare and wait",
          desc: "Offer, goodwill, catalog publish, client reporting.",
          example: "Draft discount → human",
        },
        {
          id: "block" as const,
          tag: "BLOCK",
          title: "Never do",
          desc: "Off-grid pricing, out-of-policy refund, signature, binding advice.",
          example: "Out-of-policy refund → stop",
        },
      ],
    },
    outcomes: {
      eyebrow: "07 / WHAT CHANGES",
      titleBefore: "Adoption faster. ",
      titleAccent: "Safer. More consistent.",
      body: "Companies come because AI is everywhere and no one is holding the wheel. They leave with adoption that is finally aligned.",
      items: [
        {
          n: "01",
          title: "Adoption speeds up, safely",
          desc: "Governance stops being what slows AI down. With clear rules and an approved stack, people move faster because they know what they are allowed to do.",
        },
        {
          n: "02",
          title: "One company, one way of working",
          desc: "The five-different-ways problem is gone. Same stack, same gates, same quality — what one team figures out becomes how the company runs.",
        },
        {
          n: "03",
          title: "Leadership can see everything",
          desc: "No more surprises. Every agent, every action, every stop: logged, auditable, traceable.",
        },
      ],
    },
    action: {
      eyebrow: "08 / IN ACTION",
      titleBefore: "A binding decision. ",
      titleAccent: "Control activates.",
      body: "The Commerce Agent shows governance: every action has a stop, a log, an owner.",
      mission: "Lead → follow-up → out-of-policy refund",
      nodes: [
        { tag: "ALLOW", title: "Score + CRM", desc: "Lead #4821 · cadence OK" },
        { tag: "REVIEW", title: "Commercial gesture", desc: "Strategic account · pending" },
        { tag: "BLOCK", title: "Refund", desc: "Out of policy · stop" },
        { tag: "HUMAN", title: "Marie D.", desc: "Decision logged" },
      ],
      cta: "See the Commerce Agent",
      href: "/solutions/commerce",
    },
    audit: {
      eyebrow: "09 / LOG",
      titleBefore: "Every action is ",
      titleAccent: "logged.",
      note: "Illustrative example — audit format, not client data.",
      headers: ["Time", "Agent", "Action", "Resource", "Policy", "Human"],
      rows: [
        ["14:02:11", "Commerce Agent", "Score lead", "Opportunity #4821", "ALLOW", "—"],
        ["14:02:18", "Commerce Agent", "Update CRM", "Opportunity #4821", "ALLOW", "—"],
        ["14:07:03", "Commerce Agent", "Draft discount", "Quote #1902", "REVIEW", "Pending"],
        ["14:11:44", "CX", "Refuse refund", "Order #7781", "BLOCK", "Marie D."],
      ],
    },
    path: {
      eyebrow: "10 / PATH",
      title: "SIGNAL finds. Studio builds. The OS operates. Governance holds.",
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
          href: "/studio",
        },
        {
          n: "03",
          tag: "OS",
          title: "Run the system",
          desc: "Orchestrate, observe, publish.",
          href: "/solution",
        },
        {
          n: "04",
          tag: "GOVERNANCE",
          title: "Keep control",
          desc: "Identity, policies, audit.",
        },
      ],
    },
    sovereignty: {
      body: "Remparia Cloud, sovereign cloud or on-premise: the same governance, the same log, the same human stops. Hosting is a choice; control is not negotiable.",
      cta: "See deployment modes",
      href: "/sovereignty",
    },
    faq: {
      eyebrow: "11 / FAQ",
      title: "Frequently asked questions",
      sub: "What governance means at Remparia — without compliance jargon.",
      items: [
        {
          q: "What is AI governance at Remparia?",
          a: "The rules, access controls and review gates that decide who can use AI, on what data, and how it ships. At Remparia it lives in the OS — ALLOW / REVIEW / BLOCK — not in a PDF.",
        },
        {
          q: "Do you just write a policy, or actually set it up?",
          a: "We set it up. Identity, permissions, versioned policies, budgets, log — in Remparia OS, before an agent touches a customer. SIGNAL frames; Studio and the OS ship already governed.",
        },
        {
          q: "Will governance slow our team down?",
          a: "The opposite. Ungoverned AI is what slows companies down: inconsistent output, rework, fear of using it wrong. Clear rules and an approved stack let people move faster because they know what they are allowed to do.",
        },
        {
          q: "We already have people using AI on their own. Too late?",
          a: "That is exactly when it matters. We frame shadow AI, put the gates in place, and align on one way of working — without freezing adoption.",
        },
        {
          q: "How is this different from sovereignty?",
          a: "Governance decides what the agent may do. Sovereignty decides where it runs. Same OS, same policies, whatever the hosting perimeter.",
        },
        {
          q: "Is this a separate product from Remparia OS?",
          a: "No. It is the control layer of the same system. Nothing runs in the OS without identity, policy and a log.",
        },
      ],
    },
    cta: {
      tag: "GOVERNANCE",
      title: "Frame control before the first agent.",
      text: "Start from a SIGNAL case. Compose in Studio. Publish to the OS — already governed.",
      href: "/demarrer",
      label: "Book a SIGNAL session",
    },
  },
} as const;

export function governancePage(lang: Lang) {
  return governance[lang];
}
