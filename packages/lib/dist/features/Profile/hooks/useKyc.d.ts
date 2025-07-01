export declare const useKyc: () => readonly [
  (nextValidationStage: number) => Promise<
    | {
        success: boolean;
        status:
          | 'Failed'
          | 'Pending'
          | 'Ready'
          | 'Initial'
          | 'Incomplete'
          | 'TemporarilyDeclined'
          | 'FinallyRejected'
          | 'Approved'
          | 'ActionCompleted';
        errorType?:
          | (
              | 'Unknown'
              | 'InvalidParameters'
              | 'Unauthorized'
              | 'InitialLoadingFailed'
              | 'ApplicantNotFound'
              | 'ApplicantMisconfigured'
              | 'InititlizationError'
              | 'NetworkError'
              | 'UnexpectedError'
            )
          | undefined;
        errorMsg?: string | undefined;
        actionResult: {
          actionId: string;
          answer: string;
        };
      }
    | undefined
  >,
  {
    readonly isLoading: boolean;
    readonly error: string | undefined;
  },
];
