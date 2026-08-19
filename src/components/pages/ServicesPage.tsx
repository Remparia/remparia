"use client";

import { CtaBand, PageHero, SectionLabel } from "@/components/PageBits";
import ServiceDiagSection from "@/components/ServiceDiagSection";
import { HOME, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function ServicesPage() {
  const { lang } = useLang();
  const t = SERVICES[lang];
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
        <p className="section__body reveal">{t.intro}</p>
        <div className="reveal" style={{ marginTop: 40 }}>
          <SectionLabel>{t.commitmentTitle}</SectionLabel>
          <ul className="proof-badges" style={{ marginTop: 20 }}>
            {t.commitments.map((line, i) => (
              <li
                key={line}
                className="proof-badges__item"
                data-d={String(Math.min((i % 3) + 1, 3))}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ marginTop: 40 }}>
          <SectionLabel>{t.scopeTitle}</SectionLabel>
          <p className="section__body" style={{ marginTop: 16 }}>
            {t.scopeBody}
          </p>
        </div>
      </section>
      {t.serviceSections.map((section) => (
        <ServiceDiagSection key={section.tag} content={section} />
      ))}
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
