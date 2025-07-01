import { CancelContent, CloseContent, RepayContent } from '../molecules';
export const PositionModalContent = ({ type, item, onSelectedItemsReady, }) => {
    switch (type) {
        case 'repay':
            return <RepayContent />;
        case 'cancel':
            return <CancelContent item={item}/>;
        case 'close':
            return <CloseContent item={item} onSelectedItemsReady={onSelectedItemsReady}/>;
        default:
            return null;
    }
};
