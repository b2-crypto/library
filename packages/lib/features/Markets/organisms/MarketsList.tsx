import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import { IInstrumentWithLevel1 } from '../../../types/apiResponses';

import { Box, TouchableOpacity } from '../../../components/atoms';
import { SearchHeader, Tabs } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
import { UseFilteredInstrumentsReturn } from '../hooks';

type MarketListProps<T extends IInstrumentWithLevel1> = {
  /** Search text */
  searchText: string;
  /** Callback on changes in serach field */
  onSearch: UseFilteredInstrumentsReturn['onSearch'];
  /** Flag to show/hide the search field */
  withSearch?: boolean;
  /** Array of applied filters */
  filters: UseFilteredInstrumentsReturn['filters'];
  /** Handler to toggle the pill in filters */
  onFilter: UseFilteredInstrumentsReturn['onFilter'];
  /** Flag to show/hide filters */
  withFilters?: boolean;
  /** Options (pills) for filters */
  filterOptions: React.ComponentProps<
    typeof Tabs<UseFilteredInstrumentsReturn['filters'][number]>
  >['data'];
  /** List data */
  data: T[];
  /** Handler for pressing the list item */
  onPress: (id: T['InstrumentId']) => void;
  /** Component to render the list item */
  ItemComponent: React.ComponentType<{ item: T }>;
};

export const MarketsList = <T extends IInstrumentWithLevel1>({
  searchText = '',
  onSearch,
  withSearch = true,
  filters,
  onFilter,
  filterOptions,
  withFilters = true,
  data,
  onPress,
  ItemComponent,
}: MarketListProps<T>) => {
  const renderItem: ListRenderItem<T> = useCallback(
    ({ item }) => (
      <TouchableOpacity
        onPress={() => onPress(item.InstrumentId)}
        accessible
        accessibilityLabel="Markets List Item"
        {...testID(`listItem${item.VenueSymbol}`)}>
        <ItemComponent item={item} />
      </TouchableOpacity>
    ),
    [ItemComponent, onPress],
  );

  return (
    <>
      {withSearch && (
        <SearchHeader value={searchText} onChangeText={onSearch} />
      )}
      {withFilters && (
        <Box borderColor="border3" borderBottomWidth={1}>
          <Tabs
            type="pills_wide"
            data={filterOptions}
            value={filters}
            onChange={onFilter}
            wrapperProps={{
              accessibilityLabel: 'Market filters',
              ...testID('market filters'),
            }}
            containerStyles={styles.filterPills}
          />
        </Box>
      )}
      <FlashList
        data={data}
        keyExtractor={item => item.InstrumentId.toString()}
        contentContainerStyle={styles.content}
        renderItem={renderItem}
        estimatedItemSize={85}
      />
    </>
  );
};

const styles = StyleSheet.create({
  content: { paddingTop: 8, paddingBottom: 50 },
  filterPills: { paddingHorizontal: 12 },
});
