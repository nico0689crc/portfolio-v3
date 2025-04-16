// External Libraries
import Link from "next/link";

// Material-UI Components
import { ListItem, Typography, Link as LinkMUI } from "@mui/material";

// Utilities
import { getLocalizedUrl } from "@/utils/i18n"
import type { Locale } from "@/configs/i18n";

type PublicNavigationListItemProps = {
  text: string;
  href: string;
  lang: Locale
};

/**
 * PublicNavigationListItem Component
 * A navigation list component for public layouts.
 */
const PublicNavigationListItem = async ({ text, href, lang }: PublicNavigationListItemProps) => (
    <ListItem
      sx={{
        width: "fit-content",
        px: 0,
      }}
    >
      <LinkMUI 
        component={Link} 
        href={getLocalizedUrl(href, lang)} 
      >
        <Typography
          noWrap
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
          }}
          className="MuiLink-with-hover-effect"
        >
          {text}
        </Typography>
      </LinkMUI>
    </ListItem>
  );

export default PublicNavigationListItem;