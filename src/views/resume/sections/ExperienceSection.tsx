// External library imports
import { AccordionDetails, Typography } from "@mui/material";

// Internal type imports
import type { ResumeDataType } from "@/types";

// Internal component imports
import Accordion from "../components/Accordion";
import AccordionSummary from "../components/AccordionSummary";

type ExperienceSectionProps = {
  title: string;
  experiences: ResumeDataType["experience"];
  accordion_id: string;
};

const ExperienceSection = ({ title, experiences, accordion_id }: ExperienceSectionProps) => (
  <Accordion {...{ accordion_id }}>
    <AccordionSummary {...{ accordion_id }}>
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.job_title}</h3>
          <p>{exp.company}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </AccordionDetails>
  </Accordion>
);

export default ExperienceSection;