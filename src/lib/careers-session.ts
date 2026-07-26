import type { CareerRoleId } from "@/lib/careers";

export const CAREERS_SESSION_KEY = "remparia-careers-apply";
export const CAREERS_TOTAL_MS = 30 * 60 * 1000;

export type CareersSession = {
  name: string;
  email: string;
  linkedin: string;
  city: string;
  role: CareerRoleId | "";
  answers: Record<string, string>;
  videoUrl: string;
  /** Timestamp ms when identity step was completed — starts the 30 min timer */
  timerStartedAt: number | null;
};

export const emptyCareersSession = (): CareersSession => ({
  name: "",
  email: "",
  linkedin: "",
  city: "",
  role: "",
  answers: {},
  videoUrl: "",
  timerStartedAt: null,
});

export function loadCareersSession(): CareersSession {
  if (typeof window === "undefined") return emptyCareersSession();
  try {
    const raw = sessionStorage.getItem(CAREERS_SESSION_KEY);
    if (!raw) return emptyCareersSession();
    return { ...emptyCareersSession(), ...JSON.parse(raw) };
  } catch {
    return emptyCareersSession();
  }
}

export function saveCareersSession(data: Partial<CareersSession>) {
  if (typeof window === "undefined") return;
  const next = { ...loadCareersSession(), ...data };
  sessionStorage.setItem(CAREERS_SESSION_KEY, JSON.stringify(next));
  return next;
}

export function clearCareersSession() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(CAREERS_SESSION_KEY);
}

export function formatRemaining(ms: number) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
