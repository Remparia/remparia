"use client";

import LocaleLink from "@/components/LocaleLink";
import {
  agentUi,
  type LocalizedAgent,
} from "@/lib/agents";
import { useLang } from "@/lib/lang";

export default function AgentFicheGrid({
  agents,
  packHref,
  heading,
}: {
  agents: readonly LocalizedAgent[];
  packHref?: string;
  heading?: string;
}) {
  const { lang } = useLang();
  const ui = agentUi(lang);
  if (!agents.length) return null;

  return (
    <div className="agent-grid">
      {heading ? <h2 className="agent-grid__title">{heading}</h2> : null}
      <div className="agent-grid__list">
        {agents.map((agent) => (
          <article
            key={agent.id}
            className={`agent-fiche${agent.flagship ? " agent-fiche--flagship" : ""}`}
            id={agent.id}
          >
            <header className="agent-fiche__head">
              <div className="agent-fiche__tags">
                {agent.flagship ? (
                  <span className="agent-fiche__flag">{ui.flagship}</span>
                ) : null}
                <span className="agent-fiche__status">{ui.status[agent.status]}</span>
              </div>
              <h3>{agent.name}</h3>
              <p>{agent.role}</p>
            </header>
            <dl className="agent-fiche__meta">
              <div>
                <dt>{ui.trigger}</dt>
                <dd>{agent.trigger}</dd>
              </div>
              <div>
                <dt>{ui.inputs}</dt>
                <dd>{agent.inputs}</dd>
              </div>
              <div>
                <dt>{ui.tools}</dt>
                <dd>{agent.tools.join(" · ")}</dd>
              </div>
              <div>
                <dt>{ui.output}</dt>
                <dd>{agent.output}</dd>
              </div>
              <div>
                <dt>{ui.human}</dt>
                <dd>{agent.human}</dd>
              </div>
              <div>
                <dt>{ui.never}</dt>
                <dd>{agent.never}</dd>
              </div>
              <div>
                <dt>{ui.kpi}</dt>
                <dd>{agent.kpi}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      {packHref ? (
        <LocaleLink href={packHref} className="text-link agent-grid__cta">
          {packHref.includes("commerce") ? ui.commerceCta : ui.packCta} →
        </LocaleLink>
      ) : null}
    </div>
  );
}
