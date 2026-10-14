import type { Lang } from "./content";
import type { PremiumPageCopy } from "./pages-premium";

export type ResourcePageId =
  | "blog"
  | "partenariat"
  | "support"
  | "formation"
  | "supervision";

const pages: Record<ResourcePageId, { fr: PremiumPageCopy; en: PremiumPageCopy }> =
  {
    supervision: {
      fr: {
        eyebrow: "PLATEFORME / SUPERVISION",
        title: "Supervision en ",
        titleAccent: "production.",
        sub: "On ne livre pas un agent et on disparaît. On l’opère : journal OS, qualité, coûts, erreurs, escalades ALLOW / REVIEW / BLOCK et corrections dans le temps.",
        ctaPrimary: "Parler AgentOps",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "Voir Remparia OS",
        ctaSecondaryHref: "/solution",
        sections: [
          {
            id: "watch",
            eyebrow: "01 / CE QU’ON SURVEILLE",
            title: "Quatre axes, un runbook",
            blocks: [
              {
                title: "Qualité",
                desc: "Réponses utiles, règles métier, dérives et échantillons évalués sur des cas réels.",
              },
              {
                title: "Coûts et latence",
                desc: "Consommation modèles, temps de traitement, disponibilité et seuils d’alerte par workflow.",
              },
              {
                title: "Erreurs et escalades",
                desc: "Échecs, exceptions, reprises humaines et causes racines documentées puis corrigées.",
              },
              {
                title: "Adoption et résultat",
                desc: "Usage réel, abandons, indicateurs métier convenus au cadrage SIGNAL.",
              },
            ],
          },
          {
            id: "os",
            eyebrow: "02 / SOUS REMPARIA OS",
            title: "Traces et portes humaines",
            blocks: [
              {
                title: "Journal d’exécution",
                desc: "Actions, appels outils, réponses, erreurs et décisions : pour rejouer ce qui s’est passé.",
              },
              {
                title: "ALLOW / REVIEW / BLOCK",
                desc: "Politiques actives : ce qui passe, ce qui attend un humain, ce qui est refusé.",
              },
              {
                title: "Permissions",
                desc: "Accès, actions sensibles et rétention restent sous votre contrôle.",
              },
              {
                title: "Escalades",
                desc: "Hors cadre → la bonne personne, avec le contexte utile pour trancher.",
              },
            ],
          },
          {
            id: "cycle",
            eyebrow: "03 / CYCLE AGENTOPS",
            title: "Observer, intervenir, améliorer",
            body: "L’exploitation continue après le go-live : reporting lisible, canary, corrections de règles ou connecteurs, puis retest des scénarios.",
            flow: ["Observer", "Intervenir", "Améliorer"],
            list: [
              "Collecte logs OS, qualité, coûts, incidents et indicateurs métier",
              "Correction des règles, compétences Studio, connecteurs ou seuils REVIEW / BLOCK",
              "Backlog suivant alimenté par le terrain, pas par une moyenne globale",
            ],
          },
          {
            id: "faq",
            eyebrow: "04 / QUESTIONS FRÉQUENTES",
            title: "Avant de lancer le run",
            blocks: [
              {
                title: "Que surveillez-vous en production ?",
                desc: "Journal OS, qualité des sorties, coûts, latence, erreurs, escalades, adoption et KPIs signés au cadrage.",
              },
              {
                title: "Qui décide hors cadre ?",
                desc: "Une règle d’escalade désigne l’équipe. L’agent apporte le contexte ; l’arbitrage sensible reste humain.",
              },
              {
                title: "Comment contrôlez-vous la qualité ?",
                desc: "Critères métier, jeux de cas, échantillons et seuils d’alerte. Une moyenne seule ne suffit pas.",
              },
              {
                title: "Est-ce séparé de l’intégration ?",
                desc: "Non. C’est la couche AgentOps de chaque agent livré : observer, corriger, documenter, mesurer.",
              },
            ],
          },
        ],
      },
      en: {
        eyebrow: "PLATFORM / SUPERVISION",
        title: "Production ",
        titleAccent: "supervision.",
        sub: "We don’t ship an agent and walk away. We operate it: OS journal, quality, costs, errors, ALLOW / REVIEW / BLOCK escalations and fixes over time.",
        ctaPrimary: "Talk AgentOps",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "See Remparia OS",
        ctaSecondaryHref: "/solution",
        sections: [
          {
            id: "watch",
            eyebrow: "01 / WHAT WE WATCH",
            title: "Four axes, one runbook",
            blocks: [
              {
                title: "Quality",
                desc: "Useful answers, business rules, drift and samples scored on real cases.",
              },
              {
                title: "Cost and latency",
                desc: "Model usage, processing time, availability and alert thresholds per workflow.",
              },
              {
                title: "Errors and escalations",
                desc: "Task failures, exceptions, human handoffs and root causes documented then fixed.",
              },
              {
                title: "Adoption and outcomes",
                desc: "Real usage, drop-offs, business indicators agreed during SIGNAL scoping.",
              },
            ],
          },
          {
            id: "os",
            eyebrow: "02 / UNDER REMPARIA OS",
            title: "Traces and human gates",
            blocks: [
              {
                title: "Execution journal",
                desc: "Actions, tool calls, answers, errors and decisions: so you can replay what happened.",
              },
              {
                title: "ALLOW / REVIEW / BLOCK",
                desc: "Live policies: what passes, what waits for a human, what is refused.",
              },
              {
                title: "Permissions",
                desc: "Access, sensitive actions and retention stay under your control.",
              },
              {
                title: "Escalations",
                desc: "Out of scope → the right person, with the context needed to decide.",
              },
            ],
          },
          {
            id: "cycle",
            eyebrow: "03 / AGENTOPS CYCLE",
            title: "Observe, intervene, improve",
            body: "Ops continue after go-live: readable reporting, canary, rule or connector fixes, then retest of scenarios.",
            flow: ["Observe", "Intervene", "Improve"],
            list: [
              "Collect OS logs, quality, costs, incidents and business indicators",
              "Fix rules, Studio skills, connectors or REVIEW / BLOCK thresholds",
              "Next backlog fed by the field, not by a global average",
            ],
          },
          {
            id: "faq",
            eyebrow: "04 / FAQ",
            title: "Before you start the run",
            blocks: [
              {
                title: "What do you watch in production?",
                desc: "OS journal, output quality, costs, latency, errors, escalations, adoption and KPIs signed at scoping.",
              },
              {
                title: "Who decides out of scope?",
                desc: "An escalation rule names the team. The agent brings context; sensitive arbitration stays human.",
              },
              {
                title: "How do you control quality?",
                desc: "Business criteria, case sets, samples and alert thresholds. An average alone is not enough.",
              },
              {
                title: "Is this separate from integration?",
                desc: "No. It is the AgentOps layer of every shipped agent: observe, fix, document, measure.",
              },
            ],
          },
        ],
      },
    },
    formation: {
      fr: {
        eyebrow: "MÉTHODES / FORMATION",
        title: "Formation et ",
        titleAccent: "sensibilisation.",
        sub: "Faire adopter les agents sur le terrain : usages réels, ALLOW / REVIEW / BLOCK, risques et supervision – pas une slide générique.",
        ctaPrimary: "Planifier une session",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "Voir SIGNAL",
        ctaSecondaryHref: "/signal",
        sections: [
          {
            id: "audience",
            eyebrow: "01 / PUBLICS",
            title: "Pour qui",
            blocks: [
              {
                title: "Métiers",
                desc: "Cas concrets du pack : quand l’agent agit, quand l’humain tranche.",
              },
              {
                title: "Risque & conformité",
                desc: "Politiques, audit, données autorisées et seuils REVIEW / BLOCK.",
              },
              {
                title: "IT & ops",
                desc: "Connecteurs, incidents, canary et runbooks AgentOps.",
              },
            ],
          },
          {
            id: "format",
            eyebrow: "02 / FORMAT",
            title: "Ce qu’on livre",
            list: [
              "Ateliers sur vos processus cadrés avec SIGNAL",
              "Exercices Studio : compétences, outils, portes humaines",
              "Sensibilisation risques : données, droits, journal OS",
              "Supports et runbooks pour le run après go-live",
            ],
          },
        ],
      },
      en: {
        eyebrow: "METHODS / TRAINING",
        title: "Training and ",
        titleAccent: "awareness.",
        sub: "Drive agent adoption in the field: real usage, ALLOW / REVIEW / BLOCK, risks and supervision – not a generic slide deck.",
        ctaPrimary: "Schedule a session",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "See SIGNAL",
        ctaSecondaryHref: "/signal",
        sections: [
          {
            id: "audience",
            eyebrow: "01 / AUDIENCES",
            title: "Who it’s for",
            blocks: [
              {
                title: "Business teams",
                desc: "Concrete pack cases: when the agent acts, when a human decides.",
              },
              {
                title: "Risk & compliance",
                desc: "Policies, audit, allowed data and REVIEW / BLOCK thresholds.",
              },
              {
                title: "IT & ops",
                desc: "Connectors, incidents, canary and AgentOps runbooks.",
              },
            ],
          },
          {
            id: "format",
            eyebrow: "02 / FORMAT",
            title: "What we deliver",
            list: [
              "Workshops on processes scoped with SIGNAL",
              "Studio drills: skills, tools, human gates",
              "Risk awareness: data, rights, OS journal",
              "Materials and runbooks for post go-live ops",
            ],
          },
        ],
      },
    },
    blog: {
      fr: {
        eyebrow: "RESSOURCES / BLOG",
        title: "Notes de terrain ",
        titleAccent: "et méthode.",
        sub: "SIGNAL, Studio, Remparia OS : ce qu’on apprend en cadrant, en assemblant et en opérant des agents métier.",
        ctaPrimary: "Lire bientôt",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "Voir SIGNAL",
        ctaSecondaryHref: "/signal",
        sections: [
          {
            id: "coming",
            eyebrow: "01 / À VENIR",
            title: "Les premiers articles arrivent",
            body: "On publiera des cas cadrés avec SIGNAL, des choix Studio et des garde-fous OS (ALLOW / REVIEW / BLOCK). Pas de posts génériques.",
          },
        ],
      },
      en: {
        eyebrow: "RESOURCES / BLOG",
        title: "Field notes ",
        titleAccent: "and method.",
        sub: "SIGNAL, Studio, Remparia OS: what we learn while scoping, assembling and running business agents.",
        ctaPrimary: "Coming soon",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "See SIGNAL",
        ctaSecondaryHref: "/signal",
        sections: [
          {
            id: "coming",
            eyebrow: "01 / COMING UP",
            title: "First posts are on the way",
            body: "We’ll publish cases scoped with SIGNAL, Studio choices and OS guardrails (ALLOW / REVIEW / BLOCK). No generic posts.",
          },
        ],
      },
    },
    partenariat: {
      fr: {
        eyebrow: "RESSOURCES / PARTENARIAT",
        title: "Déployer Remparia ",
        titleAccent: "avec vous.",
        sub: "Intégrateurs, cabinets et réseaux : co-cadrage SIGNAL, composition Studio et exploitation sous politiques OS.",
        ctaPrimary: "Parler partenariat",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "Voir Remparia OS",
        ctaSecondaryHref: "/solution",
        sections: [
          {
            id: "fit",
            eyebrow: "01 / QUI",
            title: "Pour qui ça marche",
            list: [
              "Intégrateurs SI qui portent la mise en production",
              "Cabinets métier (juridique, finance, conseil) avec un réseau clients",
              "Éditeurs qui veulent une couche agents gouvernée, pas un chatbot collé",
            ],
          },
          {
            id: "model",
            eyebrow: "02 / MODÈLE",
            title: "Ce qu’on partage",
            body: "Playbooks SIGNAL, accès Studio, politiques OS et support AgentOps. Vous gardez la relation client ; Remparia porte le socle et la supervision.",
          },
        ],
      },
      en: {
        eyebrow: "RESOURCES / PARTNERSHIP",
        title: "Deploy Remparia ",
        titleAccent: "with you.",
        sub: "Integrators, firms and networks: SIGNAL scoping, Studio composition and operations under OS policies.",
        ctaPrimary: "Talk partnership",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "See Remparia OS",
        ctaSecondaryHref: "/solution",
        sections: [
          {
            id: "fit",
            eyebrow: "01 / WHO",
            title: "Who it fits",
            list: [
              "System integrators that own production rollouts",
              "Professional firms (legal, finance, consulting) with a client network",
              "Vendors that want a governed agent layer, not a bolted-on chatbot",
            ],
          },
          {
            id: "model",
            eyebrow: "02 / MODEL",
            title: "What we share",
            body: "SIGNAL playbooks, Studio access, OS policies and AgentOps support. You keep the client relationship; Remparia owns the stack and supervision.",
          },
        ],
      },
    },
    support: {
      fr: {
        eyebrow: "RESSOURCES / SUPPORT",
        title: "Support clients ",
        titleAccent: "en production.",
        sub: "Incidents, accès, connecteurs et seuils : une équipe qui connaît votre OS, pas un ticket générique.",
        ctaPrimary: "Contacter le support",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "Voir AgentOps",
        ctaSecondaryHref: "/demarrer#agentops",
        sections: [
          {
            id: "channels",
            eyebrow: "01 / CANAUX",
            title: "Comment on vous répond",
            list: [
              "Contact dédié pour les environnements en production",
              "Escalade incidents avec logs OS et piste d’audit",
              "Suivi connecteurs, modèles et politiques après mise en service",
            ],
          },
        ],
      },
      en: {
        eyebrow: "RESOURCES / SUPPORT",
        title: "Customer support ",
        titleAccent: "in production.",
        sub: "Incidents, access, connectors and thresholds: a team that knows your OS, not a generic ticket.",
        ctaPrimary: "Contact support",
        ctaPrimaryHref: "/contact",
        ctaSecondary: "See AgentOps",
        ctaSecondaryHref: "/demarrer#agentops",
        sections: [
          {
            id: "channels",
            eyebrow: "01 / CHANNELS",
            title: "How we respond",
            list: [
              "Dedicated contact for production environments",
              "Incident escalation with OS logs and audit trail",
              "Follow-up on connectors, models and policies after go-live",
            ],
          },
        ],
      },
    },
  };

export function resourcesPage(id: ResourcePageId, lang: Lang): PremiumPageCopy {
  return pages[id][lang];
}

export const RESOURCE_PAGE_PATHS: Record<ResourcePageId, string> = {
  blog: "/blog",
  partenariat: "/partenariat",
  support: "/support",
  formation: "/formation",
  supervision: "/supervision",
};
