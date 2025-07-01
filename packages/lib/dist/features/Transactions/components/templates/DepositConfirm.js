import React, { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import upperFirst from 'lodash/upperFirst';
import { Deposit, Withdraw } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { ConfirmView } from '../organisms';
import { formatCrypto } from '../../../../helpers/format';
import { testID } from '../../../../helpers/testId';
export const DepositConfirm = ({ values, onClose, onSubmit, submitting, asset, typeTransaction = 'deposit', }) => {
    const { colors } = useTheme();
    const confirmItems = useMemo(() => [
        {
            value: new Date().toLocaleString(),
            label: translate('date'),
        },
        {
            value: formatCrypto(parseFloat(values.amount), asset.DecimalPlaces, asset.Product),
            label: translate('transaction.deposit.depositConfirmAmountLabel', {
                symbol: asset.Product,
            }),
        },
    ].concat(values.type === 'send'
        ? [
            {
                value: values.emailAddress,
                label: translate('transaction.deposit.emailAddress'),
            },
            {
                value: values.note || '',
                label: translate('transaction.deposit.note'),
            },
        ]
        : []), [
        asset.DecimalPlaces,
        asset.Product,
        values.amount,
        values.type,
        values.emailAddress,
        values.note,
    ]);
    return (<ConfirmView symbol={asset.Product} icon={typeTransaction === 'deposit' ? (<Deposit color={colors.textSecondary}/>) : (<Withdraw color={colors.textSecondary}/>)} title={translate(`transaction.${typeTransaction}.${upperFirst(values.type)}ConfirmTitle`)} titleColor="textSecondary" subTitle={`${asset.Product} ${asset.ProductFullName}`} data={confirmItems} button={<Button variant="primary" size="big" label={translate('confirm')} onPress={onSubmit} loading={submitting} {...testID('confirm')}/>} onClose={onClose}/>);
};
