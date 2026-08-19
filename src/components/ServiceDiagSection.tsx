"use client";

import Image from "next/image";
import LocaleLink from "@/components/LocaleLink";

export type ServicePointIcon =
  | "immersion"
  | "prioritize"
  | "governance"
  | "roadmap"
  | "integration"
  | "rules"
  | "trace"
  | "metrics"
  | "hosting"
  | "rag"
  | "routing"
  | "audit"
  | "training"
  | "rollout"
  | "docs"
  | "improve";

type ServicePoint = {
  icon: ServicePointIcon;
  label: string;
};

export type ServiceDiagContent = {
  tag: string;
  title: string;
  desc: string;
  points: readonly ServicePoint[];
  steps: readonly string[];
  image: string;
  imageAlt: string;
  ctaHref: string;
  flip?: boolean;
  activeSteps?: readonly number[];
};

function PointIcon({ name }: { name: ServicePointIcon }) {
  switch (name) {
    case "immersion":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "prioritize":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 18h16M6 14l4-8 4 5 4-9" />
        </svg>
      );
    case "governance":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4Z" />
          <path d="m9.5 12 1.8 1.8L15.5 10" />
        </svg>
      );
    case "roadmap":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
        </svg>
      );
    case "integration":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="8" width="7" height="7" rx="1" />
          <rect x="14" y="8" width="7" height="7" rx="1" />
          <path d="M10 11.5h4M14 11.5v-2a2 2 0 0 1 2-2h1" />
        </svg>
      );
    case "rules":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M6 6h12v4H6zM6 14h6v4H6zM16 14h2v4h-2z" />
          <path d="M12 10v4" />
        </svg>
      );
    case "trace":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 7h6v6H4zM14 11h6v6h-6z" />
          <path d="M10 10l4 4" />
        </svg>
      );
    case "metrics":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "hosting":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="6" rx="1" />
          <rect x="4" y="14" width="16" height="6" rx="1" />
          <path d="M8 7h.01M8 17h.01" />
        </svg>
      );
    case "rag":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M6 4h10l4 4v12H6z" />
          <path d="M16 4v4h4M9 13h6M9 17h4" />
        </svg>
      );
    case "routing":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 11.5 14.5 7M8 12.5 14.5 17" />
        </svg>
      );
    case "audit":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M8 6h12M8 12h12M8 18h8" />
          <path d="M4 6h.01M4 12h.01M4 18h.01" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5M14 19c0-2 1.5-3.5 3-3.5" />
        </svg>
      );
    case "rollout":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 18h16M6 14h12M8 10h8M10 6h4" />
        </svg>
      );
    case "docs":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M8 4h8l4 4v12H8z" />
          <path d="M16 4v4h4M11 13h6M11 17h4" />
        </svg>
      );
    case "improve":
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M4 16l4-6 4 3 5-8 3 5" />
          <path d="M4 20h16" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
        </svg>
      );
  }
}

export default function ServiceDiagSection({
  content,
}: {
  content: ServiceDiagContent;
}) {
  const sectionId = `service-block-${content.tag}`;
  const activeSteps = content.activeSteps ?? [1, 3];

  return (
    <section
      className={`section service-diag reveal${content.flip ? " service-diag--flip" : ""}`}
      aria-labelledby={sectionId}
    >
      <div className="service-diag__grid">
        <div className="service-diag__copy">
          <div className="service-diag__index" aria-hidden>
            {content.tag}
          </div>
          <h2 id={sectionId} className="service-diag__title">
            {content.title}
          </h2>
          <p className="service-diag__desc">{content.desc}</p>
          <ul className="service-diag__points">
            {content.points.map((point) => (
              <li key={point.label} className="service-diag__point">
                <span className="service-diag__point-icon">
                  <PointIcon name={point.icon} />
                </span>
                <span>{point.label}</span>
              </li>
            ))}
          </ul>
          <LocaleLink href={content.ctaHref} className="service-diag__cta">
            →
          </LocaleLink>
        </div>
        <div className="service-diag__visual">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={960}
            height={960}
            sizes="(max-width: 960px) 100vw, 50vw"
            className="service-diag__img"
          />
        </div>
      </div>
      <div className="service-diag__flow" aria-label={content.steps.join(" → ")}>
        <div className="service-diag__flow-track">
          {content.steps.map((step, index) => (
            <div key={step} className="service-diag__flow-item">
              <div className="service-diag__flow-marker">
                <span
                  className={`service-diag__dot${
                    activeSteps.includes(index) ? " is-active" : ""
                  }`}
                  aria-hidden
                />
              </div>
              <span
                className={`service-diag__step${
                  activeSteps.includes(index) ? " is-active" : ""
                }`}
              >
                {step}
              </span>
              {index < content.steps.length - 1 ? (
                <span className="service-diag__sep" aria-hidden>
                  ›
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
