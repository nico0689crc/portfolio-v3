// External imports
import { Box, Typography } from "@mui/material";

// Internal imports
import type { DictionaryType } from "@/types";

// Component: FaqHeaderTitle
const FaqHeaderTitle = ({ title }: { title: string }) => (
  <Typography
    id="faq-header-title"
    variant="body1"
    component="span"
    className="faq-header__title"
    sx={{
      paddingInline: '0.5rem',
      backgroundColor: 'var(--mui-palette-primary-main)',
      color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
    }}
  >
    {title}
  </Typography>
);

// Component: FaqHeaderSubtitle
const FaqHeaderSubtitle = ({ subtitle }: { subtitle: string }) => (
  <Typography
    variant="h5"
    component="p"
    className="faq-header__subtitle"
  >
    {subtitle}
  </Typography>
);

// Main Component: FaqHeader
const FaqHeader = ({ dictionary }: DictionaryType) => (
  <Box
    component="header"
    className="faq-header"
    role="banner"
    aria-labelledby="faq-header-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 4,
    }}
  >
    <FaqHeaderTitle title={dictionary.pages.home.sections.faq.title} />
    <FaqHeaderSubtitle subtitle={dictionary.pages.home.sections.faq.sub_title} />
  </Box>
);

export default FaqHeader;