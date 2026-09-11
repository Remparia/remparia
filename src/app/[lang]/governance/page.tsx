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
      ? "Governance — production starts with control"
      : "Gouvernance — la mise en production commence par le contrôle",
    description: isEn
      ? "ALLOW / REVIEW / BLOCK policies, human stops, auditable logs. Sovereignty is a deployment mode, not the product."
      : "Politiques ALLOW / REVIEW / BLOCK, stops humains, journal opposable. La souveraineté est un mode de déploiement, pas le produit.",
    path: "/governance",
    lang,
  });
}

export default function Page() {
  return <GovernancePage />;
}
