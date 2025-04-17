import type { Locale } from '@/configs/i18n';
import type { Metadata } from 'next';

type MetadataType = {
  [key in Locale]: Metadata;
};

export const metadata: MetadataType = {
  en: {
    title: 'Portfolio',
    description:
      'Explore the portfolio of Nicolas Ariel Fernandez, a Fullstack Developer with expertise in React.js, Next.js, Node.js, TypeScript, and Docker. Discover my published web and software projects, showcasing modern web technologies, scalable solutions, and cloud-based services. See my work in action!',
  },
  es: {
    title: 'Portafolio',
    description:
      'Explora el portafolio de Nicolas Ariel Fernandez, un Desarrollador Fullstack con experiencia en React.js, Next.js, Node.js, TypeScript y Docker. Descubre mis proyectos web y de software publicados, que muestran tecnologías web modernas, soluciones escalables y servicios basados en la nube. ¡Ve mi trabajo en acción!',
  },
};
