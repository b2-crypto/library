import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FormProvider } from 'react-hook-form';
import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import Toast from 'react-native-toast-message';

import { Box, DashedBox } from '../../../../components/atoms';
import { ModalBlurBg, SubmissionError } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { CustomToast } from '../../../../helpers/toastConfig';
import { useModalControl, useUserCurrentAccount } from '../../../../hooks';
import { isApexError } from '../../../../types/apiResponses';
import { useOrderForm, useSendOrder } from '../../hooks';
import { OrderFormValues } from '../../types';
import {
  InstrumentFieldWidget,
  OrderFormButton,
  OrderFormHeader,
  OrderTypeField,
} from '../molecules';
import {
  MarginOrderSummaryWidget,
  OrderFormBodyWidget,
  OrderSummaryWidget,
} from '../organisms';
import { useMarginAccount, useMarginEnabled } from '../../../Margin';
import {
  OrderFormValidationContext,
  OrderFormValidationContextType,
} from '../../hooks/useOrderFormValidationContext';

import { OrderConfirm } from './OrderConfirm';

type Props = {
  onClose: () => void;
  initialValues: Partial<OrderFormValues>;
};

const BUTTON_CONTAINER_HEIGHT = 130;

export const OrderForm = ({ onClose, initialValues }: Props) => {
  const { currentAccount, isMarginAccount } = useUserCurrentAccount();
  const isMarginEnabled = useMarginEnabled();
  const { data: marginAccount } = useMarginAccount();
  const { height: windowHeight } = useWindowDimensions();
  const [validationContext, setValidationContext] = useState<
    OrderFormValidationContextType['value']
  >({
    isMarginAccount,
    maxAmount: 0,
  });

  const form = useOrderForm(
    { accountId: currentAccount?.AccountId || 0, ...initialValues },
    validationContext,
  );

  const { modalVisible, showModal, hideModal } = useModalControl();

  const [sendOrder, { isLoading, error, reset }] = useSendOrder();

  // Reset mutation state only when specific fields change (no infinite loop)
  const prevValuesRef = useRef<Partial<OrderFormValues>>({});

  useEffect(() => {
    const fieldsToWatch: (keyof OrderFormValues)[] = [
      'type',
      'quantity',
      'instrumentId',
      'stopPrice',
      'limit',
      'tif',
    ];

    const subscription = form.watch((values, { name }) => {
      if (name && fieldsToWatch.includes(name as keyof OrderFormValues)) {
        const key = name as keyof OrderFormValues;
        const prev = prevValuesRef.current[key];
        const current = values[key];

        if (prev !== current) {
          prevValuesRef.current[key] = current as any;
          reset();
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form, reset]);

  const BUTTON_POSITION = windowHeight * 0.8;

  const onSubmit = useCallback(
    async (values: OrderFormValues) => {
      try {
        await sendOrder(values);
        Toast.show({
          type: CustomToast.text,
          text1: translate('transaction.orderSuccess'),
        });
        onClose();
      } catch {
        hideModal();
      }
    },
    [sendOrder, onClose, hideModal],
  );

  const styles = StyleSheet.create({
    modal: { justifyContent: 'flex-start', marginTop: 100 },
    scrollViewContainer: { paddingBottom: BUTTON_CONTAINER_HEIGHT },
    buttonContainer: { top: BUTTON_POSITION },
  });

  return (
    <OrderFormValidationContext.Provider
      value={useMemo(
        () => ({ value: validationContext, set: setValidationContext }),
        [validationContext, setValidationContext],
      )}>
      <FormProvider {...form}>
        <Box
          position="relative"
          height="100%"
          style={styles.scrollViewContainer}>
          <ScrollView
            // ? Fix for manual ref focus in Input to work properly on Android
            // https://stackoverflow.com/a/71417109
            keyboardShouldPersistTaps="always">
            <OrderFormHeader onClose={onClose}>
              <InstrumentFieldWidget />
            </OrderFormHeader>
            <OrderTypeField />
            {error && (
              <SubmissionError
                error={
                  isApexError(error)
                    ? error.message
                    : translate('common.unknownError')
                }
                onDismiss={reset}
              />
            )}
            <OrderFormBodyWidget />
            <DashedBox topDash padding="m">
              {isMarginEnabled &&
              marginAccount?.AccountId === form.getValues().accountId ? (
                <MarginOrderSummaryWidget />
              ) : (
                <OrderSummaryWidget />
              )}
            </DashedBox>
          </ScrollView>
          <Box
            style={styles.buttonContainer}
            shadowOffset={{ width: 0, height: -4 }}
            shadowRadius={14}
            shadowColor="black"
            shadowOpacity={0.1}
            elevation={7}
            backgroundColor="background1"
            position="absolute"
            left={0}
            right={0}
            padding="m"
            borderTopWidth={1}
            borderTopColor="border3">
            <OrderFormButton onPress={showModal} />
          </Box>
        </Box>

        <ModalBlurBg
          isVisible={modalVisible}
          onBackdropPress={hideModal}
          style={styles.modal}>
          {!!modalVisible && (
            <OrderConfirm
              values={form.getValues()}
              onClose={hideModal}
              submitting={isLoading}
              onSubmit={form.handleSubmit(onSubmit)}
            />
          )}
        </ModalBlurBg>
      </FormProvider>
    </OrderFormValidationContext.Provider>
  );
};
