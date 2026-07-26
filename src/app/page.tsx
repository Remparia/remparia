import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "IA souveraine qui augmente vos équipes",
  description:
    "Moins de hype. Plus de résultats. Remparia déploie des agents IA métier, souverains et conformes — du POC à la production quotidienne.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
