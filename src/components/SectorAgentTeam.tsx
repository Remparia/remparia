"use client";

import { SectionLabel } from "@/components/PageBits";
import {
  AGENT_TEAM_COPY,
  getSectorAgentTeam,
} from "@/lib/sector-agent-teams";
import type { SecteurDetail } from "@/lib/secteurs-details";
import { useLang } from "@/lib/lang";

export default function SectorAgentTeam({
  slug,
  scenarios,
}: {
  slug: string;
  scenarios: SecteurDetail["scenarios"];
}) {
  const { lang } = useLang();
  const copy = AGENT_TEAM_COPY[lang];
  const team = getSectorAgentTeam(slug, lang, scenarios);

  return (
    <section className="section agent-team-section" aria-labelledby="agent-team-title">
      <div className="agent-team">
        <div className="agent-team__intro reveal">
          <SectionLabel>{copy.eyebrow}</SectionLabel>
          <h2 id="agent-team-title" className="secteur-section-title">
            {copy.title}
          </h2>
          <p className="agent-team__lead">{copy.intro}</p>
        </div>

        <div className="agent-flow reveal" data-d="1">
          <div className="agent-flow__head">
            <span className="agent-flow__pulse" aria-hidden />
            <span>{copy.flowTitle}</span>
          </div>
          <div className="agent-flow__track">
            <div className="agent-flow__node">
              <span className="agent-flow__index">01</span>
              <strong>{copy.sources}</strong>
              <div className="agent-flow__tools">
                {team.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <span className="agent-flow__arrow" aria-hidden>
              →
            </span>
            <div className="agent-flow__node agent-flow__node--core">
              <span className="agent-flow__index">02</span>
              <strong>{copy.orchestrator}</strong>
              <span className="agent-flow__status">
                <span aria-hidden />
                {team.agents.length} agents
              </span>
            </div>
            <span className="agent-flow__arrow" aria-hidden>
              →
            </span>
            <div className="agent-flow__node">
              <span className="agent-flow__index">03</span>
              <strong>{copy.validation}</strong>
              <span className="agent-flow__caption">
                {team.agents.map((item) => item.owner).join(" · ")}
              </span>
            </div>
            <span className="agent-flow__arrow" aria-hidden>
              →
            </span>
            <div className="agent-flow__node">
              <span className="agent-flow__index">04</span>
              <strong>{copy.action}</strong>
              <span className="agent-flow__caption">
                {copy.execute}
              </span>
            </div>
          </div>
        </div>

        <div className="agent-roster">
          {team.agents.map((item, index) => (
            <article
              key={item.id}
              className="agent-card reveal"
              data-d={String(Math.min(index + 1, 3))}
            >
              <div className="agent-card__head">
                <span className="agent-card__number">
                  A-{String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`agent-card__autonomy agent-card__autonomy--${item.autonomy}`}
                >
                  <span aria-hidden />
                  {item.autonomy === "execute" ? copy.execute : copy.prepare}
                </span>
              </div>
              <h3>{item.name}</h3>
              <dl className="agent-card__details">
                <div>
                  <dt>{copy.owner}</dt>
                  <dd>{item.owner}</dd>
                </div>
                <div>
                  <dt>{copy.trigger}</dt>
                  <dd>{item.trigger}</dd>
                </div>
                <div>
                  <dt>{copy.mission}</dt>
                  <dd>{item.mission}</dd>
                </div>
                <div>
                  <dt>{copy.metric}</dt>
                  <dd>{item.metric}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p className="agent-team__disclaimer reveal">{copy.disclaimer}</p>
      </div>
    </section>
  );
}
