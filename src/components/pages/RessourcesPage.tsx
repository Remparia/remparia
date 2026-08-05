"use client";

import LocaleLink from "@/components/LocaleLink";
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
          {t.items.map((item, i) => (
            <LocaleLink
              key={item.title}
              href={item.href}
              className="info-card reveal"
              data-d={String(Math.min((i % 3) + 1, 3))}
            >
              <div className="info-card__tag">{item.tag}</div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </LocaleLink>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
