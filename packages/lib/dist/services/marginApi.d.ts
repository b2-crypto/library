import { ActivityResponse } from '../helpers/activity';
import {
  AccountPositionSummaryResponse,
  ApexResponse,
  GetAccountInfoResponse,
  InstrumentsMarginConfigResponse,
  MarginAccountInfoResponse,
  MarginBalanceResponse,
  ProductsMarginConfigResponse,
} from '../types/apiResponses';
export type MarginPosition = {
  PositionId: number;
  OmsId: number;
  AccountId: number;
  PositionInstrumentId: number;
  BorrowedProductId: number;
  BorrowedAmount: number;
  PositionProductId: number;
  PositionAmount: number;
  DateOpened: string;
  DateClosed: string;
  PositionType: 'Unknown' | 'Long' | 'Short';
  InterestAccrued: number;
  PositionState: 'Open' | 'Closed';
  UnrealizedPnL: number;
  RealizedPnL: number;
  NotionalValue: number;
  NotionalCostBasis: number;
  AverageRate: number;
};
type MarginPositionsArgs = {
  accountId: number;
  instrumentId?: number;
  depth?: number;
  offset?: number;
  resetCache?: boolean;
};
export type MarginAccountEquityArgs = {
  price: number;
  leverage: number;
  instrumentId: number;
  side: number;
  orderType: number | string;
  accountId: number;
};
export type MarginAccountEquityResponse = {
  IsLeverageAllowed: boolean;
  MaxAmount: number;
};
export type RepaymentAssetOption = {
  ProductId: number;
  ProductSymbol: string;
  ProductFullName: string;
  AccountId: number;
  Amount: number;
  NotionalValue: number;
};
export type GetRepaymentAssetOptionsResponse = RepaymentAssetOption[];
type CloseMarginPositionRequest = {
  AccountId: number;
  PositionId: number;
  PositionInstrumentId: number;
  RepaymentAssets: number[];
};
export declare const openPositionsAdapter: import('@reduxjs/toolkit').EntityAdapter<MarginPosition>;
export declare const closedPositionsAdapter: import('@reduxjs/toolkit').EntityAdapter<MarginPosition>;
export declare const marginApi: import('@reduxjs/toolkit/query').Api<
  import('@reduxjs/toolkit/query').BaseQueryFn<
    string | import('@reduxjs/toolkit/query').FetchArgs,
    unknown,
    import('@reduxjs/toolkit/query').FetchBaseQueryError
  >,
  {
    getAuthConfig: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        userName: string;
        password: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').AuthResponseType,
      'apexApi'
    >;
    validateToken: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        token: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      unknown,
      'apexApi'
    >;
    registerUser: import('@reduxjs/toolkit/query').MutationDefinition<
      import('../types/apiResponses').RegisterUserResponseType,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      any,
      'apexApi'
    >;
    getUserInfo: import('@reduxjs/toolkit/query').QueryDefinition<
      (
        | {
            userId: number;
          }
        | {
            userName: string;
          }
      ) & {
        token?: string | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').UserInfoResponse,
      'apexApi'
    >;
    getAccountPositions: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
        includePending?: boolean | undefined;
        hideSmallAmounts?: boolean | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').IAccountPosition[],
      'apexApi'
    >;
    getProducts: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').IProduct[],
      'apexApi'
    >;
    getLevel1Summary: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').ILevel1[],
      'apexApi'
    >;
    getInstruments: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').IInstrument[],
      'apexApi'
    >;
    getVerificationLevelConfig: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').VerificationLevelConfigResponse,
      'apexApi'
    >;
    getAccountWithdrawInfos: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').WithdrawInfoResponse,
      'apexApi'
    >;
    getWithdrawTemplateTypes: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').TemplateTypesResponse,
      'apexApi'
    >;
    getWithdrawTemplateInfo: import('@reduxjs/toolkit/query').QueryDefinition<
      import('../types/apiResponses').TemplateType & {
        productId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      Record<string, string>,
      'apexApi'
    >;
    getWithdrawFee: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        FeeAmount: number;
        TicketAmount: number;
      },
      'apexApi'
    >;
    createWithdrawTicket: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
        TemplateType: string;
        TemplateForm: Record<string, string | number>;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: true;
      },
      'apexApi'
    >;
    transferFunds: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        senderAccountId: number;
        receiverAccountId?: number | undefined;
        recipientEmail?: string | undefined;
        productId: number;
        note: string;
        amount: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: boolean;
        transferId?: number | undefined;
      },
      'apexApi'
    >;
    getDepositInfo: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
        GenerateNewKey: boolean;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      string,
      'apexApi'
    >;
    requestTransferFunds: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        ReceiverUsername: string;
        Notes: string;
        Amount: number;
        ProductId?: string | number | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: boolean;
        errormsg?: string | undefined;
      },
      'apexApi'
    >;
    getTickerHistory: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        instrumentId: number;
        interval: number;
        timeframe: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        time: number;
        high: number;
        low: number;
        open: number;
        close: number;
        volume: number;
        bidPrice: number;
        askPrice: number;
        instrumentId: number;
      }[],
      'apexApi'
    >;
    getL2Snapshot: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        instrumentId: number;
        depth?: number | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/orderBookTypes').OrderType[],
      'apexApi'
    >;
    getTradesHistory: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        instrumentId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        tradeId: number;
        quantity: number;
        price: number;
        tradetime: number;
        takerSide: number;
      }[],
      'apexApi'
    >;
    getTransferRequests: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').TransferRequest[],
      'apexApi'
    >;
    confirmRequestTransfer: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        requestCode: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >;
    rejectRequestTransfer: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        requestCode: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >;
    sendOrder: import('@reduxjs/toolkit/query').MutationDefinition<
      import('../types').SendOrderRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').SendOrderSuccessResponse,
      'apexApi'
    >;
    cancelOrder: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        orderId: number;
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >;
    getOrderFee: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        OMSId: number;
        AccountId: number;
        InstrumentId: number;
        Quantity?: number | undefined;
        Amount: number;
        Price: number;
        OrderType: number;
        Side: number;
        MakerTaker?: 'Maker' | 'Taker' | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        OrderFee: number;
        ProductId: number;
      },
      'apexApi'
    >;
    addUserAffiliateTag: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        OMSId: number;
        UserId?: number | undefined;
        AffiliateTag: string;
        AffiliateId?: number | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >;
    getUserAffiliateTag: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        AffiliateTag: string;
        AffiliateId: number;
      },
      'apexApi'
    >;
    getUserAffiliateCount: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        Count: number;
      },
      'apexApi'
    >;
    getOMSInfo: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        operatorId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        BaseNotionalProductSymbol: string;
        BaseNotionalProductId: number;
        SystemMarginEnabled: boolean;
        Id: number;
        OMSId: number;
      }[],
      'apexApi'
    >;
    getAllMarginProductConfigs: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      import('../types/apiResponses').IMarginProductConfig[],
      'apexApi'
    >;
    createDepositTicket: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
        AssetId: number;
        RequestUser: number;
        DepositInfo: object;
        Status: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        result: true;
      },
      'apexApi'
    >;
  } & {
    getMarginKVP: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        marginVerificationLevels: number[];
        minDepositValue: number;
      },
      'apexApi'
    >;
    requestMarginAccount: import('@reduxjs/toolkit/query').MutationDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      GetAccountInfoResponse,
      'apexApi'
    >;
    GetAccountPositionSummary: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      AccountPositionSummaryResponse,
      'apexApi'
    >;
    GetMarginAccountInfo: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      MarginAccountInfoResponse,
      'apexApi'
    >;
    getAllMarginProductsConfigs: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ProductsMarginConfigResponse,
      'apexApi'
    >;
    getAllMarginInstrumentConfigs: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      InstrumentsMarginConfigResponse,
      'apexApi'
    >;
    getMarginPositions: import('@reduxjs/toolkit/query').QueryDefinition<
      MarginPositionsArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<MarginPosition>,
      'apexApi'
    >;
    getAccountMarginBalances: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
        hideSmallAmounts?: boolean | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      MarginBalanceResponse[],
      'apexApi'
    >;
    getMarginAccountEquity: import('@reduxjs/toolkit/query').QueryDefinition<
      MarginAccountEquityArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      MarginAccountEquityResponse,
      'apexApi'
    >;
    getMarginPositionHistory: import('@reduxjs/toolkit/query').QueryDefinition<
      MarginPositionsArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<MarginPosition>,
      'apexApi'
    >;
    cancelMarginPosition: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        AccountId: number;
        PositionId: number;
        PositionInstrumentId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >;
    closeMarginPosition: import('@reduxjs/toolkit/query').MutationDefinition<
      CloseMarginPositionRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >;
    getRepaymentAssetOptions: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
        PositionId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      GetRepaymentAssetOptionsResponse,
      'apexApi'
    >;
  },
  'apexApi',
  string,
  | typeof import('@reduxjs/toolkit/query').coreModuleName
  | typeof import('@reduxjs/toolkit/dist/query/react').reactHooksModuleName
>;
export declare const useGetMarginKVPQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      {
        marginVerificationLevels: number[];
        minDepositValue: number;
      },
      'apexApi'
    >
  >,
  useRequestMarginAccountMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      GetAccountInfoResponse,
      'apexApi'
    >
  >,
  useGetMarginAccountInfoQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      MarginAccountInfoResponse,
      'apexApi'
    >
  >,
  useGetAllMarginInstrumentConfigsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      InstrumentsMarginConfigResponse,
      'apexApi'
    >
  >,
  useGetMarginPositionsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      MarginPositionsArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<MarginPosition>,
      'apexApi'
    >
  >,
  useGetMarginPositionHistoryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      MarginPositionsArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<MarginPosition>,
      'apexApi'
    >
  >,
  useLazyGetMarginPositionsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      MarginPositionsArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<MarginPosition>,
      'apexApi'
    >
  >,
  useLazyGetMarginPositionHistoryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      MarginPositionsArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ActivityResponse<MarginPosition>,
      'apexApi'
    >
  >,
  useCloseMarginPositionMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      CloseMarginPositionRequest,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >
  >,
  useGetAccountPositionSummaryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      AccountPositionSummaryResponse,
      'apexApi'
    >
  >,
  useGetAccountMarginBalancesQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
        hideSmallAmounts?: boolean | undefined;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      MarginBalanceResponse[],
      'apexApi'
    >
  >,
  useGetMarginAccountEquityQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      MarginAccountEquityArgs,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      MarginAccountEquityResponse,
      'apexApi'
    >
  >,
  useGetAllMarginProductsConfigsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ProductsMarginConfigResponse,
      'apexApi'
    >
  >,
  useGetRepaymentAssetOptionsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        AccountId: number;
        PositionId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      GetRepaymentAssetOptionsResponse,
      'apexApi'
    >
  >,
  useCancelMarginPositionMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      {
        AccountId: number;
        PositionId: number;
        PositionInstrumentId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        import('@reduxjs/toolkit/query').FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >
  >;
export {};
