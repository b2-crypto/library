import { RepaymentAssetOption } from '../../../services';
export declare const useDraggableListState: (
  initialItems: RepaymentAssetOption[],
) => {
  items: RepaymentAssetOption[];
  selectedIds: number[];
  selectedItems: RepaymentAssetOption[];
  toggleSelection: (id: number) => void;
  setInitialOrder: (newItems: RepaymentAssetOption[]) => void;
  updateOrder: (newOrder: RepaymentAssetOption[]) => void;
};
