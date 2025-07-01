import { WalletDetailsTable } from '@apex-rn/library/features/Wallet';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { cryptoSection } from './mocks';

const meta: Meta<typeof WalletDetailsTable> = {
  title: 'products/WalletDetailsTable',
  component: WalletDetailsTable,
};

export default meta;

export const WalletDetailsTableStory: StoryObj<typeof WalletDetailsTable> = {
  name: 'WalletDetailsTable',
  render(args) {
    return <WalletDetailsTable {...args} />;
  },
  args: { product: cryptoSection.data[0] },
};
