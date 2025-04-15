import { Stack } from "@mui/material";
import ThemeModeToggle from "./ThemeModeToggle";
import type { Locale } from "@/configs/i18n";
import { getDictionary } from "@/utils/getDictionary";
import NavbarToggle from "./NavbarToggle";

type PublicActionsProps = {
  lang: Locale
}

const PublicActions = async ({lang}: PublicActionsProps) => {
  const dictionary = await getDictionary(lang);

  return (
    <Stack 
      sx={{
        ml: 5,
        flexDirection: "row",
        gap: 2,
        alignItems: "center"
      }}
    >
      <ThemeModeToggle title={dictionary.actions.change_mode}/>
      <NavbarToggle title="Menu"/>
    </Stack>
  )
}

export default PublicActions;