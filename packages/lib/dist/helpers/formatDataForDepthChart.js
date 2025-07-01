export const formatOrderBookForDepthChart = (orderBook, sumInAscendingOrder) => {
    const chartData = {
        dataChart: [],
        dataXLabel: [],
    };
    let orders = orderBook;
    if (!sumInAscendingOrder) {
        orders = orders.reverse();
    }
    for (let i = 0; i <= orders.length - 1; i++) {
        if (i > 0) {
            chartData.dataChart[i] = orders[i].quantity + chartData.dataChart[i - 1];
        }
        else {
            chartData.dataChart[0] = orders[0].quantity;
        }
    }
    chartData.dataXLabel = orders.map(item => item.price);
    if (!sumInAscendingOrder) {
        chartData.dataChart.reverse();
        chartData.dataXLabel.reverse();
    }
    return chartData;
};
export const formatDataForDepthChart = (orderBookBuy, orderBookSell) => {
    const bidData = formatOrderBookForDepthChart(orderBookBuy, false);
    const askData = formatOrderBookForDepthChart(orderBookSell, true);
    const bestBid = bidData.dataXLabel[bidData.dataXLabel.length - 1];
    const bestAsk = askData.dataXLabel[0];
    const bestPrice = (bestAsk + bestBid) / 2;
    return {
        bidData,
        askData,
        bestPrice,
    };
};
