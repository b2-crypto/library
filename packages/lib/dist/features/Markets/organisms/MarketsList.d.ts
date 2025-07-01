import React from 'react';
import { IInstrumentWithLevel1 } from '../../../types/apiResponses';
import { Tabs } from '../../../components/molecules';
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
  ItemComponent: React.ComponentType<{
    item: T;
  }>;
};
export declare const MarketsList: <T extends IInstrumentWithLevel1>({
  searchText,
  onSearch,
  withSearch,
  filters,
  onFilter,
  filterOptions,
  withFilters,
  data,
  onPress,
  ItemComponent,
}: MarketListProps<T>) => React.JSX.Element;
export {};
