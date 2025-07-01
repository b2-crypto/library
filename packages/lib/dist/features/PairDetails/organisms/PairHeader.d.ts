import React from 'react';
import { InstrumentLevel1 } from '../../../hooks';
interface PairHeaderProps {
  handleSelectedPair: (instrumentId: number) => void;
  instrumentId?: number;
  instrumentsData: InstrumentLevel1[];
  isLoading?: boolean;
}
export declare const PairHeader: ({
  handleSelectedPair,
  instrumentId,
  instrumentsData,
  isLoading,
}: PairHeaderProps) => React.JSX.Element;
export {};
