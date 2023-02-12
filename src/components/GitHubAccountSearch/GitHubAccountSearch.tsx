import type { FC, ChangeEventHandler } from 'react';
import { TextInput, Text } from '@mantine/core';
import { useDebouncedState } from '@mantine/hooks';

export const GitHubAccountSearch: FC = () => {
  const [inputGitHubAccount, setInputGitHubAccount] = useDebouncedState(
    '',
    200
  );

  const handleChangeText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputGitHubAccount(event.currentTarget.value);
  };

  return (
    <>
      <TextInput
        label="GitHubのAccount名を入力して下さい。"
        defaultValue={inputGitHubAccount}
        style={{ flex: 1 }}
        onChange={handleChangeText}
      />

      <Text>GitHubAccount: {inputGitHubAccount}</Text>
    </>
  );
};
