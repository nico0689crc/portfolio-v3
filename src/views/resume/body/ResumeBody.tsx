// External Libraries
import { Button, Stack } from '@mui/material';

// Context
import { ResumeProvider } from '../context/ResumeProvider';

// Sections
import EducationSection from '../sections/EducationSection';
import CoursesSection from '../sections/CoursesSection';

// Types
import type { DictionaryType, LangParamType, ResumeDataType } from '@/types';
import ExperienceSection from '../sections/experience/ExperienceSection';
import Link from 'next/link';

// Resumes
const resumeES = '/resume/Nicolas_Ariel_Fernandez_Fullstack_Developer_Javascript_CV_ES.pdf';
const resumeEN = '/resume/Nicolas_Ariel_Fernandez_Fullstack_Developer_Javascript_Resume_EN.pdf';

// Props Type
type ResumeBodyProps = DictionaryType &
  LangParamType & {
    data: ResumeDataType;
  };

const ResumeBody = (props: ResumeBodyProps) => {
  const { data, dictionary, lang } = props;

  return (
    <>
      <Button
        variant="contained"
        component={Link}
        target="_blank"
        href={lang === 'es' ? resumeES : resumeEN}
        className="resume-download-button"
      >
        {dictionary.pages.home.sections.hero.download_cv}
      </Button>
      <Stack sx={{ gap: 4 }}>
        <ResumeProvider>
          <ExperienceSection
            title={dictionary.pages.resume.accordion_sections.it_experience}
            experiences={data.experience.filter((exp) => exp.is_IT_experience)}
            accordion_id="it-experience"
            dictionary={dictionary}
          />
          <ExperienceSection
            title={dictionary.pages.resume.accordion_sections.other_experience}
            experiences={data.experience.filter((exp) => !exp.is_IT_experience)}
            accordion_id="other-experience"
            dictionary={dictionary}
          />
          <EducationSection
            accordion_id="education"
            education={data.education}
            dictionary={dictionary}
          />
          <CoursesSection accordion_id="courses" courses={data.courses} dictionary={dictionary} />
        </ResumeProvider>
      </Stack>
    </>
  );
};

export default ResumeBody;
