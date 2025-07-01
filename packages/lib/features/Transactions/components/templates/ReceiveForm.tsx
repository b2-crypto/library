import React, { useCallback, useEffect, useMemo } from 'react';
import { FormProvider } from 'react-hook-form';
import { ScrollView, StyleSheet } from 'react-native';

import { AssetField, ReceiveFormHeader, ReceiveTypeTabs } from '../molecules';
import { SelectAssetMessage } from '../atoms';
import { Box } from '../../../../components/atoms';
import { TransferCryptoFormBody, ReceiveQRWidget } from '../organisms';
import {
  ModalBlurBg,
  Button,
  SubmissionError,
} from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import {
  useCryptoAssets,
  useReceiveForm,
  useRequestTransferFunds,
} from '../../hooks';
import { ReceiveFormValues } from '../../types';
import { isApexError } from '../../../../types/apiResponses';
import { useModalControl } from '../../../../hooks';
import { useUserInfo } from '../../../../hooks';
import { testID } from '../../../../helpers/testId';

import { ReceiveConfirm } from './ReceiveConfirm';

type Props = {
  productId?: number;
  onClose: () => void;
};

export const ReceiveForm = ({ productId, onClose }: Props) => {
  const { data: userInfo } = useUserInfo();

  const form = useReceiveForm({ productId }, userInfo?.Email);
  const { watch, getValues, formState, handleSubmit } = form;
  const [assetId, type] = watch(['productId', 'type']);
  const { modalVisible, showModal, hideModal } = useModalControl();
  const values = getValues();

  const { assets, isLoading: isAssetsLoading } = useCryptoAssets();
  const asset = useMemo(
    () => assets.find(a => a.ProductId === assetId),
    [assets, assetId],
  );

  const modalShown = !!modalVisible && values.type === 'transfer' && !!asset;

  const [requestFunds, { isLoading, error, reset }] = useRequestTransferFunds();
  useEffect(reset, [
    values.productId,
    values.type,
    values.type === 'transfer' ? values.emailAddress : undefined,
  ]);

  const onSubmit = useCallback(
    async (payload: ReceiveFormValues) => {
      if (payload.type === 'transfer') {
        try {
          await requestFunds(payload);
          onClose();
        } catch {
          hideModal();
        }
      }
    },
    [requestFunds, onClose, hideModal],
  );

  return (
    <FormProvider {...form}>
      <ScrollView
        // ? Fix for manual ref focus in Input to work properly on Android
        // https://stackoverflow.com/a/71417109
        keyboardShouldPersistTaps="always">
        <ReceiveFormHeader onClose={onClose}>
          <AssetField
            assets={assets}
            label={translate('receive')}
            isLoading={isAssetsLoading}
          />
        </ReceiveFormHeader>
        {assetId && asset ? (
          <>
            <ReceiveTypeTabs />
            <Box padding="m">
              {type === 'deposit' ? (
                <ReceiveQRWidget />
              ) : (
                <>
                  <TransferCryptoFormBody asset={asset} />
                  {!!error && isApexError(error) && (
                    <Box mt="m">
                      <SubmissionError error={error.message} />
                    </Box>
                  )}
                  <Button
                    disabled={!formState.isValid}
                    label={translate('transactions.requestAssets')}
                    onPress={showModal}
                    mt="m"
                    accessibilityLabel="Request"
                    {...testID('submit')}
                  />
                </>
              )}
            </Box>
          </>
        ) : (
          <SelectAssetMessage
            message={translate('transactions.selectAsset.receive')}
          />
        )}
      </ScrollView>

      <ModalBlurBg
        isVisible={modalShown}
        onBackdropPress={hideModal}
        style={styles.modal}>
        {modalShown && (
          <ReceiveConfirm
            values={values}
            asset={asset}
            onClose={hideModal}
            submitting={isLoading}
            onSubmit={handleSubmit(onSubmit)}
          />
        )}
      </ModalBlurBg>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  modal: { justifyContent: 'flex-start', marginTop: 100 },
});
