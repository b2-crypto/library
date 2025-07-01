import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { orderFormDecorator } from './OrderFormDecorator';
import { AmountField } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Orders/AmountField',
  component: AmountField,
  argTypes: {
    control: { control: false },
  },
  parameters: {
    controls: {
      exclude: ['control'],
    },
  },
  decorators: [orderFormDecorator],
} as Meta<typeof AmountField>;

export const AmountFieldStory: StoryObj<typeof AmountField> = {
  render(arg) {
    return <AmountField {...arg} />;
  },
  name: 'AmountField',
  args: {
    product1: { symbol: 'BTC', amount: 10, decimalPlaces: 8 },
    product2: { symbol: 'ETH', amount: 109, decimalPlaces: 8 },
    marketPrice: 26235.65,
  },
};
