"use client";

import PackRichPage from "@/components/premium/PackRichPage";
import { realEstateAgentPage } from "@/lib/real-estate-agent-page";
import { useLang } from "@/lib/lang";

export default function RealEstatePackPage() {
  const { lang } = useLang();
  return <PackRichPage pack="real-estate" copy={realEstateAgentPage(lang)} />;
}
