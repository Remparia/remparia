"use client";

import { useColorTheme } from "@/lib/color-theme";
import { useLang } from "@/lib/lang";

export default function ColorThemeToggle() {
  const { lang } = useLang();
  const { theme, setTheme, ready } = useColorTheme();

  if (!ready) return null;

  const groupLabel =
    lang === "fr"
      ? "Thème : jour ou nuit"
      : "Theme: day or night";

  return (
    <div
      className="color-theme-toggle"
      role="radiogroup"
      aria-label={groupLabel}
    >
      <button
        type="button"
        role="radio"
        aria-checked={theme === "day"}
        className={
          theme === "day"
            ? "color-theme-toggle__btn is-active"
            : "color-theme-toggle__btn"
        }
        onClick={() => setTheme("day")}
      >
        <span className="color-theme-toggle__dot" aria-hidden />
        <span className="color-theme-toggle__label">DAY</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={theme === "night"}
        className={
          theme === "night"
            ? "color-theme-toggle__btn is-active"
            : "color-theme-toggle__btn"
        }
        onClick={() => setTheme("night")}
      >
        <span className="color-theme-toggle__dot" aria-hidden />
        <span className="color-theme-toggle__label">NIGHT</span>
      </button>
    </div>
  );
}
