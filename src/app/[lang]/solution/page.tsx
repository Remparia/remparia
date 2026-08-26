import type { Metadata } from "next";
import OsPage from "@/components/premium/OsPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: "Remparia OS",
    description: isEn
      ? "Remparia OS is the enterprise AI control plane: models, agents, tools, data, identity, policies, observability and human approvals."
      : "Remparia OS est le control plane IA d’entreprise : modèles, agents, outils, données, identité, politiques, observabilité et validations humaines.",
    path: "/solution",
    lang,
  });
}

export default function Page() {
  return <OsPage />;
}
