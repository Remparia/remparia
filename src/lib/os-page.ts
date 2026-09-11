import type { Lang } from "./content";

export type OsCapabilityId =
  | "identity"
  | "policies"
  | "memory"
  | "tools"
  | "observability"
  | "audit"
  | "security";

export type OsOrbitCopy = {
  identity: readonly [string, string, string];
  policies: readonly [string, string, string];
  memory: readonly [string, string, string];
  tools: readonly [string, string, string, string];
  observability: readonly { k: string; v: string }[];
  audit: readonly { t: string; e: string }[];
  security: readonly [string, string, string, string];
};

export type OsCapability = {
  id: OsCapabilityId;
  label: string;
  title: string;
  body: string;
  bullets: string[];
};

export const OS_PAGE = {
  fr: {
    hero: {
      index: "01 / REMPARIA OS",
      titleBefore: "Votre force de travail IA a besoin d’un ",
      titleAccent: "système d’exploitation.",
      sub: "Un plan de contrôle unique pour orchestrer agents, modèles, données d’entreprise et décisions humaines.",
      ctaPrimary: "Explorer Remparia OS",
      ctaPrimaryHref: "/demarrer",
      ctaSecondary: "Voir l’architecture",
      ctaSecondaryHref: "#architecture",
      visualAlt:
        "SIGNAL — votre entreprise connectée à vos processus, données, personnes et systèmes",
    },
    ribbon: [
      { id: "identity", label: "Identité", icon: "/icon-customer.png" },
      { id: "policies", label: "Politiques", icon: "/icon-policies.png" },
      { id: "memory", label: "Mémoire", icon: "/icon-database.png" },
      { id: "tools", label: "Outils", icon: "/icon-tools.png" },
      { id: "observability", label: "Observabilité", icon: "/icon-observability.png" },
      { id: "audit", label: "Audit", icon: "/icon-docs.png" },
      { id: "security", label: "Sécurité", icon: "/icon-lock.png" },
    ],
    chaos: {
      index: "02 / POURQUOI UN OS",
      title: "Plus d’agents. Plus de modèles. Plus de chaos.",
      body: "Sans couche de contrôle, chaque équipe branche ses propres outils IA. Les données fuient, les coûts explosent, personne ne sait qui a fait quoi.",
      without: "Sans couche d’exploitation",
      with: "Avec Remparia OS",
    },
    controlPlane: {
      index: "03 / LE CONTROL PLANE",
      title: "Un control plane. Toutes les capacités IA.",
      body: "Remparia OS fournit la couche d’exploitation entre votre force de travail IA et votre entreprise.",
      bullets: [
        "Les agents restent spécialisés.",
        "Les modèles restent interchangeables.",
        "Vos systèmes restent en place.",
      ],
      closing: "Remparia orchestre la façon dont tout fonctionne ensemble.",
      layers: [
        { label: "Force de travail IA", detail: "Agents spécialisés par fonction" },
        { label: "Orchestration", detail: "Routage, files, escalade" },
        { label: "Gouvernance · Sécurité · Audit", detail: "Politiques et traçabilité" },
        { label: "Modèles / LLM / API", detail: "Multi-fournisseurs, réversible" },
        { label: "Données d’entreprise", detail: "CRM, ERP, email, documents" },
      ],
    },
    capabilities: {
      index: "04 / CAPACITÉS OS",
      title: "Ce que l’OS gouverne",
      items: [
        {
          id: "identity",
          label: "Identité",
          title: "Chaque agent a une identité.",
          body: "Chaque agent possède un profil, des droits et un propriétaire humain nommé. Zéro accès par défaut.",
          bullets: [
            "Profils agents et rôles métier",
            "Propriétaire humain par agent",
            "Accès zéro par défaut",
            "Permissions granulaires par outil",
          ],
        },
        {
          id: "policies",
          label: "Politiques",
          title: "Vos règles, appliquées partout.",
          body: "Encodez vos politiques métier, conformité et limites de délégation. L’OS les applique avant chaque action.",
          bullets: [
            "Règles métier et conformité",
            "Limites de délégation par agent",
            "Validation humaine configurable",
            "Exceptions tracées et auditables",
          ],
        },
        {
          id: "memory",
          label: "Mémoire",
          title: "La connaissance qui persiste.",
          body: "L’OS capitalise le contexte, les décisions et les corpus validés — sans fuite entre périmètres.",
          bullets: [
            "Mémoire par agent et par équipe",
            "Corpus validés et versionnés",
            "Pas d’apprentissage sans validation",
            "Isolation par client / périmètre",
          ],
        },
        {
          id: "tools",
          label: "Outils",
          title: "Branché sur votre stack.",
          body: "CRM, ERP, email, documents — l’OS connecte les agents à vos outils existants sans les remplacer.",
          bullets: [
            "Intégrations CRM, ERP, email",
            "Actions dans vos systèmes réels",
            "Pas de remplacement imposé",
            "Connecteurs gouvernés et audités",
          ],
        },
        {
          id: "observability",
          label: "Observabilité",
          title: "Tout est visible en temps réel.",
          body: "Suivez chaque exécution, chaque coût, chaque escalade. Tableaux de bord pour les équipes ops et métier.",
          bullets: [
            "Logs d’exécution en temps réel",
            "Coûts par agent et par modèle",
            "Alertes et seuils configurables",
            "Métriques de succès et SLA",
          ],
        },
        {
          id: "audit",
          label: "Audit",
          title: "Une trace opposable.",
          body: "Chaque consultation, chaque action, chaque décision est journalisée — exploitable par vos auditeurs.",
          bullets: [
            "Journal complet et immuable",
            "Exports pour conformité",
            "Traçabilité bout en bout",
            "Preuves pour régulateurs",
          ],
        },
        {
          id: "security",
          label: "Sécurité",
          title: "Souveraineté by design.",
          body: "Hébergement FR/UE ou on-premise. Les agents ne détiennent jamais un mot de passe. Données sensibles en local.",
          bullets: [
            "Hébergement souverain choisi",
            "Exécution en environnement cloisonné",
            "Chiffrement et segmentation",
            "Survie aux pannes fournisseurs",
          ],
        },
      ] satisfies OsCapability[],
      orbit: {
        identity: ["Rôle", "Accès", "Owner"],
        policies: ["ALLOW", "REVIEW", "BLOCK"],
        memory: ["Contexte", "Savoir", "Historique"],
        tools: ["CRM", "ERP", "Email", "API"],
        observability: [
          { k: "Latency", v: "42 ms" },
          { k: "Cost", v: "€0.02" },
          { k: "Success", v: "94%" },
        ],
        audit: [
          { t: "09:14:02", e: "action" },
          { t: "09:14:05", e: "lecture" },
          { t: "09:14:08", e: "escalade" },
          { t: "09:14:11", e: "validé" },
        ],
        security: ["Access", "Secrets", "Data", "Execution"],
      },
    },
    grid: {
      orchestration: {
        index: "05 / ORCHESTRATION",
        title: "Les agents ne travaillent pas seuls. Les vôtres non plus.",
        sub: "Remparia OS coordonne outils spécialisés et expertise humaine pour agir ensemble.",
        humanReview: "Revue humaine",
        orchestrator: "Orchestrateur",
        agents: [
          { label: "Sales AI", tool: "CRM" },
          { label: "Doc AI", tool: "ERP" },
          { label: "Finance AI", tool: "BI" },
        ],
        logTitle: "Exécution en direct",
        log: [
          { time: "09:14:02", event: "Demande reçue — qualification lead" },
          { time: "09:14:03", event: "Routage → Sales AI" },
          { time: "09:14:05", event: "CRM mis à jour — escalade humaine" },
          { time: "09:14:08", event: "Validation manager — approuvé" },
        ],
        footer:
          "Les agents collaborent. Les outils exécutent. Les humains décident. Remparia OS orchestre l'exécution.",
      },
      humanControl: {
        index: "06 / CONTRÔLE HUMAIN",
        title: "Autonome quand ça peut l'être. Humain quand ça doit l'être.",
        sub: "Définissez le niveau d'autonomie pour chaque action. L'IA suit vos règles.",
        stages: ["Assister", "Recommander", "Approuver", "Autonome"],
        activeStage: 2,
        policies: [
          {
            label: "Autoriser",
            desc: "Exécuter automatiquement dans le cadre des politiques définies.",
            tone: "allow",
          },
          {
            label: "Revoir",
            desc: "Validation humaine requise.",
            tone: "review",
          },
          {
            label: "Bloquer",
            desc: "Exécution interdite.",
            tone: "block",
          },
        ],
      },
      openDesign: {
        index: "07 / OUVERT PAR DESIGN",
        title: "Le bon modèle pour chaque tâche.",
        sub: "Utilisez le bon modèle pour la bonne tâche. Sans enfermement. Flexibilité totale.",
        models: ["OpenAI", "Anthropic", "Mistral", "Llama", "Local"],
        workforceLabel: "AI Workforce",
      },
      deploy: {
        index: "08 / DÉPLOYER PARTOUT",
        title: "Votre IA. Votre infrastructure. Vos règles.",
        sub: "Déployez Remparia OS selon vos besoins de sécurité, souveraineté et infrastructure.",
        options: [
          { label: "Remparia Cloud", desc: "La voie la plus rapide vers la production." },
          { label: "Cloud souverain", desc: "Souveraineté des données by design." },
          { label: "On-premise", desc: "Contrôle maximal de l'infrastructure." },
        ],
      },
      connect: {
        index: "09 / CONNECTER VOTRE ENTREPRISE",
        title: "Ne remplacez pas votre stack. Opérez au-dessus.",
        sub: "Connectez l'IA aux outils, applications et données que votre organisation utilise déjà.",
        integrations: [
          "Salesforce",
          "SAP",
          "Microsoft 365",
          "HubSpot",
          "Sage",
          "Snowflake",
          "API",
        ],
        workforceLabel: "AI Workforce",
        footer:
          "Vos systèmes restent la source de vérité. Remparia devient la couche d'intelligence au-dessus.",
      },
      operations: {
        index: "10 / MESURER L'IMPACT",
        title: "Le déploiement n'est que le début.",
        sub: "Observez ce que l'IA orchestre. Mesurez ce qui compte. Prouvez l'impact business.",
        liveLabel: "REMPARIA OS",
        metrics: [
          { label: "Agents actifs", value: "24" },
          { label: "Tâches aujourd'hui", value: "1 284" },
          { label: "Taux de succès", value: "98,7%" },
          { label: "Heures gagnées", value: "4,2", trend: "↑" },
        ],
        tableHead: ["Agent", "Statut", "Tâches", "Succès"],
        agents: [
          { name: "Sales AI", status: "Actif", tasks: "312", success: "96%" },
          { name: "Document AI", status: "Actif", tasks: "284", success: "91%" },
          { name: "Finance AI", status: "Revue", tasks: "198", success: "88%" },
          { name: "Operations AI", status: "Actif", tasks: "490", success: "94%" },
        ],
        footer: "Build. Operate. Govern. Improve.",
      },
    },
    pipeline: {
      title: "De la découverte à l’exploitation",
      steps: [
        {
          label: "SIGNAL",
          desc: "Découvrir les opportunités",
          image: "/os-pipeline-signal.jpg",
        },
        {
          label: "STUDIO",
          desc: "Construire les agents",
          image: "/os-pipeline-studio.jpg",
        },
        {
          label: "AI WORKFORCE",
          desc: "Déployer la force de travail",
          image: "/os-pipeline-workforce.jpg",
        },
        {
          label: "REMPARIA OS",
          desc: "Orchestrer et gouverner",
          image: "/os-pipeline-remparia-os.jpg",
        },
        {
          label: "MESURER",
          desc: "Piloter les gains",
          image: "/os-pipeline-mesurer.jpg",
        },
      ],
    },
    final: {
      title: "N’ajoutez pas un autre outil IA. Construisez votre modèle opérationnel IA.",
      ctaPrimary: "Commencer par SIGNAL",
      ctaPrimaryHref: "/signal",
      ctaSecondary: "Parler à un expert",
      ctaSecondaryHref: "/contact",
    },
  },
  en: {
    hero: {
      index: "01 / REMPARIA OS",
      titleBefore: "Your AI workforce needs an ",
      titleAccent: "operating system.",
      sub: "One control layer to orchestrate agents, models, enterprise data and human decisions.",
      ctaPrimary: "Explore Remparia OS",
      ctaPrimaryHref: "/demarrer",
      ctaSecondary: "See architecture",
      ctaSecondaryHref: "#architecture",
      visualAlt:
        "SIGNAL — your company connected to your processes, data, people and systems",
    },
    ribbon: [
      { id: "identity", label: "Identity", icon: "/icon-customer.png" },
      { id: "policies", label: "Policies", icon: "/icon-policies.png" },
      { id: "memory", label: "Memory", icon: "/icon-database.png" },
      { id: "tools", label: "Tools", icon: "/icon-tools.png" },
      { id: "observability", label: "Observability", icon: "/icon-observability.png" },
      { id: "audit", label: "Audit", icon: "/icon-docs.png" },
      { id: "security", label: "Security", icon: "/icon-lock.png" },
    ],
    chaos: {
      index: "02 / WHY AN OS",
      title: "More agents. More models. More chaos.",
      body: "Without a control layer, every team plugs in their own AI tools. Data leaks, costs explode, nobody knows who did what.",
      without: "Without an operating layer",
      with: "With Remparia OS",
    },
    controlPlane: {
      index: "03 / THE CONTROL PLANE",
      title: "One control plane. Every AI capability.",
      body: "Remparia OS provides the operating layer between your AI workforce and your enterprise.",
      bullets: [
        "Agents remain specialized.",
        "Models remain interchangeable.",
        "Your systems remain in place.",
      ],
      closing: "Remparia orchestrates how everything works together.",
      layers: [
        { label: "AI Workforce", detail: "Specialized agents by function" },
        { label: "Orchestration", detail: "Routing, queues, escalation" },
        { label: "Governance · Security · Audit", detail: "Policies and traceability" },
        { label: "Models / LLM / API", detail: "Multi-vendor, reversible" },
        { label: "Enterprise Data", detail: "CRM, ERP, email, documents" },
      ],
    },
    capabilities: {
      index: "04 / OS CAPABILITIES",
      title: "What the OS governs",
      items: [
        {
          id: "identity",
          label: "Identity",
          title: "Every agent has an identity.",
          body: "Each agent has a profile, rights and a named human owner. Zero access by default.",
          bullets: [
            "Agent profiles and business roles",
            "Named human owner per agent",
            "Zero access by default",
            "Granular permissions per tool",
          ],
        },
        {
          id: "policies",
          label: "Policies",
          title: "Your rules, applied everywhere.",
          body: "Encode business rules, compliance and delegation limits. The OS applies them before every action.",
          bullets: [
            "Business rules and compliance",
            "Delegation limits per agent",
            "Configurable human validation",
            "Traced and auditable exceptions",
          ],
        },
        {
          id: "memory",
          label: "Memory",
          title: "Knowledge that persists.",
          body: "The OS captures context, decisions and validated corpora — without leakage across perimeters.",
          bullets: [
            "Memory per agent and team",
            "Validated, versioned corpora",
            "No learning without validation",
            "Isolation per client / perimeter",
          ],
        },
        {
          id: "tools",
          label: "Tools",
          title: "Plugged into your stack.",
          body: "CRM, ERP, email, documents — the OS connects agents to your existing tools without replacing them.",
          bullets: [
            "CRM, ERP, email integrations",
            "Actions in your real systems",
            "No forced replacement",
            "Governed, audited connectors",
          ],
        },
        {
          id: "observability",
          label: "Observability",
          title: "Everything visible in real time.",
          body: "Track every execution, cost and escalation. Dashboards for ops and business teams.",
          bullets: [
            "Real-time execution logs",
            "Cost per agent and model",
            "Configurable alerts and thresholds",
            "Success metrics and SLAs",
          ],
        },
        {
          id: "audit",
          label: "Audit",
          title: "An opposable trail.",
          body: "Every query, action and decision is logged — usable by your auditors.",
          bullets: [
            "Complete, immutable log",
            "Compliance exports",
            "End-to-end traceability",
            "Evidence for regulators",
          ],
        },
        {
          id: "security",
          label: "Security",
          title: "Sovereignty by design.",
          body: "FR/EU or on-premise hosting. Agents never hold passwords. Sensitive data stays local.",
          bullets: [
            "Chosen sovereign hosting",
            "Sandboxed execution",
            "Encryption and segmentation",
            "Survive vendor outages",
          ],
        },
      ] satisfies OsCapability[],
      orbit: {
        identity: ["Role", "Access", "Owner"],
        policies: ["ALLOW", "REVIEW", "BLOCK"],
        memory: ["Context", "Knowledge", "History"],
        tools: ["CRM", "ERP", "Email", "API"],
        observability: [
          { k: "Latency", v: "42 ms" },
          { k: "Cost", v: "€0.02" },
          { k: "Success", v: "94%" },
        ],
        audit: [
          { t: "09:14:02", e: "action" },
          { t: "09:14:05", e: "read" },
          { t: "09:14:08", e: "escalate" },
          { t: "09:14:11", e: "approved" },
        ],
        security: ["Access", "Secrets", "Data", "Execution"],
      },
    },
    grid: {
      orchestration: {
        index: "05 / ORCHESTRATION",
        title: "Agents don't work alone. Neither should yours.",
        sub: "Remparia OS coordinates specialized tools and human expertise to work together.",
        humanReview: "Human Review",
        orchestrator: "Orchestrator",
        agents: [
          { label: "Sales AI", tool: "CRM" },
          { label: "Doc AI", tool: "ERP" },
          { label: "Finance AI", tool: "BI" },
        ],
        logTitle: "Live Execution",
        log: [
          { time: "09:14:02", event: "Request received — lead qualification" },
          { time: "09:14:03", event: "Routing → Sales AI" },
          { time: "09:14:05", event: "CRM updated — human escalation" },
          { time: "09:14:08", event: "Manager validation — approved" },
        ],
        footer:
          "Agents collaborate. Tools execute. Humans decide. Remparia OS orchestrates the entire execution.",
      },
      humanControl: {
        index: "06 / HUMAN CONTROL",
        title: "Autonomous when it can be. Human when it should be.",
        sub: "Define the level of autonomy for every action. AI follows your rules.",
        stages: ["Assist", "Recommend", "Approve", "Autonomous"],
        activeStage: 2,
        policies: [
          {
            label: "Allow",
            desc: "Execute automatically within defined policies.",
            tone: "allow",
          },
          {
            label: "Review",
            desc: "Human approval required.",
            tone: "review",
          },
          {
            label: "Block",
            desc: "Execution prohibited.",
            tone: "block",
          },
        ],
      },
      openDesign: {
        index: "07 / OPEN BY DESIGN",
        title: "Choose the best model for every job.",
        sub: "Use the right model for the right task. No lock-in. Full flexibility.",
        models: ["OpenAI", "Anthropic", "Mistral", "Llama", "Local"],
        workforceLabel: "AI Workforce",
      },
      deploy: {
        index: "08 / DEPLOY ANYWHERE",
        title: "Your AI. Your infrastructure. Your rules.",
        sub: "Deploy Remparia OS according to your security, sovereignty and infrastructure needs.",
        options: [
          { label: "Remparia Cloud", desc: "Fastest path to production." },
          { label: "Sovereign Cloud", desc: "Data sovereignty by design." },
          { label: "On-Premise", desc: "Maximum infrastructure control." },
        ],
      },
      connect: {
        index: "09 / CONNECT YOUR ECOSYSTEM",
        title: "Don't replace your stack. Operate on top of it.",
        sub: "Connect AI to the tools, applications and data your organization already relies on.",
        integrations: [
          "Salesforce",
          "SAP",
          "Microsoft 365",
          "HubSpot",
          "Sage",
          "Snowflake",
          "API",
        ],
        workforceLabel: "AI Workforce",
        footer:
          "Your systems remain the systems of record. Remparia becomes the intelligence layer above them.",
      },
      operations: {
        index: "10 / MEASURE IMPACT",
        title: "Deployment is the beginning.",
        sub: "Observe what AI orchestrates. Measure what matters. Prove business impact.",
        liveLabel: "REMPARIA OS",
        metrics: [
          { label: "Active Agents", value: "24" },
          { label: "Tasks Today", value: "1,284" },
          { label: "Success Rate", value: "98.7%" },
          { label: "Hours Saved", value: "4.2", trend: "↑" },
        ],
        tableHead: ["Agents", "Status", "Tasks", "Success"],
        agents: [
          { name: "Sales AI", status: "Active", tasks: "312", success: "96%" },
          { name: "Document AI", status: "Active", tasks: "284", success: "91%" },
          { name: "Finance AI", status: "Review", tasks: "198", success: "88%" },
          { name: "Operations AI", status: "Active", tasks: "490", success: "94%" },
        ],
        footer: "Build. Operate. Govern. Improve.",
      },
    },
    pipeline: {
      title: "From discovery to operations",
      steps: [
        {
          label: "SIGNAL",
          desc: "Discover opportunities",
          image: "/os-pipeline-signal.jpg",
        },
        {
          label: "STUDIO",
          desc: "Build agents",
          image: "/os-pipeline-studio.jpg",
        },
        {
          label: "AI WORKFORCE",
          desc: "Deploy the workforce",
          image: "/os-pipeline-workforce.jpg",
        },
        {
          label: "REMPARIA OS",
          desc: "Orchestrate and govern",
          image: "/os-pipeline-remparia-os.jpg",
        },
        {
          label: "MEASURE",
          desc: "Track gains",
          image: "/os-pipeline-mesurer.jpg",
        },
      ],
    },
    final: {
      title: "Don’t add another AI tool. Build your AI operating model.",
      ctaPrimary: "Start with SIGNAL",
      ctaPrimaryHref: "/signal",
      ctaSecondary: "Talk to an expert",
      ctaSecondaryHref: "/contact",
    },
  },
} as const;

export function osPage(lang: Lang) {
  return OS_PAGE[lang];
}
