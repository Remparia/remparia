"use client";

import { useState } from "react";
import LocaleLink from "@/components/LocaleLink";

export type RoiCalculatorLabels = {
  employees: string;
  hours: string;
  cost: string;
  capacity: string;
  fte: string;
  annual: string;
  note: string;
  cta: string;
  investment: string;
  roiPct: string;
};

export default function RoiCalculator({
  labels,
}: {
  labels: RoiCalculatorLabels;
}) {
  const [employees, setEmployees] = useState(50);
  const [hours, setHours] = useState(240);
  const [cost, setCost] = useState(38);
  const fte = Math.max(0, Math.min(employees * 0.2, (hours * 0.35) / 35));
  const annual = Math.round(hours * 0.35 * cost * 48);
  const investment = Math.round(employees * 2800 + 10000);
  const roi = investment > 0 ? Math.round((annual / investment) * 100) : 0;

  return (
    <div className="ph-roi reveal">
      <div className="ph-roi__inputs">
        <label className="ph-roi__field">
          <span>{labels.employees}</span>
          <div className="ph-roi__stepper">
            <button
              type="button"
              aria-label="−"
              onClick={() => setEmployees((v) => Math.max(1, v - 1))}
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value) || 1)}
            />
            <button
              type="button"
              aria-label="+"
              onClick={() => setEmployees((v) => v + 1)}
            >
              +
            </button>
          </div>
        </label>
        <label className="ph-roi__field">
          <span>{labels.hours}</span>
          <input
            type="number"
            min={0}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value) || 0)}
          />
        </label>
        <label className="ph-roi__field">
          <span>{labels.cost}</span>
          <input
            type="number"
            min={0}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value) || 0)}
          />
        </label>
      </div>
      <div className="ph-roi__results">
        <div className="ph-roi__out ph-roi__out--primary">
          <div>
            <div className="ph-roi__out-label">{labels.capacity}</div>
            <div className="ph-roi__out-value">
              {fte.toFixed(1)} {labels.fte}
            </div>
          </div>
          <div>
            <div className="ph-roi__out-label">{labels.annual}</div>
            <div className="ph-roi__out-value ph-roi__out-value--lg">
              €{annual.toLocaleString("fr-FR")}
            </div>
          </div>
        </div>
        <div className="ph-roi__stats">
          <div className="ph-roi__stat">
            <span>{labels.investment}</span>
            <strong>€{investment.toLocaleString("fr-FR")}</strong>
          </div>
          <div className="ph-roi__stat">
            <span>{labels.roiPct}</span>
            <strong>{roi}%</strong>
          </div>
        </div>
        <p className="ph-roi__note">{labels.note}</p>
        <LocaleLink href="/demarrer" className="btn-primary">
          {labels.cta} →
        </LocaleLink>
      </div>
    </div>
  );
}
