import React, { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';

import { useFilteredInstruments, useMarginInstrumentsList } from '../hooks';
import { MarketsList } from '../organisms';
import { useGetProductsQuery } from '../../../services/apexApi';
import { MarginListItem } from '../molecules';

type Props = {
  /** Flag indicating whether the search bar should be displayed */
  withSearch?: boolean;
  /** Flag indicating whether the filters by product should be displayed */
  withFilters?: boolean;
  /** Handler for item press */
  onItemPress: (instrumentId: number) => void;
};

type FilterOption = { value: 'margin' | number; label: string };

export const MarginInstrumentsList = ({
  withSearch = true,
  withFilters = true,
  onItemPress,
}: Props) => {
  const { data: instruments, isLoading } = useMarginInstrumentsList();
  const listProps = useFilteredInstruments(instruments);

  const { data: products } = useGetProductsQuery();
  const filterOptions = useMemo(
    () =>
      products?.map(item => ({
        value: item.ProductId,
        label: item.Product,
      })) || ([] as FilterOption[]),
    [products],
  );

  if (isLoading && !instruments.length) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <MarketsList
      onPress={onItemPress}
      {...listProps}
      filterOptions={filterOptions}
      withSearch={withSearch}
      withFilters={withFilters}
      ItemComponent={MarginListItem}
    />
  );
};
