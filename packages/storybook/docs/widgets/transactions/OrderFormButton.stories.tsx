import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { orderFormDecorator } from './OrderFormDecorator';
import { OrderFormButton } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Orders/OrderFormButton',
  component: OrderFormButton,
  decorators: [orderFormDecorator],
} as Meta<typeof OrderFormButton>;

type Story = StoryObj<typeof OrderFormButton>;

export const BuyButtonStory: Story = {
  render(args) {
    return <OrderFormButton {...args} />;
  },
  name: 'Buy Button',
  parameters: {
    orderForm: {
      initialValues: {
        op: 'buy',
        type: 'market',
        instrumentId: 1,
        quantity: 1,
        value: 1,
      },
    },
  },
};

export const SellButtonStory: Story = {
  ...BuyButtonStory,
  name: 'Sell Button',
  parameters: {
    orderForm: {
      initialValues: {
        op: 'sell',
        type: 'market',
        instrumentId: 1,
        quantity: 1,
        value: 1,
      },
    },
  },
};
