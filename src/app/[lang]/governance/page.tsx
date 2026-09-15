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
    title: isEn
      ? "Governance — speeds adoption without losing control"
      : "Gouvernance — accélère l’adoption sans lâcher le contrôle",
    description: isEn
      ? "Remparia puts governance rails in the OS — ALLOW / REVIEW / BLOCK, identity, audit — so adoption speeds up safely. Not a PDF nobody reads."
      : "Remparia pose les rails de gouvernance dans l’OS — ALLOW / REVIEW / BLOCK, identité, audit — pour accélérer l’adoption en sécurité. Pas un PDF.",
    path: "/governance",
    lang,
  });
}

export default function Page() {
  return <GovernancePage />;
}
