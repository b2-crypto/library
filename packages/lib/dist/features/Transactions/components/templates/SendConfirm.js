import React, { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { Send } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { ConfirmView } from '../organisms';
import { formatCrypto } from '../../../../helpers/format';
import { testID } from '../../../../helpers/testId';
export const SendConfirm = ({ values, onClose, onSubmit, submitting, asset, }) => {
    const { colors } = useTheme();
    const confirmItems = useMemo(() => [
        {
            value: new Date().toLocaleString(),
            label: translate('date'),
        },
        {
            value: formatCrypto(parseFloat(values.amount), asset.DecimalPlaces, asset.Product),
            label: translate('transactions.sendConfirmAmountLabel', {
                symbol: asset.Product,
            }),
        },
    ].concat(values.type === 'transfer'
        ? [
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
        ]
        : Object.entries(values.templateForm).map(([fieldName, fieldValue]) => ({
            value: fieldValue?.toString() || '',
            label: translate(`transaction.fields.${camelCase(fieldName)}`),
            vertical: ['ExternalAddress', 'Comment'].includes(fieldName),
        }))), []);
    return (<ConfirmView symbol={asset.Product} icon={<Send color={colors.textSecondary}/>} title={translate(`transactions.send${upperFirst(values.type)}ConfirmTitle`)} titleColor="textSecondary" subTitle={`${asset.Product} ${asset.ProductFullName}`} data={confirmItems} button={<Button variant="primary" size="big" label={translate('confirm')} onPress={onSubmit} loading={submitting} {...testID('confirm')}/>} onClose={onClose}/>);
};
