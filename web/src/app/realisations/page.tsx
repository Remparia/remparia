import type { Metadata } from "next";
import RealisationsPage from "@/components/pages/RealisationsPage";

export const metadata: Metadata = { title: "Réalisations" };

export default function Page() {
  return <RealisationsPage />;
}
