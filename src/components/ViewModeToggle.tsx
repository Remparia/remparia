"use client";

import { useLang } from "@/lib/lang";
import { useViewMode } from "@/lib/view-mode";

export default function ViewModeToggle() {
  const { lang } = useLang();
  const { mode, setMode } = useViewMode();

  const humanLabel = "HUMAN";
  const agentLabel = "AGENT";
  const groupLabel =
    lang === "fr"
      ? "Mode de lecture : humain ou agent"
      : "Reading mode: human or agent";

  return (
    <div
      className="view-mode-toggle"
      role="radiogroup"
      aria-label={groupLabel}
    >
      <button
        type="button"
        role="radio"
        aria-checked={mode === "human"}
        className={
          mode === "human"
            ? "view-mode-toggle__btn is-active"
            : "view-mode-toggle__btn"
        }
        onClick={() => setMode("human")}
      >
        <span className="view-mode-toggle__dot" aria-hidden />
        <span className="view-mode-toggle__label">{humanLabel}</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={mode === "agent"}
        className={
          mode === "agent"
            ? "view-mode-toggle__btn is-active"
            : "view-mode-toggle__btn"
        }
        onClick={() => setMode("agent")}
      >
        <span className="view-mode-toggle__dot" aria-hidden />
        <span className="view-mode-toggle__label">{agentLabel}</span>
      </button>
    </div>
  );
}
