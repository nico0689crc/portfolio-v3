// External imports
import { Box, Typography } from "@mui/material";

// Internal imports
import type { DictionaryType } from "@/types";

// Component: ResumeHeaderTitle
const ResumeHeaderTitle = ({ title }: { title: string }) => (
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

// Component: ResumeHeaderSubtitle
const ResumeHeaderSubtitle = ({ subtitle }: { subtitle: string }) => (
  <Typography
    variant="h5"
    component="h1"
    className="resume-header__subtitle"
  >
    {subtitle}
  </Typography>
);

// Main Component: ResumeHeader
const ResumeHeader = ({ dictionary }: DictionaryType) => (
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
    <ResumeHeaderTitle title={dictionary.pages.resume.title} />
    <ResumeHeaderSubtitle subtitle={dictionary.pages.resume.sub_title} />
  </Box>
);

export default ResumeHeader;