import React, { useCallback } from 'react';
import { MarginPositionCard, MarginPositionModal } from '../organisms';
import { useModalControl } from '../../../hooks';
import { useMarginPositionActions } from '../hooks/useMarginPositionActions';
import { isApexError } from '../../../types/apiResponses';
export const MarginPositionDetails = ({ item, onSuccess }) => {
    const { modalVisible, hideModal, showModal } = useModalControl();
    const [modalType, setModalType] = React.useState(null);
    const [selectedRepaymentItems, setSelectedRepaymentItems] = React.useState([]);
    const { onClose, onCancel, onRepay, isLoading, error, isProcessed } = useMarginPositionActions(item, () => {
        hideModal();
        onSuccess?.();
    });
    const handleAction = (type) => {
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
                return () => { };
        }
    }, [selectedRepaymentItems, modalType]);
    return (<>
      <MarginPositionCard item={item} onCancel={() => handleAction('cancel')} onClose={() => handleAction('close')} 
    // onRepay={() => handleAction('repay')}
    cancelLoading={isLoading} error={error && isApexError(error) ? error.message : undefined} isProcessed={isProcessed}/>
      {item.Status === 'Open' && (<MarginPositionModal isVisible={modalVisible} type={modalType} onClose={() => {
                hideModal();
                setModalType(null);
            }} onConfirm={getActionHandler()} onRepaymentItemsChange={setSelectedRepaymentItems} loading={isLoading} item={item}/>)}
    </>);
};
