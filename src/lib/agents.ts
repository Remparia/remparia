import type { Lang } from "./content";

export type AgentStatus = "terrain" | "pack" | "illustratif";

export type AgentPack = "commerce" | "legal" | "finance" | "real-estate";

export type AgentCopy = {
  name: string;
  role: string;
  trigger: string;
  inputs: string;
  tools: readonly string[];
  output: string;
  human: string;
  never: string;
  kpi: string;
};

export type AgentFiche = {
  id: string;
  pack?: AgentPack;
  secteurs: readonly string[];
  status: AgentStatus;
  flagship?: boolean;
  fr: AgentCopy;
  en: AgentCopy;
};

export type LocalizedAgent = AgentCopy &
  Pick<AgentFiche, "id" | "pack" | "secteurs" | "status" | "flagship">;

function fiche(
  base: Omit<AgentFiche, "fr" | "en">,
  fr: AgentCopy,
  en: AgentCopy,
): AgentFiche {
  return { ...base, fr, en };
}

export const AGENTS: readonly AgentFiche[] = [
  fiche(
    {
      id: "lead-qualification",
      pack: "commerce",
      secteurs: ["e-commerce", "retail-distribution", "agence-immobiliere"],
      status: "pack",
      flagship: true,
    },
    {
      name: "Pipeline qualifié, CRM à jour",
      role: "Agent Commerce : qualifier, scorer et router les demandes sans noyer l’équipe.",
      trigger: "Lead entrant (formulaire, marketplace, e-mail, magasin, appel).",
      inputs: "Identité, canal, panier ou besoin déclaré, historique CRM s’il existe.",
      tools: ["CRM", "E-mail", "Formulaires", "APIs commerce"],
      output: "Fiche lead scorée, prochaine action proposée, CRM mis à jour.",
      human: "Le commercial valide le seuil, le discount et le contact client.",
      never: "Il n’engage pas un prix hors grille et n’envoie pas d’offre engageante.",
      kpi: "Délai de première qualification et taux de leads traités sans relance humaine.",
    },
    {
      name: "Qualified pipeline, CRM up to date",
      role: "Commerce Agent: qualify, score and route inbound demand without flooding the team.",
      trigger: "Inbound lead (form, marketplace, email, store, call).",
      inputs: "Identity, channel, stated need or cart, existing CRM history.",
      tools: ["CRM", "Email", "Forms", "Commerce APIs"],
      output: "Scored lead file, next action proposed, CRM updated.",
      human: "Sales validates thresholds, discounts and customer contact.",
      never: "It does not commit off-grid pricing or send a binding offer.",
      kpi: "Time to first qualification and share of leads handled without human chase-up.",
    },
  ),
  fiche(
    {
      id: "pipeline-followup",
      pack: "commerce",
      secteurs: ["e-commerce", "retail-distribution", "agence-immobiliere"],
      status: "pack",
    },
    {
      name: "Relances au bon rythme",
      role: "Suivre le pipeline et relancer selon vos règles, pas selon l’oubli.",
      trigger: "Échéance CRM, devis ouvert, panier abandonné, silence client.",
      inputs: "Statut opportunité, dernier échange, règles de cadence.",
      tools: ["CRM", "E-mail", "SMS / helpdesk"],
      output: "Relance préparée, journalisée, prête à envoyer ou envoyée dans le cadre autorisé.",
      human: "Le commercial arbitre les relances sensibles et les comptes stratégiques.",
      never: "Il n’harcèle pas hors cadence et n’invente pas un engagement commercial.",
      kpi: "Taux d’opportunités relancées à temps et charge commerciale absorbée.",
    },
    {
      name: "Follow-up on cadence",
      role: "Keep the pipeline moving under your rules, not under forgotten tasks.",
      trigger: "CRM due date, open quote, abandoned cart, customer silence.",
      inputs: "Opportunity status, last exchange, cadence rules.",
      tools: ["CRM", "Email", "SMS / helpdesk"],
      output: "Prepared, logged follow-up, sent only inside the allowed frame.",
      human: "Sales owns sensitive accounts and strategic follow-ups.",
      never: "It does not chase outside cadence or invent a commercial commitment.",
      kpi: "Share of opportunities followed up on time and sales load absorbed.",
    },
  ),
  fiche(
    {
      id: "order-support",
      pack: "commerce",
      secteurs: ["e-commerce", "retail-distribution"],
      status: "pack",
    },
    {
      name: "Commande suivie, exception escaladée",
      role: "Traiter le L1 commande / retours et laisser le sensible à l’humain.",
      trigger: "Ticket, chat, e-mail « où est ma commande », retour, SAV.",
      inputs: "Statut commande, politique retours, historique client, ton de marque.",
      tools: ["Helpdesk", "E-commerce", "ERP", "CRM"],
      output: "Réponse L1 cadrée, ou dossier d’escalade prêt pour le CX.",
      human: "Remboursement hors politique, litige, geste commercial.",
      never: "Il ne rembourse pas hors périmètre et ne casse pas la voix de marque.",
      kpi: "Volume L1 absorbé et taux d’escalade hors règles.",
    },
    {
      name: "Order tracked, exception escalated",
      role: "Handle L1 order / returns work and leave sensitive cases to humans.",
      trigger: "Ticket, chat or email: tracking, return, after-sales.",
      inputs: "Order status, return policy, customer history, brand tone.",
      tools: ["Helpdesk", "Commerce platform", "ERP", "CRM"],
      output: "Framed L1 answer, or an escalation pack ready for CX.",
      human: "Out-of-policy refunds, disputes, goodwill gestures.",
      never: "It does not refund outside scope or break brand voice.",
      kpi: "L1 volume absorbed and out-of-policy escalation rate.",
    },
  ),
  fiche(
    {
      id: "catalog-content",
      pack: "commerce",
      secteurs: ["e-commerce", "retail-distribution"],
      status: "pack",
    },
    {
      name: "Fiche produit fidèle au catalogue",
      role: "Enrichir les contenus à partir du PIM, sans inventer.",
      trigger: "Nouvelle référence, rupture d’attributs, campagne merchandising.",
      inputs: "PIM, specs, politiques, visuels et mentions obligatoires.",
      tools: ["PIM", "CMS", "Docs", "APIs catalogue"],
      output: "Brouillon de fiche / FAQ produit prêt pour revue merchandising.",
      human: "Publication, claims marketing et mentions réglementaires.",
      never: "Il n’invente pas une caractéristique et ne publie pas sans revue.",
      kpi: "Délai de mise à jour fiche et écarts catalogue signalés.",
    },
    {
      name: "Product sheet faithful to the catalog",
      role: "Enrich content from the PIM, without inventing facts.",
      trigger: "New SKU, missing attributes, merchandising campaign.",
      inputs: "PIM, specs, policies, assets and mandatory notices.",
      tools: ["PIM", "CMS", "Docs", "Catalog APIs"],
      output: "Draft product sheet / FAQ ready for merchandising review.",
      human: "Publish, marketing claims and regulated notices.",
      never: "It does not invent attributes or publish without review.",
      kpi: "Time to update a sheet and catalog gaps flagged.",
    },
  ),
  fiche(
    {
      id: "store-hq",
      pack: "commerce",
      secteurs: ["retail-distribution"],
      status: "pack",
    },
    {
      name: "Magasin répondu, siège déchargé",
      role: "Orienter les demandes réseau (rupture, promo, process) vers la bonne règle.",
      trigger: "Question magasin, ticket interne, alerte rupture.",
      inputs: "Process enseigne, stocks, calendrier promo, droits par site.",
      tools: ["ERP / POS", "Intranet", "E-mail", "Ticketing"],
      output: "Réponse process ou dossier d’escalade category / siège.",
      human: "Arbitrage assortiment, exception réseau, communication enseigne.",
      never: "Il ne change pas un prix rayon et ne décide pas un réassort sensible.",
      kpi: "Délai de réponse siège et tickets process résolus sans expert.",
    },
    {
      name: "Store answered, HQ unblocked",
      role: "Route network requests (stockout, promo, process) to the right rule.",
      trigger: "Store question, internal ticket, stockout alert.",
      inputs: "Banner processes, stock, promo calendar, site rights.",
      tools: ["ERP / POS", "Intranet", "Email", "Ticketing"],
      output: "Process answer or escalation pack for category / HQ.",
      human: "Assortment calls, network exceptions, banner communication.",
      never: "It does not change shelf price or decide a sensitive replenishment.",
      kpi: "HQ response time and process tickets resolved without an expert.",
    },
  ),
  fiche(
    {
      id: "sales-reporting",
      pack: "commerce",
      secteurs: ["e-commerce", "retail-distribution"],
      status: "pack",
    },
    {
      name: "Reporting ventes prêt à relire",
      role: "Assembler les signaux ventes / stock dans votre format, pour revue.",
      trigger: "Clôture journée, semaine, campagne.",
      inputs: "Ventes, ruptures, panier, canaux, modèle de reporting.",
      tools: ["ERP", "BI / exports", "Docs", "E-mail"],
      output: "Brouillon de reporting et alertes d’écart, non publié.",
      human: "Commentaire managérial, arbitrage et envoi.",
      never: "Il n’envoie pas au réseau et ne substitue pas le jugement commercial.",
      kpi: "Temps de préparation du reporting et écarts détectés avant revue.",
    },
    {
      name: "Sales report ready to review",
      role: "Assemble sales / stock signals in your format, for review.",
      trigger: "Day, week or campaign close.",
      inputs: "Sales, stockouts, basket, channels, report template.",
      tools: ["ERP", "BI / exports", "Docs", "Email"],
      output: "Draft report and gap alerts, not published.",
      human: "Management commentary, calls and send-out.",
      never: "It does not send to the network or replace commercial judgment.",
      kpi: "Time to prepare the report and gaps caught before review.",
    },
  ),
  fiche(
    {
      id: "doc-review",
      pack: "legal",
      secteurs: ["cabinet-avocat", "etude-notariale", "services-conseil"],
      status: "pack",
    },
    {
      name: "Dossier lu, écarts signalés",
      role: "Trier, synthétiser et marquer les manques documentaires.",
      trigger: "Nouveau dossier, liasse reçue, pièce complémentaire.",
      inputs: "Pièces autorisées, check-list métier, sources internes.",
      tools: ["DMS", "E-mail", "GED", "CRM"],
      output: "Synthèse sourcée et liste d’écarts pour l’avocat / le clerc.",
      human: "Pertinence juridique, stratégie, avis au client.",
      never: "Il ne rend pas un avis et ne signe rien.",
      kpi: "Temps de première synthèse et taux de pièces manquantes détectées.",
    },
    {
      name: "File read, gaps flagged",
      role: "Sort, synthesize and mark documentary gaps.",
      trigger: "New matter, incoming pack, extra document.",
      inputs: "Approved documents, business checklist, internal sources.",
      tools: ["DMS", "Email", "Records", "CRM"],
      output: "Sourced brief and gap list for the lawyer / clerk.",
      human: "Legal relevance, strategy, client advice.",
      never: "It does not issue an opinion or sign anything.",
      kpi: "Time to first synthesis and missing documents caught.",
    },
  ),
  fiche(
    {
      id: "case-prep",
      pack: "legal",
      secteurs: ["cabinet-avocat", "etude-notariale"],
      status: "pack",
    },
    {
      name: "Dossier prêt pour l’audience",
      role: "Assembler la liasse, les échéances et le brouillon de trame.",
      trigger: "Échéance, audience, signature, revue associée.",
      inputs: "Pièces classées, calendrier, modèles du cabinet.",
      tools: ["DMS", "Calendrier", "Docs"],
      output: "Dossier structuré + points à trancher par l’humain.",
      human: "Stratégie, plaidoirie, acte, déontologie.",
      never: "Il n’engage pas le cabinet auprès du client ou du juge.",
      kpi: "Temps expert avant première lecture utile.",
    },
    {
      name: "File ready for hearing",
      role: "Assemble the pack, deadlines and draft outline.",
      trigger: "Deadline, hearing, signing, partner review.",
      inputs: "Classified documents, calendar, firm templates.",
      tools: ["DMS", "Calendar", "Docs"],
      output: "Structured file + points the human must decide.",
      human: "Strategy, advocacy, deed, ethics.",
      never: "It does not commit the firm to the client or the court.",
      kpi: "Expert time before a useful first read.",
    },
  ),
  fiche(
    {
      id: "compliance-check",
      pack: "legal",
      secteurs: ["cabinet-avocat", "courtier-assurance", "finance-assurance"],
      status: "pack",
    },
    {
      name: "Contrôle cadré, doute escaladé",
      role: "Appliquer la check-list conformité et journaliser chaque écart.",
      trigger: "Nouveau client, renouvellement, contrôle périodique.",
      inputs: "Règles internes, pièces KYC / dossier, seuils d’alerte.",
      tools: ["DMS", "CRM", "Outils conformité"],
      output: "Check-list cochée, écarts, piste d’audit.",
      human: "Acceptation, dérogation, déclaration.",
      never: "Il ne décide pas de l’acceptation du risque ou du client.",
      kpi: "Exhaustivité des contrôles journalisés et délai de revue.",
    },
    {
      name: "Framed check, doubt escalated",
      role: "Apply the compliance checklist and log every gap.",
      trigger: "New client, renewal, periodic control.",
      inputs: "Internal rules, KYC / file documents, alert thresholds.",
      tools: ["DMS", "CRM", "Compliance tools"],
      output: "Completed checklist, gaps, audit trail.",
      human: "Acceptance, waiver, filing.",
      never: "It does not decide client or risk acceptance.",
      kpi: "Completeness of logged checks and review lead time.",
    },
  ),
  fiche(
    {
      id: "legal-intake",
      pack: "legal",
      secteurs: ["cabinet-avocat"],
      status: "pack",
    },
    {
      name: "Demande client orientée",
      role: "Qualifier l’intake et préparer le premier dossier.",
      trigger: "Formulaire, e-mail, appel retranscrit.",
      inputs: "Objet de la demande, pièces jointes, conflits potentiels déclarés.",
      tools: ["CRM", "E-mail", "DMS"],
      output: "Fiche intake + orientation interne, sans conseil.",
      human: "Conflit d’intérêts, acceptation du dossier, premier conseil.",
      never: "Il ne donne pas de conseil juridique au prospect.",
      kpi: "Délai d’orientation et dossiers complets au premier passage.",
    },
    {
      name: "Client request routed",
      role: "Qualify intake and prepare the first file.",
      trigger: "Form, email, transcribed call.",
      inputs: "Request subject, attachments, declared potential conflicts.",
      tools: ["CRM", "Email", "DMS"],
      output: "Intake sheet + internal routing, no advice.",
      human: "Conflicts, matter acceptance, first advice.",
      never: "It does not give legal advice to a prospect.",
      kpi: "Routing lead time and files complete at first pass.",
    },
  ),
  fiche(
    {
      id: "kyc-assist",
      pack: "finance",
      secteurs: ["finance-assurance", "courtier-assurance"],
      status: "pack",
    },
    {
      name: "KYC prêt pour décision",
      role: "Collecter, contrôler et journaliser, sans accepter le client.",
      trigger: "Onboarding, renouvellement, pièce manquante.",
      inputs: "Pièces d’identité, règles LCB-FT, historique dossier.",
      tools: ["CRM", "GED", "E-mail", "Outils KYC"],
      output: "Dossier KYC complet ou liste d’écarts, piste d’audit.",
      human: "Acceptation, gel, déclaration, dérogation.",
      never: "Il ne décide pas de l’entrée en relation.",
      kpi: "Délai KYC et exhaustivité des contrôles journalisés.",
    },
    {
      name: "KYC ready for a decision",
      role: "Collect, check and log, without accepting the client.",
      trigger: "Onboarding, renewal, missing document.",
      inputs: "ID documents, AML rules, file history.",
      tools: ["CRM", "DMS", "Email", "KYC tools"],
      output: "Complete KYC file or gap list, audit trail.",
      human: "Acceptance, freeze, filing, waiver.",
      never: "It does not decide onboarding.",
      kpi: "KYC lead time and completeness of logged checks.",
    },
  ),
  fiche(
    {
      id: "finance-reporting",
      pack: "finance",
      secteurs: ["finance-assurance", "expertise-comptable"],
      status: "pack",
    },
    {
      name: "Reporting prêt pour revue",
      role: "Produire le brouillon à partir des sources autorisées.",
      trigger: "Échéance réglementaire ou reporting client.",
      inputs: "Sources validées, modèle, période, droits d’accès.",
      tools: ["Core / ERP", "Docs", "GED"],
      output: "Brouillon + anomalies, non envoyé.",
      human: "Commentaire, signature, envoi.",
      never: "Il n’envoie pas un reporting et ne certifie rien.",
      kpi: "Temps de préparation et anomalies avant revue.",
    },
    {
      name: "Report ready for review",
      role: "Draft from approved sources.",
      trigger: "Regulatory or client reporting deadline.",
      inputs: "Approved sources, template, period, access rights.",
      tools: ["Core / ERP", "Docs", "DMS"],
      output: "Draft + anomalies, not sent.",
      human: "Commentary, sign-off, send.",
      never: "It does not send a report or certify anything.",
      kpi: "Prep time and anomalies before review.",
    },
  ),
  fiche(
    {
      id: "risk-prep",
      pack: "finance",
      secteurs: ["finance-assurance"],
      status: "pack",
    },
    {
      name: "Alerte préparée, décision humaine",
      role: "Assembler le dossier d’alerte et les contrôles définis.",
      trigger: "Seuil, anomalie, revue périodique.",
      inputs: "Règles risque, flux, historiques autorisés.",
      tools: ["Core banking", "GED", "Outils contrôle"],
      output: "Dossier d’alerte structuré pour l’analyste.",
      human: "Notation, gel, déclaration.",
      never: "Il ne note pas le risque et ne bloque pas un compte seul.",
      kpi: "Délai de constitution du dossier d’alerte.",
    },
    {
      name: "Alert prepared, human decision",
      role: "Assemble the alert file and defined controls.",
      trigger: "Threshold, anomaly, periodic review.",
      inputs: "Risk rules, flows, approved history.",
      tools: ["Core banking", "DMS", "Control tools"],
      output: "Structured alert file for the analyst.",
      human: "Rating, freeze, filing.",
      never: "It does not rate risk or freeze an account on its own.",
      kpi: "Time to assemble the alert file.",
    },
  ),
  fiche(
    {
      id: "reconciliation",
      pack: "finance",
      secteurs: ["expertise-comptable", "finance-assurance"],
      status: "pack",
    },
    {
      name: "Écarts visibles avant clôture",
      role: "Rapprocher les flux et signaler les anomalies.",
      trigger: "Clôture, import bancaire, cycle de révision.",
      inputs: "Relevés, écritures, règles de rapprochement.",
      tools: ["ERP / compta", "Banque", "GED"],
      output: "Liste d’écarts priorisés pour l’expert.",
      human: "Imputation, lettre d’affirmation, opinion.",
      never: "Il ne passe pas une écriture engageante seul.",
      kpi: "Écarts détectés avant première lecture expert.",
    },
    {
      name: "Gaps visible before close",
      role: "Reconcile flows and flag anomalies.",
      trigger: "Close, bank import, review cycle.",
      inputs: "Statements, entries, reconciliation rules.",
      tools: ["ERP / ledger", "Bank", "DMS"],
      output: "Prioritized gap list for the expert.",
      human: "Posting, representation letter, opinion.",
      never: "It does not post a binding entry on its own.",
      kpi: "Gaps caught before the expert’s first read.",
    },
  ),
  fiche(
    {
      id: "property-leads",
      pack: "real-estate",
      secteurs: ["agence-immobiliere"],
      status: "pack",
    },
    {
      name: "Lead immo qualifié",
      role: "Scorer acheteurs / locataires / mandats et préparer le premier contact.",
      trigger: "Annonce, portail, appel, walk-in.",
      inputs: "Critères, budget déclaré, bien visé, historique agence.",
      tools: ["CRM immo", "E-mail", "Portails", "Agenda"],
      output: "Lead scoré + matching initial, sans engagement.",
      human: "Visite, négociation, mandat.",
      never: "Il ne signe pas un mandat et ne promet pas un bien.",
      kpi: "Délai de qualification et leads traités sans relance conseiller.",
    },
    {
      name: "Qualified property lead",
      role: "Score buyers / tenants / listings and prepare first contact.",
      trigger: "Listing, portal, call, walk-in.",
      inputs: "Criteria, stated budget, target property, agency history.",
      tools: ["Property CRM", "Email", "Portals", "Calendar"],
      output: "Scored lead + initial match, no commitment.",
      human: "Visit, negotiation, mandate.",
      never: "It does not sign a mandate or promise a property.",
      kpi: "Qualification lead time and leads handled without advisor chase-up.",
    },
  ),
  fiche(
    {
      id: "property-matching",
      pack: "real-estate",
      secteurs: ["agence-immobiliere"],
      status: "pack",
    },
    {
      name: "Bien proposé, conseiller décide",
      role: "Croiser stock et critères, préparer une short-list.",
      trigger: "Nouveau mandat, nouveau lead, changement de critères.",
      inputs: "Stock, critères, exclusions, historique visites.",
      tools: ["CRM immo", "Portails", "GED"],
      output: "Short-list commentée pour le conseiller.",
      human: "Sélection finale et discours client.",
      never: "Il n’envoie pas une sélection au client sans validation.",
      kpi: "Temps de matching et pertinence au premier passage conseiller.",
    },
    {
      name: "Property proposed, advisor decides",
      role: "Match stock and criteria, prepare a short-list.",
      trigger: "New listing, new lead, criteria change.",
      inputs: "Stock, criteria, exclusions, viewing history.",
      tools: ["Property CRM", "Portals", "DMS"],
      output: "Commented short-list for the advisor.",
      human: "Final selection and client narrative.",
      never: "It does not send a selection to the client without validation.",
      kpi: "Matching time and relevance at first advisor pass.",
    },
  ),
  fiche(
    {
      id: "property-docs",
      pack: "real-estate",
      secteurs: ["agence-immobiliere", "etude-notariale"],
      status: "pack",
    },
    {
      name: "Pièces du dossier réunies",
      role: "Collecter, classer et relancer les pièces de transaction.",
      trigger: "Compromis, mandat, dossier locatif.",
      inputs: "Check-list pièces, contacts, GED.",
      tools: ["GED", "E-mail", "CRM"],
      output: "Dossier de pièces + relances tracées.",
      human: "Complétude juridique et signature.",
      never: "Il ne valide pas un acte et ne décide pas la complétude légale.",
      kpi: "Délai de complétude et relances sans conseiller.",
    },
    {
      name: "Transaction documents gathered",
      role: "Collect, file and chase transaction documents.",
      trigger: "Offer, mandate, rental file.",
      inputs: "Document checklist, contacts, DMS.",
      tools: ["DMS", "Email", "CRM"],
      output: "Document pack + logged chase-ups.",
      human: "Legal completeness and signature.",
      never: "It does not validate a deed or decide legal completeness.",
      kpi: "Time to completeness and chase-ups without an advisor.",
    },
  ),
  fiche(
    {
      id: "tenant-support",
      pack: "real-estate",
      secteurs: ["agence-immobiliere"],
      status: "pack",
    },
    {
      name: "Locataire orienté, exception humaine",
      role: "Répondre L1 (quittance, délai, process) et escalader le reste.",
      trigger: "E-mail / ticket locataire.",
      inputs: "Bail, historique, process agence.",
      tools: ["CRM", "Helpdesk", "GED"],
      output: "Réponse cadrée ou escalade gestionnaire.",
      human: "Litige, impayé, décision d’expulsion / arrangement.",
      never: "Il ne s’engage pas sur un recouvrement ou une procédure.",
      kpi: "Tickets L1 absorbés et escalades hors process.",
    },
    {
      name: "Tenant routed, exception human",
      role: "Answer L1 (receipt, timeline, process) and escalate the rest.",
      trigger: "Tenant email / ticket.",
      inputs: "Lease, history, agency process.",
      tools: ["CRM", "Helpdesk", "DMS"],
      output: "Framed answer or manager escalation.",
      human: "Dispute, arrears, eviction / settlement decision.",
      never: "It does not commit to recovery or legal action.",
      kpi: "L1 tickets absorbed and out-of-process escalations.",
    },
  ),
  fiche(
    {
      id: "notary-completeness",
      secteurs: ["etude-notariale"],
      status: "illustratif",
    },
    {
      name: "Dossier complet avant le clerc",
      role: "Relancer les pièces d’acte et appliquer la check-list de l’étude.",
      trigger: "Ouverture de dossier, pièce reçue, échéance signature.",
      inputs: "Check-list acte, contacts, GED notariale.",
      tools: ["GED", "E-mail", "Agenda"],
      output: "État de complétude + relances tracées.",
      human: "Acte, conseil, authenticité.",
      never: "Il ne dresse pas l’acte et ne conseille pas les parties.",
      kpi: "Délai de complétude des pièces.",
    },
    {
      name: "File complete before the clerk",
      role: "Chase deed documents and apply the office checklist.",
      trigger: "File opening, document received, signing deadline.",
      inputs: "Deed checklist, contacts, notarial DMS.",
      tools: ["DMS", "Email", "Calendar"],
      output: "Completeness status + logged chase-ups.",
      human: "Deed, advice, authenticity.",
      never: "It does not draft the deed or advise the parties.",
      kpi: "Time to document completeness.",
    },
  ),
  fiche(
    {
      id: "accounting-close",
      secteurs: ["expertise-comptable"],
      status: "illustratif",
    },
    {
      name: "Clôture préparée",
      role: "Collecter les pièces de période et préparer la liasse.",
      trigger: "Fin de période, relance client, dépôt.",
      inputs: "Pièces comptables, calendrier, modèles cabinet.",
      tools: ["Compta", "GED", "E-mail"],
      output: "Liasse préparée + écarts pour l’expert.",
      human: "Révision, opinion, attestation.",
      never: "Il ne certifie pas et ne signe pas.",
      kpi: "Temps expert avant première lecture de clôture.",
    },
    {
      name: "Close prepared",
      role: "Collect period documents and prepare the pack.",
      trigger: "Period end, client chase-up, filing.",
      inputs: "Accounting documents, calendar, firm templates.",
      tools: ["Ledger", "DMS", "Email"],
      output: "Prepared pack + gaps for the expert.",
      human: "Review, opinion, attestation.",
      never: "It does not certify or sign.",
      kpi: "Expert time before first close read.",
    },
  ),
  fiche(
    {
      id: "proposal-assist",
      secteurs: ["services-conseil"],
      status: "illustratif",
    },
    {
      name: "Proposition prête à relire",
      role: "Assembler un brouillon de proposition à partir du savoir autorisé.",
      trigger: "Appel d’offres, demande client, jalon commercial.",
      inputs: "Cahier des charges, retours mission, modèles cabinet.",
      tools: ["CRM", "Docs", "GED"],
      output: "Brouillon de proposition, non envoyé.",
      human: "Offre, prix, engagement.",
      never: "Il n’envoie pas une proposition et n’engage pas le cabinet.",
      kpi: "Temps de première version et reprises.",
    },
    {
      name: "Proposal ready to review",
      role: "Assemble a draft proposal from approved knowledge.",
      trigger: "RFP, client request, sales milestone.",
      inputs: "Brief, mission notes, firm templates.",
      tools: ["CRM", "Docs", "DMS"],
      output: "Draft proposal, not sent.",
      human: "Offer, price, commitment.",
      never: "It does not send a proposal or commit the firm.",
      kpi: "Time to first draft and rework cycles.",
    },
  ),
  fiche(
    {
      id: "ops-prep",
      secteurs: ["industrie", "logistique-transport", "pharma-sciences-vie"],
      status: "illustratif",
    },
    {
      name: "Intervention préparée",
      role: "Préparer dossiers maintenance / qualité / exceptions pour l’équipe terrain.",
      trigger: "Alerte, non-conformité, shift, SLA.",
      inputs: "Procédures, historiques, tickets.",
      tools: ["MES / ERP", "GED", "Ticketing"],
      output: "Dossier d’intervention + points à valider.",
      human: "Diagnostic, sécurité, décision d’arrêt.",
      never: "Il n’arrête pas une ligne et ne certifie pas la conformité.",
      kpi: "Temps de préparation avant intervention.",
    },
    {
      name: "Intervention prepared",
      role: "Prepare maintenance / quality / exception files for field teams.",
      trigger: "Alert, non-conformity, shift, SLA.",
      inputs: "Procedures, history, tickets.",
      tools: ["MES / ERP", "DMS", "Ticketing"],
      output: "Intervention file + points to validate.",
      human: "Diagnosis, safety, stop decision.",
      never: "It does not stop a line or certify compliance.",
      kpi: "Prep time before intervention.",
    },
  ),
  fiche(
    {
      id: "admin-prep",
      secteurs: [
        "sante",
        "cabinet-paramedical",
        "cabinet-dentaire",
        "clinique-veterinaire",
        "secteur-public",
      ],
      status: "illustratif",
    },
    {
      name: "Parcours administratif préparé",
      role: "Trier demandes, pièces et rendez-vous. La décision métier reste humaine.",
      trigger: "Prise de rendez-vous, pièce manquante, demande usager.",
      inputs: "Formulaires, pièces, règles d’éligibilité / secret pro.",
      tools: ["Agenda", "GED", "E-mail"],
      output: "Dossier administratif prêt, orientation proposée.",
      human: "Décision clinique / publique, accès au dossier sensible.",
      never: "Il ne pose pas un diagnostic et n’accède pas hors droits.",
      kpi: "Délai administratif avant prise en charge humaine.",
    },
    {
      name: "Admin path prepared",
      role: "Sort requests, documents and appointments. The professional decision stays human.",
      trigger: "Booking, missing document, citizen request.",
      inputs: "Forms, documents, eligibility / confidentiality rules.",
      tools: ["Calendar", "DMS", "Email"],
      output: "Admin file ready, routing proposed.",
      human: "Clinical / public decision, sensitive-record access.",
      never: "It does not diagnose or access beyond rights.",
      kpi: "Admin lead time before human handling.",
    },
  ),
  fiche(
    {
      id: "local-ops",
      secteurs: [
        "salon-beaute",
        "artisan-btp",
        "restaurant",
        "garage-automobile",
        "plombier-chauffagiste",
        "hotel-tourisme",
      ],
      status: "illustratif",
    },
    {
      name: "Demande terrain qualifiée",
      role: "Qualifier devis / réservation / SAV et préparer le passage humain.",
      trigger: "Appel, formulaire, message, walk-in.",
      inputs: "Besoin déclaré, créneaux, tarifs, historique.",
      tools: ["Agenda", "E-mail", "CRM léger"],
      output: "Fiche demande + créneau proposé, sans engagement hors grille.",
      human: "Devis définitif, diagnostic, exception tarifaire.",
      never: "Il n’engage pas un chantier et ne diagnostique pas à la place de l’expert.",
      kpi: "Délai de réponse et demandes complètes au premier contact.",
    },
    {
      name: "Field request qualified",
      role: "Qualify quote / booking / after-sales and prepare the human handoff.",
      trigger: "Call, form, message, walk-in.",
      inputs: "Stated need, slots, rates, history.",
      tools: ["Calendar", "Email", "Lightweight CRM"],
      output: "Request file + proposed slot, no off-grid commitment.",
      human: "Final quote, diagnosis, pricing exception.",
      never: "It does not commit a job or diagnose instead of the expert.",
      kpi: "Response time and complete requests at first contact.",
    },
  ),
  fiche(
    {
      id: "org-assist",
      secteurs: [
        "rh-recrutement",
        "education-formation",
        "media-contenu",
        "tech-produit",
        "energie-utilities",
        "agriculture-agroalimentaire",
      ],
      status: "illustratif",
    },
    {
      name: "Flux interne préparé",
      role: "Trier, synthétiser et préparer les livrables récurrents de l’équipe.",
      trigger: "Demande interne, jalon, publication, ticket.",
      inputs: "Sources autorisées, modèles, droits.",
      tools: ["Docs", "E-mail", "Ticketing"],
      output: "Brouillon ou dossier d’instruction, non publié.",
      human: "Décision, publication, engagement externe.",
      never: "Il n’envoie pas hors validation et n’outrepasse pas les droits.",
      kpi: "Charge répétitive absorbée et délais de préparation.",
    },
    {
      name: "Internal flow prepared",
      role: "Sort, synthesize and prepare the team’s recurring deliverables.",
      trigger: "Internal request, milestone, publish, ticket.",
      inputs: "Approved sources, templates, rights.",
      tools: ["Docs", "Email", "Ticketing"],
      output: "Draft or briefing file, unpublished.",
      human: "Decision, publish, external commitment.",
      never: "It does not send without validation or exceed rights.",
      kpi: "Repetitive load absorbed and prep lead time.",
    },
  ),
];

export function localizeAgent(agent: AgentFiche, lang: Lang): LocalizedAgent {
  const copy = agent[lang];
  return {
    id: agent.id,
    pack: agent.pack,
    secteurs: agent.secteurs,
    status: agent.status,
    flagship: agent.flagship,
    ...copy,
  };
}

export function getFlagshipAgent(lang: Lang): LocalizedAgent {
  const agent = AGENTS.find((a) => a.flagship) ?? AGENTS[0];
  return localizeAgent(agent, lang);
}

export function getAgentsByPack(pack: AgentPack, lang: Lang): LocalizedAgent[] {
  return AGENTS.filter((a) => a.pack === pack).map((a) => localizeAgent(a, lang));
}

export function getAgentsForSecteur(slug: string, lang: Lang): LocalizedAgent[] {
  const matched = AGENTS.filter((a) => a.secteurs.includes(slug)).map((a) =>
    localizeAgent(a, lang),
  );
  if (matched.length) {
    const flagship = matched.filter((a) => a.flagship);
    const rest = matched.filter((a) => !a.flagship);
    return [...flagship, ...rest].slice(0, 4);
  }
  return [];
}

export const AGENT_UI = {
  fr: {
    eyebrow: "Agents de ce métier",
    title: "Ce que l’agent porte, et ce qu’il ne touche pas",
    flagship: "Flagship",
    trigger: "Déclencheur",
    inputs: "Entrées",
    tools: "Outils",
    output: "Livrable",
    human: "Validation humaine",
    never: "Ne fait jamais",
    kpi: "On mesure",
    status: {
      terrain: "Terrain",
      pack: "Pack",
      illustratif: "Illustratif",
    } satisfies Record<AgentStatus, string>,
    packCta: "Voir le pack",
    commerceCta: "Voir le pack Commerce",
    commerceHref: "/solutions/commerce",
  },
  en: {
    eyebrow: "Agents for this profession",
    title: "What the agent carries, and what it never touches",
    flagship: "Flagship",
    trigger: "Trigger",
    inputs: "Inputs",
    tools: "Tools",
    output: "Deliverable",
    human: "Human validation",
    never: "Never does",
    kpi: "We measure",
    status: {
      terrain: "Field",
      pack: "Pack",
      illustratif: "Illustrative",
    } satisfies Record<AgentStatus, string>,
    packCta: "See the pack",
    commerceCta: "See the Commerce pack",
    commerceHref: "/solutions/commerce",
  },
} as const;

export function agentUi(lang: Lang) {
  return AGENT_UI[lang];
}
