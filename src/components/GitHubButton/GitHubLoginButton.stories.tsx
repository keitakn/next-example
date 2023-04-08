import type { Meta, StoryObj } from '@storybook/react';
import { GitHubLoginButton } from '.';

const meta: Meta = {
  component: GitHubLoginButton,
};

export default meta;

type Story = StoryObj<typeof GitHubLoginButton>;

export const Default: Story = {};

export const WithHandleOnClick: Story = {
  args: {
    onClick: () => {
      console.log('clicked GitHubLoginButton');
    },
  },
};
