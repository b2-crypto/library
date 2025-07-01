import React from 'react';
import { SectionListProps } from 'react-native';
type WalletsListProps<T> = Omit<
  SectionListProps<
    T,
    {
      title: string;
      headingExtra?: React.ReactNode;
    }
  >,
  'renderSectionHeader' | 'contentContainerStyle'
> & {
  headerComponent?: React.ReactNode;
};
export declare const WalletsSectionList: <T>(
  props: WalletsListProps<T>,
) => React.JSX.Element;
export {};
