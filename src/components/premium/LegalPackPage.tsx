"use client";

import PackRichPage from "@/components/premium/PackRichPage";
import { legalAgentPage } from "@/lib/legal-agent-page";
import { useLang } from "@/lib/lang";

export default function LegalPackPage() {
  const { lang } = useLang();
  return <PackRichPage pack="legal" copy={legalAgentPage(lang)} />;
}
