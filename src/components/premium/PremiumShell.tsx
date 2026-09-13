"use client";

import LocaleLink from "@/components/LocaleLink";
import { NAV } from "@/lib/content";
import { CONTACT_EMAIL } from "@/lib/contact-email";
import { useLang } from "@/lib/lang";

export type Crumb = {
  name: string;
  href?: string;
};

export function PremiumPageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`page page--premium page--premium-inner${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}

export function PremiumHero({
  eyebrow,
  title,
  titleAccent,
  sub,
  crumbs,
  actions,
  media,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  sub: string;
  crumbs?: Crumb[];
  actions?: React.ReactNode;
  media?: React.ReactNode;
}) {
  const { lang } = useLang();
  const crumbLabel = lang === "fr" ? "Fil d'Ariane" : "Breadcrumb";

  return (
    <header className={`ph-page-hero${media ? " ph-page-hero--split" : ""}`}>
      <div className="ph-shell">
        {crumbs?.length ? (
          <nav className="ph-crumbs" aria-label={crumbLabel}>
            {crumbs.map((item, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <span key={`${item.name}-${index}`} className="ph-crumbs__item">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {item.href && !isLast ? (
                    <LocaleLink href={item.href}>{item.name}</LocaleLink>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined}>
                      {item.name}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        ) : null}
        <div className={media ? "ph-page-hero__grid" : undefined}>
          <div className="ph-page-hero__copy">
            <p className="ph-eyebrow">{eyebrow}</p>
            <h1 className="ph-hero__title">
              {title}
              {titleAccent ? (
                <span className="ph-accent">{titleAccent}</span>
              ) : null}
            </h1>
            <p className="ph-hero__sub">{sub}</p>
            {actions ? (
              <div className="ph-hero__actions">{actions}</div>
            ) : null}
          </div>
          {media ? (
            <div className="ph-page-hero__media">{media}</div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function PremiumSection({
  eyebrow,
  title,
  titleAccent,
  body,
  light = false,
  id,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
  body?: string;
  light?: boolean;
  id?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`ph-section${light ? " ph-section--light" : ""}${className ? ` ${className}` : ""}`}
    >
      <div className="ph-shell">
        {eyebrow ? <p className="ph-eyebrow">{eyebrow}</p> : null}
        {title ? (
          <h2 className="ph-title">
            {title}
            {titleAccent ? (
              <span className="ph-accent">{titleAccent}</span>
            ) : null}
          </h2>
        ) : null}
        {body ? <p className="ph-body">{body}</p> : null}
        {children}
      </div>
    </section>
  );
}

export function PremiumCard({
  title,
  desc,
  tag,
  children,
  className = "",
}: {
  title?: string;
  desc?: string;
  tag?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`ph-agent-card${className ? ` ${className}` : ""}`}>
      {tag ? <span className="ph-agent-card__tag">{tag}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {desc ? <p>{desc}</p> : null}
      {children}
    </article>
  );
}

export function PremiumCtaBand({
  tag,
  title,
  text,
  href = "/demarrer",
  ctaLabel,
}: {
  tag: string;
  title: string;
  text?: string;
  href?: string;
  ctaLabel?: string;
}) {
  const { lang } = useLang();
  const demo = ctaLabel ?? NAV[lang].demo;

  return (
    <section className="ph-cta-band">
      <div className="ph-shell ph-cta-band__inner">
        <p className="ph-cta-band__tag">// {tag}</p>
        <h2 className="ph-cta-band__title">{title}</h2>
        {text ? <p className="ph-cta-band__text">{text}</p> : null}
        <div className="ph-cta-band__actions">
          <LocaleLink href={href} className="ph-cta-band__btn">
            {demo} →
          </LocaleLink>
          <a href={`mailto:${CONTACT_EMAIL}`} className="ph-cta-band__mail">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
