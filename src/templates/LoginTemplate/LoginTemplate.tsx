import type { FC, MouseEvent } from 'react';
import { Group } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { GitHubLoginButton } from '@/components';

export const LoginTemplate: FC = () => {
  const handleSignIn = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await signIn('github');
  };

  return (
    <Group position="center">
      <GitHubLoginButton onClick={handleSignIn} />
    </Group>
  );
};
