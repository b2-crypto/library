import { SendFormValues } from '../types';
export declare function useSendSubmit(): readonly [
  (values: SendFormValues) => Promise<
    | {
        result: true;
      }
    | {
        result: boolean;
        transferId?: number | undefined;
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
