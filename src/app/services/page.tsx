import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services IA souveraine",
  description:
    "Stratégie IA, agents métier, infra souveraine et équipes embarquées. Remparia met l'IA au travail dans vos process réels.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
