import { FlashList } from '@shopify/flash-list';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Box, TouchableOpacity } from '../../../components/atoms';
import { SearchHeader, Tabs } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
export const MarketsList = ({ searchText = '', onSearch, withSearch = true, filters, onFilter, filterOptions, withFilters = true, data, onPress, ItemComponent, }) => {
    const renderItem = useCallback(({ item }) => (<TouchableOpacity onPress={() => onPress(item.InstrumentId)} accessible accessibilityLabel="Markets List Item" {...testID(`listItem${item.VenueSymbol}`)}>
        <ItemComponent item={item}/>
      </TouchableOpacity>), [ItemComponent, onPress]);
    return (<>
      {withSearch && (<SearchHeader value={searchText} onChangeText={onSearch}/>)}
      {withFilters && (<Box borderColor="border3" borderBottomWidth={1}>
          <Tabs type="pills_wide" data={filterOptions} value={filters} onChange={onFilter} wrapperProps={{
                accessibilityLabel: 'Market filters',
                ...testID('market filters'),
            }} containerStyles={styles.filterPills}/>
        </Box>)}
      <FlashList data={data} keyExtractor={item => item.InstrumentId.toString()} contentContainerStyle={styles.content} renderItem={renderItem} estimatedItemSize={85}/>
    </>);
};
const styles = StyleSheet.create({
    content: { paddingTop: 8, paddingBottom: 50 },
    filterPills: { paddingHorizontal: 12 },
});
