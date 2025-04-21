// External imports
import { Box, Typography } from '@mui/material';

// Internal imports
import type { DictionaryType } from '@/types';

// Component: PortfolioHeaderTitle
const PortfolioHeaderTitle = ({ title }: { title: string }) => (
  <Typography
    id="resume-header-title"
    variant="body1"
    component="h1"
    className="resume-header__title"
    sx={{
      paddingInline: '0.5rem',
      backgroundColor: 'var(--mui-palette-primary-main)',
      color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
    }}
  >
    {title}
  </Typography>
);

// Component: PortfolioHeaderSubtitle
const PortfolioHeaderSubtitle = ({ subtitle }: { subtitle: string }) => (
  <Typography variant="h5" component="h1" className="resume-header__subtitle">
    {subtitle}
  </Typography>
);

// Component: PortfolioHeaderDescription
const PortfolioHeaderDescription = ({ description }: { description: string }) => (
  <Typography variant="body1" className="resume-header__description">
    {description}
  </Typography>
);


// Main Component: PortfolioHeader
const PortfolioHeader = ({ dictionary }: DictionaryType) => (
  <Box
    component="header"
    className="resume-header"
    role="banner"
    aria-labelledby="resume-header-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 4,
    }}
  >
    <PortfolioHeaderTitle title={dictionary.pages.portfolio.title} />
    <PortfolioHeaderSubtitle subtitle={dictionary.pages.portfolio.sub_title} />
    <PortfolioHeaderDescription description={dictionary.pages.portfolio.description} />
  </Box>
);

export default PortfolioHeader;
