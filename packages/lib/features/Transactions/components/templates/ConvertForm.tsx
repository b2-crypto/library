import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FormProvider } from 'react-hook-form';
import { StyleSheet, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

import { translate } from '../../../../helpers/i18n';
import { CustomToast } from '../../../../helpers/toastConfig';
import {
  useGetInstrumentWithLevel1,
  useModalControl,
  useWallets,
  useAppSelector,
} from '../../../../hooks';
import { getLogger } from '../../../../services';
import { useConvertForm, useConvertSubmit } from '../../hooks';
import {
  useGetProductsQuery,
  useGetUserInfoQuery,
} from '../../../../services/apexApi';
import { isApexError } from '../../../../types/apiResponses';
import { ConvertFormValues } from '../../types';
import { Box } from '../../../../components/atoms';
import {
  Button,
  ModalBlurBg,
  SubmissionError,
} from '../../../../components/molecules';
import { selectUser } from '../../../../stores/auth';
import { ConvertFormHeader } from '../molecules';
import { ConvertFormBodyWidget, ConvertSummaryWidget } from '../organisms';

import { ConvertConfirm } from './ConvertConfirm';

type Props = {
  onClose: () => void;
};

export const ConvertForm = ({ onClose }: Props) => {
  const user = useAppSelector(selectUser);
  const { data: userInfo } = useGetUserInfoQuery(
    user?.UserId ? { userId: user.UserId } : skipToken,
  );
  const { data: instruments } = useGetInstrumentWithLevel1();
  const { data: allProducts } = useGetProductsQuery();
  const { data: wallets } = useWallets({});

  const instrumentProductIds = useMemo(
    () =>
      Array.from(
        instruments.reduce(
          (acc, i) => acc.add(i.Product1).add(i.Product2),
          new Set<number>(),
        ),
      ),
    [instruments],
  );

  const balances = useMemo(
    () =>
      wallets.reduce((acc, w) => {
        acc[w.ProductId] = w.Amount;
        return acc;
      }, {} as Record<number, number>),
    [wallets],
  );

  const form = useConvertForm(
    {
      accountId: userInfo?.AccountId!,
      from: { productId: undefined, amount: '' },
      to: { productId: undefined, amount: '' },
    },
    { balances },
  );
  const formValues = form.getValues();

  const { modalVisible, showModal, hideModal } = useModalControl();
  const [sendOrder, { isLoading, error, reset }] = useConvertSubmit();

  // reset mutation state when values change.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, [
    formValues.from.productId,
    formValues.from.amount,
    formValues.to.productId,
    formValues.to.amount,
  ]);

  const onConvertPress = () => {
    reset();
    showModal();
  };

  const onSubmit = useCallback(
    async (values: ConvertFormValues) => {
      try {
        await sendOrder(values);

        Toast.show({
          type: CustomToast.text,
          text1: translate('transaction.orderSuccess'),
        });

        onClose();
      } catch (e) {
        hideModal();

        getLogger()('error', e, 'ConvertForm.onSubmit');
      }
    },
    [sendOrder, onClose, hideModal],
  );

  const products: React.ComponentProps<
    typeof ConvertFormBodyWidget
  >['products'] = useMemo(
    () =>
      allProducts
        ?.filter(
          p =>
            (p.ProductType === 'NationalCurrency' ||
              p.ProductType === 'CryptoCurrency') &&
            instrumentProductIds.includes(p.ProductId),
        )
        .map(p => {
          const wallet = wallets.find(w => w.ProductId === p.ProductId);
          return {
            id: p.ProductId,
            symbol: p.Product,
            fullName: p.ProductFullName,
            decimalPlaces: p.DecimalPlaces,
            type:
              p.ProductType === 'NationalCurrency'
                ? ('fiat' as const)
                : ('crypto' as const),
            amount: wallet?.AvailableBalance || 0,
            notionalRate: wallet?.NotionalRate,
            notionalSymbol: wallet?.NotionalProductSymbol,
          };
        })
        .sort((a, b) => a.symbol.localeCompare(b.symbol)) || [],
    [allProducts, wallets, instrumentProductIds],
  );

  return (
    <FormProvider {...form}>
      <ScrollView>
        <ConvertFormHeader onClose={onClose} />
        <Box mt="s">
          <ConvertFormBodyWidget
            instruments={instruments}
            products={products}
          />
        </Box>
        <Box
          mt="l"
          paddingHorizontal="xl"
          paddingVertical="m"
          borderTopWidth={1}
          borderColor="border3">
          <ConvertSummaryWidget />
          {error && (
            <Box mt="m">
              <SubmissionError
                error={
                  isApexError(error)
                    ? error.message
                    : translate('common.unknownError')
                }
              />
            </Box>
          )}
        </Box>
        <Box padding="m">
          <Button
            label={translate('transactions.convert_button')}
            disabled={!form.formState.isValid}
            onPress={onConvertPress}
          />
        </Box>
      </ScrollView>

      <ModalBlurBg
        isVisible={modalVisible}
        onBackdropPress={hideModal}
        style={styles.modal}>
        {modalVisible && (
          <ConvertConfirm
            values={form.getValues()}
            onClose={hideModal}
            submitting={isLoading}
            onSubmit={form.handleSubmit(onSubmit)}
          />
        )}
      </ModalBlurBg>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  modal: { justifyContent: 'flex-start', marginTop: 100 },
});
