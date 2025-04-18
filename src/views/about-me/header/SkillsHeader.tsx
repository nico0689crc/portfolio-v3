// External imports
import { Box, Typography } from "@mui/material";

// Internal imports
import type { DictionaryType } from "@/types";

// Component: SkillsHeaderTitle
const SkillsHeaderTitle = ({ subtitle }: { subtitle: string }) => (
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
    <SkillsHeaderTitle subtitle={dictionary.pages.about_me.skills_title} />
  </Box>
);

export default SkillsHeader;