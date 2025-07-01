import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@apex-rn/library/components';
import { TransferFormHeader } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Transfer/TransferFormHeader',
  component: TransferFormHeader,
  parameters: {
    controls: { exclude: ['children'] },
  },
} as Meta<typeof TransferFormHeader>;

export const TransferFormHeaderStory: StoryObj<typeof TransferFormHeader> = {
  name: 'TransferFormHeader',
  render(args) {
    return (
      <TransferFormHeader {...args}>
        <Box
          flex={1}
          borderWidth={1}
          borderRadius={6}
          borderColor="formBorder"
          height={44}
        />
      </TransferFormHeader>
    );
  },
};
