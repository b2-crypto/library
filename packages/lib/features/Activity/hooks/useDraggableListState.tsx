import { useCallback, useState } from 'react';
import { RepaymentAssetOption } from '../../../services';

export const useDraggableListState = (initialItems: RepaymentAssetOption[]) => {
  const [items, setItems] = useState<RepaymentAssetOption[]>(initialItems);
  const [selectedIds, setSelectedIds] = useState<number[]>(
    initialItems.map(item => item.ProductId),
  );

  const toggleSelection = useCallback((id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
    );
  }, []);

  const selectedItems = items.filter(item =>
    selectedIds.includes(item.ProductId),
  );

  const setInitialOrder = useCallback((newItems: RepaymentAssetOption[]) => {
    setItems(newItems);
    setSelectedIds(newItems.map(item => item.ProductId));
  }, []);

  const updateOrder = useCallback((newOrder: RepaymentAssetOption[]) => {
    setItems(newOrder);
  }, []);

  return {
    items,
    selectedIds,
    selectedItems,
    toggleSelection,
    setInitialOrder,
    updateOrder,
  };
};
