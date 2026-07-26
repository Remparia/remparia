"use client";

import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageBits";
import { HOME, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function ServicesPage() {
  const { lang } = useLang();
  const t = SERVICES[lang];
  const cta = HOME[lang];

  return (
    <div className="page page--inner">
      <PageHero eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <section className="section">
        <div className="stack-cards">
          {t.items.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="stack-card stack-card--link"
            >
              <div className="stack-card__tag">{item.tag}</div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <ul>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <span className="text-link" style={{ marginTop: 16, display: "inline-block" }}>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
