// External imports
import { Box, Typography } from '@mui/material';

// Internal imports
import type { DictionaryType, LangParamType, ProjectType } from '@/types';
import themeConfig from '@/configs/themeConfig';

// Component: ProjectHeaderTitle
const ProjectHeaderTitle = ({ title }: { title: string }) => (
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

// Component: ProjectHeaderSubtitle
const ProjectHeaderSubtitle = ({ subtitle }: { subtitle: string }) => (
  <Typography variant="h5" component="h1" className="resume-header__subtitle">
    {subtitle}
  </Typography>
);

// Component: ProjectHeaderDescription
const ProjectHeaderDescription = ({ description }: { description: string }) => (
  <Typography
    variant="body1"
    sx={{ textAlign: { xs: 'center', [themeConfig.breakpointToChangeLayout]: 'left' } }}
    className="resume-header__description"
  >
    {description}
  </Typography>
);

type ProjectHeaderProps = DictionaryType &
  LangParamType & {
    project: ProjectType;
  };

// Main Component: ProjectHeader
const ProjectHeader = ({ project, dictionary, lang }: ProjectHeaderProps) => (
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
    <ProjectHeaderTitle title={dictionary.pages.project.title} />
    <ProjectHeaderSubtitle subtitle={project?.information?.[lang]?.title} />
    <ProjectHeaderDescription description={project?.information?.[lang]?.description} />
  </Box>
);

export default ProjectHeader;
