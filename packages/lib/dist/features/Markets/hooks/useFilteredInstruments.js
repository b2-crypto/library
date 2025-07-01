import { useState, useMemo, useCallback } from 'react';
import { useUserCurrentAccount } from '../../../hooks';
export const useFilteredInstruments = (data) => {
    const [searchText, setSearchText] = useState('');
    const [filters, setFilters] = useState([]);
    const { isMarginAccount } = useUserCurrentAccount();
    const listData = useMemo(() => data.filter(el => {
        const productFilters = filters.filter(f => typeof f === 'number');
        // Check if product filters match
        const matchesProductFilter = !productFilters.length ||
            productFilters.includes(el.Product1) ||
            productFilters.includes(el.Product2);
        // Check if margin account requirements are met
        const matchesMarginRequirement = !isMarginAccount || el.MarginEnabled;
        // Check if search text matches
        const matchesSearchText = !searchText ||
            Object.values(el)
                .filter(v => typeof v === 'string')
                .join(',')
                .toLowerCase()
                .includes(searchText.toLowerCase());
        return (matchesProductFilter && matchesMarginRequirement && matchesSearchText);
    }), [data, searchText, filters, isMarginAccount]);
    const toggleFilter = useCallback((value) => {
        setFilters(curFilters => curFilters.includes(value)
            ? curFilters.filter(v => v !== value)
            : curFilters.concat(value));
    }, [setFilters]);
    return {
        searchText,
        onSearch: setSearchText,
        filters: filters,
        onFilter: toggleFilter,
        data: listData,
    };
};
