import { ReceiveConfirm } from '@apex-rn/library/features/Transactions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof ReceiveConfirm> = {
  title: 'transactions/Receive/ReceiveConfirm',
  component: ReceiveConfirm,
};

export default meta;

export const ReceiveConfirmStory: StoryObj<typeof ReceiveConfirm> = {
  name: 'ReceiveConfirm',
  render(args) {
    return <ReceiveConfirm {...args} />;
  },
  args: {
    values: {
      productId: 2,
      type: 'transfer',
      emailAddress: 'requestee@alphapoint.com',
      amount: '0.05555500',
      note: 'Some note message',
    },
    asset: {
      Product: 'BTC',
      ProductFullName: 'Bitcoin',
      DecimalPlaces: 8,
    },
  },
};
