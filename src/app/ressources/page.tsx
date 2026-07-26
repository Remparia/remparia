import type { Metadata } from "next";
import RessourcesPage from "@/components/pages/RessourcesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ressources",
  description:
    "Méthode SIGNAL, insights et outils Remparia pour passer du bruit au signal en IA.",
  path: "/ressources",
});

export default function Page() {
  return <RessourcesPage />;
}
