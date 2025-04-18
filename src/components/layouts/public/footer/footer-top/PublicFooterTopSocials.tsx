// React imports
import React from 'react';

// MUI imports
import { Stack, Typography } from '@mui/material';

// Config imports
import themeConfig from '@/configs/themeConfig';
import type { Locale } from '@/configs/i18n';

// Utils imports
import { getDictionary } from '@/utils/getDictionary';

// Component imports
import PublicSocial from '@/components/layouts/public/common/social/PublicSocial';

type PublicFooterTopSocialsProps = {
  lang: Locale;
};

const PublicFooterTopSocials = async ({ lang }: PublicFooterTopSocialsProps) => {
  const dictionary = await getDictionary(lang);

  return (
    <Stack
      component="section"
      sx={{
        justifyContent: 'center',
        alignItems: {
          xs: 'center',
          [themeConfig.breakpointToChangeLayout]: 'flex-start',
        },
        gap: 1,
        width: {
          xs: '100%',
          [themeConfig.breakpointToChangeLayout]: 'inherit',
        },
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          textTransform: 'uppercase',
          color: 'primary.main',
        }}
        variant="h6"
        noWrap
      >
        {dictionary.footer.socials}
      </Typography>
      <PublicSocial
        sx={{
          color: 'white',
          ':hover': {
            color: 'white',
          },
        }}
        lang={lang}
      />
    </Stack>
  );
};

export default PublicFooterTopSocials;
