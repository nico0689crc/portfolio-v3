// External imports
import { Stack } from "@mui/material";

// Internal imports - Components
import ThemeModeToggle from "./ThemeModeToggle";
import NavbarToggle from "./NavbarToggle";
import LanguageToggle from "./LanguageToggle";

// Internal imports - Types
import type { Locale } from "@/configs/i18n";

// Internal imports - Utilities
import { getDictionary } from "@/utils/getDictionary";

type PublicActionsProps = {
  lang: Locale;
};

const PublicActions = async ({ lang }: PublicActionsProps) => {
  const dictionary = await getDictionary(lang);

  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
      }}
    >
      <ThemeModeToggle title={dictionary.actions.change_mode} />
      <LanguageToggle />
      <NavbarToggle title="Menu" />
    </Stack>
  );
};

export default PublicActions;