import type { Lang } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/contact-email";

export type CareerRoleId =
  | "agent-engineer"
  | "platform-engineer"
  | "ai-consultant"
  | "delivery-ai"
  | "compliance-data"
  | "business-developer"
  | "spontaneous";

export const CAREERS = {
  fr: {
    eyebrow: "CARRIÈRES",
    title: "Rejoindre Remparia",
    sub: "Agents Agents pour métiers spécialisés, supervision humaine et données sous contrôle. Nous constituons un réseau d'indépendants mobilisables selon les déploiements.",
    heroMeta: ["≈ 30 min", "3 étapes", "Écrit + vidéo"],
    heroCta: "Lancer le parcours",
    heroSecondary: "Voir les profils",
    rolesTag: "OUVERTS",
    rolesTitle: "Profils que l’on cherche",
    rolesSub:
      "Des indépendants capables de sonder, gouverner, construire et transférer — pas des titres fantaisie.",
    roles: [
      {
        id: "agent-engineer" as const,
        tag: "ENGINEERING",
        title: "Agent Engineer",
        desc: "Chez le client : agents métier, outils, orchestration, intégrations — jusqu’à la prod quotidienne.",
      },
      {
        id: "platform-engineer" as const,
        tag: "INFRA",
        title: "Platform / Infra Engineer",
        desc: "Chez le client : APIs, données, hébergement France, traçabilité et fiabilité.",
      },
      {
        id: "ai-consultant" as const,
        tag: "MÉTIER",
        title: "Consultant agents métier",
        desc: "Chez le client : process, ateliers, change — faire passer SIGNAL du cadrage au terrain.",
      },
      {
        id: "delivery-ai" as const,
        tag: "DELIVERY",
        title: "Delivery / Product agents",
        desc: "Chez le client : roadmap, ROI, priorisation, passage POC → production.",
      },
      {
        id: "compliance-data" as const,
        tag: "CONFORMITÉ",
        title: "Conformité & données",
        desc: "Chez le client : cadre RGPD, human-in-the-loop, souveraineté — dès le design.",
      },
      {
        id: "business-developer" as const,
        tag: "GROWTH",
        title: "Business Developer B2B",
        desc: "Avec Remparia : ouvrir des conversations sérieuses avec PME et métiers réglementés.",
      },
    ],
    philTag: "PHILO",
    philTitle: "Comment on travaille",
    philSub:
      "Quand un déploiement requiert ton expertise, Remparia cadre l'engagement et tu interviens en indépendant — au TJ ou à l'heure.",
    phil: [
      {
        tag: "LIVRER",
        title: "Prod > démo",
        desc: "Jusqu’à la production quotidienne chez le client — pas jusqu’au POC qui impressionne.",
      },
      {
        tag: "CADRER",
        title: "Ownership réel",
        desc: "ROI, conformité et ownership métier avant la stack. Tu cadres, tu livres, tu assumes.",
      },
      {
        tag: "RESPECTER",
        title: "Humain décide",
        desc: "Chez le client : l’humain garde la décision — l’agent porte la charge. Pas de remplacement déguisé.",
      },
      {
        tag: "COLLABORER",
        title: "Freelance · TJ ou heure",
        desc: "Tu rejoins un vivier d'experts mobilisé selon les besoins. Remparia te mandate ; tu factures au jour ou à l'heure.",
      },
    ],
    processTitle: "Le parcours candidature (≈ 30 min)",
    processSub:
      "Candidature spontanée structurée. Pas de CV envoyé dans le vide : on lit des réponses et une vidéo.",
    steps: [
      {
        n: "01",
        title: "Identité & profil",
        time: "≈ 3 min",
        desc: "Qui tu es, et quel rôle te correspond le mieux.",
      },
      {
        n: "02",
        title: "Questions écrites",
        time: "≈ 17 min",
        desc: "Réponses courtes et concrètes — on veut du signal, pas du blabla.",
      },
      {
        n: "03",
        title: "Vidéo de présentation",
        time: "≈ 10 min",
        desc: "Enregistre-toi directement sur la plateforme (caméra + micro).",
      },
    ],
    videoTitle: "Enregistre ta présentation (≈ 10 min)",
    videoRules: [
      "Durée cible : ~10 minutes (maximum 12).",
      "Présente-toi, ton parcours, et pourquoi Remparia.",
      "Raconte un projet concret (problème → approche → résultat).",
      "Dis comment tu vois souveraineté, conformité et production.",
      "L’enregistrement se fait ici : caméra + micro, puis envoi sécurisé.",
    ],
    videoStart: "Démarrer l’enregistrement",
    videoStop: "Arrêter",
    videoRetake: "Reprendre",
    videoUpload: "Envoyer la vidéo",
    videoUploading: "Envoi de la vidéo…",
    videoReady: "Vidéo prête",
    videoNeedPerm:
      "Autorise caméra et micro dans le navigateur pour continuer.",
    videoDenied:
      "Caméra / micro bloqués pour ce site. Ouvre le cadenas à gauche de l’URL → autorise Caméra et Microphone, puis recharge la page.",
    videoInsecure:
      "Le navigateur n’autorise caméra/micro que sur HTTPS ou localhost. Ouvre le site en https:// ou via localhost.",
    videoNoDevice:
      "Aucune caméra ou micro détecté. Branche un périphérique (ou ferme une autre app qui l’utilise) puis réessaie.",
    videoUnavailable:
      "Caméra / micro indisponibles (déjà utilisés par une autre app, ou bloqués par Windows). Ferme Zoom/Teams et vérifie Confidentialité → Caméra / Microphone.",
    videoTooShort: "Enregistre au moins 30 secondes.",
    videoTooLong: "Maximum 12 minutes — arrête et renvoie une version plus courte.",
    videoNoBlob:
      "L’upload vidéo n’est pas configuré côté serveur (BLOB_READ_WRITE_TOKEN).",
    videoError: "Enregistrement ou envoi impossible. Réessaie.",
    applyTitle: "Candidature spontanée",
    applySub: "Parcours isolé · 30 minutes · 3 écrans",
    applyCta: "Lancer le parcours candidature",
    applyRoleCta: "Postuler à ce profil",
    applyBack: "Retour aux carrières",
    applyExit: "Quitter",
    applyGate:
      "Le parcours s’ouvre sans menu ni footer. Le chrono de 30 min démarre quand tu valides tes informations.",
    fields: {
      name: "Nom complet",
      email: "Email",
      linkedin: "LinkedIn (optionnel)",
      city: "Ville / fuseau",
      role: "Profil visé",
      roleSpontaneous: "Candidature ouverte / autre",
      videoUrl: "Lien vidéo (secours)",
      videoHint: "Enregistrement intégré ci-dessous.",
      submit: "Envoyer ma candidature",
      sending: "Envoi…",
      next: "Continuer",
      back: "Retour",
      stepOf: "Étape",
      formIncomplete:
        "Merci de remplir tous les champs obligatoires avant de continuer.",
    },
    questions: [
      {
        id: "why",
        label: "Pourquoi Remparia — et pourquoi maintenant ?",
        hint: "2–3 paragraphes max. Sois précis.",
        min: 80,
      },
      {
        id: "craft",
        label:
          "Décris un agent ou un système agent que tu as fait passer en production (ou presque).",
        hint: "Contexte, stack, blocages, ce que tu ferais différemment.",
        min: 120,
      },
      {
        id: "sovereign",
        label:
          "Que signifie pour toi « infrastructure souveraine » dans un déploiement client réel ?",
        hint: "Données, hébergement, modèles, responsabilités.",
        min: 80,
      },
      {
        id: "signal",
        label:
          "Un client a un POC qui « marche en démo » mais n’est pas en prod. Que fais-tu les 30 premiers jours ?",
        hint: "Méthode, priorités, interlocuteurs.",
        min: 100,
      },
      {
        id: "fit",
        label: "Qu’est-ce que tu refuses de faire dans une mission agents ?",
        hint: "Lignes rouges pro / éthique / qualité.",
        min: 60,
      },
    ],
    timerLabel: "Temps indicatif restant",
    timerNote: "Chronomètre indicatif (30 min). Tu peux finir plus tôt ou un peu après.",
    success:
      "Candidature reçue. On lit chaque dossier — réponse sous quelques jours si on avance.",
    error: `Envoi impossible. Réessaie ou écris-nous à ${CONTACT_EMAIL}.`,
    errorConfig:
      `Le formulaire n’est pas encore configuré côté serveur. Envoie ta candidature à ${CONTACT_EMAIL}.`,
    errorRate: "Trop de tentatives. Réessaie dans une minute.",
    privacyNote: "Tes réponses et le lien vidéo sont traités pour le recrutement uniquement.",
  },
  en: {
    eyebrow: "CAREERS",
    title: "Join Remparia",
    sub: "Agents for specialized professions, human supervision and data under control. We are building a network of independents available for deployments.",
    heroMeta: ["≈ 30 min", "3 steps", "Written + video"],
    heroCta: "Start the journey",
    heroSecondary: "See open roles",
    rolesTag: "OPEN",
    rolesTitle: "Profiles we’re looking for",
    rolesSub:
      "Independents who can study, govern, build and transfer — no vanity titles.",
    roles: [
      {
        id: "agent-engineer" as const,
        tag: "ENGINEERING",
        title: "Agent Engineer",
        desc: "At the client: business agents, tools, orchestration, integrations — through to daily production.",
      },
      {
        id: "platform-engineer" as const,
        tag: "INFRA",
        title: "Platform / Infra Engineer",
        desc: "At the client: APIs, data, France hosting, traceability and reliability.",
      },
      {
        id: "ai-consultant" as const,
        tag: "BUSINESS",
        title: "Business agent consultant",
        desc: "At the client: processes, workshops, change — take SIGNAL from scoping to the field.",
      },
      {
        id: "delivery-ai" as const,
        tag: "DELIVERY",
        title: "Delivery / Product agents",
        desc: "At the client: roadmap, ROI, prioritization, POC → production.",
      },
      {
        id: "compliance-data" as const,
        tag: "COMPLIANCE",
        title: "Compliance & data",
        desc: "At the client: GDPR frame, human-in-the-loop, sovereignty — from design time.",
      },
      {
        id: "business-developer" as const,
        tag: "GROWTH",
        title: "B2B Business Developer",
        desc: "With Remparia: open serious conversations with SMBs and regulated professions.",
      },
    ],
    philTag: "ETHOS",
    philTitle: "How we work",
    philSub:
      "When a deployment needs your expertise, Remparia frames the engagement and you contribute as an independent — day rate or hourly.",
    phil: [
      {
        tag: "SHIP",
        title: "Prod > demo",
        desc: "Through to daily production at the client — not the POC that dazzles.",
      },
      {
        tag: "OWN",
        title: "Real ownership",
        desc: "ROI, compliance and business ownership before the stack. You frame, ship, own.",
      },
      {
        tag: "RESPECT",
        title: "Humans decide",
        desc: "At the client: humans keep the decision — agents carry the load. No disguised replacement.",
      },
      {
        tag: "COLLABORATE",
        title: "Freelance · day or hour",
        desc: "You join an expert pool activated as needed. Remparia mandates you; you bill by the day or by the hour.",
      },
    ],
    processTitle: "Application journey (≈ 30 min)",
    processSub:
      "Structured spontaneous application. No CV into the void: we read answers and a video.",
    steps: [
      {
        n: "01",
        title: "Identity & role",
        time: "≈ 3 min",
        desc: "Who you are and which role fits best.",
      },
      {
        n: "02",
        title: "Written questions",
        time: "≈ 17 min",
        desc: "Short, concrete answers — signal, not fluff.",
      },
      {
        n: "03",
        title: "Intro video",
        time: "≈ 10 min",
        desc: "Record yourself directly on the platform (camera + mic).",
      },
    ],
    videoTitle: "Record your intro (≈ 10 min)",
    videoRules: [
      "Target length: ~10 minutes (max 12).",
      "Introduce yourself, your path, and why Remparia.",
      "Walk through one concrete project (problem → approach → outcome).",
      "Share how you think about sovereignty, compliance and production.",
      "Recording happens here: camera + mic, then secure upload.",
    ],
    videoStart: "Start recording",
    videoStop: "Stop",
    videoRetake: "Retake",
    videoUpload: "Upload video",
    videoUploading: "Uploading video…",
    videoReady: "Video ready",
    videoNeedPerm: "Allow camera and microphone in your browser to continue.",
    videoDenied:
      "Camera / mic blocked for this site. Open the lock icon left of the URL → allow Camera and Microphone, then reload.",
    videoInsecure:
      "Browsers only allow camera/mic on HTTPS or localhost. Open the site via https:// or localhost.",
    videoNoDevice:
      "No camera or microphone detected. Plug one in (or close another app using it), then try again.",
    videoUnavailable:
      "Camera / mic unavailable (in use by another app, or blocked by the OS). Close Zoom/Teams and check Privacy → Camera / Microphone.",
    videoTooShort: "Record at least 30 seconds.",
    videoTooLong: "Max 12 minutes — stop and send a shorter take.",
    videoNoBlob:
      "Video upload isn’t configured on the server (BLOB_READ_WRITE_TOKEN).",
    videoError: "Couldn’t record or upload. Try again.",
    applyTitle: "Spontaneous application",
    applySub: "Isolated journey · 30 minutes · 3 screens",
    applyCta: "Start the application journey",
    applyRoleCta: "Apply to this role",
    applyBack: "Back to careers",
    applyExit: "Exit",
    applyGate:
      "The journey opens without menu or footer. The 30-min timer starts when you confirm your details.",
    fields: {
      name: "Full name",
      email: "Email",
      linkedin: "LinkedIn (optional)",
      city: "City / timezone",
      role: "Target profile",
      roleSpontaneous: "Open / other",
      videoUrl: "Video link (fallback)",
      videoHint: "Built-in recording below.",
      submit: "Submit application",
      sending: "Sending…",
      next: "Continue",
      back: "Back",
      stepOf: "Step",
      formIncomplete: "Please complete all required fields before continuing.",
    },
    questions: [
      {
        id: "why",
        label: "Why Remparia — and why now?",
        hint: "2–3 short paragraphs max. Be specific.",
        min: 80,
      },
      {
        id: "craft",
        label:
          "Describe an agent or agent system you took (or nearly took) to production.",
        hint: "Context, stack, blockers, what you’d do differently.",
        min: 120,
      },
      {
        id: "sovereign",
        label:
          "What does “operational sovereignty” mean to you in a real client deployment?",
        hint: "Data, hosting, models, accountability.",
        min: 80,
      },
      {
        id: "signal",
        label:
          "A client has a POC that “works in demos” but isn’t in prod. What do you do in the first 30 days?",
        hint: "Method, priorities, stakeholders.",
        min: 100,
      },
      {
        id: "fit",
        label: "What do you refuse to do on an agent engagement?",
        hint: "Professional / ethics / quality red lines.",
        min: 60,
      },
    ],
    timerLabel: "Indicative time left",
    timerNote: "30-minute soft timer. Finish earlier or slightly later if needed.",
    success:
      "Application received. We read every file — you’ll hear back within a few days if we move forward.",
    error: `Couldn’t send. Try again or email ${CONTACT_EMAIL}.`,
    errorConfig:
      `The form isn’t configured on the server yet. Please email ${CONTACT_EMAIL}.`,
    errorRate: "Too many attempts. Try again in a minute.",
    privacyNote: "Your answers and video link are processed for recruitment only.",
  },
} as const satisfies Record<Lang, unknown>;

export function getCareers(lang: Lang) {
  return CAREERS[lang];
}
