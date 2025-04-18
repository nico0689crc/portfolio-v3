// External libraries
import { Box, Typography } from "@mui/material";

// Internal configurations
import themeConfig from "@/configs/themeConfig";

// Types
import type { DictionaryType } from "@/types";

const AboutMeContent = ({ dictionary }: DictionaryType) => (
  <Box
    component="section"
    className="about-me-content"
    role="region"
    aria-labelledby="about-me-content-title"
    sx={{
      display: 'flex',
      gap: '1rem',
      flexDirection: 'column',
      alignItems: {
        xs: 'center',
        [themeConfig.breakpointToChangeLayout]: 'flex-start',
      },
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Typography
      id="about-me-content-title"
      variant="h3"
      className="about-me-content-title"
      dangerouslySetInnerHTML={{
        __html: dictionary.pages.home.sections.about.introduction,
      }}
      sx={{
        span: {
          fontWeight: 700,
          textDecoration: 'underline',
          textDecorationColor: 'var(--mui-palette-primary-main)',
        }
      }}
    />
    <Typography
      variant='body1'
      className="about-me-content-description"
      dangerouslySetInnerHTML={{
        __html: dictionary.pages.home.sections.about.description,
      }}
      sx={{
        textAlign: {
          xs: 'center',
          [themeConfig.breakpointToChangeLayout]: 'left',
        },
      }}
    />
  </Box>
);

export default AboutMeContent;
