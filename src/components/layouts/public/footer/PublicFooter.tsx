// React and Next.js imports
import Link from "next/link"

// MUI imports
import { Box, Stack, Typography, Link as LinkMUI, alpha } from "@mui/material"

// Local components
import ContainerCommon from "@/components/layouts/public/common/ContainerCommon"
import { navigationItems } from "@/components/layouts/public/common/navigations"

// Configs
import routes from "@/configs/routes"
import themeConfig from "@/configs/themeConfig"
import type { Locale } from "@/configs/i18n"

// Utils
import { getDictionary } from "@/utils/getDictionary"
import { getLocalizedUrl } from "@/utils/i18n"
import PublicSocial from "../common/social/PublicSocial"

type PublicFooterProps = {
  lang: Locale
}

const PublicFooter = async ({ lang }: PublicFooterProps) => {
  const dictionary = await getDictionary(lang)

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--mui-palette-customColors-footerBg)",
        padding: "2rem 0",
        "a:not(.not_white), p": {
          color: "white",
        },
      }}
    >
      <ContainerCommon
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Stack
          direction={{
            xs: "column",
            [themeConfig.breakpointToChangeLayout]: "row",
          }}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          {/* Description */}
          <Stack
            component="section"
            sx={{
              justifyContent: "center",
              alignItems: {
                xs: "center",
                [themeConfig.breakpointToChangeLayout]: "flex-start",
              },
              maxWidth: {
                xs: "100%",
                [themeConfig.breakpointToChangeLayout]: "20rem",
              },
              textAlign: {
                xs: "center",
                [themeConfig.breakpointToChangeLayout]: "left",
              },
              gap: 1,
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
              Nicolas Fernandez
            </Typography>
            <Typography
              sx={{
                "span": {
                  backgroundColor: "primary.light",
                }
              }}
              dangerouslySetInnerHTML={{ __html: dictionary.footer.description }}
            />
          </Stack>
          {/* Navigation */}
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
                  sx={{
                    color: "white",
                    position: "relative",
                    "&:after": {
                      position: "absolute",
                      content: "''",
                      height: "2px",
                      width: 0,
                      left: "50%",
                      right: 0,
                      bottom: 0,
                      backgroundColor: "transparent",
                      color: "#fff",
                      borderWidth: "0px 0px 3px 0px",
                      borderStyle: "solid",
                      borderColor: "primary.main",
                      transition: "all 0.3s ease-in-out",
                      transform: "translate(-50%, 0) translateZ(0)",
                    },
                    "&:hover": {
                      "&:after": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  {dictionary.pages[item.name].title}
                </LinkMUI>
              ))}
            </Stack>
          </Stack>
          {/* Socials */}
          <Stack
            component="section"
            sx={{
              justifyContent: "center",
              alignItems: {
                xs: "center",
                [themeConfig.breakpointToChangeLayout]: "flex-start",
              },
              gap: 1,
              width: {
                xs: "100%",
                [themeConfig.breakpointToChangeLayout]: "inherit",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                fontSize: "1.2rem",
                textTransform: "uppercase",
                color: "primary.main",
              }}
              variant="h3"
              noWrap
            >
              {dictionary.footer.socials}
            </Typography>
            <PublicSocial lang={lang} />
          </Stack>
        </Stack>
        <Stack
          component="section"
          sx={{
            flexDirection: "row",
            gap: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{`Copyright © ${new Date().getFullYear()}`}</Typography>
          <LinkMUI
            component={Link}
            href={getLocalizedUrl(routes.pages.public.home, lang)}
            className="not_white"
            sx={{
              color: "var(--mui-palette-primary-light)",
              position: "relative",
              "&:after": {
                position: "absolute",
                content: "''",
                height: "2px",
                width: 0,
                left: "50%",
                right: 0,
                bottom: 0,
                backgroundColor: "transparent",
                color: "#fff",
                borderWidth: "0px 0px 3px 0px",
                borderStyle: "solid",
                borderColor: "primary.main",
                transition: "all 0.3s ease-in-out",
                transform: "translate(-50%, 0) translateZ(0)",
              },
              "&:hover": {
                "&:after": {
                  width: "100%",
                },
              },
            }}
          >
            Nicolas Fernandez
          </LinkMUI>
        </Stack>
      </ContainerCommon>
    </Box>
  )
}

export default PublicFooter