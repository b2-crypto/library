import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Radio } from '@apex-rn/library/components';

export default {
  title: 'components/Radio',
  component: Radio,
  parameters: {
    controls: {
      include: ['active', 'label', 'size', 'onPress'],
    },
  },
} as Meta<typeof Radio>;

export const RadioStory: StoryFn<typeof Radio> = args => <Radio {...args} />;

RadioStory.storyName = 'Radio';
RadioStory.args = {
  checked: false,
  size: 24,
  label: 'Lorem ipsum dolor sit amet',
};
