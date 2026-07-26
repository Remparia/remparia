"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/PageBits";
import { getService, HOME, SERVICES } from "@/lib/content";
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

  return (
    <div className="page page--inner">
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
        <ul className="detail-points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="detail-nav">
          <Link href="/services" className="text-link">
            ← {all.overview}
          </Link>
          <div className="detail-siblings">
            {all.items.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={s.slug === slug ? "is-active" : undefined}
              >
                {s.tag}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </div>
  );
}
