import { useEffect, useMemo } from 'react';
import {
  GetRepaymentAssetOptionsResponse,
  RepaymentAssetOption,
  useGetRepaymentAssetOptionsQuery,
} from '../../../services/marginApi';
import { IInstrument } from '../../../types';
import { useInstrumentsList } from '../../Markets';
import { useDraggableListState } from './useDraggableListState';

type AssetGroup = 'borrowed' | 'oneHop' | 'twoHop' | 'other';

function buildConversionGraph(
  instruments: IInstrument[] = [],
): Map<number, Set<number>> {
  const graph = new Map<number, Set<number>>();

  instruments.forEach(({ Product1, Product2 }) => {
    if (!graph.has(Product1)) graph.set(Product1, new Set());
    if (!graph.has(Product2)) graph.set(Product2, new Set());

    graph.get(Product1)!.add(Product2);
    graph.get(Product2)!.add(Product1);
  });

  return graph;
}

function findConversionPaths(
  graph: Map<number, Set<number>>,
  targetProductId: number,
): { oneHop: number[]; twoHop: number[] } {
  const oneHop = new Set<number>();
  const twoHop = new Set<number>();

  for (const neighbor of graph.get(targetProductId) || []) {
    oneHop.add(neighbor);

    for (const secondHop of graph.get(neighbor) || []) {
      if (secondHop !== targetProductId && !oneHop.has(secondHop)) {
        twoHop.add(secondHop);
      }
    }
  }

  return { oneHop: [...oneHop], twoHop: [...twoHop] };
}

function sortRepaymentAssets(
  assets: GetRepaymentAssetOptionsResponse | undefined,
  borrowedProductId: number,
  canConvertInOneHop: (fromId: number) => boolean,
  canConvertInTwoHops: (fromId: number) => boolean,
): RepaymentAssetOption[] {
  if (!assets) {
    return [];
  }

  const grouped: Record<AssetGroup, RepaymentAssetOption[]> = {
    borrowed: [],
    oneHop: [],
    twoHop: [],
    other: [],
  };

  for (const asset of assets) {
    if (asset.Amount <= 0) continue;

    if (asset.ProductId === borrowedProductId) {
      grouped.borrowed.push(asset);
    } else if (canConvertInOneHop(asset.ProductId)) {
      grouped.oneHop.push(asset);
    } else if (canConvertInTwoHops(asset.ProductId)) {
      grouped.twoHop.push(asset);
    } else {
      grouped.other.push(asset);
    }
  }

  const sortByNotionalDesc = (
    a: RepaymentAssetOption,
    b: RepaymentAssetOption,
  ) => b.NotionalValue - a.NotionalValue;

  return [
    ...grouped.borrowed,
    ...grouped.oneHop.sort(sortByNotionalDesc),
    ...grouped.twoHop.sort(sortByNotionalDesc),
    ...grouped.other.sort(sortByNotionalDesc),
  ];
}

export const useRepaymentOptions = (
  AccountId: number,
  PositionId: number,
  borrowedProductId: number,
) => {
  const { data, isLoading, error } = useGetRepaymentAssetOptionsQuery(
    { AccountId, PositionId },
    { skip: !AccountId || !PositionId },
  );

  const { data: instruments } = useInstrumentsList();
  const graph = useMemo(() => buildConversionGraph(instruments), [instruments]);
  const { oneHop, twoHop } = useMemo(
    () => findConversionPaths(graph, borrowedProductId),
    [graph, borrowedProductId],
  );

  const initialSorted = useMemo(
    () =>
      sortRepaymentAssets(
        data,
        borrowedProductId,
        fromId => oneHop.includes(fromId),
        fromId => twoHop.includes(fromId),
      ),
    [data, borrowedProductId, oneHop, twoHop],
  );

  const {
    items: sortedOptions,
    selectedIds,
    selectedItems,
    toggleSelection,
    setInitialOrder,
    updateOrder,
  } = useDraggableListState(initialSorted);

  useEffect(() => {
    if (initialSorted.length) {
      setInitialOrder(initialSorted);
    }
  }, [initialSorted, setInitialOrder]);

  return {
    options: sortedOptions,
    selectedIds,
    selectedItems,
    toggleSelection,
    updateOrder,
    isLoading,
    error,
  };
};
