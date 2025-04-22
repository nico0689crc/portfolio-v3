// Types
import type { LangParamType } from '@/types';

// Components
import Illustrations from '@/components/Illustrations';
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Configs
import routes from '@/configs/routes';

// Utilities
import { getLocalizedUrl } from '@/utils/i18n';
import { Button } from '@mui/material';

// Types
type ErrorViewProps = LangParamType & {
  reset: () => void;
};

const dictionary = {
  en: {
    title: 'Something Went Wrong',
    description:
      'Oops! It seems something went wrong while loading the page. Please try refreshing the page or come back later. If the issue persists, feel free to contact us for assistance.',
    go_home: 'Go back to the homepage',
    image_alt: 'Error image 500',
    retry: 'Retry',
  },
  es: {
    title: 'Algo salió mal',
    description:
      '¡Ups! Parece que algo salió mal al cargar la página. Intenta actualizar la página o vuelve más tarde. Si el problema persiste, no dudes en contactarnos para obtener ayuda.',
    go_home: 'Volver a la página de inicio',
    image_alt: 'Imagen de error 500',
    retry: 'Reintentar',
  },
};

const ErrorView = ({ lang, reset }: ErrorViewProps) => (
  <ContainerCommon
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      height: '100vh',
      gap: 10,
    }}
  >
    <Illustrations
      title={dictionary[lang].title}
      description={dictionary[lang].description}
      image="/images/illustrations/error.svg"
      alt={dictionary[lang].image_alt}
      href={getLocalizedUrl(routes.pages.public.home, lang)}
      hrefText={dictionary[lang].go_home}
      moreActions={
        <Button variant="outlined" color="secondary" onClick={reset}>
          {dictionary[lang].retry}
        </Button>
      }
    />
  </ContainerCommon>
);

export default ErrorView;
