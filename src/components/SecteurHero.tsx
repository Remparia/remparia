"use client";

import Image from "next/image";
import Link from "next/link";
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
  secondaryHref = "/methode",
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
        <Breadcrumbs items={crumbs} />
        <div className="page-hero__eyebrow">// {eyebrow}</div>
        <h1 className="secteur-hero__title">{title}</h1>
        <p className="secteur-hero__sub">{sub}</p>
        <div className="secteur-hero-cta">
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
          <Link href={secondaryHref} className="text-link">
            {secondaryLabel} →
          </Link>
        </div>
      </div>
      <div className="secteur-hero__media">
        <Image
          src={meta.image}
          alt=""
          fill
          sizes="(max-width: 960px) 100vw, 48vw"
          className="secteur-hero__img"
          priority
          unoptimized
        />
      </div>
    </header>
  );
}
