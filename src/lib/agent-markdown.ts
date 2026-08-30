import { CONTACT_EMAIL } from "@/lib/contact-email";
import {
  APROPOS,
  FOOTER,
  METHODE,
  NAV,
  NAV_IA,
  SECTEURS,
  SERVICES,
  getSecteur,
  getSecteurDetail,
  getService,
  type Lang,
} from "@/lib/content";
import { homePremium } from "@/lib/home-premium";
import { withLocale, type Locale } from "@/lib/i18n";
import { PAGES_PREMIUM, premiumPage } from "@/lib/pages-premium";
import { SITE, getSiteUrl } from "@/lib/seo";
import { osPage } from "@/lib/os-page";
import { signalPage } from "@/lib/signal-page";
import {
  CAS_USAGE,
  DEMARRER,
  POUR_QUI,
  SOLUTION,
} from "@/lib/strategy";

type PremiumKey = keyof typeof PAGES_PREMIUM;

type MdOpts = { lang: Lang; locale: Locale };

function abs(locale: Locale, path: string) {
  const logical = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${withLocale(locale, logical)}`;
}

function mdLink(label: string, locale: Locale, path: string) {
  return `[${label}](${abs(locale, path)})`;
}

function lines(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join("\n");
}

function section(title: string, body: string) {
  return lines(`## ${title}`, "", body.trim(), "");
}

function bullets(items: readonly string[]) {
  return items.map((i) => `- ${i}`).join("\n");
}

function fromPremium(key: PremiumKey, { lang, locale }: MdOpts) {
  const c = premiumPage(key, lang);
  const title = `${c.title}${c.titleAccent ?? ""}`;
  const blocks = (c.sections ?? [])
    .map((s) => {
      const bits: string[] = [`### ${s.title}`, ""];
      if (s.body) bits.push(s.body, "");
      if (s.blocks?.length) {
        bits.push(
          ...s.blocks.flatMap((b) => [`#### ${b.title}`, "", b.desc, ""]),
        );
      }
      if (s.list?.length) bits.push(bullets(s.list), "");
      if (s.rows?.length) {
        bits.push(
          ...s.rows.map((r) => `- **${r.label}**: ${r.value}`),
          "",
        );
      }
      if (s.flow?.length) bits.push(bullets(s.flow), "");
      if (s.note) bits.push(`_${s.note}_`, "");
      return bits.join("\n");
    })
    .join("\n");

  return lines(
    `# ${title}`,
    "",
    `> ${c.eyebrow}`,
    "",
    c.sub,
    "",
    blocks,
    `**CTA:** ${mdLink(c.ctaPrimary, locale, c.ctaPrimaryHref)}`,
    c.ctaSecondary && c.ctaSecondaryHref
      ? `**Secondary:** ${mdLink(c.ctaSecondary, locale, c.ctaSecondaryHref)}`
      : null,
    "",
  );
}

function homeMd({ lang, locale }: MdOpts) {
  const t = homePremium(lang);
  const heroTitle = `${t.hero.titleBefore}${t.hero.titleAccent}${t.hero.titleAfter}`;
  return lines(
    `# Remparia`,
    "",
    heroTitle,
    "",
    t.hero.sub,
    "",
    bullets(t.hero.badges),
    "",
    `**Primary:** ${mdLink(t.hero.ctaPrimary, locale, "/demarrer")}`,
    `**Secondary:** ${mdLink(t.hero.ctaSecondary, locale, "/solution")}`,
    "",
    section(
      `${t.problem.titleBefore}${t.problem.titleAccent}`,
      lines(
        `${t.problem.sideLead} ${t.problem.sideRest}${t.problem.sideAccent}`,
        "",
        `| ${t.problem.today} | ${t.problem.withUs} |`,
        `| --- | --- |`,
        ...t.problem.rows.map((r) => `| ${r.today} | ${r.withUs} |`),
      ),
    ),
    section(
      t.model.title,
      t.model.steps
        .map(
          (s) =>
            lines(
              `### ${s.n} — ${s.tag}: ${s.title}`,
              "",
              s.desc,
              "",
              bullets(s.items),
            ),
        )
        .join("\n\n"),
    ),
    section(
      `${t.org.titleBefore}${t.org.titleAccent}`,
      lines(
        t.org.body,
        "",
        "### Activity log",
        "",
        bullets(t.org.logs.map((l) => `${l.title} (${l.time})`)),
        "",
        `- **${t.org.human.title}**: ${t.org.human.desc}`,
        `- **${t.org.orchestrator.title}**: ${t.org.orchestrator.desc}`,
        ...t.org.agents.map((a) => `- **${a.title}**: ${a.desc}`),
        "",
        `Tools: ${t.org.tools.map((x) => x.label).join(", ")}`,
      ),
    ),
    section(
      `${t.workforce.titleBefore}${t.workforce.titleAccent}`,
      lines(
        t.workforce.body,
        "",
        ...t.workforce.agents.map((a) =>
          lines(
            `### ${a.title}`,
            "",
            a.desc,
            "href" in a && a.href
              ? mdLink(lang === "fr" ? "Ouvrir" : "Open", locale, a.href)
              : null,
          ),
        ),
      ),
    ),
    section(
      `${t.sovereignty.titleBefore}${t.sovereignty.titleAccent}`,
      t.sovereignty.modes
        .map((m) =>
          lines(
            `### ${m.title}`,
            "",
            m.subtitle,
            "boundary" in m && m.boundary ? `\n_${m.boundary}` : null,
            "",
            bullets(m.features),
            "",
            m.tagline,
          ),
        )
        .join("\n\n"),
    ),
    section(
      `${t.industries.titleBefore}${t.industries.titleAccent}${t.industries.titleAfter}`,
      lines(
        t.industries.body,
        "",
        ...t.industries.tabs.map((tab) =>
          lines(
            `### ${tab.title}`,
            "",
            bullets(tab.agents.map((a) => `**${a.name}** — ${a.desc}`)),
            "",
            `Tools: ${tab.tools.map((x) => x.label).join(", ")}`,
            "",
            mdLink(tab.cta, locale, `/solutions/${tab.id}`),
          ),
        ),
      ),
    ),
    siteIndex({ lang, locale }),
  );
}

function solutionMd({ lang, locale }: MdOpts) {
  const t = osPage(lang);
  return lines(
    `# ${t.hero.index}`,
    "",
    `${t.hero.titleBefore}${t.hero.titleAccent}`,
    "",
    t.hero.sub,
    "",
    `**CTA:** ${mdLink(t.hero.ctaPrimary, locale, t.hero.ctaPrimaryHref)}`,
    "",
    section(
      t.chaos.title,
      lines(t.chaos.body, "", `- ${t.chaos.without}`, `- ${t.chaos.with}`),
    ),
    section(
      t.controlPlane.title,
      bullets(t.controlPlane.layers.map((l) => `**${l.label}** — ${l.detail}`)),
    ),
    section(
      t.capabilities.title,
      t.capabilities.items
        .map((c) =>
          lines(`### ${c.label} — ${c.title}`, "", c.body, "", bullets(c.bullets)),
        )
        .join("\n\n"),
    ),
    section(
      t.final.title,
      lines(
        mdLink(t.final.ctaPrimary, locale, t.final.ctaPrimaryHref),
        mdLink(t.final.ctaSecondary, locale, t.final.ctaSecondaryHref),
      ),
    ),
    siteIndex({ lang, locale }),
  );
}

function pourQuiMd({ lang, locale }: MdOpts) {
  const t = POUR_QUI[lang];
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    section(
      t.familiesTitle,
      t.families
        .map((f) =>
          lines(
            `### ${f.tag} — ${f.title}`,
            "",
            f.desc,
            "",
            bullets(f.hrefs.map((h) => mdLink(h.label, locale, h.href))),
          ),
        )
        .join("\n\n"),
    ),
    section(t.openTitle, t.openBody),
    section(t.notTitle, bullets(t.notItems)),
    `**CTA:** ${mdLink(t.ctaPrimary, locale, "/demarrer")}`,
    `**Secondary:** ${mdLink(t.ctaSecondary, locale, "/cas-d-usage")}`,
    "",
  );
}

function casUsageMd({ lang, locale }: MdOpts) {
  const t = CAS_USAGE[lang];
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    ...t.items.map((item) =>
      lines(
        `## ${item.process}`,
        "",
        `- **Today:** ${item.today}`,
        `- **With agent:** ${item.withAgent}`,
        `- **Never:** ${item.never}`,
        `- **Measure:** ${item.measure}`,
        "",
      ),
    ),
    siteIndex({ lang, locale }),
  );
}

function demarrerMd({ lang, locale }: MdOpts) {
  const t = DEMARRER[lang];
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    ...t.paths.map((p) =>
      lines(
        `## ${p.tag} — ${p.title}`,
        "",
        `- **For:** ${p.forWho}`,
        `- **What:** ${p.what}`,
        `- **Leave with:** ${p.leaveWith}`,
        `- **Duration:** ${p.duration}`,
        `- **Price:** ${p.price}`,
        `- **Next:** ${p.next}`,
        "",
      ),
    ),
    section(t.pricingTitle, t.pricingBody),
    section(t.nextTitle, t.nextBody),
    section(
      t.methodTitle,
      lines(t.methodBody, "", mdLink(t.methodCta, locale, "/signal")),
    ),
    `**CTA:** ${mdLink(t.ctaPrimary, locale, "/contact")}`,
    `**Secondary:** ${mdLink(t.ctaSecondary, locale, "/solution")}`,
    "",
  );
}

function methodeMd({ lang, locale }: MdOpts) {
  const t = METHODE[lang];
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    section(t.aloneTitle, lines(t.aloneBody, "", mdLink(t.aloneCta, locale, "/solution"))),
    section(
      t.protocolTitle,
      lines(
        t.protocolIntro,
        "",
        ...t.steps.map((s) =>
          lines(
            `### ${s.letter} — ${s.title}`,
            "",
            s.desc,
            "",
            `- **Deliverable:** ${s.deliverable}`,
            `- **Timeline:** ${s.timeline}`,
            `- **Artifacts:** ${s.artifacts}`,
          ),
        ),
      ),
    ),
    section(t.governanceH, bullets(t.governanceItems)),
    section(t.differenceH, t.differenceP),
    siteIndex({ lang, locale }),
  );
}

function servicesMd({ lang, locale }: MdOpts) {
  const t = SERVICES[lang];
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    t.intro,
    "",
    section(t.commitmentTitle, bullets(t.commitments)),
    section(t.scopeTitle, t.scopeBody),
    ...t.serviceSections.map((s) =>
      lines(
        `## ${s.tag} — ${s.title}`,
        "",
        s.desc,
        "",
        bullets(s.points.map((p) => p.label)),
        "",
        mdLink(lang === "fr" ? "Ouvrir" : "Open", locale, s.ctaHref),
        "",
      ),
    ),
    section(
      lang === "fr" ? "Catalogue" : "Catalog",
      bullets(
        t.items.map((i) => mdLink(i.title, locale, `/services/${i.slug}`)),
      ),
    ),
  );
}

function serviceDetailMd(slug: string, { lang, locale }: MdOpts) {
  const s = getService(slug, lang);
  if (!s) return fallbackMd({ lang, locale });
  return lines(
    `# ${s.title}`,
    "",
    s.desc,
    "",
    mdLink(
      lang === "fr" ? "Tous les services" : "All services",
      locale,
      "/services",
    ),
    "",
    siteIndex({ lang, locale }),
  );
}

function secteursMd({ lang, locale }: MdOpts) {
  const t = SECTEURS[lang];
  return lines(
    `# ${t.title}`,
    "",
    t.sub ?? "",
    "",
    bullets(t.items.map((i) => mdLink(i.title, locale, `/secteurs/${i.slug}`))),
    "",
    siteIndex({ lang, locale }),
  );
}

function secteurDetailMd(slug: string, { lang, locale }: MdOpts) {
  const item = getSecteur(slug, lang);
  const detail = getSecteurDetail(slug, lang);
  if (!item && !detail) return fallbackMd({ lang, locale });
  const title = detail?.heroH ?? item?.title ?? slug;
  const intro = detail?.heroP ?? item?.desc ?? "";
  return lines(
    `# ${title}`,
    "",
    intro,
    "",
    detail?.signals?.length
      ? section(
          lang === "fr" ? "Signaux" : "Signals",
          bullets(detail.signals.map((s) => `**${s.value}** — ${s.label}`)),
        )
      : null,
    detail?.pains?.length
      ? section(
          lang === "fr" ? "Frictions" : "Pains",
          detail.pains
            .map((p) => lines(`### ${p.title}`, "", p.desc))
            .join("\n\n"),
        )
      : null,
    detail?.deliverables?.length
      ? section(
          lang === "fr" ? "Livrables" : "Deliverables",
          bullets(detail.deliverables),
        )
      : null,
    detail?.faqs?.length
      ? section(
          "FAQ",
          detail.faqs
            .map((f) => lines(`### ${f.q}`, "", f.a))
            .join("\n\n"),
        )
      : null,
    mdLink(
      lang === "fr" ? "Tous les métiers" : "All professions",
      locale,
      "/secteurs",
    ),
    "",
    siteIndex({ lang, locale }),
  );
}

function aproposMd({ lang, locale }: MdOpts) {
  const t = APROPOS[lang];
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    section(t.convictionH, t.convictionP),
    section(
      t.collectiveTitle,
      lines(
        t.collectiveSub,
        "",
        ...t.collective.map((c) =>
          lines(`### ${c.tag} — ${c.title}`, "", c.desc),
        ),
      ),
    ),
    section(t.engagementTitle, bullets(t.engagement)),
    `**Contact:** [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})`,
    "",
    siteIndex({ lang, locale }),
  );
}

function contactMd({ lang, locale }: MdOpts) {
  return lines(
    `# ${lang === "fr" ? "Contact" : "Contact"}`,
    "",
    lang === "fr"
      ? "Réserver une session SIGNAL ou écrire à l’équipe Remparia."
      : "Book a SIGNAL session or write to the Remparia team.",
    "",
    `- **Email:** [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL})`,
    `- **Web:** ${getSiteUrl()}`,
    "",
    mdLink(
      lang === "fr" ? "Démarrer" : "Get started",
      locale,
      "/demarrer",
    ),
    "",
    siteIndex({ lang, locale }),
  );
}

function siteIndex({ lang, locale }: MdOpts) {
  const nav = NAV[lang];
  const platform = NAV_IA[lang];
  return lines(
    `## ${lang === "fr" ? "Plan du site" : "Site map"}`,
    "",
    `- ${mdLink(lang === "fr" ? "Accueil" : "Home", locale, "/")}`,
    `- ${mdLink("SIGNAL", locale, "/signal")}`,
    `- ${mdLink(nav.services, locale, "/services")}`,
    `- ${mdLink(nav.secteurs, locale, "/secteurs")}`,
    `- ${mdLink(nav.pourQui, locale, "/pour-qui")}`,
    `- ${mdLink(nav.casUsage, locale, "/cas-d-usage")}`,
    `- ${mdLink(nav.demarrer, locale, "/demarrer")}`,
    `- ${mdLink(nav.aPropos, locale, "/a-propos")}`,
    `- ${mdLink(nav.carrieres, locale, "/carrieres")}`,
    `- ${mdLink(nav.contact, locale, "/contact")}`,
    "",
    `### ${nav.platform}`,
    "",
    bullets(platform.map((p) => mdLink(p.title, locale, p.href))),
    "",
    `### ${lang === "fr" ? "Pour les agents" : "For agents"}`,
    "",
    `- [llms.txt](${getSiteUrl()}/llms.txt)`,
    `- ${lang === "fr" ? "Ajoutez" : "Append"} \`?view=agent\` ${lang === "fr" ? "à toute URL pour cette vue Markdown." : "to any URL for this Markdown view."}`,
    "",
    `---`,
    "",
    `_${FOOTER[lang].tagline}_`,
    "",
    `Contact: [${CONTACT_EMAIL}](mailto:${CONTACT_EMAIL}) · ${SITE.name}`,
    "",
  );
}

function fallbackMd(opts: MdOpts) {
  const { lang, locale } = opts;
  return lines(
    `# Remparia`,
    "",
    SITE.description,
    "",
    lang === "fr"
      ? "Cette page n’a pas encore de source Markdown dédiée. Utilisez le plan du site ci-dessous."
      : "This page does not yet have a dedicated Markdown source. Use the site map below.",
    "",
    siteIndex({ lang, locale }),
  );
}

const PREMIUM_ROUTE: Record<string, PremiumKey> = {
  "/studio": "studio",
  "/governance": "governance",
  "/sovereignty": "sovereignty",
  "/solutions/real-estate": "realEstate",
  "/solutions/legal": "legal",
  "/solutions/finance": "finance",
};

/**
 * Build agent-readable Markdown for a logical path (no locale prefix).
 */
export function buildAgentMarkdown(
  logicalPath: string,
  lang: Lang,
): string {
  const locale = lang as Locale;
  const opts: MdOpts = { lang, locale };
  const path = logicalPath.replace(/\/$/, "") || "/";

  if (path === "/signal") {
    const s = signalPage(lang);
    return lines(
      `# ${s.badge}`,
      "",
      `${s.titleLead}${s.titleAccent1}${s.titleMid}${s.titleAccent2}`,
      "",
      s.sub,
      "",
      `**CTA:** ${mdLink(s.ctaPrimary, locale, s.ctaPrimaryHref)}`,
      "",
      section(s.results.title, lines(s.results.sub, "", bullets(s.metrics.map((m) => `**${m.label}**: ${m.valueLabel}`)))),
      section(
        s.journey.title,
        lines(
          "sub" in s.journey && s.journey.sub ? s.journey.sub : null,
          "",
          s.journey.steps
            .map((step) =>
              lines(
                `### ${step.letter} — ${step.title}`,
                "",
                step.desc,
                "",
                `- **${s.journey.labels.deliverable}:** ${step.deliverable}`,
                `- **${s.journey.labels.artifacts}:** ${step.artifacts}`,
                `- **${s.journey.labels.timeline}:** ${step.timeline}`,
              ),
            )
            .join("\n\n"),
        ),
      ),
      section(
        s.deliverable.titleBefore + s.deliverable.titleAccent,
        lines(
          s.deliverable.body,
          "",
          bullets(
            s.deliverable.rows.map(
              (r) =>
                `${r.name} — impact ${r.impact}/5, feasibility ${r.feasibility}/5, value ${"€".repeat(r.value)}, priority ${r.priority}`,
            ),
          ),
        ),
      ),
      section(
        s.faq.title,
        lines(
          s.faq.sub,
          "",
          s.faq.items.map((item) => `**${item.q}** ${item.a}`).join("\n\n"),
        ),
      ),
      siteIndex({ lang, locale }),
    );
  }
  if (path === "/") return homeMd(opts);
  if (path === "/os" || path === "/solution") return solutionMd(opts);
  if (path === "/pour-qui") return pourQuiMd(opts);
  if (path === "/cas-d-usage") return casUsageMd(opts);
  if (path === "/demarrer") return demarrerMd(opts);
  if (path === "/methode") return methodeMd(opts); // legacy alias content
  if (path === "/services") return servicesMd(opts);
  if (path === "/secteurs") return secteursMd(opts);
  if (path === "/a-propos") return aproposMd(opts);
  if (path === "/contact") return contactMd(opts);

  const premiumKey = PREMIUM_ROUTE[path];
  if (premiumKey) return fromPremium(premiumKey, opts);

  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) return serviceDetailMd(serviceMatch[1], opts);

  const secteurMatch = path.match(/^\/secteurs\/([^/]+)$/);
  if (secteurMatch) return secteurDetailMd(secteurMatch[1], opts);

  return fallbackMd(opts);
}
