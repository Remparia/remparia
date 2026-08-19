"use client";

import LocaleLink from "@/components/LocaleLink";
import { PageHero } from "@/components/PageBits";
import { resetCookieConsent } from "@/lib/cookie-consent";
import {
  COOKIE_TABLE,
  ANALYTICS_DATA,
  getLegalPage,
  type LegalPageKey,
} from "@/lib/legal";
import { useLang } from "@/lib/lang";

const TITLES: Record<LegalPageKey, { fr: string; en: string }> = {
  mentions: { fr: "Mentions légales", en: "Legal notice" },
  confidentialite: { fr: "Confidentialité", en: "Privacy" },
  cookies: { fr: "Cookies", en: "Cookies" },
};

export default function LegalDocPage({ page }: { page: LegalPageKey }) {
  const { lang } = useLang();
  const t = getLegalPage(page, lang);
  const home = lang === "fr" ? "Accueil" : "Home";
  const crumb = TITLES[page][lang];
  const cookieTable = page === "cookies" ? COOKIE_TABLE[lang] : null;
  const analyticsData = page === "cookies" ? ANALYTICS_DATA[lang] : null;

  return (
    <div className="page page--inner">
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        crumbs={[
          { name: home, href: "/" },
          { name: crumb },
        ]}
      />
      <section className="section legal-doc">
        {t.sections.map((section) => (
          <article key={section.title} className="legal-doc__block reveal">
            <h2 className="legal-doc__title">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="section__body">
                {p}
              </p>
            ))}
          </article>
        ))}

        {cookieTable ? (
          <article className="legal-doc__block reveal">
            <h2 className="legal-doc__title">{cookieTable.title}</h2>
            <p className="section__body">{cookieTable.intro}</p>
            <div className="cookie-table-wrap">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th scope="col">{cookieTable.headers.name}</th>
                    <th scope="col">{cookieTable.headers.purpose}</th>
                    <th scope="col">{cookieTable.headers.duration}</th>
                    <th scope="col">{cookieTable.headers.type}</th>
                    <th scope="col">{cookieTable.headers.provider}</th>
                    <th scope="col">{cookieTable.headers.basis}</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.rows.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <code>{row.name}</code>
                      </td>
                      <td>{row.purpose}</td>
                      <td>{row.duration}</td>
                      <td>{row.type}</td>
                      <td>{row.provider}</td>
                      <td>{row.basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ) : null}

        {analyticsData ? (
          <article className="legal-doc__block reveal">
            <h2 className="legal-doc__title">{analyticsData.title}</h2>
            <p className="section__body">{analyticsData.intro}</p>
            <ul className="cookie-data-list">
              {analyticsData.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ) : null}

        {page === "cookies" ? (
          <p className="section__body reveal">
            {lang === "fr" ? (
              <>
                Voir aussi la{" "}
                <LocaleLink href="/confidentialite">
                  politique de confidentialité
                </LocaleLink>
                .
              </>
            ) : (
              <>
                See also the{" "}
                <LocaleLink href="/confidentialite">privacy policy</LocaleLink>.
              </>
            )}
          </p>
        ) : null}

        {page === "confidentialite" ? (
          <p className="section__body reveal">
            {lang === "fr" ? (
              <>
                Inventaire détaillé des cookies :{" "}
                <LocaleLink href="/cookies">page Cookies</LocaleLink>.
              </>
            ) : (
              <>
                Detailed cookie inventory:{" "}
                <LocaleLink href="/cookies">Cookies page</LocaleLink>.
              </>
            )}
          </p>
        ) : null}

        {page === "cookies" ? (
          <button
            type="button"
            className="btn-primary legal-doc__prefs"
            onClick={() => resetCookieConsent()}
          >
            {lang === "fr" ? "Gérer les cookies" : "Cookie settings"} →
          </button>
        ) : null}
      </section>
    </div>
  );
}
