import { Button, ButtonGroup, Stack } from "@mui/material";
import ThemeModeToggle from "./ThemeModeToggle";
import type { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/getDictionary";
import NavbarToggle from "./NavbarToggle";
import LanguageToggle from "./LanguageToggle";

type PublicActionsProps = {
  lang: Locale
}

const PublicActions = async ({lang}: PublicActionsProps) => {
  const dictionary = await getDictionary(lang);

  return (
    <Stack 
      sx={{
        flexDirection: "row",
        gap: 3,
        alignItems: "center"
      }}
    >
      <ThemeModeToggle title={dictionary.actions.change_mode}/>
      <LanguageToggle />
      <NavbarToggle title="Menu"/>
    </Stack>
  )
}

export default PublicActions;