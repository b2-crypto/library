import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { RadioGroup } from '@apex-rn/library/components';

export default {
  title: 'components/Radio/RadioGroup',
  component: RadioGroup,
  parameters: {
    controls: {
      include: ['items', 'value', 'size', 'onChange'],
    },
  },
} as Meta<typeof RadioGroup>;

export const RadioGroupStory: StoryFn<typeof RadioGroup> = args => (
  <RadioGroup {...args} />
);

RadioGroupStory.storyName = 'RadioGroup';
RadioGroupStory.args = {
  items: [
    {
      value: 'option1',
      label: 'Vestibulum dignissim dui ut blandit tristique',
    },
    {
      value: 'option2',
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
  value: 'option1',
};
