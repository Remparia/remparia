"use client";

import Image from "next/image";
import { Fragment, useId, useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { useHomeParallax } from "@/hooks/useHomeParallax";
import { homePremium } from "@/lib/home-premium";
import { useLang } from "@/lib/lang";

function PhSection({
  id,
  children,
  className = "",
  centered = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`ph-section ph-parallax${className ? ` ${className}` : ""}${centered ? " ph-section--center" : ""}`}
    >
      <div className="ph-parallax__depth" aria-hidden />
      <div className="ph-parallax__veil" aria-hidden />
      <div className="ph-shell ph-section__layout">
        <div className="ph-section__main ph-parallax__fore">{children}</div>
      </div>
    </section>
  );
}

function AccentTitle({
  before,
  accent,
  after = "",
  className = "",
}: {
  before: string;
  accent: string;
  after?: string;
  className?: string;
}) {
  return (
    <h2 className={`ph-title reveal${className ? ` ${className}` : ""}`}>
      {before}
      <span className="ph-accent">{accent}</span>
      {after}
    </h2>
  );
}

const AGENT_ICONS: Record<string, string> = {
  research: "/icon-research-agent.png",
  sales: "/icon-sales-agent.png",
  document: "/icon-document-agent.png",
  finance: "/icon-finance-agent.png",
  ops: "/icon-operations-agent.png",
};

function AgentIcon({ tag }: { tag: string }) {
  const slug = tag.toLowerCase();
  const src = AGENT_ICONS[slug];
  if (src) {
    return (
      <Image
        className="ph-agent-card__icon-img"
        src={src}
        alt=""
        width={120}
        height={120}
        aria-hidden
      />
    );
  }
  return <span className={`ph-line-icon ph-line-icon--${slug}`} aria-hidden />;
}

const OPS_ICONS: Partial<Record<number, string>> = {
  0: "/icon-ops-monitoring.png",
  1: "/icon-ops-model.png",
  2: "/icon-ops-incident.png",
  3: "/icon-ops-connector.png",
  4: "/icon-ops-security.png",
  5: "/icon-ops-usage.png",
  6: "/icon-ops-performance.png",
  7: "/icon-ops-continuous.png",
};

const INDUSTRY_ICONS: Record<string, string> = {
  "real-estate": "/icon-industry-real-estate.png",
  legal: "/icon-industry-legal.png",
  finance: "/icon-industry-finance-v2.png",
  retail: "/icon-industry-retail.png",
  industry: "/icon-industry-industry.png",
  services: "/icon-industry-services.png",
};

function IndustryGlyph({ icon, className = "ph-industry-glyph" }: { icon: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      {icon === "lead" ? (
        <>
          <circle cx="10" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4.5 19c1.2-3 3.2-4.5 5.5-4.5S14.3 16 15.5 19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M18 8v6M15 11h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : null}
      {icon === "property" ? (
        <>
          <path
            d="M4 11.5 12 5l8 6.5V20H4v-8.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="16.5" cy="9.5" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M18.7 11.7 20.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
      ) : null}
      {icon === "document" ? (
        <path
          d="M7 3.5h7l4 4V20.5H7V3.5Zm7 0v4h4M9.5 11h5M9.5 14.5h5M9.5 18h3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ) : null}
      {icon === "support" ? (
        <>
          <path
            d="M7 13V11a5 5 0 0 1 10 0v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 13.5h2.2v4.2H6a1.5 1.5 0 0 1-1.5-1.5v-1.2A1.5 1.5 0 0 1 6 13.5Zm9.8 0H18a1.5 1.5 0 0 1 1.5 1.5v1.2a1.5 1.5 0 0 1-1.5 1.5h-2.2v-4.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </>
      ) : null}
      {icon === "reporting" ? (
        <path
          d="M5 19V11M10 19V7M15 19v-5M20 19V9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : null}
      {icon === "ops" ? (
        <path
          d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0-3.4v2.2m0 9.6v2.2m-6.5-7.6H5.3m13.2 0h2.2M7.4 7.4l1.5 1.5m6.2 6.2 1.5 1.5m0-9.2-1.5 1.5M8.9 15.1 7.4 16.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {icon === "crm" ? (
        <>
          <circle cx="8.5" cy="9" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="15.5" cy="9" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M3.8 18c.9-2.4 2.5-3.6 4.7-3.6s3.8 1.2 4.7 3.6M10.8 18c.9-2.4 2.5-3.6 4.7-3.6s3.8 1.2 4.7 3.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {icon === "email" ? (
        <path
          d="M3.5 7.5h17v10h-17v-10Zm0 0 8.5 6 8.5-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ) : null}
      {icon === "erp" ? (
        <>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5.5 6.5v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5.5 10.5v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5.5 14.5v3c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </>
      ) : null}
      {icon === "folder" ? (
        <path
          d="M3.5 8.5h6l2 2h9v8.5h-17V8.5Zm0 0V7a1.5 1.5 0 0 1 1.5-1.5H9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {icon === "cloud" ? (
        <path
          d="M7.5 17.5h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.5-1.4A3.8 3.8 0 0 0 7.5 17.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
    </svg>
  );
}

const SOV_PRODUCT_PNG: Record<string, string> = {
  database: "/icon-database.png",
  agents: "/icon-ai-agents.png",
  crm: "/icon-crm.png",
  email: "/icon-email.png",
  apis: "/icon-apis.png",
  tools: "/icon-tools.png",
  docs: "/icon-docs.png",
  mistral: "/icon-model-mistral.png",
  llama: "/icon-model-llama.png",
  openai: "/icon-model-openai.png",
  anthropic: "/icon-model-anthropic.png",
  private: "/icon-model-private.png",
};

function PhIcon({ name, className = "ph-icon" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      {name === "cloud" ? (
        <path
          d="M7.5 17.5h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.5-1.4A3.8 3.8 0 0 0 7.5 17.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "shield" ? (
        <path
          d="M12 3.5 5.5 6.2v5.3c0 4.2 2.8 7.2 6.5 8.5 3.7-1.3 6.5-4.3 6.5-8.5V6.2L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "lock" ? (
        <>
          <rect x="6" y="11" width="12" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M8.5 11V8.2a3.5 3.5 0 0 1 7 0V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {name === "database" || name === "erp" ? (
        <>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M5.5 6.5v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4M5.5 10.5v4c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-4M5.5 14.5v3c0 1.2 2.9 2.2 6.5 2.2s6.5-1 6.5-2.2v-3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ) : null}
      {name === "building" ? (
        <path
          d="M5 20.5V7.5l7-4 7 4v13M9 20.5v-5h6v5M9 10h1.5M13.5 10H15M9 13.5h1.5M13.5 13.5H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "zap" ? (
        <path
          d="M13 3.5 6.5 13h5.2L11 20.5 17.5 11h-5.2L13 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "clock" ? (
        <>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v4.2l3 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : null}
      {name === "hourglass" ? (
        <path
          d="M7 4.5h10M7 19.5h10M8 4.5v2.2c0 2.4 1.8 3.8 4 5.3 2.2-1.5 4-2.9 4-5.3V4.5M8 19.5v-2.2c0-2.4 1.8-3.8 4-5.3 2.2 1.5 4 2.9 4 5.3v2.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "check" ? (
        <path
          d="M5 12.5 9.5 17 19 7.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "globe" ? (
        <>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M4 12h16M12 4c2.4 2.6 3.6 5.2 3.6 8S14.4 17.4 12 20c-2.4-2.6-3.6-5.2-3.6-8S9.6 6.6 12 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ) : null}
      {name === "server" ? (
        <>
          <rect x="4.5" y="4.5" width="15" height="5.2" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4.5" y="14.3" width="15" height="5.2" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 7.1h.01M8 16.9h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </>
      ) : null}
      {name === "key" ? (
        <path
          d="M14.5 8.5a3.5 3.5 0 1 0-2.4 6L8 18.6 6 16.6l1.2-1.2L5.8 14l1.4-1.4 1.4 1.4 3.5-3.5A3.5 3.5 0 0 0 14.5 8.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "dots" ? (
        <>
          <circle cx="6" cy="12" r="1.4" fill="currentColor" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
          <circle cx="18" cy="12" r="1.4" fill="currentColor" />
        </>
      ) : null}
      {name === "layers" || name === "tools" ? (
        <path
          d="M12 4.5 20 9l-8 4.5L4 9l8-4.5Zm8 6.5-8 4.5L4 11m16 4.5-8 4.5L4 15.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "folder" ? (
        <path
          d="M3.5 8.5h6l2 2h9v8.5h-17V8.5Zm0 0V7a1.5 1.5 0 0 1 1.5-1.5H9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      ) : null}
    </svg>
  );
}

function SovProductIcon({ name }: { name: string }) {
  const src = SOV_PRODUCT_PNG[name];
  if (src) {
    return (
      <Image
        className="ph-sov-brick__icon-img"
        src={src}
        alt=""
        width={16}
        height={16}
        aria-hidden
      />
    );
  }
  return <PhIcon name={name} className="ph-sov-brick__icon-glyph" />;
}

const ORG_ICONS: Record<string, string> = {
  mission: "/icon-email.png",
  sales: "/icon-sales-log.png",
  salesai: "/icon-sales-ai.png",
  document: "/icon-doc-ai.png",
  docai: "/icon-doc-ai.png",
  crm: "/icon-crm.png",
  human: "/icon-customer.png",
  finance: "/icon-finance-agent.png",
  email: "/icon-email.png",
  docs: "/icon-docs.png",
  apis: "/icon-apis.png",
  erp: "/icon-database.png",
  orchestrator: "/icon-orchestrator.png",
};

function OrgIcon({ icon, className = "ph-org__icon" }: { icon: string; className?: string }) {
  if (icon === "done") {
    return <PhIcon name="check" className={`${className} ph-org__icon-glyph`} />;
  }
  const src = ORG_ICONS[icon];
  if (src) {
    return (
      <Image
        className={className}
        src={src}
        alt=""
        width={20}
        height={20}
        aria-hidden
      />
    );
  }
  return <IndustryGlyph icon={icon} className={`${className} ph-org__icon-glyph`} />;
}

function OrgBranch({ count }: { count: number }) {
  return (
    <div className="ph-org__branch" aria-hidden data-count={count}>
      <span className="ph-org__branch-stem" />
      <span className="ph-org__branch-rail" />
      <span className="ph-org__branch-drops">
        {Array.from({ length: count }, (_, i) => (
          <i key={i} />
        ))}
      </span>
    </div>
  );
}

function OpsIcon({ index }: { index: number }) {
  const src = OPS_ICONS[index];
  if (src) {
    return (
      <Image
        className="ph-ops__icon-img"
        src={src}
        alt=""
        width={48}
        height={48}
        aria-hidden
      />
    );
  }
  return (
    <span
      className="ph-line-icon ph-line-icon--ops"
      data-variant={(index % 4) + 1}
      aria-hidden
    />
  );
}

function ModelStepIcon({
  icon,
}: {
  icon: "signal" | "studio" | "os" | "governance";
}) {
  switch (icon) {
    case "signal":
      return (
        <Image
          className="ph-model__icon ph-model__icon--img"
          src="/icon-signal-brain.png"
          alt=""
          width={64}
          height={64}
          aria-hidden
        />
      );
    case "studio":
      return (
        <Image
          className="ph-model__icon ph-model__icon--img"
          src="/icon-studio-cubes.png"
          alt=""
          width={64}
          height={64}
          aria-hidden
        />
      );
    case "os":
      return (
        <Image
          className="ph-model__icon ph-model__icon--img"
          src="/icon-os-layers.png"
          alt=""
          width={64}
          height={64}
          aria-hidden
        />
      );
    case "governance":
      return (
        <Image
          className="ph-model__icon ph-model__icon--img"
          src="/icon-governance-shield.png"
          alt=""
          width={64}
          height={64}
          aria-hidden
        />
      );
  }
}

function ModelTagBox({ items }: { items: readonly string[] }) {
  return (
    <div className="ph-model__tags">
      <div className="ph-model__tags-row">
        <span>{items[0]}</span>
        <span className="ph-model__tags-sep" aria-hidden>
          &gt;
        </span>
        <span>{items[1]}</span>
        <span className="ph-model__tags-sep" aria-hidden>
          &gt;
        </span>
      </div>
      <div className="ph-model__tags-row">
        <span>{items[2]}</span>
        <span className="ph-model__tags-sep" aria-hidden>
          &gt;
        </span>
        <span>{items[3]}</span>
      </div>
    </div>
  );
}

function HeroVisual({ alt }: { alt: string }) {
  return (
    <div className="ph-hero-visual">
      <span className="ph-hero-visual__glow" aria-hidden />
      <Image
        src="/remparia-os-orbit-v3.png"
        alt={alt}
        width={984}
        height={1024}
        className="ph-hero-visual__img"
        priority
        sizes="(max-width: 959px) 92vw, 50vw"
      />
    </div>
  );
}

function RoiCalculator({
  labels,
}: {
  labels: {
    employees: string;
    hours: string;
    cost: string;
    capacity: string;
    fte: string;
    annual: string;
    note: string;
    cta: string;
    investment: string;
    roiPct: string;
  };
}) {
  const [employees, setEmployees] = useState(50);
  const [hours, setHours] = useState(240);
  const [cost, setCost] = useState(38);
  const fte = Math.max(
    0,
    Math.min(employees * 0.2, (hours * 0.35) / 35),
  );
  const annual = Math.round(hours * 0.35 * cost * 48);
  const investment = Math.round(employees * 2800 + 10000);
  const roi = investment > 0 ? Math.round((annual / investment) * 100) : 0;

  return (
    <div className="ph-roi reveal">
      <div className="ph-roi__inputs">
        <label className="ph-roi__field">
          <span>{labels.employees}</span>
          <div className="ph-roi__stepper">
            <button
              type="button"
              aria-label="−"
              onClick={() => setEmployees((v) => Math.max(1, v - 1))}
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value) || 1)}
            />
            <button
              type="button"
              aria-label="+"
              onClick={() => setEmployees((v) => v + 1)}
            >
              +
            </button>
          </div>
        </label>
        <label className="ph-roi__field">
          <span>{labels.hours}</span>
          <input
            type="number"
            min={0}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value) || 0)}
          />
        </label>
        <label className="ph-roi__field">
          <span>{labels.cost}</span>
          <input
            type="number"
            min={0}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value) || 0)}
          />
        </label>
      </div>
      <div className="ph-roi__results">
        <div className="ph-roi__out ph-roi__out--primary">
          <div>
            <div className="ph-roi__out-label">{labels.capacity}</div>
            <div className="ph-roi__out-value">
              {fte.toFixed(1)} {labels.fte}
            </div>
          </div>
          <div>
            <div className="ph-roi__out-label">{labels.annual}</div>
            <div className="ph-roi__out-value ph-roi__out-value--lg">
              €{annual.toLocaleString("fr-FR")}
            </div>
          </div>
        </div>
        <div className="ph-roi__stats">
          <div className="ph-roi__stat">
            <span>{labels.investment}</span>
            <strong>€{investment.toLocaleString("fr-FR")}</strong>
          </div>
          <div className="ph-roi__stat">
            <span>{labels.roiPct}</span>
            <strong>{roi}%</strong>
          </div>
        </div>
        <p className="ph-roi__note">{labels.note}</p>
        <LocaleLink href="/demarrer" className="btn-primary">
          {labels.cta} →
        </LocaleLink>
      </div>
    </div>
  );
}

export default function HomePremium() {
  const { lang } = useLang();
  const t = homePremium(lang);
  const indId = useId();
  const [indTab, setIndTab] = useState<string>(t.industries.tabs[0].id);
  const activeIndustry =
    t.industries.tabs.find((tab) => tab.id === indTab) ?? t.industries.tabs[0];

  useHomeParallax(false);

  return (
    <div className="page page--premium">
      <header className="ph-hero ph-parallax">
        <div className="ph-parallax__depth ph-parallax__depth--hero" aria-hidden />
        <div className="ph-shell ph-section__layout">
          <div className="ph-section__main ph-hero__grid">
            <div className="ph-hero__copy ph-parallax__fore">
              <h1 className="ph-hero__title ph-anim-hero" data-d="1">
                {t.hero.titleBefore}
                <span className="ph-accent">{t.hero.titleAccent}</span>
                {t.hero.titleAfter}
              </h1>
              <p className="ph-hero__sub ph-anim-hero" data-d="2">
                {t.hero.sub}
              </p>
              <div className="ph-hero__actions ph-anim-hero" data-d="3">
                <LocaleLink href="/demarrer" className="btn-primary">
                  {t.hero.ctaPrimary} →
                </LocaleLink>
                <a href="#en-action" className="btn-ghost">
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <ul className="ph-hero__badges ph-anim-hero" data-d="4">
                {t.hero.badges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>
            <div className="ph-parallax__back">
              <HeroVisual
                alt={
                  lang === "fr"
                    ? "Remparia OS — Orchestrer. Gouverner. Scaler. Un humain valide ; agents Recherche, Document, Finance, Opérations et Ventes autour du noyau, avec des emplacements pour ajouter des agents."
                    : "Remparia OS — Orchestrate. Govern. Scale. A human validates; Research, Document, Finance, Operations and Sales agents around the core, with slots to add agents."
                }
              />
            </div>
          </div>
        </div>
      </header>

      <PhSection id="constat" className="ph-section--light">
        <div className="ph-problem">
          <div className="ph-problem__title ph-parallax__mid">
            <AccentTitle
              before={t.problem.titleBefore}
              accent={t.problem.titleAccent}
            />
          </div>
          <div className="ph-compare ph-parallax__back">
            <div className="ph-compare__head reveal">
              <span>{t.problem.today}</span>
              <span className="ph-compare__arrow" aria-hidden />
              <span>{t.problem.withUs}</span>
            </div>
            {t.problem.rows.map((row, i) => (
              <div
                key={row.today}
                className="ph-compare__row reveal"
                data-d={String((i % 3) + 1)}
              >
                <span>{row.today}</span>
                <span className="ph-compare__arrow" aria-hidden>
                  <Image
                    className="ph-compare__arrow-img"
                    src="/icon-compare-arrow.png"
                    alt=""
                    width={28}
                    height={16}
                  />
                </span>
                <span>{row.withUs}</span>
              </div>
            ))}
          </div>
          <p className="ph-problem__side ph-parallax__fore reveal" data-d="2">
            <span className="ph-problem__side-lead">{t.problem.sideLead}</span>
            <span className="ph-problem__side-rest">
              {t.problem.sideRest}
              <span className="ph-accent">{t.problem.sideAccent}</span>
            </span>
          </p>
        </div>
      </PhSection>

      <PhSection id="modele" className="ph-section--tight">
        <div className="ph-model">
          {t.model.steps.map((step, i) => (
            <Fragment key={step.tag}>
              <article className="ph-model__card reveal" data-d={String((i % 3) + 1)}>
                <p className="ph-model__step-id">
                  {step.n} / {step.tag}
                </p>
                <h3 className="ph-model__subtitle">{step.title}</h3>
                <p className="ph-model__desc">{step.desc}</p>
                <ModelStepIcon icon={step.icon} />
                <ModelTagBox items={step.items} />
              </article>
              {i < t.model.steps.length - 1 ? (
                <span className="ph-model__between" aria-hidden>
                  <Image
                    className="ph-model__between-img"
                    src="/icon-model-arrow.png"
                    alt=""
                    width={36}
                    height={20}
                  />
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>
      </PhSection>

      <PhSection id="en-action">
        <div className="ph-org">
          <div className="ph-org__copy">
            <AccentTitle
              before={t.org.titleBefore}
              accent={t.org.titleAccent}
            />
            <p className="ph-body reveal" data-d="1">{t.org.body}</p>
            <LocaleLink href="/solution" className="btn-ghost reveal" data-d="2">
              {t.org.cta} →
            </LocaleLink>
          </div>
          <div className="ph-org__panel reveal" data-d="2">
            <div className="ph-org__log">
              <div className="ph-org__log-title">{t.org.logTitle}</div>
              <ul>
                {t.org.logs.map((line, i) => (
                  <li key={line.title} className="reveal" data-d={String((i % 3) + 1)}>
                    <span className="ph-org__log-check" aria-hidden />
                    <span className="ph-org__log-icon">
                      <OrgIcon icon={line.icon} />
                    </span>
                    <span className="ph-org__log-copy">
                      <strong>{line.title}</strong>
                      <time>{line.time}</time>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="ph-org__saved">
                <PhIcon name="zap" className="ph-org__saved-icon" />
                {t.org.saved}
              </div>
            </div>

            <div className="ph-org__flow">
              <div className="ph-org__card ph-org__card--human">
                <OrgIcon icon="human" className="ph-org__card-icon" />
                <strong>{t.org.human.title}</strong>
                <span>
                  <i className="ph-org__status" aria-hidden />
                  {t.org.human.desc}
                </span>
              </div>

              <div className="ph-org__line" aria-hidden />

              <div className="ph-org__card ph-org__card--orch">
                <OrgIcon icon="orchestrator" className="ph-org__card-icon" />
                <strong>{t.org.orchestrator.title}</strong>
                <span>{t.org.orchestrator.desc}</span>
              </div>

              <OrgBranch count={3} />

              <div className="ph-org__agents">
                {t.org.agents.map((agent) => (
                  <div key={agent.title} className="ph-org__card ph-org__card--agent">
                    <OrgIcon icon={agent.icon} className="ph-org__card-icon" />
                    <strong>{agent.title}</strong>
                    <span>{agent.desc}</span>
                    <i className="ph-org__pedestal" aria-hidden />
                  </div>
                ))}
              </div>

              <div className="ph-org__line ph-org__line--wide" aria-hidden />

              <div className="ph-org__card ph-org__card--os">
                <Image
                  className="ph-org__os-icon"
                  src="/icon-remparia-os.png"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden
                />
                <strong>{t.org.os}</strong>
              </div>

              <OrgBranch count={5} />

              <div className="ph-org__tools">
                {t.org.tools.map((tool) => (
                  <div key={tool.label} className="ph-org__tool">
                    <OrgIcon icon={tool.icon} className="ph-org__tool-icon" />
                    <span>{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PhSection>

      <PhSection id="workforce" className="ph-section--tight ph-section--light">
        <AccentTitle
          before={t.workforce.titleBefore}
          accent={t.workforce.titleAccent}
        />
        <p className="ph-body reveal" data-d="1">{t.workforce.body}</p>
        <div className="ph-workforce">
          {t.workforce.agents.map((agent, i) => {
            const href = "href" in agent ? agent.href : undefined;
            const className = `ph-agent-card reveal${href ? " ph-agent-card--cta" : ""}`;
            const content = (
              <>
                {href ? (
                  <span className="ph-agent-card__plus" aria-hidden>
                    +
                  </span>
                ) : (
                  <div className="ph-agent-card__icon">
                    <AgentIcon tag={agent.tag} />
                  </div>
                )}
                <h3>{agent.title}</h3>
                <p>{agent.desc}</p>
              </>
            );
            if (href) {
              return (
                <LocaleLink
                  key={agent.tag}
                  href={href}
                  className={className}
                  data-d={String((i % 6) + 1)}
                >
                  {content}
                </LocaleLink>
              );
            }
            return (
              <article
                key={agent.tag}
                className={className}
                data-d={String((i % 6) + 1)}
              >
                {content}
              </article>
            );
          })}
        </div>
      </PhSection>

      <PhSection id="souverainete">
        <AccentTitle
          before={t.sovereignty.titleBefore}
          accent={t.sovereignty.titleAccent}
        />
        <div className="ph-sov-bricks">
          {t.sovereignty.modes.map((mode, i) => (
            <article
              key={mode.id}
              className="ph-sov-brick reveal"
              data-mode={mode.id}
              data-d={String(i + 1)}
            >
              <header className="ph-sov-brick__head">
                <span className="ph-sov-brick__badge">
                  <PhIcon name={mode.badgeIcon} />
                  {mode.badge}
                </span>
                <h3>{mode.title}</h3>
                <p>{mode.subtitle}</p>
              </header>

              <div className="ph-sov-brick__attrs">
                {mode.attrs.map((attr) => (
                  <div key={attr.label}>
                    <span className="ph-sov-brick__attr-label">
                      <PhIcon name={attr.icon} className="ph-sov-brick__icon-glyph" />
                      {attr.label}
                    </span>
                    <strong>{attr.value}</strong>
                  </div>
                ))}
              </div>

              <div className="ph-sov-brick__stack">
                {"boundary" in mode && mode.boundary ? (
                  <div className="ph-sov-brick__boundary">
                    <PhIcon
                      name={mode.id === "onprem" ? "lock" : "shield"}
                      className="ph-sov-brick__boundary-icon"
                    />
                    {mode.boundary}
                  </div>
                ) : null}
                <div className="ph-sov-brick__layer">
                  <span className="ph-sov-brick__layer-label">
                    {mode.modelsLabel}
                  </span>
                  <div className="ph-sov-brick__models-row">
                    <div className="ph-sov-brick__models">
                      {mode.models.map((m) => (
                        <span key={m.label} className="has-icon">
                          <SovProductIcon name={m.icon} />
                          {m.label}
                        </span>
                      ))}
                    </div>
                    <PhIcon name="dots" className="ph-sov-brick__models-more" />
                  </div>
                </div>
                <div className="ph-sov-brick__os">
                  <Image
                    className="ph-sov-brick__os-icon"
                    src="/icon-remparia-os.png"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                  />
                  <strong>{t.sovereignty.os}</strong>
                  <span>{t.sovereignty.osTagline}</span>
                </div>
                <div className="ph-sov-brick__base">
                  {mode.base.map((item) => (
                    <span key={item.label} className="has-icon">
                      <SovProductIcon name={item.icon} />
                      {item.label}
                    </span>
                  ))}
                </div>
                <div className="ph-sov-brick__tools">
                  {mode.tools.map((tool) => (
                    <span key={tool.label} className="has-icon">
                      <SovProductIcon name={tool.icon} />
                      {tool.label}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="ph-sov-brick__features">
                {mode.features.map((feature) => (
                  <li key={feature}>
                    <PhIcon name="check" className="ph-sov-brick__feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="ph-sov-brick__tagline">
                <PhIcon name={mode.taglineIcon} className="ph-sov-brick__icon-glyph" />
                {mode.tagline}
              </p>
            </article>
          ))}
        </div>

        <div className="ph-sov-compare reveal" role="table" aria-label={t.sovereignty.eyebrow}>
          <div className="ph-sov-compare__head" role="row">
            <span role="columnheader" />
            {t.sovereignty.compare.columns.map((col, i) => (
              <span key={col} role="columnheader" data-col={t.sovereignty.modes[i].id}>
                {col}
              </span>
            ))}
          </div>
          {t.sovereignty.compare.rows.map((row) => (
            <div key={row.label} className="ph-sov-compare__row" role="row">
              <span role="rowheader">{row.label}</span>
              {row.values.map((value, i) => {
                const icon = "icons" in row ? row.icons[i] : undefined;
                return (
                  <span
                    key={`${row.label}-${value}`}
                    role="cell"
                    data-col={t.sovereignty.modes[i].id}
                    className={icon ? "has-icon" : undefined}
                  >
                    {icon ? <PhIcon name={icon} className="ph-sov-brick__icon-glyph" /> : null}
                    {value}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </PhSection>

      <PhSection id="industries" className="ph-section--tight">
        <AccentTitle
          before={t.industries.titleBefore}
          accent={t.industries.titleAccent}
          after={t.industries.titleAfter}
        />
        <p className="ph-body reveal" data-d="1">{t.industries.body}</p>
        <div className="ph-industry reveal" data-d="2">
          <div
            className="ph-industry-tabs"
            role="tablist"
            aria-label={t.industries.eyebrow}
          >
            {t.industries.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${indId}-${tab.id}`}
                aria-selected={indTab === tab.id}
                className={indTab === tab.id ? "is-active" : undefined}
                onClick={() => setIndTab(tab.id)}
              >
                {INDUSTRY_ICONS[tab.id] ? (
                  <Image
                    className="ph-industry-tabs__icon"
                    src={INDUSTRY_ICONS[tab.id]}
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden
                  />
                ) : null}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <div className="ph-industry-panel">
            <h3>{activeIndustry.title}</h3>
            <div className="ph-industry-pack" key={indTab}>
              <div className="ph-industry-agents">
                {activeIndustry.agents.map((agent) => (
                  <article key={agent.name} className="ph-industry-agent">
                    <span className="ph-industry-agent__icon" aria-hidden>
                      <IndustryGlyph icon={agent.icon} />
                    </span>
                    <div>
                      <h4>{agent.name}</h4>
                      <p>{agent.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="ph-industry-hub" aria-hidden>
                <div className="ph-industry-hub__line" />
                <div className="ph-industry-hub__node">{t.industries.orchestrator}</div>
                <div className="ph-industry-hub__line" />
                <div className="ph-industry-hub__os">
                  <strong>{t.industries.osTitle}</strong>
                  <span>{t.industries.osTagline}</span>
                </div>
              </div>

              <div className="ph-industry-tools-wrap">
                <div className="ph-industry-tools-branch" aria-hidden>
                  <span className="ph-industry-tools-branch__stem" />
                  <span className="ph-industry-tools-branch__rail" />
                </div>
                <div className="ph-industry-tools">
                  {activeIndustry.tools.map((tool) => (
                    <div key={tool.label} className="ph-industry-tool">
                      <span className="ph-industry-tool__icon" aria-hidden>
                        <IndustryGlyph icon={tool.icon} />
                      </span>
                      <span>{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ph-industry-panel__cta">
              <LocaleLink
                href={
                  ["real-estate", "legal", "finance"].includes(activeIndustry.id)
                    ? `/solutions/${activeIndustry.id}`
                    : "/secteurs"
                }
                className="ph-industry-pack__cta"
              >
                {activeIndustry.cta} →
              </LocaleLink>
            </div>
          </div>
        </div>
      </PhSection>

      <PhSection id="roi" className="ph-section--light">
        <AccentTitle before={t.roi.titleBefore} accent={t.roi.titleAccent} />
        <RoiCalculator labels={t.roi} />
      </PhSection>

      <PhSection id="operations" className="ph-section--tight">
        <AccentTitle before={t.ops.titleBefore} accent={t.ops.titleAccent} />
        <ul className="ph-ops">
          {t.ops.items.map((item, index) => (
            <li key={item} className="reveal" data-d={String((index % 3) + 1)}>
              <OpsIcon index={index} />
              {item}
            </li>
          ))}
        </ul>
      </PhSection>

      <section className="ph-final">
        <div className="ph-shell ph-final__inner">
          <AccentTitle
            before={t.finalCta.titleBefore}
            accent={t.finalCta.titleAccent}
          />
          <LocaleLink href="/demarrer" className="btn-primary ph-final__cta reveal" data-d="1">
            {t.finalCta.cta} →
          </LocaleLink>
          <p className="ph-final__tagline reveal" data-d="2">{t.finalCta.tagline}</p>
          <div className="ph-final__horizon" aria-hidden />
        </div>
      </section>
    </div>
  );
}
