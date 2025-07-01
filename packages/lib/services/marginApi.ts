import { createEntityAdapter } from '@reduxjs/toolkit';

import {
  ActivityResponse,
  activityQueryProps,
  activityTransform,
} from '../helpers/activity';
import {
  AccountPositionSummaryResponse,
  ApexResponse,
  GetAccountInfoResponse,
  InstrumentsMarginConfigResponse,
  MarginAccountInfoResponse,
  MarginBalanceResponse,
  ProductsMarginConfigResponse,
} from '../types/apiResponses';

import { TAGS, apexApi } from './apexApi';

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

export const openPositionsAdapter = createEntityAdapter<MarginPosition>({
  selectId: item => item.PositionId,
  sortComparer: (a, b) =>
    new Date(b.DateOpened).valueOf() - new Date(a.DateOpened).valueOf(),
});
export const closedPositionsAdapter = createEntityAdapter<MarginPosition>({
  selectId: item => item.PositionId,
  sortComparer: (a, b) =>
    new Date(b.DateClosed).valueOf() - new Date(a.DateClosed).valueOf(),
});

export const marginApi = apexApi.injectEndpoints({
  endpoints: builder => ({
    getMarginKVP: builder.query<
      { marginVerificationLevels: number[]; minDepositValue: number },
      void
    >({
      queryFn: async (_args, _api, _extraOptions, baseQuery) => {
        const marginVL = await baseQuery({
          url: '/GetGeneralKVP',
          method: 'POST',
          body: { Key: 'MarginVerificationLevels' },
        });
        const minDepositValue = await baseQuery({
          url: '/GetGeneralKVP',
          method: 'POST',
          body: { Key: 'MarginMinimumAccountValue' },
        });
        if (!('data' in marginVL) || !('data' in minDepositValue)) {
          return {
            error: marginVL.error ?? minDepositValue.error!,
          };
        }

        const levels = (marginVL.data as { Value: string }).Value.split(',')
          .map(l => {
            if (l.includes('-')) {
              const [min, max] = l.split('-').map(Number);
              return Array.from({ length: max - min + 1 }, (_, i) => min + i);
            }
            return Number(l);
          })
          .flat();
        return {
          data: {
            marginVerificationLevels: levels,
            minDepositValue:
              (minDepositValue.data as { Value: number }).Value || 0,
          },
        };
      },
    }),
    requestMarginAccount: builder.mutation<GetAccountInfoResponse, void>({
      query: () => ({
        url: '/RequestMarginAccount',
        method: 'POST',
        body: {},
        validateStatus(response, body) {
          return response.status === 200 && !!body.AccountId;
        },
      }),
      invalidatesTags: [TAGS.USER_ACCOUNTS, TAGS.SUMMARY_BALANCES],
    }),
    GetAccountPositionSummary: builder.query<
      AccountPositionSummaryResponse,
      { accountId: number }
    >({
      query: ({ accountId }) => ({
        url: '/GetAccountPositionSummary',
        method: 'POST',
        body: { OMSId: 1, AccountId: accountId },
      }),
      providesTags: [TAGS.SUMMARY_BALANCES],
    }),
    GetMarginAccountInfo: builder.query<
      MarginAccountInfoResponse,
      { accountId: number }
    >({
      query: ({ accountId }) => ({
        url: '/GetMarginAccountInfo',
        method: 'POST',
        body: { OMSId: 1, AccountId: accountId },
      }),
    }),
    getAllMarginProductsConfigs: builder.query<
      ProductsMarginConfigResponse,
      void
    >({
      query: () => ({
        url: '/GetAllMarginProductConfigs',
        method: 'POST',
        body: { OMSId: 1 },
      }),
    }),
    getAllMarginInstrumentConfigs: builder.query<
      InstrumentsMarginConfigResponse,
      void
    >({
      query: () => ({
        url: '/GetAllMarginInstrumentConfigs',
        method: 'POST',
        body: { OMSId: 1 },
      }),
    }),
    getMarginPositions: builder.query<
      ActivityResponse<MarginPosition>,
      MarginPositionsArgs
    >({
      providesTags: [TAGS.OPEN_MARGIN_POSITIONS],
      query: ({ accountId, instrumentId, offset, depth }) => ({
        url: '/GetMarginPositions',
        method: 'POST',
        body: {
          OMSId: 1,
          AccountId: accountId,
          PositionInstrumentId: instrumentId,
          StartIndex: offset,
          Limit: depth,
        },
      }),
      transformResponse: (arr: MarginPosition[], ...props) =>
        activityTransform<MarginPosition>(openPositionsAdapter, arr, ...props),
      ...activityQueryProps(openPositionsAdapter),
    }),
    getAccountMarginBalances: builder.query<
      MarginBalanceResponse[],
      { accountId: number; hideSmallAmounts?: boolean }
    >({
      query: ({ accountId, hideSmallAmounts }) => ({
        url: '/GetAccountMarginBalances',
        method: 'POST',
        body: {
          OMSId: 1,
          AccountId: accountId,
          HideSmallAmounts: hideSmallAmounts,
        },
      }),
    }),
    getMarginAccountEquity: builder.query<
      MarginAccountEquityResponse,
      MarginAccountEquityArgs
    >({
      query: payload => ({
        url: '/GetMarginAccountEquity',
        method: 'POST',
        body: {
          OMSId: 1,
          ...payload,
        },
      }),
    }),
    getMarginPositionHistory: builder.query<
      ActivityResponse<MarginPosition>,
      MarginPositionsArgs
    >({
      providesTags: [TAGS.CLOSED_MARGIN_POSITIONS],
      query: ({ accountId, instrumentId, depth = 25, offset = 0 }) => ({
        url: '/GetMarginPositionHistory',
        method: 'POST',
        body: {
          OMSId: 1,
          AccountId: accountId,
          PositionInstrumentId: instrumentId,
          StartIndex: offset,
          Limit: depth,
          // BorrowProductId?: number;
          // StartTimestamp?: string;
          // EndTimestamp?: string;
        },
      }),
      transformResponse: (arr: MarginPosition[], ...props) =>
        activityTransform<MarginPosition>(
          closedPositionsAdapter,
          arr,
          ...props,
        ),
      ...activityQueryProps(closedPositionsAdapter),
    }),
    cancelMarginPosition: builder.mutation<
      ApexResponse,
      { AccountId: number; PositionId: number; PositionInstrumentId: number }
    >({
      query: ({ AccountId, PositionId, PositionInstrumentId }) => ({
        url: '/CloseMarginPosition',
        method: 'POST',
        invalidatesTags: [TAGS.CLOSED_MARGIN_POSITIONS, TAGS.SUMMARY_BALANCES],
        body: {
          AccountId,
          PositionId,
          PositionInstrumentId,
        },
        validateStatus(response, body) {
          return response.status === 200 && body.result;
        },
      }),
    }),
    closeMarginPosition: builder.mutation<
      ApexResponse,
      CloseMarginPositionRequest
    >({
      invalidatesTags: [TAGS.OPEN_MARGIN_POSITIONS, TAGS.SUMMARY_BALANCES],
      query: ({
        AccountId,
        PositionId,
        PositionInstrumentId,
        RepaymentAssets,
      }) => ({
        url: '/CloseMarginPosition',
        method: 'POST',
        invalidatesTags: [TAGS.CLOSED_MARGIN_POSITIONS, TAGS.SUMMARY_BALANCES],
        body: {
          AccountId,
          PositionId,
          PositionInstrumentId,
          RepaymentAssets,
        },
        validateStatus(response, body) {
          return response.status === 200 && body.result;
        },
      }),
    }),
    getRepaymentAssetOptions: builder.query<
      GetRepaymentAssetOptionsResponse,
      { AccountId: number; PositionId: number }
    >({
      query: ({ AccountId, PositionId }) => ({
        url: '/GetRepaymentAssetOptions',
        method: 'POST',
        body: {
          OMSId: 1,
          AccountId,
          PositionId,
        },
      }),
    }),
  }),
});
export const {
  useGetMarginKVPQuery,
  useRequestMarginAccountMutation,
  useGetMarginAccountInfoQuery,
  useGetAllMarginInstrumentConfigsQuery,
  useGetMarginPositionsQuery,
  useGetMarginPositionHistoryQuery,
  useLazyGetMarginPositionsQuery,
  useLazyGetMarginPositionHistoryQuery,
  useCloseMarginPositionMutation,
  useGetAccountPositionSummaryQuery,
  useGetAccountMarginBalancesQuery,
  useGetMarginAccountEquityQuery,
  useGetAllMarginProductsConfigsQuery,
  useGetRepaymentAssetOptionsQuery,
  useCancelMarginPositionMutation,
} = marginApi;
