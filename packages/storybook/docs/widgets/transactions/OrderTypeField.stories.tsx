import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { orderFormDecorator } from './OrderFormDecorator';
import { OrderTypeField } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Orders/OrderTypeField',
  component: OrderTypeField,
  decorators: [orderFormDecorator],
} as Meta<typeof OrderTypeField>;

export const OrderTypeFieldStory: StoryObj<typeof OrderTypeField> = {
  name: 'OrderTypeField',
  render() {
    return <OrderTypeField />;
  },
};
