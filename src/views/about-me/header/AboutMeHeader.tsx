// External imports
import { Box, Typography } from '@mui/material';

// Internal imports
import type { DictionaryType } from '@/types';

// Component: AboutMeHeaderTitle
const AboutMeHeaderTitle = ({ title }: { title: string }) => (
  <Typography
    id="about-me-header-title"
    variant="body1"
    component="h1"
    className="about-me-header__title"
    sx={{
      paddingInline: '0.5rem',
      backgroundColor: 'var(--mui-palette-primary-main)',
      color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
    }}
  >
    {title}
  </Typography>
);

// Component: AboutMeHeaderSubtitle
const AboutMeHeaderSubtitle = ({ subtitle }: { subtitle: string }) => (
  <Typography variant="h6" component="h2" className="about-me-header__subtitle">
    {subtitle}
  </Typography>
);

// Main Component: AboutMeHeader
const AboutMeHeader = ({ dictionary }: DictionaryType) => (
  <Box
    component="header"
    className="about-me-header"
    role="banner"
    aria-labelledby="about-me-header-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 4,
    }}
  >
    <AboutMeHeaderTitle title={dictionary.pages.about_me.title} />
    <AboutMeHeaderSubtitle subtitle={dictionary.pages.about_me.know_me_more} />
  </Box>
);

export default AboutMeHeader;
