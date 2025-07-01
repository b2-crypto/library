import React from 'react';
export type InstrumentFieldProps = {
  isLoading?: boolean;
  instruments: Array<{
    InstrumentId: number;
    Product1: number;
    Product1Symbol: string;
    Product2: number;
    Product2Symbol: string;
    VenueSymbol: string;
  }>;
};
export declare const InstrumentField: ({
  isLoading,
  instruments,
}: InstrumentFieldProps) => React.JSX.Element;
