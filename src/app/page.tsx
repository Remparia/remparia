import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/i18n";

/** Fallback si le proxy n'intercepte pas `/` */
export default function RootRedirect() {
  redirect(`/${DEFAULT_LOCALE}`);
}
