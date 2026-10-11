"use client";

import Image from "next/image";
import { Fragment, useCallback, useId, useState } from "react";
import HeroIntro from "@/components/HeroIntro";
import LocaleLink from "@/components/LocaleLink";
import PageFaq from "@/components/PageFaq";
import RoiCalculator from "@/components/RoiCalculator";
import { useHeroScrub } from "@/hooks/useHeroScrub";
import { useHomeParallax } from "@/hooks/useHomeParallax";
import { homePremium } from "@/lib/home-premium";
import { useLang } from "@/lib/lang";

function PhSection({
  id,
  children,
  className = "",
  centered = false,
  eyebrow,
  media,
  mediaDay,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  eyebrow?: string;
  media?: string;
  mediaDay?: string;
}) {
  return (
    <section
      id={id}
      className={`ph-section ph-parallax${className ? ` ${className}` : ""}${centered ? " ph-section--center" : ""}${media ? " ph-section--media" : ""}${mediaDay ? " ph-section--media-day" : ""}`}
    >
      {media ? (
        <div className="ph-section__media" aria-hidden>
          <Image
            src={media}
            alt=""
            fill
            quality={95}
            sizes="100vw"
            className={`ph-section__media-img${mediaDay ? " ph-section__media-img--night" : ""}`}
          />
          {mediaDay ? (
            <Image
              src={mediaDay}
              alt=""
              fill
              quality={95}
              sizes="100vw"
              className="ph-section__media-img ph-section__media-img--day"
            />
          ) : null}
        </div>
      ) : (
        <div className="ph-parallax__depth" aria-hidden />
      )}
      <div className="ph-parallax__veil" aria-hidden />
      <div className="ph-shell ph-section__layout">
        <div className="ph-section__main ph-parallax__fore">
          {eyebrow ? <p className="ph-eyebrow reveal">{eyebrow}</p> : null}
          {children}
        </div>
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

function OpsSupervisionIcon() {
  return (
    <svg className="ph-ops__icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 14.5 9.5 11 12 13.5 15 9 17 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function OpsIcon({ index }: { index: number }) {
  if (index === 0) {
    return <OpsSupervisionIcon />;
  }
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

function HeroScrubMedia({
  videoRef,
  ready,
  label,
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  ready: boolean;
  label: string;
}) {
  return (
    <div
      className={`ph-hero__media${ready ? " is-ready" : ""}`}
      role="img"
      aria-label={label}
    >
      <picture className="ph-hero__poster">
        <source
          media="(prefers-reduced-motion: reduce) and (max-width: 959px)"
          srcSet="/hero/bulb-lit-portrait.jpg"
        />
        <source media="(prefers-reduced-motion: reduce)" srcSet="/hero/bulb-lit-1280.jpg" />
        <source media="(max-width: 959px)" srcSet="/hero/bulb-poster-portrait.jpg" />
        <img
          src="/hero/bulb-poster-1280.jpg"
          alt=""
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <video
        ref={videoRef}
        className="ph-hero__video"
        muted
        playsInline
        preload="none"
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        aria-hidden
      />
      <span className="ph-hero__media-veil" aria-hidden />
    </div>
  );
}

function HeroChipIcon({ id }: { id: string }) {
  if (id === "agents") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden>
        <rect x="1" y="1" width="6" height="6" rx="1" />
        <rect x="9" y="1" width="6" height="6" rx="1" />
        <rect x="1" y="9" width="6" height="6" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </svg>
    );
  }
  if (id === "governance") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden>
        <path d="M8 1.5 13.5 4v3.6c0 3.2-2.2 5.5-5.5 6.9C4.7 13.1 2.5 10.8 2.5 7.6V4L8 1.5Z" />
        <path d="m5.6 7.8 1.6 1.6 3.2-3.2" />
      </svg>
    );
  }
  if (id === "workflows") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden>
        <circle cx="3.5" cy="3.5" r="1.5" />
        <circle cx="12.5" cy="8" r="1.5" />
        <circle cx="3.5" cy="12.5" r="1.5" />
        <path d="M5 3.5h4.5L12 7.2M5 12.5h4.5L12 9" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" aria-hidden>
      <ellipse cx="8" cy="4" rx="5" ry="2" />
      <path d="M3 4v3c0 1.1 2.2 2 5 2s5-.9 5-2V4" />
      <path d="M3 7v3c0 1.1 2.2 2 5 2s5-.9 5-2V7" />
      <path d="M3 10v2c0 1.1 2.2 2 5 2s5-.9 5-2v-2" />
    </svg>
  );
}

export default function HomePremium() {
  const { lang } = useLang();
  const t = homePremium(lang);
  const indId = useId();
  const [indTab, setIndTab] = useState<string>(t.industries.tabs[0].id);
  const [holding, setHolding] = useState(false);
  const activeIndustry =
    t.industries.tabs.find((tab) => tab.id === indTab) ?? t.industries.tabs[0];
  const onHoldStart = useCallback(() => setHolding(true), []);
  const onHoldComplete = useCallback(() => setHolding(false), []);

  const { trackRef: heroTrackRef, videoRef: heroVideoRef, ready: heroReady } = useHeroScrub();

  useHomeParallax(false);

  return (
    <div className="page page--premium">
      <HeroIntro
        lang={lang}
        onHoldStart={onHoldStart}
        onComplete={onHoldComplete}
      />
      <header
        ref={heroTrackRef}
        className={`ph-hero ph-hero--orbit ph-hero--scrub${holding ? " is-holding" : ""}`}
      >
        <div className="ph-hero__pin">
          <div className="ph-hero__bg" aria-hidden>
            <Image
              src="/home-bg-hero-day.jpg"
              alt=""
              fill
              priority
              quality={100}
              sizes="100vw"
              className="ph-hero__bg-img ph-hero__bg-img--day"
            />
          </div>
          <HeroScrubMedia
            videoRef={heroVideoRef}
            ready={heroReady}
            label={
              lang === "fr"
                ? "Une ampoule s’allume : un cerveau lumineux prend forme à l’intérieur."
                : "A light bulb switches on as a glowing brain takes shape inside."
            }
          />
          <div className="ph-shell ph-section__layout">
            <div className="ph-hero__stage">
              <div className="ph-hero__intro ph-parallax__fore">
                <h1 className="ph-hero__title ph-hero__title--statement ph-anim-hero" data-d="1">
                  <span className="ph-hero__title-row">
                    {t.hero.titleBefore}
                    <span className="ph-accent">{t.hero.titleAccent}</span>
                  </span>
                  <span className="ph-hero__title-row">
                    {t.hero.titleLine2Before}
                    <span className="ph-accent">{t.hero.titleLine2Accent}</span>
                  </span>
                </h1>
                <p className="ph-hero__sub ph-anim-hero" data-d="2">
                  {t.hero.sub}
                </p>
                <div className="ph-hero__actions ph-anim-hero" data-d="3">
                  <LocaleLink href="/demarrer" className="btn-primary ph-hero__cta">
                    {t.hero.cta} <span aria-hidden>→</span>
                  </LocaleLink>
                  <a href={t.hero.ctaSecondaryHref} className="btn-ghost ph-hero__cta-secondary">
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>

              <div className="ph-hero__orbit ph-parallax__back">
                <ul className="ph-hero__chips">
                  {t.hero.chips.map((chip, i) => (
                    <li
                      key={chip.id}
                      className={`ph-hero__chip ph-hero__chip--${chip.id}`}
                      style={{ "--chip-at": 0.4 + i * 0.08 } as React.CSSProperties}
                    >
                      <LocaleLink
                        href={chip.href}
                        className="ph-hero__chip-link"
                      >
                        <span className="ph-hero__chip-icon" aria-hidden>
                          <HeroChipIcon id={chip.id} />
                        </span>
                        <span className="ph-hero__chip-body">
                          <span className="ph-hero__chip-tag">
                            {chip.tag}
                            <i />
                          </span>
                          <span className="ph-hero__chip-text">{chip.text}</span>
                        </span>
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ph-hero__foot ph-parallax__fore">
                <p className="ph-hero__proof">
                  {t.hero.proof.map((item, i) => (
                    <span key={item}>
                      {i > 0 ? <span aria-hidden> › </span> : null}
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <PhSection id="constat" eyebrow={t.problem.eyebrow}>
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

      <PhSection
        id="modele"
        className="ph-section--tight"
        eyebrow={t.model.eyebrow}
        media="/home-bg-model-waves.jpg"
        mediaDay="/home-bg-model-day.jpg"
      >
        <AccentTitle
          before={t.model.titleBefore}
          accent={t.model.titleAccent}
          className=" ph-title--wide"
        />
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

      <PhSection
        id="workforce"
        className="ph-section--tight"
        eyebrow={t.workforce.eyebrow}
        media="/home-bg-workforce.jpg"
        mediaDay="/home-bg-workforce-day.jpg"
      >
        <AccentTitle
          before={t.workforce.titleBefore}
          accent={t.workforce.titleAccent}
        />
        <p className="ph-body reveal" data-d="1">{t.workforce.body}</p>
        <div className="ph-workforce ph-workforce--agents">
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

      <PhSection id="souverainete" className="ph-section--light" eyebrow={t.sovereignty.eyebrow}>
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
      </PhSection>

      <PhSection
        id="industries"
        className="ph-section--tight"
        eyebrow={t.industries.eyebrow}
      >
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

      <PhSection id="roi" className="ph-section--light" eyebrow={t.roi.eyebrow}>
        <AccentTitle before={t.roi.titleBefore} accent={t.roi.titleAccent} />
        <RoiCalculator labels={t.roi} />
      </PhSection>

      <PhSection
        id="operations"
        className="ph-section--tight"
        eyebrow={t.ops.eyebrow}
        media="/home-bg-ops.jpg"
        mediaDay="/home-bg-ops-day.jpg"
      >
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

      <PageFaq
        eyebrow={t.faq.eyebrow}
        title={t.faq.title}
        sub={t.faq.sub}
        items={t.faq.items}
      />

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
