import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { convertFormDecorator } from './ConvertFormDecorator';
import { ConvertFormBody } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Convert/ConvertFormBody',
  component: ConvertFormBody,
  decorators: [convertFormDecorator],
  parameters: { layout: 'fullscreen' },
} as Meta<typeof ConvertFormBody>;

type Story = StoryObj<typeof ConvertFormBody>;

export const ConvertFormBodyStory: Story = {
  name: 'ConvertFormBody',
  render(args) {
    return (
      <SafeAreaProvider>
        <ConvertFormBody {...args} />
      </SafeAreaProvider>
    );
  },
  args: {
    fromProducts: [
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
    ],
    toProducts: [
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
    defaultFromProduct: 1,
    defaultToProduct: 2,
  },
};
