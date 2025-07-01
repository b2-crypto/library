import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Buy, Sell } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { Theme } from '../../../../theme';
import { OrderFormValues } from '../../types';
import { ConfirmView } from '../organisms';
import { useOrderConfirmValues } from '../../hooks';

type Props = {
  /** Form values */
  values: OrderFormValues;
  /** Callback to close the modal on confirming */
  onClose: () => void;
  /** Callback to call on Confirm button press */
  onSubmit: () => void;
  /** Boolean flag indicating submission proccess status */
  submitting?: boolean;
};

export const OrderConfirm = ({
  values,
  onClose,
  onSubmit,
  submitting,
}: Props) => {
  const { colors } = useTheme<Theme>();

  const { instrument, confirmItems } = useOrderConfirmValues(values);

  return (
    <ConfirmView
      symbol={instrument?.Product1Symbol || ''}
      secondarySymbol={instrument?.Product2Symbol || ''}
      icon={
        values.op === 'buy' ? (
          <Buy color={colors.buy} />
        ) : (
          <Sell color={colors.sell} />
        )
      }
      title={translate(values.op)}
      titleColor={values.op}
      subTitle={instrument?.VenueSymbol || ''}
      data={confirmItems}
      button={
        <Button
          size="big"
          label={translate('confirm')}
          onPress={onSubmit}
          loading={submitting}
        />
      }
      onClose={onClose}
    />
  );
};
