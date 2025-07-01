import React from 'react';
import { IInstrumentWithLevel1 } from '../../../types/apiResponses';
interface TableProps {
  instrument?: IInstrumentWithLevel1;
}
export declare const PairStatsTable: ({
  instrument,
}: TableProps) => React.JSX.Element | null;
export {};
