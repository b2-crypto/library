import React from 'react';
import { ActivityInstrumentHook, ActivityTabProps } from '../types';
export declare const OpenOrdersTab: ({
  depth,
  instrumentId,
  onActivityPress,
  ...listProps
}: ActivityTabProps & ActivityInstrumentHook) => React.JSX.Element;
