'use client';

import type { Locale } from '@/configs/i18n';
import routes from '@/configs/routes';
import { getLocalizedUrl } from '@/utils/i18n';
import { Button, Stack, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const LoginPage = () => {
  const searchParams = useSearchParams();
  const { lang: locale } = useParams();
  const router = useRouter();

  const onClickHandler = useCallback(async () => {
    const res = await signIn('credentials', {
      email: 'administrador@tareas.com',
      password: 'password',
      redirect: false,
    });

    if (res && res.ok && res.error === null) {
      // Vars
      const redirectURL = searchParams.get('redirectTo') ?? routes.pages.authenticated.dashboard;

      router.replace(getLocalizedUrl(redirectURL, locale as Locale));
    } else {
      if (res?.error) {
        const error = JSON.parse(res.error);
        throw new Error(error.message || 'An unknown error occurred');
      }
    }
  }, [locale, router, searchParams]);

  return (
    <Stack>
      <Typography>LoginPage</Typography>
      <Button onClick={onClickHandler}>Login</Button>
    </Stack>
  );
};

export default LoginPage;
