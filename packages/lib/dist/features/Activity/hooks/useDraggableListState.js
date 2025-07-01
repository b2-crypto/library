import { useCallback, useState } from 'react';
export const useDraggableListState = (initialItems) => {
    const [items, setItems] = useState(initialItems);
    const [selectedIds, setSelectedIds] = useState(initialItems.map(item => item.ProductId));
    const toggleSelection = useCallback((id) => {
        setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    }, []);
    const selectedItems = items.filter(item => selectedIds.includes(item.ProductId));
    const setInitialOrder = useCallback((newItems) => {
        setItems(newItems);
        setSelectedIds(newItems.map(item => item.ProductId));
    }, []);
    const updateOrder = useCallback((newOrder) => {
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
