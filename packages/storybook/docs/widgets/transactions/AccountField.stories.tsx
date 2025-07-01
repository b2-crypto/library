import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { transferFormDecorator } from './TransferFormDecorator';
import { AccountField } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Transfer/AccountField',
  component: AccountField,
  decorators: [transferFormDecorator],
  argTypes: {
    accounts: {
      control: false,
    },
  },
} as Meta<typeof AccountField>;

export const AccountFieldStory: StoryObj<typeof AccountField> = {
  name: 'AccountField',
  render(args) {
    return (
      <SafeAreaProvider>
        <AccountField {...args} />
      </SafeAreaProvider>
    );
  },
  args: {
    accounts: [
      { AccountId: 1, AccountName: 'user' },
      { AccountId: 2, AccountName: 'user_Margin' },
    ],
    name: 'fromAccountId',
    label: 'From',
  },
};
