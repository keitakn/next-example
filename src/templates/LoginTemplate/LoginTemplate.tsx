import type { FC, MouseEvent } from 'react';
import { Group } from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';
import { GitHubLoginButton } from '@/components';

export const LoginTemplate: FC = () => {
  const { data: session } = useSession();
  console.log(session);

  const handleSignIn = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await signIn('github', { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <Group position="center">
      <GitHubLoginButton onClick={handleSignIn} />
    </Group>
  );
};
