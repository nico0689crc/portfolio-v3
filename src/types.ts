import type { Locale } from "./configs/i18n";

export type PageKeys = "home" | "about_me" | "resume" | "portfolio" | "contact";

export type LangParamType = {
  params: Promise<{ lang: Locale }>
}

export type PublicSocialLinkType = {
  icon: string;
  titleTooltip: string;
  href: string;
  ariaLabel: {
    es: string;
    en: string;
  };
  blank?: boolean;
};