"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { buildAgentMarkdown } from "@/lib/agent-markdown";
import { stripLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

export default function AgentMarkdownView() {
  const { lang } = useLang();
  const pathname = usePathname() || "/";
  const logical = stripLocale(pathname);
  const [copied, setCopied] = useState(false);

  const markdown = useMemo(
    () => buildAgentMarkdown(logical, lang),
    [logical, lang],
  );

  const copyLabel =
    lang === "fr"
      ? copied
        ? "Copié"
        : "Copier le Markdown"
      : copied
        ? "Copied"
        : "Copy Markdown";

  const hint =
    lang === "fr"
      ? "Vue agent — contenu structuré pour LLM / crawlers. Basculez sur HUMAN pour l’interface visuelle."
      : "Agent view — structured content for LLMs / crawlers. Switch to HUMAN for the visual UI.";

  return (
    <div className="agent-view">
      <header className="agent-view__bar">
        <p className="agent-view__hint">{hint}</p>
        <button
          type="button"
          className="agent-view__copy"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(markdown);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1800);
            } catch {
              /* ignore */
            }
          }}
        >
          {copyLabel}
        </button>
      </header>
      <pre className="agent-view__md" tabIndex={0}>
        {markdown}
      </pre>
    </div>
  );
}
