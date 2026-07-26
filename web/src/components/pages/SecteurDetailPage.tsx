"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/PageBits";
import { getSecteur, HOME, SECTEURS } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function SecteurDetailPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const item = getSecteur(slug, lang);
  const all = SECTEURS[lang];
  const cta = HOME[lang];

  if (!item) {
    notFound();
  }

  return (
    <div className="page page--inner">
      <PageHero eyebrow={all.eyebrow} title={item.title} sub={item.desc} />
      <section className="section">
        <p className="section__body">
          {lang === "fr"
            ? "Cette page dédiée accueillera bientôt le détail des cas d'usage, contraintes et approches Remparia pour ce secteur."
            : "This dedicated page will soon host detailed use cases, constraints and Remparia approaches for this industry."}
        </p>
        <div className="detail-nav">
          <Link href="/secteurs" className="text-link">
            ← {all.overview}
          </Link>
          <div className="detail-siblings">
            {all.items.map((s) => (
              <Link
                key={s.slug}
                href={`/secteurs/${s.slug}`}
                className={s.slug === slug ? "is-active" : undefined}
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
