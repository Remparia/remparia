"use client";

import Link from "next/link";
import {
  type ComponentProps,
  forwardRef,
} from "react";
import { withLocale } from "@/lib/i18n";
import { useLang } from "@/lib/lang";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/** Link qui préfixe automatiquement /fr ou /en */
const LocaleLink = forwardRef<HTMLAnchorElement, Props>(
  function LocaleLink({ href, ...rest }, ref) {
    const { lang } = useLang();
    const localized =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")
        ? href
        : withLocale(lang, href);

    return <Link ref={ref} href={localized} {...rest} />;
  },
);

export default LocaleLink;
