// External libraries
import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';

// Internal components
import TypewriterEffect from '@/components/ui/TypewriterEffect';

// Configs
import themeConfig from '@/configs/themeConfig';
import routes from '@/configs/routes';

// Utilities
import { getLocalizedUrl } from '@/utils/i18n';

// Types
import type { DictionaryType, LangParamType } from '@/types';

// Resumes
const resumeES = "/resume/Nicolas_Ariel_Fernandez_Fullstack_Developer_Javascript_CV_ES.pdf";
const resumeEN = "/resume/Nicolas_Ariel_Fernandez_Fullstack_Developer_Javascript_Resume_EN.pdf";

type HeroSectionTitleProps = DictionaryType & LangParamType;

const HeroSectionTitle = (props: HeroSectionTitleProps) => {
  const { dictionary, lang } = props;

  return (
    <Stack
      className="hero-section-title"
      sx={{
        flexDirection: 'column',
        alignItems: {
          xs: 'center',
          [themeConfig.breakpointToChangeLayout]: 'flex-start',
        },
        justifyContent: {
          xs: 'flex-start',
          [themeConfig.breakpointToChangeLayout]: 'center',
        },
        flexGrow: 1,
        gap: {
          xs: 3,
          [themeConfig.breakpointToChangeLayout]: 4,
        },
        "*:not(a)": {
          color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
        },
      }}
    >
      <HeroTitle title={dictionary.pages.home.sections.hero.title} />
      <HeroSubtitle
        phrases={[
          dictionary.pages.home.sections.hero.subtitle_1,
          dictionary.pages.home.sections.hero.subtitle_2,
        ]}
      />
      <HeroSkills skills={dictionary.pages.home.sections.hero.skills} />
      <HeroButtons dictionary={dictionary} lang={lang} />
    </Stack>
  );
};

const HeroTitle = ({ title }: { title: string }) => (
  <Typography
    className="hero-title"
    variant="h1"
    sx={{
      fontSize: {
        xs: '1.5rem',
        sm: '2rem',
        lg: '3rem',
      },
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 300,
    }}
    noWrap
  >
    {title}
  </Typography>
);

const HeroSubtitle = ({ phrases }: { phrases: string[] }) => (
  <TypewriterEffect
    className="hero-subtitle"
    phrases={phrases}
    period={2000}
    variant="h1"
    sx={{
      fontSize: {
        xs: '2rem',
        sm: '3rem',
        lg: '4rem',
      },
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'center',
      minHeight: {
        xs: '3rem',
        sm: '4.5rem',
        [themeConfig.breakpointToChangeLayout]: '6rem',
      },
    }}
  />
);

const HeroSkills = ({ skills }: { skills: string }) => (
  <Typography
    className="hero-skills"
    variant="h2"
    sx={{
      fontSize: {
        xs: '1rem',
        sm: '1.1rem',
        md: '1.2rem',
        lg: '1.3rem',
        xl: '1.4rem',
      },
      fontWeight: 400,
      textAlign: {
        xs: 'center',
        [themeConfig.breakpointToChangeLayout]: 'left',
      },
      maxWidth:{
        xs: '20rem',
        sm: '25rem',
        md: '30rem',
        [themeConfig.breakpointToChangeLayout]: '100%',
      },
    }}
  >
    {skills}
  </Typography>
);

const HeroButtons = ({
  dictionary,
  lang,
}: {
  dictionary: DictionaryType['dictionary'];
  lang: LangParamType['lang'];
}) => (
  <Stack
    className="hero-buttons"
    sx={{
      gap: {
        xs: 3,
        [themeConfig.breakpointToChangeLayout]: 5,
      },
      flexDirection: {
        xs: 'column',
        [themeConfig.breakpointToChangeLayout]: 'row',
      },
    }}
  >
    <Button
      className="view-portfolio-button"
      variant="contained"
      color="secondary"
      component={Link}
      href={getLocalizedUrl(routes.pages.public.portfolio, lang)}
      sx={{
        color: `rgb(var(--mui-mainColorChannels-dark) / 1)`,
      }}
    >
      {dictionary.pages.home.sections.hero.view_portfolio_button}
    </Button>
    <Button
      className="contact-me-button"
      variant="outlined"
      color="secondary"
      component={Link}
      target='_blank'
      href={lang === 'es' ? resumeES : resumeEN}
      sx={{
        color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
        borderColor: `rgb(var(--mui-mainColorChannels-light) / 1)`,
      }}
    >
      {dictionary.pages.home.sections.hero.download_cv}
    </Button>
  </Stack>
);

export default HeroSectionTitle;
