"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { getSecteurMeta } from "@/lib/secteurs-meta";
import type { Crumb } from "@/components/PageBits";

export function SecteurHero({
  slug,
  title,
  eyebrow,
  sub,
  crumbs,
  ctaLabel,
  ctaHref = "/contact",
  secondaryLabel,
  secondaryHref = "/signal",
}: {
  slug: string;
  title: string;
  eyebrow: string;
  sub: string;
  crumbs: Crumb[];
  ctaLabel: string;
  ctaHref?: string;
  secondaryLabel: string;
  secondaryHref?: string;
}) {
  const meta = getSecteurMeta(slug);

  return (
    <PremiumHero
      eyebrow={eyebrow}
      title={title}
      sub={sub}
      crumbs={crumbs}
      actions={
        <>
          <LocaleLink href={ctaHref} className="btn-primary">
            {ctaLabel}
          </LocaleLink>
          <LocaleLink href={secondaryHref} className="btn-ghost">
            {secondaryLabel} →
          </LocaleLink>
        </>
      }
      media={
        <Image
          src={meta.image}
          alt=""
          fill
          sizes="(max-width: 960px) 100vw, 48vw"
          priority
          quality={85}
        />
      }
    />
  );
}

export { PremiumPageShell, PremiumSection, PremiumCtaBand };
