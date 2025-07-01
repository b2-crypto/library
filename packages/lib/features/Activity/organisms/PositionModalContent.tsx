import { RepaymentAssetOption } from '../../../services';
import { CancelContent, CloseContent, RepayContent } from '../molecules';
import { MarginPositionItem } from '../types';

type Props = {
  type: 'close' | 'cancel' | 'repay';
  item: MarginPositionItem;
};

export const PositionModalContent = ({
  type,
  item,
  onSelectedItemsReady,
}: Props & {
    onSelectedItemsReady?: (items: RepaymentAssetOption[]) => void;
}) => {
  switch (type) {
    case 'repay':
      return <RepayContent />;
    case 'cancel':
      return <CancelContent item={item} />;
    case 'close':
      return <CloseContent item={item} onSelectedItemsReady={onSelectedItemsReady!} />;
    default:
      return null;
  }
};
