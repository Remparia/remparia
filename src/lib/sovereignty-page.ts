import type { Lang } from "./content";

export type SovModeId = "cloud" | "sovereign" | "onprem";

export type SovMode = {
  id: SovModeId;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  points: readonly string[];
  fit: string;
  panel: string;
};

const sovereignty = {
  fr: {
    eyebrow: "06 / SOUVERAINETÉ",
    crumbs: "Souveraineté",
    titleLine1: "Choisissez le périmètre.",
    titleAccent: "Gardez le contrôle.",
    sub: "Cloud Remparia, cloud souverain ou on-premise : mêmes agents, même OS, même gouvernance. Vous durcissez l’hébergement ; agents et politiques restent.",
    ctaPrimary: "Choisir le périmètre",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir Remparia OS",
    ctaSecondaryHref: "/solution",
    panel: {
      mark: "SOUVERAINETÉ",
      status: "Périmètre actif",
      mission: "Mission · Choisir où ça tourne",
    },
    problem: {
      eyebrow: "01 / LE CONSTAT",
      titleBefore: "Un cloud « souverain » sans contrôle ",
      titleAccent: "n’est qu’un autre cloud.",
      sideLead: "Le défi",
      sideRest: "n’est pas d’afficher une région. C’est de garder les mêmes stops humains, le même journal et les mêmes politiques, ",
      sideAccent: "quel que soit le périmètre.",
      today: "AUJOURD’HUI",
      withUs: "AVEC REMPARIA",
      rows: [
        { today: "Souveraineté marketing", withUs: "Périmètre d’architecture" },
        { today: "Produit cloud parallèle", withUs: "Même OS, trois modes" },
        { today: "Contrôle dilué par l’hébergeur", withUs: "Contrôle inchangé" },
        { today: "Certifs en vitrine", withUs: "Cadrage SIGNAL sérieux" },
        { today: "Agents différents selon le cloud", withUs: "Même force de travail" },
      ],
    },
    why: {
      eyebrow: "02 / POURQUOI MAINTENANT",
      titleBefore: "La résilience a rejoint ",
      titleAccent: "le stack.",
      body: "Acheteurs, régulateurs et conseils demandent où vit votre IA, et qui peut l’éteindre. La question n’est plus « cloud ou on-prem ». C’est : restez-vous maître si les règles changent ?",
      items: [
        {
          title: "Dépendance métier",
          desc: "Une pile unique hors de votre périmètre est une dépendance opérationnelle, pas un détail IT.",
        },
        {
          title: "Règles et drapeaux",
          desc: "Lois extraterritoriales, contrôles d’export, marchés publics : l’accès à vos données et à votre IA peut bouger sans vous.",
        },
        {
          title: "Exigence board",
          desc: "On ne vend pas une région. On cadre un mode où la force de travail reste gouvernée.",
        },
      ],
    },
    pillars: {
      eyebrow: "03 / TROIS PILIERS",
      titleBefore: "Vos données. Votre IA. ",
      titleAccent: "Votre contrôle.",
      body: "Vous déployez une force de travail IA dans le périmètre que votre risque exige, avec le même OS et la même gouvernance.",
      items: [
        {
          tag: "DONNÉES",
          title: "Vos données",
          desc: "Vous décidez où elles résident. Elles ne sortent pas du périmètre convenu : Cloud Remparia, souverain EU / France ou on-premise.",
        },
        {
          tag: "IA",
          title: "Votre IA",
          desc: "Agents métier, modèles et workflows restent dans le mode choisi. Le métier ne change pas avec l’hébergeur.",
        },
        {
          tag: "CONTRÔLE",
          title: "Votre contrôle",
          desc: "Identité, ALLOW / REVIEW / BLOCK, journal opposable, stops humains : identiques dans chaque mode.",
        },
      ],
      defs: [
        {
          title: "Souveraineté des données",
          desc: "Où résident les données et quelle juridiction les régit.",
        },
        {
          title: "Souveraineté opérationnelle",
          desc: "Qui peut lancer, arrêter, auditer et faire évoluer le système, sans diluer ALLOW / REVIEW / BLOCK.",
        },
      ],
    },
    modes: {
      eyebrow: "04 / LES MODES",
      title: "Trois périmètres. Un même système.",
      body: "Choisissez la vitesse, le pilotage et le degré d’isolement. Les agents et les politiques restent les mêmes.",
      spectrum:
        "Démarrez en Cloud Remparia, passez en souverain ou on-prem, sans changer agents ni politiques.",
      items: [
        {
          id: "cloud",
          tag: "LE PLUS RAPIDE",
          title: "Cloud Remparia",
          subtitle: "Géré par Remparia",
          desc: "Mise en production en jours, modèles au choix, exploitation gérée. La gouvernance est incluse, pas ajoutée ensuite.",
          points: [
            "Chemin le plus court vers le premier agent",
            "Résidence des données configurable",
            "Même OS, mêmes stops humains",
          ],
          fit: "Démarrage SIGNAL, premier agent, agilité.",
          panel: "Cloud · géré Remparia",
        },
        {
          id: "sovereign",
          tag: "EU / FRANCE",
          title: "Cloud souverain",
          subtitle: "Infrastructure européenne",
          desc: "Périmètre EU / France, réseau isolé, chiffrement, journaux d’audit. Le détail réglementaire se cadre en SIGNAL.",
          points: [
            "Résidence des données EU / France",
            "Réseau isolé, supervision et audit",
            "RGPD, NIS2, DORA : cadrage, pas une certification affichée",
          ],
          fit: "Métiers régulés : finance, santé, public.",
          panel: "Souverain · EU / France",
        },
        {
          id: "onprem",
          tag: "AIR-GAP",
          title: "On-premise",
          subtitle: "Votre infrastructure. Vos règles.",
          desc: "Rien ne sort de votre environnement. Clés gérées par vous. Air-gap lorsque le dossier l’exige.",
          points: [
            "Aucune donnée ne quitte votre périmètre",
            "Clés, accès et modèles sous votre contrôle",
            "Prêt air-gap quand c’est pertinent",
          ],
          fit: "Environnements sensibles, contrôle total.",
          panel: "On-prem · air-gap ready",
        },
      ] satisfies SovMode[],
    },
    invariant: {
      eyebrow: "05 / INVARIANT",
      titleBefore: "L’hébergement se choisit. ",
      titleAccent: "Le contrôle ne se négocie pas.",
      body: "Quel que soit le mode, l’agent ne gagne pas de droits. Les politiques, le journal et le stop humain restent ceux de Remparia OS.",
      items: [
        {
          title: "Mêmes agents",
          desc: "La force de travail porte le même livrable métier.",
        },
        {
          title: "Mêmes politiques",
          desc: "ALLOW, REVIEW, BLOCK versionnés, pas réinventés par cloud.",
        },
        {
          title: "Même journal",
          desc: "Qui a fait quoi, sur quelle ressource, avec quelle décision humaine.",
        },
        {
          title: "Même stop humain",
          desc: "Prix hors grille, signature, remboursement hors politique : jamais l’agent.",
        },
      ],
    },
    where: {
      eyebrow: "06 / ARCHITECTURE",
      titleBefore: "Clarté sur ",
      titleAccent: "où tourne quoi.",
      note: "Le schéma exact (région, fournisseur, air-gap) se cadre en SIGNAL. On n’invente pas la stack.",
      headers: ["Couche", "Dans le périmètre"],
      rows: [
        { label: "Données", value: "Là où vous les posez, jamais hors convention." },
        { label: "LLM", value: "Cloud choisi, modèle européen ou local, selon sensibilité." },
        { label: "Remparia OS", value: "Control plane sous votre gouvernance, dans le mode retenu." },
        { label: "Agents", value: "Sur le même socle, droits nommés, propriétaire humain." },
        { label: "Logs", value: "Journalisés, exportables, opposables." },
        { label: "Clés", value: "Vous les possédez ou vous en contrôlez l’usage." },
        { label: "Accès", value: "Vous définissez qui peut quoi : zéro par défaut." },
      ],
    },
    compare: {
      eyebrow: "07 / CHOIX",
      title: "Comment on décide le mode.",
      columns: ["Cloud Remparia", "Cloud souverain", "On-premise"],
      rows: [
        { label: "Vitesse", values: ["Rapide", "Moyenne", "Plus longue"] },
        {
          label: "Pilotage",
          values: [
            "Géré Remparia",
            "Remparia + partenaire / client",
            "Client, avec support Remparia",
          ],
        },
        { label: "Flexibilité", values: ["Élevée", "Très élevée", "Maximum"] },
        {
          label: "Idéal pour",
          values: [
            "Premier agent, agilité",
            "Industries régulées",
            "Données qui ne doivent pas sortir",
          ],
        },
      ],
    },
    action: {
      eyebrow: "08 / EN ACTION",
      titleBefore: "Même agent. ",
      titleAccent: "Autre périmètre.",
      body: "Qualification, relance, remboursement : les mêmes stops. Seul l’endroit où ça tourne change.",
      mission: "Agent Commerce · trois modes, une politique",
      nodes: [
        { tag: "ALLOW", title: "Score + CRM", desc: "Dans le cloud choisi" },
        { tag: "REVIEW", title: "Geste commercial", desc: "Politique, pas hébergeur" },
        { tag: "BLOCK", title: "Remboursement", desc: "Stop identique partout" },
        { tag: "SI", title: "Vos systèmes", desc: "CRM / PIM / POS restent les vôtres" },
      ],
    },
    path: {
      eyebrow: "09 / TRAJECTOIRE",
      title: "On cadre le contrôle. Ensuite le périmètre.",
      body: "Sans ALLOW / REVIEW / BLOCK, un cloud souverain n’est qu’un autre endroit où l’agent peut mal faire.",
      steps: [
        {
          n: "01",
          tag: "SIGNAL",
          title: "Trouver la valeur",
          desc: "Risque, données, mode cible.",
          href: "/signal",
        },
        {
          n: "02",
          tag: "STUDIO",
          title: "Construire",
          desc: "Agents nés gouvernés.",
          href: "/studio",
        },
        {
          n: "03",
          tag: "OS",
          title: "Opérer",
          desc: "Orchestrer dans le mode retenu.",
          href: "/solution",
        },
        {
          n: "04",
          tag: "GOUVERNANCE",
          title: "Contrôler",
          desc: "Politiques et journal opposables.",
          href: "/governance",
        },
      ],
      ctaGov: "Voir la gouvernance",
      hrefGov: "/governance",
      ctaOs: "Voir Remparia OS",
      hrefOs: "/solution",
    },
    faq: {
      eyebrow: "10 / FAQ",
      title: "Questions fréquentes",
      sub: "Ce que la souveraineté signifie chez Remparia, sans jargon marketing.",
      items: [
        {
          q: "Qu’est-ce que la souveraineté chez Remparia ?",
          a: "Un choix de périmètre d’hébergement pour une force de travail IA déjà gouvernée. Même OS, mêmes politiques, mêmes stops humains : Cloud Remparia, cloud souverain ou on-premise.",
        },
        {
          q: "Quelle différence entre souveraineté des données et opérationnelle ?",
          a: "Les données : où elles résident et quelle juridiction s’applique. L’opérationnelle : qui peut lancer, arrêter, auditer et faire évoluer le système. Remparia exige les deux : résidence cadrée et ALLOW / REVIEW / BLOCK inchangés.",
        },
        {
          q: "Le mode est-il un produit séparé ?",
          a: "Non. Ce n’est pas une offre parallèle. C’est le même système déployé dans le périmètre que votre risque exige.",
        },
        {
          q: "Peut-on démarrer en cloud puis durcir ?",
          a: "Oui. Vous démarrez en Cloud Remparia et passez en souverain ou on-prem sans réécrire agents ni politiques. Le détail se cadre en SIGNAL.",
        },
        {
          q: "L’air-gap est-il supporté ?",
          a: "Oui, quand le dossier l’exige. On-premise avec clés, accès et modèles sous votre contrôle. Le contrôle métier reste celui de Remparia OS.",
        },
        {
          q: "La souveraineté impose-t-elle de renoncer à la performance ?",
          a: "Non. On ne trade pas le métier contre une région. On choisit le périmètre ; la force de travail et la gouvernance restent au même niveau.",
        },
      ],
    },
    cta: {
      tag: "SOUVERAINETÉ",
      title: "Choisir le périmètre sans perdre le contrôle.",
      text: "On part d’un cas SIGNAL. On compose dans Studio. On publie dans Remparia OS, dans le mode que votre risque exige.",
      href: "/demarrer",
      label: "Choisir le périmètre",
    },
  },
  en: {
    eyebrow: "06 / SOVEREIGNTY",
    crumbs: "Sovereignty",
    titleLine1: "Choose the perimeter.",
    titleAccent: "Keep control.",
    sub: "Remparia Cloud, sovereign cloud or on-premise: the same agents, the same OS, the same governance. You harden hosting; agents and policies stay.",
    ctaPrimary: "Choose the perimeter",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See Remparia OS",
    ctaSecondaryHref: "/solution",
    panel: {
      mark: "SOVEREIGNTY",
      status: "Perimeter live",
      mission: "Mission · Choose where it runs",
    },
    problem: {
      eyebrow: "01 / THE GAP",
      titleBefore: "A “sovereign” cloud without control ",
      titleAccent: "is just another cloud.",
      sideLead: "The challenge",
      sideRest: "is not displaying a region. It is keeping the same human stops, the same log and the same policies, ",
      sideAccent: "whatever the perimeter.",
      today: "TODAY",
      withUs: "WITH REMPARIA",
      rows: [
        { today: "Marketing sovereignty", withUs: "Architecture perimeter" },
        { today: "Parallel cloud product", withUs: "Same OS, three modes" },
        { today: "Control diluted by host", withUs: "Control unchanged" },
        { today: "Certifications on display", withUs: "Serious SIGNAL scoping" },
        { today: "Different agents per cloud", withUs: "Same workforce" },
      ],
    },
    why: {
      eyebrow: "02 / WHY NOW",
      titleBefore: "Resilience has reached ",
      titleAccent: "the stack.",
      body: "Buyers, regulators and boards ask where your AI lives, and who can turn it off. The question is no longer “cloud or on-prem”. It is: do you stay in charge if the rules change?",
      items: [
        {
          title: "Business dependency",
          desc: "A single stack outside your perimeter is an operational dependency, not an IT detail.",
        },
        {
          title: "Rules and flags",
          desc: "Extraterritorial laws, export controls, public procurement: access to your data and AI can move without you.",
        },
        {
          title: "Board requirement",
          desc: "We do not sell a region. We frame a mode where the workforce stays governed.",
        },
      ],
    },
    pillars: {
      eyebrow: "03 / THREE PILLARS",
      titleBefore: "Your data. Your AI. ",
      titleAccent: "Your control.",
      body: "You deploy an AI workforce in the perimeter your risk requires, with the same OS and the same governance.",
      items: [
        {
          tag: "DATA",
          title: "Your data",
          desc: "You decide where it resides. It does not leave the agreed perimeter: Remparia Cloud, sovereign EU / France or on-premise.",
        },
        {
          tag: "AI",
          title: "Your AI",
          desc: "Business agents, models and workflows stay in the chosen mode. The job does not change with the host.",
        },
        {
          tag: "CONTROL",
          title: "Your control",
          desc: "Identity, ALLOW / REVIEW / BLOCK, auditable log, human stops: identical in every mode.",
        },
      ],
      defs: [
        {
          title: "Data sovereignty",
          desc: "Where data resides and which jurisdiction governs it.",
        },
        {
          title: "Operational sovereignty",
          desc: "Who can run, stop, audit and evolve the system, without diluting ALLOW / REVIEW / BLOCK.",
        },
      ],
    },
    modes: {
      eyebrow: "04 / MODES",
      title: "Three perimeters. One system.",
      body: "Choose speed, stewardship and isolation. Agents and policies stay the same.",
      spectrum:
        "Start on Remparia Cloud, move to sovereign or on-prem, without changing agents or policies.",
      items: [
        {
          id: "cloud",
          tag: "FASTEST",
          title: "Remparia Cloud",
          subtitle: "Managed by Remparia",
          desc: "Production in days, models of your choice, managed operations. Governance is included, not bolted on later.",
          points: [
            "Shortest path to the first agent",
            "Configurable data residency",
            "Same OS, same human stops",
          ],
          fit: "SIGNAL start, first agent, agility.",
          panel: "Cloud · Remparia managed",
        },
        {
          id: "sovereign",
          tag: "EU / FRANCE",
          title: "Sovereign cloud",
          subtitle: "European infrastructure",
          desc: "EU / France perimeter, isolated network, encryption, audit logs. Regulatory detail is scoped in SIGNAL.",
          points: [
            "EU / France data residency",
            "Isolated network, supervision and audit",
            "GDPR, NIS2, DORA: scoping, not a displayed certification",
          ],
          fit: "Regulated work: finance, health, public sector.",
          panel: "Sovereign · EU / France",
        },
        {
          id: "onprem",
          tag: "AIR-GAP",
          title: "On-premise",
          subtitle: "Your infrastructure. Your rules.",
          desc: "Nothing leaves your environment. Keys you control. Air-gap when the file requires it.",
          points: [
            "No data leaves your perimeter",
            "Keys, access and models under your control",
            "Air-gap ready when relevant",
          ],
          fit: "Sensitive environments, total control.",
          panel: "On-prem · air-gap ready",
        },
      ] satisfies SovMode[],
    },
    invariant: {
      eyebrow: "05 / INVARIANT",
      titleBefore: "Hosting is a choice. ",
      titleAccent: "Control is not negotiable.",
      body: "Whatever the mode, the agent does not gain rights. Policies, the log and the human stop remain those of Remparia OS.",
      items: [
        {
          title: "Same agents",
          desc: "The workforce carries the same business deliverable.",
        },
        {
          title: "Same policies",
          desc: "ALLOW, REVIEW, BLOCK versioned, not reinvented per cloud.",
        },
        {
          title: "Same log",
          desc: "Who did what, on which resource, with which human decision.",
        },
        {
          title: "Same human stop",
          desc: "Off-grid pricing, signature, out-of-policy refund: never the agent.",
        },
      ],
    },
    where: {
      eyebrow: "06 / ARCHITECTURE",
      titleBefore: "Clarity on ",
      titleAccent: "where what runs.",
      note: "The exact diagram (region, vendor, air-gap) is scoped in SIGNAL. The stack is not invented.",
      headers: ["Layer", "In the perimeter"],
      rows: [
        { label: "Data", value: "Where you put it, never outside the agreement." },
        { label: "LLM", value: "Chosen cloud, European or local model, by sensitivity." },
        { label: "Remparia OS", value: "Control plane under your governance, in the chosen mode." },
        { label: "Agents", value: "Same foundation, named rights, human owner." },
        { label: "Logs", value: "Logged, exportable, auditable." },
        { label: "Keys", value: "You own them or you control their use." },
        { label: "Access", value: "You define who may do what: zero by default." },
      ],
    },
    compare: {
      eyebrow: "07 / CHOICE",
      title: "How the mode is decided.",
      columns: ["Remparia Cloud", "Sovereign cloud", "On-premise"],
      rows: [
        { label: "Speed", values: ["Fast", "Medium", "Longer"] },
        {
          label: "Stewardship",
          values: [
            "Managed by Remparia",
            "Remparia + partner / client",
            "Client, with Remparia support",
          ],
        },
        { label: "Flexibility", values: ["High", "Very high", "Maximum"] },
        {
          label: "Best for",
          values: [
            "First agent, agility",
            "Regulated industries",
            "Data that must not leave",
          ],
        },
      ],
    },
    action: {
      eyebrow: "08 / IN ACTION",
      titleBefore: "Same agent. ",
      titleAccent: "Different perimeter.",
      body: "Qualification, follow-up, refund: the same stops. Only where it runs changes.",
      mission: "Commerce Agent · three modes, one policy",
      nodes: [
        { tag: "ALLOW", title: "Score + CRM", desc: "In the cloud you chose" },
        { tag: "REVIEW", title: "Commercial gesture", desc: "Policy, not host" },
        { tag: "BLOCK", title: "Refund", desc: "Identical stop everywhere" },
        { tag: "STACK", title: "Your systems", desc: "CRM / PIM / POS stay yours" },
      ],
    },
    path: {
      eyebrow: "09 / PATH",
      title: "Frame control. Then the perimeter.",
      body: "Without ALLOW / REVIEW / BLOCK, a sovereign cloud is just another place for the agent to get it wrong.",
      steps: [
        {
          n: "01",
          tag: "SIGNAL",
          title: "Find the value",
          desc: "Risk, data, target mode.",
          href: "/signal",
        },
        {
          n: "02",
          tag: "STUDIO",
          title: "Build",
          desc: "Agents born governed.",
          href: "/studio",
        },
        {
          n: "03",
          tag: "OS",
          title: "Operate",
          desc: "Orchestrate in the chosen mode.",
          href: "/solution",
        },
        {
          n: "04",
          tag: "GOVERNANCE",
          title: "Control",
          desc: "Policies and auditable log.",
          href: "/governance",
        },
      ],
      ctaGov: "See governance",
      hrefGov: "/governance",
      ctaOs: "See Remparia OS",
      hrefOs: "/solution",
    },
    faq: {
      eyebrow: "10 / FAQ",
      title: "Frequently asked questions",
      sub: "What sovereignty means at Remparia, without marketing jargon.",
      items: [
        {
          q: "What is sovereignty at Remparia?",
          a: "A hosting-perimeter choice for an already governed AI workforce. Same OS, same policies, same human stops: Remparia Cloud, sovereign cloud or on-premise.",
        },
        {
          q: "What is the difference between data and operational sovereignty?",
          a: "Data: where it resides and which jurisdiction applies. Operational: who can run, stop, audit and evolve the system. Remparia requires both: framed residency and unchanged ALLOW / REVIEW / BLOCK.",
        },
        {
          q: "Is the mode a separate product?",
          a: "No. It is not a parallel offer. It is the same system deployed in the perimeter your risk requires.",
        },
        {
          q: "Can we start in cloud then harden?",
          a: "Yes. You start on Remparia Cloud and move to sovereign or on-prem without rewriting agents or policies. Detail is scoped in SIGNAL.",
        },
        {
          q: "Is air-gap supported?",
          a: "Yes, when the file requires it. On-premise with keys, access and models under your control. Business control remains that of Remparia OS.",
        },
        {
          q: "Does sovereignty mean giving up performance?",
          a: "No. We do not trade the job for a region. You choose the perimeter; the workforce and governance stay at the same level.",
        },
      ],
    },
    cta: {
      tag: "SOVEREIGNTY",
      title: "Choose the perimeter without losing control.",
      text: "Start from a SIGNAL case. Compose in Studio. Publish to Remparia OS, in the mode your risk requires.",
      href: "/demarrer",
      label: "Choose the perimeter",
    },
  },
} as const;

export function sovereigntyPage(lang: Lang) {
  return sovereignty[lang];
}
