import { useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';
import { translate } from '../../../helpers/i18n';
import { CustomToast } from '../../../helpers/toastConfig';
import {
  RepaymentAssetOption,
  useCancelMarginPositionMutation,
  useCloseMarginPositionMutation,
} from '../../../services/marginApi';
import { isApexError } from '../../../types/apiResponses';
import { getLogger } from '../../../services';
import { MarginPositionItem } from '../types';

type ActionType = 'close' | 'cancel' | 'repay';

export const useMarginPositionActions = (
  item: MarginPositionItem,
  onSuccess?: () => void,
) => {
  const [closePosition, { isLoading, error }] =
    useCloseMarginPositionMutation();
  const [cancelPosition, { isLoading: isLoadingCancel, error: errorCancel }] =
    useCancelMarginPositionMutation();
  const [isProcessed, setIsProcessed] = useState(false);

  const handleAction = useCallback(
    async (type: ActionType) => {
      try {
        await cancelPosition(item);
        Toast.show({
          type: CustomToast.text,
          text1: translate(`activity.${type}MarginPositionModal.success`, item),
        });

        setIsProcessed(true);
        onSuccess?.();
      } catch (e) {
        Toast.show({
          type: CustomToast.error,
          text1: translate(`activity.${type}MarginPositionModal.failure`, {
            ...item,
            error: isApexError(e) ? e.message : '',
          }),
        });
        getLogger()('error', e);
      }
    },
    [cancelPosition, item, onSuccess],
  );
  const onClose = useCallback(
    async (selectedItems?: RepaymentAssetOption[]) => {
      try {
        const repaymentAssetIds =
          selectedItems?.map(asset => asset.ProductId) || [];
        await closePosition({
          AccountId: item.AccountId,
          PositionId: item.PositionId,
          PositionInstrumentId: item.PositionInstrumentId,
          RepaymentAssets: repaymentAssetIds,
        }).unwrap();

        Toast.show({
          type: CustomToast.text,
          text1: translate('activity.closeMarginPositionModal.success'),
        });

        setIsProcessed(true);
        onSuccess?.();
      } catch (e) {
        const { data } = e as { data: { errorMsg: string; status: string } };

        if (data && data?.status === 'Accepted') {
          Toast.show({
            type: CustomToast.text,
            text1: translate('activity.closeMarginPositionModal.success', {
              PositionType: item.PositionType,
              InstrumentSymbol: item.InstrumentSymbol,
            }),
          });
          onSuccess?.();
          return;
        }
        onSuccess?.();
        Toast.show({
          type: CustomToast.error,
          text1: translate('activity.closeMarginPositionModal.failure', {
            PositionType: 'Close',
            InstrumentSymbol: item.InstrumentSymbol,
            error: isApexError(e) ? e.message : '',
          }),
        });
        getLogger()('error', e);
      }
    },
    [closePosition, item, onSuccess],
  );
  return {
    onClose: onClose,
    onCancel: () => handleAction('cancel'),
    onRepay: () => handleAction('repay'),
    isLoading,
    error,
    isProcessed,
    isLoadingCancel,
    errorCancel,
  };
};
