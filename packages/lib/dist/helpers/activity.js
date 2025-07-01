import React from 'react';
import { createEntityAdapter, } from '@reduxjs/toolkit';
import { Buy, Deposit, Receive, Sell, Send, Withdraw } from '../assets/icons';
const createActivityAdapter = () => createEntityAdapter({
    selectId: item => item.id,
    sortComparer: (a, b) => b.timestamp - a.timestamp || b.id - a.id,
});
export const openOrdersAdapter = createActivityAdapter();
export const cancelledOrdersAdapter = createActivityAdapter();
export const accountTradesAdapter = createActivityAdapter();
export const depositTicketsAdapter = createActivityAdapter();
export const withdrawTicketsAdapter = createActivityAdapter();
export const accountTransactionsAdapter = createActivityAdapter();
export const activityTransform = (adapter, res, _, args) => ({
    items: adapter.addMany(adapter.getInitialState(), res),
    hasMore: !(res.length < (args.depth || 5)),
    counter: res.length,
});
export const activityQueryProps = (adapter) => ({
    serializeQueryArgs: ({ queryArgs, }) => {
        const { accountId, depth, instrumentId, productId } = queryArgs;
        return { accountId, depth, instrumentId, productId };
    },
    merge: (currentCacheData, responseData, { arg: { resetCache } }) => {
        if (resetCache) {
            adapter.removeAll(currentCacheData.items);
            adapter.addMany(currentCacheData.items, adapter.getSelectors().selectAll(responseData.items));
            currentCacheData.counter = responseData.counter;
        }
        else {
            adapter.addMany(currentCacheData.items, adapter.getSelectors().selectAll(responseData.items));
            currentCacheData.counter += responseData.counter;
        }
        currentCacheData.hasMore = responseData.hasMore;
    },
    keepUnusedDataFor: 600,
});
const getAccountTransactionType = (refType, isCR, isFee) => {
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
export const mapOrderItemToActivity = (items) => items.map(item => ({
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
export const mapAccountTradeToActivity = (items) => items.map(item => ({
    id: item.TradeId,
    amount: item.Quantity,
    type: item.OrderType,
    status: 'FullyExecuted',
    timestamp: item.TradeTimeMS,
    instrumentId: item.InstrumentId,
    side: item.Side,
    avgPrice: item.Price,
}));
const enabledDepositInfo = ['fullname', 'comments'];
const getDepositUserInfo = (DepositInfoJson) => {
    const depositInfo = JSON.parse(DepositInfoJson);
    const toReturn = {};
    Object.keys(depositInfo)
        .filter(key => enabledDepositInfo.includes(key.toLowerCase()))
        .forEach((key) => {
        toReturn[key] = depositInfo[key];
    });
    return toReturn;
};
export const mapDepositToActivity = (items) => items.map(item => ({
    id: item.TicketNumber,
    amount: item.Amount,
    type: 'deposit',
    status: item.Status,
    timestamp: new Date(item.CreatedTimestamp).valueOf(),
    productId: item.AssetId,
    ...getDepositUserInfo(item.DepositInfo),
}));
export const mapWithdrawToActivity = (items) => items.map(item => ({
    id: item.TicketNumber,
    amount: item.Amount,
    type: 'withdraw',
    status: item.Status,
    timestamp: new Date(item.CreatedTimestamp).valueOf(),
    productId: item.AssetId,
}));
export const mapAccountTransactionToActivityItem = (items) => items.map(item => ({
    id: item.TransactionId,
    amount: item.CR || item.DR,
    type: getAccountTransactionType(item.ReferenceType, !!item.CR, item.TransactionType === 'Fee'),
    status: 'complete',
    timestamp: item.TimeStamp,
    productId: item.ProductId,
    referenceType: item.ReferenceType,
    transactionType: item.TransactionType,
    isCR: !!item.CR,
}));
export const orderSideToImage = (side) => {
    switch (side) {
        case 'Buy':
            return <Buy />;
        default:
            return <Sell />;
    }
};
export const walletActivityTypeToImage = (side) => {
    switch (side) {
        case 'deposit':
            return <Deposit />;
        case 'withdraw':
            return <Withdraw />;
    }
};
export const accountTransactionTypeToImage = (type) => {
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
