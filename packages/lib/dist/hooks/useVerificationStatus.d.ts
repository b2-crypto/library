export declare const useVerificationStatus: () => {
  readonly accountInfo: import('../types').GetAccountInfoResponse | undefined;
  readonly userConfig:
    | Partial<import('../types').GetUserConfigResponse>
    | undefined;
  readonly nextLevel:
    | {
        level: number;
        benefitsVisible: boolean;
        requirementsVisible: boolean;
        verificationMethod: string;
      }
    | undefined;
  readonly verificationLevel: number;
  readonly levelIncreaseStatus: 'pass' | 'fail' | undefined;
  readonly isTransactionsAllowed: boolean;
};
