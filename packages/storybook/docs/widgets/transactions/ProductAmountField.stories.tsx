import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { orderFormDecorator } from './OrderFormDecorator';
import { ProductAmountField } from '@apex-rn/library/features/Transactions';

const meta: Meta<typeof ProductAmountField> = {
  title: 'transactions/Convert/ProductAmountField',
  component: ProductAmountField,
  decorators: [orderFormDecorator],
};

export default meta;

export const ProductAmountFieldStory: StoryObj<typeof ProductAmountField> = {
  name: 'ProductAmountField',
  render(arg) {
    return (
      <SafeAreaProvider>
        <ProductAmountField {...arg} />
      </SafeAreaProvider>
    );
  },
  args: {
    assetFieldName: 'from.productId',
    amountFieldName: 'from.amount',
    label: 'From',
    showNotionalValue: true,
    products: [
      {
        id: 1,
        symbol: 'USD',
        fullName: 'Dollar',
        type: 'fiat',
        amount: 10000,
        decimalPlaces: 2,
      },
      {
        id: 2,
        symbol: 'BTC',
        fullName: 'Bitcoin',
        type: 'crypto',
        amount: 10,
        decimalPlaces: 8,
      },
      {
        id: 3,
        symbol: 'ETH',
        fullName: 'Etherium',
        type: 'crypto',
        amount: 109,
        decimalPlaces: 8,
      },
    ],
    showMaxButton: true,
    defaultProductId: 2,
  },
};
