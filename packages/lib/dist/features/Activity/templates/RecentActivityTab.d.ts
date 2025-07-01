import React from 'react';
import { ActivityProductHook, ActivityTabProps } from '../types';
export declare const RecentActivityTab: ({
  depth,
  productId,
  onActivityPress,
  ...listProps
}: ActivityTabProps & ActivityProductHook) => React.JSX.Element;
