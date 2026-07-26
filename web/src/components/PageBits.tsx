"use client";

import Link from "next/link";
import { NAV } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <header className="page-hero">
      <div className="page-hero__eyebrow">// {eyebrow}</div>
      <h1 className="page-hero__title">{title}</h1>
      <p className="page-hero__sub">{sub}</p>
    </header>
  );
}

export function CtaBand({
  tag,
  title,
  text,
}: {
  tag: string;
  title: string;
  text?: string;
}) {
  const { lang } = useLang();
  const demo = NAV[lang].demo;

  return (
    <section className="cta">
      <div className="cta__star" aria-hidden>
        ✳
      </div>
      <div className="cta__inner">
        <div className="cta__tag">// {tag}</div>
        <h2 className="section__title section__title--lg">{title}</h2>
        {text ? <p className="cta__text">{text}</p> : null}
        <div className="cta__actions">
          <Link href="/contact" className="cta__btn">
            {demo} →
          </Link>
          <span className="cta__mail">contact@remparia.fr</span>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return <div className="section__tag">// {children}</div>;
}
