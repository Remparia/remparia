"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER, NAV } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function SiteFooter() {
  const { lang } = useLang();
  const f = FOOTER[lang];
  const n = NAV[lang];

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Image
            src="/logo-remparia.png"
            alt="Remparia"
            width={160}
            height={28}
            className="footer__logo"
          />
          <p>{f.tagline}</p>
        </div>
        <div>
          <div className="site-footer__title">{f.servicesTitle}</div>
          <Link href="/services">{n.services}</Link>
          <Link href="/methode">{n.methode}</Link>
          <Link href="/secteurs">{n.secteurs}</Link>
        </div>
        <div>
          <div className="site-footer__title">{f.ressourcesTitle}</div>
          <Link href="/realisations">{n.realisations}</Link>
          <Link href="/ressources">{n.ressources}</Link>
          <Link href="/a-propos">{n.aPropos}</Link>
        </div>
        <div>
          <div className="site-footer__title">{f.contactTitle}</div>
          <Link href="/contact">{n.contact}</Link>
          <a href="mailto:contact@remparia.fr">contact@remparia.fr</a>
        </div>
      </div>
      <div className="site-footer__bottom">{f.rights}</div>
    </footer>
  );
}
