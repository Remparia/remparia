import type { Lang } from "./content";

export const SOVEREIGNTY_PAGE = {
  fr: {
    eyebrow: "PLATFORM / SOUVERAINETÉ",
    titleBefore: "Un mode de déploiement, ",
    titleAccent: "pas le produit.",
    sub: "Cloud Remparia, cloud souverain ou on-premise : même Agent Commerce, même OS, même gouvernance. Vous choisissez où ça tourne. Les données, modèles, logs et clés restent dans le périmètre que vous posez.",
    ctaPrimary: "Cadrer le déploiement",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "Voir la gouvernance",
    ctaSecondaryHref: "/governance",
    heroIndex: "01 / SOUVERAINETÉ",
    position: {
      eyebrow: "02 / POSITION",
      title: "Ce que la souveraineté est — et n’est pas",
      items: [
        {
          tag: "Produit",
          title: "Des agents métier en production",
          desc: "Qualification, relances, dossiers, contrôles — c’est ce que vous achetez. Le cloud ne change pas le métier.",
        },
        {
          tag: "Socle",
          title: "Remparia OS + gouvernance",
          desc: "Identité, politiques ALLOW / REVIEW / BLOCK, journal opposable. Le contrôle est le même dans chaque mode.",
        },
        {
          tag: "Mode",
          title: "Où ça tourne",
          desc: "Hébergement, résidence des données, clés. Un choix d’architecture — pas une offre parallèle.",
        },
      ],
    },
    modes: {
      eyebrow: "03 / MODES",
      title: "Trois périmètres. Un même système.",
      items: [
        {
          id: "cloud",
          tag: "Le plus rapide",
          title: "Cloud Remparia",
          subtitle: "Géré par Remparia",
          desc: "Mise en production en jours, modèles au choix, exploitation gérée. La gouvernance est incluse, pas ajoutée ensuite.",
          points: [
            "Chemin le plus court vers le premier agent",
            "Résidence des données configurable",
            "Même OS, mêmes stops humains",
          ],
          fit: "Démarrage SIGNAL, premier agent, agilité.",
        },
        {
          id: "sovereign",
          tag: "EU / France",
          title: "Cloud souverain",
          subtitle: "Infrastructure européenne",
          desc: "Périmètre EU / France, réseau isolé, chiffrement, journaux d’audit. Conçu pour s’inscrire dans vos cadres — le détail se cadre en SIGNAL.",
          points: [
            "Résidence des données EU / France",
            "Réseau isolé, supervision et audit",
            "RGPD, NIS2, DORA : cadrage, pas une certification affichée",
          ],
          fit: "Métiers régulés — finance, santé, public.",
        },
        {
          id: "onprem",
          tag: "Air-gap",
          title: "On-premise",
          subtitle: "Votre infrastructure. Vos règles.",
          desc: "Rien ne sort de votre environnement. Clés gérées par vous. Air-gap lorsque le dossier l’exige.",
          points: [
            "Aucune donnée ne quitte votre périmètre",
            "Clés, accès et modèles sous votre contrôle",
            "Prêt air-gap quand c’est pertinent",
          ],
          fit: "Environnements sensibles, contrôle total.",
        },
      ],
    },
    invariant: {
      eyebrow: "04 / INVARIANT",
      title: "L’hébergement se choisit. Le contrôle ne se négocie pas.",
      body: "Quel que soit le mode, l’agent ne gagne pas de droits. Les politiques, le journal et le stop humain restent ceux de Remparia OS.",
      items: [
        { title: "Mêmes agents", desc: "L’Agent Commerce — et les autres — portent le même livrable." },
        { title: "Mêmes politiques", desc: "ALLOW, REVIEW, BLOCK versionnés, pas réinventés par cloud." },
        { title: "Même journal", desc: "Qui a fait quoi, sur quelle ressource, avec quelle décision humaine." },
        { title: "Même stop humain", desc: "Prix hors grille, signature, remboursement hors politique : jamais l’agent." },
      ],
    },
    where: {
      eyebrow: "05 / OÙ TOURNE QUOI",
      title: "Clarté d’architecture",
      headers: ["Couche", "Dans le périmètre"],
      rows: [
        { label: "Données", value: "Là où vous les posez — jamais hors convention." },
        { label: "LLM", value: "Cloud choisi, modèle européen ou local, selon sensibilité." },
        { label: "Remparia OS", value: "Control plane sous votre gouvernance, dans le mode retenu." },
        { label: "Agents", value: "Sur le même socle, droits nommés, propriétaire humain." },
        { label: "Logs", value: "Journalisés, exportables, opposables." },
        { label: "Clés", value: "Vous les possédez ou vous en contrôlez l’usage." },
        { label: "Accès", value: "Vous définissez qui peut quoi — zéro par défaut." },
      ],
      note: "Le schéma exact — région, fournisseur, air-gap — se cadre en SIGNAL. On n’invente pas la stack.",
    },
    compare: {
      eyebrow: "06 / CHOIX",
      title: "Comment on décide le mode",
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
    commerce: {
      eyebrow: "07 / COMMERCE",
      title: "L’Agent Commerce ne change pas de métier selon le cloud",
      body: "Qualification, relance, commande, magasin : les mêmes stops. Seul le périmètre d’hébergement change.",
      steps: [
        "Lead → ALLOW : scorer et écrire le CRM, dans le cloud que vous avez choisi.",
        "Relance → ALLOW ou REVIEW, selon la politique — pas selon l’hébergeur.",
        "Remboursement hors politique → BLOCK, escalade CX, journal identique.",
        "Les tickets magasin, le PIM, le POS restent les vôtres. Remparia n’emporte pas le réseau.",
      ],
    },
    governance: {
      eyebrow: "08 / CONTRÔLE",
      title: "La gouvernance d’abord. Le mode ensuite.",
      body: "Sans ALLOW / REVIEW / BLOCK, un cloud souverain n’est qu’un autre endroit où l’agent peut mal faire. On cadre le contrôle, puis le périmètre.",
      ctaGov: "Voir la gouvernance",
      hrefGov: "/governance",
      ctaOs: "Voir Remparia OS",
      hrefOs: "/solution",
    },
    finalCta: "Cadrer le déploiement",
  },
  en: {
    eyebrow: "PLATFORM / SOVEREIGNTY",
    titleBefore: "A deployment mode, ",
    titleAccent: "not the product.",
    sub: "Remparia Cloud, sovereign cloud or on-premise: the same Commerce Agent, the same OS, the same governance. You choose where it runs. Data, models, logs and keys stay in the perimeter you set.",
    ctaPrimary: "Frame the deployment",
    ctaPrimaryHref: "/demarrer",
    ctaSecondary: "See governance",
    ctaSecondaryHref: "/governance",
    heroIndex: "01 / SOVEREIGNTY",
    position: {
      eyebrow: "02 / POSITION",
      title: "What sovereignty is — and is not",
      items: [
        {
          tag: "Product",
          title: "Business agents in production",
          desc: "Qualification, follow-ups, files, checks — that is what you buy. The cloud does not change the job.",
        },
        {
          tag: "Foundation",
          title: "Remparia OS + governance",
          desc: "Identity, ALLOW / REVIEW / BLOCK policies, auditable log. Control is the same in every mode.",
        },
        {
          tag: "Mode",
          title: "Where it runs",
          desc: "Hosting, data residency, keys. An architecture choice — not a parallel product.",
        },
      ],
    },
    modes: {
      eyebrow: "03 / MODES",
      title: "Three perimeters. One system.",
      items: [
        {
          id: "cloud",
          tag: "Fastest",
          title: "Remparia Cloud",
          subtitle: "Managed by Remparia",
          desc: "Production in days, models of your choice, managed operations. Governance is included, not bolted on later.",
          points: [
            "Shortest path to the first agent",
            "Configurable data residency",
            "Same OS, same human stops",
          ],
          fit: "SIGNAL start, first agent, agility.",
        },
        {
          id: "sovereign",
          tag: "EU / France",
          title: "Sovereign cloud",
          subtitle: "European infrastructure",
          desc: "EU / France perimeter, isolated network, encryption, audit logs. Designed to fit your frameworks — the detail is scoped in SIGNAL.",
          points: [
            "EU / France data residency",
            "Isolated network, supervision and audit",
            "GDPR, NIS2, DORA: scoping, not a displayed certification",
          ],
          fit: "Regulated work — finance, health, public sector.",
        },
        {
          id: "onprem",
          tag: "Air-gap",
          title: "On-premise",
          subtitle: "Your infrastructure. Your rules.",
          desc: "Nothing leaves your environment. Keys you control. Air-gap when the file requires it.",
          points: [
            "No data leaves your perimeter",
            "Keys, access and models under your control",
            "Air-gap ready when relevant",
          ],
          fit: "Sensitive environments, total control.",
        },
      ],
    },
    invariant: {
      eyebrow: "04 / INVARIANT",
      title: "Hosting is a choice. Control is not negotiable.",
      body: "Whatever the mode, the agent does not gain rights. Policies, the log and the human stop remain those of Remparia OS.",
      items: [
        { title: "Same agents", desc: "The Commerce Agent — and the others — carry the same deliverable." },
        { title: "Same policies", desc: "ALLOW, REVIEW, BLOCK versioned, not reinvented per cloud." },
        { title: "Same log", desc: "Who did what, on which resource, with which human decision." },
        { title: "Same human stop", desc: "Off-grid pricing, signature, out-of-policy refund: never the agent." },
      ],
    },
    where: {
      eyebrow: "05 / WHERE WHAT RUNS",
      title: "Architecture clarity",
      headers: ["Layer", "In the perimeter"],
      rows: [
        { label: "Data", value: "Where you put it — never outside the agreement." },
        { label: "LLM", value: "Chosen cloud, European or local model, by sensitivity." },
        { label: "Remparia OS", value: "Control plane under your governance, in the chosen mode." },
        { label: "Agents", value: "Same foundation, named rights, human owner." },
        { label: "Logs", value: "Logged, exportable, auditable." },
        { label: "Keys", value: "You own them or you control their use." },
        { label: "Access", value: "You define who may do what — zero by default." },
      ],
      note: "The exact diagram — region, vendor, air-gap — is scoped in SIGNAL. The stack is not invented.",
    },
    compare: {
      eyebrow: "06 / CHOICE",
      title: "How the mode is decided",
      columns: ["Remparia Cloud", "Sovereign cloud", "On-premise"],
      rows: [
        { label: "Speed", values: ["Fast", "Medium", "Longer"] },
        {
          label: "Control",
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
    commerce: {
      eyebrow: "07 / COMMERCE",
      title: "The Commerce Agent does not change jobs with the cloud",
      body: "Qualification, follow-up, order, store: the same stops. Only the hosting perimeter changes.",
      steps: [
        "Lead → ALLOW: score and write the CRM, in the cloud you chose.",
        "Follow-up → ALLOW or REVIEW, by policy — not by host.",
        "Out-of-policy refund → BLOCK, CX escalation, same log.",
        "Store tickets, PIM, POS stay yours. Remparia does not take the network.",
      ],
    },
    governance: {
      eyebrow: "08 / CONTROL",
      title: "Governance first. Mode second.",
      body: "Without ALLOW / REVIEW / BLOCK, a sovereign cloud is just another place for the agent to get it wrong. We frame control, then the perimeter.",
      ctaGov: "See governance",
      hrefGov: "/governance",
      ctaOs: "See Remparia OS",
      hrefOs: "/solution",
    },
    finalCta: "Frame the deployment",
  },
} as const;

export function sovereigntyPage(lang: Lang) {
  return SOVEREIGNTY_PAGE[lang];
}
