// React and Next.js imports
import Link from 'next/link';

// MUI imports
import { Stack, Typography, Link as LinkMUI } from '@mui/material';

// Config imports
import routes from '@/configs/routes';
import type { Locale } from '@/configs/i18n';

// Utility imports
import { getLocalizedUrl } from '@/utils/i18n';

type PublicFooterBottomProps = {
  lang: Locale;
};

const PublicFooterBottom = async ({ lang }: PublicFooterBottomProps) => (
  <Stack
    component="section"
    sx={{
      flexDirection: 'row',
      gap: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography sx={{ color: 'white' }}>{`Copyright © ${new Date().getFullYear()}`}</Typography>
    <LinkMUI
      component={Link}
      href={getLocalizedUrl(routes.pages.public.home, lang)}
      className="MuiLink-with-hover-effect"
    >
      Nicolas Fernandez
    </LinkMUI>
  </Stack>
);

export default PublicFooterBottom;
