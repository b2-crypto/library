/// <reference types="@testing-library/react-native" />
declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '@sumsub/react-native-mobilesdk-module' {
  type SumSubSdkHandler =
    | 'onStatusChanged'
    | 'onEvent'
    | 'onLog'
    | 'onActionResult';

  type VerificationStatus =
    | 'Ready' // SDK is initialized and ready to be presented
    | 'Failed' //	SDK fails for some reasons (see errorType and errorMsg for details)
    | 'Initial' // No verification steps are passed yet
    | 'Incomplete' // Some but not all of the verification steps have been passed over
    | 'Pending' // Verification is pending
    | 'TemporarilyDeclined' // Applicant has been declined temporarily
    | 'FinallyRejected' // Applicant has been finally rejected
    | 'Approved' // Applicant has been approved
    | 'ActionCompleted'; // Applicant action has been completed

  type VerificationError =
    | 'Unknown' // Unknown or no fail
    | 'InvalidParameters' // An attempt to setup with invalid parameters
    | 'Unauthorized' // Unauthorized access detected (most likely accessToken is invalid or expired and had failed to be refreshed)
    | 'InitialLoadingFailed' // Initial loading from backend is failed
    | 'ApplicantNotFound' // No applicant is found for the given parameters
    | 'ApplicantMisconfigured' // 	Applicant is found, but is misconfigured (most likely lacks of idDocs)
    | 'InititlizationError' // 	An initialization error occured
    | 'NetworkError' // A network error occured (the user will be presented with Network Oops screen)
    | 'UnexpectedError'; // Some unexpected error occured (the user will be presented with Fatal Oops screen)

  type SumSubResponse = {
    success: boolean; // The boolean value indicates if there was an error on the moment the sdk is closed. Use errorType and errorMsg to see the reasons of the error if any
    status: VerificationStatus; // SDK status
    errorType?: VerificationError; // A formal reason of the error if any
    errorMsg?: string; // A verbose error description if any
    actionResult: {
      // Describes the result of the last applicant action's invocation if any
      actionId: string; // Applicant action identifier to check the results against the server
      answer: 'GREEN' | 'RED' | 'ERROR' | string; // Overall result. Typical values are GREEN, RED or ERROR
    };
  };

  interface SNSMobileSDK {
    (config: { [key: string]: unknown }): SNSMobileSDK;
    dismiss: () => void;
    getNewAccessToken: () => Promise<void>;
    launch: () => Promise<SumSubResponse>;
  }

  interface Builder {
    withAccessToken: () => Builder;
    withDebug: (debug: boolean) => Builder;
    withHandlers: (
      handlers: Partial<{
        [handlerName: SumSubSdkHandler]: (event: unknown) => void;
      }>,
    ) => Builder;
    withLocale: (locale: string) => Builder;
    build: () => SNSMobileSDK;
  }

  type ReactNativeSDK = {
    init: (
      accessToken: string,
      expirationHandler: () => Promise<string>,
    ) => Builder;
    reset: () => void;
  };

  const RNSDK: ReactNativeSDK;

  export default RNSDK;
}
