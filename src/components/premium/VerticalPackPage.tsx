"use client";

import AgentFicheGrid from "@/components/AgentFicheGrid";
import PremiumMarketingPage from "@/components/premium/PremiumMarketingPage";
import { getAgentsByPack, type AgentPack } from "@/lib/agents";
import { premiumPage, PAGES_PREMIUM } from "@/lib/pages-premium";
import { useLang } from "@/lib/lang";

const PACK_PAGE: Record<AgentPack, keyof typeof PAGES_PREMIUM> = {
  commerce: "commerce",
  legal: "legal",
  finance: "finance",
  "real-estate": "realEstate",
};

export default function VerticalPackPage({ pack }: { pack: AgentPack }) {
  const { lang } = useLang();
  const copy = premiumPage(PACK_PAGE[pack], lang);
  const agents = getAgentsByPack(pack, lang);
  const heading =
    lang === "fr"
      ? "Fiches agents — déclencheur, livrable, stop humain"
      : "Agent cards — trigger, deliverable, human stop";

  return (
    <PremiumMarketingPage
      copy={copy}
      homeLabel={lang === "fr" ? "Accueil" : "Home"}
    >
      <section className="ph-section">
        <div className="ph-shell">
          <p className="ph-eyebrow">
            {lang === "fr" ? "05 / FICHES AGENTS" : "05 / AGENT CARDS"}
          </p>
          <AgentFicheGrid agents={agents} heading={heading} />
        </div>
      </section>
    </PremiumMarketingPage>
  );
}
