import type { Lang } from "./content";

export type SignalMetric = {
  id: string;
  label: string;
  valueLabel: string;
  /** 0–100 for bar / radar */
  score: number;
  icon: "gear" | "db" | "repeat" | "shield" | "value";
};

export type SignalJourneyStep = {
  id: string;
  letter: string;
  title: string;
  desc: string;
  deliverable: string;
  artifacts: string;
  timeline: string;
};

export type SignalOpportunity = {
  name: string;
  impact: number;
  feasibility: number;
  value: 1 | 2 | 3;
  priority: number;
};

export const SIGNAL_PAGE = {
  fr: {
    badge: "SIGNAL",
    titleLead: "Arrêtez de deviner ",
    titleAccent1: "où l’IA s’insère.",
    titleMid: " Trouvez où elle ",
    titleAccent2: "crée de la valeur.",
    sub: "SIGNAL est un moteur de découverte d’opportunités IA. Nous scannons vos processus, données et opérations pour révéler où l’IA crée une valeur business mesurable.",
    ctaPrimary: "Lancer votre scan SIGNAL",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir comment ça marche",
    ctaSecondaryHref: "#protocol",
    radar: {
      company: "Votre entreprise",
      processes: "Processus",
      data: "Données",
      people: "Personnes",
      systems: "Systèmes",
      core: "SIGNAL",
    },
    results: {
      title: "Les résultats SIGNAL",
      sub: "Nous analysons. Nous scorons. Nous classons. Vous décidez.",
    },
    metrics: [
      {
        id: "process",
        label: "Efficacité processus",
        valueLabel: "87%",
        score: 87,
        icon: "gear",
      },
      {
        id: "data",
        label: "Levier data",
        valueLabel: "74%",
        score: 74,
        icon: "db",
      },
      {
        id: "repetition",
        label: "Niveau de répétition",
        valueLabel: "91%",
        score: 91,
        icon: "repeat",
      },
      {
        id: "risk",
        label: "Réduction du risque",
        valueLabel: "32%",
        score: 32,
        icon: "shield",
      },
      {
        id: "value",
        label: "Valeur business",
        valueLabel: "€€€ Élevée",
        score: 92,
        icon: "value",
      },
    ] satisfies SignalMetric[],
    map: {
      title: "Carte d’opportunités IA",
      axes: [
        { label: "Valeur", detail: "Élevée" },
        { label: "Processus", detail: "87%" },
        { label: "Données", detail: "74%" },
        { label: "Répétition", detail: "91%" },
        { label: "Risque", detail: "32%" },
      ],
      /** radar scores in axis order above (0–1) */
      scores: [0.92, 0.87, 0.74, 0.91, 0.32],
    },
    journey: {
      id: "protocol",
      title: "Le protocole SIGNAL — six étapes",
      sub: "Chaque étape produit un livrable signé avant de passer à la suivante. Rien n’est automatisé sans avoir été observé.",
      labels: {
        deliverable: "Livrable",
        artifacts: "Artefacts",
        timeline: "Calendrier",
      },
      steps: [
        {
          id: "sonder",
          letter: "S",
          title: "Sonder",
          desc: "Observer le travail réel, au plus près des équipes et des exceptions.",
          deliverable: "Cartographie processus et heatmap de charge",
          timeline: "Semaines 1–2",
          artifacts: "Note de cadrage terrain, registre des exceptions",
        },
        {
          id: "identifier",
          letter: "I",
          title: "Identifier",
          desc: "Prioriser les cas d’usage par impact, faisabilité et risque.",
          deliverable: "Short-list ROI / risque validée",
          timeline: "Semaine 2–3",
          artifacts: "Matrice impact-faisabilité, backlog priorisé",
        },
        {
          id: "gouverner",
          letter: "G",
          title: "Gouverner",
          desc: "Définir les données, les droits, la supervision et la traçabilité.",
          deliverable: "Charte de gouvernance et architecture cible",
          timeline: "Semaines 3–4",
          artifacts: "Registre finalités, matrice droits, schéma d’architecture",
        },
        {
          id: "normaliser",
          letter: "N",
          title: "Normaliser",
          desc: "Installer le socle, les sources autorisées et le routage des modèles.",
          deliverable: "Socle technique et sources autorisées",
          timeline: "Semaines 4–6",
          artifacts: "Pipeline RAG, politique modèles, environnements",
        },
        {
          id: "automatiser",
          letter: "A",
          title: "Automatiser",
          desc: "Déployer les agents dans vos outils avec escalade humaine.",
          deliverable: "Agent(s) en production supervisée",
          timeline: "Semaines 6–10",
          artifacts: "Intégrations SI, règles métier, monitoring",
        },
        {
          id: "liberer",
          letter: "L",
          title: "Libérer",
          desc: "Mesurer les gains, former les équipes et transférer.",
          deliverable: "Bilan gains et plan d’autonomie",
          timeline: "Semaines 10–12+",
          artifacts: "Tableau de bord, documentation, sessions de transfert",
        },
      ] satisfies SignalJourneyStep[],
    },
    deliverable: {
      eyebrow: "Livrable",
      titleBefore: "Carte d’opportunités IA. ",
      titleAccent: "Priorisée. Scorée. Prête à construire.",
      body: "Un livrable clair qui montre où l’IA crée de la valeur — classé par impact, faisabilité et ROI.",
      sampleCta: "Voir un rapport type",
      sampleHref: "/contact",
      bookTitle: "AI Opportunity Map",
      bookSub: "SIGNAL · Remparia",
      tableTitle: "Classement des opportunités",
      columns: {
        opportunity: "Opportunité",
        impact: "Impact",
        feasibility: "Faisabilité",
        value: "Valeur",
        priority: "Priorité",
      },
      rows: [
        {
          name: "Qualification de leads",
          impact: 4,
          feasibility: 4,
          value: 2,
          priority: 1,
        },
        {
          name: "Traitement documentaire",
          impact: 5,
          feasibility: 5,
          value: 3,
          priority: 2,
        },
        {
          name: "Support client N1",
          impact: 4,
          feasibility: 3,
          value: 2,
          priority: 3,
        },
        {
          name: "Reporting opérations",
          impact: 3,
          feasibility: 4,
          value: 2,
          priority: 4,
        },
        {
          name: "Contrôle de conformité",
          impact: 5,
          feasibility: 3,
          value: 3,
          priority: 5,
        },
      ] satisfies SignalOpportunity[],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions sur la méthodologie SIGNAL",
      sub: "Les réponses aux questions les plus fréquentes avant de lancer votre scan.",
      items: [
        {
          q: "Qu’est-ce que SIGNAL, concrètement ?",
          a: "SIGNAL est la méthodologie Remparia pour découvrir où l’IA crée de la valeur dans votre organisation. Nous observons vos processus, données, personnes et systèmes, puis produisons une carte d’opportunités priorisée — pas une liste de gadgets IA.",
        },
        {
          q: "En quoi est-ce différent d’un audit IA ou d’une POC ?",
          a: "Un audit catalogue des outils ; une POC teste une idée isolée. SIGNAL part du travail réel sur le terrain, score chaque opportunité (impact, faisabilité, risque, ROI) et livre une feuille de route actionnable. Rien n’est automatisé avant d’avoir été observé et validé.",
        },
        {
          q: "Combien de temps dure un scan SIGNAL ?",
          a: "Le protocole complet s’étale sur 10 à 12 semaines selon la complexité : observation terrain (S–I), gouvernance et socle (G–N), puis automatisation supervisée et transfert (A–L). Chaque étape produit un livrable signé avant de passer à la suivante.",
        },
        {
          q: "Qui doit être impliqué côté client ?",
          a: "Un sponsor direction, un référent métier par processus clé, et les équipes opérationnelles pour les ateliers terrain. Pas besoin d’une équipe data dédiée au départ — nous adaptons le rythme à votre organisation.",
        },
        {
          q: "Quels livrables recevons-nous ?",
          a: "Cartographie processus, matrice impact-faisabilité, charte de gouvernance, architecture cible, agents en production supervisée et tableau de bord de gains. Le livrable central est la carte d’opportunités IA : priorisée, scorée, prête à construire.",
        },
        {
          q: "Que se passe-t-il après SIGNAL ?",
          a: "Vous disposez d’une roadmap claire pour déployer l’IA dans Remparia OS ou avec vos équipes internes. Nous pouvons accompagner l’exécution, transférer les compétences, ou vous laisser opérer en autonomie selon votre choix.",
        },
        {
          q: "La méthodologie convient-elle à notre taille d’entreprise ?",
          a: "SIGNAL s’adapte aux PME comme aux groupes multi-sites. L’échelle change (nombre de processus scannés, profondeur terrain), mais la logique reste la même : observer, prioriser, gouverner, puis automatiser avec escalade humaine.",
        },
      ],
    },
    final: {
      title: "Prêt à découvrir vos opportunités IA ?",
      body: "Lançons un scan SIGNAL et construisons votre carte d’opportunités IA.",
      cta: "Réserver votre scan SIGNAL",
      href: "/demarrer",
    },
  },
  en: {
    badge: "SIGNAL",
    titleLead: "Stop guessing ",
    titleAccent1: "where AI fits.",
    titleMid: " Find where it ",
    titleAccent2: "creates value.",
    sub: "SIGNAL is an AI opportunity discovery engine. We scan your processes, data and operations to reveal where AI creates measurable business value.",
    ctaPrimary: "Start your SIGNAL Scan",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See how it works",
    ctaSecondaryHref: "#protocol",
    radar: {
      company: "Your company",
      processes: "Processes",
      data: "Data",
      people: "People",
      systems: "Systems",
      core: "SIGNAL",
    },
    results: {
      title: "The SIGNAL results",
      sub: "We analyse. We score. We rank. You decide.",
    },
    metrics: [
      {
        id: "process",
        label: "Process Efficiency",
        valueLabel: "87%",
        score: 87,
        icon: "gear",
      },
      {
        id: "data",
        label: "Data Leverage",
        valueLabel: "74%",
        score: 74,
        icon: "db",
      },
      {
        id: "repetition",
        label: "Repetition Level",
        valueLabel: "91%",
        score: 91,
        icon: "repeat",
      },
      {
        id: "risk",
        label: "Risk Reduction",
        valueLabel: "32%",
        score: 32,
        icon: "shield",
      },
      {
        id: "value",
        label: "Business Value",
        valueLabel: "€€€ High",
        score: 92,
        icon: "value",
      },
    ] satisfies SignalMetric[],
    map: {
      title: "AI Opportunity Map",
      axes: [
        { label: "Value", detail: "High" },
        { label: "Process", detail: "87%" },
        { label: "Data", detail: "74%" },
        { label: "Repetition", detail: "91%" },
        { label: "Risk", detail: "32%" },
      ],
      scores: [0.92, 0.87, 0.74, 0.91, 0.32],
    },
    journey: {
      id: "protocol",
      title: "The SIGNAL protocol — six stages",
      sub: "Each stage produces a signed deliverable before the next. Nothing is automated before observation.",
      labels: {
        deliverable: "Deliverable",
        artifacts: "Artifacts",
        timeline: "Timeline",
      },
      steps: [
        {
          id: "study",
          letter: "S",
          title: "Study",
          desc: "Observe real work, close to teams and operational exceptions.",
          deliverable: "Process map and workload heatmap",
          timeline: "Weeks 1–2",
          artifacts: "Field scoping note, exception register",
        },
        {
          id: "identify",
          letter: "I",
          title: "Identify",
          desc: "Prioritize use cases by impact, feasibility and risk.",
          deliverable: "Validated ROI / risk short-list",
          timeline: "Weeks 2–3",
          artifacts: "Impact-feasibility matrix, prioritized backlog",
        },
        {
          id: "govern",
          letter: "G",
          title: "Govern",
          desc: "Define data, rights, supervision and traceability.",
          deliverable: "Governance charter and target architecture",
          timeline: "Weeks 3–4",
          artifacts: "Purpose register, rights matrix, architecture diagram",
        },
        {
          id: "normalize",
          letter: "N",
          title: "Normalize",
          desc: "Install the foundation, approved sources and model routing.",
          deliverable: "Technical foundation and approved sources",
          timeline: "Weeks 4–6",
          artifacts: "RAG pipeline, model policy, environments",
        },
        {
          id: "automate",
          letter: "A",
          title: "Automate",
          desc: "Deploy agents inside your tools with human escalation.",
          deliverable: "Agent(s) in supervised production",
          timeline: "Weeks 6–10",
          artifacts: "System integrations, business rules, monitoring",
        },
        {
          id: "liberate",
          letter: "L",
          title: "Liberate",
          desc: "Measure outcomes, train teams and transfer skills.",
          deliverable: "Gain report and autonomy plan",
          timeline: "Weeks 10–12+",
          artifacts: "Dashboard, documentation, transfer sessions",
        },
      ] satisfies SignalJourneyStep[],
    },
    deliverable: {
      eyebrow: "Deliverable",
      titleBefore: "AI Opportunity Map. ",
      titleAccent: "Prioritized. Scored. Ready to build.",
      body: "A clear deliverable that shows where AI creates value — ranked by impact, feasibility and ROI.",
      sampleCta: "See a sample report",
      sampleHref: "/contact",
      bookTitle: "AI Opportunity Map",
      bookSub: "SIGNAL · Remparia",
      tableTitle: "Opportunity ranking",
      columns: {
        opportunity: "Opportunity",
        impact: "Impact",
        feasibility: "Feasibility",
        value: "Value",
        priority: "Priority",
      },
      rows: [
        {
          name: "Lead Qualification",
          impact: 4,
          feasibility: 4,
          value: 2,
          priority: 1,
        },
        {
          name: "Document Processing",
          impact: 5,
          feasibility: 5,
          value: 3,
          priority: 2,
        },
        {
          name: "Customer Support L1",
          impact: 4,
          feasibility: 3,
          value: 2,
          priority: 3,
        },
        {
          name: "Operations Reporting",
          impact: 3,
          feasibility: 4,
          value: 2,
          priority: 4,
        },
        {
          name: "Compliance Control",
          impact: 5,
          feasibility: 3,
          value: 3,
          priority: 5,
        },
      ] satisfies SignalOpportunity[],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions about the SIGNAL methodology",
      sub: "Answers to the most common questions before you start your scan.",
      items: [
        {
          q: "What is SIGNAL, exactly?",
          a: "SIGNAL is Remparia’s methodology for discovering where AI creates value in your organization. We observe your processes, data, people and systems, then deliver a prioritized opportunity map — not a list of AI gadgets.",
        },
        {
          q: "How is this different from an AI audit or a PoC?",
          a: "An audit catalogs tools; a PoC tests an isolated idea. SIGNAL starts from real work on the ground, scores each opportunity (impact, feasibility, risk, ROI) and delivers an actionable roadmap. Nothing is automated before it has been observed and validated.",
        },
        {
          q: "How long does a SIGNAL scan take?",
          a: "The full protocol runs 10 to 12 weeks depending on complexity: field observation (S–I), governance and foundation (G–N), then supervised automation and transfer (A–L). Each stage produces a signed deliverable before moving on.",
        },
        {
          q: "Who needs to be involved on the client side?",
          a: "An executive sponsor, a business lead per key process, and operational teams for field workshops. You don’t need a dedicated data team upfront — we adapt the pace to your organization.",
        },
        {
          q: "What deliverables do we receive?",
          a: "Process map, impact-feasibility matrix, governance charter, target architecture, agents in supervised production and a gains dashboard. The central deliverable is the AI Opportunity Map: prioritized, scored, ready to build.",
        },
        {
          q: "What happens after SIGNAL?",
          a: "You have a clear roadmap to deploy AI in Remparia OS or with your internal teams. We can support execution, transfer skills, or let you operate autonomously — your choice.",
        },
        {
          q: "Is the methodology right for our company size?",
          a: "SIGNAL scales from SMBs to multi-site groups. The scope changes (number of processes scanned, field depth), but the logic stays the same: observe, prioritize, govern, then automate with human escalation.",
        },
      ],
    },
    final: {
      title: "Ready to discover your AI opportunities?",
      body: "Let's run a SIGNAL Scan and build your AI Opportunity Map.",
      cta: "Book your SIGNAL Scan",
      href: "/demarrer",
    },
  },
} as const;

export function signalPage(lang: Lang) {
  return SIGNAL_PAGE[lang];
}
