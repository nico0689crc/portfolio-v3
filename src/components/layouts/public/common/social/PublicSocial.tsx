// External imports
import type { Locale } from "@/configs/i18n";
import type { PublicSocialLinkType } from "@/types";
import type { LinkProps } from "@mui/material";

// Internal imports - Components
import PublicSocialLink from "./PublicSocialLink";
import PublicSocialWrapper from "./PublicSocialWrapper";

// Internal imports - Utilities
import getSocialLinks from "@/utils/requests/getSocialLinks";

type PublicSocialProps = LinkProps & {
  lang: Locale;
};

const PublicSocial = async ({ lang, sx }: PublicSocialProps) => {
  const socialLinks: PublicSocialLinkType[] = await getSocialLinks();

  return (
    <PublicSocialWrapper>
      {socialLinks.map((link, index) => (
        <PublicSocialLink
          key={index}
          href={link.href}
          target={link.blank ? "_blank" : "_self"}
          titleTooltip={link.titleTooltip}
          icon={link.icon}
          aria-label={link.ariaLabel[lang]}
          rel={link.blank ? "noopener noreferrer" : undefined}
          sx={sx}
        />
      ))}
    </PublicSocialWrapper>
  );
};

export default PublicSocial;