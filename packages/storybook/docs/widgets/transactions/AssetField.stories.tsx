import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { receiveFormDecorator } from './ReceiveFormDecorator';
import { AssetField } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Receive/AssetField',
  component: AssetField,
  decorators: [receiveFormDecorator],
} as Meta<typeof AssetField>;

export const AssetFieldStory: StoryObj<typeof AssetField> = {
  name: 'AssetField',
  render(args) {
    return (
      <SafeAreaProvider>
        <AssetField {...args} />
      </SafeAreaProvider>
    );
  },
  args: {
    assets: [
      { ProductId: 1, Product: 'BTC', ProductFullName: 'Bitcoin' },
      { ProductId: 2, Product: 'ETH', ProductFullName: 'Etherium' },
      { ProductId: 3, Product: 'USDT', ProductFullName: 'Tether' },
    ],
    label: 'Receive',
  },
};
