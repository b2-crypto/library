/// <reference types="react" />
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
export declare const useFilteredInstruments: <T extends DataItem>(
  data: T[],
) => {
  searchText: string;
  onSearch: import('react').Dispatch<import('react').SetStateAction<string>>;
  filters: FilterItem[];
  onFilter: (value: FilterItem) => void;
  data: T[];
};
export type UseFilteredInstrumentsReturn = ReturnType<
  typeof useFilteredInstruments
>;
export {};
