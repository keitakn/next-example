import type { Meta, StoryObj } from '@storybook/react';
import { GitHubAccountNotFoundError } from '@/features';
import { ErrorMessage } from './ErrorMessage';

const meta: Meta = {
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    error: new Error(),
  },
};

export const ShowGitHubAccountNotFoundError: Story = {
  args: {
    error: new GitHubAccountNotFoundError(),
  },
};
