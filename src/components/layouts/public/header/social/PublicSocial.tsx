// External imports
import type { Locale } from "@/configs/i18n";

// Internal imports
import PublicSocialLink from "./PublicSocialLink";
import PublicSocialWrapper from "./PublicSocialWrapper";
import { socialLinks } from "./data/socialLinks";

type PublicSocialProps = {
  lang: Locale;
};

const PublicSocial = ({ lang }: PublicSocialProps) => (
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
      />
    ))}
  </PublicSocialWrapper>
);

export default PublicSocial;