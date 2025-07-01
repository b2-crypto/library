import React from 'react';
import { useTheme } from '@shopify/restyle';

import { Convert } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { Theme } from '../../../../theme';
import { ConvertFormValues, OrderFormValues } from '../../types';
import { ConfirmView } from '../organisms';
import { useConvertOrderValues, useOrderConfirmValues } from '../../hooks';

type Props = {
  /** Convert Form values */
  values: ConvertFormValues;
  /** Callback to close the confirm dialog */
  onClose: () => void;
  /** Callback for confirm button press */
  onSubmit: () => void;
  /** Indicator for sumbission loading */
  submitting?: boolean;
};

export const ConvertConfirm = ({
  values,
  onClose,
  onSubmit,
  submitting,
}: Props) => {
  const { colors } = useTheme<Theme>();

  const orderValues = useConvertOrderValues(values);
  const { instrument, confirmItems } = useOrderConfirmValues(
    orderValues as OrderFormValues,
  );

  return (
    <ConfirmView
      symbol={instrument?.Product1Symbol || ''}
      icon={<Convert color={colors.textSecondary} />}
      title={translate('transactions.convert')}
      titleColor="textSecondary"
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
