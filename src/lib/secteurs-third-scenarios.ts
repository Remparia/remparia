/** Third use-case scenario for extra sectors (FR + EN). Merged in getSecteurDetail when only two exist. */
export const THIRD_SCENARIOS: Record<
  string,
  {
    fr: { who: string; need: string; remparia: string };
    en: { who: string; need: string; remparia: string };
  }
> = {
  "cabinet-paramedical": {
    fr: {
      who: "Responsable conformité / DPO",
      need: "Prouver qui accède aux dossiers patients sans alourdir le quotidien.",
      remparia:
        "Journalisation des requêtes agent, droits par rôle et exports de revue pour vos audits RGPD.",
    },
    en: {
      who: "Compliance / DPO",
      need: "Prove who accesses patient records without adding daily overhead.",
      remparia:
        "Agent query logging, role-based rights and review exports for GDPR audits.",
    },
  },
  "cabinet-avocat": {
    fr: {
      who: "Associé / direction",
      need: "Capitaliser les précédents et modèles sans exposer le secret professionnel.",
      remparia:
        "RAG souverain sur corpus internes validés, avec recherche assistée et citation des sources.",
    },
    en: {
      who: "Partner / leadership",
      need: "Leverage precedents and templates without breaching professional secrecy.",
      remparia:
        "Sovereign RAG on approved internal corpora, assisted search and source citation.",
    },
  },
  "agence-immobiliere": {
    fr: {
      who: "Directeur d'agence",
      need: "Suivre les mandats et relances sans perdre la relation vendeur.",
      remparia:
        "Agent de suivi mandats branché CRM : échéances, relances préparées et validation avant envoi.",
    },
    en: {
      who: "Agency director",
      need: "Track mandates and follow-ups without losing the seller relationship.",
      remparia:
        "Mandate-tracking agent on CRM: deadlines, prepared follow-ups and approval before send.",
    },
  },
  "salon-beaute": {
    fr: {
      who: "Gérant multi-salons",
      need: "Harmoniser réservations et stocks sans micro-gérer chaque site.",
      remparia:
        "Vue consolidée des créneaux et alertes consommables, avec règles par salon et escalade humaine.",
    },
    en: {
      who: "Multi-site manager",
      need: "Align bookings and stock without micromanaging each location.",
      remparia:
        "Consolidated slot view and consumable alerts, per-salon rules and human escalation.",
    },
  },
  "artisan-btp": {
    fr: {
      who: "Conducteur de travaux",
      need: "Remonter les aléas chantier sans noyer l'équipe sous l'admin.",
      remparia:
        "Agent terrain mobile : photos, checklists, synthèse de situation et notification au bureau.",
    },
    en: {
      who: "Site supervisor",
      need: "Report field issues without burying the team in admin.",
      remparia:
        "Mobile field agent: photos, checklists, situation summary and office notification.",
    },
  },
  restaurant: {
    fr: {
      who: "Directeur opérations",
      need: "Anticiper les ruptures et pics de service sans rester collé aux tablettes.",
      remparia:
        "Agent prévisionnel sur historique de ventes et réservations, avec alertes équipe en salle.",
    },
    en: {
      who: "Operations director",
      need: "Anticipate stock-outs and service peaks without living on tablets.",
      remparia:
        "Forecast agent on sales and booking history, with alerts for the floor team.",
    },
  },
  "garage-automobile": {
    fr: {
      who: "Responsable atelier",
      need: "Prioriser les véhicules en attente sans relancer manuellement les clients.",
      remparia:
        "File d'attente intelligente : statut pièces, préparation SMS/email et validation avant envoi.",
    },
    en: {
      who: "Workshop manager",
      need: "Prioritize waiting vehicles without manually chasing clients.",
      remparia:
        "Smart waiting queue: parts status, prepared SMS/email and approval before send.",
    },
  },
  "e-commerce": {
    fr: {
      who: "Responsable SAV",
      need: "Qualifier les retours et litiges avant qu'ils n'explosent en charge support.",
      remparia:
        "Agent de tri SAV : catégorisation, proposition de résolution et escalade vers un humain.",
    },
    en: {
      who: "Customer care lead",
      need: "Qualify returns and disputes before they explode support load.",
      remparia:
        "Care triage agent: categorization, resolution proposal and escalation to a human.",
    },
  },
  "cabinet-dentaire": {
    fr: {
      who: "Responsable stérilisation / qualité",
      need: "Sécuriser les protocoles hygiène sans ralentir le fauteuil.",
      remparia:
        "Checklists agent assistées, traçabilité des cycles et alertes non-conformité avant acte.",
    },
    en: {
      who: "Sterilization / quality lead",
      need: "Secure hygiene protocols without slowing the chair.",
      remparia:
        "Assisted checklist agents, cycle traceability and non-conformance alerts before treatment.",
    },
  },
  "plombier-chauffagiste": {
    fr: {
      who: "Responsable planning",
      need: "Router les urgences et créneaux sans surcharger le standard.",
      remparia:
        "Qualification d'appel agent : type panne, zone, criticité — proposition de créneau validée.",
    },
    en: {
      who: "Scheduling lead",
      need: "Route emergencies and slots without overloading the phone line.",
      remparia:
        "Call qualification agent: fault type, area, severity — proposed slot for validation.",
    },
  },
  "etude-notariale": {
    fr: {
      who: "Clerc principal",
      need: "Assembler les pièces d'acte sans erreur de version ou de manquant.",
      remparia:
        "Pipeline documentaire : contrôle de complétude, comparaison de versions et liste d'écarts.",
    },
    en: {
      who: "Senior clerk",
      need: "Assemble deed files without version errors or missing items.",
      remparia:
        "Document pipeline: completeness check, version comparison and gap list.",
    },
  },
  "expertise-comptable": {
    fr: {
      who: "Expert-comptable associé",
      need: "Industrialiser la collecte pièces clients avant la clôture.",
      remparia:
        "Agent relance documentaire : suivi des manquants, rappels personnalisés et tableau de bord dossiers.",
    },
    en: {
      who: "Partner accountant",
      need: "Industrialize client document collection before year-end close.",
      remparia:
        "Document chase agent: missing-item tracking, personalized reminders and file dashboard.",
    },
  },
  "clinique-veterinaire": {
    fr: {
      who: "Directeur de clinique",
      need: "Fluidifier les hospitalisations sans perdre le suivi propriétaire.",
      remparia:
        "Agent parcours hospitalisation : statuts, comptes-rendus préparés et validation vétérinaire.",
    },
    en: {
      who: "Clinic director",
      need: "Smooth hospital stays without losing owner follow-up.",
      remparia:
        "Hospitalization pathway agent: statuses, prepared reports and veterinary validation.",
    },
  },
  "courtier-assurance": {
    fr: {
      who: "Responsable production",
      need: "Accélérer la mise en place des contrats sans sacrifier la conformité DDA.",
      remparia:
        "Pré-remplissage dossiers, contrôle des pièces obligatoires et validation conseiller avant émission.",
    },
    en: {
      who: "Production lead",
      need: "Speed up policy setup without sacrificing conduct rules.",
      remparia:
        "File pre-fill, mandatory document checks and adviser validation before issuance.",
    },
  },
  "logistique-transport": {
    fr: {
      who: "Responsable exploitation",
      need: "Réagir aux incidents transport sans requalifier chaque litige à la main.",
      remparia:
        "Agent incidents : qualification, proposition d'action et escalade vers l'exploitant référent.",
    },
    en: {
      who: "Operations lead",
      need: "Respond to transport incidents without manually requalifying every dispute.",
      remparia:
        "Incident agent: qualification, proposed action and escalation to the duty operator.",
    },
  },
  "retail-distribution": {
    fr: {
      who: "Directeur magasin",
      need: "Réduire les ruptures rayon sans multiplier les réunions stock.",
      remparia:
        "Agent réassort : signaux ventes, seuils par SKU et ordres préparés pour validation manager.",
    },
    en: {
      who: "Store director",
      need: "Cut shelf stock-outs without endless stock meetings.",
      remparia:
        "Replenishment agent: sales signals, per-SKU thresholds and orders prepared for manager approval.",
    },
  },
  "rh-recrutement": {
    fr: {
      who: "Chargé de recrutement",
      need: "Pré-qualifier les candidatures sans laisser filtrer les profils intéressants.",
      remparia:
        "Agent tri CV : critères métier explicites, scoring explicable et shortlist pour entretien humain.",
    },
    en: {
      who: "Recruiter",
      need: "Pre-qualify applications without letting good profiles slip through.",
      remparia:
        "CV triage agent: explicit role criteria, explainable scoring and shortlist for human interview.",
    },
  },
  "education-formation": {
    fr: {
      who: "Responsable pédagogique",
      need: "Personnaliser le suivi apprenants sans multiplier les tableurs.",
      remparia:
        "Agent parcours : détection des décrochages, suggestions d'actions et validation formateur.",
    },
    en: {
      who: "Academic lead",
      need: "Personalize learner follow-up without spreadsheet sprawl.",
      remparia:
        "Pathway agent: dropout detection, action suggestions and trainer validation.",
    },
  },
  "energie-utilities": {
    fr: {
      who: "Responsable maintenance réseau",
      need: "Prioriser les interventions terrain avec le bon contexte technique.",
      remparia:
        "Agent ordonnancement : historique équipement, criticité client et fiche intervention préparée.",
    },
    en: {
      who: "Network maintenance lead",
      need: "Prioritize field work with the right technical context.",
      remparia:
        "Scheduling agent: equipment history, customer criticality and prepared work order.",
    },
  },
  "media-contenu": {
    fr: {
      who: "Rédacteur en chef",
      need: "Accélérer la recherche et la vérification sans publier sans contrôle.",
      remparia:
        "Agent recherche assistée : sources citées, angles proposés et validation rédaction avant publication.",
    },
    en: {
      who: "Editor-in-chief",
      need: "Speed up research and verification without publishing unchecked.",
      remparia:
        "Assisted research agent: cited sources, proposed angles and editorial validation before publish.",
    },
  },
  "pharma-sciences-vie": {
    fr: {
      who: "Affaires réglementaires",
      need: "Consolider la veille réglementaire sans noyer les équipes sous les PDF.",
      remparia:
        "Veille agent sur corpus autorisés : synthèses datées, liens sources et alerte sur changements majeurs.",
    },
    en: {
      who: "Regulatory affairs",
      need: "Consolidate regulatory watch without drowning teams in PDFs.",
      remparia:
        "Watch agent on approved corpora: dated summaries, source links and major-change alerts.",
    },
  },
  "hotel-tourisme": {
    fr: {
      who: "Directeur hébergement",
      need: "Anticiper les demandes clients avant le pic réception.",
      remparia:
        "Agent préparation séjour : préférences connues, upsell contextualisé et validation réceptionniste.",
    },
    en: {
      who: "Rooms director",
      need: "Anticipate guest requests before the front-desk peak.",
      remparia:
        "Stay prep agent: known preferences, contextual upsell and front-desk validation.",
    },
  },
  "agriculture-agroalimentaire": {
    fr: {
      who: "Responsable qualité / traçabilité",
      need: "Consolider les contrôles lot et certifications sans double saisie.",
      remparia:
        "Agent traçabilité : rapprochement lot / analyse, alertes écart et dossier audit prêt à l'export.",
    },
    en: {
      who: "Quality / traceability lead",
      need: "Consolidate batch checks and certifications without double entry.",
      remparia:
        "Traceability agent: batch / test matching, variance alerts and audit-ready export file.",
    },
  },
};
