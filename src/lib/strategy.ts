import type { Lang } from "./content";

/** Contenu aligné sur la stratégie Méthode + Remparia OS. */

export const SOLUTION = {
  fr: {
    eyebrow: "SOLUTION",
    title: "Remparia OS — le système d’exploitation IA de votre entreprise",
    sub: "Un plan de contrôle unique qui orchestre une équipe d’agents spécialisés, route chaque tâche vers le bon modèle, s’appuie sur vos données, sous votre gouvernance, sur une infrastructure souveraine.",
    problemTitle: "Le problème qu’il règle",
    problemBody:
      "L’IA en entreprise aujourd’hui : des abonnements dispersés, aucune mémoire commune, aucune trace, des données qui partent on ne sait où. Il manque le système d’exploitation.",
    capsTitle: "Ce que votre entreprise devient capable de faire",
    caps: [
      {
        tag: "01",
        title: "Déléguer du travail à une équipe d’agents",
        desc: "Confier un objectif, recevoir un résultat supervisé. Agents spécialisés par fonction, avec escalade et validation humaines.",
      },
      {
        tag: "02",
        title: "Travailler avec l’IA depuis un point unique",
        desc: "Web, mobile, API. Partage avec permissions cadrées.",
      },
      {
        tag: "03",
        title: "Mobiliser le bon modèle au bon moment",
        desc: "Routage par coût, qualité et sensibilité. Multi-fournisseurs, réversible. Les données sensibles restent en local.",
      },
      {
        tag: "04",
        title: "Capitaliser sa connaissance",
        desc: "Vos règles et exceptions encodées et appliquées. Chacun ne retrouve que ce qu’il a le droit de voir.",
      },
      {
        tag: "05",
        title: "Connecter l’IA à vos outils existants",
        desc: "Sans les remplacer. L’OS s’intègre à ce que vos équipes utilisent déjà.",
      },
      {
        tag: "06",
        title: "Gouverner ses agents",
        desc: "Chaque agent a un propriétaire humain nommé. Accès zéro par défaut. Audit opposable. Budgets maîtrisés.",
      },
      {
        tag: "07",
        title: "Rester souverain",
        desc: "Hébergement choisi FR/UE ou on-premise. Survivre aux pannes et aux départs.",
      },
    ],
    teamTitle: "L’équipe d’agents",
    teamBody:
      "Des agents spécialisés persistants par fonction — recherche, commercial, juridique, finance, RH, support IT, achats — orchestrés par un « chef de cabinet » IA qui décompose les demandes, affecte au bon agent, surveille et remonte les décisions à l’humain. Chaque agent est configuré avec vos règles métier : celui d’un notaire et celui d’un expert-comptable partagent le socle, pas les compétences.",
    heatmapTitle: "Ce que l’agent porte, prépare, ou ne touche jamais",
    heatmapIntro:
      "Le rouge est un choix, pas une limite technique — nous refusons d’y mettre un agent, même sur demande. C’est « l’humain décide, l’agent exécute » rendu vérifiable.",
    heatmap: [
      {
        level: "green" as const,
        title: "L’agent porte la charge",
        desc: "L’humain traite les exceptions : collecte, contrôle, veille, facturation, reporting.",
      },
      {
        level: "amber" as const,
        title: "L’agent prépare",
        desc: "L’humain fait : propositions, analyse, restitution client.",
      },
      {
        level: "red" as const,
        title: "L’humain, toujours",
        desc: "Conseil et décision engageante, validation et signature, déontologie, choix stratégiques.",
      },
    ],
    layersTitle: "Les couches de l’OS",
    layers: [
      {
        tag: "01",
        title: "Votre interface",
        desc: "Un point d’entrée unique, web et mobile, sans compétence technique requise.",
      },
      {
        tag: "02",
        title: "Vos agents",
        desc: "L’équipe d’exécutants spécialisés, orchestrée.",
      },
      {
        tag: "03",
        title: "L’intelligence",
        desc: "Le bon modèle pour chaque tâche, au meilleur coût — et jamais un modèle cloud pour une donnée classée locale.",
      },
      {
        tag: "04",
        title: "Votre mémoire et vos données",
        desc: "L’OS travaille sur ce que vous savez, s’en souvient, et n’apprend qu’avec validation humaine.",
      },
      {
        tag: "05",
        title: "La gouvernance et l’infrastructure",
        desc: "Qui a le droit de faire quoi, tout est journalisé, hébergement souverain.",
      },
    ],
    securityTitle: "Les garanties de sécurité",
    security: [
      "Accès zéro par défaut",
      "Les agents ne détiennent jamais un mot de passe",
      "Chaque consultation est journalisée, exploitable par un auditeur",
      "Le code s’exécute en environnement cloisonné",
      "Un utilisateur ne retrouve via l’IA que ce qu’il voit déjà dans ses outils",
    ],
    principlesTitle: "Les quatre principes",
    principles: [
      "Souveraineté totale",
      "Choix & liberté — multi-modèles, multi-cloud, pas d’enfermement",
      "Contrôle & gouvernance",
      "Performance & intelligence",
    ],
    dayTitle: "Une journée avec l’OS",
    day: [
      {
        tag: "MATIN",
        title: "Prêt avant vous",
        desc: "L’OS a préparé les dossiers, relancé, trié ; les exceptions attendent, hiérarchisées.",
      },
      {
        tag: "JOURNÉE",
        title: "Le bon agent, chaque fois",
        desc: "Chaque demande part au bon agent, chaque action est tracée ; ce qui engage une décision remonte, avec le dossier prêt.",
      },
      {
        tag: "SOIR",
        title: "Compte rendu",
        desc: "Ce qui a été fait, et ce qui attend une décision humaine.",
      },
    ],
    notTitle: "Ce que ce n’est pas",
    notItems: [
      "Pas une licence à l’usage — pas de facturation aux tokens.",
      "Pas une technologie propriétaire fermée — le socle repose sur des briques open source standard : si nous disparaissons, votre système tourne.",
      "Pas une solution livrée sans vous — vos règles, votre configuration, votre documentation sont remises ; votre codex métier vous appartient, versionné.",
    ],
    deployTitle: "Offres de déploiement",
    deploy: [
      {
        title: "Pilote de production",
        desc: "Un premier agent qui tourne dans vos outils, avec indicateurs et gouvernance.",
      },
      {
        title: "Déploiement multi-workflows",
        desc: "Étendre la capacité à plusieurs processus, même socle.",
      },
      {
        title: "AgentOps / gouvernance managée",
        desc: "Exploitation, revue, budgets et supervision continue.",
      },
      {
        title: "Formation",
        desc: "Transfert pour que vos équipes pilotent sans boîte noire.",
      },
    ],
    bridgeTitle: "Méthode et solution",
    bridgeBody:
      "Le diagnostic note vos capacités — pas des outils — et colorie la carte avec vous. L’OS augmente ensuite les capacités retenues. On ne vend jamais un agent : on augmente une capacité de votre entreprise.",
    bridgeCta: "Voir la méthode →",
    ctaPrimary: "Demander une démo",
    ctaSecondary: "Réserver l’heure de cadrage →",
  },
  en: {
    eyebrow: "SOLUTION",
    title: "Remparia OS — the AI operating system for your company",
    sub: "A single control plane that orchestrates a team of specialized agents, routes each task to the right model, works on your data, under your governance, on sovereign infrastructure.",
    problemTitle: "The problem it solves",
    problemBody:
      "Enterprise AI today: scattered subscriptions, no shared memory, no trail, data leaving to unknown places. What’s missing is the operating system.",
    capsTitle: "What your company becomes able to do",
    caps: [
      {
        tag: "01",
        title: "Delegate work to a team of agents",
        desc: "Hand over an objective, receive a supervised result. Specialized agents by function, with human escalation and validation.",
      },
      {
        tag: "02",
        title: "Work with AI from one place",
        desc: "Web, mobile, API. Sharing with framed permissions.",
      },
      {
        tag: "03",
        title: "Use the right model at the right time",
        desc: "Routing by cost, quality and sensitivity. Multi-vendor, reversible. Sensitive data stays local.",
      },
      {
        tag: "04",
        title: "Capitalize knowledge",
        desc: "Your rules and exceptions encoded and applied. Everyone only sees what they are allowed to see.",
      },
      {
        tag: "05",
        title: "Connect AI to your existing tools",
        desc: "Without replacing them. The OS integrates with what your teams already use.",
      },
      {
        tag: "06",
        title: "Govern your agents",
        desc: "Each agent has a named human owner. Zero access by default. Auditable logs. Controlled budgets.",
      },
      {
        tag: "07",
        title: "Stay sovereign",
        desc: "Hosting in FR/EU or on-premise. Survive outages and vendor exits.",
      },
    ],
    teamTitle: "The agent workforce",
    teamBody:
      "Persistent specialized agents by function — research, sales, legal, finance, HR, IT support, procurement — orchestrated by an AI “chief of staff” that breaks down requests, assigns the right agent, monitors and escalates decisions to humans. Each agent is configured with your business rules: a notary’s and an accountant’s share the foundation, not the skills.",
    heatmapTitle: "What the agent carries, prepares, or never touches",
    heatmapIntro:
      "Red is a choice, not a technical limit — we refuse to put an agent there, even on request. That is “humans decide, agents execute” made verifiable.",
    heatmap: [
      {
        level: "green" as const,
        title: "The agent carries the load",
        desc: "Humans handle exceptions: collection, checks, monitoring, billing, reporting.",
      },
      {
        level: "amber" as const,
        title: "The agent prepares",
        desc: "Humans do: proposals, analysis, client delivery.",
      },
      {
        level: "red" as const,
        title: "Humans, always",
        desc: "Advice and binding decisions, validation and signature, ethics, strategic choices.",
      },
    ],
    layersTitle: "OS layers",
    layers: [
      {
        tag: "01",
        title: "Your interface",
        desc: "A single entry point, web and mobile, no technical skill required.",
      },
      {
        tag: "02",
        title: "Your agents",
        desc: "The specialized workforce, orchestrated.",
      },
      {
        tag: "03",
        title: "Intelligence",
        desc: "The right model for each task, at the best cost — never a cloud model for data classified as local.",
      },
      {
        tag: "04",
        title: "Your memory and data",
        desc: "The OS works on what you know, remembers it, and only learns with human validation.",
      },
      {
        tag: "05",
        title: "Governance and infrastructure",
        desc: "Who may do what, everything logged, sovereign hosting.",
      },
    ],
    securityTitle: "Security guarantees",
    security: [
      "Zero access by default",
      "Agents never hold a password",
      "Every access is logged, usable by an auditor",
      "Code runs in a sandboxed environment",
      "A user only retrieves via AI what they already see in their tools",
    ],
    principlesTitle: "Four principles",
    principles: [
      "Full sovereignty",
      "Choice & freedom — multi-model, multi-cloud, no lock-in",
      "Control & governance",
      "Performance & intelligence",
    ],
    dayTitle: "A day with the OS",
    day: [
      {
        tag: "MORNING",
        title: "Ready before you",
        desc: "The OS prepared files, followed up, sorted; exceptions wait, ranked.",
      },
      {
        tag: "DAY",
        title: "The right agent, every time",
        desc: "Each request goes to the right agent, every action is traced; decisions escalate with the file ready.",
      },
      {
        tag: "EVENING",
        title: "Report",
        desc: "What was done, and what still needs a human decision.",
      },
    ],
    notTitle: "What it is not",
    notItems: [
      "Not a usage licence — no token billing.",
      "Not a closed proprietary stack — the foundation uses standard open-source building blocks: if we disappear, your system keeps running.",
      "Not a black-box delivery — your rules, configuration and documentation are handed over; your business codex is yours, versioned.",
    ],
    deployTitle: "Deployment offers",
    deploy: [
      {
        title: "Production pilot",
        desc: "A first agent running in your tools, with indicators and governance.",
      },
      {
        title: "Multi-workflow rollout",
        desc: "Extend capacity across several processes on the same foundation.",
      },
      {
        title: "AgentOps / managed governance",
        desc: "Operations, review, budgets and ongoing supervision.",
      },
      {
        title: "Training",
        desc: "Transfer so your teams run without a black box.",
      },
    ],
    bridgeTitle: "Method and solution",
    bridgeBody:
      "The diagnostic scores your capabilities — not tools — and colours the map with you. The OS then raises the capabilities you keep. We never sell an agent: we raise a capability of your company.",
    bridgeCta: "See the method →",
    ctaPrimary: "Request a demo",
    ctaSecondary: "Book the scoping hour →",
  },
} as const;

export const POUR_QUI = {
  fr: {
    eyebrow: "POUR QUI",
    title: "Là où la donnée est sensible et le temps expert trop rare",
    sub: "Nous intervenons dans les métiers où chaque décision engage une responsabilité — là où l’IA générique échoue et où la gouvernance ne peut pas être un correctif.",
    familiesTitle: "Les trois familles",
    families: [
      {
        tag: "DROIT & CHIFFRE",
        title: "Notariat, juridique, expertise comptable",
        desc: "Dossiers, actes, contrôles, collecte et production documentaire.",
        hrefs: [
          { label: "Étude notariale", href: "/secteurs/etude-notariale" },
          { label: "Cabinet d’avocat", href: "/secteurs/cabinet-avocat" },
          {
            label: "Expertise comptable",
            href: "/secteurs/expertise-comptable",
          },
        ],
      },
      {
        tag: "PATRIMOINE & RISQUE",
        title: "Patrimoine, courtage, assurance",
        desc: "Instruction, conformité, comparaison, reporting et suivi client.",
        hrefs: [
          {
            label: "Courtage & assurance",
            href: "/secteurs/courtier-assurance",
          },
          {
            label: "Finance & assurance",
            href: "/secteurs/finance-assurance",
          },
        ],
      },
      {
        tag: "CABINETS SPÉCIALISÉS",
        title: "Professions libérales et conseil",
        desc: "Back-office, comptes rendus, recherche et préparation de livrables.",
        hrefs: [
          { label: "Services & conseil", href: "/secteurs/services-conseil" },
        ],
      },
    ],
    openTitle: "Vous n’êtes pas dans cette liste ?",
    openBody:
      "Si votre métier partage ces contraintes — responsabilité, données sensibles, temps expert rare — la première heure dira si nous sommes légitimes. Sinon, nous vous orientons : nous préférons orienter que vendre.",
    notTitle: "Qui n’est pas notre client",
    notItems: [
      "Les structures qui cherchent « une démo d’IA » sans processus identifié.",
      "Les projets où la décision serait déléguée à la machine.",
    ],
    ctaPrimary: "Réserver l’heure de cadrage →",
    ctaSecondary: "Voir les cas d’usage →",
  },
  en: {
    eyebrow: "WHO IT IS FOR",
    title: "Where data is sensitive and expert time is scarce",
    sub: "We work in professions where every decision carries accountability — where generic AI fails and governance cannot be a retrofit.",
    familiesTitle: "Three families",
    families: [
      {
        tag: "LAW & ACCOUNTING",
        title: "Notaries, legal and accounting firms",
        desc: "Files, deeds, controls, collection and document production.",
        hrefs: [
          { label: "Notarial office", href: "/secteurs/etude-notariale" },
          { label: "Law firm", href: "/secteurs/cabinet-avocat" },
          {
            label: "Accounting firm",
            href: "/secteurs/expertise-comptable",
          },
        ],
      },
      {
        tag: "WEALTH & RISK",
        title: "Wealth, brokerage and insurance",
        desc: "Assessment, compliance, comparison, reporting and client follow-up.",
        hrefs: [
          {
            label: "Insurance brokerage",
            href: "/secteurs/courtier-assurance",
          },
          {
            label: "Finance & insurance",
            href: "/secteurs/finance-assurance",
          },
        ],
      },
      {
        tag: "SPECIALIZED FIRMS",
        title: "Professional services and consulting",
        desc: "Back office, meeting notes, research and deliverable preparation.",
        hrefs: [
          { label: "Services & consulting", href: "/secteurs/services-conseil" },
        ],
      },
    ],
    openTitle: "Not on this list?",
    openBody:
      "If your profession shares these constraints — accountability, sensitive data, scarce expert time — the first hour will tell whether we are the right partner. If not, we will point you elsewhere: we prefer to refer than to sell.",
    notTitle: "Who is not our client",
    notItems: [
      "Organisations looking for “an AI demo” without an identified workflow.",
      "Projects where decisions would be delegated to the machine.",
    ],
    ctaPrimary: "Book the scoping hour →",
    ctaSecondary: "See use cases →",
  },
} as const;

export const CAS_USAGE = {
  fr: {
    eyebrow: "CAS D’USAGE",
    title: "Le processus, dans le langage du métier",
    sub: "Chaque fiche décrit un travail réel — jamais une technologie. Ce que l’agent fait, ce qu’il ne fait pas, et ce qu’on mesure.",
    items: [
      {
        slug: "collecte-de-pieces",
        process: "Collecte de pièces",
        today: "Relances manuelles, dossiers incomplets, temps expert perdu sur le suivi.",
        withAgent:
          "L’agent sollicite les pièces manquantes, relance selon vos règles, trace chaque échange.",
        never: "Il ne valide pas l’acte et ne décide pas de la complétude juridique.",
        measure: "Délai de complétude et taux de pièces reçues sans relance humaine.",
      },
      {
        slug: "controle-de-completude",
        process: "Contrôle de complétude",
        today: "Check-lists dispersées, oublis, reprise manuelle avant signature.",
        withAgent:
          "L’agent applique la check-list métier, signale les manques, prépare le dossier pour l’expert.",
        never: "Il ne signe pas et ne lève pas une exception métier sans humain.",
        measure: "Taux de dossiers complets au premier passage expert.",
      },
      {
        slug: "preparation-de-revision",
        process: "Préparation de révision",
        today: "Heures d’expert sur l’assemblage et le tri avant l’analyse.",
        withAgent:
          "L’agent assemble les sources autorisées, prépare la liasse, met en avant les écarts.",
        never: "Il ne rend pas l’opinion professionnelle.",
        measure: "Temps expert avant première lecture utile.",
      },
      {
        slug: "instruction-de-dossier",
        process: "Instruction de dossier",
        today: "Informations éparpillées, ressaisies, délais allongés.",
        withAgent:
          "L’agent structure le dossier, remplit les champs autorisés, alerte sur les incohérences.",
        never: "Il ne tranche pas le fond du dossier.",
        measure: "Délai d’instruction et nombre de ressaisies évitées.",
      },
      {
        slug: "kyc-lcb-ft",
        process: "KYC / LCB-FT",
        today: "Collecte et contrôles chronophages, risque d’oubli.",
        withAgent:
          "L’agent orchestre la collecte, applique les contrôles définis, journalise chaque étape.",
        never: "Il ne décide pas de l’acceptation du client.",
        measure: "Délai KYC et exhaustivité des contrôles journalisés.",
      },
      {
        slug: "reporting-client",
        process: "Reporting client",
        today: "Reporting manuel, formats hétérogènes, délais serrés.",
        withAgent:
          "L’agent produit le brouillon à partir des sources autorisées, selon votre modèle.",
        never: "Il n’envoie pas sans validation humaine.",
        measure: "Temps de préparation du reporting.",
      },
      {
        slug: "comptes-rendus",
        process: "Comptes rendus",
        today: "Notes éparses, reformulation tardive, perte de contexte.",
        withAgent:
          "L’agent structure le compte rendu à partir des éléments validés, selon votre trame.",
        never: "Il n’engage pas le cabinet auprès du client.",
        measure: "Délai de mise à disposition du compte rendu.",
      },
      {
        slug: "recherche-documentaire",
        process: "Recherche documentaire",
        today: "Recherche longue dans des fonds autorisés, résultats à vérifier.",
        withAgent:
          "L’agent interroge les sources autorisées, cite les origines, prépare une synthèse.",
        never: "Il ne substitue pas le jugement sur la pertinence juridique ou fiscale.",
        measure: "Temps de première synthèse sourcée.",
      },
      {
        slug: "livrables-recurrents",
        process: "Livrables récurrents",
        today: "Production répétitive, formats fixes, charge en fin de période.",
        withAgent:
          "L’agent prépare les livrables récurrents selon le calendrier et les modèles du cabinet.",
        never: "Il ne publie pas sans revue humaine.",
        measure: "Charge absorbée sur les cycles récurrents.",
      },
    ],
    osLine: "Sur quoi ça tourne",
    osCta: "Voir Remparia OS →",
    banner:
      "Votre processus n’est probablement pas exactement dans cette liste — c’est justement l’objet de la première heure.",
    ctaPrimary: "Réserver l’heure →",
  },
  en: {
    eyebrow: "USE CASES",
    title: "The workflow, in the profession’s language",
    sub: "Each card describes real work — never technology. What the agent does, what it does not, and what we measure.",
    items: [
      {
        slug: "collecte-de-pieces",
        process: "Document collection",
        today: "Manual chase-ups, incomplete files, expert time lost on follow-up.",
        withAgent:
          "The agent requests missing documents, follows up under your rules, logs every exchange.",
        never: "It does not validate the deed or decide legal completeness.",
        measure: "Time to completeness and share of documents received without human chase-up.",
      },
      {
        slug: "controle-de-completude",
        process: "Completeness checks",
        today: "Scattered checklists, misses, manual catch-up before signing.",
        withAgent:
          "The agent applies the business checklist, flags gaps, prepares the file for the expert.",
        never: "It does not sign or clear a business exception without a human.",
        measure: "Share of files complete at first expert pass.",
      },
      {
        slug: "preparation-de-revision",
        process: "Review preparation",
        today: "Expert hours on assembling and sorting before analysis.",
        withAgent:
          "The agent assembles approved sources, prepares the pack, highlights gaps.",
        never: "It does not issue the professional opinion.",
        measure: "Expert time before a useful first read.",
      },
      {
        slug: "instruction-de-dossier",
        process: "Case instruction",
        today: "Scattered information, rekeying, longer cycles.",
        withAgent:
          "The agent structures the file, fills allowed fields, flags inconsistencies.",
        never: "It does not decide the substance of the case.",
        measure: "Instruction lead time and rekeying avoided.",
      },
      {
        slug: "kyc-lcb-ft",
        process: "KYC / AML",
        today: "Time-consuming collection and checks, risk of misses.",
        withAgent:
          "The agent orchestrates collection, applies defined checks, logs every step.",
        never: "It does not decide client acceptance.",
        measure: "KYC lead time and completeness of logged checks.",
      },
      {
        slug: "reporting-client",
        process: "Client reporting",
        today: "Manual reporting, mixed formats, tight deadlines.",
        withAgent:
          "The agent drafts from approved sources, to your template.",
        never: "It does not send without human validation.",
        measure: "Time to prepare the report.",
      },
      {
        slug: "comptes-rendus",
        process: "Meeting notes",
        today: "Scattered notes, late rewrite, lost context.",
        withAgent:
          "The agent structures the note from validated inputs, to your outline.",
        never: "It does not commit the firm to the client.",
        measure: "Time to deliver the note.",
      },
      {
        slug: "recherche-documentaire",
        process: "Document research",
        today: "Long search across approved corpora, results to verify.",
        withAgent:
          "The agent queries approved sources, cites origins, prepares a synthesis.",
        never: "It does not replace judgment on legal or tax relevance.",
        measure: "Time to a first sourced synthesis.",
      },
      {
        slug: "livrables-recurrents",
        process: "Recurring deliverables",
        today: "Repetitive production, fixed formats, period-end load.",
        withAgent:
          "The agent prepares recurring deliverables on the firm’s calendar and templates.",
        never: "It does not publish without human review.",
        measure: "Workload absorbed on recurring cycles.",
      },
    ],
    osLine: "What it runs on",
    osCta: "See Remparia OS →",
    banner:
      "Your workflow is probably not exactly on this list — that is precisely what the first hour is for.",
    ctaPrimary: "Book the hour →",
  },
} as const;

export const DEMARRER = {
  fr: {
    eyebrow: "DÉMARRER",
    title: "Trois façons de commencer",
    sub: "Vous savez comment on démarre, en combien de temps, et selon quel modèle — avant de vous engager.",
    paths: [
      {
        tag: "01",
        title: "L’heure",
        forWho: "Vous avez un processus qui coûte du temps et voulez une lecture honnête.",
        what: "Cadrage du répétitif, des contraintes de données et des gains à mesurer.",
        leaveWith: "Une lecture claire : poursuite, orientation, ou pas maintenant.",
        duration: "1 h",
        price: "Gratuite",
        next: "Aucun engagement de suite.",
      },
      {
        tag: "02",
        title: "Le diagnostic",
        forWho: "Vous voulez une cartographie classée par impact et risque.",
        what: "Observation terrain, scorecard par processus, cadre de gouvernance esquissé.",
        leaveWith: "La cartographie et les priorités — vendable seul, sans obligation de suite.",
        duration: "Selon périmètre",
        price: "Forfait fixé avant de démarrer",
        next: "Aucun engagement de suite.",
      },
      {
        tag: "03",
        title: "Le premier agent",
        forWho: "Vous avez un processus priorisé et voulez le voir tourner dans vos outils.",
        what: "Agent en production supervisée, indicateurs, transfert inclus.",
        leaveWith: "Un agent qui travaille, documenté, sous vos règles.",
        duration: "Selon périmètre",
        price: "Forfait cadré avant signature",
        next: "Trajectoire possible vers multi-workflows — sans obligation contractuelle.",
      },
    ],
    pricingTitle: "Le modèle de prix",
    pricingBody:
      "Pas de régie ouverte, pas de facturation à la consommation : forfait fixé avant de démarrer, transfert compris. Les montants s’affichent lorsque la grille est arbitrée.",
    nextTitle: "Et ensuite",
    nextBody:
      "Après le premier agent : multi-workflows, AgentOps, autonomie des équipes. Il existe une trajectoire — sans engagement de la suivre.",
    methodTitle: "Le protocole en détail",
    methodBody: "Six étapes, chacune avec un livrable. Le détail sur la page Méthode.",
    methodCta: "Voir la méthode →",
    ctaPrimary: "Réserver l’heure →",
    ctaSecondary: "Demander une démo Remparia OS →",
  },
  en: {
    eyebrow: "GET STARTED",
    title: "Three ways to start",
    sub: "You know how we start, how long it takes, and which pricing model — before you commit.",
    paths: [
      {
        tag: "01",
        title: "The hour",
        forWho: "You have a workflow costing time and want an honest read.",
        what: "Frame repetitive work, data constraints and gains to measure.",
        leaveWith: "A clear read: continue, refer, or not now.",
        duration: "1 hr",
        price: "Free",
        next: "No follow-on commitment.",
      },
      {
        tag: "02",
        title: "The diagnostic",
        forWho: "You want a map ranked by impact and risk.",
        what: "Field observation, scorecard per workflow, sketched governance frame.",
        leaveWith: "The map and priorities — sellable alone, no obligation to continue.",
        duration: "Scoped",
        price: "Fixed fee before start",
        next: "No follow-on commitment.",
      },
      {
        tag: "03",
        title: "The first agent",
        forWho: "You have a prioritized workflow and want it running in your tools.",
        what: "Agent in supervised production, indicators, transfer included.",
        leaveWith: "An agent that works, documented, under your rules.",
        duration: "Scoped",
        price: "Framed fee before signature",
        next: "Path to multi-workflows possible — no contractual obligation.",
      },
    ],
    pricingTitle: "Pricing model",
    pricingBody:
      "No open-ended time & materials, no consumption billing: fee set before we start, transfer included. Amounts appear when the grid is settled.",
    nextTitle: "What follows",
    nextBody:
      "After the first agent: multi-workflows, AgentOps, team autonomy. There is a path — without obligation to take it.",
    methodTitle: "The protocol in detail",
    methodBody: "Six stages, each with a deliverable. Full detail on the Method page.",
    methodCta: "See the method →",
    ctaPrimary: "Book the hour →",
    ctaSecondary: "Request a Remparia OS demo →",
  },
} as const;

/** Secteurs du cercle cœur — SEO longue traîne conservée. */
export const HEART_SECTEUR_SLUGS = [
  "etude-notariale",
  "cabinet-avocat",
  "expertise-comptable",
  "courtier-assurance",
  "finance-assurance",
  "services-conseil",
] as const;

export type HeartSecteurSlug = (typeof HEART_SECTEUR_SLUGS)[number];

export function isHeartSecteur(slug: string): slug is HeartSecteurSlug {
  return (HEART_SECTEUR_SLUGS as readonly string[]).includes(slug);
}

export function strategyCopy(lang: Lang) {
  return {
    solution: SOLUTION[lang],
    pourQui: POUR_QUI[lang],
    casUsage: CAS_USAGE[lang],
    demarrer: DEMARRER[lang],
  };
}
