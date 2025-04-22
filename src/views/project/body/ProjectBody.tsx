// React
import React from 'react';

// MUI Components
import { Stack, Chip } from '@mui/material';

// Components
import Iconify from '@/components/ui/Icon';
import IconButton from '@/components/ui/IconButton';

// Types
import type { DictionaryType, LangParamType, ProjectType } from '@/types';

// Props Type
type ProjectBodyProps = DictionaryType &
  LangParamType & {
    project: ProjectType;
  };

// Main Component
const ProjectBody = (props: ProjectBodyProps) => {
  const { project } = props;

  return (
    <>
      {project.tags.length > 0 && (
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            gap: '0.5rem',
            flexGrow: 1,
          }}
        >
          {project.tags.map((tag, index) => (
            <Chip key={`tag-${index}`} variant="filled" color="primary" size="small" label={tag} />
          ))}
        </Stack>
      )}
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'center',
          },
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
    </>
  );
};

export default ProjectBody;
