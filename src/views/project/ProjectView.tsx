import type { DictionaryType, LangParamType, ProjectType } from '@/types';
import ProjectWrapper from './ProjectWrapper';
import ProjectHeader from './header/ProjectHeader';
import ProjectBody from './body/ProjectBody';
import { Grid, Stack } from '@mui/material';
import themeConfig from '@/configs/themeConfig';
import Breadcrumbs from '@/components/ui/BreadCrumbs';
import { getLocalizedUrl } from '@/utils/i18n';
import routes from '@/configs/routes';
import Carousel from '@/components/ui/carousel/Carousel';
import makeSlide from '@/utils/makeSlide';

type ProjectViewProps = DictionaryType &
  LangParamType & {
    project: ProjectType;
  };

const ProjectView = async (props: ProjectViewProps) => {
  const { dictionary, lang, project } = props;

  const slidesContent = await Promise.all(
    project.image.map(async ({ src, alt }) => {
      const slide = await makeSlide(src);

      return {
        ...slide,
        alt,
      };
    })
  );

  return (
    <ProjectWrapper>
      <Breadcrumbs
        links={[
          {
            title: dictionary.pages.home.title,
            href: getLocalizedUrl(routes.pages.public.home, lang),
          },
          {
            title: dictionary.pages.portfolio.title,
            href: getLocalizedUrl(routes.pages.public.portfolio, lang),
          },
          {
            title: project?.information?.[lang].title,
          },
        ]}
      />
      <Grid
        container
        spacing={10}
        direction={{ xs: 'column', [themeConfig.breakpointToChangeLayout]: 'row' }}
      >
        <Grid size={{ xs: 12, [themeConfig.breakpointToChangeLayout]: 6 }}>
          <Carousel slides={slidesContent} />
        </Grid>
        <Grid size={{ xs: 12, [themeConfig.breakpointToChangeLayout]: 6 }} sx={{ height: '100%' }}>
          <Stack
            sx={{
              gap: '3rem',
              height: '100%',
              paddingY: '2rem',
            }}
          >
            <ProjectHeader dictionary={dictionary} lang={lang} project={project} />
            <ProjectBody project={project} dictionary={dictionary} lang={lang} />
          </Stack>
        </Grid>
      </Grid>
    </ProjectWrapper>
  );
};

export default ProjectView;
