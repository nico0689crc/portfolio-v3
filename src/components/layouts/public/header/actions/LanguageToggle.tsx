'use client'

import { ButtonGroup, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageToggle = () => {
  const pathname = usePathname()
  const lang = pathname.split("/")[1] || "en";
  const path = pathname.split("/").slice(2).join("/");
  const isCurrentLangEn = lang === "en";
  const isCurrentLangEs = lang === "es";

  
  return (
    <ButtonGroup
      color="secondary"
      disableElevation
      variant="outlined"
      size="small"
      sx={{
        ".MuiButtonGroup-firstButton": {
          borderRightColor: "currentcolor"
        }
      }}
    >
      <ButtonCustomized href={`/en/${path}`} isCurrentLang={isCurrentLangEn} text="EN"/>
      <ButtonCustomized href={`/es/${path}`} isCurrentLang={isCurrentLangEs} text="ES"/>
    </ButtonGroup>
  )
}

const ButtonCustomized = ({ href, isCurrentLang, text }: { href: string, isCurrentLang: boolean, text: string }) => (
  <Button
    component={Link}
    href={href} 
    sx={{
      backgroundColor: isCurrentLang ? "var(--mui-palette-secondary-lighterOpacity)" : "inherit",
      color: isCurrentLang ? "var(--mui-palette-text-primary)" : "var(--mui-palette-text-secondary)",
      border: isCurrentLang ? "1.5px solid var(--mui-palette-text-primary)" : "1px solid var(--mui-palette-text-secondary)",
      fontWeight: isCurrentLang ? 600 : 400,
    }}
  >
    {text}
  </Button>
);

export default LanguageToggle;