'use client'

import { Stack } from "@mui/material";
import PublicSocialLink from "./PublicSocialLink";

export type PublicSocialLinkProps = {
  icon: string;
  titleTooltip: string;
  href: string;
  blank?: boolean;
}

const socialLinks: PublicSocialLinkProps[] = [
  {
    icon: "ri:linkedin-fill",
    titleTooltip: "Linkedin",
    href: "https://www.linkedin.com/in/nicolas-ariel-fernandez",
    blank: true,
  },
  {
    icon: "ri:github-fill",
    titleTooltip: "Github",
    href: "https://github.com/nico0689crc",
    blank: true,

  },
  {
    icon: "ri:wechat-line",
    titleTooltip: "Workana",
    href: "https://www.workana.com/freelancer/ebf3574ed2af2e47ccf8e68f2fc23f11",
    blank: true,
  },
]

const PublicSocial = () => (
  <Stack 
    sx={(theme) => ({
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1,
      [theme.breakpoints.up("lg")]: {
        flexGrow: 0,
      },
      gap: 3,
    })}
  >
    {socialLinks.map((link, index) => (
      <PublicSocialLink
        key={index}
        href={link.href}
        target={link.blank ? "_blank" : "_self"}
        titleTooltip={link.titleTooltip}
        icon={link.icon}
      />
    ))}
  </Stack>
)

export default PublicSocial;