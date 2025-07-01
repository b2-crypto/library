import React from 'react';
import { useTheme } from '@shopify/restyle';
import { Buy, Sell } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { ConfirmView } from '../organisms';
import { useOrderConfirmValues } from '../../hooks';
export const OrderConfirm = ({ values, onClose, onSubmit, submitting, }) => {
    const { colors } = useTheme();
    const { instrument, confirmItems } = useOrderConfirmValues(values);
    return (<ConfirmView symbol={instrument?.Product1Symbol || ''} secondarySymbol={instrument?.Product2Symbol || ''} icon={values.op === 'buy' ? (<Buy color={colors.buy}/>) : (<Sell color={colors.sell}/>)} title={translate(values.op)} titleColor={values.op} subTitle={instrument?.VenueSymbol || ''} data={confirmItems} button={<Button size="big" label={translate('confirm')} onPress={onSubmit} loading={submitting}/>} onClose={onClose}/>);
};
