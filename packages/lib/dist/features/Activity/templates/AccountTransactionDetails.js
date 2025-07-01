import React from 'react';
import { translate } from '../../../helpers/i18n';
import { accountTransactionTypeToImage } from '../../../helpers/activity';
import { formatCrypto, formatCurrency } from '../../../helpers/format';
import { ProductIcon } from '../../../components/molecules';
import { ActivityDetailsCard } from '../organisms';
export const AccountTransactionDetails = ({ item, }) => {
    const types = item.type.split('-');
    return (<ActivityDetailsCard title={item.symbol} icon={item.iconSymbol ? <ProductIcon symbol={item.iconSymbol}/> : undefined} extraIcon={accountTransactionTypeToImage(item.type)} amount={formatCrypto(item.amount, item.decimalPlaces)} currency={item.currency} product={item.currency} valuesInfo={[
            {
                title: translate('activity.value'),
                value: formatCurrency((item.notionalRate || 1) * item.amount, item.notionalSymbol, item.notionalPlaces),
            },
        ]} userInfo={[
            { title: translate('activity.refType'), value: item.referenceType },
            {
                title: translate('activity.transactionType'),
                value: item.transactionType,
            },
        ]} activityType={translate(`activity.itemType.past.${types[0].toLowerCase()}`) +
            (types.includes('fee') ? ' ' + translate('fee') : '')} activityStatus={item.status} activityId={item.id} time={item.timestamp}/>);
};
