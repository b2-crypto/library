import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFilteredInstruments, useInstrumentsList } from '../hooks';
import { MarketsList } from '../organisms';
import { useGetProductsQuery } from '../../../services/apexApi';
import { AssetListItem } from '../molecules';
export const AssetInstrumentsList = ({ withSearch = true, withFilters = true, onItemPress, }) => {
    const { data: instruments, isLoading } = useInstrumentsList();
    const listProps = useFilteredInstruments(instruments);
    const { data: products } = useGetProductsQuery();
    const filterOptions = useMemo(() => products?.map(item => ({
        value: item.ProductId,
        label: item.Product,
    })) || [], [products]);
    if (isLoading && !instruments.length) {
        return <ActivityIndicator size="large"/>;
    }
    return (<MarketsList onPress={onItemPress} {...listProps} filterOptions={filterOptions} withSearch={withSearch} withFilters={withFilters} ItemComponent={AssetListItem}/>);
};
