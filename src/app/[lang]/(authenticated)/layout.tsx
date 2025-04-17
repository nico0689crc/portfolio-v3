import type { ChildrenType } from '@/types';
import type { Locale } from '@/configs/i18n';
import AuthenticatedGuard from '@/hocs/AuthenticatedGuard';

const PrivateLayout = async (props: ChildrenType & { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;

  const { children } = props;

  // Vars
  // const dictionary = await getDictionary(params.lang)
  // const mode = await getMode()
  // const systemMode = await getSystemMode()

  return <AuthenticatedGuard locale={params.lang}>{children}</AuthenticatedGuard>;
};

export default PrivateLayout;
