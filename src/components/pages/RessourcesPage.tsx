"use client";

import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageBits";
import { HOME, RESSOURCES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function RessourcesPage() {
  const { lang } = useLang();
  const t = RESSOURCES[lang];
  const cta = HOME[lang];

  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <div className="page page--inner">
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: t.title },
        ]}
      />
      <section className="section">
        <div className="card-grid">
          {t.items.map((item) => (
            <Link key={item.title} href={item.href} className="info-card">
              <div className="info-card__tag">{item.tag}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
