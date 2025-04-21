// Types
import { portfolio } from '@/app/api/(data)/pages/portfolio/data';
import { i18n, type Locale } from '@/configs/i18n';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getProject from '@/utils/requests/getProject';
import ProjectView from '@/views/project/ProjectView';
import type { Metadata } from 'next';

type ProjectPageProps = {
  params: Promise<{ 
    lang: Locale;
    slug: string;
  }>;
}

// // Page Metadata
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  
  const project = portfolio.find(_project => _project.slug === slug);

  return {
    metadataBase: new URL('https://nicolasfernandez.tech'),
    title: project?.information[lang].title,
    keywords: project?.tags,
    description: project?.information[lang].description,
    openGraph: {
      title: project?.information[lang].title,
      description: project?.information[lang].description,
      url: `https://nicolasfernandez.tech/${lang}/portfolio/${slug}`,
      siteName: project?.information[lang].title,
      images: [
        {
          url: project?.image?.[0].src as string,
          width: 1200,
          height: 630,
          alt: project?.information[lang].title,
          type: 'image/png',
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project?.information[lang].title,
      description: project?.information[lang].description,
      images: [project?.image?.[0].src as string],
      creator: '@nicolasfernandez',
    },
    icons: {
      icon: 'favicon.ico',
      shortcut: 'favicon.ico',
      apple: 'favicon.ico',
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: project?.information[lang].title,
    },
  };
}

export const generateStaticParams = async () => (
  portfolio.flatMap(product =>
    i18n.locales.map(lang => ({
      lang,
      slug: product.slug,
    }))
  )
)

// Page Component
const ProjectPage = async (props: ProjectPageProps) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  const project = await getProject(params.slug);

  return (
    <ProjectView
      dictionary={dictionary}
      lang={params.lang}
      project={project}
    />
  );
};

export default ProjectPage;
