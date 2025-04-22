// External libraries
import { Stack } from '@mui/material';

// Components
import Iconify from '@/components/ui/Icon';

// Types
import type { ProjectType } from '@/types';
import IconButton from '@/components/ui/IconButton';

type ProjectCardActionsProps = {
  project: ProjectType;
};

const ProjectCardActions = ({ project }: ProjectCardActionsProps) => (
  <Stack
    sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '2px solid var(--mui-palette-divider)',
    }}
  >
    {project.github.map((item, index) => (
      <IconButton
        key={`github-btn-${index}`}
        title={item.name}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.name}
      >
        <Iconify icon="ri:github-fill" />
      </IconButton>
    ))}
    <IconButton
      title="Website"
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Website"
    >
      <Iconify icon="ri:global-line" />
    </IconButton>
    {project.figma && (
      <IconButton
        title="Figma"
        href={project.figma}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Figma"
      >
        <Iconify icon="ri:figma-line" />
      </IconButton>
    )}
  </Stack>
);

export default ProjectCardActions;
