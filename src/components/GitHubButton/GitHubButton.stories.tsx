import type { ComponentStoryObj } from '@storybook/react';
import { GitHubButton } from '.';

const story = {
  component: GitHubButton,
};

export default story;

type Story = ComponentStoryObj<typeof GitHubButton>;

export const Default: Story = {};

export const WithHandleOnClick: Story = {
  args: {
    onClick: () => {
      console.log('clicked GitHubButton');
    },
  },
};
