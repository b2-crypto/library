import { formatNumber, increment2digits } from './format';
const MAX_LENGTH = 10;
export const formatDataForOrderBook = (orderBookBuy, orderBookSell, instrument) => {
    // remove duplicates with the same price
    const uniqueSell = orderBookSell.filter((el, i, arr) => arr.findIndex(item => item.price === el.price) === i);
    const sell = uniqueSell
        .sort((a, b) => a.price - b.price)
        .slice(0, MAX_LENGTH);
    const sellNumberOfOrdersSum = [];
    for (let i = 0; i <= sell.length - 1; i++) {
        sellNumberOfOrdersSum.push(sell[i].numberOfOrders + (sellNumberOfOrdersSum[i - 1] || 0));
    }
    const uniqueBuy = orderBookBuy.filter((el, i, arr) => arr.findIndex(item => item.price === el.price) === i);
    const buy = uniqueBuy.sort((a, b) => b.price - a.price).slice(0, MAX_LENGTH);
    const buyNumberOfOrdersSum = [];
    for (let i = 0; i <= buy.length - 1; i++) {
        buyNumberOfOrdersSum.push(buy[i].numberOfOrders + (buyNumberOfOrdersSum[i - 1] || 0));
    }
    const orderBookTableData = [];
    for (let i = 0; i < MAX_LENGTH; i++) {
        orderBookTableData.push([
            {
                title: formatNumber(buy[i]?.quantity || 0, increment2digits(instrument.QuantityIncrement), true),
                value: formatNumber(buy[i]?.price || 0, increment2digits(instrument.PriceIncrement), true),
                rawValue: buy[i]?.price || 0,
                fillPercentage: (100 * buyNumberOfOrdersSum[i]) /
                    buyNumberOfOrdersSum[buyNumberOfOrdersSum.length - 1] || 0,
            },
            {
                title: formatNumber(sell[i]?.quantity || 0, increment2digits(instrument.QuantityIncrement), true),
                value: formatNumber(sell[i]?.price || 0, increment2digits(instrument.PriceIncrement), true),
                rawValue: sell[i]?.price || 0,
                fillPercentage: (100 * sellNumberOfOrdersSum[i]) /
                    sellNumberOfOrdersSum[sellNumberOfOrdersSum.length - 1] || 0,
            },
        ]);
    }
    return orderBookTableData;
};
