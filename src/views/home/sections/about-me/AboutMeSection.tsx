// External Imports
import { Stack, Typography, Box, Button } from '@mui/material';

// Internal Imports
import type { ChildrenType, DictionaryType, LangParamType } from '@/types';
import themeConfig from '@/configs/themeConfig';
import AboutMeSectionWrapper from './AboutMeSectionWrapper';
import Link from 'next/link';
import { getLocalizedUrl } from '@/utils/i18n';
import routes from '@/configs/routes';

// Components
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
    <Typography
      id="about-me-header-title"
      variant="h1"
      component="h1"
      className="about-me-header-title"
      sx={{
        fontSize: '1rem',
        letterSpacing: '0.1rem',
        paddingInline: '0.5rem',
        backgroundColor: 'var(--mui-palette-primary-main)',
        color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
      }}
    >
      {dictionary.pages.home.sections.about.title}
    </Typography>
    <Typography
      variant="h2"
      component="p"
      className="about-me-header-subtitle"
      sx={{
        fontSize: {
          xs: '2rem',
          sm: '2.5rem',
          md: '2.7rem',
          [themeConfig.breakpointToChangeLayout]: '2.6rem',
        }
      }}
    >
      {dictionary.pages.home.sections.about.know_me_more}
    </Typography>
  </Box>
);

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
      variant="h2"
      component="h2"
      className="about-me-content-title"
      dangerouslySetInnerHTML={{
        __html: dictionary.pages.home.sections.about.introduction,
      }}
      sx={{
        fontSize: {
          xs: '1.6rem',
          sm: '1.7rem',
          md: '1.8rem',
          [themeConfig.breakpointToChangeLayout]: '2rem',
        },
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
        fontSize: {
          xs: '1rem',
          sm: '1.1rem',
          md: '1.2rem',
          [themeConfig.breakpointToChangeLayout]: '1.3rem',
        },
        textAlign: {
          xs: 'center',
          [themeConfig.breakpointToChangeLayout]: 'left',
        },
        "& mark": {
          backgroundColor: 'var(--mui-palette-primary-main)',
          color: 'var(--mui-palette-primary-contrastText)',
          paddingInline: '0.2rem',
        }
      }}
    />
  </Box>
);

const AboutMeExperience = ({ dictionary }: DictionaryType) => (
  <Box
    component="section"
    className="about-me-experience"
    role="region"
    aria-labelledby="about-me-experience-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
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
        fontSize: {
          xs: '6rem',
          sm: '7rem',
          md: '8rem',
          [themeConfig.breakpointToChangeLayout]: '9rem',
        },
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
        fontSize: {
          xs: '1.4rem',
          sm: '1.5rem',
          md: '1.6rem',
          [themeConfig.breakpointToChangeLayout]: '1.8rem',
        },
        fontWeight: 500,
        "span": {
          fontWeight: 700,
        }
      }}
      dangerouslySetInnerHTML={{
        __html: dictionary.pages.home.sections.about.years_of_experience,
      }}
    />
  </Box>
);

const AboutMeBody = ({ children }: ChildrenType) => (
  <Stack
    component="div"
    className="about-me-body"
    role="region"
    aria-labelledby="about-me-body-title"
    sx={{
      flexDirection: {
        xs: 'column',
        [themeConfig.breakpointToChangeLayout]: 'row',
      },
      gap: {
        xs: '2rem',
        [themeConfig.breakpointToChangeLayout]: '6rem',
      },
    }}
  >
    {children}
  </Stack>
);

const AboutMeSection = async ({ dictionary, lang }: DictionaryType & LangParamType) => (
  <AboutMeSectionWrapper
    component="section"
    id='about-me-section'
    className="about-me-section"
    role="region"
    aria-labelledby="about-me-header-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      py: {
        xs: '4rem',
        [themeConfig.breakpointToChangeLayout]: '8rem',
      }
    }}
  >
    <AboutMeHeader dictionary={dictionary} />
    <AboutMeBody>
      <AboutMeContent dictionary={dictionary} />
      <AboutMeExperience dictionary={dictionary} />
    </AboutMeBody>
    <Button
      component={Link}
      href={getLocalizedUrl(routes.pages.public.aboutMe, lang)}
      variant='contained'
      color='primary'
    >
      {dictionary.pages.home.sections.about.more_about_me}
    </Button>
  </AboutMeSectionWrapper>
)

export default AboutMeSection;
