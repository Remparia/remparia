/** Vertical-specific autonomy FAQ — avoids duplicate copy across sector pages. */

const ANSWERS: Record<string, { fr: string; en: string }> = {
  "cabinet-paramedical": {
    fr: "Oui. Vos règles d'accès aux dossiers, protocoles de consentement et procédures de validation clinique restent chez vous — avec documentation et formation du secrétariat.",
    en: "Yes. Record access rules, consent protocols and clinical validation procedures stay with you — with documentation and front-desk training.",
  },
  "cabinet-avocat": {
    fr: "Oui. Le secret professionnel, les règles de production d'actes et les chartes de relecture sont documentés et transférés à vos équipes associées et paralegals.",
    en: "Yes. Professional secrecy, deed production rules and review charters are documented and transferred to your associates and paralegals.",
  },
  "agence-immobiliere": {
    fr: "Oui. Vos mandats, critères de qualification et modèles de relance restent maîtrisés en interne — l'agent accélère la préparation, pas la décision commerciale.",
    en: "Yes. Mandates, qualification criteria and follow-up templates stay in-house — agents speed prep, not commercial decisions.",
  },
  "salon-beaute": {
    fr: "Oui. Grilles tarifaires, politiques d'annulation et scripts d'accueil sont configurables par vos soins ; nous formons l'équipe à ajuster sans prestataire externe.",
    en: "Yes. Price grids, cancellation policies and welcome scripts are configurable by you; we train staff to adjust without an external vendor lock-in.",
  },
  "artisan-btp": {
    fr: "Oui. Devis types, checklists chantier et règles d'escalade terrain sont documentés sur votre SI ; vos chefs de chantier gardent la main sur les exceptions.",
    en: "Yes. Quote templates, site checklists and field escalation rules live in your systems; site leads keep control of exceptions.",
  },
  restaurant: {
    fr: "Oui. Cartes, allergènes, procédures de service et règles d'escalade salle/cuisine restent éditables par votre équipe — sans dépendance à un modèle opaque.",
    en: "Yes. Menus, allergens, service procedures and floor/kitchen escalation rules remain editable by your team — no opaque model dependency.",
  },
  "garage-automobile": {
    fr: "Oui. Grilles temps, procédures diagnostic et règles de devis sont transférées aux ateliers ; le technicien valide toujours avant envoi client.",
    en: "Yes. Time grids, diagnostic procedures and quoting rules transfer to workshops; technicians always validate before client send.",
  },
  "e-commerce": {
    fr: "Oui. Règles SAV, politiques retour et corpus produit autorisés restent sous votre gouvernance — avec logs d'audit sur chaque réponse agent.",
    en: "Yes. CS rules, return policies and approved product corpora stay under your governance — with audit logs on every agent reply.",
  },
  "cabinet-dentaire": {
    fr: "Oui. Parcours patient, modèles de comptes-rendus et règles de planification sont documentés ; le praticien garde la responsabilité clinique.",
    en: "Yes. Patient pathways, report templates and scheduling rules are documented; the clinician keeps clinical accountability.",
  },
  "plombier-chauffagiste": {
    fr: "Oui. Tarifs, procédures dépannage et modèles de devis sont versionnés chez vous ; les techniciens valident les propositions avant envoi.",
    en: "Yes. Rates, emergency procedures and quote templates are versioned in-house; technicians validate proposals before send.",
  },
  "etude-notariale": {
    fr: "Oui. Clauses types, circuits de validation et règles de contrôle actes restent maîtrisés par le notaire — l'agent prépare, ne signe pas.",
    en: "Yes. Standard clauses, validation flows and deed control rules stay with the notary — agents prepare, never sign.",
  },
  "expertise-comptable": {
    fr: "Oui. Plans de compte, checklists clôture et règles de revue sont transférés à vos équipes ; le signataire expert-comptable reste responsable.",
    en: "Yes. Chart mappings, closing checklists and review rules transfer to your teams; the signing accountant remains accountable.",
  },
  "clinique-veterinaire": {
    fr: "Oui. Protocoles soins, rappels vaccins et règles d'accès dossier animal restent configurables ; le vétérinaire valide tout output clinique.",
    en: "Yes. Care protocols, vaccine reminders and record access rules stay configurable; the vet validates all clinical output.",
  },
  "courtier-assurance": {
    fr: "Oui. Grilles de placement, règles de conformité DDA et modèles de devoir de conseil restent éditables par votre direction conformité.",
    en: "Yes. Placement grids, IDD compliance rules and advice templates stay editable by your compliance leadership.",
  },
  "logistique-transport": {
    fr: "Oui. Règles de routing, SLA transporteurs et procédures litige sont documentées dans votre TMS/WMS — vos dispatchers gardent l'arbitrage.",
    en: "Yes. Routing rules, carrier SLAs and dispute procedures are documented in your TMS/WMS — dispatchers keep arbitration.",
  },
  "retail-distribution": {
    fr: "Oui. Assortiments, politiques promo et règles de réappro sont gouvernés par vos category managers — l'agent propose, le métier tranche.",
    en: "Yes. Assortments, promo policies and replenishment rules are governed by your category managers — agents propose, business decides.",
  },
  "rh-recrutement": {
    fr: "Oui. Grilles de compétences, critères légaux et workflows de validation recruteur sont transférés ; aucune décision d'embauche automatisée.",
    en: "Yes. Competency grids, legal criteria and recruiter validation workflows transfer; no automated hiring decisions.",
  },
  "education-formation": {
    fr: "Oui. Référentiels pédagogiques, règles d'évaluation et chartes d'usage restent éditables par vos équipes pédagogiques.",
    en: "Yes. Curriculum frameworks, assessment rules and usage charters stay editable by your pedagogical teams.",
  },
  "energie-utilities": {
    fr: "Oui. Procédures OT/IT, règles d'escalade incident et politiques données consommation restent sous gouvernance de vos équipes sécurité et conformité.",
    en: "Yes. OT/IT procedures, incident escalation rules and consumption data policies stay under your security and compliance teams.",
  },
  "media-contenu": {
    fr: "Oui. Charte éditoriale, lignes de relecture et corpus autorisés restent chez la rédaction — l'agent draft, l'humain publie.",
    en: "Yes. Editorial charter, review lines and approved corpora stay with editors — agents draft, humans publish.",
  },
  "pharma-sciences-vie": {
    fr: "Oui. SOP GxP, trails d'audit et règles de signature électronique sont documentés ; la validation réglementaire reste interne.",
    en: "Yes. GxP SOPs, audit trails and e-signature rules are documented; regulatory validation stays internal.",
  },
  "hotel-tourisme": {
    fr: "Oui. Standards de service, scripts multilingues et règles d'escalade réception/restauration restent configurables par vos équipes.",
    en: "Yes. Service standards, multilingual scripts and front-of-house escalation rules stay configurable by your teams.",
  },
  "agriculture-agroalimentaire": {
    fr: "Oui. Procédures HACCP, circuits non-conformité et traçabilité lot sont versionnés sur site — le responsable qualité signe chaque clôture.",
    en: "Yes. HACCP procedures, NC workflows and lot traceability are versioned on-site — the quality lead signs every closure.",
  },
};

const FALLBACK = {
  fr: "Oui. Règles métier, documentation et compétences sont transférées à vos équipes dans votre périmètre — sans dépendance à une boîte noire externe.",
  en: "Yes. Business rules, documentation and skills transfer to your teams inside your perimeter — without dependency on an external black box.",
};

export function getAutonomyFaq(slug: string, lang: "fr" | "en") {
  const copy = ANSWERS[slug] ?? FALLBACK;
  return lang === "fr"
    ? {
        q: "Restons-nous autonomes après le déploiement ?",
        a: copy.fr,
      }
    : {
        q: "Do we remain autonomous after deployment?",
        a: copy.en,
      };
}
