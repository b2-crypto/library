import { DataActionType } from '../types/apiResponses';
export function transformFrame(frame) {
    return {
        time: frame[0],
        high: frame[1],
        low: frame[2],
        open: frame[3],
        close: frame[4],
        volume: frame[5],
        bidPrice: frame[6],
        askPrice: frame[7],
        instrumentId: frame[8],
    };
}
export const transformOrder = (order) => ({
    updateId: order[0],
    numberOfAccounts: order[1],
    actionDateTime: order[2],
    actionType: order[3],
    lastTradePrice: order[4],
    numberOfOrders: order[5],
    price: order[6],
    productPairCode: order[7],
    quantity: order[8],
    side: order[9],
});
export const concatLevel2Updates = (draft, updates) => {
    updates.forEach(update => {
        switch (update.actionType) {
            case DataActionType.new:
                draft.push(update);
                break;
            case DataActionType.update:
                draft = draft.filter(listItem => listItem.price !== update.price || listItem.side !== update.side);
                draft.push(update);
                break;
            case DataActionType.delete:
                draft = draft.filter(listItem => listItem.price !== update.price || listItem.side !== update.side);
                break;
        }
    });
};
export function transformTradeHistory(trade) {
    return {
        tradeId: trade.TradeId,
        quantity: trade.Quantity,
        price: trade.Price,
        tradetime: trade.TradeTimeMS,
        takerSide: trade.Side === 'Sell' ? 1 : 0,
    };
}
