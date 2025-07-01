export declare const useDepositTickets: (props: {
  depth?: number;
  productId?: number;
}) => {
  depositTickets: {
    decimalPlaces: number | undefined;
    currency: string | undefined;
    iconSymbol: string | undefined;
    symbol: string | undefined;
    fullName: string | undefined;
    notionalSymbol: string | undefined;
    notionalRate: number | undefined;
    notionalPlaces: number | undefined;
    type: 'withdraw' | 'deposit';
    status:
      | 'Rejected'
      | 'Accepted'
      | 'New'
      | 'AdminProcessing'
      | 'SystemProcessing'
      | 'FullyProcessed'
      | 'Failed'
      | 'Pending'
      | 'Confirmed'
      | 'AmlProcessing'
      | 'AmlAccepted'
      | 'AmlRejected'
      | 'AmlFailed'
      | 'LimitsAccepted'
      | 'LimitsRejected'
      | 'AmlRegistered'
      | 'Pending2Fa'
      | 'AutoAccepted'
      | 'Delayed'
      | 'UserCancelled'
      | 'AdminCancelled'
      | 'AmlAddressVerificationProcessing'
      | 'Submitted'
      | 'ManuallyConfirmed'
      | 'Confirmed2Fa'
      | 'AvsPending'
      | 'AmlAcceptedOverride'
      | 'PendingSubmission'
      | 'ReSubmitted'
      | 'ManualReview';
    fullname?: string | undefined;
    comments?: string | undefined;
    id: number;
    amount: number;
    timestamp: number;
    instrumentId?: number | undefined;
    productId?: number | undefined;
  }[];
  isLoading: boolean;
  isRefetching: boolean;
  isUninitialized: boolean;
  hasMore: boolean;
  loadMore: () => Promise<void>;
  refetch: () => import('@reduxjs/toolkit/query').QueryActionCreatorResult<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
        depth?: number | undefined;
        offset?: number | undefined;
        productId?: number | undefined;
        resetCache?: boolean | undefined;
        refTypes?: string[] | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../../../helpers/activity').ActivityResponse<
        import('../../../types').WalletActivity
      >,
      'apexApi'
    >
  >;
};
