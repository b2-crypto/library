/// <reference types="redux-persist/types/persistreducer" />
import { render } from '@testing-library/react-native';
import { http, type JsonBodyType } from 'msw';
import { setupServer } from 'msw/native';
export declare const TEST_BASE_URL = 'http://apex.local';
type Interface<T> = {
  [P in keyof T]: T[P];
};
interface ServerType extends Interface<ReturnType<typeof setupServer>> {}
export declare const server: ServerType;
/** Permite personalizar el mock en un test específico */
export declare const mockApiSuccess: (
  endpoint: string,
  payload: JsonBodyType,
  httpMethod?: keyof typeof http,
) => void;
export declare function createTestStore(): import('@reduxjs/toolkit/dist/configureStore').ToolkitStore<
  {
    apexApi: import('@reduxjs/toolkit/query').CombinedState<
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
          import('../types').AuthResponseType,
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
          import('../types').RegisterUserResponseType,
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
          import('../types').UserInfoResponse,
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
          import('../types').IAccountPosition[],
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
          import('../types').IProduct[],
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
          import('../types').ILevel1[],
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
          import('../types').IInstrument[],
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
          import('../types').VerificationLevelConfigResponse,
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
          import('../types').WithdrawInfoResponse,
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
          import('../types').TemplateTypesResponse,
          'apexApi'
        >;
        getWithdrawTemplateInfo: import('@reduxjs/toolkit/query').QueryDefinition<
          import('../types').TemplateType & {
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
          import('../types').TransferRequest[],
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
          import('../types').SendOrderSuccessResponse,
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
          import('../types').ApexResponse,
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
          import('../types').IMarginProductConfig[],
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
      },
      string,
      'apexApi'
    >;
    auth: {
      user: {
        UserId: number;
        SessionToken: string;
      } | null;
      isAuthenticated: boolean;
      pending2FaToken: string;
      bioAuthPassed: boolean;
    } & import('redux-persist/es/persistReducer').PersistPartial;
    wallet: {
      walletList: import('../types').IWalletList;
    } & import('redux-persist/es/persistReducer').PersistPartial;
    currentAccount: import('../stores').CurrentAccountState &
      import('redux-persist/es/persistReducer').PersistPartial;
    leverages: import('../stores/leverage').LeverageState;
  },
  import('redux').AnyAction,
  import('@reduxjs/toolkit').MiddlewareArray<
    [
      import('redux-thunk').ThunkMiddleware<
        {
          apexApi: import('@reduxjs/toolkit/query').CombinedState<
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
                import('../types').AuthResponseType,
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
                import('../types').RegisterUserResponseType,
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
                import('../types').UserInfoResponse,
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
                import('../types').IAccountPosition[],
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
                import('../types').IProduct[],
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
                import('../types').ILevel1[],
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
                import('../types').IInstrument[],
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
                import('../types').VerificationLevelConfigResponse,
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
                import('../types').WithdrawInfoResponse,
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
                import('../types').TemplateTypesResponse,
                'apexApi'
              >;
              getWithdrawTemplateInfo: import('@reduxjs/toolkit/query').QueryDefinition<
                import('../types').TemplateType & {
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
                import('../types').TransferRequest[],
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
                import('../types').SendOrderSuccessResponse,
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
                import('../types').ApexResponse,
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
                import('../types').IMarginProductConfig[],
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
            },
            string,
            'apexApi'
          >;
          auth: {
            user: {
              UserId: number;
              SessionToken: string;
            } | null;
            isAuthenticated: boolean;
            pending2FaToken: string;
            bioAuthPassed: boolean;
          } & import('redux-persist/es/persistReducer').PersistPartial;
          wallet: {
            walletList: import('../types').IWalletList;
          } & import('redux-persist/es/persistReducer').PersistPartial;
          currentAccount: import('../stores').CurrentAccountState &
            import('redux-persist/es/persistReducer').PersistPartial;
          leverages: import('../stores/leverage').LeverageState;
        },
        import('redux').AnyAction
      >,
      import('redux').Middleware<
        {},
        import('@reduxjs/toolkit/query').RootState<
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
              import('../types').AuthResponseType,
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
              import('../types').RegisterUserResponseType,
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
              import('../types').UserInfoResponse,
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
              import('../types').IAccountPosition[],
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
              import('../types').IProduct[],
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
              import('../types').ILevel1[],
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
              import('../types').IInstrument[],
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
              import('../types').VerificationLevelConfigResponse,
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
              import('../types').WithdrawInfoResponse,
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
              import('../types').TemplateTypesResponse,
              'apexApi'
            >;
            getWithdrawTemplateInfo: import('@reduxjs/toolkit/query').QueryDefinition<
              import('../types').TemplateType & {
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
              import('../types').TransferRequest[],
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
              import('../types').SendOrderSuccessResponse,
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
              import('../types').ApexResponse,
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
              import('../types').IMarginProductConfig[],
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
          },
          string,
          'apexApi'
        >,
        import('redux-thunk').ThunkDispatch<any, any, import('redux').AnyAction>
      >,
    ]
  >
>;
declare const customRender: typeof render;
export * from '@testing-library/react-native';
export { customRender as render };
