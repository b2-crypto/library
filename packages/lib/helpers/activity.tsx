import React from 'react';
import {
  EntityAdapter,
  EntityState,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import {
  AccountTradeItem,
  DepositTicket,
  WithdrawTicket,
  ActivityItem,
  AccountTransaction,
  ReferenceType,
  OrderActivity,
  WalletActivity,
  AccountTransactionActivity,
  AccountTransactionType,
  OrderState,
  OrderType,
  OrderSide,
} from '../types/apiResponses';

import { Buy, Deposit, Receive, Sell, Send, Withdraw } from '../assets/icons';

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

const createActivityAdapter = <T extends ActivityItem>() =>
  createEntityAdapter<T>({
    selectId: item => item.id,
    sortComparer: (a, b) => b.timestamp - a.timestamp || b.id - a.id,
  });

export const openOrdersAdapter = createActivityAdapter<OrderActivity>();
export const cancelledOrdersAdapter = createActivityAdapter<OrderActivity>();
export const accountTradesAdapter = createActivityAdapter<OrderActivity>();
export const depositTicketsAdapter = createActivityAdapter<WalletActivity>();
export const withdrawTicketsAdapter = createActivityAdapter<WalletActivity>();
export const accountTransactionsAdapter =
  createActivityAdapter<AccountTransactionActivity>();

export const activityTransform = <T,>(
  adapter: EntityAdapter<T>,
  res: Array<T>,
  _: unknown,
  args: { depth?: number },
) => ({
  items: adapter.addMany(adapter.getInitialState(), res),
  hasMore: !(res.length < (args.depth || 5)),
  counter: res.length,
});

export const activityQueryProps = <T,>(adapter: EntityAdapter<T>) => ({
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
    const { accountId, depth, instrumentId, productId } = queryArgs;
    return { accountId, depth, instrumentId, productId };
  },
  merge: (
    currentCacheData: ActivityState<T>,
    responseData: ActivityState<T>,
    { arg: { resetCache } }: { arg: { resetCache?: boolean } },
  ) => {
    if (resetCache) {
      adapter.removeAll(currentCacheData.items);
      adapter.addMany(
        currentCacheData.items,
        adapter.getSelectors().selectAll(responseData.items),
      );
      currentCacheData.counter = responseData.counter;
    } else {
      adapter.addMany(
        currentCacheData.items,
        adapter.getSelectors().selectAll(responseData.items),
      );
      currentCacheData.counter += responseData.counter;
    }
    currentCacheData.hasMore = responseData.hasMore;
  },
  keepUnusedDataFor: 600,
});

const getAccountTransactionType = (
  refType: ReferenceType,
  isCR: boolean,
  isFee: boolean,
): AccountTransactionType => {
  switch (refType) {
    case 'Deposit':
      return isFee ? 'deposit-fee' : 'deposit';
    case 'Withdraw':
      return isFee ? 'withdraw-fee' : 'withdraw';
    case 'Trade':
      return isFee ? (isCR ? 'buy-fee' : 'sell-fee') : isCR ? 'buy' : 'sell';
    case 'Transfer':
      return isCR ? 'receive' : 'send';
    default:
      return 'unknown';
  }
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

export const mapOrderItemToActivity = (
  items: Array<AcitvityOrderSource>,
): Array<OrderActivity> =>
  items.map(item => ({
    id: item.OrderId,
    amount: item.OrigQuantity,
    type: item.OrderType,
    status: item.OrderState,
    timestamp: item.ReceiveTime,
    instrumentId: item.Instrument,
    side: item.Side,
    ...(item.OrderType === 'Limit'
      ? {
          avgPrice: item.LastTradePrice * item.DisplayQuantity,
          limitPrice: item.Price,
        }
      : { avgPrice: item.Price }),
  }));

export const mapAccountTradeToActivity = (
  items: Array<AccountTradeItem>,
): Array<OrderActivity> =>
  items.map(item => ({
    id: item.TradeId,
    amount: item.Quantity,
    type: item.OrderType,
    status: 'FullyExecuted',
    timestamp: item.TradeTimeMS,
    instrumentId: item.InstrumentId,
    side: item.Side,
    avgPrice: item.Price,
  }));

const enabledDepositInfo = ['fullname', 'comments'] as const;
type DepositInfoFields = (typeof enabledDepositInfo)[number];

const getDepositUserInfo = (DepositInfoJson: string) => {
  const depositInfo = JSON.parse(DepositInfoJson) as { [key: string]: string };
  const toReturn: Partial<Record<DepositInfoFields, string>> = {};
  Object.keys(depositInfo)
    .filter(key =>
      enabledDepositInfo.includes(
        key.toLowerCase() as unknown as DepositInfoFields,
      ),
    )
    .forEach((key: string) => {
      toReturn[key as DepositInfoFields] = depositInfo[key];
    });
  return toReturn;
};

export const mapDepositToActivity = (
  items: Array<DepositTicket>,
): Array<WalletActivity> =>
  items.map(item => ({
    id: item.TicketNumber,
    amount: item.Amount,
    type: 'deposit',
    status: item.Status,
    timestamp: new Date(item.CreatedTimestamp).valueOf(),
    productId: item.AssetId,
    ...getDepositUserInfo(item.DepositInfo),
  }));

export const mapWithdrawToActivity = (
  items: Array<WithdrawTicket>,
): Array<WalletActivity> =>
  items.map(item => ({
    id: item.TicketNumber,
    amount: item.Amount,
    type: 'withdraw',
    status: item.Status,
    timestamp: new Date(item.CreatedTimestamp).valueOf(),
    productId: item.AssetId,
  }));

export const mapAccountTransactionToActivityItem = (
  items: Array<AccountTransaction>,
): Array<AccountTransactionActivity> =>
  items.map(item => ({
    id: item.TransactionId,
    amount: item.CR || item.DR,
    type: getAccountTransactionType(
      item.ReferenceType,
      !!item.CR,
      item.TransactionType === 'Fee',
    ),
    status: 'complete',
    timestamp: item.TimeStamp,
    productId: item.ProductId,
    referenceType: item.ReferenceType,
    transactionType: item.TransactionType,
    isCR: !!item.CR,
  }));

export const orderSideToImage = (side: OrderActivity['side']) => {
  switch (side) {
    case 'Buy':
      return <Buy />;
    default:
      return <Sell />;
  }
};

export const walletActivityTypeToImage = (side: WalletActivity['type']) => {
  switch (side) {
    case 'deposit':
      return <Deposit />;
    case 'withdraw':
      return <Withdraw />;
  }
};

export const accountTransactionTypeToImage = (type: AccountTransactionType) => {
  switch (type) {
    case 'buy-fee':
    case 'buy':
      return <Buy />;
    case 'sell-fee':
    case 'sell':
      return <Sell />;
    case 'deposit-fee':
    case 'deposit':
      return <Deposit />;
    case 'withdraw-fee':
    case 'withdraw':
      return <Withdraw />;
    case 'send':
      return <Send />;
    case 'receive':
      return <Receive />;
    default:
      return <Sell />;
  }
};
