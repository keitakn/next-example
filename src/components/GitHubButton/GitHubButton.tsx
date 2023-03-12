import type { FC, ComponentPropsWithoutRef } from 'react';
import { Button } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';

export const GitHubButton: FC<ComponentPropsWithoutRef<'button'>> = (props) => {
  return (
    <Button
      color="dark"
      leftIcon={<FaGithub />}
      onClick={props.onClick}
      size="xl"
    >
      Sign in with GitHub
    </Button>
  );
};
