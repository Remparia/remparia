import type { Metadata } from "next";
import GovernancePage from "@/components/premium/GovernancePage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn ? "Governance — stay in control" : "Gouvernance — rester maître du système",
    description: isEn
      ? "Identity, RBAC, audit, agent permissions, human approvals, policies, cost, security and compliance."
      : "Identité, RBAC, audit, permissions agents, validations humaines, politiques, coûts, sécurité et conformité.",
    path: "/governance",
    lang,
  });
}

export default function Page() {
  return <GovernancePage />;
}
