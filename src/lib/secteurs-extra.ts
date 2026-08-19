type SecteurDetail = {
  slug: string;
  heroH: string;
  heroP: string;
  signals: { value: string; label: string }[];
  pains: { title: string; desc: string }[];
  deliverables: string[];
  scenarios: { who: string; need: string; remparia: string }[];
  serviceSlugs: string[];
  faqs: { q: string; a: string }[];
};

type HubItem = { slug: string; title: string; desc: string };

type ExtraInput = {
  slug: string;
  fr: {
    title: string;
    desc: string;
    heroH: string;
    heroP: string;
    pains: { title: string; desc: string }[];
    deliverables: string[];
    scenarios: { who: string; need: string; remparia: string }[];
    faqs: { q: string; a: string }[];
  };
  en: {
    title: string;
    desc: string;
    heroH: string;
    heroP: string;
    pains: { title: string; desc: string }[];
    deliverables: string[];
    scenarios: { who: string; need: string; remparia: string }[];
    faqs: { q: string; a: string }[];
  };
  serviceSlugs?: string[];
  signalsFr?: { value: string; label: string }[];
  signalsEn?: { value: string; label: string }[];
};

const DEFAULT_SERVICES = [
  "strategie-ia",
  "agents-metier",
  "infra-souveraine",
] as const;

const SIGNALS_FR = [
  { value: "SIGNAL", label: "Méthode de bout en bout" },
  { value: "PÉRIM.", label: "Données dans le cadre défini" },
  { value: "HITL", label: "Humain dans la boucle" },
  { value: "Preuve", label: "Gains définis avant déploiement" },
];

const SIGNALS_EN = [
  { value: "SIGNAL", label: "End-to-end method" },
  { value: "SCOPE", label: "Data inside the agreed frame" },
  { value: "HITL", label: "Human in the loop" },
  { value: "Evidence", label: "Outcomes defined before deployment" },
];

const SECTOR_SIGNAL: Record<
  string,
  {
    fr: { value: string; label: string };
    en: { value: string; label: string };
  }
> = {
  "cabinet-paramedical": {
    fr: { value: "SOIN", label: "Temps clinique préservé" },
    en: { value: "CARE", label: "Clinical time preserved" },
  },
  "cabinet-avocat": {
    fr: { value: "SECRET", label: "Responsabilité professionnelle" },
    en: { value: "PRIV.", label: "Professional responsibility" },
  },
  "agence-immobiliere": {
    fr: { value: "MANDAT", label: "Conseil et suivi client" },
    en: { value: "MANDATE", label: "Advice and client follow-up" },
  },
  "salon-beaute": {
    fr: { value: "ACCUEIL", label: "Relation client préservée" },
    en: { value: "WELCOME", label: "Client relationship preserved" },
  },
  "artisan-btp": {
    fr: { value: "CHANTIER", label: "Réalité du terrain" },
    en: { value: "SITE", label: "Field reality first" },
  },
  restaurant: {
    fr: { value: "SERVICE", label: "Équipe recentrée en salle" },
    en: { value: "SERVICE", label: "Team focused on guests" },
  },
  "garage-automobile": {
    fr: { value: "DIAG.", label: "Diagnostic sous contrôle" },
    en: { value: "DIAG.", label: "Controlled diagnostics" },
  },
  "e-commerce": {
    fr: { value: "CLIENT", label: "Escalade humaine claire" },
    en: { value: "CLIENT", label: "Clear human escalation" },
  },
  "cabinet-dentaire": {
    fr: { value: "SOINS", label: "Décision clinique préservée" },
    en: { value: "CARE", label: "Clinical decision preserved" },
  },
  "plombier-chauffagiste": {
    fr: { value: "ASTREINTE", label: "Urgences qualifiées" },
    en: { value: "ON-CALL", label: "Qualified emergencies" },
  },
  "etude-notariale": {
    fr: { value: "ACTE", label: "Responsabilité du notaire" },
    en: { value: "DEED", label: "Notarial responsibility" },
  },
  "expertise-comptable": {
    fr: { value: "CLÔTURE", label: "Révision sous supervision" },
    en: { value: "CLOSE", label: "Supervised review" },
  },
  "clinique-veterinaire": {
    fr: { value: "CLINIQUE", label: "Vétérinaire décisionnaire" },
    en: { value: "CLINICAL", label: "Veterinarian decides" },
  },
  "courtier-assurance": {
    fr: { value: "CONSEIL", label: "Devoir de conseil préservé" },
    en: { value: "ADVICE", label: "Duty of advice preserved" },
  },
  "logistique-transport": {
    fr: { value: "FLUX", label: "Exceptions opérationnelles" },
    en: { value: "FLOW", label: "Operational exceptions" },
  },
  "retail-distribution": {
    fr: { value: "RAYON", label: "Arbitrage métier maintenu" },
    en: { value: "RANGE", label: "Business arbitration retained" },
  },
  "rh-recrutement": {
    fr: { value: "ÉQUITÉ", label: "Recruteur décisionnaire" },
    en: { value: "FAIR", label: "Recruiter remains decisive" },
  },
  "education-formation": {
    fr: { value: "PÉDAGO.", label: "Enseignant aux commandes" },
    en: { value: "TEACH", label: "Educator stays in control" },
  },
  "energie-utilities": {
    fr: { value: "RÉSEAU", label: "Opérations critiques tracées" },
    en: { value: "GRID", label: "Critical operations traced" },
  },
  "media-contenu": {
    fr: { value: "LIGNE", label: "Choix éditorial humain" },
    en: { value: "VOICE", label: "Human editorial choice" },
  },
  "pharma-sciences-vie": {
    fr: { value: "GxP", label: "Validation réglementée" },
    en: { value: "GxP", label: "Regulated validation" },
  },
  "hotel-tourisme": {
    fr: { value: "SÉJOUR", label: "Hospitalité avant volume" },
    en: { value: "STAY", label: "Hospitality before volume" },
  },
  "agriculture-agroalimentaire": {
    fr: { value: "TRAÇ.", label: "Décision terrain traçable" },
    en: { value: "TRACE", label: "Traceable field decisions" },
  },
};

function toDetail(
  lang: "fr" | "en",
  input: ExtraInput,
): SecteurDetail {
  const c = input[lang];
  const sectorSignal = SECTOR_SIGNAL[input.slug][lang];
  return {
    slug: input.slug,
    heroH: c.heroH,
    heroP: c.heroP,
    signals:
      lang === "fr"
        ? (input.signalsFr ?? [sectorSignal, ...SIGNALS_FR.slice(1)])
        : (input.signalsEn ?? [sectorSignal, ...SIGNALS_EN.slice(1)]),
    pains: c.pains,
    deliverables: [
      ...c.deliverables,
      lang === "fr"
        ? "Documentation, formation et transfert de maîtrise vers vos équipes"
        : "Documentation, training and transfer of ownership to your teams",
    ],
    scenarios: c.scenarios,
    serviceSlugs: [...(input.serviceSlugs ?? DEFAULT_SERVICES)],
    faqs: [
      ...c.faqs,
      lang === "fr"
        ? {
            q: "Restons-nous autonomes après le déploiement ?",
            a: "Oui. Les règles métier, la documentation et les compétences sont transférées à vos équipes. Le système ne doit pas devenir une boîte noire dont vous dépendez.",
          }
        : {
            q: "Do we remain autonomous after deployment?",
            a: "Yes. Business rules, documentation and skills are transferred to your teams. The system must not become a black box you depend on.",
          },
    ],
  };
}

/** Verticales PME (inspirées Sylen) + secteurs métier utiles — positionnement serviсiel Remparia. */
const EXTRAS: ExtraInput[] = [
  {
    slug: "cabinet-paramedical",
    fr: {
      title: "Cabinet paramédical",
      desc: "Pour kinés, ostéos, psychologues. RDV, parcours admin, RGPD.",
      heroH: "Agents pour les cabinets paramédicaux",
      heroP:
        "Alléger l'administratif et fluidifier le parcours patient — sans exposer les dossiers à des outils grand public.",
      pains: [
        {
          title: "L'admin mange le temps de soin",
          desc: "Prises de rendez-vous, rappels, dossiers, comptes-rendus : le temps clinique se dilue.",
        },
        {
          title: "Outils génériques du marché incompatibles",
          desc: "Secret professionnel et RGPD interdisent les assistants non maîtrisés sur données patients.",
        },
        {
          title: "Multi-praticien, planning fragile",
          desc: "Annulations, urgences et durées variables cassent le planning sans process assisté.",
        },
      ],
      deliverables: [
        "Cadrage SIGNAL des cas d'usage admin / parcours à fort impact",
        "Agents de planification et de pré-remplissage documentaire avec validation humaine",
        "Architecture données adaptée au secret professionnel",
        "Intégration aux logiciels de cabinet existants",
        "Mesure du temps admin récupéré et de la qualité de rendez-vous",
      ],
      scenarios: [
        {
          who: "Titulaire de cabinet",
          need: "Réduire les no-shows et le temps passé au téléphone.",
          remparia:
            "Nous industrialisons des agents de confirmation / qualification branchés sur votre agenda, avec règles métier et revue humaine.",
        },
        {
          who: "Secrétariat médical",
          need: "Préparer les dossiers avant séance sans risque de fuite.",
          remparia:
            "Assistants documentaires sur infra contrôlée : synthèse, checklist, validation avant affichage clinicien.",
        },
      ],
      faqs: [
        {
          q: "Respectez-vous le secret professionnel ?",
          a: "Oui. Minimisation des données, hébergement maîtrisé, traçabilité et validation humaine sur tout output sensible.",
        },
        {
          q: "Faut-il changer de logiciel de cabinet ?",
          a: "Non. Nous nous branchons sur vos outils existants chaque fois que c'est possible.",
        },
      ],
    },
    en: {
      title: "Paramedical practice",
      desc: "For PTs, osteopaths, psychologists. Scheduling, admin pathways, GDPR.",
      heroH: "Agents for paramedical practices",
      heroP:
        "Ease admin load and smooth patient pathways — without exposing records to consumer tools tools.",
      pains: [
        {
          title: "Admin eats care time",
          desc: "Scheduling, reminders, files, reports: clinical time dissolves into process.",
        },
        {
          title: "Generic consumer tools are incompatible",
          desc: "Professional secrecy and GDPR rule out unmanaged assistants on patient data.",
        },
        {
          title: "Multi-practitioner, fragile scheduling",
          desc: "Cancellations, urgencies and variable durations break the calendar without assisted process.",
        },
      ],
      deliverables: [
        "SIGNAL scoping of high-impact admin / pathway use cases",
        "Scheduling and document pre-fill agents with human validation",
        "Data architecture suited to professional secrecy",
        "Integration with existing practice software",
        "Measurement of recovered admin time and appointment quality",
      ],
      scenarios: [
        {
          who: "Practice owner",
          need: "Cut no-shows and phone time.",
          remparia:
            "We industrialize confirmation / qualification agents on your calendar, with business rules and human review.",
        },
        {
          who: "Medical secretariat",
          need: "Prepare files before sessions without leak risk.",
          remparia:
            "Document assistants on controlled infra: synthesis, checklists, validation before clinician view.",
        },
      ],
      faqs: [
        {
          q: "Do you respect professional secrecy?",
          a: "Yes. Data minimization, controlled hosting, traceability and human validation on sensitive outputs.",
        },
        {
          q: "Must we change practice software?",
          a: "No. We plug into existing tools whenever possible.",
        },
      ],
    },
  },
  {
    slug: "cabinet-avocat",
    fr: {
      title: "Cabinet d'avocat",
      desc: "Pour avocats. Qualification dossier, confidentialité, conflits.",
      heroH: "Agents pour les cabinets d'avocats",
      heroP:
        "Qualifier les dossiers, accélérer le documentaire et filtrer le bruit — sous secret professionnel et gouvernance stricte.",
      pains: [
        {
          title: "Prospects perdus pendant les audiences",
          desc: "Sans qualification structurée, les premiers contacts s'évaporent ou saturent les collaborateurs.",
        },
        {
          title: "Temps perdu sur le non-dossier",
          desc: "Démarchage, demandes hors scope, pièces incomplètes : l'expertise s'use sur le filtre.",
        },
        {
          title: "Confidentialité non négociable",
          desc: "Coller un dossier dans un chatbot public est un risque disciplinaire et client.",
        },
      ],
      deliverables: [
        "Agents de qualification de dossier (matière, urgence, juridiction) avec validation",
        "RAG souverain sur méthodes et modèles internes du cabinet",
        "Détection d'alertes conflits selon vos listes",
        "Gouvernance données et audit pour le secret professionnel",
        "Industrialisation jusqu'à l'usage quotidien des collaborateurs",
      ],
      scenarios: [
        {
          who: "Associé",
          need: "Ne plus rater les dossiers urgents hors audience.",
          remparia:
            "Nous cadrons un agent de pré-qualification et d'alerte, branché sur vos canaux, avec règles d'urgence et revue humaine.",
        },
        {
          who: "Collaborateur",
          need: "Accélérer la synthèse de pièces sans exposer le dossier.",
          remparia:
            "Assistant documentaire sur infra cabinet : synthèse, checklist, jamais d'envoi sans validation.",
        },
      ],
      faqs: [
        {
          q: "Le secret professionnel est-il préservé ?",
          a: "Oui. Cloisonnement, minimisation, logs, validation humaine. Aucune autonomie opaque sur le sensible.",
        },
        {
          q: "Pouvez-vous détecter les conflits d'intérêts ?",
          a: "Nous branchons vos listes et règles ; l'agent alerte, l'avocat décide.",
        },
      ],
    },
    en: {
      title: "Law firm",
      desc: "For lawyers. Matter qualification, confidentiality, conflicts.",
      heroH: "Agents for law firms",
      heroP:
        "Qualify matters, speed document work and filter noise — under professional secrecy and strict governance.",
      pains: [
        {
          title: "Prospects lost during hearings",
          desc: "Without structured qualification, first contacts evaporate or overwhelm associates.",
        },
        {
          title: "Time wasted on non-matters",
          desc: "Solicitation, out-of-scope requests, incomplete files: expertise burns on filtering.",
        },
        {
          title: "Confidentiality is non-negotiable",
          desc: "Pasting a matter into a public chatbot is a disciplinary and client risk.",
        },
      ],
      deliverables: [
        "Matter qualification agents (practice area, urgency, jurisdiction) with validation",
        "Sovereign RAG on firm methods and templates",
        "Conflict alerts based on your lists",
        "Data governance and audit for professional secrecy",
        "Industrialization through to daily associate usage",
      ],
      scenarios: [
        {
          who: "Partner",
          need: "Stop missing urgent matters outside hearings.",
          remparia:
            "We scope a pre-qualification and alert agent on your channels, with urgency rules and human review.",
        },
        {
          who: "Associate",
          need: "Speed document synthesis without exposing the file.",
          remparia:
            "Document assistant on firm infra: synthesis, checklist, never send without validation.",
        },
      ],
      faqs: [
        {
          q: "Is professional secrecy preserved?",
          a: "Yes. Isolation, minimization, logs, human validation. No opaque autonomy on sensitive matter.",
        },
        {
          q: "Can you detect conflicts of interest?",
          a: "We wire your lists and rules; the agent alerts, the lawyer decides.",
        },
      ],
    },
  },
  {
    slug: "agence-immobiliere",
    fr: {
      title: "Agence immobilière",
      desc: "Pour agences immo. Leads vendeurs et acheteurs qualifiés.",
      heroH: "Agents pour les agences immobilières",
      heroP:
        "Entre appels entrants, pièces manquantes et suivi des mandats, l'agent prépare et oriente ; le conseiller garde la qualification et la relation.",
      pains: [
        {
          title: "Leads non qualifiés qui saturent",
          desc: "Sans triage, les conseillers perdent des heures sur des contacts hors cible.",
        },
        {
          title: "Dossiers et pièces hétérogènes",
          desc: "Relances, checklists et conformité ralentissent mandats et ventes.",
        },
        {
          title: "Connaissance bien dispersée",
          desc: "Estimations, argumentaires et historiques vivent dans des têtes et des fils mail.",
        },
      ],
      deliverables: [
        "Agents de qualification leads (vendeur / acheteur / locataire)",
        "Assistants documentaires pour pièces et checklists mandat",
        "RAG sur stock, argumentaires et historiques d'agence",
        "Intégration CRM / logiciels métier",
        "Mesure du taux de qualification et du temps conseiller récupéré",
      ],
      scenarios: [
        {
          who: "Directeur d'agence",
          need: "Augmenter le taux de leads actionnables.",
          remparia:
            "Agent de pré-qualification sur vos canaux, scoring métier, handoff propre vers le conseiller.",
        },
        {
          who: "Conseiller",
          need: "Préparer un dossier vendeur plus vite.",
          remparia:
            "Assistant pièces + synthèse, avec validation avant envoi notaire / acheteur.",
        },
      ],
      faqs: [
        {
          q: "Ça remplace les conseillers ?",
          a: "Non. L'agent trie et prépare ; le conseiller négocie et conclut.",
        },
        {
          q: "Compatible avec notre CRM ?",
          a: "Oui dans la majorité des cas — on part de votre stack, pas d'un outil imposé.",
        },
      ],
    },
    en: {
      title: "Real-estate agency",
      desc: "For agencies. Qualified buyer and seller leads.",
      heroH: "Agents for real-estate agencies",
      heroP:
        "Across inbound calls, missing documents and mandate follow-up, the agent prepares and routes; the adviser keeps qualification and relationships.",
      pains: [
        {
          title: "Unqualified leads overload",
          desc: "Without triage, advisors waste hours on off-target contacts.",
        },
        {
          title: "Heterogeneous files and documents",
          desc: "Follow-ups, checklists and compliance slow mandates and sales.",
        },
        {
          title: "Scattered property knowledge",
          desc: "Estimates, pitches and history live in heads and email threads.",
        },
      ],
      deliverables: [
        "Lead qualification agents (seller / buyer / tenant)",
        "Document assistants for mandate checklists",
        "RAG on stock, pitches and agency history",
        "CRM / business-software integration",
        "Measurement of qualification rate and recovered advisor time",
      ],
      scenarios: [
        {
          who: "Agency director",
          need: "Raise actionable lead rate.",
          remparia:
            "Pre-qualification agent on your channels, business scoring, clean handoff to advisors.",
        },
        {
          who: "Advisor",
          need: "Prepare a seller file faster.",
          remparia:
            "Documents assistant + synthesis, validated before notary / buyer send.",
        },
      ],
      faqs: [
        {
          q: "Does it replace advisors?",
          a: "No. Agents triage and prepares; advisors negotiate and close.",
        },
        {
          q: "Compatible with our CRM?",
          a: "Yes in most cases — we start from your stack, not a forced tool.",
        },
      ],
    },
  },
  {
    slug: "salon-beaute",
    fr: {
      title: "Salon de beauté",
      desc: "Pour salons et instituts. Multi-praticien, durée variable.",
      heroH: "Agents pour salons & instituts",
      heroP:
        "Quand retards, durées variables et annulations désorganisent la journée, l'agent prépare le planning ; l'équipe garde l'accueil et l'arbitrage.",
      pains: [
        {
          title: "Planning multi-praticien chaotique",
          desc: "Durées variables, retards et no-shows cassent la journée.",
        },
        {
          title: "Relation client dispersée",
          desc: "Préférences, historiques et relances vivent dans plusieurs outils.",
        },
        {
          title: "Temps perdu sur l'admin",
          desc: "Confirmations et FAQ répétitives détournent l'équipe du service.",
        },
      ],
      deliverables: [
        "Agents de confirmation / requalification de rendez-vous",
        "Assistants FAQ et parcours client gouvernés",
        "Intégration agenda / caisse existants",
        "Mesure du taux de remplissage et du temps admin",
      ],
      scenarios: [
        {
          who: "Gérant(e)",
          need: "Remplir les créneaux et réduire les absences.",
          remparia:
            "Agent de relance intelligente selon vos règles (presta, durée, praticien).",
        },
        {
          who: "Équipe accueil",
          need: "Répondre plus vite sans se tromper sur les prestations.",
          remparia:
            "Assistant FAQ branché sur votre catalogue, avec validation sur les cas ambigus.",
        },
      ],
      faqs: [
        {
          q: "Dois-je changer d'outil de réservation ?",
          a: "Non. On s'intègre à votre stack actuelle autant que possible.",
        },
        {
          q: "Et les données clients ?",
          a: "RGPD by design : finalités claires, minimisation, contrôle d'accès.",
        },
      ],
    },
    en: {
      title: "Beauty salon",
      desc: "For salons and institutes. Multi-staff, variable duration.",
      heroH: "Agents for salons & institutes",
      heroP:
        "When delays, variable durations and cancellations disrupt the day, the agent prepares the schedule; the team keeps hospitality and arbitration.",
      pains: [
        {
          title: "Chaotic multi-staff scheduling",
          desc: "Variable durations, delays and no-shows break the day.",
        },
        {
          title: "Scattered client relationship",
          desc: "Preferences, history and follow-ups live across tools.",
        },
        {
          title: "Admin time drain",
          desc: "Confirmations and repetitive FAQ pull the team off service.",
        },
      ],
      deliverables: [
        "Appointment confirmation / requalification agents",
        "Governed FAQ and client-journey assistants",
        "Integration with existing calendar / POS",
        "Measurement of fill rate and admin time",
      ],
      scenarios: [
        {
          who: "Owner",
          need: "Fill slots and cut no-shows.",
          remparia:
            "Smart follow-up agent per your rules (service, duration, staff).",
        },
        {
          who: "Front desk",
          need: "Answer faster without mixing up services.",
          remparia:
            "FAQ assistant on your catalog, with validation on ambiguous cases.",
        },
      ],
      faqs: [
        {
          q: "Must we change booking software?",
          a: "No. We integrate with your current stack whenever possible.",
        },
        {
          q: "What about client data?",
          a: "GDPR by design: clear purposes, minimization, access control.",
        },
      ],
    },
  },
  {
    slug: "artisan-btp",
    fr: {
      title: "Artisan / BTP",
      desc: "Pour plombiers, électriciens, BTP. Urgences vraies vs entretien.",
      heroH: "Agents pour artisans & BTP",
      heroP:
        "Trier urgences, accélérer devis et planifier les interventions — branché sur votre réalité terrain.",
      pains: [
        {
          title: "Urgences et entretien mélangés",
          desc: "Sans triage, les vraies urgences se noient dans les demandes courantes.",
        },
        {
          title: "Devis lents à produire",
          desc: "Pièces, photos, historiques : le commercial terrain perd du temps en admin.",
        },
        {
          title: "Savoir chantier peu capitalisé",
          desc: "Retours d'expérience et mode opératoire restent informels.",
        },
      ],
      deliverables: [
        "Agents de triage urgence vs entretien",
        "Assistants devis / checklist intervention",
        "RAG sur historiques chantiers et modes opératoires",
        "Intégration planning / ERP métier",
      ],
      scenarios: [
        {
          who: "Dirigeant artisan",
          need: "Ne plus manquer une vraie urgence.",
          remparia:
            "Agent de qualification d'appel / demande avec règles d'astreinte et alerte humaine.",
        },
        {
          who: "Chargé d'affaires",
          need: "Sortir un devis plus vite à partir du terrain.",
          remparia:
            "Assistant devis sur vos grilles et historiques, validation avant envoi client.",
        },
      ],
      faqs: [
        {
          q: "Ça marche hors bureau ?",
          a: "Oui : on conçoit pour usage mobile / terrain, avec vos contraintes réseau.",
        },
        {
          q: "Remplace un standard téléphonique ?",
          a: "Nous pouvons orchestrer qualification et handoff — en mission serviсielle, pas en boîte SaaS imposée.",
        },
      ],
    },
    en: {
      title: "Trades / construction",
      desc: "For plumbers, electricians, construction. Real emergencies vs maintenance.",
      heroH: "Agents for trades & construction",
      heroP:
        "Triage emergencies, speed quotes and plan interventions — wired to field reality.",
      pains: [
        {
          title: "Emergencies mixed with maintenance",
          desc: "Without triage, real emergencies drown in routine requests.",
        },
        {
          title: "Slow quotes",
          desc: "Parts, photos, history: field sales lose time to admin.",
        },
        {
          title: "Site knowledge poorly capitalized",
          desc: "Lessons learned and SOPs stay informal.",
        },
      ],
      deliverables: [
        "Emergency vs maintenance triage agents",
        "Quote / intervention checklist assistants",
        "RAG on job history and operating procedures",
        "Planning / trade ERP integration",
      ],
      scenarios: [
        {
          who: "Trade owner",
          need: "Never miss a real emergency.",
          remparia:
            "Call / request qualification agent with on-call rules and human alert.",
        },
        {
          who: "Account manager",
          need: "Issue quotes faster from the field.",
          remparia:
            "Quote assistant on your grids and history, validated before client send.",
        },
      ],
      faqs: [
        {
          q: "Does it work off-site?",
          a: "Yes: designed for mobile / field use within your network constraints.",
        },
        {
          q: "Does it replace a phone receptionist?",
          a: "We can orchestrate qualification and handoff — as a service engagement, not a forced SaaS box.",
        },
      ],
    },
  },
  {
    slug: "restaurant",
    fr: {
      title: "Restaurant",
      desc: "Pour restaurants. Réservations, allergies, modifications.",
      heroH: "Agents pour la restauration",
      heroP:
        "Quand le téléphone coupe le service en salle, l'agent collecte réservations et contraintes ; l'équipe confirme les exceptions et garde l'hospitalité.",
      pains: [
        {
          title: "Réservations et modifications chronophages",
          desc: "Le téléphone coupe le service en salle aux heures de pointe.",
        },
        {
          title: "Allergies et demandes spéciales",
          desc: "Sans process fiable, le risque et le stress en cuisine montent.",
        },
        {
          title: "Savoir-faire peu industrialisé",
          desc: "Menus, FAQ, process événements restent fragiles à scaler.",
        },
      ],
      deliverables: [
        "Agents de réservation / modification gouvernés",
        "Capture structurée allergies & demandes spéciales",
        "Intégration outils de résa / caisse",
        "Assistants FAQ menu et événements",
      ],
      scenarios: [
        {
          who: "Gérant",
          need: "Réduire les appels pendant le service.",
          remparia:
            "Agent de prise / modification de résa avec règles de capacité et escalade humaine.",
        },
        {
          who: "Chef / salle",
          need: "Fiabiliser la transmission des allergies.",
          remparia:
            "Parcours structuré + alerte cuisine, avec validation avant service.",
        },
      ],
      faqs: [
        {
          q: "L'agent répond-elle à la place du serveur ?",
          a: "Elle absorbe le répétitif ; le service et l'hospitalité restent humains.",
        },
        {
          q: "Et les pics (fêtes, terrasse) ?",
          a: "Règles de capacité et escalade font partie du cadrage SIGNAL.",
        },
      ],
    },
    en: {
      title: "Restaurant",
      desc: "For restaurants. Reservations, allergies, changes.",
      heroH: "Agents for restaurants",
      heroP:
        "When the phone interrupts floor service, the agent collects bookings and constraints; the team confirms exceptions and keeps hospitality human.",
      pains: [
        {
          title: "Reservations and changes eat time",
          desc: "Phones cut floor service at peak hours.",
        },
        {
          title: "Allergies and special requests",
          desc: "Without a reliable process, risk and kitchen stress rise.",
        },
        {
          title: "Know-how poorly industrialized",
          desc: "Menus, FAQ, event process stay hard to scale.",
        },
      ],
      deliverables: [
        "Governed reservation / change agents",
        "Structured capture of allergies & special requests",
        "Reservation / POS integration",
        "Menu and events FAQ assistants",
      ],
      scenarios: [
        {
          who: "Owner",
          need: "Cut calls during service.",
          remparia:
            "Reservation / change agent with capacity rules and human escalation.",
        },
        {
          who: "Chef / floor",
          need: "Make allergy handoff reliable.",
          remparia:
            "Structured pathway + kitchen alert, validated before service.",
        },
      ],
      faqs: [
        {
          q: "Does the agent answer instead of staff?",
          a: "It absorbs repetitive load; hospitality stays human.",
        },
        {
          q: "What about peaks (holidays, terrace)?",
          a: "Capacity rules and escalation are part of SIGNAL scoping.",
        },
      ],
    },
  },
  {
    slug: "garage-automobile",
    fr: {
      title: "Garage automobile",
      desc: "Pour garages. Prestation, panne, planning atelier.",
      heroH: "Agents pour garages automobiles",
      heroP:
        "Qualifier prestations et pannes, accélérer le planning atelier et la relation client — sur vos outils métier.",
      pains: [
        {
          title: "Demandes mal qualifiées",
          desc: "Prestation, panne, devis : sans triage, l'atelier perd du temps.",
        },
        {
          title: "Planning atelier sous tension",
          desc: "Imprévus et relances client désorganisent la journée.",
        },
        {
          title: "Historique véhicule sous-exploité",
          desc: "Le savoir entretien reste dans le DMS, peu actionnable.",
        },
      ],
      deliverables: [
        "Agents de qualification prestation / panne",
        "Assistants planning et relance client",
        "RAG sur historiques véhicule et barèmes",
        "Intégration DMS / agenda atelier",
      ],
      scenarios: [
        {
          who: "Chef d'atelier",
          need: "Mieux préparer les entrées atelier.",
          remparia:
            "Pré-qualification + checklist pièces / symptôme avant arrivée véhicule.",
        },
        {
          who: "Accueil",
          need: "Répondre plus vite sans bloquer le standard.",
          remparia:
            "Agent FAQ / prise de RDV avec escalade vers le conseiller.",
        },
      ],
      faqs: [
        {
          q: "Compatible avec notre DMS ?",
          a: "On part de votre stack ; l'intégration est un livrable, pas une option marketing.",
        },
        {
          q: "L'agent diagnostique-t-elle à la place du technicien ?",
          a: "Non. Elle prépare ; le diagnostic et la responsabilité restent humains.",
        },
      ],
    },
    en: {
      title: "Auto garage",
      desc: "For garages. Services, breakdowns, shop scheduling.",
      heroH: "Agents for auto garages",
      heroP:
        "Qualify services and breakdowns, speed shop planning and client relationships — on your business tools.",
      pains: [
        {
          title: "Poorly qualified requests",
          desc: "Service, breakdown, quote: without triage, the shop loses time.",
        },
        {
          title: "Shop schedule under pressure",
          desc: "Surprises and client follow-ups scramble the day.",
        },
        {
          title: "Underused vehicle history",
          desc: "Service knowledge sits in the DMS, barely actionable.",
        },
      ],
      deliverables: [
        "Service / breakdown qualification agents",
        "Scheduling and client follow-up assistants",
        "RAG on vehicle history and rate cards",
        "DMS / shop calendar integration",
      ],
      scenarios: [
        {
          who: "Shop manager",
          need: "Better prepare shop intakes.",
          remparia:
            "Pre-qualification + parts / symptom checklist before vehicle arrival.",
        },
        {
          who: "Front desk",
          need: "Answer faster without blocking the line.",
          remparia:
            "FAQ / booking agent with escalation to the advisor.",
        },
      ],
      faqs: [
        {
          q: "Compatible with our DMS?",
          a: "We start from your stack; integration is a deliverable, not a marketing option.",
        },
        {
          q: "Does the agent diagnose instead of the technician?",
          a: "No. It prepares; diagnosis and accountability stay human.",
        },
      ],
    },
  },
  {
    slug: "e-commerce",
    fr: {
      title: "E-commerce et boutique",
      desc: "Pour boutiques en ligne. Suivi commande, retours, FAQ produit.",
      heroH: "Agents pour e-commerce & boutiques",
      heroP:
        "Quand suivi de commande et retours saturent le support, l'agent traite le répétitif ; l'équipe reprend les cas sensibles et la voix de marque.",
      pains: [
        {
          title: "Support saturé par le répétitif",
          desc: "Suivi commande, retours, FAQ : les agents humains s'épuisent.",
        },
        {
          title: "Connaissance produit fragmentée",
          desc: "Fiches, avis, specs vivent dans plusieurs silos.",
        },
        {
          title: "Qualité de réponse instable",
          desc: "Sans gouvernance, les outils génériques invente ou casse le ton de marque.",
        },
      ],
      deliverables: [
        "Agents support (commande, retours, FAQ) avec escalade humaine",
        "RAG produit / politique commerciale",
        "Intégration helpdesk / e-commerce",
        "Evals qualité, ton de marque et coûts",
      ],
      scenarios: [
        {
          who: "Head of CX",
          need: "Baisser le volume de tickets L1.",
          remparia:
            "Agent L1 gouverné + handoff propre vers L2, avec mesure du taux de résolution.",
        },
        {
          who: "Équipe produit",
          need: "Réponses FAQ fidèles au catalogue.",
          remparia:
            "RAG sur fiches et politiques, avec garde-fous anti-hallucination.",
        },
      ],
      faqs: [
        {
          q: "L'agent peut-elle rembourser toute seule ?",
          a: "Uniquement dans le périmètre que vous autorisez. Les cas sensibles restent humains.",
        },
        {
          q: "Multilingue ?",
          a: "Oui selon vos marchés — avec contrôle qualité par langue.",
        },
      ],
    },
    en: {
      title: "E-commerce & retail",
      desc: "For online stores. Order tracking, returns, product FAQ.",
      heroH: "Agents for e-commerce & stores",
      heroP:
        "When order tracking and returns saturate support, the agent handles repetition; the team takes over sensitive cases and brand voice.",
      pains: [
        {
          title: "Support saturated by repetitive work",
          desc: "Order tracking, returns, FAQ: human agents burn out.",
        },
        {
          title: "Fragmented product knowledge",
          desc: "Specs, reviews, policies live in silos.",
        },
        {
          title: "Unstable answer quality",
          desc: "Without governance, consumer tools invents or breaks brand tone.",
        },
      ],
      deliverables: [
        "Support agents (orders, returns, FAQ) with human escalation",
        "Product / policy RAG",
        "Helpdesk / commerce integration",
        "Quality, brand-tone and cost evals",
      ],
      scenarios: [
        {
          who: "Head of CX",
          need: "Cut L1 ticket volume.",
          remparia:
            "Governed L1 agent + clean L2 handoff, with resolution-rate tracking.",
        },
        {
          who: "Product team",
          need: "FAQ answers faithful to the catalog.",
          remparia:
            "RAG on specs and policies, with anti-hallucination guardrails.",
        },
      ],
      faqs: [
        {
          q: "Can the agent refund on its own?",
          a: "Only within the scope you authorize. Sensitive cases stay human.",
        },
        {
          q: "Multilingual?",
          a: "Yes by market — with quality control per language.",
        },
      ],
    },
  },
  {
    slug: "cabinet-dentaire",
    fr: {
      title: "Cabinet dentaire",
      desc: "Pour cabinets dentaires. Planning, rappels, dossiers, conformité.",
      heroH: "Agents pour cabinets dentaires",
      heroP:
        "Sécuriser planning, rappels et parcours patient — sous contrainte de données de santé.",
      pains: [
        {
          title: "No-shows et planning saturé",
          desc: "Rappels manuels et urgences désorganisent les fauteuils.",
        },
        {
          title: "Charge admin du secrétariat",
          desc: "Dossiers, devis, mutuelles : le temps soignant se réduit.",
        },
        {
          title: "Données de santé sensibles",
          desc: "Les outils grand public sont hors cadre.",
        },
      ],
      deliverables: [
        "Agents de rappel / requalification de RDV",
        "Assistants documentaires devis / mutuelle avec validation",
        "Architecture souveraine adaptée aux données de santé",
        "Intégration logiciels dentaires",
      ],
      scenarios: [
        {
          who: "Chirurgien-dentiste titulaire",
          need: "Réduire les fauteuils vides.",
          remparia:
            "Parcours de rappel intelligent + liste d'attente gouvernée.",
        },
        {
          who: "Secrétariat",
          need: "Accélérer devis et pièces mutuelle.",
          remparia:
            "Assistant documentaire avec validation avant envoi.",
        },
      ],
      faqs: [
        {
          q: "Hébergement données de santé ?",
          a: "Architectures adaptées à votre cadre (y compris exigences d'hébergement santé quand pertinent).",
        },
        {
          q: "L'agent décide-t-elle un plan de traitement ?",
          a: "Non. Elle prépare ; le praticien décide.",
        },
      ],
    },
    en: {
      title: "Dental practice",
      desc: "For dental clinics. Scheduling, reminders, records, compliance.",
      heroH: "Agents for dental practices",
      heroP:
        "Secure scheduling, reminders and patient pathways — under health-data constraints.",
      pains: [
        {
          title: "No-shows and saturated schedules",
          desc: "Manual reminders and urgencies scramble chairs.",
        },
        {
          title: "Front-desk admin load",
          desc: "Files, quotes, insurance: care time shrinks.",
        },
        {
          title: "Sensitive health data",
          desc: "Consumer tools are out of frame.",
        },
      ],
      deliverables: [
        "Appointment reminder / requalification agents",
        "Quote / insurance document assistants with validation",
        "Sovereign architecture suited to health data",
        "Dental software integration",
      ],
      scenarios: [
        {
          who: "Practice owner",
          need: "Reduce empty chairs.",
          remparia:
            "Smart reminder pathway + governed waitlist.",
        },
        {
          who: "Front desk",
          need: "Speed quotes and insurance paperwork.",
          remparia:
            "Document assistant with validation before send.",
        },
      ],
      faqs: [
        {
          q: "Health-data hosting?",
          a: "Architectures suited to your frame (including health hosting requirements when relevant).",
        },
        {
          q: "Does the agent decide a treatment plan?",
          a: "No. It prepares; the practitioner decides.",
        },
      ],
    },
  },
  {
    slug: "plombier-chauffagiste",
    fr: {
      title: "Plombier chauffagiste",
      desc: "Pour plombiers chauffagistes. Urgences, devis, tournées.",
      heroH: "Agents pour plombiers chauffagistes",
      heroP:
        "Trier les urgences, accélérer devis et optimiser les tournées — mission terrain, pas gadget.",
      pains: [
        {
          title: "Astreintes saturées par le non-urgent",
          desc: "Sans qualification, chaque appel paraît urgent.",
        },
        {
          title: "Devis et diagnostics lents",
          desc: "Photos, historiques logements, pièces : admin lourde.",
        },
        {
          title: "Tournées sous-optimisées",
          desc: "Le planning réactif coûte cher en kilomètres et en délais.",
        },
      ],
      deliverables: [
        "Qualification urgence / entretien / devis",
        "Assistants diagnostic et devis sur vos grilles",
        "Aide au planning de tournées",
        "Capitalisation des interventions types",
      ],
      scenarios: [
        {
          who: "Dirigeant",
          need: "Protéger l'astreinte.",
          remparia:
            "Agent de triage avec mots-clés d'urgence et escalade humaine.",
        },
        {
          who: "Technicien",
          need: "Préparer l'intervention avant d'arriver.",
          remparia:
            "Checklist pièces / symptôme générée avant le déplacement.",
        },
      ],
      faqs: [
        {
          q: "Utile pour une petite structure ?",
          a: "Oui : on dimensionne la mission au volume réel, sans usine à gaz.",
        },
        {
          q: "Faut-il une équipe data ?",
          a: "Non. Remparia embarque l'expertise et transfère l'essentiel.",
        },
      ],
    },
    en: {
      title: "Plumber / heating engineer",
      desc: "For plumbers and heating engineers. Emergencies, quotes, routes.",
      heroH: "Agents for plumbers & heating engineers",
      heroP:
        "Triage emergencies, speed quotes and optimize routes — field mission, not a gadget.",
      pains: [
        {
          title: "On-call flooded by non-urgent work",
          desc: "Without qualification, every call looks urgent.",
        },
        {
          title: "Slow quotes and diagnostics",
          desc: "Photos, home history, parts: heavy admin.",
        },
        {
          title: "Suboptimal routes",
          desc: "Reactive planning costs miles and delays.",
        },
      ],
      deliverables: [
        "Emergency / maintenance / quote qualification",
        "Diagnostic and quote assistants on your rate cards",
        "Route planning support",
        "Capitalization of typical interventions",
      ],
      scenarios: [
        {
          who: "Owner",
          need: "Protect on-call time.",
          remparia:
            "Triage agent with urgency keywords and human escalation.",
        },
        {
          who: "Technician",
          need: "Prepare before arrival.",
          remparia:
            "Parts / symptom checklist generated before travel.",
        },
      ],
      faqs: [
        {
          q: "Useful for a small firm?",
          a: "Yes: we size the engagement to real volume, no overbuilt stack.",
        },
        {
          q: "Do we need a data team?",
          a: "No. Remparia brings the expertise and transfers the essentials.",
        },
      ],
    },
  },
  {
    slug: "etude-notariale",
    fr: {
      title: "Étude notariale",
      desc: "Pour études notariales. Actes, pièces, délais, confidentialité.",
      heroH: "Agents pour études notariales",
      heroP:
        "Accélérer la collecte de pièces et la préparation d'actes — sous confidentialité et traçabilité strictes.",
      pains: [
        {
          title: "Pièces incomplètes qui retardent les actes",
          desc: "Relances manuelles chronophages pour clients et partenaires.",
        },
        {
          title: "Charge documentaire massive",
          desc: "Synthèses et contrôles répétitifs saturent collaborateurs et clercs.",
        },
        {
          title: "Exigence de confidentialité",
          desc: "Aucun traitement opaque sur dossiers sensibles.",
        },
      ],
      deliverables: [
        "Agents de checklist / relance pièces",
        "Assistants de pré-analyse documentaire avec validation",
        "RAG sur modèles et procédures internes",
        "Gouvernance et audit pour la confidentialité",
      ],
      scenarios: [
        {
          who: "Notaire",
          need: "Réduire les délais avant signature.",
          remparia:
            "Parcours pièces gouverné + alertes manquants, validation clerc.",
        },
        {
          who: "Clerc",
          need: "Accélérer la pré-analyse sans risque.",
          remparia:
            "Assistant documentaire traçable, jamais d'acte sans revue humaine.",
        },
      ],
      faqs: [
        {
          q: "Compatible avec le secret professionnel ?",
          a: "Oui : architecture, droits et validation humaine conçus pour cet impératif.",
        },
        {
          q: "L'agent rédige-t-elle l'acte seule ?",
          a: "Non. Elle prépare ; le notaire engage sa responsabilité.",
        },
      ],
    },
    en: {
      title: "Notary office",
      desc: "For notary offices. Deeds, documents, deadlines, confidentiality.",
      heroH: "Agents for notary offices",
      heroP:
        "Speed document collection and deed preparation — under strict confidentiality and traceability.",
      pains: [
        {
          title: "Incomplete documents delay deeds",
          desc: "Manual follow-ups with clients and partners drain time.",
        },
        {
          title: "Massive document load",
          desc: "Repetitive synthesis and checks saturate clerks.",
        },
        {
          title: "Confidentiality requirement",
          desc: "No opaque processing on sensitive files.",
        },
      ],
      deliverables: [
        "Document checklist / follow-up agents",
        "Document pre-analysis assistants with validation",
        "RAG on internal templates and procedures",
        "Governance and audit for confidentiality",
      ],
      scenarios: [
        {
          who: "Notary",
          need: "Cut time to signing.",
          remparia:
            "Governed document pathway + missing-item alerts, clerk validation.",
        },
        {
          who: "Clerk",
          need: "Speed pre-analysis safely.",
          remparia:
            "Traceable document assistant; never a deed without human review.",
        },
      ],
      faqs: [
        {
          q: "Compatible with professional secrecy?",
          a: "Yes: architecture, rights and human validation designed for that imperative.",
        },
        {
          q: "Does the agent draft the deed alone?",
          a: "No. It prepares; the notary remains accountable.",
        },
      ],
    },
  },
  {
    slug: "expertise-comptable",
    fr: {
      title: "Cabinet d'expertise comptable",
      desc: "Pour experts-comptables. Saisie, dossiers, conformité, livrables.",
      heroH: "Agents pour l'expertise comptable",
      heroP:
        "Entre collecte, saisie et contrôles, l'agent prépare les dossiers ; l'expert conserve la révision, le conseil et la responsabilité.",
      pains: [
        {
          title: "Saisie et contrôles répétitifs",
          desc: "Les collaborateurs passent trop de temps sur le volume basique.",
        },
        {
          title: "Pics de clôture",
          desc: "Sans industrialisation, la qualité baisse sous la pression des délais.",
        },
        {
          title: "Confidentialité client",
          desc: "Les outils grand public sont incompatibles avec vos engagements.",
        },
      ],
      deliverables: [
        "Agents de pré-saisie / contrôle documentaire",
        "Assistants de synthèse dossiers et relances clients",
        "RAG sur procédures cabinet et normes",
        "Gouvernance data multi-clients cloisonnée",
      ],
      scenarios: [
        {
          who: "Associé",
          need: "Absorber la croissance sans recruter linéairement.",
          remparia:
            "Industrialisation de cas à fort volume (saisie, contrôles) avec validation expert.",
        },
        {
          who: "Collaborateur",
          need: "Préparer plus vite les dossiers de clôture.",
          remparia:
            "Assistant checklist + anomalies, revue humaine avant livrable.",
        },
      ],
      faqs: [
        {
          q: "Les dossiers clients sont-ils isolés ?",
          a: "Oui. Cloisonnement et droits font partie du design.",
        },
        {
          q: "Remplace le collaborateur ?",
          a: "Non. L'agent accélère le socle ; l'expertise signe.",
        },
      ],
    },
    en: {
      title: "Accounting firm",
      desc: "For accountants. Entry, files, compliance, deliverables.",
      heroH: "Agents for accounting firms",
      heroP:
        "Across collection, entry and controls, the agent prepares files; the accountant retains review, advice and accountability.",
      pains: [
        {
          title: "Repetitive entry and checks",
          desc: "Staff spend too much time on basic volume.",
        },
        {
          title: "Closing peaks",
          desc: "Without industrialization, quality drops under deadline pressure.",
        },
        {
          title: "Client confidentiality",
          desc: "Consumer tools conflict with your commitments.",
        },
      ],
      deliverables: [
        "Pre-entry / document-control agents",
        "File synthesis and client follow-up assistants",
        "RAG on firm procedures and standards",
        "Isolated multi-client data governance",
      ],
      scenarios: [
        {
          who: "Partner",
          need: "Absorb growth without linear hiring.",
          remparia:
            "Industrialize high-volume cases (entry, checks) with expert validation.",
        },
        {
          who: "Staff accountant",
          need: "Prepare closing files faster.",
          remparia:
            "Checklist + anomaly assistant, human review before deliverable.",
        },
      ],
      faqs: [
        {
          q: "Are client files isolated?",
          a: "Yes. Isolation and rights are part of the design.",
        },
        {
          q: "Does it replace staff?",
          a: "No. Agents accelerate the base layer; experts sign off.",
        },
      ],
    },
  },
  {
    slug: "clinique-veterinaire",
    fr: {
      title: "Clinique vétérinaire",
      desc: "Pour cliniques véto. RDV, urgences, dossiers animaux.",
      heroH: "Agents pour cliniques vétérinaires",
      heroP:
        "Fluidifier RDV, urgences et dossiers — tout en gardant le soin et la relation propriétaire au centre.",
      pains: [
        {
          title: "Urgences et RDV en collision",
          desc: "Sans triage, le standard et le soin se désorganisent.",
        },
        {
          title: "Dossiers et rappels chronophages",
          desc: "Vaccins, suivis, comptes-rendus saturent l'équipe.",
        },
        {
          title: "Données sensibles propriétaires / animaux",
          desc: "Besoin de gouvernance, pas de chatbot grand public.",
        },
      ],
      deliverables: [
        "Triage RDV / urgence",
        "Assistants rappels et pré-remplissage dossiers",
        "Intégration logiciels vétérinaires",
        "Gouvernance data et validation humaine",
      ],
      scenarios: [
        {
          who: "Vétérinaire titulaire",
          need: "Protéger le temps de soin.",
          remparia:
            "Agent de triage et confirmation RDV avec règles d'urgence clinique.",
        },
        {
          who: "ASV / accueil",
          need: "Réduire les appels répétitifs.",
          remparia:
            "FAQ + rappels gouvernés, escalade vers l'équipe soignante.",
        },
      ],
      faqs: [
        {
          q: "L'agent remplace-t-elle le diagnostic ?",
          a: "Non. Elle organise et prépare ; le vétérinaire soigne et décide.",
        },
        {
          q: "Multi-sites ?",
          a: "Oui : règles et droits par site / équipe.",
        },
      ],
    },
    en: {
      title: "Veterinary clinic",
      desc: "For vet clinics. Appointments, emergencies, animal records.",
      heroH: "Agents for veterinary clinics",
      heroP:
        "Smooth appointments, emergencies and records — while keeping care and owner relationships central.",
      pains: [
        {
          title: "Emergencies colliding with appointments",
          desc: "Without triage, the front desk and care floor scramble.",
        },
        {
          title: "Time-heavy records and reminders",
          desc: "Vaccines, follow-ups, reports saturate the team.",
        },
        {
          title: "Sensitive owner / animal data",
          desc: "Needs governance, not a consumer chatbot.",
        },
      ],
      deliverables: [
        "Appointment / emergency triage",
        "Reminder and record pre-fill assistants",
        "Veterinary software integration",
        "Data governance and human validation",
      ],
      scenarios: [
        {
          who: "Clinic owner",
          need: "Protect care time.",
          remparia:
            "Triage and appointment confirmation agent with clinical urgency rules.",
        },
        {
          who: "Front desk / vet nurse",
          need: "Cut repetitive calls.",
          remparia:
            "Governed FAQ + reminders, escalation to care team.",
        },
      ],
      faqs: [
        {
          q: "Does the agent replace diagnosis?",
          a: "No. It organizes and prepares; the vet cares and decides.",
        },
        {
          q: "Multi-site?",
          a: "Yes: rules and rights per site / team.",
        },
      ],
    },
  },
  {
    slug: "courtier-assurance",
    fr: {
      title: "Courtier en assurance",
      desc: "Pour courtiers. Qualification leads, dossiers, conformité.",
      heroH: "Agents pour courtiers en assurance",
      heroP:
        "Face aux demandes incomplètes et aux pièces dispersées, l'agent prépare le dossier ; le courtier garde le devoir de conseil et la recommandation.",
      pains: [
        {
          title: "Leads mal qualifiés",
          desc: "Le temps commercial se perd sur des contacts hors cible.",
        },
        {
          title: "Dossiers et pièces hétérogènes",
          desc: "Relances et contrôles ralentissent la souscription.",
        },
        {
          title: "Pression conformité",
          desc: "Traçabilité et devoir de conseil à prouver.",
        },
      ],
      deliverables: [
        "Agents de qualification besoin / risque",
        "Assistants dossier et checklist pièces",
        "Traçabilité pour devoir de conseil",
        "Intégration CRM / outils courtiers",
      ],
      scenarios: [
        {
          who: "Dirigeant de cabinet de courtage",
          need: "Augmenter le taux de transformation.",
          remparia:
            "Pré-qualification SIGNAL + handoff commercial propre.",
        },
        {
          who: "Chargé de clientèle",
          need: "Préparer un dossier plus vite.",
          remparia:
            "Assistant pièces + synthèse, validation avant envoi compagnie.",
        },
      ],
      faqs: [
        {
          q: "Compatible devoir de conseil ?",
          a: "Oui : traçabilité et validation humaine sont des livrables, pas des options.",
        },
        {
          q: "Multi-compagnies ?",
          a: "On s'adapte à vos parcours et règles par produit / partenaire.",
        },
      ],
    },
    en: {
      title: "Insurance broker",
      desc: "For brokers. Lead qualification, files, compliance.",
      heroH: "Agents for insurance brokers",
      heroP:
        "With incomplete requests and scattered documents, the agent prepares the file; the broker keeps the duty of advice and recommendation.",
      pains: [
        {
          title: "Poorly qualified leads",
          desc: "Sales time burns on off-target contacts.",
        },
        {
          title: "Heterogeneous files and documents",
          desc: "Follow-ups and checks slow underwriting.",
        },
        {
          title: "Compliance pressure",
          desc: "Traceability and duty-to-advise must be proven.",
        },
      ],
      deliverables: [
        "Need / risk qualification agents",
        "File assistants and document checklists",
        "Traceability for duty-to-advise",
        "CRM / broker-tool integration",
      ],
      scenarios: [
        {
          who: "Brokerage owner",
          need: "Raise conversion rate.",
          remparia:
            "SIGNAL pre-qualification + clean sales handoff.",
        },
        {
          who: "Account manager",
          need: "Prepare a file faster.",
          remparia:
            "Documents assistant + synthesis, validated before carrier send.",
        },
      ],
      faqs: [
        {
          q: "Compatible with duty-to-advise?",
          a: "Yes: traceability and human validation are deliverables, not options.",
        },
        {
          q: "Multi-carrier?",
          a: "We adapt to your pathways and rules per product / partner.",
        },
      ],
    },
  },
  // --- Secteurs additionnels ---
  {
    slug: "logistique-transport",
    fr: {
      title: "Logistique & transport",
      desc: "Pour chargeurs et transporteurs. Planning, exceptions, documents.",
      heroH: "Agents pour la logistique & le transport",
      heroP:
        "Traiter exceptions, documents et planning — branché sur WMS/TMS, jusqu'à la production.",
      pains: [
        {
          title: "Exceptions qui saturent les ops",
          desc: "Retards, litiges, replanifications : le manuel ne scale pas.",
        },
        {
          title: "Documents transport fragmentés",
          desc: "CMR, BL, factures : contrôles lents et erreurs coûteuses.",
        },
        {
          title: "Savoir dispatch peu capitalisé",
          desc: "Les règles vivent dans la tête des exploitants.",
        },
      ],
      deliverables: [
        "Agents de gestion d'exceptions",
        "Analyse documentaire transport",
        "Aide au dispatch / priorisation",
        "Intégration WMS/TMS et mesure OTIF",
      ],
      scenarios: [
        {
          who: "Directeur exploitation",
          need: "Réduire le temps passé sur les exceptions.",
          remparia:
            "Agent de triage + playbooks, escalade humaine sur cas critiques.",
        },
        {
          who: "Équipe documentaire",
          need: "Accélérer les contrôles BL / factures.",
          remparia:
            "Pipeline documentaire gouverné avec audit trail.",
        },
      ],
      faqs: [
        {
          q: "Temps réel / OT ?",
          a: "On respecte vos contraintes SI et latence ; pas de contournement sauvage.",
        },
        {
          q: "Multi-dépôts ?",
          a: "Oui, avec règles et droits par site.",
        },
      ],
    },
    en: {
      title: "Logistics & transport",
      desc: "For shippers and carriers. Planning, exceptions, documents.",
      heroH: "Agents for logistics & transport",
      heroP:
        "Handle exceptions, documents and planning — wired to WMS/TMS, through to production.",
      pains: [
        {
          title: "Exceptions flooding ops",
          desc: "Delays, disputes, replanning: manual work does not scale.",
        },
        {
          title: "Fragmented transport documents",
          desc: "BoL, invoices, proofs: slow checks and costly errors.",
        },
        {
          title: "Dispatch knowledge poorly capitalized",
          desc: "Rules live in planners' heads.",
        },
      ],
      deliverables: [
        "Exception-management agents",
        "Transport document analysis",
        "Dispatch / prioritization support",
        "WMS/TMS integration and OTIF measurement",
      ],
      scenarios: [
        {
          who: "Ops director",
          need: "Cut time spent on exceptions.",
          remparia:
            "Triage agent + playbooks, human escalation on critical cases.",
        },
        {
          who: "Document team",
          need: "Speed BoL / invoice checks.",
          remparia:
            "Governed document pipeline with audit trail.",
        },
      ],
      faqs: [
        {
          q: "Real-time / OT constraints?",
          a: "We respect your systems and latency constraints; no reckless bypass.",
        },
        {
          q: "Multi-depot?",
          a: "Yes, with rules and rights per site.",
        },
      ],
    },
    serviceSlugs: ["agents-metier", "infra-souveraine", "equipes-embarquees", "strategie-ia"],
  },
  {
    slug: "retail-distribution",
    fr: {
      title: "Retail & distribution",
      desc: "Pour enseignes. Demand sensing, assortiment, relation magasin.",
      heroH: "Agents pour le retail & la distribution",
      heroP:
        "Aider assortiment, prévisions et relation magasin — agents intégrés à vos process métiers.",
      pains: [
        {
          title: "Décisions assortiment trop lentes",
          desc: "Signaux ventes / stock sous-exploités au quotidien.",
        },
        {
          title: "Relation magasin saturée",
          desc: "FAQ process, ruptures, promos : le siège répond trop tard.",
        },
        {
          title: "POC technologiques décorrélés du terrain",
          desc: "Sans intégration ERP/POS, pas d'impact rayon.",
        },
      ],
      deliverables: [
        "Assistants décision assortiment / promo",
        "Agents relation magasin / siège",
        "RAG process et politiques enseignes",
        "Intégration ERP/POS et mesure rupture / marge",
      ],
      scenarios: [
        {
          who: "Direction retail",
          need: "Réduire les ruptures sur le cœur d'assortiment.",
          remparia:
            "Signal + agent d'alerte / recommandation, validation category manager.",
        },
        {
          who: "Animateur réseau",
          need: "Répondre plus vite aux magasins.",
          remparia:
            "Assistant FAQ process avec escalade métier.",
        },
      ],
      faqs: [
        {
          q: "Multi-enseignes / franchises ?",
          a: "Oui, avec cloisonnement et règles par enseigne.",
        },
        {
          q: "Remplace le category manager ?",
          a: "Non. L'agent propose ; le métier arbitre.",
        },
      ],
    },
    en: {
      title: "Retail & distribution",
      desc: "For retailers. Demand sensing, assortment, store relations.",
      heroH: "Agents for retail & distribution",
      heroP:
        "Support assortment, forecasting and store relations — agents integrated into business processes.",
      pains: [
        {
          title: "Assortment decisions too slow",
          desc: "Sales / stock signals underused day to day.",
        },
        {
          title: "Store relations overloaded",
          desc: "Process FAQ, stockouts, promos: HQ answers too late.",
        },
        {
          title: "Technology POCs disconnected from the floor",
          desc: "Without ERP/POS integration, no shelf impact.",
        },
      ],
      deliverables: [
        "Assortment / promo decision assistants",
        "Store / HQ relationship agents",
        "RAG on retail processes and policies",
        "ERP/POS integration and stockout / margin tracking",
      ],
      scenarios: [
        {
          who: "Retail leadership",
          need: "Cut stockouts on core assortment.",
          remparia:
            "Signal + alert / recommendation agent, category-manager validation.",
        },
        {
          who: "Network coach",
          need: "Answer stores faster.",
          remparia:
            "Process FAQ assistant with business escalation.",
        },
      ],
      faqs: [
        {
          q: "Multi-banner / franchise?",
          a: "Yes, with isolation and rules per banner.",
        },
        {
          q: "Replace the category manager?",
          a: "No. The agent proposes; business arbitrates.",
        },
      ],
    },
  },
  {
    slug: "rh-recrutement",
    fr: {
      title: "RH & recrutement",
      desc: "Pour RH. Screening, parcours candidat, knowledge interne.",
      heroH: "Agents pour les RH & le recrutement",
      heroP:
        "Accélérer screening et parcours candidat sans biais non maîtrisés — gouvernance et humain dans la boucle.",
      pains: [
        {
          title: "Volume de candidatures ingérable",
          desc: "Le screening manuel retarde les postes critiques.",
        },
        {
          title: "Parcours candidat inégal",
          desc: "FAQ et statuts dispersés dégradent la marque employeur.",
        },
        {
          title: "Risque biais / conformité",
          desc: "Une automatisation RH mal cadrée crée plus de risque qu'elle n'en retire.",
        },
      ],
      deliverables: [
        "Agents de pré-screening avec critères explicites",
        "Assistants parcours candidat / FAQ",
        "RAG sur politiques RH et fiches de poste",
        "Gouvernance anti-biais et validation humaine",
      ],
      scenarios: [
        {
          who: "DRH",
          need: "Réduire le time-to-shortlist.",
          remparia:
            "Pré-screening gouverné + revue recruteur obligatoire.",
        },
        {
          who: "Talent acquisition",
          need: "Mieux répondre aux candidats.",
          remparia:
            "Assistant statut / FAQ branché ATS, ton marque employeur.",
        },
      ],
      faqs: [
        {
          q: "L'agent décide-t-elle d'embaucher ?",
          a: "Non. Elle trie selon vos critères ; le recruteur décide.",
        },
        {
          q: "Conformité CNIL / discrimination ?",
          a: "Cadrage SIGNAL : finalités, critères, logs, human-in-the-loop.",
        },
      ],
    },
    en: {
      title: "HR & recruiting",
      desc: "For HR. Screening, candidate journey, internal knowledge.",
      heroH: "Agents for HR & recruiting",
      heroP:
        "Speed screening and candidate journeys without unmanaged bias — governance and humans in the loop.",
      pains: [
        {
          title: "Unmanageable application volume",
          desc: "Manual screening delays critical roles.",
        },
        {
          title: "Uneven candidate journey",
          desc: "Scattered FAQ and statuses hurt employer brand.",
        },
        {
          title: "Bias / compliance risk",
          desc: "Poorly framed HR automation creates more risk than it removes.",
        },
      ],
      deliverables: [
        "Pre-screening agents with explicit criteria",
        "Candidate journey / FAQ assistants",
        "RAG on HR policies and job descriptions",
        "Anti-bias governance and human validation",
      ],
      scenarios: [
        {
          who: "CHRO",
          need: "Cut time-to-shortlist.",
          remparia:
            "Governed pre-screening + mandatory recruiter review.",
        },
        {
          who: "Talent acquisition",
          need: "Answer candidates better.",
          remparia:
            "Status / FAQ assistant on ATS, employer-brand tone.",
        },
      ],
      faqs: [
        {
          q: "Does the agent decide who to hire?",
          a: "No. It sorts by your criteria; recruiters decide.",
        },
        {
          q: "Privacy / discrimination compliance?",
          a: "SIGNAL framing: purposes, criteria, logs, human-in-the-loop.",
        },
      ],
    },
  },
  {
    slug: "education-formation",
    fr: {
      title: "Éducation & formation",
      desc: "Pour écoles et organismes. Parcours, tutoring, back-office.",
      heroH: "Agents pour l'éducation & la formation",
      heroP:
        "Augmenter pédagogie et back-office — sans remplacer l'enseignant, avec garde-fous éthiques.",
      pains: [
        {
          title: "Charge administrative pédagogique",
          desc: "Suivi, FAQ apprenants, documents : le temps enseignant fond.",
        },
        {
          title: "Personnalisation difficile à scaler",
          desc: "Sans industrialisation, le tutoring reste artisanal.",
        },
        {
          title: "Risques éthiques et de contenu",
          desc: "Hallucinations et biais sont inacceptables en formation.",
        },
      ],
      deliverables: [
        "Assistants tutoring / FAQ sous contrôle pédagogique",
        "Agents back-office (inscriptions, dossiers)",
        "RAG sur contenus validés par les équipes",
        "Evals qualité et politiques d'usage",
      ],
      scenarios: [
        {
          who: "Directeur pédagogique",
          need: "Répondre plus vite aux apprenants sans baisser la qualité.",
          remparia:
            "Assistant FAQ sur corpus validé + escalade formateur.",
        },
        {
          who: "Organisme de formation",
          need: "Alléger le back-office administratif.",
          remparia:
            "Agents dossiers / relances avec validation humaine.",
        },
      ],
      faqs: [
        {
          q: "L'agent remplace-t-elle le formateur ?",
          a: "Non. Elle augmente ; la responsabilité pédagogique reste humaine.",
        },
        {
          q: "Contenus générés ?",
          a: "Uniquement sur corpus et règles que vous validez.",
        },
      ],
    },
    en: {
      title: "Education & training",
      desc: "For schools and training orgs. Pathways, tutoring, back-office.",
      heroH: "Agents for education & training",
      heroP:
        "Augment teaching and back-office — without replacing educators, with ethical guardrails.",
      pains: [
        {
          title: "Teaching admin load",
          desc: "Follow-ups, learner FAQ, documents: teaching time melts.",
        },
        {
          title: "Hard-to-scale personalization",
          desc: "Without industrialization, tutoring stays artisanal.",
        },
        {
          title: "Ethics and content risks",
          desc: "Hallucinations and bias are unacceptable in training.",
        },
      ],
      deliverables: [
        "Tutoring / FAQ assistants under pedagogical control",
        "Back-office agents (enrollment, files)",
        "RAG on team-validated content",
        "Quality evals and usage policies",
      ],
      scenarios: [
        {
          who: "Academic director",
          need: "Answer learners faster without dropping quality.",
          remparia:
            "FAQ assistant on validated corpus + trainer escalation.",
        },
        {
          who: "Training organization",
          need: "Ease administrative back-office.",
          remparia:
            "File / follow-up agents with human validation.",
        },
      ],
      faqs: [
        {
          q: "Does the agent replace the trainer?",
          a: "No. It augments; pedagogical accountability stays human.",
        },
        {
          q: "Generated content?",
          a: "Only on corpora and rules you validate.",
        },
      ],
    },
  },
  {
    slug: "energie-utilities",
    fr: {
      title: "Énergie & utilities",
      desc: "Pour énergéticiens. Maintenance, client, conformité terrain.",
      heroH: "Agents pour l'énergie & les utilities",
      heroP:
        "Agents maintenance, relation client et documentaire — sous contrainte sécurité et souveraineté.",
      pains: [
        {
          title: "Maintenance et interventions sous pression",
          desc: "Diagnostic et préparation de chantier trop manuels.",
        },
        {
          title: "Relation client volume",
          desc: "Réclamations et demandes répétitives saturent les centres.",
        },
        {
          title: "Exigences sécurité / data",
          desc: "Pas de place pour une automatisation non gouvernée.",
        },
      ],
      deliverables: [
        "Assistants maintenance / procédures",
        "Agents relation client gouvernés",
        "RAG documentaire technique",
        "Architecture souveraine et audit",
      ],
      scenarios: [
        {
          who: "Direction operations",
          need: "Accélérer le diagnostic terrain.",
          remparia:
            "Agent procédures + historiques, validation technicien.",
        },
        {
          who: "Relation client",
          need: "Absorber le L1 sans perdre la conformité.",
          remparia:
            "Agent L1 + escalade, logs d'audit.",
        },
      ],
      faqs: [
        {
          q: "Compatible OT / cybersécurité ?",
          a: "Oui. Segmentation et politiques sécurité respectées.",
        },
        {
          q: "Données de consommation ?",
          a: "Minimisation, finalités et hébergement cadrés dès le SIGNAL.",
        },
      ],
    },
    en: {
      title: "Energy & utilities",
      desc: "For energy firms. Maintenance, customer care, field compliance.",
      heroH: "Agents for energy & utilities",
      heroP:
        "Maintenance, customer and document agents — under security and sovereignty constraints.",
      pains: [
        {
          title: "Maintenance and interventions under pressure",
          desc: "Diagnosis and job prep still too manual.",
        },
        {
          title: "High-volume customer care",
          desc: "Complaints and repetitive requests flood centers.",
        },
        {
          title: "Security / data requirements",
          desc: "No room for unmanaged automation.",
        },
      ],
      deliverables: [
        "Maintenance / procedure assistants",
        "Governed customer-care agents",
        "Technical document RAG",
        "Sovereign architecture and audit",
      ],
      scenarios: [
        {
          who: "Operations leadership",
          need: "Speed field diagnosis.",
          remparia:
            "Procedures + history agent, technician validation.",
        },
        {
          who: "Customer care",
          need: "Absorb L1 without losing compliance.",
          remparia:
            "L1 agent + escalation, audit logs.",
        },
      ],
      faqs: [
        {
          q: "Compatible with OT / cyber?",
          a: "Yes. Segmentation and security policy respected.",
        },
        {
          q: "Consumption data?",
          a: "Minimization, purposes and hosting framed from SIGNAL day one.",
        },
      ],
    },
    serviceSlugs: ["agents-metier", "infra-souveraine", "strategie-ia", "equipes-embarquees"],
  },
  {
    slug: "media-contenu",
    fr: {
      title: "Media & contenu",
      desc: "Pour médias et marques. Production, modération, knowledge.",
      heroH: "Agents pour media & contenu",
      heroP:
        "Accélérer production et modération sans diluer la ligne éditoriale — gouvernance et revue humaine.",
      pains: [
        {
          title: "Production sous contrainte de délais",
          desc: "Drafts, déclinaisons, SEO : les équipes saturent.",
        },
        {
          title: "Modération à l'échelle",
          desc: "Volumes commentaires / UGC impossibles à traiter manuellement.",
        },
        {
          title: "Risque de dilution de marque",
          desc: "Sans garde-fous, l'automatisation uniformise ou dérive.",
        },
      ],
      deliverables: [
        "Assistants de drafting sous charte éditoriale",
        "Agents de pré-modération avec escalade",
        "RAG sur archives et guidelines",
        "Evals ton / factualité",
      ],
      scenarios: [
        {
          who: "Rédaction en chef",
          need: "Accélérer sans perdre la ligne.",
          remparia:
            "Pipeline draft + checklist éditoriale, validation humaine systématique.",
        },
        {
          who: "Community / trust & safety",
          need: "Prioriser les contenus à risque.",
          remparia:
            "Pré-modération scorée + file d'escalade.",
        },
      ],
      faqs: [
        {
          q: "L'agent publie-t-elle seule ?",
          a: "Non, sauf workflow que vous autorisez explicitement. Par défaut : revue humaine.",
        },
        {
          q: "Droits d'auteur / sources ?",
          a: "On cadre corpus, citations et politiques dès le design.",
        },
      ],
    },
    en: {
      title: "Media & content",
      desc: "For media and brands. Production, moderation, knowledge.",
      heroH: "Agents for media & content",
      heroP:
        "Speed production and moderation without diluting editorial line — governance and human review.",
      pains: [
        {
          title: "Production under deadline pressure",
          desc: "Drafts, variants, SEO: teams saturate.",
        },
        {
          title: "Moderation at scale",
          desc: "Comment / UGC volumes impossible to handle manually.",
        },
        {
          title: "Brand dilution risk",
          desc: "Without guardrails, automation flattens or drifts.",
        },
      ],
      deliverables: [
        "Drafting assistants under editorial charter",
        "Pre-moderation agents with escalation",
        "RAG on archives and guidelines",
        "Tone / factuality evals",
      ],
      scenarios: [
        {
          who: "Editor-in-chief",
          need: "Speed up without losing the line.",
          remparia:
            "Draft pipeline + editorial checklist, systematic human validation.",
        },
        {
          who: "Community / trust & safety",
          need: "Prioritize risky content.",
          remparia:
            "Scored pre-moderation + escalation queue.",
        },
      ],
      faqs: [
        {
          q: "Does the agent publish alone?",
          a: "No, unless you explicitly authorize a workflow. Default: human review.",
        },
        {
          q: "Copyright / sources?",
          a: "We frame corpora, citations and policies from design time.",
        },
      ],
    },
  },
  {
    slug: "pharma-sciences-vie",
    fr: {
      title: "Pharma & sciences de la vie",
      desc: "Pour pharma et biotech. Documentaire, qualité, conformité.",
      heroH: "Agents pour pharma & sciences de la vie",
      heroP:
        "Documentaire, qualité et knowledge scientifique — sous GxP, traçabilité et souveraineté.",
      pains: [
        {
          title: "Volumes documentaires réglementaires",
          desc: "Reviews et synthèses trop lentes pour les timelines.",
        },
        {
          title: "Knowledge scientifique dispersée",
          desc: "Publications, SOP, essais : signal difficile à retrouver.",
        },
        {
          title: "Exigences GxP / audit",
          desc: "Pas d'automatisation opaque dans un environnement régulé.",
        },
      ],
      deliverables: [
        "Assistants documentaires avec audit trail",
        "RAG scientifique / SOP gouverné",
        "Agents qualité / déviations avec validation",
        "Architecture et gouvernance compatibles audit",
      ],
      scenarios: [
        {
          who: "Medical / regulatory",
          need: "Accélérer les reviews documentaires.",
          remparia:
            "Pipeline de pré-analyse + checklist, signature humaine.",
        },
        {
          who: "Qualité",
          need: "Mieux capitaliser SOP et déviations.",
          remparia:
            "RAG + assistant investigation, traçabilité complète.",
        },
      ],
      faqs: [
        {
          q: "Compatible GxP ?",
          a: "Nous concevons avec vos exigences validation / audit — pas de raccourci.",
        },
        {
          q: "Données cliniques ?",
          a: "Minimisation, droits et hébergement cadrés avec vos équipes conformité.",
        },
      ],
    },
    en: {
      title: "Pharma & life sciences",
      desc: "For pharma and biotech. Documents, quality, compliance.",
      heroH: "Agents for pharma & life sciences",
      heroP:
        "Documents, quality and scientific knowledge — under GxP, traceability and sovereignty.",
      pains: [
        {
          title: "Regulatory document volumes",
          desc: "Reviews and synthesis too slow for timelines.",
        },
        {
          title: "Scattered scientific knowledge",
          desc: "Papers, SOPs, trials: signal hard to retrieve.",
        },
        {
          title: "GxP / audit requirements",
          desc: "No opaque automation in a regulated environment.",
        },
      ],
      deliverables: [
        "Document assistants with audit trail",
        "Governed scientific / SOP RAG",
        "Quality / deviation agents with validation",
        "Audit-compatible architecture and governance",
      ],
      scenarios: [
        {
          who: "Medical / regulatory",
          need: "Speed document reviews.",
          remparia:
            "Pre-analysis pipeline + checklist, human sign-off.",
        },
        {
          who: "Quality",
          need: "Better capitalize SOPs and deviations.",
          remparia:
            "RAG + investigation assistant, full traceability.",
        },
      ],
      faqs: [
        {
          q: "GxP compatible?",
          a: "We design with your validation / audit requirements — no shortcuts.",
        },
        {
          q: "Clinical data?",
          a: "Minimization, rights and hosting framed with your compliance teams.",
        },
      ],
    },
    serviceSlugs: ["strategie-ia", "infra-souveraine", "agents-metier", "equipes-embarquees"],
  },
  {
    slug: "hotel-tourisme",
    fr: {
      title: "Hôtellerie & tourisme",
      desc: "Pour hôtels et acteurs touristiques. Résa, conciergerie, upsells.",
      heroH: "Agents pour l'hôtellerie & le tourisme",
      heroP:
        "Quand les demandes répétitives saturent la réception, l'agent prépare les réponses ; l'équipe garde les situations sensibles et l'attention au séjour.",
      pains: [
        {
          title: "Demandes voyageurs 24/7",
          desc: "FAQ et modifications saturent réception et central résa.",
        },
        {
          title: "Upsell et parcours fragmentés",
          desc: "Opportunités perdues faute de process assisté.",
        },
        {
          title: "Multi-établissements",
          desc: "Qualité de réponse inégale selon les sites.",
        },
      ],
      deliverables: [
        "Agents conciergerie / FAQ gouvernés",
        "Assistants modification résa avec règles tarifaires",
        "Parcours upsell sous contrôle revenue",
        "Intégration PMS / channel manager",
      ],
      scenarios: [
        {
          who: "Revenue / GM",
          need: "Absorber le volume sans dégrader le NPS.",
          remparia:
            "Agent L1 + escalade réception, mesure satisfaction.",
        },
        {
          who: "Groupe hôtelier",
          need: "Homogénéiser la qualité multi-sites.",
          remparia:
            "Playbooks et agents partagés, droits par établissement.",
        },
      ],
      faqs: [
        {
          q: "L'agent remplace la réception ?",
          a: "Non. Elle absorbe le répétitif ; l'hospitalité reste humaine.",
        },
        {
          q: "Multilingue ?",
          a: "Oui, avec contrôle qualité par langue / marché.",
        },
      ],
    },
    en: {
      title: "Hospitality & tourism",
      desc: "For hotels and tourism players. Booking, concierge, upsells.",
      heroH: "Agents for hospitality & tourism",
      heroP:
        "When repetitive requests saturate reception, the agent prepares responses; the team keeps sensitive situations and attention to the stay.",
      pains: [
        {
          title: "24/7 guest requests",
          desc: "FAQ and changes flood front desk and reservations.",
        },
        {
          title: "Fragmented upsell journeys",
          desc: "Opportunities lost without assisted process.",
        },
        {
          title: "Multi-property inconsistency",
          desc: "Answer quality varies by site.",
        },
      ],
      deliverables: [
        "Governed concierge / FAQ agents",
        "Booking-change assistants with rate rules",
        "Upsell journeys under revenue control",
        "PMS / channel-manager integration",
      ],
      scenarios: [
        {
          who: "Revenue / GM",
          need: "Absorb volume without hurting NPS.",
          remparia:
            "L1 agent + front-desk escalation, satisfaction tracking.",
        },
        {
          who: "Hotel group",
          need: "Homogenize multi-site quality.",
          remparia:
            "Shared playbooks and agents, rights per property.",
        },
      ],
      faqs: [
        {
          q: "Does the agent replace the front desk?",
          a: "No. It absorbs repetitive load; hospitality stays human.",
        },
        {
          q: "Multilingual?",
          a: "Yes, with quality control per language / market.",
        },
      ],
    },
  },
  {
    slug: "agriculture-agroalimentaire",
    fr: {
      title: "Agriculture & agroalimentaire",
      desc: "Pour filières agri. Qualité, traçabilité, ops production.",
      heroH: "Agents pour l'agriculture & l'agroalimentaire",
      heroP:
        "Qualité, traçabilité et opérations — agents intégrés aux contraintes terrain et réglementation.",
      pains: [
        {
          title: "Contrôles qualité chronophages",
          desc: "Documents, non-conformités, audits : charge lourde.",
        },
        {
          title: "Traçabilité exigée",
          desc: "Remonter un lot rapidement reste trop manuel.",
        },
        {
          title: "Savoir process peu industrialisé",
          desc: "Modes opératoires et retours terrain dispersés.",
        },
      ],
      deliverables: [
        "Assistants qualité / non-conformités",
        "Aide à la traçabilité documentaire",
        "RAG process et procédures usine / exploitation",
        "Intégration SI métier et mesure des délais",
      ],
      scenarios: [
        {
          who: "Responsable qualité",
          need: "Accélérer le traitement des NC.",
          remparia:
            "Pré-qualification + checklist investigation, validation humaine.",
        },
        {
          who: "Direction de site",
          need: "Capitaliser les modes opératoires.",
          remparia:
            "RAG terrain + assistant consignes pour les équipes.",
        },
      ],
      faqs: [
        {
          q: "Sites ruraux / connectivité ?",
          a: "Architectures adaptées (y compris modes dégradés) selon votre réalité.",
        },
        {
          q: "Réglementation alimentaire ?",
          a: "Traçabilité et audit trail font partie du design SIGNAL.",
        },
      ],
    },
    en: {
      title: "Agriculture & food",
      desc: "For agri chains. Quality, traceability, production ops.",
      heroH: "Agents for agriculture & food",
      heroP:
        "Quality, traceability and operations — agents integrated with field and regulatory constraints.",
      pains: [
        {
          title: "Time-heavy quality controls",
          desc: "Documents, non-conformities, audits: heavy load.",
        },
        {
          title: "Required traceability",
          desc: "Tracing a lot quickly stays too manual.",
        },
        {
          title: "Poorly industrialized process knowledge",
          desc: "SOPs and field feedback are scattered.",
        },
      ],
      deliverables: [
        "Quality / non-conformity assistants",
        "Document traceability support",
        "RAG on plant / farm procedures",
        "Business-system integration and lead-time tracking",
      ],
      scenarios: [
        {
          who: "Quality lead",
          need: "Speed NC handling.",
          remparia:
            "Pre-qualification + investigation checklist, human validation.",
        },
        {
          who: "Site leadership",
          need: "Capitalize operating procedures.",
          remparia:
            "Field RAG + instruction assistant for teams.",
        },
      ],
      faqs: [
        {
          q: "Rural sites / connectivity?",
          a: "Architectures adapted (including degraded modes) to your reality.",
        },
        {
          q: "Food regulation?",
          a: "Traceability and audit trail are part of SIGNAL design.",
        },
      ],
    },
  },
];

export const EXTRA_SECTEUR_ITEMS = {
  fr: EXTRAS.map((e) => ({
    slug: e.slug,
    title: e.fr.title,
    desc: e.fr.desc,
  })) as HubItem[],
  en: EXTRAS.map((e) => ({
    slug: e.slug,
    title: e.en.title,
    desc: e.en.desc,
  })) as HubItem[],
};

export const EXTRA_DETAILS_FR: Record<string, SecteurDetail> = Object.fromEntries(
  EXTRAS.map((e) => [e.slug, toDetail("fr", e)]),
);

export const EXTRA_DETAILS_EN: Record<string, SecteurDetail> = Object.fromEntries(
  EXTRAS.map((e) => [e.slug, toDetail("en", e)]),
);
