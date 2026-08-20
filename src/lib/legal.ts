import type { Lang } from "@/lib/content";
import { LEGAL_ENTITY } from "@/lib/legal-entity";
import { getSiteUrl } from "@/lib/seo";

export { LEGAL_ENTITY, isLegalPlaceholder } from "@/lib/legal-entity";

type LegalSection = { title: string; paragraphs: string[] };

type LegalPageCopy = {
  eyebrow: string;
  title: string;
  sub: string;
  sections: LegalSection[];
};

export type CookieTableRow = {
  name: string;
  purpose: string;
  duration: string;
  type: string;
  provider: string;
  basis: string;
};

export type CookieTableCopy = {
  title: string;
  intro: string;
  headers: {
    name: string;
    purpose: string;
    duration: string;
    type: string;
    provider: string;
    basis: string;
  };
  rows: CookieTableRow[];
};

export type DataTableCopy = {
  title: string;
  intro: string;
  items: { label: string; detail: string }[];
};

/** Inventaire cookies / stockage — page Cookies */
export const COOKIE_TABLE: Record<Lang, CookieTableCopy> = {
  fr: {
    title: "Inventaire des cookies et stockages",
    intro:
      "Liste des stockages utilisés sur ce site. Vercel Web Analytics ne dépose pas de cookie : la mesure d’audience ne démarre qu’après votre acceptation via le bandeau.",
    headers: {
      name: "Nom",
      purpose: "Finalité",
      duration: "Durée",
      type: "Type",
      provider: "Éditeur",
      basis: "Base",
    },
    rows: [
      {
        name: "remparia-cookie-consent",
        purpose: "Mémoriser votre choix Accepter / Refuser pour la mesure d’audience",
        duration: "Jusqu’à suppression (localStorage)",
        type: "localStorage",
        provider: "Remparia",
        basis: "Strictement nécessaire",
      },
    ],
  },
  en: {
    title: "Cookie and storage inventory",
    intro:
      "Storage used on this site. Vercel Web Analytics does not set cookies: audience measurement starts only after you accept via the banner.",
    headers: {
      name: "Name",
      purpose: "Purpose",
      duration: "Duration",
      type: "Type",
      provider: "Provider",
      basis: "Legal basis",
    },
    rows: [
      {
        name: "remparia-cookie-consent",
        purpose: "Remember your Accept / Refuse choice for audience measurement",
        duration: "Until cleared (localStorage)",
        type: "localStorage",
        provider: "Remparia",
        basis: "Strictly necessary",
      },
    ],
  },
};

/** Données collectées par Vercel Web Analytics (si accepté) */
export const ANALYTICS_DATA: Record<Lang, DataTableCopy> = {
  fr: {
    title: "Données collectées par Vercel Web Analytics (si accepté)",
    intro:
      "Service cookieless hébergé par Vercel. Aucun cookie n’est déposé ; les événements suivants peuvent être enregistrés après consentement :",
    items: [
      {
        label: "Pages vues",
        detail: "URL, titre de page, horodatage",
      },
      {
        label: "Navigation",
        detail: "Referrer / provenance, type de navigation",
      },
      {
        label: "Technique",
        detail: "Type d’appareil, navigateur, pays (approximatif), langue",
      },
      {
        label: "Adresse IP",
        detail:
          "Traitée par Vercel de manière anonymisée pour la mesure d’audience (voir politique Vercel)",
      },
      {
        label: "Identifiant visiteur",
        detail: "Aucun cookie ; agrégats anonymes côté Vercel",
      },
    ],
  },
  en: {
    title: "Data collected by Vercel Web Analytics (if accepted)",
    intro:
      "Cookieless service hosted by Vercel. No cookies are set; after consent the following may be recorded:",
    items: [
      {
        label: "Page views",
        detail: "URL, page title, timestamp",
      },
      {
        label: "Navigation",
        detail: "Referrer / source, navigation type",
      },
      {
        label: "Technical",
        detail: "Device type, browser, country (approximate), language",
      },
      {
        label: "IP address",
        detail:
          "Processed by Vercel in anonymized form for audience measurement (see Vercel policy)",
      },
      {
        label: "Visitor ID",
        detail: "No cookie; anonymized aggregates on Vercel’s side",
      },
    ],
  },
};

export const LEGAL_PAGES = {
  mentions: {
    fr: {
      eyebrow: "LÉGAL",
      title: "Mentions légales",
      sub: "Informations relatives à l’éditeur du site et à l’hébergement.",
      sections: [
        {
          title: "Éditeur du site",
          paragraphs: [
            `Le site ${getSiteUrl()} est édité par ${LEGAL_ENTITY.name}, ${LEGAL_ENTITY.legalForm}, au capital de ${LEGAL_ENTITY.shareCapital}.`,
            `Siège social : ${LEGAL_ENTITY.address}, ${LEGAL_ENTITY.country}.`,
            `SIRET : ${LEGAL_ENTITY.siret} — ${LEGAL_ENTITY.rcs}.`,
            `N° TVA : ${LEGAL_ENTITY.vat}.`,
            `Contact : ${LEGAL_ENTITY.email}.`,
          ],
        },
        {
          title: "Directeur de la publication",
          paragraphs: [
            `Directeur de la publication : ${LEGAL_ENTITY.publicationDirector}.`,
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            `Le site est hébergé par ${LEGAL_ENTITY.host.name}, ${LEGAL_ENTITY.host.address}.`,
            `Site de l’hébergeur : ${LEGAL_ENTITY.host.website}.`,
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "L’ensemble des contenus présents sur ce site (textes, visuels, marques, logos, structure) est protégé par le droit de la propriété intellectuelle.",
            "Toute reproduction, représentation ou exploitation non autorisée est interdite, sauf accord écrit préalable de Remparia.",
          ],
        },
        {
          title: "Limitation de responsabilité",
          paragraphs: [
            "Remparia s’efforce d’assurer l’exactitude des informations diffusées. Des erreurs ou omissions peuvent toutefois survenir ; les contenus sont fournis à titre informatif.",
            "L’utilisation du site se fait sous la responsabilité de l’utilisateur. Remparia ne saurait être tenue responsable des dommages liés à l’accès ou à l’usage du site.",
          ],
        },
      ],
    },
    en: {
      eyebrow: "LEGAL",
      title: "Legal notice",
      sub: "Information about the site publisher and hosting.",
      sections: [
        {
          title: "Publisher",
          paragraphs: [
            `The website ${getSiteUrl()} is published by ${LEGAL_ENTITY.name}, ${LEGAL_ENTITY.legalForm}, with share capital of ${LEGAL_ENTITY.shareCapital}.`,
            `Registered office: ${LEGAL_ENTITY.address}, ${LEGAL_ENTITY.country}.`,
            `SIRET: ${LEGAL_ENTITY.siret} — ${LEGAL_ENTITY.rcs}.`,
            `VAT number: ${LEGAL_ENTITY.vat}.`,
            `Contact: ${LEGAL_ENTITY.email}.`,
          ],
        },
        {
          title: "Publication director",
          paragraphs: [
            `Publication director: ${LEGAL_ENTITY.publicationDirector}.`,
          ],
        },
        {
          title: "Hosting",
          paragraphs: [
            `The site is hosted by ${LEGAL_ENTITY.host.name}, ${LEGAL_ENTITY.host.address}.`,
            `Host website: ${LEGAL_ENTITY.host.website}.`,
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "All content on this site (text, visuals, trademarks, logos, structure) is protected by intellectual property law.",
            "Any unauthorized reproduction, representation or exploitation is prohibited without prior written consent from Remparia.",
          ],
        },
        {
          title: "Limitation of liability",
          paragraphs: [
            "Remparia strives to keep information accurate. Errors or omissions may occur; content is provided for information only.",
            "Use of the site is at the user’s own risk. Remparia shall not be liable for damages arising from access to or use of the site.",
          ],
        },
      ],
    },
  },
  confidentialite: {
    fr: {
      eyebrow: "LÉGAL",
      title: "Politique de confidentialité",
      sub: "Comment Remparia traite vos données personnelles.",
      sections: [
        {
          title: "Responsable du traitement",
          paragraphs: [
            `${LEGAL_ENTITY.name} est responsable du traitement des données collectées via le site ${getSiteUrl()}.`,
            `Contact : ${LEGAL_ENTITY.email}.`,
          ],
        },
        {
          title: "Données collectées",
          paragraphs: [
            "Via le formulaire de contact : nom, société (optionnel), adresse e-mail, message.",
            "Via le parcours Carrières : identité, réponses aux questions, vidéo de présentation enregistrée sur la plateforme (stockage objet), éventuellement LinkedIn.",
            "Données techniques de navigation : logs serveur.",
            "Si vous acceptez la mesure d’audience : statistiques Vercel Web Analytics (pages vues, parcours, données techniques — détail sur la page Cookies).",
          ],
        },
        {
          title: "Finalités et bases légales",
          paragraphs: [
            "Répondre à vos demandes de contact (intérêt légitime / mesures précontractuelles).",
            "Traiter les candidatures spontanées reçues via /carrieres (mesures précontractuelles / intérêt légitime de recrutement).",
            "Assurer la sécurité et la performance du site (intérêt légitime).",
            "Mesurer l’audience via Vercel Web Analytics uniquement après consentement (bandeau cookies).",
          ],
        },
        {
          title: "Destinataires et sous-traitants",
          paragraphs: [
            "Les données de contact sont destinées à Remparia et, le cas échéant, à notre prestataire d’envoi d’e-mails (Resend) pour acheminer votre message.",
            "L’hébergement et la mesure d’audience sont assurés par Vercel (Web Analytics, sans cookie publicitaire). Aucune revente de données à des tiers à des fins publicitaires.",
          ],
        },
        {
          title: "Durée de conservation",
          paragraphs: [
            "Messages de contact : conservés le temps nécessaire au traitement de la demande, puis archivés ou supprimés selon nos besoins opérationnels (maximum 24 mois sauf obligation légale).",
            "Logs / métriques : selon la politique de conservation de l’hébergeur.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité le cas échéant.",
            `Pour exercer vos droits : ${LEGAL_ENTITY.email}. Vous pouvez également saisir la CNIL (www.cnil.fr).`,
          ],
        },
      ],
    },
    en: {
      eyebrow: "LEGAL",
      title: "Privacy policy",
      sub: "How Remparia processes your personal data.",
      sections: [
        {
          title: "Data controller",
          paragraphs: [
            `${LEGAL_ENTITY.name} is the controller for personal data collected via ${getSiteUrl()}.`,
            `Contact: ${LEGAL_ENTITY.email}.`,
          ],
        },
        {
          title: "Data we collect",
          paragraphs: [
            "Via the contact form: name, company (optional), email address, message.",
            "Via the Careers journey: identity, written answers, intro video recorded on the platform (object storage), optionally LinkedIn.",
            "Technical browsing data: server logs.",
            "If you accept audience measurement: Vercel Web Analytics (page views, journeys, technical data — see the Cookies page).",
          ],
        },
        {
          title: "Purposes and legal bases",
          paragraphs: [
            "Responding to contact requests (legitimate interest / pre-contractual steps).",
            "Processing spontaneous applications via /carrieres (pre-contractual steps / legitimate interest in recruitment).",
            "Ensuring site security and performance (legitimate interest).",
            "Audience measurement via Vercel Web Analytics only after consent (cookie banner).",
          ],
        },
        {
          title: "Recipients and processors",
          paragraphs: [
            "Contact data is processed by Remparia and, where applicable, our email delivery provider (Resend) to route your message.",
            "The site is hosted by Vercel. Audience measurement uses Vercel Web Analytics (no advertising cookies). We do not sell data to third parties for advertising.",
          ],
        },
        {
          title: "Retention",
          paragraphs: [
            "Contact messages: kept as long as needed to handle the request, then archived or deleted per operational needs (max 24 months unless legally required).",
            "Logs / metrics: per the host’s retention policy.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "Under the GDPR you may request access, rectification, erasure, restriction, objection and portability where applicable.",
            `To exercise your rights: ${LEGAL_ENTITY.email}. You may also contact your local supervisory authority.`,
          ],
        },
      ],
    },
  },
  cookies: {
    fr: {
      eyebrow: "LÉGAL",
      title: "Cookies",
      sub: "Ce que le site utilise — et ce qu’il n’utilise pas.",
      sections: [
        {
          title: "Principe",
          paragraphs: [
            "Remparia limite les cookies et traceurs au strict nécessaire au fonctionnement et à la mesure d’audience technique.",
            "Nous n’utilisons pas de cookies publicitaires ni de trackers marketing tiers.",
          ],
        },
        {
          title: "Cookies et traceurs essentiels",
          paragraphs: [
            "Cookies ou stockage techniques liés au fonctionnement du site (session, préférences de base, sécurité).",
            "Ces éléments sont nécessaires au service et ne requièrent pas de consentement au sens des recommandations CNIL pour les strictement nécessaires.",
          ],
        },
        {
          title: "Mesure d’audience (Vercel Web Analytics)",
          paragraphs: [
            "Nous utilisons Vercel Web Analytics pour des statistiques de fréquentation (pages vues, parcours, provenances).",
            "Ce service ne dépose pas de cookie sur votre terminal : la mesure est activée uniquement si vous acceptez via le bandeau.",
            "Ces données servent uniquement à améliorer le site ; elles ne sont pas utilisées pour du ciblage publicitaire.",
          ],
        },
        {
          title: "Gérer vos préférences",
          paragraphs: [
            "Un bandeau vous permet d’accepter ou de refuser la mesure d’audience Vercel Web Analytics. Votre choix est mémorisé localement (localStorage) et peut être modifié via « Gérer les cookies ».",
            `Pour toute question : ${LEGAL_ENTITY.email}. Voir aussi notre politique de confidentialité.`,
          ],
        },
      ],
    },
    en: {
      eyebrow: "LEGAL",
      title: "Cookies",
      sub: "What this site uses — and what it does not.",
      sections: [
        {
          title: "Principle",
          paragraphs: [
            "Remparia limits cookies and trackers to what is needed for operation and audience measurement.",
            "We do not use advertising cookies or third-party marketing trackers.",
          ],
        },
        {
          title: "Essential cookies and storage",
          paragraphs: [
            "Technical cookies or storage required for the site to work (session, basic preferences, security).",
            "These are necessary for the service.",
          ],
        },
        {
          title: "Audience measurement (Vercel Web Analytics)",
          paragraphs: [
            "We use Vercel Web Analytics for traffic statistics (page views, journeys, sources).",
            "This service does not set cookies on your device: measurement runs only if you accept via the banner.",
            "Data is used only to improve the site; it is not used for advertising targeting.",
          ],
        },
        {
          title: "Managing preferences",
          paragraphs: [
            "A banner lets you accept or refuse Vercel Web Analytics. Your choice is stored locally (localStorage) and can be changed via “Cookie settings”.",
            `Questions: ${LEGAL_ENTITY.email}. See also our privacy policy.`,
          ],
        },
      ],
    },
  },
} as const satisfies Record<string, Record<Lang, LegalPageCopy>>;

export type LegalPageKey = keyof typeof LEGAL_PAGES;

export function getLegalPage(key: LegalPageKey, lang: Lang): LegalPageCopy {
  return LEGAL_PAGES[key][lang];
}
