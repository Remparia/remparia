import type { Lang } from "@/lib/content";

const COPY = {
  fr: {
    badge: "Formation — adoption & transfert",
    hero: {
      titleBefore: "Former vos équipes à ",
      titleAccent: "agir avec l’IA.",
      body: "Pas un cours générique. Vos équipes s’entraînent sur leurs processus, leurs risques et les décisions qu’elles devront réellement prendre.",
      primary: "Construire le parcours",
      primaryHref: "/contact",
      secondary: "Voir le programme",
      secondaryHref: "#parcours",
      imageAlt:
        "Deux professionnels examinent un tableau de décision IA.",
    },
    heroBar: {
      left: "Formation sur vos processus réels",
      right: "ALLOW · REVIEW · BLOCK",
    },
    proof: {
      eyebrow: "Pourquoi former avant le déploiement",
      titleBefore: "L’adoption ne se décrète pas. ",
      titleAccent: "Elle se répète.",
      body: "Une formation utile relie chaque geste à une règle, un responsable et une preuve. C’est ce qui transforme une démonstration en pratique durable.",
      stats: [
        {
          value: "80 %",
          label: "des projets d’automatisation n’atteignent jamais la production",
          source: "Benchmark interne Remparia, 2025",
        },
        {
          value: "3",
          label: "portes de décision répétées sur chaque cas",
          source: "ALLOW / REVIEW / BLOCK",
        },
        {
          value: "30 / 60 / 90",
          label: "jours pour revoir les usages et corriger les écarts",
          source: "Rythme de suivi recommandé",
        },
      ],
    },
    compare: {
      eyebrow: "Le point de bascule",
      titleBefore: "Passer de « je connais l’IA » à ",
      titleAccent: "« je sais quoi faire ».",
      body: "Le parcours part des situations qui créent de l’hésitation : données sensibles, réponse incertaine, exception métier, incident ou changement de procédure.",
      beforeTitle: "Formation générique",
      before: [
        "Des exemples éloignés du travail quotidien",
        "Des principes appris sans répétition",
        "Aucun réflexe commun quand l’agent hésite",
      ],
      afterTitle: "Parcours Remparia",
      after: [
        "Des cas tirés de vos processus réels",
        "Des décisions entraînées avec leurs preuves",
        "Un protocole partagé pour agir et escalader",
      ],
    },
    audiences: {
      eyebrow: "Une même situation, trois responsabilités",
      titleBefore: "Chacun apprend ",
      titleAccent: "sa part du contrôle.",
      body: "Le vocabulaire reste commun. Les exercices et les livrables changent selon la responsabilité de chaque groupe.",
      items: [
        {
          number: "01",
          title: "Métiers",
          body: "Formuler le résultat attendu, reconnaître une exception et reprendre la main au bon moment.",
        },
        {
          number: "02",
          title: "Risque & conformité",
          body: "Relier politique, preuve, journal d’activité et voie d’escalade à un cas concret.",
        },
        {
          number: "03",
          title: "IT & opérations",
          body: "Configurer les droits, surveiller l’exécution et traiter les incidents sans zone grise.",
        },
      ],
    },
    journey: {
      eyebrow: "Le parcours",
      titleBefore: "Comprendre. Décider. ",
      titleAccent: "Répéter. Transférer.",
      body: "Quatre mouvements pour rendre l’usage opérable, puis le laisser entre les mains de vos équipes.",
      steps: [
        {
          number: "01",
          title: "Observer le travail réel",
          body: "On part des tâches, des outils, des exceptions et des décisions déjà présentes dans le processus.",
          output: "Cas d’usage de formation",
        },
        {
          number: "02",
          title: "Tracer les frontières",
          body: "Chaque action est classée ALLOW, REVIEW ou BLOCK avec une raison et un propriétaire.",
          output: "Matrice de décision",
        },
        {
          number: "03",
          title: "Répéter les situations",
          body: "Les participants traitent les cas normaux, les ambiguïtés et les incidents jusqu’à partager les mêmes réflexes.",
          output: "Scénarios d’exercice",
        },
        {
          number: "04",
          title: "Transférer l’exploitation",
          body: "Les supports, règles et routines de suivi sont remis à ceux qui feront vivre le dispositif.",
          output: "Kit de transfert",
        },
      ],
    },
    deliverable: {
      eyebrow: "Ce qui reste après la session",
      titleBefore: "Pas seulement des slides. ",
      titleAccent: "Un système pour continuer.",
      body: "Le parcours se termine par des supports utilisables dans le travail quotidien et une routine claire pour les faire évoluer.",
      list: [
        "Matrice ALLOW / REVIEW / BLOCK",
        "Scénarios métier et corrigés",
        "Runbooks d’incident et d’escalade",
        "Supports adaptés aux rôles",
        "Cadence de revue 30 / 60 / 90 jours",
      ],
      artifact: {
        label: "Extrait de runbook",
        title: "Réponse client — confiance insuffisante",
        rows: [
          { key: "Signal", value: "Source manquante ou contradiction" },
          { key: "Décision", value: "REVIEW" },
          { key: "Responsable", value: "Référent métier" },
          { key: "Preuve", value: "Décision et correction journalisées" },
        ],
      },
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Avant de lancer le parcours",
      items: [
        {
          q: "La formation s’adresse-t-elle aux débutants ?",
          a: "Oui. Le parcours part des décisions du travail quotidien, pas d’un niveau technique. Les exercices sont adaptés au rôle et au contexte de chaque groupe.",
        },
        {
          q: "Faut-il déjà avoir un agent en production ?",
          a: "Non. Nous pouvons former sur un processus candidat, un prototype ou un agent existant. L’essentiel est de disposer d’un cas réel et de ses règles.",
        },
        {
          q: "Peut-on séparer métiers, conformité et IT ?",
          a: "Oui. Chaque groupe peut avoir ses propres ateliers. Un temps commun reste utile pour aligner le vocabulaire, les responsabilités et les escalades.",
        },
        {
          q: "Que livrez-vous à la fin ?",
          a: "Les supports, scénarios, matrices de décision, runbooks et une cadence de revue sont transférés à vos équipes.",
        },
      ],
    },
    final: {
      eyebrow: "Former pour exploiter",
      titleBefore: "Préparez les humains ",
      titleAccent: "avant de déployer les agents.",
      body: "Partons d’un processus réel. Nous construirons le parcours, les exercices et les règles que vos équipes utiliseront vraiment.",
      cta: "Parler de vos équipes",
      href: "/contact",
    },
  },
  en: {
    badge: "Training — adoption & transfer",
    hero: {
      titleBefore: "Train your teams to ",
      titleAccent: "act with AI.",
      body: "Not a generic course. Your teams practise on their processes, their risks and the decisions they will actually need to make.",
      primary: "Build the programme",
      primaryHref: "/contact",
      secondary: "See the journey",
      secondaryHref: "#journey",
      imageAlt: "Two professionals reviewing an AI decision dashboard.",
    },
    heroBar: {
      left: "Training on your real processes",
      right: "ALLOW · REVIEW · BLOCK",
    },
    proof: {
      eyebrow: "Why train before deployment",
      titleBefore: "Adoption cannot be declared. ",
      titleAccent: "It must be rehearsed.",
      body: "Useful training connects every action to a rule, an owner and evidence. That is what turns a demo into a durable practice.",
      stats: [
        {
          value: "80%",
          label: "of automation projects never reach production",
          source: "Remparia internal benchmark, 2025",
        },
        {
          value: "3",
          label: "decision gates repeated on every scenario",
          source: "ALLOW / REVIEW / BLOCK",
        },
        {
          value: "30 / 60 / 90",
          label: "days to review usage and correct drift",
          source: "Recommended review cadence",
        },
      ],
    },
    compare: {
      eyebrow: "The turning point",
      titleBefore: "Move from “I know about AI” to ",
      titleAccent: "“I know what to do.”",
      body: "The programme starts with the situations that create hesitation: sensitive data, uncertain answers, business exceptions, incidents or process changes.",
      beforeTitle: "Generic training",
      before: [
        "Examples disconnected from daily work",
        "Principles learned without rehearsal",
        "No shared reflex when the agent hesitates",
      ],
      afterTitle: "Remparia programme",
      after: [
        "Scenarios drawn from your real processes",
        "Decisions rehearsed with their evidence",
        "A shared protocol to act and escalate",
      ],
    },
    audiences: {
      eyebrow: "One situation, three responsibilities",
      titleBefore: "Everyone learns ",
      titleAccent: "their part of the control.",
      body: "The vocabulary stays shared. Exercises and deliverables change with each group’s responsibility.",
      items: [
        {
          number: "01",
          title: "Business teams",
          body: "State the expected result, spot an exception and take control back at the right moment.",
        },
        {
          number: "02",
          title: "Risk & compliance",
          body: "Connect policy, evidence, activity logs and escalation paths to a concrete case.",
        },
        {
          number: "03",
          title: "IT & operations",
          body: "Configure permissions, monitor execution and handle incidents without grey areas.",
        },
      ],
    },
    journey: {
      eyebrow: "The journey",
      titleBefore: "Understand. Decide. ",
      titleAccent: "Rehearse. Transfer.",
      body: "Four movements to make usage operational, then leave it in your teams’ hands.",
      steps: [
        {
          number: "01",
          title: "Observe real work",
          body: "We start from tasks, tools, exceptions and decisions already present in the process.",
          output: "Training use cases",
        },
        {
          number: "02",
          title: "Draw the boundaries",
          body: "Every action is classified ALLOW, REVIEW or BLOCK with a reason and an owner.",
          output: "Decision matrix",
        },
        {
          number: "03",
          title: "Rehearse situations",
          body: "Participants work through normal cases, ambiguity and incidents until they share the same reflexes.",
          output: "Exercise scenarios",
        },
        {
          number: "04",
          title: "Transfer operations",
          body: "Materials, rules and review routines are handed to the people who will keep the programme alive.",
          output: "Transfer kit",
        },
      ],
    },
    deliverable: {
      eyebrow: "What remains after the session",
      titleBefore: "Not just slides. ",
      titleAccent: "A system to continue.",
      body: "The programme ends with materials usable in daily work and a clear routine for evolving them.",
      list: [
        "ALLOW / REVIEW / BLOCK matrix",
        "Business scenarios and answer keys",
        "Incident and escalation runbooks",
        "Role-specific materials",
        "30 / 60 / 90-day review cadence",
      ],
      artifact: {
        label: "Runbook excerpt",
        title: "Customer reply — insufficient confidence",
        rows: [
          { key: "Signal", value: "Missing source or contradiction" },
          { key: "Decision", value: "REVIEW" },
          { key: "Owner", value: "Business lead" },
          { key: "Evidence", value: "Decision and correction logged" },
        ],
      },
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Before starting the programme",
      items: [
        {
          q: "Is the training suitable for beginners?",
          a: "Yes. The programme starts from everyday work decisions, not technical proficiency. Exercises are adapted to each group’s role and context.",
        },
        {
          q: "Do we need an agent in production already?",
          a: "No. We can train around a candidate process, a prototype or an existing agent. What matters is having a real case and its rules.",
        },
        {
          q: "Can business, compliance and IT be separated?",
          a: "Yes. Each group can have its own workshops. A shared session remains useful to align vocabulary, responsibilities and escalation paths.",
        },
        {
          q: "What do you deliver at the end?",
          a: "Materials, scenarios, decision matrices, runbooks and a review cadence are transferred to your teams.",
        },
      ],
    },
    final: {
      eyebrow: "Train to operate",
      titleBefore: "Prepare the humans ",
      titleAccent: "before deploying the agents.",
      body: "Let’s start from a real process. We will build the programme, exercises and rules your teams will actually use.",
      cta: "Discuss your teams",
      href: "/contact",
    },
  },
} as const;

export function formationPage(lang: Lang) {
  return COPY[lang];
}
