import type { Lang } from "@/lib/content";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string;
  linkedin?: string;
};

function teamEnv(key: string, fallback: string) {
  return process.env[key]?.trim() || fallback;
}

function member(
  id: "1" | "2",
  defaults: {
    name: string;
    roleFr: string;
    roleEn: string;
    bioFr: string;
    bioEn: string;
    credFr: string;
    credEn: string;
    linkedin: string;
  },
): { fr: TeamMember; en: TeamMember } {
  const prefix = `TEAM_${id}`;
  const name = teamEnv(`${prefix}_NAME`, defaults.name);
  const linkedin = teamEnv(`${prefix}_LINKEDIN`, defaults.linkedin);
  return {
    fr: {
      id,
      name,
      role: teamEnv(`${prefix}_ROLE_FR`, defaults.roleFr),
      bio: teamEnv(`${prefix}_BIO_FR`, defaults.bioFr),
      credentials: teamEnv(`${prefix}_CREDENTIALS_FR`, defaults.credFr),
      linkedin: linkedin || undefined,
    },
    en: {
      id,
      name,
      role: teamEnv(`${prefix}_ROLE_EN`, defaults.roleEn),
      bio: teamEnv(`${prefix}_BIO_EN`, defaults.bioEn),
      credentials: teamEnv(`${prefix}_CREDENTIALS_EN`, defaults.credEn),
      linkedin: linkedin || undefined,
    },
  };
}

const MEMBERS = [
  member("1", {
    name: "Prénom Nom",
    roleFr: "Associé — Stratégie & delivery",
    roleEn: "Partner — Strategy & delivery",
    bioFr:
      "Cadrage SIGNAL, gouvernance données et pilotage des gains jusqu'à l'adoption terrain. Parcours conseil et métiers réglementés.",
    bioEn:
      "SIGNAL scoping, data governance and outcome steering through to field adoption. Consulting and regulated professions background.",
    credFr: "15+ ans conseil · Finance & assurance · Production d'agents supervisés",
    credEn: "15+ years consulting · Finance & insurance · Supervised agents in production",
    linkedin: "https://www.linkedin.com/in/",
  }),
  member("2", {
    name: "Prénom Nom",
    roleFr: "Associé — Ingénierie & solutions",
    roleEn: "Partner — Engineering & solutions",
    bioFr:
      "Architecture agentique, intégrations SI et passage en production avec observabilité. Sécurité by design et transfert aux équipes client.",
    bioEn:
      "Agent architecture, system integration and production launch with observability. Security by design and client team transfer.",
    credFr: "Lead tech & produit · Infra souveraine · Intégrations CRM/ERP",
    credEn: "Lead tech & product · Sovereign infra · CRM/ERP integrations",
    linkedin: "https://www.linkedin.com/in/",
  }),
];

export function getTeamMembers(lang: Lang): TeamMember[] {
  return MEMBERS.map((m) => m[lang]);
}

export function teamPeopleJsonLd(lang: Lang = "fr") {
  return getTeamMembers(lang).map((person) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    description: person.bio,
    worksFor: {
      "@type": "Organization",
      name: "Remparia",
    },
    ...(person.linkedin ? { sameAs: [person.linkedin] } : {}),
  }));
}
