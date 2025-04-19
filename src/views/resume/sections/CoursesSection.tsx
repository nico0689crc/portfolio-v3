// External imports
import { Typography } from "@mui/material";

// Types
import type { ResumeDataType } from "@/types";

// Internal components
import Accordion from "../components/Accordion";
import AccordionSummary from "../components/AccordionSummary";
import AccordionDetails from "../components/AccordionDetails";

type CoursesSectionProps = {
  courses: ResumeDataType["courses"];
  accordion_id: string;
};

const CoursesSection = ({ courses, accordion_id }: CoursesSectionProps) => (
  <Accordion {...{ accordion_id }}>
    <AccordionSummary {...{ accordion_id }}>
      <Typography>Courses</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.course_name}</h3>
          <p>{course.description}</p>
          <p>{course.course_link}</p>
        </div>
      ))}
    </AccordionDetails>
  </Accordion>
);

export default CoursesSection;