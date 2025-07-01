import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { OrderType } from '../types/orderBookTypes';
import { SendOrderRequest } from '../types/apiRequests';
import {
  ApexResponse,
  AuthResponseType,
  IAccountPosition,
  IInstrument,
  ILevel1,
  IProduct,
  RegisterUserResponseType,
  SendOrderSuccessResponse,
  TemplateTypesResponse,
  TransferRequest,
  UserInfoResponse,
  VerificationLevelConfigResponse,
  WithdrawInfoResponse,
  IMarginProductConfig,
} from '../types/apiResponses';
export declare const TAGS: {
  USER_INFO: string;
  USER_CONFIG: string;
  OPEN_ORDERS: string;
  CANCELLED_ORDERS: string;
  PENDING_REQUESTS: string;
  ACCOUNT_POSITIONS: string;
  OPEN_MARGIN_POSITIONS: string;
  CLOSED_MARGIN_POSITIONS: string;
  USER_ACCOUNTS: string;
  SUMMARY_BALANCES: string;
};
export declare const apexApi: import('@reduxjs/toolkit/query/react').Api<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
  {
    getAuthConfig: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        userName: string;
        password: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      AuthResponseType,
      'apexApi'
    >;
    validateToken: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        token: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      unknown,
      'apexApi'
    >;
    registerUser: import('@reduxjs/toolkit/query/react').MutationDefinition<
      RegisterUserResponseType,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      any,
      'apexApi'
    >;
    getUserInfo: import('@reduxjs/toolkit/query/react').QueryDefinition<
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
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      UserInfoResponse,
      'apexApi'
    >;
    getAccountPositions: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        accountId: number;
        includePending?: boolean | undefined;
        hideSmallAmounts?: boolean | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IAccountPosition[],
      'apexApi'
    >;
    getProducts: import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IProduct[],
      'apexApi'
    >;
    getLevel1Summary: import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      ILevel1[],
      'apexApi'
    >;
    getInstruments: import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IInstrument[],
      'apexApi'
    >;
    getVerificationLevelConfig: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        accountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      VerificationLevelConfigResponse,
      'apexApi'
    >;
    getAccountWithdrawInfos: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        accountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      WithdrawInfoResponse,
      'apexApi'
    >;
    getWithdrawTemplateTypes: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      TemplateTypesResponse,
      'apexApi'
    >;
    getWithdrawTemplateInfo: import('@reduxjs/toolkit/query/react').QueryDefinition<
      import('../types/apiResponses').TemplateType & {
        productId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      Record<string, string>,
      'apexApi'
    >;
    getWithdrawFee: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        FeeAmount: number;
        TicketAmount: number;
      },
      'apexApi'
    >;
    createWithdrawTicket: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
        TemplateType: string;
        TemplateForm: Record<string, string | number>;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: true;
      },
      'apexApi'
    >;
    transferFunds: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        senderAccountId: number;
        receiverAccountId?: number | undefined;
        recipientEmail?: string | undefined;
        productId: number;
        note: string;
        amount: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
        transferId?: number | undefined;
      },
      'apexApi'
    >;
    getDepositInfo: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
        GenerateNewKey: boolean;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      string,
      'apexApi'
    >;
    requestTransferFunds: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        ReceiverUsername: string;
        Notes: string;
        Amount: number;
        ProductId?: string | number | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
        errormsg?: string | undefined;
      },
      'apexApi'
    >;
    getTickerHistory: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        instrumentId: number;
        interval: number;
        timeframe: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
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
    getL2Snapshot: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        instrumentId: number;
        depth?: number | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      OrderType[],
      'apexApi'
    >;
    getTradesHistory: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        instrumentId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
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
    getTransferRequests: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      TransferRequest[],
      'apexApi'
    >;
    confirmRequestTransfer: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        requestCode: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >;
    rejectRequestTransfer: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        requestCode: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >;
    sendOrder: import('@reduxjs/toolkit/query/react').MutationDefinition<
      SendOrderRequest,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      SendOrderSuccessResponse,
      'apexApi'
    >;
    cancelOrder: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        orderId: number;
        accountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      ApexResponse,
      'apexApi'
    >;
    getOrderFee: import('@reduxjs/toolkit/query/react').QueryDefinition<
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
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        OrderFee: number;
        ProductId: number;
      },
      'apexApi'
    >;
    addUserAffiliateTag: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        OMSId: number;
        UserId?: number | undefined;
        AffiliateTag: string;
        AffiliateId?: number | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >;
    getUserAffiliateTag: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        AffiliateTag: string;
        AffiliateId: number;
      },
      'apexApi'
    >;
    getUserAffiliateCount: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        Count: number;
      },
      'apexApi'
    >;
    getOMSInfo: import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        operatorId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
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
    getAllMarginProductConfigs: import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IMarginProductConfig[],
      'apexApi'
    >;
    createDepositTicket: import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
        AssetId: number;
        RequestUser: number;
        DepositInfo: object;
        Status: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: true;
      },
      'apexApi'
    >;
  },
  'apexApi',
  string,
  | typeof import('@reduxjs/toolkit/query/react').coreModuleName
  | typeof import('@reduxjs/toolkit/query/react').reactHooksModuleName
>;
export declare const useGetAuthConfigMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        userName: string;
        password: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      AuthResponseType,
      'apexApi'
    >
  >,
  useRegisterUserMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      RegisterUserResponseType,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      any,
      'apexApi'
    >
  >,
  useGetAccountPositionsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        accountId: number;
        includePending?: boolean | undefined;
        hideSmallAmounts?: boolean | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IAccountPosition[],
      'apexApi'
    >
  >,
  useGetProductsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IProduct[],
      'apexApi'
    >
  >,
  useGetLevel1SummaryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      ILevel1[],
      'apexApi'
    >
  >,
  useGetInstrumentsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IInstrument[],
      'apexApi'
    >
  >,
  useGetVerificationLevelConfigQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        accountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      VerificationLevelConfigResponse,
      'apexApi'
    >
  >,
  useValidateTokenMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        token: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      unknown,
      'apexApi'
    >
  >,
  useGetUserInfoQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
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
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      UserInfoResponse,
      'apexApi'
    >
  >,
  useSendOrderMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      SendOrderRequest,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      SendOrderSuccessResponse,
      'apexApi'
    >
  >,
  useCancelOrderMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        orderId: number;
        accountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      ApexResponse,
      'apexApi'
    >
  >,
  useGetOrderFeeQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
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
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        OrderFee: number;
        ProductId: number;
      },
      'apexApi'
    >
  >,
  useLazyGetOrderFeeQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseLazyQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
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
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        OrderFee: number;
        ProductId: number;
      },
      'apexApi'
    >
  >,
  useGetTickerHistoryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        instrumentId: number;
        interval: number;
        timeframe: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
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
    >
  >,
  useGetL2SnapshotQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        instrumentId: number;
        depth?: number | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      OrderType[],
      'apexApi'
    >
  >,
  useGetTradesHistoryQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        instrumentId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        tradeId: number;
        quantity: number;
        price: number;
        tradetime: number;
        takerSide: number;
      }[],
      'apexApi'
    >
  >,
  useGetAccountWithdrawInfosQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        accountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      WithdrawInfoResponse,
      'apexApi'
    >
  >,
  useGetWithdrawTemplateTypesQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      TemplateTypesResponse,
      'apexApi'
    >
  >,
  useGetWithdrawTemplateInfoQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      import('../types/apiResponses').TemplateType & {
        productId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      Record<string, string>,
      'apexApi'
    >
  >,
  useGetWithdrawFeeQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        FeeAmount: number;
        TicketAmount: number;
      },
      'apexApi'
    >
  >,
  useCreateWithdrawTicketMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
        TemplateType: string;
        TemplateForm: Record<string, string | number>;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: true;
      },
      'apexApi'
    >
  >,
  useTransferFundsMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        senderAccountId: number;
        receiverAccountId?: number | undefined;
        recipientEmail?: string | undefined;
        productId: number;
        note: string;
        amount: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
        transferId?: number | undefined;
      },
      'apexApi'
    >
  >,
  useGetDepositInfoQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
        ProductId: number;
        GenerateNewKey: boolean;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      string,
      'apexApi'
    >
  >,
  useRequestTransferFundsMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        ReceiverUsername: string;
        Notes: string;
        Amount: number;
        ProductId?: string | number | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
        errormsg?: string | undefined;
      },
      'apexApi'
    >
  >,
  useGetTransferRequestsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        AccountId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      TransferRequest[],
      'apexApi'
    >
  >,
  useConfirmRequestTransferMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        requestCode: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >
  >,
  useRejectRequestTransferMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        requestCode: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >
  >,
  useGetUserAffiliateTagQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        AffiliateTag: string;
        AffiliateId: number;
      },
      'apexApi'
    >
  >,
  useGetUserAffiliateCountQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        UserId: number;
        OMSId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        Count: number;
      },
      'apexApi'
    >
  >,
  useAddUserAffiliateTagMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        OMSId: number;
        UserId?: number | undefined;
        AffiliateTag: string;
        AffiliateId?: number | undefined;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: boolean;
      },
      'apexApi'
    >
  >,
  useGetOMSInfoQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      {
        operatorId: number;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        BaseNotionalProductSymbol: string;
        BaseNotionalProductId: number;
        SystemMarginEnabled: boolean;
        Id: number;
        OMSId: number;
      }[],
      'apexApi'
    >
  >,
  useGetAllMarginProductConfigsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query/react').QueryDefinition<
      void,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      IMarginProductConfig[],
      'apexApi'
    >
  >,
  useCreateDepositTicketMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query/react').MutationDefinition<
      {
        AccountId: number;
        ProductId: number;
        Amount: number;
        AssetId: number;
        RequestUser: number;
        DepositInfo: object;
        Status: string;
      },
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      string,
      {
        result: true;
      },
      'apexApi'
    >
  >;
