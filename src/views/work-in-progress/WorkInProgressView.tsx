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
type WorkInProgressViewProps = DictionaryType & LangParamType;

const WorkInProgressView = ({ dictionary, lang }: WorkInProgressViewProps) => (
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
      title={dictionary.pages.work_in_progress.title}
      description={dictionary.pages.work_in_progress.description}
      image="/images/illustrations/work_in_progress.svg"
      alt={dictionary.pages.work_in_progress.image_alt}
      href={getLocalizedUrl(routes.pages.public.home, lang)}
      hrefText={dictionary.pages.work_in_progress.go_home}
    />
  </ContainerCommon>
);

export default WorkInProgressView;
