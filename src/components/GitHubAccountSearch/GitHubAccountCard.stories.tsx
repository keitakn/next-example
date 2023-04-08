import type { Meta, StoryObj } from '@storybook/react';
import { GitHubAccountCard } from './GitHubAccountCard';

const meta: Meta = {
  component: GitHubAccountCard,
};

export default meta;

type Story = StoryObj<typeof GitHubAccountCard>;

export const Default: Story = {
  args: {
    gitHubAccount: {
      name: 'cat',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/32682645?s=460&v=4',
    },
  },
};
