import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Convert } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { ConfirmView } from '../organisms';
import { useConvertOrderValues, useOrderConfirmValues } from '../../hooks';
export const ConvertConfirm = ({ values, onClose, onSubmit, submitting, }) => {
    const { colors } = useTheme();
    const orderValues = useConvertOrderValues(values);
    const { instrument, confirmItems } = useOrderConfirmValues(orderValues);
    return (<ConfirmView symbol={instrument?.Product1Symbol || ''} icon={<Convert color={colors.textSecondary}/>} title={translate('transactions.convert')} titleColor="textSecondary" subTitle={instrument?.VenueSymbol || ''} data={confirmItems} button={<Button size="big" label={translate('confirm')} onPress={onSubmit} loading={submitting}/>} onClose={onClose}/>);
};
