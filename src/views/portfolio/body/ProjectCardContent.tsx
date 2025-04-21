import React from 'react'; // React imports
import Image from 'next/image'; // Next.js imports
import Link from 'next/link'; // Next.js imports

// Material-UI imports
import { Stack, Typography, Chip, Link as LinkMUI } from '@mui/material';

// Local component imports
import ProjectCardActions from './ProjectCardActions';

// Type imports
import type { DictionaryType, LangParamType, ProjectType } from '@/types';

// Utility imports
import { getLocalizedUrl } from '@/utils/i18n';
import routes from '@/configs/routes';

type ProjectCardContentProps = LangParamType & DictionaryType & {
  project: ProjectType;
};

const ProjectCardContent = (props: ProjectCardContentProps) => {
  const { project, lang, dictionary } = props;

  return (
    <>
      <Image
        src={project.image[0].src}
        alt={project.information[lang].title}
        width={500}
        height={300}
        style={{
          borderRadius: '10px',
          objectFit: 'cover',
          width: '100%',
          minHeight: '300px',
          marginBottom: '1rem',
        }}
        priority
      />
      <Stack spacing="1rem" sx={{ flexGrow: 1 }}>
        <LinkMUI
          component={Link}
          href={getLocalizedUrl(`${routes.pages.public.portfolio}/${project.slug}`, lang)}
          className="MuiLink-with-hover-effect"
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            width: 'fit-content',
          }}
        >
          <Typography
            variant="subtitle1"
            component="h1"
            color="text.primary"
            fontWeight={500}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
            }}
          >
            {project.information[lang].title}
          </Typography>
        </LinkMUI>
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 5,
            overflow: 'hidden',
          }}
        >
          {project.information[lang].description}
        </Typography>
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
              <Chip
                key={`tag-${index}`}
                variant="filled"
                color="primary"
                size="small"
                label={tag}
              />
            ))}
          </Stack>
        )}
        <LinkMUI
          component={Link}
          href={getLocalizedUrl(`${routes.pages.public.portfolio}/${project.slug}`, lang)}
          className="MuiLink-with-hover-effect"
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            fontWeight: 600,
            marginTop: '1rem',
            width: 'fit-content',
          }}
        >
          {dictionary.common.view_more}
        </LinkMUI>
        <ProjectCardActions project={project} />
      </Stack>
    </>
  );
};

export default ProjectCardContent;
