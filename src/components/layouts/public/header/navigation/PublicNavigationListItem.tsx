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
        sx={{ 
          textDecoration: "none",
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
        <Typography
          noWrap
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          {text}
        </Typography>
      </LinkMUI>
    </ListItem>
  );

export default PublicNavigationListItem;