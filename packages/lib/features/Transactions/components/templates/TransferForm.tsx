import { mapValues } from 'lodash';
import * as React from 'react';
import { FormProvider } from 'react-hook-form';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

import { Box } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { CustomToast } from '../../../../helpers/toastConfig';
import { useAllAccountsPositions } from '../../../../hooks';
import { getLogger, useGetProductsQuery } from '../../../../services';
import { useAccountsTranferFunds, useTransferForm } from '../../hooks';
import { TransferFormValues } from '../../types';
import { TransferFormHeader } from '../molecules';
import { TransferFormBodyWidget } from '../organisms';
import { formatCurrency } from '../../../../helpers';

type Props = {
  /** Optional product ID to presect in the dropdown */
  productId?: number;
  /** Handler to close the form modal */
  onClose: () => void;
  /** Handler to call when the transfer is successful */
  onSuccess: () => void;
};
export const TransferForm = ({ productId, onClose, onSuccess }: Props) => {
  const accountsPositions = useAllAccountsPositions();
  const { data: products } = useGetProductsQuery();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const balances = React.useMemo(
    () =>
      mapValues(accountsPositions, positions =>
        positions.reduce((acc, p) => {
          acc[p.ProductId] = p.Amount - p.Hold;
          return acc;
        }, {} as Record<number, number>),
      ),
    [accountsPositions],
  );

  const form = useTransferForm({ defaultProductId: productId }, { balances });

  const [transfer] = useAccountsTranferFunds();

  const onSubmit = React.useCallback(
    async (values: TransferFormValues) => {
      setIsSubmitting(true);
      try {
        await transfer(values);
        const product = products?.find(p => p.ProductId === values.productId);

        Toast.show({
          type: CustomToast.success,
          text1: translate('transactions.transferSuccess'),
          text2: formatCurrency(
            Number(values.amount),
            product?.Product,
            product?.DecimalPlaces,
            false,
          ),
        });
        onClose();
        onSuccess?.();
      } catch (e) {
        getLogger()('error', e, 'TransferForm.onSubmit');
        Toast.show({
          type: CustomToast.error,
          text1: translate('transactions.transferError'),
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [transfer, products, onSuccess, onClose],
  );

  return (
    <FormProvider {...form}>
      <ScrollView>
        <TransferFormHeader onClose={onClose} />
        <Box px="m">
          <TransferFormBodyWidget />
        </Box>
        <Box padding="m">
          <Button
            label={translate('transactions.transferButton')}
            disabled={!form.formState.isValid || isSubmitting}
            loading={isSubmitting}
            onPress={form.handleSubmit(onSubmit)}
          />
        </Box>
      </ScrollView>
    </FormProvider>
  );
};
