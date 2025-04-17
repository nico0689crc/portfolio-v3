import type { Locale } from '@/configs/i18n';
import type { Metadata } from 'next';

type MetadataType = {
  [key in Locale]: Metadata;
};

export const metadata: MetadataType = {
  en: {
    title: 'Resume',
    description:
      'Explore the professional resume of Nicolas Ariel Fernandez, a Fullstack Developer with 4+ years of experience in Web Development. View my skills, work experience, education, and certifications. My CV is available for download. Get to know my technical expertise in JavaScript, React.js, Node.js, Docker, TypeScript, and more.',
  },
  es: {
    title: 'Curriculum',
    description:
      'Explora el currículum profesional de Nicolas Ariel Fernandez, un Desarrollador Fullstack con más de 4 años de experiencia en Desarrollo Web. Consulta mis habilidades, experiencia laboral, educación y certificaciones. Mi CV está disponible para descargar. Conoce mi experiencia técnica en JavaScript, React.js, Node.js, Docker, TypeScript y más.',
  },
};
