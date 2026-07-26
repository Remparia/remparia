import type { Metadata } from "next";
import SecteursPage from "@/components/pages/SecteursPage";

export const metadata: Metadata = { title: "Secteurs" };

export default function Page() {
  return <SecteursPage />;
}
