import React, { useMemo } from 'react';
import { translate } from '../../../helpers/i18n';
import { PairStatsRow } from '../molecules';
import { formatCurrency, formatNumber, increment2digits, } from '../../../helpers/format';
export const PairStatsTable = ({ instrument }) => {
    const tableData = useMemo(() => {
        if (!instrument)
            return [];
        const priceDigits = increment2digits(instrument.PriceIncrement);
        return [
            [
                {
                    title: translate('lastPrice'),
                    value: formatNumber(instrument.LastTradedPx, priceDigits, true),
                },
                {
                    title: translate('volume'),
                    value: formatCurrency(instrument?.Rolling24HrVolume, instrument.Product1Symbol, 2),
                },
            ],
            [
                {
                    title: translate('bid'),
                    value: formatNumber(instrument.BestBid, priceDigits, true),
                    valueColor: 'positiveChange',
                },
                {
                    title: translate('ask'),
                    value: formatNumber(instrument.BestOffer, priceDigits, true),
                    valueColor: 'negativeChange',
                },
            ],
            [
                {
                    title: translate('24HrHigh'),
                    value: formatNumber(instrument.SessionHigh, priceDigits, true),
                },
                {
                    title: translate('24HrLow'),
                    value: formatNumber(instrument.SessionLow, priceDigits, true),
                },
            ],
        ];
    }, [instrument]);
    if (!instrument)
        return null;
    return (<>
      {tableData.map((item, index) => (<PairStatsRow row={item} key={index} isLastRow={index === tableData.length - 1}/>))}
    </>);
};
