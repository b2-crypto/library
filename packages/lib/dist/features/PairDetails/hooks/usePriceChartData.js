import { skipToken } from '@reduxjs/toolkit/query';
import { useGetTickerHistoryQuery } from '../../../services';
const TICKER_POLLING_INTERVAL_MS = 10000;
export const usePriceChartData = ({ instrumentId, interval, timeframe, shouldQuery, }) => {
    const queryArgs = shouldQuery
        ? { instrumentId, interval, timeframe }
        : skipToken;
    const queryResult = useGetTickerHistoryQuery(queryArgs, {
        pollingInterval: TICKER_POLLING_INTERVAL_MS,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });
    return queryResult;
};
