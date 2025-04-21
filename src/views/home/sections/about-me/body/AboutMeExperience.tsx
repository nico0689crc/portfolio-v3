// External imports
import { Box, Typography } from '@mui/material';

// Internal imports
import type { DictionaryType } from '@/types';
import themeConfig from '@/configs/themeConfig';

const AboutMeExperience = ({ dictionary }: DictionaryType) => (
  <Box
    component="section"
    className="about-me-experience"
    role="region"
    aria-labelledby="about-me-experience-title"
    gap={2}
    sx={{
      display: 'flex',
      flexDirection: {
        xs: 'row',
        [themeConfig.breakpointToChangeLayout]: 'column',
      },
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography
      id="about-me-experience-title"
      variant="h3"
      component="h3"
      className="about-me-experience-title"
      sx={{
        position: 'relative',
        lineHeight: '0.8',
      }}
    >
      {dictionary.pages.home.sections.about.years}
    </Typography>
    <Typography
      component="p"
      className="about-me-experience-description"
      noWrap
      sx={{
        fontWeight: 500,
        span: {
          fontWeight: 700,
        },
      }}
      dangerouslySetInnerHTML={{
        __html: dictionary.pages.home.sections.about.years_of_experience,
      }}
    />
  </Box>
);

export default AboutMeExperience;
