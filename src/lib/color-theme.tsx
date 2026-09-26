"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  COLOR_THEME_DAY_BG,
  COLOR_THEME_NIGHT_BG,
  COLOR_THEME_STORAGE_KEY,
} from "@/lib/color-theme-boot";

export type ColorTheme = "night" | "day";

export {
  COLOR_THEME_BOOT_SCRIPT,
  COLOR_THEME_DAY_BG,
  COLOR_THEME_NIGHT_BG,
  COLOR_THEME_STORAGE_KEY,
} from "@/lib/color-theme-boot";

type ColorThemeContextValue = {
  theme: ColorTheme;
  isDay: boolean;
  ready: boolean;
  setTheme: (theme: ColorTheme) => void;
  toggleTheme: () => void;
};

const ColorThemeContext = createContext<ColorThemeContextValue | null>(null);

function readStoredTheme(): ColorTheme {
  if (typeof window === "undefined") return "night";
  try {
    const stored = localStorage.getItem(COLOR_THEME_STORAGE_KEY);
    if (stored === "day" || stored === "night") return stored;
  } catch {
    /* ignore */
  }
  return "night";
}

function applyThemeToDocument(theme: ColorTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme === "day" ? "light" : "dark";

  const color = theme === "day" ? COLOR_THEME_DAY_BG : COLOR_THEME_NIGHT_BG;
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", color);
}

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ColorTheme>("night");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const next = readStoredTheme();
    setThemeState(next);
    applyThemeToDocument(next);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyThemeToDocument(theme);
  }, [theme, ready]);

  const setTheme = useCallback((next: ColorTheme) => {
    setThemeState(next);
    try {
      localStorage.setItem(COLOR_THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyThemeToDocument(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "day" ? "night" : "day");
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      isDay: theme === "day",
      ready,
      setTheme,
      toggleTheme,
    }),
    [theme, ready, setTheme, toggleTheme],
  );

  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext);
  if (!ctx) {
    throw new Error("useColorTheme must be used within ColorThemeProvider");
  }
  return ctx;
}
