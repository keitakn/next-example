import type { ComponentStoryObj } from '@storybook/react';
import { GitHubLoginButton } from '.';

const story = {
  component: GitHubLoginButton,
};

export default story;

type Story = ComponentStoryObj<typeof GitHubLoginButton>;

export const Default: Story = {};

export const WithHandleOnClick: Story = {
  args: {
    onClick: () => {
      console.log('clicked GitHubLoginButton');
    },
  },
};
