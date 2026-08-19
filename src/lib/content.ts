import { CONTACT_EMAIL } from "./contact-email";
import { EXTRA_SECTEUR_ITEMS } from "./secteurs-extra";

export type Lang = "fr" | "en";

export const NAV = {
  fr: {
    services: "Services",
    methode: "Méthode",
    secteurs: "Métiers",
    aPropos: "À propos",
    ressources: "Ressources",
    carrieres: "Carrières",
    hiring: "We're hiring",
    contact: "Contact",
    demo: "Parlons de votre processus",
    demoShort: "Échanger →",
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
    secteurs: "Professions",
    aPropos: "About",
    ressources: "Resources",
    carrieres: "Careers",
    hiring: "We're hiring",
    contact: "Contact",
    demo: "Talk through your workflow",
    demoShort: "Talk →",
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
    tagline:
      "Du temps rendu · La décision préservée · Les données sous contrôle",
    servicesTitle: "Services",
    secteursTitle: "Solutions par métier",
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
    logoAlt: "Remparia — Agents métier",
  },
  en: {
    tagline: "Time returned · Decision preserved · Data under control",
    servicesTitle: "Services",
    secteursTitle: "Solutions by profession",
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
    logoAlt: "Remparia — Business agents",
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

export const BRAND = {
  fr: {
    promiseGuard: "La décision préservée.",
    visionTag: "NOTRE VISION",
    visionH: "Une technologie qui renforce les métiers de confiance.",
    visionP:
      "Dans les métiers où chaque décision engage une responsabilité, l'automatisation ne doit pas devenir une boîte noire qui remplace le jugement. Elle doit devenir une infrastructure de confiance : supervisée, traçable et utile.",
    missionTag: "NOTRE MISSION",
    missionH: "Transformer le répétitif en temps utile.",
    missionP:
      "Nous transformons les processus répétitifs des métiers spécialisés en agents supervisés, intégrés aux outils existants et évalués sur des résultats définis ensemble.",
    valuesTag: "NOS VALEURS",
    valuesH: "Quatre principes qui ne se négocient pas.",
    values: [
      {
        tag: "RESPONSABILITÉ",
        title: "L'humain reste responsable.",
        desc: "L'agent prépare, contrôle et alerte. L'expert garde le jugement, la décision et la responsabilité.",
      },
      {
        tag: "TERRAIN",
        title: "Le terrain avant la technologie.",
        desc: "Nous observons le travail réel avant de choisir un modèle, une architecture ou une automatisation.",
      },
      {
        tag: "PREUVE",
        title: "La preuve avant la promesse.",
        desc: "La valeur se mesure en délais réduits, charge absorbée et qualité maintenue.",
      },
      {
        tag: "AUTONOMIE",
        title: "Transférer, pas rendre dépendant.",
        desc: "Les règles, les compétences et la maîtrise du système restent chez le client.",
      },
    ],
    guarantee:
      "Ce qui est sensible reste dans le périmètre défini avec vous.",
  },
  en: {
    promiseGuard: "Decision preserved.",
    visionTag: "OUR VISION",
    visionH: "Technology that strengthens professions built on trust.",
    visionP:
      "In professions where every decision carries accountability, automation must not become a black box that replaces judgment. It must become trusted infrastructure: supervised, traceable and useful.",
    missionTag: "OUR MISSION",
    missionH: "Turn repetitive work into useful time.",
    missionP:
      "We turn repetitive workflows in specialized professions into supervised agents, embedded in existing tools and evaluated against outcomes defined together.",
    valuesTag: "OUR VALUES",
    valuesH: "Four principles that are not negotiable.",
    values: [
      {
        tag: "ACCOUNTABILITY",
        title: "Humans remain accountable.",
        desc: "Agents prepare, check and alert. Experts keep judgment, decisions and accountability.",
      },
      {
        tag: "FIELDWORK",
        title: "Fieldwork before technology.",
        desc: "We observe real work before choosing a model, architecture or automation.",
      },
      {
        tag: "EVIDENCE",
        title: "Evidence before promises.",
        desc: "Value is measured in shorter cycles, absorbed workload and maintained quality.",
      },
      {
        tag: "AUTONOMY",
        title: "Transfer, do not create dependency.",
        desc: "Rules, skills and control of the system remain with the client.",
      },
    ],
    guarantee:
      "What is sensitive stays inside the perimeter agreed with you.",
  },
} as const;

export const HOME = {
  fr: {
    eyebrow: "AGENTS POUR MÉTIERS SPÉCIALISÉS",
    h1a: "Nous transformons",
    h1b: "l IA en avantage concurrentiel.",
    protocolAria: "Protocole SIGNAL",
    introSkip: "Passer",
    introLine: "rempart + agents",
    introNoise: "Bruit",
    introHint: "extraction du signal",
    subBefore: "Remparia aide les métiers spécialisés à ",
    subAccent: "intégrer des agents supervisés",
    subAfter:
      " de manière concrète, souveraine, sécurisée et mesurable — sans céder la décision ni le contrôle de leurs données.",
    advantages: [
      {
        icon: "strategy",
        title: "Stratégie & gouvernance",
        desc: "Une vision claire des usages où l’automatisation crée un impact vérifiable, dans un cadre souverain.",
      },
      {
        icon: "security",
        title: "Intégration sécurisée",
        desc: "Des agents supervisés, hébergés dans un périmètre souverain et intégrés à vos outils.",
      },
      {
        icon: "performance",
        title: "Performance mesurable",
        desc: "Des gains définis avant le déploiement sur un socle souverain : charge, délais et qualité.",
      },
      {
        icon: "partnership",
        title: "Partenaire de confiance",
        desc: "Un accompagnement souverain de bout en bout par les associés qui livrent.",
      },
    ],
    closingBefore: "L’automatisation n’est pas qu’une technologie.",
    closingAccent: "C’est votre prochaine longueur d’avance.",
    cta: "Parlons de votre processus",
    constat: "LE CONSTAT",
    constatH: "Vos experts perdent encore des heures sur du travail que des agents peuvent porter.",
    constatP:
      "Collecte de pièces, ressaisies, contrôles, relances, reporting : la valeur ne vient pas d'une nouvelle démo. Elle vient d'agents intégrés aux processus réels, adoptés par les équipes et gouvernés dès le départ.",
    conviction: "NOTRE CONVICTION",
    convH1: "L'humain décide,",
    convH2: "l'agent exécute.",
    convP:
      "Les agents ne sont pas là pour remplacer votre expertise. L'agent prépare, collecte, contrôle et alerte. Vos équipes gardent le jugement, la relation client et la responsabilité.",
    audience: "POUR QUI",
    audienceH: "Là où les solutions génériques échoue.",
    audienceP:
      "Nous intervenons dans les métiers où la donnée est sensible, le cadre exigeant et le temps expert trop précieux pour être absorbé par le répétitif.",
    audiences: [
      {
        tag: "DROIT & CHIFFRE",
        title: "Notariat, juridique, expertise comptable",
        desc: "Dossiers, actes, contrôles, collecte et production documentaire.",
      },
      {
        tag: "PATRIMOINE & RISQUE",
        title: "Patrimoine, courtage, assurance",
        desc: "Instruction, conformité, comparaison, reporting et suivi client.",
      },
      {
        tag: "CABINETS SPÉCIALISÉS",
        title: "Professions libérales et conseil",
        desc: "Back-office, comptes rendus, recherche et préparation de livrables.",
      },
    ],
    method: "DU TERRAIN AUX GAINS",
    methodH: "SIGNAL : six étapes, six livrables.",
    methodTeaser:
      "Du terrain aux gains mesurés — livrables, gouvernance et délais à chaque étape. Le détail sur la page Méthode.",
    methodCta: "Explorer SIGNAL",
    position: "LE POSITIONNEMENT",
    positionH: "Ni formation seule, ni outil générique. Un partenaire qui livre.",
    servicesEyebrow: "CE QUE NOUS LIVRONS",
    servicesH: "De l’audit à l’adoption.",
    servicesCta: "Voir notre accompagnement",
    ctaTag: "PRÊT À COMMENCER",
    ctaH: "Montrez-nous le processus qui vous coûte du temps.",
    ctaP:
      "En une heure, nous cadrons le travail répétitif, les contraintes de données et les gains à mesurer — avec un associé, pas un commercial.",
  },
  en: {
    eyebrow: "AGENTS FOR SPECIALIZED PROFESSIONS",
    h1a: "We turn AI",
    h1b: "into a competitive advantage.",
    protocolAria: "SIGNAL protocol",
    introSkip: "Skip",
    introLine: "rampart + agents",
    introNoise: "Noise",
    introHint: "extracting signal",
    subBefore: "Remparia helps specialized professions ",
    subAccent: "integrate supervised agents",
    subAfter:
      " in a concrete, sovereign, secure and measurable way — without giving up decisions or control of their data.",
    advantages: [
      {
        icon: "strategy",
        title: "Agent strategy",
        desc: "A clear view of the uses where automation creates verifiable impact, within a sovereign framework.",
      },
      {
        icon: "security",
        title: "Secure integration",
        desc: "Supervised agents hosted in a sovereign perimeter and embedded in your tools.",
      },
      {
        icon: "performance",
        title: "Measurable performance",
        desc: "Outcomes defined before deployment on a sovereign foundation: workload, lead times and quality.",
      },
      {
        icon: "partnership",
        title: "Trusted partner",
        desc: "End-to-end sovereign support from the partners who actually deliver.",
      },
    ],
    closingBefore: "Agents are more than technology.",
    closingAccent: "It is your next competitive edge.",
    cta: "Talk through your workflow",
    constat: "THE REALITY",
    constatH: "Your experts still lose hours to work agents can carry.",
    constatP:
      "Document collection, rekeying, checks, follow-ups and reporting: value does not come from another demo. It comes from agents embedded in real workflows, adopted by teams and governed from day one.",
    conviction: "OUR CONVICTION",
    convH1: "Humans decide,",
    convH2: "agents execute.",
    convP:
      "Agents are not here to replace expertise. Agents prepare, collect, check and alert. Your teams keep judgment, client relationships and accountability.",
    audience: "WHO IT IS FOR",
    audienceH: "Where generic tools fall short.",
    audienceP:
      "We work in professions where data is sensitive, the frame is demanding and expert time is too valuable to be consumed by repetitive work.",
    audiences: [
      {
        tag: "LAW & ACCOUNTING",
        title: "Notaries, legal and accounting firms",
        desc: "Files, deeds, controls, collection and document production.",
      },
      {
        tag: "WEALTH & RISK",
        title: "Wealth, brokerage and insurance",
        desc: "Assessment, compliance, comparison, reporting and client follow-up.",
      },
      {
        tag: "SPECIALIZED FIRMS",
        title: "Professional services and consulting",
        desc: "Back office, meeting notes, research and deliverable preparation.",
      },
    ],
    method: "FROM FIELDWORK TO GAINS",
    methodH: "SIGNAL: six stages, six deliverables.",
    methodTeaser:
      "From fieldwork to measured outcomes — deliverables, governance and timelines at every stage. Full detail on the Method page.",
    methodCta: "Explore SIGNAL",
    position: "POSITIONING",
    positionH: "Not training alone. Not a generic tool. A partner that ships.",
    servicesEyebrow: "WHAT WE DELIVER",
    servicesH: "From audit to adoption.",
    servicesCta: "See how we engage",
    ctaTag: "READY TO START",
    ctaH: "Show us the workflow costing you time.",
    ctaP:
      "In one hour, we frame repetitive work, data constraints and the gains to measure — with a partner, not a salesperson.",
  },
} as const;

export const PILLARS = {
  fr: [
    { tag: "AGENTS MÉTIER", title: "Branchés sur vos outils réels" },
    { tag: "DONNÉES SOUS CONTRÔLE", title: "France, on-prem ou architecture hybride" },
    { tag: "TEMPS RENDU", title: "Mesuré avant de passer à l'échelle" },
  ],
  en: [
    { tag: "BUSINESS AGENTS", title: "Connected to your actual tools" },
    { tag: "DATA UNDER CONTROL", title: "France, on-prem or hybrid architecture" },
    { tag: "TIME RETURNED", title: "Measured before scaling" },
  ],
} as const;

export const PROOF_STATS = {
  fr: [
    { value: "80 %", label: "des projets d'automatisation n'atteignent jamais la production (source interne Remparia, 2025)" },
    { value: "6", label: "étapes SIGNAL — chacune avec un livrable signé avant la suivante" },
    { value: "1 h", label: "pour cadrer un premier processus lors du diagnostic initial" },
    { value: "100 %", label: "des agents déployés avec escalade humaine et traçabilité" },
  ],
  en: [
    { value: "80%", label: "of automation projects never reach production (Remparia internal benchmark, 2025)" },
    { value: "6", label: "SIGNAL stages — each with a signed deliverable before the next" },
    { value: "1 hr", label: "to frame a first workflow during the initial diagnostic" },
    { value: "100%", label: "of deployed agents include human escalation and traceability" },
  ],
} as const;

export const SERVICES = {
  fr: {
    eyebrow: "CE QUE NOUS FAISONS",
    title: "Services",
    sub: "Un engagement : absorber une charge mesurable sans retirer le contrôle à vos experts.",
    intro:
      "Nous n'intervenons pas pour vendre une couche technologique. Nous construisons des agents supervisés intégrés à vos outils réels, avec un périmètre de données défini, des indicateurs convenus et un transfert de maîtrise à vos équipes. Chaque mission commence par un diagnostic SIGNAL et se termine par une capacité que vous pouvez faire évoluer sans dépendre d'une boîte noire.",
    commitmentTitle: "Notre engagement opérationnel",
    commitments: [
      "Forfait de mise en œuvre cadré avant signature — pas de facturation au scope flou.",
      "Données sensibles dans le périmètre convenu : France, on-prem ou architecture hybride.",
      "Gains mesurés sur charge, délais ou qualité — indicateurs définis avant le premier agent.",
      "Documentation, formation et transfert inclus dans l'industrialisation.",
    ],
    scopeTitle: "Périmètre type d'une mission",
    scopeBody:
      "Immersion terrain, architecture cible, intégrations SI, règles métier, gouvernance, déploiement progressif et revue des gains à 30/60/90 jours. Les associés qui cadreront votre dossier sont ceux qui piloteront la livraison.",
    serviceSections: [
      {
        tag: "01",
        title: "DIAGNOSTIC & GOUVERNANCE",
        desc: "Observer le terrain, prioriser les processus à fort impact et poser le cadre avant d'automatiser.",
        points: [
          { icon: "immersion", label: "Immersion dans les processus" },
          { icon: "prioritize", label: "Priorisation ROI / faisabilité" },
          { icon: "governance", label: "Cadre données, risques et supervision" },
          { icon: "roadmap", label: "Feuille de route avec indicateurs" },
        ],
        steps: ["Analyser", "Structurer", "Sécuriser", "Piloter"],
        image: "/services/diagnostic-governance-hub.png",
        imageAlt:
          "Schéma isométrique : diagnostic, priorisation, gouvernance et pilotage autour d’un socle sécurisé.",
        ctaHref: "/services/strategie-ia",
      },
      {
        tag: "02",
        title: "AGENTS MÉTIER",
        desc: "Des agents intégrés à vos outils pour porter la collecte, les contrôles, les relances et la préparation.",
        points: [
          { icon: "integration", label: "Intégration CRM, ERP et messagerie" },
          { icon: "rules", label: "Règles métier et escalade humaine" },
          { icon: "trace", label: "Traçabilité des actions et des sources" },
          { icon: "metrics", label: "Mesure du temps et des délais" },
        ],
        steps: ["Intégrer", "Configurer", "Superviser", "Mesurer"],
        image: "/services/agents-metier-hub.png",
        imageAlt:
          "Schéma isométrique : agents métier connectés aux outils, règles et supervision.",
        ctaHref: "/services/agents-metier",
        flip: true,
      },
      {
        tag: "03",
        title: "SOCLE SOUVERAIN & ROUTAGE",
        desc: "La donnée sensible reste dans le périmètre défini. Le modèle est choisi selon la tâche et la sensibilité.",
        points: [
          { icon: "hosting", label: "Hébergement France, on-prem ou hybride" },
          { icon: "rag", label: "RAG sur sources autorisées" },
          { icon: "routing", label: "Routage agnostique par sensibilité" },
          { icon: "audit", label: "Droits d'accès, logs et audit" },
        ],
        steps: ["Héberger", "Indexer", "Router", "Auditer"],
        image: "/services/infra-souveraine-hub.png",
        imageAlt:
          "Schéma isométrique : hébergement souverain, index documentaire et routage des modèles.",
        ctaHref: "/services/infra-souveraine",
      },
      {
        tag: "04",
        title: "ADOPTION & TRANSFERT",
        desc: "Un agent utile doit être adopté. Nous embarquons les équipes et transférons les compétences nécessaires.",
        points: [
          { icon: "training", label: "Formation sur les usages réels" },
          { icon: "rollout", label: "Déploiement progressif" },
          { icon: "docs", label: "Documentation et transfert" },
          { icon: "improve", label: "Suivi des gains et amélioration" },
        ],
        steps: ["Former", "Déployer", "Transférer", "Améliorer"],
        image: "/services/adoption-transfert-hub.png",
        imageAlt:
          "Schéma isométrique : formation, déploiement, documentation, transfert de compétences et pilotage des gains.",
        ctaHref: "/services/equipes-embarquees",
        flip: true,
      },
    ],
    overview: "Vue d'ensemble",
    items: [
      {
        slug: "strategie-ia",
        tag: "01",
        title: "Diagnostic & gouvernance",
        desc: "Observer le terrain, prioriser les processus à fort impact et poser le cadre avant d'automatiser.",
        points: [
          "Immersion dans les processus",
          "Priorisation ROI / faisabilité",
          "Cadre données, risques et supervision",
          "Feuille de route avec indicateurs",
        ],
      },
      {
        slug: "agents-metier",
        tag: "02",
        title: "Agents métier",
        desc: "Des agents intégrés à vos outils pour porter la collecte, les contrôles, les relances et la préparation.",
        points: [
          "Intégration CRM, ERP et messagerie",
          "Règles métier et escalade humaine",
          "Traçabilité des actions et des sources",
          "Mesure du temps et des délais",
        ],
      },
      {
        slug: "infra-souveraine",
        tag: "03",
        title: "Socle souverain & routage",
        desc: "La donnée sensible reste dans le périmètre défini. Le modèle est choisi selon la tâche et la sensibilité.",
        points: [
          "Hébergement France, on-prem ou hybride",
          "RAG sur sources autorisées",
          "Routage agnostique par sensibilité",
          "Droits d'accès, logs et audit",
        ],
      },
      {
        slug: "equipes-embarquees",
        tag: "04",
        title: "Adoption & transfert",
        desc: "Un agent utile doit être adopté. Nous embarquons les équipes et transférons les compétences nécessaires.",
        points: [
          "Formation sur les usages réels",
          "Déploiement progressif",
          "Documentation et transfert",
          "Suivi des gains et amélioration",
        ],
      },
    ],
  },
  en: {
    eyebrow: "WHAT WE DO",
    title: "Services",
    sub: "One commitment: return measurable time to your experts without losing control of your data.",
    intro:
      "We do not sell a technology layer. We build supervised agents embedded in your actual tools, with a defined data perimeter, agreed indicators and transfer of ownership to your teams. Every engagement starts with a SIGNAL diagnostic and ends with capability you can evolve without a black-box dependency.",
    commitmentTitle: "Our operational commitment",
    commitments: [
      "Implementation fee framed before signature — no open-ended scope billing.",
      "Sensitive data inside the agreed perimeter: France, on-prem or hybrid architecture.",
      "Outcomes measured on workload, cycle time or quality — indicators set before the first agent.",
      "Documentation, training and transfer included in industrialization.",
    ],
    scopeTitle: "Typical engagement scope",
    scopeBody:
      "Field immersion, target architecture, system integrations, business rules, governance, progressive rollout and 30/60/90-day gain reviews. The partners who scope your engagement lead delivery.",
    serviceSections: [
      {
        tag: "01",
        title: "DIAGNOSTIC & GOVERNANCE",
        desc: "Observe fieldwork, prioritize high-impact workflows and set the frame before automating.",
        points: [
          { icon: "immersion", label: "Workflow immersion" },
          { icon: "prioritize", label: "ROI / feasibility prioritization" },
          { icon: "governance", label: "Data, risk and supervision frame" },
          { icon: "roadmap", label: "Roadmap with agreed indicators" },
        ],
        steps: ["Analyze", "Structure", "Secure", "Steer"],
        image: "/services/diagnostic-governance-hub.png",
        imageAlt:
          "Isometric diagram: diagnostic, prioritization, governance and steering around a secure core.",
        ctaHref: "/services/strategie-ia",
      },
      {
        tag: "02",
        title: "BUSINESS AGENTS",
        desc: "Agents embedded in your tools to carry collection, checks, follow-ups and preparation.",
        points: [
          { icon: "integration", label: "CRM, ERP and messaging integration" },
          { icon: "rules", label: "Business rules and human escalation" },
          { icon: "trace", label: "Action and source traceability" },
          { icon: "metrics", label: "Time and cycle measurement" },
        ],
        steps: ["Integrate", "Configure", "Supervise", "Measure"],
        image: "/services/agents-metier-hub.png",
        imageAlt:
          "Isometric diagram: business agents connected to tools, rules and supervision.",
        ctaHref: "/services/agents-metier",
        flip: true,
      },
      {
        tag: "03",
        title: "SOVEREIGN FOUNDATION & ROUTING",
        desc: "Sensitive data stays inside the agreed perimeter. Models are selected by task and sensitivity.",
        points: [
          { icon: "hosting", label: "France, on-prem or hybrid hosting" },
          { icon: "rag", label: "RAG on approved sources" },
          { icon: "routing", label: "Model-agnostic sensitivity routing" },
          { icon: "audit", label: "Access rights, logs and audit" },
        ],
        steps: ["Host", "Index", "Route", "Audit"],
        image: "/services/infra-souveraine-hub.png",
        imageAlt:
          "Isometric diagram: sovereign hosting, document index and model routing.",
        ctaHref: "/services/infra-souveraine",
      },
      {
        tag: "04",
        title: "ADOPTION & TRANSFER",
        desc: "A useful agent must be adopted. We onboard teams and transfer the skills they need.",
        points: [
          { icon: "training", label: "Training on actual use cases" },
          { icon: "rollout", label: "Progressive rollout" },
          { icon: "docs", label: "Documentation and transfer" },
          { icon: "improve", label: "Outcome tracking and improvement" },
        ],
        steps: ["Train", "Roll out", "Transfer", "Improve"],
        image: "/services/adoption-transfert-hub.png",
        imageAlt:
          "Isometric diagram: training, rollout, documentation, skills transfer and outcome steering.",
        ctaHref: "/services/equipes-embarquees",
        flip: true,
      },
    ],
    overview: "Overview",
    items: [
      {
        slug: "strategie-ia",
        tag: "01",
        title: "Diagnostic & governance",
        desc: "Observe fieldwork, prioritize high-impact workflows and set the frame before automating.",
        points: [
          "Workflow immersion",
          "ROI / feasibility prioritization",
          "Data, risk and supervision frame",
          "Roadmap with agreed indicators",
        ],
      },
      {
        slug: "agents-metier",
        tag: "02",
        title: "Business agents",
        desc: "Agents embedded in your tools to carry collection, checks, follow-ups and preparation.",
        points: [
          "CRM, ERP and messaging integration",
          "Business rules and human escalation",
          "Action and source traceability",
          "Time and cycle measurement",
        ],
      },
      {
        slug: "infra-souveraine",
        tag: "03",
        title: "Sovereign foundation & routing",
        desc: "Sensitive data stays inside the agreed perimeter. Models are selected by task and sensitivity.",
        points: [
          "France, on-prem or hybrid hosting",
          "RAG on approved sources",
          "Model-agnostic sensitivity routing",
          "Access rights, logs and audit",
        ],
      },
      {
        slug: "equipes-embarquees",
        tag: "04",
        title: "Adoption & transfer",
        desc: "A useful agent must be adopted. We onboard teams and transfer the skills they need.",
        points: [
          "Training on actual use cases",
          "Progressive rollout",
          "Documentation and transfer",
          "Outcome tracking and improvement",
        ],
      },
    ],
  },
} as const;

export const METHODE = {
  fr: {
    eyebrow: "NOTRE APPROCHE",
    title: "Le protocole SIGNAL",
    sub: "Six étapes, chacune avec un livrable concret. Rien n'est automatisé sans avoir été observé ; rien ne passe en production sans gouvernance.",
    governanceTitle: "GOUVERNANCE",
    governanceH: "Ce qui est figé avant le premier agent",
    governanceItems: [
      "Registre des finalités et des données autorisées",
      "Matrice droits / rôles et règles d'escalade humaine",
      "Indicateurs de succès et seuils d'arrêt",
      "Journal d'audit et revue périodique",
    ],
    proofTitle: "REPÈRES",
    steps: [
      {
        letter: "S",
        title: "Sonder",
        desc: "Observer le travail réel, au plus près des équipes et des exceptions.",
        deliverable: "Cartographie processus et heatmap de charge",
        timeline: "Semaines 1–2",
        artifacts: "Note de cadrage terrain, registre des exceptions",
      },
      {
        letter: "I",
        title: "Identifier",
        desc: "Prioriser les cas d'usage par impact, faisabilité et risque.",
        deliverable: "Short-list ROI / risque validée",
        timeline: "Semaine 2–3",
        artifacts: "Matrice impact-faisabilité, backlog priorisé",
      },
      {
        letter: "G",
        title: "Gouverner",
        desc: "Définir les données, les droits, la supervision et la traçabilité.",
        deliverable: "Charte de gouvernance et architecture cible",
        timeline: "Semaines 3–4",
        artifacts: "Registre finalités, matrice droits, schéma d'architecture",
      },
      {
        letter: "N",
        title: "Normaliser",
        desc: "Installer le socle, les sources autorisées et le routage des modèles.",
        deliverable: "Socle technique et sources autorisées",
        timeline: "Semaines 4–6",
        artifacts: "Pipeline RAG, politique modèles, environnements",
      },
      {
        letter: "A",
        title: "Automatiser",
        desc: "Déployer les agents dans vos outils avec escalade humaine.",
        deliverable: "Agent(s) en production supervisée",
        timeline: "Semaines 6–10",
        artifacts: "Intégrations SI, règles métier, monitoring",
      },
      {
        letter: "L",
        title: "Libérer",
        desc: "Mesurer les gains, former les équipes et transférer.",
        deliverable: "Bilan gains et plan d'autonomie",
        timeline: "Semaines 10–12+",
        artifacts: "Tableau de bord, documentation, sessions de transfert",
      },
    ],
    differenceTitle: "NOTRE DIFFÉRENCE",
    differenceH: "Gouverner avant d'automatiser.",
    differenceP:
      "Les droits, les données autorisées, les validations humaines et les indicateurs sont définis avant le premier agent. La souveraineté et l'adoption ne sont pas des correctifs ajoutés après la démo.",
    acceleratorsTitle: "Accélérateurs",
    acceleratorsSub: "Des formats courts pour décider avant d'investir davantage.",
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
        desc: "Connecter vos données propriétaires à vos agents — différenciation réelle.",
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
    sub: "Six stages, each with a concrete deliverable. Nothing is automated before observation; nothing reaches production without governance.",
    governanceTitle: "GOVERNANCE",
    governanceH: "What is fixed before the first agent",
    governanceItems: [
      "Register of purposes and approved data",
      "Rights / roles matrix and human escalation rules",
      "Success indicators and stop thresholds",
      "Audit log and periodic review",
    ],
    proofTitle: "BENCHMARKS",
    steps: [
      {
        letter: "S",
        title: "Study",
        desc: "Observe real work, close to teams and operational exceptions.",
        deliverable: "Process map and workload heatmap",
        timeline: "Weeks 1–2",
        artifacts: "Field scoping note, exception register",
      },
      {
        letter: "I",
        title: "Identify",
        desc: "Prioritize use cases by impact, feasibility and risk.",
        deliverable: "Validated ROI / risk short-list",
        timeline: "Weeks 2–3",
        artifacts: "Impact-feasibility matrix, prioritized backlog",
      },
      {
        letter: "G",
        title: "Govern",
        desc: "Define data, rights, supervision and traceability.",
        deliverable: "Governance charter and target architecture",
        timeline: "Weeks 3–4",
        artifacts: "Purpose register, rights matrix, architecture diagram",
      },
      {
        letter: "N",
        title: "Normalize",
        desc: "Install the foundation, approved sources and model routing.",
        deliverable: "Technical foundation and approved sources",
        timeline: "Weeks 4–6",
        artifacts: "RAG pipeline, model policy, environments",
      },
      {
        letter: "A",
        title: "Automate",
        desc: "Deploy agents inside your tools with human escalation.",
        deliverable: "Agent(s) in supervised production",
        timeline: "Weeks 6–10",
        artifacts: "System integrations, business rules, monitoring",
      },
      {
        letter: "L",
        title: "Liberate",
        desc: "Measure outcomes, train teams and transfer skills.",
        deliverable: "Gain report and autonomy plan",
        timeline: "Weeks 10–12+",
        artifacts: "Dashboard, documentation, transfer sessions",
      },
    ],
    differenceTitle: "OUR DIFFERENCE",
    differenceH: "Govern before automating.",
    differenceP:
      "Rights, approved data, human validations and indicators are defined before the first agent. Sovereignty and adoption are not patches added after the demo.",
    acceleratorsTitle: "Accelerators",
    acceleratorsSub: "Short formats to decide before investing further.",
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
        desc: "Connect proprietary data to your agents — real differentiation.",
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
    eyebrow: "MÉTIERS",
    title: "Là où les solutions génériques échoue",
    sub: "Donnée sensible, responsabilité forte, expertise rare : découvrez comment des agents supervisés peuvent absorber le répétitif sans diluer votre métier.",
    overview: "Tous les métiers",
    discover: "Découvrir →",
    discoverAll: "Voir les secteurs",
    filterLabel: "Filtrer",
    searchPlaceholder: "Rechercher un métier…",
    results: "métiers",
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
      deliverH: "Ce que Remparia peut construire pour vous",
      scenarios: "Cas d'usage",
      scenariosH: "Trois cas d'usage concrets",
      scenariosNote:
        "Scénarios illustratifs — chaque déploiement est cadré avec des KPIs signés avant mise en production.",
      services: "Services liés",
      servicesH: "Missions utiles pour ce secteur",
      faq: "FAQ",
      faqH: "Questions fréquentes",
      more: "Autres métiers",
      moreH: "Explorer d'autres professions",
      cta: "Parlons de votre processus",
      need: "Besoin",
      remparia: "Remparia",
    },
    items: [
      {
        slug: "finance-assurance",
        title: "Finance & assurance",
        desc: "Pré-analyse et contrôles assistés, avec décision humaine et traçabilité.",
      },
      {
        slug: "sante",
        title: "Santé & professions réglementées",
        desc: "Charge administrative allégée, secret professionnel et validation clinique préservés.",
      },
      {
        slug: "industrie",
        title: "Industrie & opérations",
        desc: "Savoir opérationnel accessible et exceptions préparées dans vos systèmes.",
      },
      {
        slug: "services-conseil",
        title: "Services & conseil",
        desc: "Capacité retrouvée sur les livrables sans standardiser le jugement.",
      },
      {
        slug: "tech-produit",
        title: "Tech & produit",
        desc: "Fonctions agent gouvernées, observables et transférées à vos équipes.",
      },
      {
        slug: "secteur-public",
        title: "Secteur public",
        desc: "Délais réduits, décision publique préservée et données maîtrisées.",
      },
      ...EXTRA_SECTEUR_ITEMS.fr,
    ],
  },
  en: {
    eyebrow: "PROFESSIONS",
    title: "Where generic tools fall short",
    sub: "Sensitive data, strong accountability, scarce expertise: see how supervised agents can absorb repetitive work without diluting your profession.",
    overview: "All professions",
    discover: "Discover →",
    discoverAll: "View sectors",
    filterLabel: "Filter",
    searchPlaceholder: "Search a profession…",
    results: "professions",
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
      deliverH: "What Remparia can build for you",
      scenarios: "Use cases",
      scenariosH: "Three concrete use cases",
      scenariosNote:
        "Illustrative scenarios — every deployment is scoped with signed KPIs before production.",
      services: "Related services",
      servicesH: "Missions that fit this industry",
      faq: "FAQ",
      faqH: "Frequently asked questions",
      more: "Other professions",
      moreH: "Explore other professions",
      cta: "Talk through your workflow",
      need: "Need",
      remparia: "Remparia",
    },
    items: [
      {
        slug: "finance-assurance",
        title: "Finance & insurance",
        desc: "Assisted pre-analysis and controls, with human decisions and traceability.",
      },
      {
        slug: "sante",
        title: "Healthcare & regulated professions",
        desc: "Lighter administrative load with professional secrecy and clinical validation preserved.",
      },
      {
        slug: "industrie",
        title: "Industry & operations",
        desc: "Accessible operational knowledge and prepared exceptions inside your systems.",
      },
      {
        slug: "services-conseil",
        title: "Services & consulting",
        desc: "Recovered delivery capacity without standardizing professional judgment.",
      },
      {
        slug: "tech-produit",
        title: "Tech & product",
        desc: "Governed, observable agent features progressively transferred to your teams.",
      },
      {
        slug: "secteur-public",
        title: "Public sector",
        desc: "Shorter lead times, preserved public decisions and controlled data.",
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

export const APROPOS = {
  fr: {
    eyebrow: "QUI NOUS SOMMES",
    title: "Deux cofondateurs. Ceux qui vendent livrent.",
    sub: "Remparia est fondé et opéré par Tannous Mekari et Sébastien Houzet — du premier échange au passage en production.",
    convictionH: "L'humain décide, l'agent exécute.",
    convictionP:
      "Les agents ne sont pas là pour remplacer. Elle est là pour libérer du temps sur ce qui compte. Vos équipes gardent la main, la décision et la responsabilité — les agents portent la charge répétitive.",
    collectiveTitle: "Les associés opérateurs",
    collectiveSub:
      "Pas de couche commerciale déconnectée : stratégie, ingénierie et adoption sont portées par ceux qui s'engagent avec vous.",
    teamTitle: "Les cofondateurs",
    teamSub:
      "Tannous Mekari et Sébastien Houzet — ceux qui cadreront votre mission sont ceux qui la livreront en production.",
    collective: [
      {
        tag: "STRATÉGIE & DELIVERY",
        title: "Du processus à la feuille de route",
        desc: "Cadrage, gouvernance, adoption et pilotage des gains jusqu'au terrain.",
      },
      {
        tag: "INGÉNIERIE & SOLUTIONS",
        title: "Du socle à l'agent",
        desc: "Architecture, intégration, sécurité par conception et mise en production.",
      },
      {
        tag: "UN SEUL ENGAGEMENT",
        title: "La capacité retrouvée",
        desc: "Des indicateurs définis avant le déploiement, suivis dans vos outils réels.",
      },
    ],
    engagementTitle: "Nos engagements",
    engagement: [
      "Forfait de mise en œuvre cadré avant signature",
      "Données, droits et supervision définis avant automatisation",
      "Gains mesurés selon des indicateurs convenus ensemble",
      "Transfert de compétences inclus — pas de boîte noire",
    ],
    contactLine: "Écrire à l’équipe",
    pillars: [
      {
        tag: "SUPERVISION HUMAINE",
        title: "L'expert garde la décision",
      },
      {
        tag: "DONNÉES SOUS CONTRÔLE",
        title: "Un périmètre défini avec vous",
      },
      {
        tag: "TEMPS RENDU",
        title: "Mesuré avant de passer à l'échelle",
      },
    ],
    positionH: "Deux associés responsables du cadrage, du code et du résultat.",
    positions: [
      {
        tag: "[ 01 ] FORMATION",
        title: "Ils expliquent",
        desc: "Excellents pour comprendre les agents. Mais la formation seule ne transforme pas vos opérations.",
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
        title: "Nous opérons",
        desc: "Des associés engagés du terrain à la production, avec mesure et transfert.",
        highlight: true,
      },
    ],
  },
  en: {
    eyebrow: "WHO WE ARE",
    title: "Two cofounders. The people who sell also ship.",
    sub: "Remparia is founded and operated by Tannous Mekari and Sébastien Houzet — from the first conversation to production.",
    convictionH: "Humans decide, agents execute.",
    convictionP:
      "Agents aren't here to replace. It's here to free up time for what matters. Your teams keep control, decisions and accountability — agents carry the repetitive load.",
    collectiveTitle: "Operator partners",
    collectiveSub:
      "No disconnected sales layer: strategy, engineering and adoption are carried by the people who commit to you.",
    teamTitle: "The cofounders",
    teamSub:
      "Tannous Mekari and Sébastien Houzet — the people who scope your engagement lead production delivery.",
    collective: [
      {
        tag: "STRATEGY & DELIVERY",
        title: "From workflow to roadmap",
        desc: "Scoping, governance, adoption and outcome steering through to fieldwork.",
      },
      {
        tag: "ENGINEERING & SOLUTIONS",
        title: "From foundation to agent",
        desc: "Architecture, integration, security by design and production launch.",
      },
      {
        tag: "ONE COMMITMENT",
        title: "Recovered capacity",
        desc: "Indicators agreed before deployment and tracked in your actual tools.",
      },
    ],
    engagementTitle: "Our commitments",
    engagement: [
      "Implementation fee framed before signature",
      "Data, rights and supervision defined before automation",
      "Outcomes measured against jointly agreed indicators",
      "Skills transfer included — no black box",
    ],
    contactLine: "Email the team",
    pillars: [
      {
        tag: "HUMAN SUPERVISION",
        title: "Experts keep the decision",
      },
      {
        tag: "DATA UNDER CONTROL",
        title: "A perimeter agreed with you",
      },
      {
        tag: "TIME RETURNED",
        title: "Measured before scaling",
      },
    ],
    positionH: "Two partners accountable for the frame, the code and the outcome.",
    positions: [
      {
        tag: "[ 01 ] TRAINING",
        title: "They explain",
        desc: "Great for understanding agents. But training alone won't transform operations.",
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
        title: "We operate",
        desc: "Partners committed from fieldwork to production, with measurement and transfer.",
        highlight: true,
      },
    ],
  },
} as const;

export const RESSOURCES = {
  fr: {
    eyebrow: "RESSOURCES",
    title: "Comprendre avant d'automatiser",
    sub: "Méthode, critères de décision et repères pour transformer un processus réel en agent supervisé — sans céder la décision ni le contrôle.",
    guidesTitle: "Guides & parcours",
    statsTitle: "Repères Remparia",
    items: [
      {
        tag: "MÉTHODE",
        title: "Le protocole SIGNAL",
        desc: "Six étapes du terrain à un usage mesurable — livrables, gouvernance et délais par étape.",
        href: "/methode",
      },
      {
        tag: "SERVICES",
        title: "Notre accompagnement",
        desc: "Diagnostic, agents métier, socle souverain et transfert — périmètre et engagements.",
        href: "/services",
      },
      {
        tag: "MÉTIERS",
        title: "Secteurs & professions",
        desc: "29 verticales — trois cas d'usage concrets et FAQ par métier.",
        href: "/secteurs",
      },
      {
        tag: "CONTACT",
        title: "Diagnostic SIGNAL",
        desc: "Identifiez le processus qui mérite réellement d'être automatisé — 1 h avec un associé.",
        href: "/contact",
      },
      {
        tag: "CARRIÈRES",
        title: "Rejoindre Remparia",
        desc: "Réseau d'experts indépendants — agents en production, pas des POC.",
        href: "/carrieres",
      },
    ],
  },
  en: {
    eyebrow: "RESOURCES",
    title: "Understand before automating",
    sub: "Method, decision criteria and benchmarks to turn a real workflow into a supervised agent — without giving up decisions or control.",
    guidesTitle: "Guides & paths",
    statsTitle: "Remparia benchmarks",
    items: [
      {
        tag: "METHOD",
        title: "The SIGNAL protocol",
        desc: "Six stages from fieldwork to measurable use — deliverables, governance and timelines per stage.",
        href: "/methode",
      },
      {
        tag: "SERVICES",
        title: "Our services",
        desc: "Diagnostic, business agents, sovereign foundation and transfer — scope and commitments.",
        href: "/services",
      },
      {
        tag: "PROFESSIONS",
        title: "Sectors & professions",
        desc: "29 verticals — three concrete use cases and FAQ per profession.",
        href: "/secteurs",
      },
      {
        tag: "CONTACT",
        title: "SIGNAL diagnostic",
        desc: "Find the workflow that genuinely deserves automation — 1 hr with a partner.",
        href: "/contact",
      },
      {
        tag: "CAREERS",
        title: "Join Remparia",
        desc: "Network of independent experts — agents in production, not POCs.",
        href: "/carrieres",
      },
    ],
  },
} as const;

export const CONTACT = {
  fr: {
    eyebrow: "CONTACT",
    title: "Apportez le processus qui vous coûte du temps",
    sub: "En une heure, nous cadrons le répétitif, les contraintes de données et les gains à mesurer. Réponse d'un associé, pas d'un commercial.",
    email: CONTACT_EMAIL,
    cta: "Écrire à un associé",
    fields: {
      name: "Nom et prénom",
      company: "Entreprise",
      email: "Email professionnel",
      message: "Quel processus vous coûte le plus de temps ?",
      submit: "Présenter mon processus",
      sending: "Envoi…",
    },
    validation: {
      nameRequired: "Indiquez votre nom et prénom.",
      nameInvalid: "Nom invalide (2 caractères minimum, lettres uniquement).",
      companyRequired: "Indiquez le nom de votre entreprise.",
      companyInvalid: "Nom d’entreprise invalide (2 à 160 caractères).",
      emailRequired: "Indiquez votre email professionnel.",
      emailInvalid: "Format d’email invalide.",
      emailPersonal:
        "Utilisez votre email professionnel (domaine entreprise). Les adresses Gmail, Outlook, Orange, Free, etc. ne sont pas acceptées.",
      messageRequired: "Décrivez le processus à cadrer.",
      messageTooShort: "Message trop court (20 caractères minimum).",
      messageTooLong: "Message trop long (5 000 caractères maximum).",
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
    title: "Bring the workflow costing you time",
    sub: "In one hour, we frame repetitive work, data constraints and the gains to measure. A partner replies, not a salesperson.",
    email: CONTACT_EMAIL,
    cta: "Email a partner",
    fields: {
      name: "Full name",
      company: "Company",
      email: "Work email",
      message: "Which workflow costs you the most time?",
      submit: "Share my workflow",
      sending: "Sending…",
    },
    validation: {
      nameRequired: "Enter your full name.",
      nameInvalid: "Invalid name (at least 2 characters, letters only).",
      companyRequired: "Enter your company name.",
      companyInvalid: "Invalid company name (2–160 characters).",
      emailRequired: "Enter your work email.",
      emailInvalid: "Invalid email format.",
      emailPersonal:
        "Use your work email (company domain). Gmail, Outlook, Yahoo, iCloud, etc. are not accepted.",
      messageRequired: "Describe the workflow to scope.",
      messageTooShort: "Message too short (20 characters minimum).",
      messageTooLong: "Message too long (5,000 characters maximum).",
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
      value: "HUMAIN",
      label: "la décision et la responsabilité restent chez vos experts",
      color: "#c8ff00",
    },
    {
      value: "CADRÉ",
      label: "les données suivent le périmètre défini avec vous",
      color: "#fff",
    },
    {
      value: "MESURÉ",
      label: "les résultats attendus sont définis avant de passer à l'échelle",
      color: "#fff",
    },
  ],
  en: [
    {
      value: "HUMAN",
      label: "decisions and accountability stay with your experts",
      color: "#c8ff00",
    },
    {
      value: "CONTROL",
      label: "data follows the perimeter agreed with you",
      color: "#fff",
    },
    {
      value: "MEASURED",
      label: "target outcomes are defined before scaling",
      color: "#fff",
    },
  ],
} as const;
