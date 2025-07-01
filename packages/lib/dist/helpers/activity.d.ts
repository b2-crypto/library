import React from 'react';
import { EntityAdapter, EntityState } from '@reduxjs/toolkit';
import {
  AccountTradeItem,
  DepositTicket,
  WithdrawTicket,
  AccountTransaction,
  OrderActivity,
  WalletActivity,
  AccountTransactionActivity,
  AccountTransactionType,
  OrderState,
  OrderType,
  OrderSide,
} from '../types/apiResponses';
export type ActivityResponse<T> = {
  items: EntityState<T>;
  hasMore: boolean;
  counter: number;
};
type ActivityState<T> = {
  items: EntityState<T>;
  counter: number;
  hasMore: boolean;
};
export declare const openOrdersAdapter: EntityAdapter<OrderActivity>;
export declare const cancelledOrdersAdapter: EntityAdapter<OrderActivity>;
export declare const accountTradesAdapter: EntityAdapter<OrderActivity>;
export declare const depositTicketsAdapter: EntityAdapter<WalletActivity>;
export declare const withdrawTicketsAdapter: EntityAdapter<WalletActivity>;
export declare const accountTransactionsAdapter: EntityAdapter<AccountTransactionActivity>;
export declare const activityTransform: <T>(
  adapter: EntityAdapter<T>,
  res: T[],
  _: unknown,
  args: {
    depth?: number;
  },
) => {
  items: EntityState<T>;
  hasMore: boolean;
  counter: number;
};
export declare const activityQueryProps: <T>(adapter: EntityAdapter<T>) => {
  serializeQueryArgs: ({
    queryArgs,
  }: {
    queryArgs: {
      accountId: number;
      depth?: number;
      instrumentId?: number;
      productId?: number;
    };
  }) => {
    accountId: number;
    depth: number | undefined;
    instrumentId: number | undefined;
    productId: number | undefined;
  };
  merge: (
    currentCacheData: ActivityState<T>,
    responseData: ActivityState<T>,
    {
      arg: { resetCache },
    }: {
      arg: {
        resetCache?: boolean | undefined;
      };
    },
  ) => void;
  keepUnusedDataFor: number;
};
type AcitvityOrderSource = {
  OrderId: number;
  OrigQuantity: number;
  OrderType: OrderType;
  OrderState: OrderState;
  ReceiveTime: number;
  Instrument: number;
  Side: OrderSide;
  LastTradePrice: number;
  DisplayQuantity: number;
  Price: number;
};
export declare const mapOrderItemToActivity: (
  items: Array<AcitvityOrderSource>,
) => Array<OrderActivity>;
export declare const mapAccountTradeToActivity: (
  items: Array<AccountTradeItem>,
) => Array<OrderActivity>;
export declare const mapDepositToActivity: (
  items: Array<DepositTicket>,
) => Array<WalletActivity>;
export declare const mapWithdrawToActivity: (
  items: Array<WithdrawTicket>,
) => Array<WalletActivity>;
export declare const mapAccountTransactionToActivityItem: (
  items: Array<AccountTransaction>,
) => Array<AccountTransactionActivity>;
export declare const orderSideToImage: (
  side: OrderActivity['side'],
) => React.JSX.Element;
export declare const walletActivityTypeToImage: (
  side: WalletActivity['type'],
) => React.JSX.Element;
export declare const accountTransactionTypeToImage: (
  type: AccountTransactionType,
) => React.JSX.Element;
export {};
