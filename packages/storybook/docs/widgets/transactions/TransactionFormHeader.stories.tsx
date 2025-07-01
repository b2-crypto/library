import { Receive } from '@apex-rn/library/assets/icons';
import { Box } from '@apex-rn/library/components';
import { TransactionFormHeader } from '@apex-rn/library/features/Transactions';
import { defaultTheme } from '@apex-rn/library/theme';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof TransactionFormHeader> = {
  title: 'transactions/TransactionFormHeader',
  component: TransactionFormHeader,
};

export default meta;

export const TransactionFormHeaderStory: StoryObj<
  typeof TransactionFormHeader
> = {
  name: 'TransactionFormHeader',
  render(args) {
    return (
      <TransactionFormHeader {...args}>
        <Box
          flex={1}
          borderWidth={1}
          borderRadius={6}
          borderColor="formBorder"
          height={44}
        />
      </TransactionFormHeader>
    );
  },
  args: {
    iconBoxProps: {
      borderWidth: 1,
      borderColor: 'button2ndBorder',
      backgroundColor: 'button2ndBackground',
    },
    icon: <Receive color={defaultTheme.colors.textSecondary} />,
  },
};
