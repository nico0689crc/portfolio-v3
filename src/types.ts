// Types

// Locale and dictionary imports
import type { Locale } from './configs/i18n';
import type { getDictionary } from './utils/getDictionary';

// General types
export type Mode = 'system' | 'light' | 'dark';
export type SystemMode = 'light' | 'dark';
export type PageKeys = 'home' | 'about_me' | 'resume' | 'portfolio' | 'contact';

// Parameter types
export type LangParamPromiseType = {
  params: Promise<{ lang: Locale }>;
};

export type LangParamType = {
  lang: Locale;
};

// Component types
export type ChildrenType = {
  children: React.ReactNode;
};

// Utility types
export type DictionaryType = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

// Social link types
export type PublicSocialLinkType = {
  icon: string;
  titleTooltip: string;
  href: string;
  ariaLabel: {
    es: string;
    en: string;
  };
  blank?: boolean;
};

// FAQ types
export type FAQType = {
  id: string;
  question: string;
  answer: string;
};

export type FAQListType = {
  [key in Locale]: FAQType[];
};

// Skill types
export type SkillType = 'frontend' | 'backend' | 'data_base' | 'devops' | 'other';

export type Skill = {
  skill_code: string;
  skill_title: string;
  progress: number;
  icon: string;
  type: SkillType;
};

export type GroupedSkills = {
  [key in SkillType]: Skill[];
};

// Experience types
export type ExperienceType = {
  job_title: string;
  company: string;
  start_date: {
    year: number;
    month: number;
  };
  end_date: {
    year: number;
    month: number;
  };
  duration: {
    years: number;
    months: number;
  };
  location: string;
  on_site: boolean;
  skills: string[];
  description: string;
  is_IT_experience: boolean;
};

export type CourseType = {
  course_name: string;
  issuer: string;
  issue_date: {
    month: number | null;
    year: number | null;
  };
  credential_id: string | null;
  skills: string[];
  certificate_link: string | null;
  course_link: string;
  description: string;
};

export type EducationType = {
  degree: string;
  field_of_study: string;
  institution: string;
  start_date: {
    month: number;
    year: number;
  };
  end_date: {
    month: number;
    year: number;
  };
  location: string;
  description: string;
};

// Resume types
export type ResumeDataType = {
  experience: ExperienceType[];
  courses: CourseType[];
  education: EducationType[];
};

export type ResumeType = {
  [key in Locale]: ResumeDataType;
};

export type ProjectType = {
  information: {
    [key in Locale]: {
      title: string;
      description: string;
    };
  };
  tags: string[];
  github: {
    name: string;
    url: string;
    description?: string;
  }[];
  slug: string;
  website: string;
  figma?: string;
  image: {
    src: string;
    alt: string;
    description?: string;
  }[];
};

export type SlugProjectParamPromiseType = {
  params: Promise<{ slug: string }>;
};

export type BreadcrumbLinkType = {
  title: string;
  href?: string;
};

export type CarouselSlide = {
  src: string;
  alt?: string;
  blurDataURL?: string;
};
