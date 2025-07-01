import React, { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import { Receive } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { ConfirmView } from '../organisms';
import { formatCrypto } from '../../../../helpers/format';
export const ReceiveConfirm = ({ values, onClose, onSubmit, submitting, asset, }) => {
    const { colors } = useTheme();
    const confirmItems = useMemo(() => [
        {
            value: new Date().toLocaleString(),
            label: translate('date'),
        },
        {
            value: formatCrypto(parseFloat(values.amount), asset.DecimalPlaces, asset.Product),
            label: translate('transactions.receiveConfirmAmountLabel', {
                symbol: asset.Product,
            }),
        },
        {
            value: values.emailAddress,
            label: translate('transactions.requesteesAddress'),
            vertical: true,
        },
        {
            value: values.note || '',
            label: translate('transactions.note'),
            vertical: true,
        },
    ], []);
    return (<ConfirmView symbol={asset.Product} icon={<Receive color={colors.textSecondary}/>} title={translate('transactions.receiveTransferConfirmTitle')} titleColor="textSecondary" subTitle={`${asset.Product} ${asset.ProductFullName}`} data={confirmItems} button={<Button variant="primary" size="big" label={translate('confirm')} onPress={onSubmit} loading={submitting}/>} onClose={onClose}/>);
};
