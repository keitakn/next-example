import type { ComponentStoryObj } from '@storybook/react';
import { rest } from 'msw';
import { mockFetchGitHubAccount } from '@/mocks';
import { GitHubAccountSearchTemplate } from '@/templates';

const story = {
  component: GitHubAccountSearchTemplate,
};

export default story;

type Story = ComponentStoryObj<typeof GitHubAccountSearchTemplate>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get('https://api.github.com/users/*', mockFetchGitHubAccount),
      ],
    },
  },
};
