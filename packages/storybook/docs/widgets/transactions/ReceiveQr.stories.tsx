import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReceiveQR } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/Receive/ReceiveQR',
  component: ReceiveQR,
} as Meta<typeof ReceiveQR>;

export const ReceiveQrStory: StoryObj<typeof ReceiveQR> = {
  name: 'ReceiveQR',
  render(arg) {
    return <ReceiveQR {...arg} />;
  },
  args: {
    walletAddress: '16C7gDwtEgx7qVFa7j4ZWx3WJazLUpSLLU',
  },
};
