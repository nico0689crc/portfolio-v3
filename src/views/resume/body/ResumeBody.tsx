// External Libraries
import { Stack } from "@mui/material";

// Context
import { ResumeProvider } from "../context/ResumeProvider";

// Sections
import ExperienceSection from "../sections/ExperienceSection";
import EducationSection from "../sections/EducationSection";
import CoursesSection from "../sections/CoursesSection";

// Types
import type { ResumeDataType } from "@/types";

// Props Type
type ResumeBodyProps = {
  data: ResumeDataType;
};

const ResumeBody = (props: ResumeBodyProps) => {
  const { data } = props;

  return (
    <Stack sx={{ gap: 4 }}>
      <ResumeProvider>
        <ExperienceSection
          title="IT Experience"
          experiences={data.experience.filter((exp) => exp.is_IT_experience)}
          accordion_id="it-experience"
        />
        <ExperienceSection
          title="Other Experience"
          experiences={data.experience.filter((exp) => !exp.is_IT_experience)}
          accordion_id="other-experience"
        />
        <EducationSection
          accordion_id="education" 
          education={data.education} 
        />
        <CoursesSection
          accordion_id="courses" 
          courses={data.courses} 
        />
      </ResumeProvider>
    </Stack>
  );
};

export default ResumeBody;