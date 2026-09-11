"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { Breadcrumbs, type Crumb } from "@/components/PageBits";
import { getSecteurMeta } from "@/lib/secteurs-meta";

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
    <header className="secteur-hero">
      <div className="secteur-hero__copy">
        <div className="reveal">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="page-hero__eyebrow reveal" data-d="1">
          // {eyebrow}
        </div>
        <h1 className="secteur-hero__title clip">{title}</h1>
        <p className="secteur-hero__sub reveal" data-d="2">
          {sub}
        </p>
        <div className="secteur-hero-cta reveal" data-d="3">
          <LocaleLink href={ctaHref} className="btn-primary">
            {ctaLabel}
          </LocaleLink>
          <LocaleLink href={secondaryHref} className="text-link">
            {secondaryLabel} →
          </LocaleLink>
        </div>
      </div>
      <div className="secteur-hero__media media-reveal">
        <Image
          src={meta.image}
          alt=""
          fill
          sizes="(max-width: 960px) 100vw, 48vw"
          className="secteur-hero__img"
          priority
          quality={85}
        />
      </div>
    </header>
  );
}
