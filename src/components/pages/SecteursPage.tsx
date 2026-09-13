"use client";

import { useMemo, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { SecteurCard } from "@/components/SecteurCard";
import {
  PremiumCtaBand,
  PremiumHero,
  PremiumPageShell,
  PremiumSection,
} from "@/components/premium/PremiumShell";
import { HOME, SECTEURS } from "@/lib/content";
import {
  getSecteurMeta,
  SECTEUR_CATEGORY_LABELS,
  type SecteurCategory,
} from "@/lib/secteurs-meta";
import { useLang } from "@/lib/lang";

type FilterKey = "all" | SecteurCategory;

export default function SecteursPage() {
  const { lang } = useLang();
  const t = SECTEURS[lang];
  const cta = HOME[lang];
  const cats = SECTEUR_CATEGORY_LABELS[lang];
  const home = lang === "fr" ? "Accueil" : "Home";
  const label = lang === "fr" ? "Secteurs" : "Industries";

  const [filter, setFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: cats.all },
    { key: "industries", label: cats.industries },
    { key: "professions", label: cats.professions },
    { key: "commerce", label: cats.commerce },
    { key: "operations", label: cats.operations },
    { key: "organisation", label: cats.organisation },
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return t.items.filter((item) => {
      const meta = getSecteurMeta(item.slug);
      if (filter !== "all" && meta.category !== filter) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      );
    });
  }, [t.items, filter, query]);

  return (
    <PremiumPageShell>
      <PremiumHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: label },
        ]}
      />

      <PremiumSection
        eyebrow={lang === "fr" ? "01 / MÉTIERS" : "01 / INDUSTRIES"}
        title={lang === "fr" ? "Explorer les métiers" : "Browse industries"}
      >
        <div className="secteur-hub__toolbar" style={{ marginTop: 28 }}>
          <div
            className="secteur-filters"
            role="group"
            aria-label={t.filterLabel}
          >
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={filter === f.key}
                className={
                  filter === f.key
                    ? "secteur-filters__btn is-active"
                    : "secteur-filters__btn"
                }
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <label className="secteur-search">
            <span className="sr-only">{t.searchPlaceholder}</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
            />
          </label>
        </div>

        <p className="secteur-hub__count" style={{ marginTop: 16 }}>
          {filtered.length} {t.results}
        </p>

        <div className="secteur-hub-grid" style={{ marginTop: 24 }}>
          {filtered.map((item, i) => (
            <SecteurCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              desc={item.desc}
              discover={t.discover}
              delay={((i % 3) + 1) as 1 | 2 | 3}
            />
          ))}
        </div>
      </PremiumSection>

      <PremiumSection
        light
        eyebrow={lang === "fr" ? "02 / ALLER PLUS LOIN" : "02 / GO FURTHER"}
        title={t.hubMoreTitle}
      >
        <div className="secteur-hub-links" style={{ marginTop: 24 }}>
          {t.hubLinks.map((link) => (
            <LocaleLink key={link.href} href={link.href} className="text-link">
              {link.label} →
            </LocaleLink>
          ))}
        </div>
      </PremiumSection>

      <PremiumCtaBand tag={cta.ctaTag} title={cta.ctaH} text={cta.ctaP} />
    </PremiumPageShell>
  );
}
