import { SendConfirm } from '@apex-rn/library/features/Transactions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof SendConfirm> = {
  title: 'transactions/Send/SendConfirm',
  component: SendConfirm,
};

export default meta;

export const WithdrawConfirmStory: StoryObj<typeof SendConfirm> = {
  name: 'SendConfirm (withdraw)',
  render(args) {
    return <SendConfirm {...args} />;
  },
  args: {
    values: {
      productId: 2,
      type: 'withdraw',
      providerId: 1,
      templateType: 'BtcExternal',
      templateForm: {
        ExternalAddress: '12312r13rewfwdfvs9vf8223rnsdfds',
      },
      amount: '0.05555500',
    },
    asset: {
      Product: 'BTC',
      ProductFullName: 'Bitcoin',
      DecimalPlaces: 8,
    },
  },
};

export const TransferConfirmStory: StoryObj<typeof SendConfirm> = {
  name: 'SendConfirm (transfer)',
  render(args) {
    return <SendConfirm {...args} />;
  },
  args: {
    values: {
      productId: 2,
      type: 'transfer',
      emailAddress: 'example@alphapoint.com',
      amount: '0.05555500',
      note: 'Some note text',
    },
    asset: {
      Product: 'BTC',
      ProductFullName: 'Bitcoin',
      DecimalPlaces: 8,
    },
  },
};
