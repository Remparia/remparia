import type { Metadata } from "next";
import AProposPage from "@/components/pages/AProposPage";

export const metadata: Metadata = { title: "À propos" };

export default function Page() {
  return <AProposPage />;
}
