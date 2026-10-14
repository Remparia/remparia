import { CONTACT_EMAIL } from "@/lib/contact-email";
import {
  APROPOS,
  FOOTER,
  METHODE,
  NAV,
  NAV_IA,
  NAV_OFFRES,
  SECTEURS,
  getSecteur,
  getSecteurDetail,
  type Lang,
} from "@/lib/content";
import { getCareers } from "@/lib/careers";
import { commerceAgentPage } from "@/lib/commerce-agent-page";
import { financeAgentPage } from "@/lib/finance-agent-page";
import { formationPage } from "@/lib/formation-page";
import { gedPage } from "@/lib/ged-page";
import { homePremium } from "@/lib/home-premium";
import { withLocale, type Locale } from "@/lib/i18n";
import { legalAgentPage } from "@/lib/legal-agent-page";
import { COOKIE_TABLE, getLegalPage, type LegalPageKey } from "@/lib/legal";
import type { PremiumPageCopy } from "@/lib/pages-premium";
import type { PackRichPageCopy } from "@/lib/pack-rich-page";
import { realEstateAgentPage } from "@/lib/real-estate-agent-page";
import {
  resourcesPage,
  type ResourcePageId,
} from "@/lib/resources-pages";
import { SITE, getSiteUrl } from "@/lib/seo";
import { osPage } from "@/lib/os-page";
import { governancePage } from "@/lib/governance-page";
import { sovereigntyPage } from "@/lib/sovereignty-page";
import { getAgentsForSecteur } from "@/lib/agents";
import { signalPage } from "@/lib/signal-page";
import { studioPage } from "@/lib/studio-page";
import {
  DEMARRER,
  POUR_QUI,
} from "@/lib/strategy";

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

function fromPremiumCopy(c: PremiumPageCopy, { locale }: MdOpts) {
  const title = `${c.title}${c.titleAccent ?? ""}`;
  const blocks = (c.sections ?? [])
    .map((s) => {
      const bits: string[] = [`### ${s.title}${s.titleAccent ?? ""}`, ""];
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
      if (s.links?.length) {
        bits.push(
          bullets(s.links.map((l) => mdLink(l.label, locale, l.href))),
          "",
        );
      }
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

function fromResources(id: ResourcePageId, opts: MdOpts) {
  return fromPremiumCopy(resourcesPage(id, opts.lang), opts);
}

function homeMd({ lang, locale }: MdOpts) {
  const t = homePremium(lang);
  const heroTitle = `${t.hero.titleBefore}${t.hero.titleAccent} ${t.hero.titleLine2Before}${t.hero.titleLine2Accent}`;
  return lines(
    `# Remparia`,
    "",
    heroTitle,
    "",
    t.hero.sub,
    "",
    t.hero.proof.join(" › "),
    "",
    bullets(t.hero.chips.map((c) => `${c.tag} — ${c.text}`)),
    "",
    `**Primary:** ${mdLink(t.hero.cta, locale, "/demarrer")}`,
    `**Secondary:** ${mdLink(t.hero.ctaSecondary, locale, t.hero.ctaSecondaryHref)}`,
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
      `${t.model.titleBefore}${t.model.titleAccent}`,
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

function governanceMd({ lang, locale }: MdOpts) {
  const t = governancePage(lang);
  return lines(
    `# ${t.titleLine1} ${t.titleAccent}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    section(
      `${t.why.titleBefore}${t.why.titleAccent}`,
      lines(
        t.why.body,
        "",
        t.why.items
          .map((item) => `### ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      `${t.problem.titleBefore}${t.problem.titleAccent}`,
      lines(
        `${t.problem.sideLead} ${t.problem.sideRest}${t.problem.sideAccent}`,
        "",
        t.problem.rows
          .map((row) => `- **${t.problem.today}:** ${row.today} → **${t.problem.withUs}:** ${row.withUs}`)
          .join("\n"),
      ),
    ),
    section(
      `${t.rails.titleBefore}${t.rails.titleAccent}`,
      lines(
        t.rails.body,
        "",
        t.rails.items
          .map((item) => `### ${item.n} — ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      `${t.heatmap.titleBefore}${t.heatmap.titleAccent}`,
      lines(
        t.heatmap.body,
        "",
        t.heatmap.items
          .map((item) => `### ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      t.pillars.title,
      lines(
        t.pillars.body,
        "",
        t.pillars.items
          .map((item) => `### ${item.tag} — ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      `${t.policies.titleBefore}${t.policies.titleAccent}`,
      lines(
        t.policies.body,
        "",
        t.policies.items
          .map((item) =>
            lines(`### ${item.tag} — ${item.title}`, "", item.desc, "", `_${item.example}_`),
          )
          .join("\n\n"),
      ),
    ),
    section(
      `${t.outcomes.titleBefore}${t.outcomes.titleAccent}`,
      lines(
        t.outcomes.body,
        "",
        t.outcomes.items
          .map((item) => `### ${item.n} — ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      `${t.action.titleBefore}${t.action.titleAccent}`,
      lines(
        t.action.body,
        "",
        `_${t.action.mission}_`,
        "",
        t.action.nodes
          .map((node) => `### ${node.tag} — ${node.title}\n\n${node.desc}`)
          .join("\n\n"),
        "",
        mdLink(t.action.cta, locale, t.action.href),
      ),
    ),
    section(
      `${t.audit.titleBefore}${t.audit.titleAccent}`,
      lines(
        bullets(t.audit.rows.map((row) => row.join(" · "))),
        "",
        `_${t.audit.note}_`,
      ),
    ),
    section(
      t.path.title,
      t.path.steps
        .map((step) =>
          lines(
            `### ${step.n} — ${step.tag}: ${step.title}`,
            "",
            step.desc,
            "",
            "href" in step && step.href ? mdLink(step.tag, locale, step.href) : "",
          ),
        )
        .join("\n\n"),
    ),
    section(
      t.sovereignty.cta,
      lines(t.sovereignty.body, "", mdLink(t.sovereignty.cta, locale, t.sovereignty.href)),
    ),
    section(
      t.faq.title,
      lines(
        t.faq.sub,
        "",
        t.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n"),
      ),
    ),
    `**CTA:** ${mdLink(t.cta.label, locale, t.cta.href)}`,
    "",
  );
}

function sovereigntyMd({ lang, locale }: MdOpts) {
  const t = sovereigntyPage(lang);
  return lines(
    `# ${t.titleLine1} ${t.titleAccent}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    section(
      `${t.problem.titleBefore}${t.problem.titleAccent}`,
      lines(
        `${t.problem.sideLead} ${t.problem.sideRest}${t.problem.sideAccent}`,
        "",
        t.problem.rows
          .map((row) => `- **${t.problem.today}:** ${row.today} → **${t.problem.withUs}:** ${row.withUs}`)
          .join("\n"),
      ),
    ),
    section(
      `${t.why.titleBefore}${t.why.titleAccent}`,
      lines(
        t.why.body,
        "",
        t.why.items
          .map((item) => `### ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      `${t.pillars.titleBefore}${t.pillars.titleAccent}`,
      lines(
        t.pillars.body,
        "",
        t.pillars.items
          .map((item) => `### ${item.tag} — ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
        "",
        t.pillars.defs
          .map((item) => `### ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      t.modes.title,
      lines(
        t.modes.body,
        "",
        t.modes.spectrum,
        "",
        t.modes.items
          .map((mode) =>
            lines(
              `### ${mode.title}`,
              "",
              `_${mode.subtitle}_`,
              "",
              mode.desc,
              "",
              bullets(mode.points),
              "",
              mode.fit,
            ),
          )
          .join("\n\n"),
      ),
    ),
    section(
      `${t.invariant.titleBefore}${t.invariant.titleAccent}`,
      lines(
        t.invariant.body,
        "",
        t.invariant.items
          .map((item) => `### ${item.title}\n\n${item.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      `${t.where.titleBefore}${t.where.titleAccent}`,
      lines(
        bullets(t.where.rows.map((row) => `**${row.label}:** ${row.value}`)),
        "",
        `_${t.where.note}_`,
      ),
    ),
    section(
      t.compare.title,
      t.compare.rows
        .map(
          (row) =>
            `**${row.label}:** ${t.compare.columns
              .map((col, i) => `${col} — ${row.values[i]}`)
              .join("; ")}`,
        )
        .join("\n\n"),
    ),
    section(
      `${t.action.titleBefore}${t.action.titleAccent}`,
      lines(
        t.action.body,
        "",
        `_${t.action.mission}_`,
        "",
        t.action.nodes
          .map((node) => `### ${node.tag} — ${node.title}\n\n${node.desc}`)
          .join("\n\n"),
      ),
    ),
    section(
      t.path.title,
      lines(
        t.path.body,
        "",
        t.path.steps
          .map((step) =>
            lines(
              `### ${step.n} — ${step.tag}: ${step.title}`,
              "",
              step.desc,
              "",
              mdLink(step.tag, locale, step.href),
            ),
          )
          .join("\n\n"),
        "",
        mdLink(t.path.ctaGov, locale, t.path.hrefGov),
        "",
        mdLink(t.path.ctaOs, locale, t.path.hrefOs),
      ),
    ),
    section(
      t.faq.title,
      lines(
        t.faq.sub,
        "",
        t.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n"),
      ),
    ),
    `**CTA:** ${mdLink(t.cta.label, locale, t.cta.href)}`,
    "",
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
    `**Secondary:** ${mdLink(t.ctaSecondary, locale, "/secteurs")}`,
    "",
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
    (() => {
      const agents = getAgentsForSecteur(slug, lang);
      if (!agents.length) return null;
      return section(
        lang === "fr" ? "Agents" : "Agents",
        agents
          .map((a) =>
            lines(
              `### ${a.name}`,
              "",
              a.role,
              "",
              `- **Trigger:** ${a.trigger}`,
              `- **Output:** ${a.output}`,
              `- **Never:** ${a.never}`,
              `- **KPI:** ${a.kpi}`,
            ),
          )
          .join("\n\n"),
      );
    })(),
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
  const offres = NAV_OFFRES[lang];
  return lines(
    `## ${lang === "fr" ? "Plan du site" : "Site map"}`,
    "",
    `- ${mdLink(lang === "fr" ? "Accueil" : "Home", locale, "/")}`,
    `- ${mdLink("SIGNAL", locale, "/signal")}`,
    `- ${mdLink(lang === "fr" ? "Offres" : "Offers", locale, "/offres/ged")}`,
    `- ${mdLink(lang === "fr" ? "Formation" : "Training", locale, "/formation")}`,
    `- ${mdLink(nav.secteurs, locale, "/secteurs")}`,
    `- ${mdLink(nav.pourQui, locale, "/pour-qui")}`,
    `- ${mdLink(nav.demarrer, locale, "/demarrer")}`,
    `- ${mdLink(nav.aPropos, locale, "/a-propos")}`,
    `- ${mdLink(nav.carrieres, locale, "/carrieres")}`,
    `- ${mdLink(nav.contact, locale, "/contact")}`,
    "",
    `### ${lang === "fr" ? "Offres" : "Offers"}`,
    "",
    bullets(offres.map((p) => mdLink(`${p.tag} — ${p.title}`, locale, p.href))),
    "",
    `### ${nav.platform}`,
    "",
    bullets(platform.map((p) => mdLink(p.title, locale, p.href))),
    "",
    `### ${lang === "fr" ? "Pour les agents" : "For agents"}`,
    "",
    `- [llms.txt](${getSiteUrl()}/llms.txt)`,
    `- [llms-full.txt](${getSiteUrl()}/llms-full.txt)`,
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

function signalMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const s = signalPage(lang);
  return lines(
    `# ${s.badge}`,
    "",
    `${s.titleLead}${s.titleAccent1}${s.titleMid}${s.titleAccent2}`,
    "",
    s.sub,
    "",
    `**CTA:** ${mdLink(s.ctaPrimary, locale, s.ctaPrimaryHref)}`,
    `**Secondary:** [${s.ctaSecondary}](${s.ctaSecondaryHref})`,
    "",
    section(
      `${s.proof.titleBefore}${s.proof.titleAccent}`,
      lines(
        `> ${s.proof.eyebrow}`,
        "",
        s.proof.body,
        "",
        bullets(
          s.proof.stats.map(
            (stat) =>
              `**${stat.value}${"suffix" in stat && stat.suffix ? stat.suffix : ""}** — ${stat.label} _(${stat.source})_`,
          ),
        ),
      ),
    ),
    section(
      `${s.compare.titleBefore}${s.compare.titleAccent}`,
      lines(
        `> ${s.compare.eyebrow}`,
        "",
        s.compare.body,
        "",
        `### ${s.compare.beforeTitle}`,
        "",
        bullets(s.compare.before),
        "",
        `### ${s.compare.afterTitle}`,
        "",
        bullets(s.compare.after),
      ),
    ),
    section(
      s.results.title,
      lines(
        s.results.sub,
        "",
        bullets(s.metrics.map((m) => `**${m.label}**: ${m.valueLabel}`)),
      ),
    ),
    section(
      s.map.title,
      bullets(
        s.map.axes.map(
          (axis, i) =>
            `**${axis.label}** (${axis.detail}) — score ${Math.round(s.map.scores[i] * 100)}%`,
        ),
      ),
    ),
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
      `${s.faq.titleBefore} ${s.faq.titleAccent}`,
      lines(
        s.faq.items.map((item) => `**${item.q}** ${item.a}`).join("\n\n"),
        "",
        `[${s.faq.more}](${s.faq.moreHref})`,
      ),
    ),
    section(
      s.final.title,
      lines(
        s.final.body,
        "",
        `**CTA:** ${mdLink(s.final.cta, locale, s.final.href)}`,
      ),
    ),
    siteIndex(opts),
  );
}

function formationMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = formationPage(lang);
  return lines(
    `# ${t.badge}`,
    "",
    `${t.hero.titleBefore}${t.hero.titleAccent}`,
    "",
    t.hero.body,
    "",
    `**CTA:** ${mdLink(t.hero.primary, locale, t.hero.primaryHref)}`,
    `**Secondary:** [${t.hero.secondary}](${t.hero.secondaryHref})`,
    "",
    `${t.heroBar.left} · ${t.heroBar.right}`,
    "",
    section(
      `${t.proof.titleBefore}${t.proof.titleAccent}`,
      lines(
        `> ${t.proof.eyebrow}`,
        "",
        t.proof.body,
        "",
        bullets(
          t.proof.stats.map(
            (stat) => `**${stat.value}** — ${stat.label} _(${stat.source})_`,
          ),
        ),
      ),
    ),
    section(
      `${t.compare.titleBefore}${t.compare.titleAccent}`,
      lines(
        `> ${t.compare.eyebrow}`,
        "",
        t.compare.body,
        "",
        `### ${t.compare.beforeTitle}`,
        "",
        bullets(t.compare.before),
        "",
        `### ${t.compare.afterTitle}`,
        "",
        bullets(t.compare.after),
      ),
    ),
    section(
      `${t.audiences.titleBefore}${t.audiences.titleAccent}`,
      lines(
        `> ${t.audiences.eyebrow}`,
        "",
        t.audiences.body,
        "",
        ...t.audiences.items.map((item) =>
          lines(`### ${item.number} — ${item.title}`, "", item.body),
        ),
      ),
    ),
    section(
      `${t.journey.titleBefore}${t.journey.titleAccent}`,
      lines(
        `> ${t.journey.eyebrow}`,
        "",
        t.journey.body,
        "",
        ...t.journey.steps.map((step) =>
          lines(
            `### ${step.number} — ${step.title}`,
            "",
            step.body,
            "",
            `- **Output:** ${step.output}`,
          ),
        ),
      ),
    ),
    section(
      `${t.deliverable.titleBefore}${t.deliverable.titleAccent}`,
      lines(
        `> ${t.deliverable.eyebrow}`,
        "",
        t.deliverable.body,
        "",
        bullets(t.deliverable.list),
        "",
        `### ${t.deliverable.artifact.label}: ${t.deliverable.artifact.title}`,
        "",
        bullets(
          t.deliverable.artifact.rows.map((r) => `**${r.key}:** ${r.value}`),
        ),
      ),
    ),
    section(
      t.faq.title,
      lines(
        `> ${t.faq.eyebrow}`,
        "",
        t.faq.items.map((item) => `**${item.q}** ${item.a}`).join("\n\n"),
      ),
    ),
    section(
      `${t.final.titleBefore}${t.final.titleAccent}`,
      lines(
        `> ${t.final.eyebrow}`,
        "",
        t.final.body,
        "",
        `**CTA:** ${mdLink(t.final.cta, locale, t.final.href)}`,
      ),
    ),
    siteIndex(opts),
  );
}

function gedMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = gedPage(lang);
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.hero.eyebrow}`,
    "",
    `${t.hero.titleBefore} ${t.hero.titleAccent}`,
    "",
    t.hero.body,
    "",
    t.hero.note,
    "",
    `**CTA:** ${t.hero.cta}`,
    `**Secondary:** ${t.hero.secondary}`,
    "",
    section(
      lang === "fr" ? "Piliers" : "Pillars",
      bullets(t.pillars.map((p) => `**${p.num}** — ${p.text}`)),
    ),
    section(
      t.conservation.title,
      lines(
        `> ${t.conservation.eyebrow}`,
        "",
        t.conservation.body,
        "",
        bullets(t.conservation.checks),
        "",
        `**${t.conservation.stat}** ${t.conservation.statText} _(${t.conservation.statSource})_`,
      ),
    ),
    section(
      t.completude.title,
      lines(
        `> ${t.completude.eyebrow}`,
        "",
        t.completude.body,
        "",
        t.completude.after,
        "",
        bullets(
          t.completude.items.map((i) => `**${i.name}** — ${i.status}`),
        ),
      ),
    ),
    section(
      t.classement.title,
      lines(
        `> ${t.classement.eyebrow}`,
        "",
        t.classement.body,
        "",
        t.classement.hint,
        "",
        bullets(t.classement.stats.map(([v, label]) => `**${v}** — ${label}`)),
      ),
    ),
    section(
      t.agent.title,
      lines(
        `> ${t.agent.eyebrow}`,
        "",
        t.agent.body,
        "",
        bullets(t.agent.checks),
      ),
    ),
    section(
      t.quinze.title,
      lines(
        `> ${t.quinze.eyebrow}`,
        "",
        t.quinze.body,
        "",
        `### ${t.quinze.beforeTitle}`,
        "",
        bullets(t.quinze.before),
        "",
        `### ${t.quinze.afterTitle}`,
        "",
        bullets(t.quinze.after),
      ),
    ),
    section(
      t.connectors.title,
      lines(
        `> ${t.connectors.eyebrow}`,
        "",
        t.connectors.body,
        "",
        bullets(t.connectors.tools),
        "",
        `_${t.connectors.note}_`,
      ),
    ),
    section(
      t.proof.title,
      lines(
        `> ${t.proof.eyebrow}`,
        "",
        t.proof.body,
        "",
        bullets(t.proof.stats.map((s) => `**${s.value}** ${s.text}`)),
        "",
        `_${t.proof.source}_`,
      ),
    ),
    section(
      t.trust.title,
      lines(
        `> ${t.trust.eyebrow}`,
        "",
        ...t.trust.items.map((item) =>
          lines(`### ${item.h}`, "", item.p),
        ),
      ),
    ),
    section(
      t.cercle.title,
      lines(
        `> ${t.cercle.eyebrow}`,
        "",
        t.cercle.body,
        "",
        bullets(t.cercle.perks),
        "",
        `**CTA:** ${t.cercle.cta}`,
        "",
        `_${t.cercle.note}_`,
      ),
    ),
    section(
      t.faq.title,
      lines(
        `> ${t.faq.eyebrow}`,
        "",
        t.faq.items.map((item) => `**${item.q}** ${item.a}`).join("\n\n"),
        "",
        `[${t.faq.more}](${t.faq.moreHref})`,
      ),
    ),
    section(t.closing.title, `**CTA:** ${t.closing.cta}`),
    siteIndex(opts),
  );
}

function offresMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const items = NAV_OFFRES[lang];
  return lines(
    `# ${lang === "fr" ? "Offres Remparia" : "Remparia offers"}`,
    "",
    lang === "fr"
      ? "Catalogue des offres : GED, SIGNAL et formation."
      : "Offer catalog: DMS, SIGNAL and training.",
    "",
    ...items.map((item) =>
      lines(
        `## ${item.tag} — ${item.title}`,
        "",
        item.desc,
        "",
        mdLink(lang === "fr" ? "Ouvrir" : "Open", locale, item.href),
        "",
      ),
    ),
    siteIndex(opts),
  );
}

function careersMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = getCareers(lang);
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    t.heroMeta.join(" · "),
    "",
    `**CTA:** ${mdLink(t.heroCta, locale, "/carrieres/candidature")}`,
    `**Secondary:** ${t.heroSecondary}`,
    "",
    section(
      t.rolesTitle,
      lines(
        t.rolesSub,
        "",
        ...t.roles.map((role) =>
          lines(`### ${role.tag} — ${role.title}`, "", role.desc),
        ),
      ),
    ),
    section(
      t.philTitle,
      lines(
        t.philSub,
        "",
        ...t.phil.map((item) =>
          lines(`### ${item.tag} — ${item.title}`, "", item.desc),
        ),
      ),
    ),
    section(
      t.processTitle,
      lines(
        t.processSub,
        "",
        ...t.steps.map((step) =>
          lines(
            `### ${step.n} — ${step.title} (${step.time})`,
            "",
            step.desc,
          ),
        ),
      ),
    ),
    section(t.videoTitle, bullets(t.videoRules)),
    siteIndex(opts),
  );
}

function careersApplyMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = getCareers(lang);
  return lines(
    `# ${t.applyTitle}`,
    "",
    t.applySub,
    "",
    t.applyGate,
    "",
    section(
      lang === "fr" ? "Parcours" : "Journey",
      lines(
        ...t.steps.map((step) =>
          lines(
            `### ${step.n} — ${step.title} (${step.time})`,
            "",
            step.desc,
          ),
        ),
      ),
    ),
    section(
      lang === "fr" ? "Questions écrites" : "Written questions",
      lines(
        ...t.questions.map((q) =>
          lines(
            `### ${q.label}`,
            "",
            q.hint,
            "",
            `- ${lang === "fr" ? "Minimum" : "Minimum"}: ${q.min} ${t.fields.charsOf}`,
          ),
        ),
      ),
    ),
    section(t.videoTitle, bullets(t.videoRules)),
    `**CTA:** ${mdLink(t.applyCta, locale, "/carrieres/candidature")}`,
    `**Back:** ${mdLink(t.applyBack, locale, "/carrieres")}`,
    "",
    siteIndex(opts),
  );
}

function faqMd(opts: MdOpts) {
  const { lang } = opts;
  const t = homePremium(lang).faq;
  return lines(
    `# ${t.title}`,
    "",
    `> ${lang === "fr" ? "RESSOURCES / FAQ" : "RESOURCES / FAQ"}`,
    "",
    t.sub,
    "",
    t.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n"),
    "",
    siteIndex(opts),
  );
}

function roiMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = homePremium(lang).roi;
  return lines(
    `# ${t.titleBefore}${t.titleAccent}`,
    "",
    `> ${lang === "fr" ? "RESSOURCES / ROI" : "RESOURCES / ROI"}`,
    "",
    t.note,
    "",
    section(
      lang === "fr" ? "Hypothèses du calculateur" : "Calculator inputs",
      bullets([
        t.employees,
        t.hours,
        t.cost,
        t.capacity,
        t.fte,
        t.annual,
        t.investment,
        t.roiPct,
      ]),
    ),
    `**CTA:** ${mdLink(t.cta, locale, "/contact")}`,
    "",
    siteIndex(opts),
  );
}

function legalMd(key: LegalPageKey, opts: MdOpts) {
  const t = getLegalPage(key, opts.lang);
  const cookieTable =
    key === "cookies"
      ? lines(
          "",
          `### ${COOKIE_TABLE[opts.lang].title}`,
          "",
          COOKIE_TABLE[opts.lang].intro,
          "",
          bullets(
            COOKIE_TABLE[opts.lang].rows.map(
              (row) =>
                `**${row.name}** (${row.type}) — ${row.purpose} · ${row.duration} · ${row.basis}`,
            ),
          ),
        )
      : null;
  return lines(
    `# ${t.title}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    ...t.sections.map((s) =>
      section(s.title, lines(...s.paragraphs)),
    ),
    cookieTable,
    "",
    siteIndex(opts),
  );
}

function studioMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = studioPage(lang);
  return lines(
    `# ${t.titleLine1} ${t.titleAccent}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    `**CTA:** ${mdLink(t.ctaPrimary, locale, t.ctaPrimaryHref)}`,
    `**Secondary:** ${mdLink(t.ctaSecondary, locale, t.ctaSecondaryHref)}`,
    "",
    section(
      `${t.problem.titleBefore}${t.problem.titleAccent}`,
      lines(
        `> ${t.problem.eyebrow}`,
        "",
        `${t.problem.sideLead} ${t.problem.sideRest}${t.problem.sideAccent}`,
        "",
        `| ${t.problem.today} | ${t.problem.withUs} |`,
        `| --- | --- |`,
        ...t.problem.rows.map((r) => `| ${r.today} | ${r.withUs} |`),
      ),
    ),
    section(
      t.layers.title,
      lines(
        `> ${t.layers.eyebrow}`,
        "",
        t.layers.body,
        "",
        ...t.layers.items.map((layer) =>
          lines(`### ${layer.tag} — ${layer.title}`, "", layer.desc),
        ),
      ),
    ),
    section(
      `${t.governed.titleBefore}${t.governed.titleAccent}`,
      lines(
        `> ${t.governed.eyebrow}`,
        "",
        t.governed.body,
        "",
        ...t.governed.items.map((item) =>
          lines(`### ${item.title}`, "", item.desc),
        ),
        "",
        mdLink(t.governed.cta, locale, t.governed.href),
      ),
    ),
    section(
      t.path.title,
      lines(
        `> ${t.path.eyebrow}`,
        "",
        ...t.path.steps.map((step) =>
          lines(
            `### ${step.n} — ${step.tag}: ${step.title}`,
            "",
            step.desc,
            "href" in step && step.href
              ? mdLink(lang === "fr" ? "Ouvrir" : "Open", locale, step.href)
              : null,
          ),
        ),
      ),
    ),
    section(
      t.faq.title,
      lines(
        t.faq.sub,
        "",
        t.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n"),
      ),
    ),
    section(
      t.cta.title,
      lines(t.cta.text, "", `**CTA:** ${mdLink(t.cta.label, locale, t.cta.href)}`),
    ),
    siteIndex(opts),
  );
}

function packRichMd(copy: PackRichPageCopy, opts: MdOpts) {
  const { lang, locale } = opts;
  return lines(
    `# ${copy.title}${copy.titleAccent}`,
    "",
    `> ${copy.eyebrow}`,
    "",
    copy.sub,
    "",
    `**CTA:** ${mdLink(copy.ctaPrimary, locale, copy.ctaPrimaryHref)}`,
    `**Secondary:** ${mdLink(copy.ctaSecondary, locale, copy.ctaSecondaryHref)}`,
    "",
    section(
      lang === "fr" ? "Preuves sectorielles" : "Sector proof",
      bullets(
        copy.proof.map((p) => `**${p.value}** — ${p.label} _(${p.source})_`),
      ),
    ),
    section(
      copy.workforce.title,
      lines(
        `> ${copy.workforce.eyebrow}`,
        "",
        copy.workforce.body,
        "",
        ...copy.workforce.agents.map((agent) =>
          lines(
            `### ${agent.title}`,
            "",
            `- **For:** ${agent.forWhom}`,
            `- **Does:** ${agent.does}`,
            `- **Never:** ${agent.never}`,
            "",
            bullets(agent.skills),
          ),
        ),
      ),
    ),
    section(
      copy.governance.title,
      lines(
        `> ${copy.governance.eyebrow}`,
        "",
        copy.governance.body,
        "",
        ...copy.governance.rules.map((rule) =>
          lines(`### ${rule.title}`, "", rule.desc),
        ),
      ),
    ),
    section(
      copy.path.title,
      lines(
        `> ${copy.path.eyebrow}`,
        "",
        copy.path.body,
        "",
        ...copy.path.steps.map((step) =>
          lines(`### ${step.title}`, "", step.desc),
        ),
        "",
        `_${copy.path.note}_`,
      ),
    ),
    section(
      copy.offer.title,
      lines(
        `> ${copy.offer.eyebrow}`,
        "",
        copy.offer.body,
        "",
        ...copy.offer.steps.map((step) =>
          lines(
            `### ${step.index} — ${step.title} (${step.duration})`,
            "",
            bullets(step.items),
          ),
        ),
      ),
    ),
    section(
      copy.pilot.title,
      lines(
        `> ${copy.pilot.eyebrow}`,
        "",
        ...copy.pilot.rows.map((row) =>
          lines(`### ${row.weeks}`, "", `- **Work:** ${row.work}`, `- **See:** ${row.see}`),
        ),
      ),
    ),
    section(
      copy.training.title,
      lines(
        `> ${copy.training.eyebrow}`,
        "",
        copy.training.body,
        "",
        ...copy.training.courses.map((course) =>
          lines(
            `### ${course.code} — ${course.title}`,
            "",
            `- **Audience:** ${course.audience}`,
            `- **Duration:** ${course.duration}`,
            "",
            bullets(course.outcomes),
          ),
        ),
      ),
    ),
    section(
      copy.audience.title,
      lines(
        `> ${copy.audience.eyebrow}`,
        "",
        ...copy.audience.segments.map((seg) =>
          lines(`### ${seg.title}`, "", seg.desc, "", `_${seg.angle}_`),
        ),
      ),
    ),
    section(
      copy.final.title,
      lines(copy.final.body, "", bullets(copy.final.steps)),
    ),
    section(
      copy.faq.title,
      lines(
        copy.faq.sub,
        "",
        copy.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n"),
      ),
    ),
    bullets(copy.sectorLinks.map((l) => mdLink(l.label, locale, l.href))),
    "",
    siteIndex(opts),
  );
}

function commerceMd(opts: MdOpts) {
  const { lang, locale } = opts;
  const t = commerceAgentPage(lang);
  return lines(
    `# ${t.title}${t.titleAccent}`,
    "",
    `> ${t.eyebrow}`,
    "",
    t.sub,
    "",
    `**CTA:** ${mdLink(t.ctaPrimary, locale, t.ctaPrimaryHref)}`,
    `**Secondary:** ${mdLink(t.ctaSecondary, locale, t.ctaSecondaryHref)}`,
    "",
    section(
      lang === "fr" ? "Preuves sectorielles" : "Sector proof",
      bullets(
        t.proof.map((p) => `**${p.value}** — ${p.label} _(${p.source})_`),
      ),
    ),
    section(
      t.dual.title,
      lines(
        `> ${t.dual.eyebrow}`,
        "",
        t.dual.body,
        "",
        `### ${t.dual.shopping.title}`,
        "",
        `- **For:** ${t.dual.shopping.forWhom}`,
        `- **Does:** ${t.dual.shopping.does}`,
        `- **Never:** ${t.dual.shopping.never}`,
        "",
        bullets(t.dual.shopping.skills),
        "",
        `### ${t.dual.merchant.title}`,
        "",
        `- **For:** ${t.dual.merchant.forWhom}`,
        `- **Does:** ${t.dual.merchant.does}`,
        `- **Never:** ${t.dual.merchant.never}`,
        "",
        bullets(t.dual.merchant.skills),
      ),
    ),
    section(
      t.security.title,
      lines(
        `> ${t.security.eyebrow}`,
        "",
        t.security.body,
        "",
        ...t.security.rules.map((rule) =>
          lines(`### ${rule.title}`, "", rule.desc),
        ),
      ),
    ),
    section(
      t.tracks.title,
      lines(
        `> ${t.tracks.eyebrow}`,
        "",
        t.tracks.body,
        "",
        `### ${t.tracks.own.title}`,
        "",
        t.tracks.own.desc,
        "",
        `### ${t.tracks.third.title}`,
        "",
        t.tracks.third.desc,
        "",
        `_${t.tracks.note}_`,
      ),
    ),
    section(
      t.offer.title,
      lines(
        `> ${t.offer.eyebrow}`,
        "",
        t.offer.body,
        "",
        ...t.offer.steps.map((step) =>
          lines(
            `### ${step.index} — ${step.title} (${step.duration})`,
            "",
            bullets(step.items),
          ),
        ),
      ),
    ),
    section(
      t.pilot.title,
      lines(
        `> ${t.pilot.eyebrow}`,
        "",
        ...t.pilot.rows.map((row) =>
          lines(`### ${row.weeks}`, "", `- **Work:** ${row.work}`, `- **See:** ${row.see}`),
        ),
      ),
    ),
    section(
      t.training.title,
      lines(
        `> ${t.training.eyebrow}`,
        "",
        t.training.body,
        "",
        ...t.training.courses.map((course) =>
          lines(
            `### ${course.code} — ${course.title}`,
            "",
            `- **Audience:** ${course.audience}`,
            `- **Duration:** ${course.duration}`,
            "",
            bullets(course.outcomes),
          ),
        ),
      ),
    ),
    section(
      t.audience.title,
      lines(
        `> ${t.audience.eyebrow}`,
        "",
        ...t.audience.segments.map((seg) =>
          lines(`### ${seg.title}`, "", seg.desc, "", `_${seg.angle}_`),
        ),
      ),
    ),
    section(t.final.title, lines(t.final.body, "", bullets(t.final.steps))),
    section(
      t.faq.title,
      lines(
        t.faq.sub,
        "",
        t.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join("\n\n"),
      ),
    ),
    mdLink(t.sectorLink.label, locale, t.sectorLink.href),
    "",
    siteIndex(opts),
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

const LEGAL_ROUTE: Record<string, LegalPageKey> = {
  "/mentions-legales": "mentions",
  "/confidentialite": "confidentialite",
  "/cookies": "cookies",
};

const RESOURCE_ROUTE: Record<string, ResourcePageId> = {
  "/blog": "blog",
  "/partenariat": "partenariat",
  "/support": "support",
  "/supervision": "supervision",
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

  if (path === "/") return homeMd(opts);
  if (path === "/signal") return signalMd(opts);
  if (path === "/formation") return formationMd(opts);
  if (path === "/offres") return offresMd(opts);
  if (path === "/offres/ged") return gedMd(opts);
  if (path === "/studio") return studioMd(opts);
  if (path === "/os" || path === "/solution") return solutionMd(opts);
  if (path === "/governance") return governanceMd(opts);
  if (path === "/sovereignty") return sovereigntyMd(opts);
  if (path === "/pour-qui") return pourQuiMd(opts);
  if (path === "/demarrer") return demarrerMd(opts);
  if (path === "/methode") return methodeMd(opts); // legacy alias content
  if (path === "/secteurs") return secteursMd(opts);
  if (path === "/a-propos" || path === "/entreprise") return aproposMd(opts);
  if (path === "/contact") return contactMd(opts);
  if (path === "/carrieres") return careersMd(opts);
  if (path.startsWith("/carrieres/candidature")) return careersApplyMd(opts);
  if (path === "/faq") return faqMd(opts);
  if (path === "/roi") return roiMd(opts);
  if (path === "/solutions/commerce") return commerceMd(opts);
  if (path === "/solutions/legal") return packRichMd(legalAgentPage(lang), opts);
  if (path === "/solutions/finance")
    return packRichMd(financeAgentPage(lang), opts);
  if (path === "/solutions/real-estate")
    return packRichMd(realEstateAgentPage(lang), opts);

  const legalKey = LEGAL_ROUTE[path];
  if (legalKey) return legalMd(legalKey, opts);

  const resourceId = RESOURCE_ROUTE[path];
  if (resourceId) return fromResources(resourceId, opts);

  const secteurMatch = path.match(/^\/secteurs\/([^/]+)$/);
  if (secteurMatch) return secteurDetailMd(secteurMatch[1], opts);

  return fallbackMd(opts);
}
