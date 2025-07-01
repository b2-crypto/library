import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ThemeCard, OPTIONS } from '@apex-rn/library/features/Profile';

export default {
  title: 'Profile/ThemeCard',
  component: ThemeCard,
  argTypes: {
    value: {
      control: 'select',
      options: OPTIONS,
    },
  },
} as Meta<typeof ThemeCard>;

export const ThemeCardStory: StoryFn<typeof ThemeCard> = args => (
  <ThemeCard {...args} />
);

ThemeCardStory.storyName = 'Theme Card';

ThemeCardStory.args = {
  value: 'system',
};
