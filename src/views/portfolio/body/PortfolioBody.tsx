// External Libraries
import { Grid } from '@mui/material';

// Components
import ProjectCard from './ProjectCard';
import ProjectCardContent from './ProjectCardContent';

// Types
import type { DictionaryType, LangParamType, ProjectType } from '@/types';

// Props Type
type PortfolioBodyProps = DictionaryType &  LangParamType & {
  data: ProjectType[];
};

// Main Component
const PortfolioBody = (props: PortfolioBodyProps) => {
  const { data, lang, dictionary } = props;

  return (
    <Grid container spacing={10}>
      {data.map((project) => (
        <ProjectCard key={project.slug}>
          <ProjectCardContent project={project} lang={lang} dictionary={dictionary} />
        </ProjectCard>
      ))}
    </Grid>
  );
};

export default PortfolioBody;
