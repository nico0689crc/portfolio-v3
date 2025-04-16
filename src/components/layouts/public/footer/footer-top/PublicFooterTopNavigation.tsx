// React and Next.js imports
import Link from "next/link"

// MUI imports
import { Stack, Typography, Link as LinkMUI } from "@mui/material"

// Local components imports
import { navigationItems } from "@/components/layouts/public/common/navigations"

// Config imports
import themeConfig from "@/configs/themeConfig"
import type { Locale } from "@/configs/i18n"

// Utils imports
import { getDictionary } from "@/utils/getDictionary"
import { getLocalizedUrl } from "@/utils/i18n"

type PublicFooterTopNavigationProps = {
  lang: Locale
}

const PublicFooterTopNavigation = async ({ lang }: PublicFooterTopNavigationProps) => {
  const dictionary = await getDictionary(lang)

  return (
    <Stack
      component="section"
      sx={{
        justifyContent: {
          xs: "center",
          [themeConfig.breakpointToChangeLayout]: "flex-start",
        },
        alignItems: {
          xs: "center",
          [themeConfig.breakpointToChangeLayout]: "flex-start",
        },
        gap: 1,
        width: {
          xs: "100%",
          [themeConfig.breakpointToChangeLayout]: "inherit",
        }
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          textTransform: "uppercase",
          color: "primary.main",
        }}
        variant="h3"
      >
        {dictionary.footer.site}
      </Typography>
      <Stack
        direction={{
          xs: "column",
        }}
        sx={{ 
          gap: {
            xs: 1,
            [themeConfig.breakpointToChangeLayout]: 2,
          }, 
          flexWrap: "wrap",
          alignItems: {
            xs: "center",
            [themeConfig.breakpointToChangeLayout]: "flex-start",
          } 
        }}
      >
        {navigationItems.map((item) => (
          <LinkMUI
            key={item.name}
            component={Link}
            href={getLocalizedUrl(item.href, lang)}
            className="MuiLink-with-hover-effect"
            sx={{ color: "white" }}
          >
            {dictionary.pages[item.name].title}
          </LinkMUI>
        ))}
      </Stack>
    </Stack>
  )
}

export default PublicFooterTopNavigation
