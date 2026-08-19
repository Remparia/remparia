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
    name: "Tannous Mekari",
    roleFr: "Cofondateur · Stratégie, business & partenariats",
    roleEn: "Cofounder · Strategy, business & partnerships",
    bioFr:
      "Entrepreneur : connaissance métier et business, sensibilisation growth, développement d’affaires et alliances jusqu’au passage en production. Parcours transformation digitale, retail et innovation, exécution terrain.",
    bioEn:
      "Entrepreneur: domain and business knowledge, growth awareness, business development and partnerships through to production launch. Digital transformation, retail and innovation, field execution.",
    credFr:
      "Transformation digitale · Partenariats & retail · Delivery solutions · Agents supervisés en production",
    credEn:
      "Digital transformation · Partnerships & retail · Solution delivery · Supervised agents in production",
    linkedin: "https://www.linkedin.com/in/tannous-mekari-90098569/",
  }),
  member("2", {
    name: "Sébastien Houzet",
    roleFr: "Cofondateur · Architecture & delivery solutions",
    roleEn: "Cofounder · Architecture & solution delivery",
    bioFr:
      "Forward Development Engineer (FDE) et architecte solutions : conception agentique, intégrations SI et industrialisation avec observabilité. Socle souverain, sécurité by design et transfert aux équipes client.",
    bioEn:
      "Forward Development Engineer (FDE) and solutions architect: agent design, system integration and industrialization with observability. Sovereign foundation, security by design and client team transfer.",
    credFr:
      "Architecture technique · Forward Development Engineer · Intégration · Infra souveraine · Mise en production",
    credEn:
      "Technical architecture · Forward Development Engineer · Integration · Sovereign infra · Production rollout",
    linkedin: "https://www.linkedin.com/in/sebastienhouzet/",
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
      url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.remparia.com",
    },
    ...(person.linkedin ? { sameAs: [person.linkedin] } : {}),
  }));
}
