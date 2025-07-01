import React, { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import upperFirst from 'lodash/upperFirst';

import { Deposit, Withdraw } from '../../../../assets/icons';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { Theme } from '../../../../theme';
import { DepositFormValues } from '../../types';
import { ConfirmView } from '../organisms';
import { formatCrypto } from '../../../../helpers/format';
import { testID } from '../../../../helpers/testId';

type Props = {
  /** deposit form values */
  values: DepositFormValues & { type: 'send' };
  /** Callback to close the confirm modal */
  onClose: () => void;
  /** Flag indicating the state of submission */
  submitting?: boolean;
  /** Callback to call submission handler on Confirm button press */
  onSubmit: () => void;
  /** Selected asset (product) */
  asset: { Product: string; ProductFullName: string; DecimalPlaces: number };
  typeTransaction?: 'deposit' | 'withdraw';
};

export const DepositOrWithdrawConfirm = ({
  values,
  onClose,
  onSubmit,
  submitting,
  asset,
  typeTransaction = 'deposit',
}: Props) => {
  const { colors } = useTheme<Theme>();

  const confirmItems = useMemo(
    () =>
      [
        {
          value: new Date().toLocaleString(),
          label: translate('date'),
        },
        {
          value: formatCrypto(
            parseFloat(values.amount),
            asset.DecimalPlaces,
            asset.Product,
          ),
          label: translate(
            `transaction.${typeTransaction}.confirmAmountLabel`,
            {
              symbol: asset.Product,
            },
          ),
        },
      ].concat(
        values.type === 'send'
          ? [
              {
                value: values.emailAddress,
                label: translate(`transaction.${typeTransaction}.emailAddress`),
              },
              {
                value: values.note || '',
                label: translate(`transaction.${typeTransaction}.noteLabel`),
              },
            ]
          : [],
      ),
    [
      asset.DecimalPlaces,
      asset.Product,
      values.amount,
      values.type,
      values.emailAddress,
      values.note,
      typeTransaction,
    ],
  );

  return (
    <ConfirmView
      symbol={asset.Product}
      icon={
        typeTransaction === 'deposit' ? (
          <Deposit color={colors.textSecondary} />
        ) : (
          <Withdraw color={colors.textSecondary} />
        )
      }
      title={translate(
        `transaction.${typeTransaction}.${upperFirst(values.type)}ConfirmTitle`,
      )}
      titleColor="textSecondary"
      subTitle={`${asset.Product} ${asset.ProductFullName}`}
      data={confirmItems}
      button={
        <Button
          variant="primary"
          size="big"
          label={translate('confirm')}
          onPress={onSubmit}
          loading={submitting}
          {...testID('confirm')}
        />
      }
      onClose={onClose}
    />
  );
};
