// External Libraries
import { Stack } from "@mui/material";

// Context
import { ResumeProvider } from "../context/ResumeProvider";

// Sections
import EducationSection from "../sections/EducationSection";
import CoursesSection from "../sections/CoursesSection";

// Types
import type { DictionaryType, ResumeDataType } from "@/types";
import ExperienceSection from "../sections/experience/ExperienceSection";

// Props Type
type ResumeBodyProps = DictionaryType & {
  data: ResumeDataType;
};

const ResumeBody = (props: ResumeBodyProps) => {
  const { data, dictionary } = props;

  return (
    <Stack sx={{ gap: 4 }}>
      <ResumeProvider>
        <ExperienceSection
          title="IT Experience"
          experiences={data.experience.filter((exp) => exp.is_IT_experience)}
          accordion_id="it-experience"
          dictionary={dictionary}
        />
        <ExperienceSection
          title="Other Experience"
          experiences={data.experience.filter((exp) => !exp.is_IT_experience)}
          accordion_id="other-experience"
          dictionary={dictionary}
        />
        <EducationSection
          accordion_id="education" 
          education={data.education}
          dictionary={dictionary} 
        />
        <CoursesSection
          accordion_id="courses" 
          courses={data.courses} 
          dictionary={dictionary}
        />
      </ResumeProvider>
    </Stack>
  );
};

export default ResumeBody;