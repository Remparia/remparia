"use client";

import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageBits";
import { HOME, SECTEURS } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function SecteursPage() {
  const { lang } = useLang();
  const t = SECTEURS[lang];
  const cta = HOME[lang];

  return (
    <div className="page page--inner">
      <PageHero eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="section">
        <div className="card-grid">
          {t.items.map((item) => (
            <Link
              key={item.slug}
              href={`/secteurs/${item.slug}`}
              className="info-card"
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="text-link" style={{ marginTop: 14, display: "inline-block" }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
