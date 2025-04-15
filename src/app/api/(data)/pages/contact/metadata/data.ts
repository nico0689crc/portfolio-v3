import type { Locale } from "@/configs/i18n";
import type { Metadata } from "next";

type MetadataType = {
  [key in Locale]: Metadata;
};

export const metadata: MetadataType = {
  en: {
    title: "Conctact",
    description:
      "Get in touch with Nicolas Ariel Fernandez, a Fullstack Developer from Neuquen, Argentina. Whether you're interested in collaborating on a project, learning more about my work, or discussing job opportunities, feel free to reach out via email, LinkedIn, or GitHub. Let's connect!",
  },
  es: {
    title: "Contacto",
    description:
      "Ponte en contacto con Nicolas Ariel Fernandez, un Desarrollador Fullstack de Neuquén, Argentina. Si estás interesado en colaborar en un proyecto, aprender más sobre mi trabajo o discutir oportunidades laborales, no dudes en comunicarte a través de correo electrónico, LinkedIn o GitHub. ¡Conectemos!",
  },
};
