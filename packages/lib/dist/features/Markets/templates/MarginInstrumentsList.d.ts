import React from 'react';
type Props = {
  /** Flag indicating whether the search bar should be displayed */
  withSearch?: boolean;
  /** Flag indicating whether the filters by product should be displayed */
  withFilters?: boolean;
  /** Handler for item press */
  onItemPress: (instrumentId: number) => void;
};
export declare const MarginInstrumentsList: ({
  withSearch,
  withFilters,
  onItemPress,
}: Props) => React.JSX.Element;
export {};
