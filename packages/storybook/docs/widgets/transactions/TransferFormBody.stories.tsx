import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { transferFormDecorator } from './TransferFormDecorator';
import { TransferFormBody } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Transfer/TransferFormBody',
  component: TransferFormBody,
  decorators: [transferFormDecorator],
} as Meta<typeof TransferFormBody>;

type Story = StoryObj<typeof TransferFormBody>;

export const TransferFormBodyStory: Story = {
  name: 'TransferFormBody',
  render(args) {
    return (
      <SafeAreaProvider>
        <TransferFormBody {...args} />
      </SafeAreaProvider>
    );
  },
  args: {
    accounts: [
      { AccountId: 1, AccountName: 'user' },
      { AccountId: 2, AccountName: 'user_Margin' },
    ],
    products: [
      {
        amount: 860518.51,
        decimalPlaces: 2,
        fullName: 'US Dollar',
        id: 1,
        notionalRate: 1,
        notionalSymbol: 'USD',
        symbol: 'USD',
        type: 'fiat',
      },
      {
        amount: 455.9889,
        decimalPlaces: 8,
        fullName: 'Bitcoin',
        id: 2,
        notionalRate: 27356,
        notionalSymbol: 'USD',
        symbol: 'BTC',
        type: 'crypto',
      },
      {
        amount: 0,
        decimalPlaces: 8,
        fullName: 'Ethereum',
        id: 3,
        notionalRate: 1826.5,
        notionalSymbol: 'USD',
        symbol: 'ETH',
        type: 'crypto',
      },
      {
        amount: 0,
        decimalPlaces: 0,
        fullName: 'Oil Coin',
        id: 4,
        notionalRate: 1,
        notionalSymbol: 'USD',
        symbol: 'OCN',
        type: 'crypto',
      },
      {
        amount: 0,
        decimalPlaces: 0,
        fullName: 'COOP',
        id: 5,
        notionalRate: 1,
        notionalSymbol: 'USD',
        symbol: 'COOP',
        type: 'crypto',
      },
      {
        amount: 0,
        decimalPlaces: 2,
        fullName: 'Thai Baht',
        id: 6,
        notionalRate: 0.029594554601953243,
        notionalSymbol: 'USD',
        symbol: 'THB',
        type: 'fiat',
      },
    ],
  },
};
