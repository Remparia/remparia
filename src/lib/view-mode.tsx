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
import { usePathname } from "next/navigation";

export type ViewMode = "human" | "agent";

const STORAGE_KEY = "remparia-view-mode";
const QUERY_KEY = "view";

type ViewModeContextValue = {
  mode: ViewMode;
  isAgent: boolean;
  ready: boolean;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
};

const ViewModeContext = createContext<ViewModeContextValue | null>(null);

function readModeFromLocation(): ViewMode {
  if (typeof window === "undefined") return "human";
  const params = new URLSearchParams(window.location.search);
  if (params.get(QUERY_KEY) === "agent") return "agent";
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "agent") return "agent";
  } catch {
    /* ignore */
  }
  return "human";
}

function syncUrl(mode: ViewMode) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (mode === "agent") url.searchParams.set(QUERY_KEY, "agent");
  else url.searchParams.delete(QUERY_KEY);
  const next = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(window.history.state, "", next);
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mode, setModeState] = useState<ViewMode>("human");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setModeState(readModeFromLocation());
    setReady(true);
  }, []);

  // Preserve ?view=agent across client navigations
  useEffect(() => {
    if (!ready) return;
    syncUrl(mode);
  }, [pathname, mode, ready]);

  useEffect(() => {
    document.documentElement.classList.toggle("view-agent", mode === "agent");
    return () => document.documentElement.classList.remove("view-agent");
  }, [mode]);

  const setMode = useCallback((next: ViewMode) => {
    setModeState(next);
    try {
      sessionStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    syncUrl(next);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === "agent" ? "human" : "agent");
  }, [mode, setMode]);

  const value = useMemo(
    () => ({
      mode,
      isAgent: mode === "agent",
      ready,
      setMode,
      toggleMode,
    }),
    [mode, ready, setMode, toggleMode],
  );

  return (
    <ViewModeContext.Provider value={value}>{children}</ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const ctx = useContext(ViewModeContext);
  if (!ctx) throw new Error("useViewMode must be used within ViewModeProvider");
  return ctx;
}
