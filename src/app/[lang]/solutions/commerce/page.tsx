import type { Metadata } from "next";
import CommercePackPage from "@/components/premium/CommercePackPage";
import { toLang } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = toLang(langParam);
  const isEn = lang === "en";
  return createPageMetadata({
    title: isEn
      ? "Commerce Agent — your store becomes a seller"
      : "Agent Commerce — votre boutique devient un vendeur",
    description: isEn
      ? "A governed shopping agent that advises, builds the cart and tracks orders — without ever touching payment. Merchant agent, security in code, training included."
      : "Un agent shopping gouverné qui conseille, compose le panier et suit les commandes — sans jamais toucher au paiement. Agent marchand, sécurité dans le code, formation incluse.",
    path: "/solutions/commerce",
    lang,
  });
}

export default function Page() {
  return <CommercePackPage />;
}
