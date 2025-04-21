import React from 'react'; // React imports

// MUI imports
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// Types
import type { ChildrenType } from '@/types';

const ProjectCard = ({ children }: ChildrenType) => (
  <Grid
    component="section"
    size={{ xs: 12, md: 6, lg: 4 }}
    sx={{
      display: 'flex',
      padding: '1.25rem',
      backgroundColor: 'background.paper',
      borderRadius: '8px',
      transition: 'transform 0.5s, box-shadow 0.5s',
      ':hover': {
        transform: 'scale(1.005)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <Stack>
      {children}
    </Stack>
  </Grid>
);

export default ProjectCard;