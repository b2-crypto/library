import React, { memo, useMemo, useState } from 'react';
import { formatDataForOrderBook } from '../../../helpers/formatDataForOrderBook';
import { translate } from '../../../helpers/i18n';
import { useOrderBook } from '../../../hooks';
import { useGetInstrumentsQuery, useGetTradesHistoryQuery, } from '../../../services/apexApi';
import { TradesTable } from './TradesTable';
import { OrderBookTable } from './OrderBookTable';
import { View } from '../../../components/atoms';
import { Tabs } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
import { formatNumber, increment2digits } from '../../../helpers/format';
const TRADES_QUERY_INTERVAL_MS = 5000;
export const PairTabsTables = ({ orderBook, spread, trades, }) => {
    const [activeTab, setActiveTab] = useState('orderBook');
    const tabButtons = useMemo(() => ['orderBook', 'recentTrades'].map(tab => ({
        value: tab,
        label: translate(tab),
    })), []);
    return (<>
      <View marginBottom="xs">
        <Tabs data={tabButtons} value={activeTab} onChange={setActiveTab} type="default" tabMinWidth={130} wrapperProps={{
            accessibilityLabel: 'Tabs',
            ...testID('instrumentTabs'),
        }}/>
      </View>
      {activeTab === 'orderBook' ? (<OrderBookTable data={orderBook} spread={spread}/>) : (<TradesTable data={trades}/>)}
    </>);
};
export const PairTabsTablesWidget = memo(({ instrumentId, skipQuery = false }) => {
    const { instrument } = useGetInstrumentsQuery(undefined, {
        selectFromResult: ({ data }) => {
            return {
                instrument: data?.find(i => i.InstrumentId === instrumentId),
            };
        },
    });
    const { orderBookBuy, orderBookSell } = useOrderBook(instrumentId);
    const { data: trades } = useGetTradesHistoryQuery({
        instrumentId,
    }, {
        pollingInterval: TRADES_QUERY_INTERVAL_MS,
        skip: skipQuery,
    });
    const sortedOrderBook = useMemo(() => instrument
        ? formatDataForOrderBook(orderBookBuy, orderBookSell, instrument)
        : [], [orderBookBuy, orderBookSell, instrument]);
    const spread = useMemo(() => {
        const latestRow = sortedOrderBook[0];
        return formatNumber(latestRow?.[1].rawValue - latestRow?.[0].rawValue || 0, increment2digits(instrument?.PriceIncrement || 2), true);
    }, [sortedOrderBook, instrument]);
    return (<PairTabsTables orderBook={sortedOrderBook} spread={spread} trades={trades}/>);
});
PairTabsTablesWidget.displayName = 'PairTabsTablesWidget';
