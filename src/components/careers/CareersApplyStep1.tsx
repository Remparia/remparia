"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CareersApplyShell from "@/components/careers/CareersApplyShell";
import { getCareers, type CareerRoleId } from "@/lib/careers";
import {
  loadCareersSession,
  saveCareersSession,
} from "@/lib/careers-session";
import { withLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

const ROLE_IDS: CareerRoleId[] = [
  "agent-engineer",
  "platform-engineer",
  "ai-consultant",
  "delivery-ai",
  "compliance-data",
  "business-developer",
  "spontaneous",
];

function isRoleId(value: string): value is CareerRoleId {
  return ROLE_IDS.includes(value as CareerRoleId);
}

function Step1Inner() {
  const { lang } = useLang();
  const t = getCareers(lang);
  const router = useRouter();
  const searchParams = useSearchParams();
  const preset = searchParams.get("role") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState<CareerRoleId | "">("");

  useEffect(() => {
    const s = loadCareersSession();
    setName(s.name);
    setEmail(s.email);
    setLinkedin(s.linkedin);
    setCity(s.city);
    if (s.role) setRole(s.role);
    else if (preset && isRoleId(preset)) setRole(preset);
  }, [preset]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes("@") || !city.trim() || !role) return;
    saveCareersSession({
      name: name.trim(),
      email: email.trim(),
      linkedin: linkedin.trim(),
      city: city.trim(),
      role,
      timerStartedAt: Date.now(),
    });
    router.push(withLocale(lang, "/carrieres/candidature/2"));
  }

  return (
    <CareersApplyShell step={1}>
      <form className="careers-iso-form" onSubmit={onSubmit}>
        <h1>{t.steps[0].title}</h1>
        <p>{t.steps[0].desc}</p>
        <label>
          <span>{t.fields.name}</span>
          <input value={name} onChange={(e) => setName(e.target.value)} required maxLength={120} />
        </label>
        <label>
          <span>{t.fields.email}</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={200} />
        </label>
        <label>
          <span>{t.fields.linkedin}</span>
          <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} maxLength={300} />
        </label>
        <label>
          <span>{t.fields.city}</span>
          <input value={city} onChange={(e) => setCity(e.target.value)} required maxLength={120} />
        </label>
        <label>
          <span>{t.fields.role}</span>
          <select value={role} onChange={(e) => setRole(e.target.value as CareerRoleId)} required>
            <option value="" disabled>—</option>
            {t.roles.map((r) => (
              <option key={r.id} value={r.id}>{r.title}</option>
            ))}
            <option value="spontaneous">{t.fields.roleSpontaneous}</option>
          </select>
        </label>
        <button type="submit" className="btn-primary">
          {t.fields.next} →
        </button>
      </form>
    </CareersApplyShell>
  );
}

export default function CareersApplyStep1() {
  return (
    <Suspense fallback={null}>
      <Step1Inner />
    </Suspense>
  );
}
