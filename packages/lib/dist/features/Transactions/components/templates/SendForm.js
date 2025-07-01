import React, { useCallback, useEffect, useMemo } from 'react';
import { FormProvider } from 'react-hook-form';
import { ScrollView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { translate } from '../../../../helpers/i18n';
import { useModalControl } from '../../../../hooks';
import { useWallets } from '../../../../hooks';
import { testID } from '../../../../helpers/testId';
import { useCryptoAssets, useSendForm, useSendSubmit } from '../../hooks';
import { useUserInfo } from '../../../../hooks';
import { isApexError } from '../../../../types/apiResponses';
import { SelectAssetMessage } from '../atoms';
import { Box } from '../../../../components/atoms';
import { AssetField, SendFormHeader, SendTypeTabs } from '../molecules';
import { ModalBlurBg, Button, SubmissionError, } from '../../../../components/molecules';
import { TransferCryptoFormBody, WithdrawFormWidget, WithdrawSummaryWidget, TransferSummaryWidget, } from '../organisms';
import { CustomToast } from '../../../../helpers/toastConfig';
import { Transfer2FA } from './Transfer2FA';
import { SendConfirm } from './SendConfirm';
const is2FAError = (err) => isApexError(err) && err.message === 'Waiting for 2FA';
export const SendForm = ({ productId, onClose, onQrClick }) => {
    const { data: userInfo } = useUserInfo();
    const { data: wallets } = useWallets({});
    const balances = useMemo(() => wallets.reduce((acc, w) => {
        acc[w.ProductId] = w.AvailableBalance;
        return acc;
    }, {}), [wallets]);
    const { assets, isLoading: isAssetsLoading } = useCryptoAssets();
    const symbols = useMemo(() => assets.reduce((acc, i) => {
        acc[i.ProductId] = i.Product;
        return acc;
    }, {}), [assets]);
    const form = useSendForm({ productId }, {
        userEmail: userInfo?.Email,
        balances,
        productSymbols: symbols,
    });
    const { watch, getValues, formState, handleSubmit } = form;
    const [assetId, type] = watch(['productId', 'type']);
    const { modalVisible, showModal, hideModal } = useModalControl();
    const values = getValues();
    const asset = useMemo(() => assets.find(a => a.ProductId === assetId), [assets, assetId]);
    const balance = balances[assetId];
    const modalShown = !!modalVisible && !!asset;
    const [send, { isLoading, error, reset }] = useSendSubmit();
    // reset mutation state on values changes
    // (ignore reset dependency to not reset the mutation when the function changes,
    // otherwise the error will not be displayed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(reset, [
        values.type,
        values.amount,
        values.productId,
        values.type === 'transfer' ? values.emailAddress : undefined,
    ]);
    useEffect(() => {
        // Reset amount whenever user selects a different asset.
        form.resetField('amount');
    }, [values.productId, form]);
    const onSubmit = useCallback(async (payload) => {
        try {
            await send(payload);
            Toast.show({
                type: CustomToast.text,
                text1: translate(`transactions.${payload.type}Success`),
            });
            onClose();
        }
        catch (err) {
            if (!is2FAError(err)) {
                hideModal();
            }
        }
    }, [send, onClose, hideModal]);
    const SendSummaryWidget = type === 'withdraw' ? WithdrawSummaryWidget : TransferSummaryWidget;
    return (<FormProvider {...form}>
      <ScrollView 
    // ? Fix for manual ref focus in Input to work properly on Android
    // https://stackoverflow.com/a/71417109
    keyboardShouldPersistTaps="always">
        <SendFormHeader onClose={onClose}>
          <AssetField assets={assets} label={translate('send')} isLoading={isAssetsLoading}/>
        </SendFormHeader>

        {assetId && asset ? (<>
            <SendTypeTabs />
            <Box paddingHorizontal="m" marginVertical="m">
              {type === 'withdraw' ? (<WithdrawFormWidget asset={asset} onQrClick={onQrClick} balance={balance}/>) : (<TransferCryptoFormBody asset={asset} balance={balance}/>)}
            </Box>
            <Box borderTopWidth={1} borderTopColor="border3" p="m" pb="none">
              <SendSummaryWidget asset={asset} balance={balance || 0}/>
            </Box>
          </>) : (<Box padding="m">
            <SelectAssetMessage message={translate('transactions.selectAsset.send')}/>
          </Box>)}
        {!!error && isApexError(error) && !is2FAError(error) && (<Box mt="m">
            <SubmissionError error={error.message}/>
          </Box>)}
        <Box padding="m" mt="m">
          <Button disabled={!formState.isValid} label={translate('transactions.sendAssets')} onPress={showModal} {...testID('submit')}/>
        </Box>
      </ScrollView>

      <ModalBlurBg isVisible={modalShown} onBackdropPress={hideModal} style={styles.modal}>
        {!!error && is2FAError(error) ? (<Transfer2FA onSuccess={onClose} onClose={hideModal}/>) : (modalShown && (<SendConfirm values={values} asset={asset} onClose={hideModal} submitting={isLoading} onSubmit={handleSubmit(onSubmit)}/>))}
      </ModalBlurBg>
    </FormProvider>);
};
const styles = StyleSheet.create({
    modal: { justifyContent: 'flex-start', marginTop: 100 },
});
