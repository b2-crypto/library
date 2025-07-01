import { useState, useMemo, useCallback } from 'react';

import { useUserCurrentAccount } from '../../../hooks';

type DataItem = {
  Product1: number;
  Product2: number;
  Product1Name: string;
  Product2Name: string;
  Product1Symbol: string;
  Product2Symbol: string;
  MarginEnabled?: boolean;
};
export type FilterItem = number | 'margin';

export const useFilteredInstruments = <T extends DataItem>(data: Array<T>) => {
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<Array<FilterItem>>([]);
  const { isMarginAccount } = useUserCurrentAccount();

  const listData = useMemo(
    () =>
      data.filter(el => {
        const productFilters = filters.filter(f => typeof f === 'number');

        // Check if product filters match
        const matchesProductFilter =
          !productFilters.length ||
          productFilters.includes(el.Product1) ||
          productFilters.includes(el.Product2);

        // Check if margin account requirements are met
        const matchesMarginRequirement = !isMarginAccount || el.MarginEnabled;

        // Check if search text matches
        const matchesSearchText =
          !searchText ||
          Object.values(el)
            .filter(v => typeof v === 'string')
            .join(',')
            .toLowerCase()
            .includes(searchText.toLowerCase());

        return (
          matchesProductFilter && matchesMarginRequirement && matchesSearchText
        );
      }),
    [data, searchText, filters, isMarginAccount],
  );

  const toggleFilter = useCallback(
    (value: FilterItem) => {
      setFilters(curFilters =>
        curFilters.includes(value)
          ? curFilters.filter(v => v !== value)
          : curFilters.concat(value),
      );
    },
    [setFilters],
  );

  return {
    searchText,
    onSearch: setSearchText,
    filters: filters,
    onFilter: toggleFilter,
    data: listData,
  };
};

export type UseFilteredInstrumentsReturn = ReturnType<
  typeof useFilteredInstruments
>;
