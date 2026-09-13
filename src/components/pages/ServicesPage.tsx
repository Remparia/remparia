"use client";

import {
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import ServiceDiagSection from "@/components/ServiceDiagSection";
import { HOME, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function ServicesPage() {
  const { lang } = useLang();
  const t = SERVICES[lang];
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";

  return (
    <PremiumPageShell>
      <PremiumHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: t.title },
        ]}
      />
      <PremiumSection className="ph-section--tight">
        <div className="video-frame video-frame--native">
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
      </PremiumSection>
      {t.serviceSections.map((section, index) => (
        <div
          key={section.tag}
          className={index % 2 === 0 ? "ph-section--light-wrap" : undefined}
        >
          <ServiceDiagSection content={section} />
        </div>
      ))}
      <PremiumCtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </PremiumPageShell>
  );
}
