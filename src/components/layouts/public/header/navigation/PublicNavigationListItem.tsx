'use client';

// External Libraries
import Link from 'next/link';

// Material-UI Components
import { ListItem, Typography, Link as LinkMUI, useTheme, useMediaQuery } from '@mui/material';

// Utilities
import { getLocalizedUrl } from '@/utils/i18n';
import type { Locale } from '@/configs/i18n';
import { useSettings } from '@/@core/hooks/useSettings';
import themeConfig from '@/configs/themeConfig';
import { useCallback } from 'react';

type PublicNavigationListItemProps = {
  text: string;
  href: string;
  lang: Locale;
};

/**
 * PublicNavigationListItem Component
 * A navigation list component for public layouts.
 */
const PublicNavigationListItem = ({ text, href, lang }: PublicNavigationListItemProps) => {
  const { toggleNavbar } = useSettings();
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.down(themeConfig.breakpointToChangeLayout));

  const handleNavbarToggle = useCallback(() => {
    toggleNavbar();
  }, [toggleNavbar]);

  return (
    <ListItem
      sx={{
        width: 'fit-content',
        px: 0,
      }}
    >
      <LinkMUI 
        component={Link} 
        href={getLocalizedUrl(href, lang)}
        className="MuiLink-with-hover-effect"
        onClick={isDownLg ? handleNavbarToggle : undefined}
      >
        <Typography
          noWrap
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          {text}
        </Typography>
      </LinkMUI>
    </ListItem>
  )
};

export default PublicNavigationListItem;
