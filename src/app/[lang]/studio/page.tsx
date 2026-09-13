import type { Metadata } from "next";
import StudioPage from "@/components/premium/StudioPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Studio — don't add a chatbot. Build the workforce."
      : "Studio — n’ajoutez pas un chatbot. Construisez la force de travail.",
    description: isEn
      ? "After SIGNAL, Studio assembles specialized agents, skills, tools, knowledge and human approvals — ready to run in Remparia OS."
      : "Après SIGNAL, Studio assemble agents spécialisés, compétences, outils, connaissance et validations humaines — prêts à tourner dans Remparia OS.",
    path: "/studio",
    lang,
  });
}

export default function Page() {
  return <StudioPage />;
}
