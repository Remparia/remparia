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
      ? "Sovereignty — your AI, your infrastructure, your rules"
      : "Souveraineté — votre IA, votre infrastructure, vos règles",
    description: isEn
      ? "Remparia Cloud, sovereign cloud or on-premise: same agents, same OS, same governance. Sovereignty is a spectrum — harden the perimeter without losing control."
      : "Cloud Remparia, cloud souverain ou on-premise : mêmes agents, même OS, même gouvernance. La souveraineté est un spectre — durcissez le périmètre sans perdre le contrôle.",
    path: "/sovereignty",
    lang,
  });
}

export default function Page() {
  return <SovereigntyPage />;
}
