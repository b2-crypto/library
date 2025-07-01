import React, { useCallback } from 'react';
import { MarginPositionCard, MarginPositionModal } from '../organisms';
import { useModalControl } from '../../../hooks';
import { useMarginPositionActions } from '../hooks/useMarginPositionActions';

import { MarginPositionItem } from '../types';
import { isApexError } from '../../../types/apiResponses';
import { RepaymentAssetOption } from '../../../services';

type Props = {
  item: MarginPositionItem;
  onSuccess?: () => void;
};

export const MarginPositionDetails = ({ item, onSuccess }: Props) => {
  const { modalVisible, hideModal, showModal } = useModalControl();
  const [modalType, setModalType] = React.useState<
    'cancel' | 'close' | 'repay' | null
  >(null);

  const [selectedRepaymentItems, setSelectedRepaymentItems] = React.useState<
    RepaymentAssetOption[]
  >([]);

  const { onClose, onCancel, onRepay, isLoading, error, isProcessed } =
    useMarginPositionActions(item, () => {
      hideModal();
      onSuccess?.();
    });

  const handleAction = (type: 'cancel' | 'close' | 'repay') => {
    setModalType(type);
    showModal();
  };

  const getActionHandler = useCallback(() => {
    switch (modalType) {
      case 'cancel':
        return () => onCancel();
      case 'close':
        return () => onClose(selectedRepaymentItems);
      case 'repay':
        return () => onRepay();
      default:
        return () => {};
    }
  }, [selectedRepaymentItems, modalType]);

  return (
    <>
      <MarginPositionCard
        item={item}
        onCancel={() => handleAction('cancel')}
        onClose={() => handleAction('close')}
        // onRepay={() => handleAction('repay')}
        cancelLoading={isLoading}
        error={error && isApexError(error) ? error.message : undefined}
        isProcessed={isProcessed}
      />
      {item.Status === 'Open' && (
        <MarginPositionModal
          isVisible={modalVisible}
          type={modalType}
          onClose={() => {
            hideModal();
            setModalType(null);
          }}
          onConfirm={getActionHandler()}
          onRepaymentItemsChange={setSelectedRepaymentItems}
          loading={isLoading}
          item={item}
        />
      )}
    </>
  );
};
