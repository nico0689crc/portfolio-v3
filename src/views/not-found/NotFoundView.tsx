// Types
import type { DictionaryType, LangParamType } from '@/types';

// Configs
import routes from '@/configs/routes';

// Utils
import { getLocalizedUrl } from '@/utils/i18n';

// Components
import Illustrations from '@/components/Illustrations';
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Types
type NotFoundViewProps = DictionaryType & LangParamType;

const NotFoundView = ({ dictionary, lang }: NotFoundViewProps) => (
  <ContainerCommon
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      height: '100%',
      gap: 10,
    }}
  >
    <Illustrations
      title={dictionary.pages.not_found.title}
      description={dictionary.pages.not_found.description}
      image="/images/illustrations/page_not_found.svg"
      alt={dictionary.pages.not_found.image_alt}
      href={getLocalizedUrl(routes.pages.public.home, lang)}
      hrefText={dictionary.pages.not_found.go_home}
    />
  </ContainerCommon>
);

export default NotFoundView;
