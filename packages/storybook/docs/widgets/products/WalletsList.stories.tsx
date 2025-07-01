import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { cryptoSection, fiatSection } from './mocks';
import {
  SpotWalletItem,
  WalletsSectionList,
} from '@apex-rn/library/features/Wallet';
import { UserWallet } from '@apex-rn/library/hooks';

export default {
  title: 'products/WalletsList',
  component: WalletsSectionList,
} as Meta<typeof WalletsSectionList<UserWallet>>;

type Story = StoryObj<typeof WalletsSectionList<UserWallet>>;

const renderItem = ({ item }: { item: UserWallet }) => (
  <SpotWalletItem onPress={() => console.log(item)} item={item} />
);

export const FiatWalletsSectionList: Story = {
  name: 'Fiat wallets',
  render(args) {
    return <WalletsSectionList {...args} />;
  },
  args: {
    renderItem,
    sections: [fiatSection],
  },
};

export const CryptoWalletsSectionList: Story = {
  ...FiatWalletsSectionList,
  name: 'Crypto wallets',
  args: { renderItem, sections: [cryptoSection] },
};

export const AllWalletsSectionList: Story = {
  ...FiatWalletsSectionList,
  name: 'Combined wallets',
  args: { renderItem, sections: [fiatSection, cryptoSection] },
};
