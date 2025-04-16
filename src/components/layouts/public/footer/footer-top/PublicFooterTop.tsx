// React and Next.js imports
import React from "react";

// Types
import type { Locale } from "@/configs/i18n";

// Components
import PublicFooterTopWrapper from "./PublicFooterTopWrapper";
import PublicFooterTopDescription from "./PublicFooterTopDescription";
import PublicFooterTopNavigation from "./PublicFooterTopNavigation";
import PublicFooterTopSocials from "./PublicFooterTopSocials";

type PublicFooterTopProps = {
  lang: Locale;
};

const PublicFooterTop = async ({ lang }: PublicFooterTopProps) => (
  <PublicFooterTopWrapper>
    <PublicFooterTopDescription lang={lang} />
    <PublicFooterTopNavigation lang={lang} />
    <PublicFooterTopSocials lang={lang} />
  </PublicFooterTopWrapper>
);

export default PublicFooterTop;