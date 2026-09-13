import type { Lang } from "./content";

export type PackRichAgent = {
  title: string;
  forWhom: string;
  does: string;
  skills: readonly string[];
  never: string;
};

export type PackRichPageCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  sub: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
  heroSecteurSlug: string;
  proof: readonly { value: string; label: string; source: string }[];
  workforce: {
    eyebrow: string;
    title: string;
    body: string;
    agents: readonly PackRichAgent[];
  };
  governance: {
    eyebrow: string;
    title: string;
    body: string;
    rules: readonly { title: string; desc: string }[];
  };
  path: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly { title: string; desc: string }[];
    note: string;
  };
  offer: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly {
      index: string;
      title: string;
      duration: string;
      items: readonly string[];
    }[];
  };
  pilot: {
    eyebrow: string;
    title: string;
    rows: readonly { weeks: string; work: string; see: string }[];
  };
  training: {
    eyebrow: string;
    title: string;
    body: string;
    courses: readonly {
      code: string;
      title: string;
      audience: string;
      duration: string;
      outcomes: readonly string[];
    }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    segments: readonly { title: string; desc: string; angle: string }[];
  };
  final: {
    title: string;
    body: string;
    steps: readonly string[];
  };
  agentsHeading: string;
  sectorLinks: readonly { label: string; href: string }[];
};

export type PackRichPageFn = (lang: Lang) => PackRichPageCopy;
