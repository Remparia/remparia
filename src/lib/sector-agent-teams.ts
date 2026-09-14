import type { SecteurDetail } from "./secteurs-details";

export type AgentAutonomy = "execute" | "prepare";

export type SectorAgent = {
  id: string;
  name: string;
  owner: string;
  trigger: string;
  mission: string;
  metric: string;
  autonomy: AgentAutonomy;
};

export type SectorAgentTeam = {
  tools: string[];
  agents: SectorAgent[];
};

type Lang = "fr" | "en";
type Localized = { fr: string; en: string };
type AgentBlueprint = {
  name: Localized;
  metric: Localized;
  autonomy?: AgentAutonomy;
};
type TeamBlueprint = {
  tools: string[];
  agents: AgentBlueprint[];
};

const l = (fr: string, en: string): Localized => ({ fr, en });
const agent = (
  nameFr: string,
  nameEn: string,
  metricFr: string,
  metricEn: string,
  autonomy: AgentAutonomy = "prepare",
): AgentBlueprint => ({
  name: l(nameFr, nameEn),
  metric: l(metricFr, metricEn),
  autonomy,
});

const BLUEPRINTS: Record<string, TeamBlueprint> = {
  "finance-assurance": {
    tools: ["GED", "CRM", "KYC", "Core insurance"],
    agents: [
      agent("Agent pré-analyse dossiers", "File pre-analysis agent", "Délai moyen de traitement", "Average handling time", "execute"),
      agent("Agent contrôle conformité", "Compliance control agent", "Contrôles tracés sans reprise", "Controls logged without rework"),
      agent("Agent passage en production", "Production rollout agent", "Taux de dossiers traités dans le SI", "Files processed in core systems"),
    ],
  },
  sante: {
    tools: ["DPI", "Agenda", "Messagerie sécurisée", "GED santé"],
    agents: [
      agent("Agent parcours administratif", "Administrative pathway agent", "Temps administratif par dossier", "Admin time per record", "execute"),
      agent("Agent production documentaire", "Clinical document agent", "Délai de première version relue", "Time to first reviewed draft"),
      agent("Agent gouvernance des accès", "Access governance agent", "Accès sensibles justifiés et tracés", "Sensitive accesses justified and logged"),
    ],
  },
  industrie: {
    tools: ["ERP", "GMAO", "MES", "Documentation technique"],
    agents: [
      agent("Agent diagnostic maintenance", "Maintenance diagnosis agent", "Temps moyen de diagnostic", "Mean time to diagnosis"),
      agent("Agent non-conformités", "Non-conformance agent", "Délai de pré-qualification", "Pre-qualification lead time", "execute"),
      agent("Agent industrialisation terrain", "Field rollout agent", "Taux d’usage quotidien en atelier", "Daily shop-floor adoption"),
    ],
  },
  "services-conseil": {
    tools: ["SharePoint", "Drive", "CRM", "Suite documentaire"],
    agents: [
      agent("Agent propositions & livrables", "Proposal and deliverable agent", "Temps de première version", "Time to first draft"),
      agent("Agent knowledge cabinet", "Firm knowledge agent", "Réutilisation des contenus validés", "Reuse of approved knowledge", "execute"),
      agent("Agent gouvernance client", "Client governance agent", "Usages conformes à la charte", "Usage compliant with policy"),
    ],
  },
  "tech-produit": {
    tools: ["Git", "CI/CD", "Observabilité", "Product analytics"],
    agents: [
      agent("Agent qualité produit", "Product quality agent", "Taux de réussite des évaluations", "Evaluation pass rate", "execute"),
      agent("Agent architecture plateforme", "Platform architecture agent", "Composants réutilisés par les squads", "Components reused by squads"),
      agent("Agent delivery engineering", "Engineering delivery agent", "Délai POC vers production", "POC-to-production lead time", "execute"),
    ],
  },
  "secteur-public": {
    tools: ["GED", "Portail usager", "SI métier", "Journal d’audit"],
    agents: [
      agent("Agent instruction documentaire", "Document instruction agent", "Délai de préparation du dossier", "File preparation lead time", "execute"),
      agent("Agent orientation usager", "Citizen routing agent", "Demandes orientées au premier passage", "Requests routed first time"),
      agent("Agent conformité publique", "Public compliance agent", "Traitements auditables", "Auditable processing"),
    ],
  },
  "cabinet-paramedical": {
    tools: ["Agenda", "Dossier patient", "Messagerie", "Facturation"],
    agents: [
      agent("Agent accueil patient", "Patient intake agent", "Temps d’accueil administratif", "Administrative intake time", "execute"),
      agent("Agent planning cabinet", "Practice scheduling agent", "Créneaux libérés et réattribués", "Slots recovered and reassigned", "execute"),
      agent("Agent conformité dossier", "Record compliance agent", "Accès dossier tracés", "Record accesses logged"),
    ],
  },
  "cabinet-avocat": {
    tools: ["GED", "RPVA", "Messagerie", "Base juridique"],
    agents: [
      agent("Agent préparation de dossier", "Matter preparation agent", "Temps de préparation avant revue", "Preparation time before review", "execute"),
      agent("Agent recherche juridique", "Legal research agent", "Temps de synthèse sourcée", "Time to sourced synthesis"),
      agent("Agent précédents & modèles", "Precedent and template agent", "Réemploi de contenus validés", "Reuse of approved content", "execute"),
    ],
  },
  "cabinet-dentaire": {
    tools: ["Agenda", "Dossier patient", "Imagerie", "Stérilisation"],
    agents: [
      agent("Agent parcours patient", "Patient pathway agent", "Temps administratif par rendez-vous", "Admin time per appointment", "execute"),
      agent("Agent préparation documentaire", "Document preparation agent", "Comptes rendus prêts à relire", "Reports ready for review"),
      agent("Agent qualité & stérilisation", "Quality and sterilization agent", "Cycles conformes et tracés", "Compliant and logged cycles", "execute"),
    ],
  },
  "etude-notariale": {
    tools: ["Logiciel métier", "GED", "Messagerie", "Téléactes"],
    agents: [
      agent("Agent collecte de pièces", "Document collection agent", "Délai de complétude du dossier", "Time to file completeness", "execute"),
      agent("Agent contrôle d’acte", "Deed control agent", "Écarts détectés avant revue", "Gaps found before review"),
      agent("Agent assemblage dossier", "File assembly agent", "Dossiers complets au premier passage", "Files complete at first pass", "execute"),
    ],
  },
  "expertise-comptable": {
    tools: ["Production comptable", "GED", "Portail client", "Messagerie"],
    agents: [
      agent("Agent collecte comptable", "Accounting collection agent", "Pièces reçues sans relance humaine", "Documents received without human chase", "execute"),
      agent("Agent préparation de révision", "Review preparation agent", "Temps avant première lecture utile", "Time to useful first review", "execute"),
      agent("Agent clôture dossiers", "File closing agent", "Dossiers complets à la date cible", "Files complete by target date"),
    ],
  },
  "clinique-veterinaire": {
    tools: ["PMS vétérinaire", "Agenda", "Messagerie", "Stocks"],
    agents: [
      agent("Agent accueil & rendez-vous", "Intake and booking agent", "Appels administratifs absorbés", "Administrative calls absorbed", "execute"),
      agent("Agent préparation clinique", "Clinical preparation agent", "Dossiers préparés avant consultation", "Records prepared before consultation"),
      agent("Agent parcours hospitalisation", "Hospital pathway agent", "Mises à jour validées dans les délais", "Updates validated on time", "execute"),
    ],
  },
  "courtier-assurance": {
    tools: ["CRM", "Extranets assureurs", "GED", "Comparateur"],
    agents: [
      agent("Agent collecte souscription", "Underwriting collection agent", "Délai de complétude", "Time to completeness", "execute"),
      agent("Agent comparaison garanties", "Coverage comparison agent", "Temps de préparation du comparatif", "Comparison preparation time"),
      agent("Agent mise en place contrat", "Policy setup agent", "Contrats prêts sans reprise", "Policies ready without rework", "execute"),
    ],
  },
  "agence-immobiliere": {
    tools: ["CRM immobilier", "Portails", "Agenda", "Messagerie"],
    agents: [
      agent("Agent qualification prospects", "Lead qualification agent", "Délai de première réponse", "Time to first response", "execute"),
      agent("Agent préparation de mandat", "Mandate preparation agent", "Dossiers mandat complets", "Complete mandate files"),
      agent("Agent suivi vendeur", "Seller follow-up agent", "Relances validées à temps", "Follow-ups approved on time", "execute"),
    ],
  },
  "salon-beaute": {
    tools: ["Agenda", "Caisse", "CRM", "Stocks"],
    agents: [
      agent("Agent réservation", "Booking agent", "Demandes traitées sans appel", "Requests handled without calls", "execute"),
      agent("Agent fidélisation", "Loyalty agent", "Retours clients réactivés", "Returning clients reactivated"),
      agent("Agent pilotage multi-salons", "Multi-site operations agent", "Alertes planning et stock résolues", "Scheduling and stock alerts resolved", "execute"),
    ],
  },
  "artisan-btp": {
    tools: ["CRM", "Devis", "Planning", "Application chantier"],
    agents: [
      agent("Agent qualification chantier", "Job qualification agent", "Demandes qualifiées au premier contact", "Jobs qualified at first contact", "execute"),
      agent("Agent préparation devis", "Quote preparation agent", "Délai de première proposition", "Time to first proposal"),
      agent("Agent suivi de chantier", "Site follow-up agent", "Aléas remontés avec contexte", "Issues reported with context", "execute"),
    ],
  },
  restaurant: {
    tools: ["Réservations", "Caisse", "Stocks", "Planning"],
    agents: [
      agent("Agent réservations & accueil", "Booking and guest agent", "Demandes traitées avant service", "Requests handled before service", "execute"),
      agent("Agent préparation service", "Service preparation agent", "Exceptions anticipées", "Exceptions anticipated"),
      agent("Agent prévision stocks", "Stock forecasting agent", "Ruptures évitées sur le cœur d’assortiment", "Stock-outs avoided on core assortment"),
    ],
  },
  "garage-automobile": {
    tools: ["DMS", "Planning atelier", "Catalogue pièces", "Messagerie"],
    agents: [
      agent("Agent prise en charge véhicule", "Vehicle intake agent", "Temps de qualification initiale", "Initial qualification time", "execute"),
      agent("Agent préparation devis", "Quote preparation agent", "Délai devis avant validation", "Quote lead time before approval"),
      agent("Agent suivi atelier", "Workshop follow-up agent", "Clients informés sans relance manuelle", "Clients updated without manual chase", "execute"),
    ],
  },
  "e-commerce": {
    tools: ["Shopify / Prestashop", "Helpdesk", "ERP / OMS", "Catalogue / PIM"],
    agents: [
      agent("Agent shopping", "Shopping agent", "Conversion assistée & panier composé", "Assisted conversion & built cart", "execute"),
      agent("Agent SAV conversation", "Conversational care agent", "Tickets L1 évités dans la conversation", "L1 tickets avoided in-conversation", "execute"),
      agent("Agent marchand", "Merchant agent", "Recommandations en file d’approbation", "Recommendations in approval queue"),
    ],
  },
  "plombier-chauffagiste": {
    tools: ["Téléphonie", "Planning", "CRM", "Devis"],
    agents: [
      agent("Agent qualification urgence", "Emergency qualification agent", "Interventions correctement priorisées", "Jobs correctly prioritized", "execute"),
      agent("Agent préparation intervention", "Job preparation agent", "Techniciens équipés au premier passage", "Technicians ready first time"),
      agent("Agent planification terrain", "Field scheduling agent", "Délai demande vers créneau validé", "Request-to-approved-slot time", "execute"),
    ],
  },
  "hotel-tourisme": {
    tools: ["PMS", "Channel manager", "CRM", "Messagerie"],
    agents: [
      agent("Agent réservation", "Reservation agent", "Demandes traitées avant arrivée", "Requests handled before arrival", "execute"),
      agent("Agent expérience client", "Guest experience agent", "Temps de réponse contextualisée", "Contextual response time"),
      agent("Agent préparation séjour", "Stay preparation agent", "Dossiers arrivée complets", "Complete arrival files", "execute"),
    ],
  },
  "logistique-transport": {
    tools: ["TMS", "WMS", "EDI", "Messagerie"],
    agents: [
      agent("Agent suivi expéditions", "Shipment tracking agent", "Exceptions détectées avant réclamation", "Exceptions detected before claims", "execute"),
      agent("Agent litiges transport", "Transport dispute agent", "Délai de pré-qualification", "Pre-qualification lead time"),
      agent("Agent incidents exploitation", "Operations incident agent", "Temps incident vers action validée", "Incident-to-approved-action time", "execute"),
    ],
  },
  "retail-distribution": {
    tools: ["ERP", "POS", "WMS", "Référentiel produit"],
    agents: [
      agent("Agent assortiment & promotion", "Assortment and promotion agent", "Délai de préparation des arbitrages", "Decision preparation lead time"),
      agent("Agent relation magasin", "Store support agent", "Demandes magasin résolues au premier niveau", "Store requests resolved at first level", "execute"),
      agent("Agent réassort", "Replenishment agent", "Ruptures sur le cœur d’assortiment", "Stock-outs on core assortment", "execute"),
    ],
  },
  "energie-utilities": {
    tools: ["GMAO", "SCADA", "SIG", "Gestion interventions"],
    agents: [
      agent("Agent qualification incident", "Incident qualification agent", "Temps de qualification", "Qualification time", "execute"),
      agent("Agent préparation intervention", "Work-order preparation agent", "Dossiers complets avant départ", "Complete files before dispatch"),
      agent("Agent ordonnancement réseau", "Network scheduling agent", "Interventions priorisées avec contexte", "Jobs prioritized with context", "execute"),
    ],
  },
  "agriculture-agroalimentaire": {
    tools: ["ERP", "LIMS", "Traçabilité lots", "GED qualité"],
    agents: [
      agent("Agent contrôle lots", "Batch control agent", "Écarts détectés avant libération", "Gaps found before release", "execute"),
      agent("Agent conformité qualité", "Quality compliance agent", "Dossiers audit complets", "Complete audit files"),
      agent("Agent traçabilité", "Traceability agent", "Temps de rapprochement lot-analyse", "Batch-to-test matching time", "execute"),
    ],
  },
  "pharma-sciences-vie": {
    tools: ["eQMS", "LIMS", "GED réglementaire", "Veille"],
    agents: [
      agent("Agent documentation qualité", "Quality documentation agent", "Temps de préparation documentaire", "Documentation preparation time", "execute"),
      agent("Agent affaires réglementaires", "Regulatory affairs agent", "Écarts signalés avant revue", "Gaps flagged before review"),
      agent("Agent veille réglementaire", "Regulatory watch agent", "Changements qualifiés et sourcés", "Changes qualified and sourced", "execute"),
    ],
  },
  "rh-recrutement": {
    tools: ["ATS", "SIRH", "Messagerie", "Référentiel compétences"],
    agents: [
      agent("Agent préparation recrutement", "Recruitment preparation agent", "Temps de constitution de shortlist", "Time to shortlist"),
      agent("Agent parcours candidat", "Candidate journey agent", "Délai de réponse candidat", "Candidate response time", "execute"),
      agent("Agent pré-qualification", "Pre-qualification agent", "Dossiers expliqués avant entretien", "Explainable files before interview"),
    ],
  },
  "education-formation": {
    tools: ["LMS", "CRM", "Messagerie", "Référentiels"],
    agents: [
      agent("Agent support apprenant", "Learner support agent", "Demandes résolues au premier niveau", "Requests resolved at first level", "execute"),
      agent("Agent préparation pédagogique", "Learning preparation agent", "Temps de préparation des supports", "Material preparation time"),
      agent("Agent suivi de parcours", "Learning pathway agent", "Décrochages détectés avant rupture", "Dropout risks detected early", "execute"),
    ],
  },
  "media-contenu": {
    tools: ["CMS", "DAM", "Analytics", "Sources éditoriales"],
    agents: [
      agent("Agent recherche éditoriale", "Editorial research agent", "Temps de synthèse sourcée", "Time to sourced synthesis", "execute"),
      agent("Agent préparation contenu", "Content preparation agent", "Temps de première version relue", "Time to first reviewed draft"),
      agent("Agent vérification & sources", "Verification and sources agent", "Affirmations reliées à une source", "Claims linked to a source", "execute"),
    ],
  },
};

export const AGENT_TEAM_COPY = {
  fr: {
    eyebrow: "ÉQUIPE AGENTIQUE",
    title: "Les agents spécialisés dans votre contexte métier",
    intro:
      "Des agents branchés sur vos outils, bornés par vos règles. Chaque agent a un propriétaire humain, un périmètre et un indicateur définis en SIGNAL.",
    flowTitle: "De la source à l’action, sous validation humaine",
    sources: "Sources autorisées",
    orchestrator: "Orchestrateur Remparia",
    validation: "Validation humaine",
    action: "Action dans vos outils",
    owner: "Propriétaire humain",
    trigger: "Déclencheur",
    mission: "Ce que l’agent prend en charge",
    metric: "Indicateur à cadrer",
    execute: "Exécute dans les règles",
    prepare: "Prépare pour validation",
    disclaimer:
      "Configurations illustratives : droits, seuils d’action et indicateurs sont définis pendant SIGNAL avant tout déploiement.",
  },
  en: {
    eyebrow: "AGENT WORKFORCE",
    title: "Specialized agents in your business context",
    intro:
      "Agents wired to your tools, bounded by your rules. Every agent has a human owner, a scope and an indicator defined in SIGNAL.",
    flowTitle: "From source to action, under human validation",
    sources: "Approved sources",
    orchestrator: "Remparia orchestrator",
    validation: "Human validation",
    action: "Action in your tools",
    owner: "Human owner",
    trigger: "Trigger",
    mission: "What the agent handles",
    metric: "Indicator to frame",
    execute: "Executes within rules",
    prepare: "Prepares for approval",
    disclaimer:
      "Illustrative configurations: rights, action thresholds and indicators are defined during SIGNAL before deployment.",
  },
} as const;

function withoutGeneratedPrefix(value: string) {
  return value.replace(
    /^(Objectif à cadrer|Target to define|Déploiement possible|Possible deployment)\s+—\s+/,
    "",
  );
}

export function getSectorAgentTeam(
  slug: string,
  lang: Lang,
  scenarios: SecteurDetail["scenarios"],
): SectorAgentTeam {
  const blueprint = BLUEPRINTS[slug];
  const fallbackTools =
    lang === "fr"
      ? ["Outils métier", "Sources autorisées", "Messagerie"]
      : ["Business tools", "Approved sources", "Messaging"];

  return {
    tools: blueprint?.tools ?? fallbackTools,
    agents: scenarios.slice(0, 3).map((scenario, index) => {
      const definition = blueprint?.agents[index];
      return {
        id: `${slug}-${index + 1}`,
        name:
          definition?.name[lang] ??
          (lang === "fr"
            ? `Agent métier ${String(index + 1).padStart(2, "0")}`
            : `Business agent ${String(index + 1).padStart(2, "0")}`),
        owner: scenario.who,
        trigger: withoutGeneratedPrefix(scenario.need),
        mission: withoutGeneratedPrefix(scenario.remparia),
        metric:
          definition?.metric[lang] ??
          (lang === "fr"
            ? "Temps expert récupéré sur le processus"
            : "Expert time recovered on the process"),
        autonomy: definition?.autonomy ?? "prepare",
      };
    }),
  };
}
