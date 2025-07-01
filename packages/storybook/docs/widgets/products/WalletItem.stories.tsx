import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { SpotWalletItem } from '@apex-rn/library/features/Wallet';

import { UserWallet } from '@apex-rn/library/hooks';

export default {
  title: 'products/WalletItem',
  component: SpotWalletItem,
} as Meta<typeof SpotWalletItem>;

const data: UserWallet = {
  AccountId: 10,
  Amount: 456.01292906,
  DecimalPlaces: 8,
  DepositEnabled: true,
  Hold: 1,
  IsDisabled: false,
  MarginEnabled: false,
  MasterDataUniqueProductSymbol: '',
  NoFees: false,
  NotionalDecimalPlaces: 2,
  NotionalHoldAmount: 27917,
  NotionalProductId: 1,
  NotionalProductSymbol: 'USD',
  NotionalRate: 27917,
  NotionalValue: 12730512.94056802,
  OMSId: 1,
  PendingDeposits: 0,
  PendingWithdraws: 0,
  Product: 'BTC',
  ProductFullName: 'Bitcoin',
  ProductId: 2,
  ProductSymbol: 'BTC',
  ProductType: 'CryptoCurrency',
  TickSize: 1e-8,
  TotalDayDepositNotional: 0,
  TotalDayDeposits: 0,
  TotalDayTransferNotional: 0,
  TotalDayWithdrawNotional: 0,
  TotalDayWithdraws: 0,
  TotalMonthDepositNotional: 0,
  TotalMonthDeposits: 0,
  TotalMonthWithdrawNotional: 0,
  TotalMonthWithdraws: 0,
  TotalYearDepositNotional: 0,
  TotalYearDeposits: 0,
  TotalYearWithdrawNotional: 0,
  TotalYearWithdraws: 0,
  WithdrawEnabled: true,
  AvailableBalance: 0,
};

export const WalletItemWidget: StoryObj<typeof SpotWalletItem> = {
  render(args) {
    return <SpotWalletItem {...args} />;
  },
  name: 'SpotWalletItem',
  args: { item: data },
};
