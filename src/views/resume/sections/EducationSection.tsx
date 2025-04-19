// External imports
import { Typography } from "@mui/material";

// Internal components
import Accordion from "../components/Accordion";
import AccordionSummary from "../components/AccordionSummary";
import AccordionDetails from "../components/AccordionDetails";

// Types
import type { ResumeDataType } from "@/types";

type EducationSectionProps = {
  education: ResumeDataType["education"];
  accordion_id: string;
};

const EducationSection = ({ education, accordion_id }: EducationSectionProps) => (
  <Accordion {...{ accordion_id }}>
    <AccordionSummary {...{ accordion_id }}>
      <Typography>Education</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </AccordionDetails>
  </Accordion>
);

export default EducationSection;