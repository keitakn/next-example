import type { FC, MouseEvent } from 'react';
import { Group } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { GitHubLoginButton } from '@/components';
import { appUrls } from '@/features';
import { appUrl } from '@/features/url/url';

export const LoginTemplate: FC = () => {
  const handleSignIn = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await signIn('github', {
      callbackUrl: `${appUrl()}${appUrls.gitHubAccountSearch.path}`,
    });
  };

  return (
    <Group position="center">
      <GitHubLoginButton onClick={handleSignIn} />
    </Group>
  );
};
