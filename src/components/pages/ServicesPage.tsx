"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";
import { CtaBand, PageHero } from "@/components/PageBits";
import { getServiceImage, HOME, SERVICES } from "@/lib/content";
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
      <section className="section">
        <div className="stack-cards">
          {t.items.map((item, index) => (
            <LocaleLink
              key={item.slug}
              href={`/services/${item.slug}`}
              className={`stack-card stack-card--link stack-card--media reveal${
                index % 2 === 1 ? " stack-card--media-flip" : ""
              }`}
              data-d={String(Math.min((index % 3) + 1, 3))}
            >
              <div className="stack-card__media media-reveal">
                <Image
                  src={getServiceImage(item.slug)}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 680px"
                  className="stack-card__img"
                />
              </div>
              <div className="stack-card__body">
                <div className="stack-card__tag">{item.tag}</div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <ul>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <span
                    className="text-link"
                    style={{ marginTop: 16, display: "inline-block" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </LocaleLink>
          ))}
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
