// Internal components
import Accordion from "../components/Accordion";
import AccordionSummary from "../components/AccordionSummary";
import AccordionDetails from "../components/AccordionDetails";

// Types
import type { DictionaryType, ResumeDataType } from "@/types";
import { Stack, Typography } from "@mui/material";
import themeConfig from "@/configs/themeConfig";

type EducationSectionProps = DictionaryType & {
  education: ResumeDataType["education"];
  accordion_id: string;
};

const EducationSection = ({ education, accordion_id, dictionary }: EducationSectionProps) => (
  <Accordion {...{ accordion_id }}>
    <AccordionSummary {...{ accordion_id }}>
      {dictionary.pages.resume.accordion_sections.education}
    </AccordionSummary>
    <AccordionDetails>
      <Stack gap={7}>
        {education.map((edu, index) => (
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
              <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600 }}>
                {`${edu.field_of_study}`}
              </Typography>
              <Typography variant="subtitle2" component="h3">
                {`${edu.institution} - ${edu.location}`}
              </Typography>
                <Typography variant="body2" component="h3">
                {`${dictionary.months[edu.start_date.month as unknown as keyof typeof dictionary.months].name}, ${edu.start_date.year} - ${dictionary.months[edu.end_date.month as unknown as keyof typeof dictionary.months].name}, ${edu.end_date.year}`}
              </Typography>
              <Typography variant="body1" component="p">
                {edu.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default EducationSection;