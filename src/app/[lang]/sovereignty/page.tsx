import type { Metadata } from "next";
import SovereigntyPage from "@/components/premium/SovereigntyPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Sovereignty — a deployment mode, not the product"
      : "Souveraineté — un mode de déploiement, pas le produit",
    description: isEn
      ? "Remparia Cloud, sovereign cloud or on-premise: same agents, same OS, same governance. You choose the perimeter."
      : "Cloud Remparia, cloud souverain ou on-premise : mêmes agents, même OS, même gouvernance. Vous choisissez le périmètre.",
    path: "/sovereignty",
    lang,
  });
}

export default function Page() {
  return <SovereigntyPage />;
}
