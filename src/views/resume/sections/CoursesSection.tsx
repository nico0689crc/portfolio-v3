// Types
import type { DictionaryType, ResumeDataType } from '@/types';

// Internal components
import Accordion from '../components/Accordion';
import AccordionSummary from '../components/AccordionSummary';
import AccordionDetails from '../components/AccordionDetails';
import { Button, Chip, Stack, Typography } from '@mui/material';
import themeConfig from '@/configs/themeConfig';
import Link from 'next/link';

type CoursesSectionProps = DictionaryType & {
  courses: ResumeDataType['courses'];
  accordion_id: string;
};

const CoursesSection = ({ courses, accordion_id, dictionary }: CoursesSectionProps) => (
  <Accordion {...{ accordion_id }}>
    <AccordionSummary {...{ accordion_id }}>
      {dictionary.pages.resume.accordion_sections.courses}
    </AccordionSummary>
    <AccordionDetails>
      <Stack gap={7}>
        {courses.map((course, index) => (
          <Stack key={index}>
            <Stack
              sx={{
                flexDirection: 'column',
                gap: {
                  xs: 3,
                  [themeConfig.breakpointToChangeLayout]: 5,
                },
                borderLeft: `5px solid var(--mui-palette-primary-main)`,
                px: 5,
                py: 3,
              }}
            >
              <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600 }}>
                {`${course.course_name}`}
              </Typography>
              <Typography variant="body1" component="p">
                {course.description}
              </Typography>
              <Stack direction="row" flexWrap="wrap" sx={{ gap: 2 }}>
                {course.skills.map((skill, key) => (
                  <Chip key={key} label={skill} variant="filled" size="small" color="primary" />
                ))}
              </Stack>
              <Stack direction="row" gap={2}>
                {course.certificate_link && (
                  <Button
                    component={Link}
                    href={course.certificate_link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Ver certificado
                  </Button>
                )}
                {course.course_link && (
                  <Button
                    component={Link}
                    href={course.course_link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Ver curso
                  </Button>
                )}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default CoursesSection;
