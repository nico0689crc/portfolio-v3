// External imports
import { Box, Typography } from "@mui/material";

// Internal imports
import type { DictionaryType } from "@/types";

// Component: SkillsHeaderTitle
const SkillsHeaderTitle = ({ title }: { title: string }) => (
  <Typography
    id="skills-header-title"
    variant="body1"
    component="h1"
    className="skills-header__title"
    sx={{
      paddingInline: '0.5rem',
      backgroundColor: 'var(--mui-palette-primary-main)',
      color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
    }}
  >
    {title}
  </Typography>
);

// Component: SkillsHeaderSubtitle
const SkillsHeaderSubtitle = ({ subtitle }: { subtitle: string }) => (
  <Typography
    variant="h6"
    component="h2"
    className="skills-header__subtitle"
    dangerouslySetInnerHTML={{
      __html: subtitle,
    }}
  />
);

// Main Component: SkillsHeader
const SkillsHeader = ({ dictionary }: DictionaryType) => (
  <Box
    component="header"
    className="skills-header"
    role="banner"
    aria-labelledby="skills-header-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 4,
    }}
  >
    <SkillsHeaderSubtitle subtitle={dictionary.pages.about_me.skills_title} />
  </Box>
);

export default SkillsHeader;