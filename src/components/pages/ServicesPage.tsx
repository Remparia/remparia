"use client";

import { CtaBand, PageHero } from "@/components/PageBits";
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
      <section className="section section--services-media">
        <div className="reveal video-frame video-frame--native">
          <video
            src="/secteurs/home/mais_personnes_max.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={
              lang === "fr"
                ? "Remparia — Innover avec l'IA. Sans abandonner le contrôle."
                : "Remparia — Innovate with AI. Without giving up control."
            }
          />
        </div>
      </section>
      {t.serviceSections.map((section) => (
        <ServiceDiagSection key={section.tag} content={section} />
      ))}
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
