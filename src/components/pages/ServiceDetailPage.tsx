"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/PageBits";
import { getService, getServiceImage, HOME, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const item = getService(slug, lang);
  const all = SERVICES[lang];
  const cta = HOME[lang];
  const home = lang === "fr" ? "Accueil" : "Home";

  if (!item) {
    notFound();
  }

  const siblingIndex = all.items.findIndex((s) => s.slug === slug);
  const flip = siblingIndex % 2 === 1;

  return (
    <div className="page page--premium page--premium-inner">
      <PageHero
        eyebrow={`${all.title} / ${item.tag}`}
        title={item.title}
        sub={item.desc}
        crumbs={[
          { name: home, href: "/" },
          { name: all.title, href: "/services" },
          { name: item.title },
        ]}
      />
      <section className="section">
        <div
          className={`service-detail reveal${flip ? " service-detail--flip" : ""}`}
        >
          <div className="service-detail__media media-reveal">
            <Image
              src={getServiceImage(slug)}
              alt=""
              fill
              sizes="(max-width: 960px) 100vw, 420px"
              className="service-detail__img"
              priority
            />
          </div>
          <div className="service-detail__content reveal" data-d="2">
            <ul className="detail-points">
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
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
