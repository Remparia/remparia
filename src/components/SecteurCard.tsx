"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { getSecteurMeta, SECTEUR_CATEGORY_LABELS } from "@/lib/secteurs-meta";
import { useLang } from "@/lib/lang";

export function SecteurCard({
  slug,
  title,
  desc,
  discover,
  delay,
}: {
  slug: string;
  title: string;
  desc: string;
  discover: string;
  delay?: 1 | 2 | 3;
}) {
  const { lang } = useLang();
  const meta = getSecteurMeta(slug);
  const catLabel = SECTEUR_CATEGORY_LABELS[lang][meta.category];

  return (
    <LocaleLink
      href={`/secteurs/${slug}`}
      className="secteur-card reveal"
      {...(delay ? { "data-d": String(delay) } : {})}
    >
      <div className="secteur-card__media media-reveal">
        <Image
          src={meta.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
          className="secteur-card__img"
          unoptimized
        />
        <span className="secteur-card__cat">{catLabel}</span>
      </div>
      <div className="secteur-card__body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span className="secteur-card__cta">{discover}</span>
      </div>
    </LocaleLink>
  );
}
