import { useMemo } from 'react';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
export const useTransferRequestConfirmValues = (request) => {
    return useMemo(() => [
        {
            label: translate('date'),
            value: new Date(request.date).toLocaleString(),
        },
        {
            label: translate('requests.cryptoSent', {
                symbol: request.symbol,
            }),
            value: `${formatNumber(request.amount, request.decimalPlaces)} ${request.symbol}`,
        },
        {
            label: translate('requests.recipientName'),
            value: request.requestorUsername,
        },
        { label: translate('requests.note'), value: request.note },
    ], [request]);
};
