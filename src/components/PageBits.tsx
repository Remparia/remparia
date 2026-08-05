"use client";

import LocaleLink from "@/components/LocaleLink";
import { NAV } from "@/lib/content";
import { useLang } from "@/lib/lang";

export type Crumb = {
  name: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { lang } = useLang();
  const label = lang === "fr" ? "Fil d'Ariane" : "Breadcrumb";

  if (!items.length) return null;

  return (
    <nav className="breadcrumbs" aria-label={label}>
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="breadcrumbs__item">
              {item.href && !isLast ? (
                <LocaleLink href={item.href} className="breadcrumbs__link">
                  {item.name}
                </LocaleLink>
              ) : (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.name}
                </span>
              )}
              {!isLast ? (
                <span className="breadcrumbs__sep" aria-hidden>
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
  actions,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  crumbs?: Crumb[];
  actions?: React.ReactNode;
}) {
  return (
    <header className="page-hero">
      {crumbs?.length ? (
        <div className="reveal">
          <Breadcrumbs items={crumbs} />
        </div>
      ) : null}
      <div className="page-hero__eyebrow reveal" data-d="1">
        // {eyebrow}
      </div>
      <h1 className="page-hero__title clip">{title}</h1>
      <p className="page-hero__sub reveal" data-d="2">
        {sub}
      </p>
      {actions ? (
        <div className="page-hero__actions reveal" data-d="3">
          {actions}
        </div>
      ) : null}
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
      <div className="cta__inner reveal">
        <div className="cta__tag">// {tag}</div>
        <h2 className="section__title section__title--lg">{title}</h2>
        {text ? <p className="cta__text">{text}</p> : null}
        <div className="cta__actions">
          <LocaleLink href="/contact" className="cta__btn">
            {demo} →
          </LocaleLink>
          <a href="mailto:contact@remparia.fr" className="cta__mail">
            contact@remparia.fr
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section__tag">// {children}</div>;
}
