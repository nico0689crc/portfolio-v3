// Internal type imports
import type { DictionaryType, ResumeDataType } from "@/types";
import Accordion from "../../components/Accordion";
import AccordionSummary from "../../components/AccordionSummary";
import AccordionDetails from "../../components/AccordionDetails";
import { Chip, Stack, Typography } from "@mui/material";
import themeConfig from "@/configs/themeConfig";

// Internal component imports

// Utility function to calculate work duration
const calculateWorkDuration = (startDate: { month: number; year: number }, endDate: { month: number; year: number }) => {
  const start = new Date(`${startDate.month} 1, ${startDate.year}`);
  const end = new Date(`${endDate.month} 1, ${endDate.year}`);
  const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;
  return `${years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''}${years > 0 && months > 0 ? ' and ' : ''}${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`;
};


type ExperienceSectionProps = DictionaryType & {
  title: string;
  experiences: ResumeDataType["experience"];
  accordion_id: string;
};

const ExperienceSection = ({ title, experiences, accordion_id, dictionary }: ExperienceSectionProps) => (
  <Accordion {...{ accordion_id }}>
    <AccordionSummary {...{ accordion_id }}>
      {title}
    </AccordionSummary>
    <AccordionDetails>
      <Stack gap={7}>
        {experiences.map((exp, index) => (
          <Stack key={index}>
            <Stack 
              sx={{
                flexDirection: 'column',
                gap: {
                  xs: 3,
                  [themeConfig.breakpointToChangeLayout]: 2,
                },
                borderLeft: `5px solid var(--mui-palette-primary-main)`,
                px: 5,
                py: 3,
              }}
            >
              <Typography variant="subtitle1" component="h3" noWrap sx={{ fontWeight: 600 }}>
                {`${exp.job_title} (${exp.on_site ? dictionary.common.on_site : dictionary.common.remote})`}
              </Typography>
              <Typography variant="body2" component="h3">
                {`${exp.company} - ${exp.location}`}
              </Typography>
                <Typography variant="body2" component="h3">
                {`${dictionary.months[exp.start_date.month as unknown as keyof typeof dictionary.months].name}, ${exp.start_date.year} - ${dictionary.months[exp.end_date.month as unknown as keyof typeof dictionary.months].name}, ${exp.end_date.year} - (${calculateWorkDuration(exp.start_date, exp.end_date)})`}
              </Typography>
              <Typography variant="body1" component="p">
                {exp.description}
              </Typography>
              <Stack direction='row' flexWrap="wrap" sx={{ gap: 2 }}>
                {exp.skills.map((skill, key) => (
                  <Chip
                    key={key}
                    label={skill}
                    variant="filled"
                    size="small"
                    color="primary"
                  />
                ))}
              </Stack>
            </Stack>
            
          </Stack>
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default ExperienceSection;