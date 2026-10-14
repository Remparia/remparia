import type { Lang } from "@/lib/content";

/**
 * Plain-text GED copy for agent / Markdown views.
 * Mirrors the narrative of GedLandingPage without JSX titles.
 */
const COPY = {
  fr: {
    title: "Remparia GED — Retrouvez n’importe quel document en moins de 15 secondes.",
    hero: {
      eyebrow: "GED pour TPE et PME · Hébergée en France",
      titleBefore: "Retrouvez n’importe quel document",
      titleAccent: "en moins de 15 secondes.",
      body: "Remparia GED (Gestion Électronique des Documents) classe chaque document dès son dépôt, vérifie qu’il ne vous en manque aucun et le conserve le temps exigé par la loi. Et un agent IA répond à vos questions, sources à l’appui.",
      cta: "Tester sur mes documents",
      secondary: "Voir ce que ça change",
      note: "Plan de classement conforme aux règles françaises · Réponses sourcées · Vous gardez la main",
    },
    pillars: [
      { num: "01 / CONSERVER", text: "Gardé le temps exigé par la loi" },
      { num: "02 / COMPLÉTER", text: "Aucune pièce ne manque" },
      { num: "03 / CLASSER", text: "Classé et indexé tout seul" },
      { num: "04 / DEMANDER", text: "Un agent IA qui connaît vos documents" },
      { num: "05 / RETROUVER", text: "En 15 secondes" },
    ],
    conservation: {
      eyebrow: "01 / CONSERVATION",
      title: "Gardé le temps qu’il faut. Pas un jour de moins.",
      body: "Facture, bulletin de paie, contrat, attestation : chaque type de document porte sa durée de conservation. Remparia calcule la date de fin, vous prévient avant, et vous propose de détruire ce qui peut l’être. Rien n’est jeté par erreur, rien n’est gardé pour rien.",
      checks: [
        "Durée légale et durée recommandée pour chaque type de document",
        "Sort final clair : conserver, détruire ou trier",
        "Documents hébergés en France, sur notre propre infrastructure",
      ],
      stat: "53 %",
      statText:
        "des dirigeants de TPE-PME craignent la perte ou le piratage de leurs données.",
      statSource: "BAROMÈTRE FRANCE NUM 2026",
    },
    completude: {
      eyebrow: "02 / COMPLÉTUDE",
      title: "Sachez ce qui manque. Avant qu’on vous le demande.",
      body: "Kbis, attestation URSSAF, décennale, document unique, contrats de travail : Remparia connaît les documents qu’une entreprise française doit détenir. Il compare avec ce que vous avez déposé et vous signale les manques et les pièces expirées.",
      after:
        "Un contrôle, un appel d’offres, une cession ou une levée de fonds ? Votre dossier est déjà prêt.",
      items: [
        { name: "Extrait Kbis de moins de 3 mois", status: "Présent" },
        { name: "Attestation décennale 2026", status: "Présent" },
        { name: "Attestation de vigilance URSSAF", status: "Expirée le 30/09" },
        { name: "Document unique d’évaluation des risques", status: "Manquant" },
        { name: "Contrat d’assurance RC Pro", status: "Présent" },
      ],
    },
    classement: {
      eyebrow: "03 / CLASSEMENT ET INDEXATION",
      title: "Vous déposez. Le classement se fait seul.",
      body: "Glissez un fichier, un scan ou un mail. Remparia reconnaît le type de document, le range dans le bon dossier, lui donne un nom clair et en extrait les informations utiles : émetteur, montant, dates, échéance.",
      hint: "Quand il hésite, il vous demande au lieu de deviner.",
      stats: [
        ["78", "dossiers prêts à l’emploi, chacun avec son mode d’emploi"],
        ["298", "types de documents reconnus"],
        ["8", "registres tenus à jour : contrats, assurances, matériel…"],
      ],
    },
    agent: {
      eyebrow: "04 / AGENT IA",
      title: "Un agent qui connaît tous vos documents.",
      body: "Posez vos questions en français, comme à un collaborateur. L’agent cherche dans toute votre base documentaire, répond, et cite chaque document utilisé pour que vous puissiez vérifier.",
      checks: [
        "Chaque réponse renvoie à ses sources",
        "Il ne voit que ce que les droits de chaque utilisateur permettent",
        "Il ne fait rien d’engageant sans votre accord",
      ],
    },
    quinze: {
      eyebrow: "05 / RETROUVER",
      title: "Le temps de retrouver un document. Pas une matinée.",
      body: "Une recherche ou une question suffit, au bureau comme sur le téléphone. Vous obtenez le bon document, dans sa dernière version, avec le dossier où il est rangé.",
      beforeTitle: "AUJOURD’HUI",
      before: [
        "Fouiller l’armoire, le serveur, les mails et le Drive",
        "Appeler le comptable ou l’assistante",
        "Douter de la bonne version",
      ],
      afterTitle: "AVEC REMPARIA GED",
      after: [
        "Une recherche ou une question en français",
        "Le bon document, dans sa dernière version",
        "Sa source et son dossier, pour vérifier",
      ],
    },
    connectors: {
      eyebrow: "06 / LÀ OÙ VIVENT DÉJÀ VOS DOCUMENTS",
      title: "Se connecter sans tout migrer.",
      body: "Remparia GED peut s’appuyer sur vos outils existants pour récupérer, classer et rendre utiles les documents — emails, drives, ERP ou signatures.",
      note: "Les connexions se déploient progressivement, selon vos priorités et le cadre de sécurité défini avec vous.",
      tools: [
        "SharePoint",
        "OneDrive",
        "Outlook",
        "Google Drive",
        "Gmail",
        "Dropbox",
        "Box",
        "Sage",
        "Cegid",
        "SAP",
        "DocuSign",
        "Adobe Sign",
      ],
    },
    proof: {
      eyebrow: "07 / LE TERRAIN LE CONFIRME",
      title: "Vous n’êtes pas seuls. Le moment est maintenant.",
      body: "Sécurité des données, IA documentaire, facturation électronique : les priorités des TPE-PME rejoignent exactement ce que Remparia GED prépare avec vous.",
      source: "Source : Baromètre France Num 2026.",
      stats: [
        {
          value: "53 %",
          text: "des dirigeants de TPE-PME craignent la perte ou le piratage de leurs données.",
        },
        {
          value: "13 %",
          text: "des TPE-PME utilisent l’IA pour analyser ou classer des documents.",
        },
        {
          value: "39 %",
          text: "des TPE-PME placent la réforme de la facturation électronique parmi leurs priorités numériques pour 2026–2027.",
        },
      ],
    },
    trust: {
      eyebrow: "08 / CONFIANCE",
      title: "Une IA utile. Un cadre clair.",
      items: [
        {
          h: "Hébergé en France",
          p: "Sur notre propre infrastructure, sans dépendre d’un cloud étranger.",
        },
        {
          h: "Des réponses sourcées",
          p: "Chaque réponse cite le document d’origine. Rien n’est inventé.",
        },
        {
          h: "Des droits par personne",
          p: "Chacun ne voit que ce qui le concerne, par société et par dossier.",
        },
        {
          h: "Vous décidez",
          p: "Les classements incertains et les actions engageantes attendent votre validation.",
        },
      ],
    },
    cercle: {
      eyebrow: "Cercle fondateur · places limitées",
      title: "Testez-le sur vos propres documents.",
      body: "Nous ouvrons Remparia GED à un petit groupe de dirigeants de PME. Vous la testez sur vos vrais documents, vous nous aidez à la façonner, et vous gardez un tarif fondateur.",
      perks: [
        "3 mois de pilote offerts, avec mise en route accompagnée sur 50 à 100 de vos documents",
        "Tarif fondateur bloqué pendant 12 mois",
        "Un accès direct à l’équipe pour orienter le produit",
      ],
      cta: "Candidater en 2 minutes",
      note: "Un échange de 30 minutes, sans engagement.",
    },
    faq: {
      eyebrow: "09 / FAQ",
      title: "Les questions qui comptent.",
      more: "Une autre question ?",
      moreHref: "mailto:contact@remparia.com",
      items: [
        {
          q: "Faut-il tout migrer d’un coup ?",
          a: "Non. Vous commencez par les nouveaux documents et vous reprenez l’historique à votre rythme. Nous pouvons vous y aider.",
        },
        {
          q: "Où sont hébergés mes documents ?",
          a: "En France, sur notre propre infrastructure.",
        },
        {
          q: "Est-ce que ça remplace ma plateforme de facture électronique ?",
          a: "Non. Votre plateforme agréée envoie et reçoit les factures. Remparia les range et les conserve avec tous vos autres documents de gestion.",
        },
        {
          q: "Combien ça coûte ?",
          a: "Un abonnement par utilisateur et par mois, avec l’espace de stockage et des crédits IA inclus. Les membres du cercle fondateur bénéficient d’un tarif préférentiel.",
        },
      ],
    },
    closing: {
      title: "Commencez par vos documents. Imaginez la suite.",
      cta: "Rejoindre le cercle fondateur",
    },
  },
  en: {
    title:
      "Remparia DMS — Find any document in under 15 seconds.",
    hero: {
      eyebrow: "DMS for SMEs · Hosted in France",
      titleBefore: "Find any document",
      titleAccent: "in under 15 seconds.",
      body: "Remparia DMS (Document Management System) files every document as soon as it arrives, checks that nothing is missing, and keeps it for as long as the law requires. An AI agent answers your questions, with sources.",
      cta: "Try it on my documents",
      secondary: "See what changes",
      note: "French-compliant filing plan · Sourced answers · You stay in control",
    },
    pillars: [
      { num: "01 / RETAIN", text: "Kept for as long as the law requires" },
      { num: "02 / COMPLETE", text: "No missing documents" },
      { num: "03 / FILE", text: "Filed and indexed automatically" },
      { num: "04 / ASK", text: "An AI agent that knows your documents" },
      { num: "05 / FIND", text: "In 15 seconds" },
    ],
    conservation: {
      eyebrow: "01 / RETENTION",
      title: "Kept for as long as needed. Not a day less.",
      body: "Invoice, payslip, contract, certificate: every document type has its retention period. Remparia calculates the end date, warns you beforehand, and suggests destroying what can go. Nothing is discarded by mistake, nothing is kept for nothing.",
      checks: [
        "Legal and recommended retention for every document type",
        "Clear final disposition: keep, destroy or sort",
        "Documents hosted in France, on our own infrastructure",
      ],
      stat: "53 %",
      statText:
        "of small-business leaders fear losing their data or seeing it hacked.",
      statSource: "FRANCE NUM 2026 BAROMETER",
    },
    completude: {
      eyebrow: "02 / COMPLETENESS",
      title: "Know what’s missing. Before anyone asks.",
      body: "Company extract, social-security certificate, ten-year insurance, risk assessment, employment contracts: Remparia knows what a French company must hold. It compares that with what you’ve uploaded and flags gaps and expired files.",
      after:
        "An audit, a tender, a sale or a fundraising round? Your file is already ready.",
      items: [
        {
          name: "Company extract less than 3 months old",
          status: "Present",
        },
        { name: "Ten-year insurance 2026", status: "Present" },
        {
          name: "URSSAF vigilance certificate",
          status: "Expired on 30/09",
        },
        {
          name: "Workplace risk assessment document",
          status: "Missing",
        },
        {
          name: "Professional liability insurance contract",
          status: "Present",
        },
      ],
    },
    classement: {
      eyebrow: "03 / FILING AND INDEXING",
      title: "You upload. Filing happens on its own.",
      body: "Drop a file, a scan or an email. Remparia recognizes the document type, puts it in the right folder, gives it a clear name and extracts useful fields: issuer, amount, dates, deadline.",
      hint: "When it’s unsure, it asks you instead of guessing.",
      stats: [
        ["78", "ready-to-use folders, each with its own playbook"],
        ["298", "recognized document types"],
        [
          "8",
          "registers kept up to date: contracts, insurance, assets…",
        ],
      ],
    },
    agent: {
      eyebrow: "04 / AI AGENT",
      title: "An agent that knows all your documents.",
      body: "Ask questions in plain language, as you would a colleague. The agent searches your whole document base, answers, and cites every document used so you can verify.",
      checks: [
        "Every answer links back to its sources",
        "It only sees what each user’s permissions allow",
        "It never takes binding action without your approval",
      ],
    },
    quinze: {
      eyebrow: "05 / FIND",
      title: "The time to find a document. Not a morning.",
      body: "A search or a question is enough, at the desk or on the phone. You get the right document, in its latest version, with the folder where it lives.",
      beforeTitle: "TODAY",
      before: [
        "Search cabinets, the server, emails and Drive",
        "Call accounting or the assistant",
        "Wonder if you have the right version",
      ],
      afterTitle: "WITH REMPARIA DMS",
      after: [
        "A search or a question in plain language",
        "The right document, in its latest version",
        "Its source and folder, so you can verify",
      ],
    },
    connectors: {
      eyebrow: "06 / WHERE YOUR DOCUMENTS ALREADY LIVE",
      title: "Connect without a full migration.",
      body: "Remparia DMS can connect to your existing tools to retrieve, organize and make documents useful—email, drives, ERPs or e-signatures.",
      note: "Connections roll out progressively, according to your priorities and the security framework agreed with you.",
      tools: [
        "SharePoint",
        "OneDrive",
        "Outlook",
        "Google Drive",
        "Gmail",
        "Dropbox",
        "Box",
        "Sage",
        "Cegid",
        "SAP",
        "DocuSign",
        "Adobe Sign",
      ],
    },
    proof: {
      eyebrow: "07 / THE FIELD CONFIRMS IT",
      title: "You’re not alone. The moment is now.",
      body: "Data security, document AI, e-invoicing: small-business priorities match exactly what Remparia DMS is building with you.",
      source: "Source: France Num 2026 Barometer.",
      stats: [
        {
          value: "53 %",
          text: "of small-business leaders fear losing their data or seeing it hacked.",
        },
        {
          value: "13 %",
          text: "of small businesses use AI to analyze or classify documents.",
        },
        {
          value: "39 %",
          text: "of small businesses rank e-invoicing reform among their digital priorities for 2026–2027.",
        },
      ],
    },
    trust: {
      eyebrow: "08 / TRUST",
      title: "Useful AI. A clear framework.",
      items: [
        {
          h: "Hosted in France",
          p: "On our own infrastructure, without depending on a foreign cloud.",
        },
        {
          h: "Sourced answers",
          p: "Every answer cites the original document. Nothing is invented.",
        },
        {
          h: "Permissions per person",
          p: "Everyone only sees what concerns them, by company and by folder.",
        },
        {
          h: "You decide",
          p: "Uncertain filings and binding actions wait for your approval.",
        },
      ],
    },
    cercle: {
      eyebrow: "Founding circle · limited places",
      title: "Try it on your own documents.",
      body: "We are opening Remparia DMS to a small group of SME leaders. You try it on your real documents, help us shape it, and keep founder pricing.",
      perks: [
        "3 months of pilot free, with guided setup on 50 to 100 of your documents",
        "Founder pricing locked for 12 months",
        "Direct access to the team to steer the product",
      ],
      cta: "Apply in 2 minutes",
      note: "A 30-minute conversation, with no commitment.",
    },
    faq: {
      eyebrow: "09 / FAQ",
      title: "The questions that matter.",
      more: "Another question?",
      moreHref: "mailto:contact@remparia.com",
      items: [
        {
          q: "Do I have to migrate everything at once?",
          a: "No. You start with new documents and catch up on history at your own pace. We can help.",
        },
        {
          q: "Where are my documents hosted?",
          a: "In France, on our own infrastructure.",
        },
        {
          q: "Does this replace my e-invoicing platform?",
          a: "No. Your accredited platform sends and receives invoices. Remparia files and retains them with all your other management documents.",
        },
        {
          q: "How much does it cost?",
          a: "A per-user monthly subscription, with storage and AI credits included. Founding-circle members get preferential pricing.",
        },
      ],
    },
    closing: {
      title: "Start with your documents. Imagine what comes next.",
      cta: "Join the founding circle",
    },
  },
} as const;

export function gedPage(lang: Lang) {
  return COPY[lang];
}
