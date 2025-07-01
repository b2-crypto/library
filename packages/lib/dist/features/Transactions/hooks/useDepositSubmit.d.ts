import { DepositFormValues } from '../types';
export declare function useDepositSubmit(typeTransaction?: string): readonly [
  ({
    values,
    assetId,
  }: {
    values: DepositFormValues;
    assetId: number;
  }) => Promise<
    | {
        result: true;
      }
    | undefined
  >,
  {
    readonly isLoading: boolean;
    readonly error:
      | import('@reduxjs/toolkit/query').FetchBaseQueryError
      | import('@reduxjs/toolkit').SerializedError
      | undefined;
    readonly reset: (...args: any[]) => void;
  },
];
