import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OrderSummary } from '@apex-rn/library/features/Transactions';
import { translate } from '@apex-rn/library/helpers';

export default {
  title: 'transactions/Orders/OrderSummary',
  component: OrderSummary,
} as Meta<typeof OrderSummary>;

export const OrderSummaryStory: StoryObj<typeof OrderSummary> = {
  name: 'OrderSummary',
  render(args) {
    return <OrderSummary {...args} />;
  },
  args: {
    items: [
      {
        name: translate('transaction.summary.market'),
        value: { amount: '28,214.20', symbol: 'USD' },
      },
      {
        name: translate('transaction.summary.fee'),
        value: { amount: '0.000000', symbol: 'BTC' },
      },
      {
        name: translate('transaction.summary.total'),
        value: { amount: '6,629.90', symbol: 'USD' },
      },
      {
        name: translate('transaction.summary.net'),
        value: { amount: '0.23499300', symbol: 'BTC' },
      },
    ],
  },
};
