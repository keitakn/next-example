import type { Meta, StoryObj } from '@storybook/react';
import { TitleText } from './TitleText';

const meta: Meta = {
  component: TitleText,
};

export default meta;

type Story = StoryObj<typeof TitleText>;

export const Default: Story = {
  args: {
    title: 'アプリのTitle',
  },
};
