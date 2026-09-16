"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import {
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { getService, getServiceImage, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const item = getService(slug, lang);
  const all = SERVICES[lang];
  const home = lang === "fr" ? "Accueil" : "Home";

  if (!item) {
    notFound();
  }

  const siblingIndex = all.items.findIndex((s) => s.slug === slug);
  const flip = siblingIndex % 2 === 1;

  return (
    <PremiumPageShell>
      <PremiumHero
        eyebrow={`${all.title} / ${item.tag}`}
        title={item.title}
        sub={item.desc}
        crumbs={[
          { name: home, href: "/" },
          { name: all.title, href: "/services" },
          { name: item.title },
        ]}
        actions={
          <LocaleLink href="/demarrer" className="btn-primary">
            {all.startCta}
          </LocaleLink>
        }
      />
      <PremiumSection light>
        <div
          className={`service-detail${flip ? " service-detail--flip" : ""}`}
        >
          <div className="service-detail__media">
            <Image
              src={getServiceImage(slug)}
              alt=""
              fill
              sizes="(max-width: 960px) 100vw, 420px"
              className="service-detail__img"
              priority
            />
          </div>
          <div className="service-detail__content">
            <dl className="ph-audit" style={{ marginBottom: 20 }}>
              <div className="ph-audit__row">
                <span>{all.promiseLabel}</span>
                <strong>{item.promise}</strong>
              </div>
              <div className="ph-audit__row">
                <span>{all.deliverableLabel}</span>
                <strong>{item.deliverable}</strong>
              </div>
              <div className="ph-audit__row">
                <span>{all.platformLabel}</span>
                <strong>
                  <LocaleLink href={item.platformHref} className="text-link">
                    {item.platformLabel} →
                  </LocaleLink>
                </strong>
              </div>
            </dl>
            <ul className="detail-points ph-check">
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="detail-nav">
              <LocaleLink href="/services" className="text-link">
                ← {all.overview}
              </LocaleLink>
              <div className="detail-siblings">
                {all.items.map((s) => (
                  <LocaleLink
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className={s.slug === slug ? "is-active" : undefined}
                  >
                    {s.tag}
                  </LocaleLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PremiumSection>
      <PremiumCtaBand
        tag={item.ctaTag}
        title={item.ctaH}
        text={item.ctaP}
        href={item.ctaHref}
        ctaLabel={item.ctaLabel}
      />
    </PremiumPageShell>
  );
}
