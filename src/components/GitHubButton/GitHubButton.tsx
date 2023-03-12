import type { FC, ComponentPropsWithoutRef } from 'react';
import { Button } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';

export const GitHubButton: FC<ComponentPropsWithoutRef<'button'>> = ({
  onClick,
}) => {
  return (
    <Button color="dark" leftIcon={<FaGithub />} onClick={onClick} size="xl">
      GitHubでログイン
    </Button>
  );
};
