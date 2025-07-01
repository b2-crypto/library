import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import {
  ApexResponse,
  Auth2FAResponseType,
  Auth2FAType,
  GetAccountInfoResponse,
  ResetPasswordResponseType,
  ResetPasswordType,
  GetUserConfigResponse,
} from '../types/apiResponses';
export declare const profileApi: import('@reduxjs/toolkit/query').Api<
  import('@reduxjs/toolkit/query').BaseQueryFn<
    string | import('@reduxjs/toolkit/query').FetchArgs,
    unknown,
    FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
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
        FetchBaseQueryError
      >,
      string,
      {
        result: true;
      },
      'apexApi'
    >;
  } & {
    getUserConfig: import('@reduxjs/toolkit/query').QueryDefinition<
      | {
          userId: number;
        }
      | {
          userName: string;
        },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      Partial<GetUserConfigResponse>,
      'apexApi'
    >;
    setUserConfig: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        userId?: number | undefined;
        userName?: string | undefined;
        config: any;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      Partial<GetUserConfigResponse>,
      'apexApi'
    >;
    getUserAccounts: import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      GetAccountInfoResponse[],
      'apexApi'
    >;
    getAccountInfo: import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      GetAccountInfoResponse,
      'apexApi'
    >;
    authenticate2FA: import('@reduxjs/toolkit/query').MutationDefinition<
      Auth2FAType,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      Auth2FAResponseType,
      'apexApi'
    >;
    enableGoogle2FA: import('@reduxjs/toolkit/query').MutationDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      {
        GoogleQRCode: string;
        ManualCode: string;
      },
      'apexApi'
    >;
    disable2FA: import('@reduxjs/toolkit/query').MutationDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >;
    resetPassword: import('@reduxjs/toolkit/query').MutationDefinition<
      ResetPasswordType,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      ResetPasswordResponseType,
      'apexApi'
    >;
    resendVerificationEmail: import('@reduxjs/toolkit/query').MutationDefinition<
      {
        Email: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >;
  },
  'apexApi',
  string,
  | typeof import('@reduxjs/toolkit/query').coreModuleName
  | typeof import('@reduxjs/toolkit/dist/query/react').reactHooksModuleName
>;
export declare const useGetUserConfigQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      | {
          userId: number;
        }
      | {
          userName: string;
        },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      Partial<GetUserConfigResponse>,
      'apexApi'
    >
  >,
  useSetUserConfigMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      {
        userId?: number | undefined;
        userName?: string | undefined;
        config: any;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      Partial<GetUserConfigResponse>,
      'apexApi'
    >
  >,
  useGetUserAccountsQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      GetAccountInfoResponse[],
      'apexApi'
    >
  >,
  useGetAccountInfoQuery: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseQuery<
    import('@reduxjs/toolkit/query').QueryDefinition<
      {
        accountId: number;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      GetAccountInfoResponse,
      'apexApi'
    >
  >,
  useEnableGoogle2FAMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      {
        GoogleQRCode: string;
        ManualCode: string;
      },
      'apexApi'
    >
  >,
  useAuthenticate2FAMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      Auth2FAType,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      Auth2FAResponseType,
      'apexApi'
    >
  >,
  useDisable2FAMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      void,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >
  >,
  useResetPasswordMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      ResetPasswordType,
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      ResetPasswordResponseType,
      'apexApi'
    >
  >,
  useResendVerificationEmailMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
    import('@reduxjs/toolkit/query').MutationDefinition<
      {
        Email: string;
      },
      import('@reduxjs/toolkit/query').BaseQueryFn<
        string | import('@reduxjs/toolkit/query').FetchArgs,
        unknown,
        FetchBaseQueryError
      >,
      string,
      ApexResponse,
      'apexApi'
    >
  >;
