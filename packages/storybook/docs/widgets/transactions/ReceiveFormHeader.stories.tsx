import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@apex-rn/library/components';
import { ReceiveFormHeader } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Receive/ReceiveFormHeader',
  component: ReceiveFormHeader,
  parameters: {
    controls: { exclude: ['children'] },
  },
} as Meta<typeof ReceiveFormHeader>;

export const ReceiveFormHeaderStory: StoryObj<typeof ReceiveFormHeader> = {
  name: 'ReceiveFormHeader',
  render(args) {
    return (
      <ReceiveFormHeader {...args}>
        <Box
          flex={1}
          borderWidth={1}
          borderRadius={6}
          borderColor="formBorder"
          height={44}
        />
      </ReceiveFormHeader>
    );
  },
};
