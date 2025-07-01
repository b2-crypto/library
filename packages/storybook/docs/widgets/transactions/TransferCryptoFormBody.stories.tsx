import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { receiveFormDecorator } from './ReceiveFormDecorator';
import { TransferCryptoFormBody } from '@apex-rn/library/features/Transactions';

export default {
  title: 'transactions/TransferCryptoFormBody',
  component: TransferCryptoFormBody,
  decorators: [receiveFormDecorator],
  parameters: {
    receiveForm: {
      initialValues: { productId: 1 },
    },
  },
} as Meta<typeof TransferCryptoFormBody>;

export const TransferCryptoFormBodyStory: StoryObj<typeof TransferCryptoFormBody> = {
  name: 'TransferCryptoFormBody',
  render(args) {
    return <TransferCryptoFormBody {...args} />;
  },
  args: {
    asset: {
      ProductId: 1,
      Product: 'BTC',
      DecimalPlaces: 8,
    },
  },
};
