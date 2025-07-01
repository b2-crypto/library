import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { orderFormDecorator } from './OrderFormDecorator';
import { OrderFormBody } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Orders/OrderFormBody',
  component: OrderFormBody,
  decorators: [orderFormDecorator],
} as Meta<typeof OrderFormBody>;

type Story = StoryObj<typeof OrderFormBody>;

export const MarketOrderFormBody: Story = {
  name: 'OrderFormBody (Market order)',
  render(args) {
    return (
      <SafeAreaProvider>
        <OrderFormBody {...args} />
      </SafeAreaProvider>
    );
  },
  args: {
    product1: { symbol: 'BTC', amount: 10, decimalPlaces: 8 },
    product2: { symbol: 'ETH', amount: 109, decimalPlaces: 8 },
    marketPrice: 26235.65,
  },
  parameters: {
    layout: 'fullscreen',
    orderForm: { initialValues: { op: 'buy', type: 'Market' } },
  },
};

export const LimitOrderFormBody: Story = {
  ...MarketOrderFormBody,
  name: 'OrderFormBody (Limit order)',
  parameters: {
    layout: 'fullscreen',
    orderForm: { initialValues: { op: 'buy', type: 'Limit' } },
  },
};

export const StopOrderFormBody: Story = {
  ...MarketOrderFormBody,
  name: 'OrderFormBody (Stop order)',
  parameters: {
    layout: 'fullscreen',
    orderForm: { initialValues: { op: 'buy', type: 'StopMarket' } },
  },
};
