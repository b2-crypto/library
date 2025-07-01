import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { convertFormDecorator } from './ConvertFormDecorator';
import { ConvertFormHeader } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Convert/ConvertFormHeader',
  component: ConvertFormHeader,
  decorators: [convertFormDecorator],
} as Meta<typeof ConvertFormHeader>;

type Story = StoryObj<typeof ConvertFormHeader>;

export const ConvertFormHeaderStory: Story = {
  name: 'ConvertFormHeader',
  render(args) {
    return <ConvertFormHeader {...args} />;
  },
};
