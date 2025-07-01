import React, { useCallback, useEffect, useMemo } from 'react';
import { FormProvider } from 'react-hook-form';
import { ScrollView, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { translate } from '../../../../helpers/i18n';
import { useModalControl, useUserInfo } from '../../../../hooks';
import { testID } from '../../../../helpers/testId';
import { useDepositForm, useFiatAssets, useDepositSubmit } from '../../hooks';
import { isApexError } from '../../../../types/apiResponses';
import { SelectAssetMessage } from '../atoms';
import { Box } from '../../../../components/atoms';
import { AssetField, DepositFormHeader } from '../molecules';
import { ModalBlurBg, Button, SubmissionError, } from '../../../../components/molecules';
import { DepositExternalFormWidget } from '../organisms';
import { CustomToast } from '../../../../helpers/toastConfig';
import { DepositTypeTabs } from '../molecules/DepositType';
import { DepositRequestFormWidget } from '../organisms/DepositRequestFormWidget';
import { Transfer2FA } from './Transfer2FA';
import { DepositOrWithdrawConfirm } from './DepositOrWithdrawConfirm';
const is2FAError = (err) => isApexError(err) && err.message === 'Waiting for 2FA';
export const DepositOrWithdrawForm = ({ productId, onClose, typeTransaction = 'deposit', }) => {
    const { data: userInfo } = useUserInfo();
    const { assets, isLoading: isAssetsLoading } = useFiatAssets();
    const form = useDepositForm({ productId }, {
        amount: '',
        account: '',
        routingNumber: '',
        userEmail: userInfo?.Email,
        note: '',
    });
    const { watch, getValues, formState, handleSubmit } = form;
    const [assetId, type] = watch(['productId', 'type']);
    const { modalVisible, showModal, hideModal } = useModalControl();
    const values = getValues();
    const asset = useMemo(() => assets.find(a => a.ProductId === assetId), [assets, assetId]);
    const modalShown = !!modalVisible && !!asset;
    const [send, { isLoading, error, reset }] = useDepositSubmit(typeTransaction);
    // reset mutation state on values changes
    // (ignore reset dependency to not reset the mutation when the function changes,
    // otherwise the error will not be displayed)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(reset, [
        values.type,
        values.amount,
        values.productId,
        values.type === 'send' ? values.emailAddress : undefined,
    ]);
    useEffect(() => {
        // Reset amount whenever user selects a different asset.
        form.resetField('amount');
    }, [values.productId, form]);
    const onSubmit = useCallback(async (payload) => {
        try {
            await send({ values: payload, assetId });
            Toast.show({
                type: CustomToast.text,
                text1: translate(`transaction.${typeTransaction}.${payload.type}Success`),
            });
            onClose();
        }
        catch (err) {
            if (!is2FAError(err)) {
                hideModal();
            }
        }
    }, [send, onClose, hideModal, assetId, typeTransaction]);
    return (<FormProvider {...form}>
      <ScrollView keyboardShouldPersistTaps="always">
        <DepositFormHeader onClose={onClose} typeTransaction={typeTransaction}>
          <AssetField assets={assets} label={translate(`${typeTransaction}`)} isLoading={isAssetsLoading}/>
        </DepositFormHeader>

        {assetId && asset ? (<>
            <DepositTypeTabs type={typeTransaction}/>
            <Box paddingHorizontal="m" marginVertical="m">
              {type === 'external' ? (<DepositExternalFormWidget asset={asset}/>) : (<DepositRequestFormWidget asset={asset}/>)}
            </Box>
          </>) : (<Box padding="m">
            <SelectAssetMessage message={translate('transactions.selectAsset.send')}/>
          </Box>)}
        {!!error && isApexError(error) && !is2FAError(error) && (<Box mt="m">
            <SubmissionError error={error.message}/>
          </Box>)}
        <Box padding="m" mt="m">
          <Button disabled={!formState.isValid} label={translate(`transaction.${typeTransaction}.requestButton`)} onPress={showModal} {...testID('submit')}/>
        </Box>
      </ScrollView>

      <ModalBlurBg isVisible={modalShown} onBackdropPress={hideModal} style={styles.modal}>
        {!!error && is2FAError(error) ? (<Transfer2FA onSuccess={onClose} onClose={hideModal}/>) : (modalShown && (<DepositOrWithdrawConfirm values={values} asset={asset} onClose={hideModal} submitting={isLoading} onSubmit={handleSubmit(onSubmit)} typeTransaction={typeTransaction}/>))}
      </ModalBlurBg>
    </FormProvider>);
};
const styles = StyleSheet.create({
    modal: { justifyContent: 'flex-start', marginTop: 100 },
});
