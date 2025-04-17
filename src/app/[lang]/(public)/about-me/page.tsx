// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';

// External Components
import { Typography } from '@mui/material';

// Page Metadata
export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = await getMetadata('aboutMe');

  return metadata[params.lang];
}

// Page Component
const AboutMePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Typography>{dictionary.pages['about_me'].title}</Typography>
      <Typography>
        I am Nicolas Ariel Fernandez, a passionate Fullstack Developer with over 4 years of
        experience in Web and Software Development. My journey in the tech industry has led me to
        work in both corporate environments and as a freelancer, allowing me to refine my technical
        expertise, adaptability, and project management skills. I specialize in building dynamic,
        scalable web applications using technologies like React.js, Next.js, Node.js, NestJS, and
        TypeScript. Over the years, I’ve honed my ability to design, develop, and deploy complex
        solutions, integrating REST and GraphQL APIs, microservices, and cloud-based services.
        Currently, I am expanding my knowledge in DevOps practices and automation tools such as
        Docker, GitHub Actions, and CI/CD pipelines. As I continue to grow professionally, I remain
        committed to improving my craft by undertaking specialized courses, including TypeScript,
        Next.js, and Docker. These experiences have not only strengthened my technical skills but
        also my ability to adapt to ever-changing technologies and deliver solutions that meet
        client and team expectations. Beyond my technical background, I bring a unique perspective
        from my 7 years of experience working in the hospitality industry across New Zealand,
        Sweden, Germany, and Australia. This diverse experience has equipped me with the ability to
        perform under pressure, collaborate effectively in multicultural teams, and thrive in
        fast-paced environments. These soft skills have played a key role in my transition into the
        tech world, allowing me to approach challenges with a creative mindset and a
        solution-oriented approach. I am currently based in Neuquén, Argentina, but I am open to
        collaborating on remote projects with clients and teams globally. If you are interested in
        working together or learning more about my work, feel free to connect with me.
      </Typography>
    </>
  );
};

export default AboutMePage;
