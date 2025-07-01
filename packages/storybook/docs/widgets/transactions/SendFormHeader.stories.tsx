import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@apex-rn/library/components';
import { SendFormHeader } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Send/SendFormHeader',
  component: SendFormHeader,
  parameters: {
    controls: { exclude: ['children'] },
  },
} as Meta<typeof SendFormHeader>;

export const SendFormHeaderStory: StoryObj<typeof SendFormHeader> = {
  name: 'SendFormHeader',
  render(args) {
    return (
      <SendFormHeader {...args}>
        <Box
          flex={1}
          borderWidth={1}
          borderRadius={6}
          borderColor="formBorder"
          height={44}
        />
      </SendFormHeader>
    );
  },
};
