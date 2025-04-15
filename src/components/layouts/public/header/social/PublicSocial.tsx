// External imports
import type { Locale } from "@/configs/i18n";
import type { PublicSocialLinkType } from "@/types";

// Internal imports
import PublicSocialLink from "./PublicSocialLink";
import PublicSocialWrapper from "./PublicSocialWrapper";
import getSocialLinks from "@/utils/requests/getSocialLinks";

type PublicSocialProps = {
  lang: Locale;
};

const PublicSocial = async ({ lang }: PublicSocialProps) => {
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
        />
      ))}
    </PublicSocialWrapper>
  );
};

export default PublicSocial;