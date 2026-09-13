"use client";

import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCard,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { useLang } from "@/lib/lang";

const COPY = {
  fr: {
    crumb: "404",
    home: "Accueil",
    eyebrow: "404",
    title: "Page introuvable",
    sub: "Cette URL n’existe pas ou a été déplacée. Reprenez depuis l’accueil, ou continuez vers une page utile.",
    homeCta: "Retour à l’accueil →",
    signalCta: "Protocole SIGNAL →",
    whereTitle: "Où continuer",
    whereEyebrow: "01 / Raccourcis",
    links: [
      {
        href: "/signal",
        tag: "MÉTHODE",
        title: "SIGNAL",
        desc: "Le protocole pour cadrer un premier agent métier.",
      },
      {
        href: "/services",
        tag: "OFFRE",
        title: "Services",
        desc: "Diagnostic, construction, transfert — sans boîte noire.",
      },
      {
        href: "/secteurs",
        tag: "MÉTIERS",
        title: "Secteurs",
        desc: "Finance, santé, commerce, ops — là où le générique échoue.",
      },
      {
        href: "/contact",
        tag: "CONTACT",
        title: "Nous écrire",
        desc: "Une question précise ? On vous répond.",
      },
    ],
  },
  en: {
    crumb: "404",
    home: "Home",
    eyebrow: "404",
    title: "Page not found",
    sub: "This URL doesn’t exist or has moved. Head home, or jump to a useful page.",
    homeCta: "Back to home →",
    signalCta: "SIGNAL protocol →",
    whereTitle: "Where to go next",
    whereEyebrow: "01 / Shortcuts",
    links: [
      {
        href: "/signal",
        tag: "METHOD",
        title: "SIGNAL",
        desc: "The protocol to scope a first domain agent.",
      },
      {
        href: "/services",
        tag: "OFFER",
        title: "Services",
        desc: "Diagnose, build, transfer — no black box.",
      },
      {
        href: "/secteurs",
        tag: "SECTORS",
        title: "Sectors",
        desc: "Finance, health, commerce, ops — where generics fail.",
      },
      {
        href: "/contact",
        tag: "CONTACT",
        title: "Contact us",
        desc: "A precise question? We’ll answer.",
      },
    ],
  },
} as const;

export default function NotFoundPage() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <PremiumPageShell className="page--404">
      <PremiumHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: t.home, href: "/" },
          { name: t.crumb },
        ]}
        actions={
          <>
            <LocaleLink href="/" className="btn-primary">
              {t.homeCta}
            </LocaleLink>
            <LocaleLink href="/signal" className="btn-ghost">
              {t.signalCta}
            </LocaleLink>
          </>
        }
        media={
          <div className="ph-404__mark" aria-hidden>
            <span>404</span>
          </div>
        }
      />

      <PremiumSection light eyebrow={t.whereEyebrow} title={t.whereTitle}>
        <div className="ph-workforce ph-404__links">
          {t.links.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              className="ph-404__link"
            >
              <PremiumCard tag={link.tag} title={link.title} desc={link.desc} />
            </LocaleLink>
          ))}
        </div>
      </PremiumSection>
    </PremiumPageShell>
  );
}
