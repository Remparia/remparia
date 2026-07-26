import { Suspense } from "react";
import MatomoAnalytics from "@/components/MatomoAnalytics";

/** Suspense requis : useSearchParams dans MatomoAnalytics */
export default function MatomoProvider() {
  return (
    <Suspense fallback={null}>
      <MatomoAnalytics />
    </Suspense>
  );
}
