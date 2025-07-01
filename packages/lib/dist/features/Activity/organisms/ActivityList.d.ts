import React from 'react';
import { ActivityListProps } from '../types';
export declare const ActivityList: <T>({
  listVariant,
  itemVariant,
  data,
  loading,
  refetching,
  hasMore,
  listContentStyle,
  ActivityItemView,
  onPress,
  loadMore,
  refetch,
  keyExtractor,
}: ActivityListProps<T>) => React.JSX.Element;
