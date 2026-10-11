"use client";

import LocaleLink from "@/components/LocaleLink";
import RoiCalculator from "@/components/RoiCalculator";
import { homePremium } from "@/lib/home-premium";
import { useLang } from "@/lib/lang";

export default function RoiPage() {
  const { lang } = useLang();
  const t = homePremium(lang);
  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <div className="page page--premium page--premium-inner">
      <header className="ph-page-hero">
        <div className="ph-shell">
          <nav className="ph-crumbs" aria-label="Breadcrumb">
            <LocaleLink href="/">{home}</LocaleLink>
            <span aria-hidden>/</span>
            <span>ROI</span>
          </nav>
          <p className="ph-eyebrow">
            {lang === "fr" ? "RESSOURCES / ROI" : "RESOURCES / ROI"}
          </p>
          <h1 className="ph-hero__title">
            {t.roi.titleBefore}
            <span className="ph-accent">{t.roi.titleAccent}</span>
          </h1>
          <p className="ph-hero__sub">{t.roi.note}</p>
        </div>
      </header>
      <section className="ph-section ph-section--light" id="calculateur">
        <div className="ph-shell">
          <RoiCalculator labels={t.roi} />
        </div>
      </section>
    </div>
  );
}
