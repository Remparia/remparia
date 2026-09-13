"use client";

import LocaleLink from "@/components/LocaleLink";
import {
  PremiumCtaBand,
  type Crumb,
} from "@/components/premium/PremiumShell";

export type { Crumb };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const label = "Breadcrumb";

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

/** @deprecated Prefer PremiumHero from PremiumShell */
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

/** Unified lime CTA — delegates to PremiumCtaBand */
export function CtaBand({
  tag,
  title,
  text,
  href = "/demarrer",
}: {
  tag: string;
  title: string;
  text?: string;
  href?: string;
}) {
  return <PremiumCtaBand tag={tag} title={title} text={text} href={href} />;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section__tag">// {children}</div>;
}
