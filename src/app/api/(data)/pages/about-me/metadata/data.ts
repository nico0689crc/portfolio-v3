import type { Locale } from '@/configs/i18n';
import type { Metadata } from 'next';

type MetadataType = {
  [key in Locale]: Metadata;
};

export const metadata: MetadataType = {
  en: {
    title: 'About Me',
    description:
      'I am Nicolas Ariel Fernandez, a Fullstack Developer with over 3 years of experience in Web and Software Development. Specializing in JavaScript, React.js, Next.js, TypeScript, Node.js, and DevOps practices. Currently based in Neuquén, Argentina, and open to remote projects. Learn more about my skills, experience, and professional journey.',
  },
  es: {
    title: 'Sobre mí',
    description:
      'Soy Nicolas Ariel Fernandez, un Desarrollador Fullstack con más de 3 años de experiencia en Desarrollo Web y de Software. Especializado en JavaScript, React.js, Next.js, TypeScript, Node.js y prácticas de DevOps. Actualmente radicado en Neuquén, Argentina, y abierto a proyectos remotos. Aprende más sobre mis habilidades, experiencia y trayectoria profesional.',
  },
};
