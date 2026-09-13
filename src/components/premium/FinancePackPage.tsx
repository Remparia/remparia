"use client";

import PackRichPage from "@/components/premium/PackRichPage";
import { financeAgentPage } from "@/lib/finance-agent-page";
import { useLang } from "@/lib/lang";

export default function FinancePackPage() {
  const { lang } = useLang();
  return <PackRichPage pack="finance" copy={financeAgentPage(lang)} />;
}
