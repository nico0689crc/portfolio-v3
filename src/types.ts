// Types
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

export type FAQType = {
  id: string;
  question: string;
  answer: string;
};

export type FAQListType = {
  [key in Locale]: FAQType[];
};

export type SkillType = "frontend" | "backend" | "data_base" | "devops" | "other";

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