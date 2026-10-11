"use client";

import LocaleLink from "@/components/LocaleLink";
import PageFaq from "@/components/PageFaq";
import { homePremium } from "@/lib/home-premium";
import { useLang } from "@/lib/lang";

export default function FaqPage() {
  const { lang } = useLang();
  const t = homePremium(lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const eyebrow = lang === "fr" ? "RESSOURCES / FAQ" : "RESOURCES / FAQ";
  const title =
    lang === "fr" ? "Questions fréquentes" : "Frequently asked questions";
  const sub =
    lang === "fr"
      ? "Ce que Remparia est, concrètement, avant le premier agent."
      : "What Remparia is, in concrete terms, before the first agent.";

  return (
    <div className="page page--premium page--premium-inner">
      <header className="ph-page-hero">
        <div className="ph-shell">
          <nav className="ph-crumbs" aria-label="Breadcrumb">
            <LocaleLink href="/">{home}</LocaleLink>
            <span aria-hidden>/</span>
            <span>FAQ</span>
          </nav>
          <p className="ph-eyebrow">{eyebrow}</p>
          <h1 className="ph-hero__title">{title}</h1>
          <p className="ph-hero__sub">{sub}</p>
          <div className="ph-hero__actions">
            <LocaleLink href="/demarrer" className="btn-primary">
              {lang === "fr" ? "Réserver SIGNAL" : "Book SIGNAL"} →
            </LocaleLink>
            <LocaleLink href="/contact" className="btn-ghost">
              {lang === "fr" ? "Contacter" : "Contact"}
            </LocaleLink>
          </div>
        </div>
      </header>
      <PageFaq
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        sub={t.faq.sub}
        items={t.faq.items}
      />
    </div>
  );
}
