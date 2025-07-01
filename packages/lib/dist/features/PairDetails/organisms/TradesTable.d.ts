import React from 'react';
import { ApexTrade } from '../../../helpers/apiTransformers';
type TradesTableProps = {
  data?: ApexTrade[];
  maxVisible?: number;
};
export declare const TradesTable: ({
  data,
  maxVisible,
}: TradesTableProps) => React.JSX.Element;
export {};
