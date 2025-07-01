import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import format from 'date-fns/format';
import isString from 'lodash/isString';
import { transformFrame, transformOrder, transformTradeHistory, } from '../helpers/apiTransformers';
import { convertToBase64 } from '../helpers/common';
import { getDefaultStorage, STORAGE_KEYS } from '../services/storage';
import { logout, selectSessionToken } from '../stores/auth';
import { isApexErrorWithApiData, isErrorResponse, } from '../types/apiResponses';
import { fetchWithLogger } from './fetchWithLogger';
import { getLogger } from './logger';
import { container } from './container';
const QUERY_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';
function createApiError(error) {
    let message = '', code = 400;
    if (isErrorResponse(error.data)) {
        message = error.data.detail || error.data.errormsg;
        code = error.data.errorcode || 400;
    }
    else if (isString(error.data)) {
        message = error.data;
        code = error.originalStatus;
    }
    const newError = { status: code, message, data: error.data };
    return { error: newError };
}
const apexBaseQuery = async (args, api, extraOptions = {}) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: container.getConfigValue('baseUrl'),
        fetchFn: fetchWithLogger,
        prepareHeaders: (headers, { getState, endpoint }) => {
            headers.set('Content-Type', 'application/json');
            const aptoken = selectSessionToken(getState());
            if (aptoken && endpoint !== 'getAuthConfig') {
                headers.set('aptoken', aptoken);
            }
            return headers;
        },
        timeout: 30_000,
    });
    const result = await baseQuery(args, api, extraOptions);
    if (result.error) {
        const { error } = result;
        if ((error.status === 'PARSING_ERROR' &&
            (error.originalStatus === 404 || error.data === 'NOT AUTHORIZED')) ||
            error.status === 404) {
            // TODO: find a way to refresh the token.
            // For now, there is no simple way to do that — `WebAuthenticateUser`
            // doesn't work via HTTP API.
            // It seems the only possible way is to create a new API Key on the first
            // login (AddUserAPIKey) and then use it with `AuthenticateUser`
            // to get a new session token once a previous one is expired.
            // But it will also require to check if the user already has a key that
            // leads to a bunch of requests on login. So, for now we will ask user to
            // login again, and in case this flow will not work for the business,
            // a new more simple way to refresh token should be implemented on backend.
            api.dispatch(logout());
            const storage = getDefaultStorage();
            storage.delete(STORAGE_KEYS.USER_ID);
            storage.delete(STORAGE_KEYS.USER_NAME);
            return {
                error: {
                    status: 'CUSTOM_ERROR',
                    error: 'Not Authorized',
                },
            };
        }
        else {
            return createApiError(error);
        }
    }
    const responseData = result.data;
    return responseData.errorcode ? createApiError(result) : result;
};
export const TAGS = {
    USER_INFO: 'USER_INFO',
    USER_CONFIG: 'USER_CONFIG',
    OPEN_ORDERS: 'OPEN_ORDERS',
    CANCELLED_ORDERS: 'CANCELLED_ORDERS',
    PENDING_REQUESTS: 'PENDING_REQUESTS',
    ACCOUNT_POSITIONS: 'ACCOUNT_POSITIONS',
    OPEN_MARGIN_POSITIONS: 'OPEN_MARGIN_POSITIONS',
    CLOSED_MARGIN_POSITIONS: 'CLOSED_MARGIN_POSITIONS',
    USER_ACCOUNTS: 'USER_ACCOUNTS',
    SUMMARY_BALANCES: 'SUMMARY_BALANCES',
};
export const apexApi = createApi({
    reducerPath: 'apexApi',
    baseQuery: apexBaseQuery,
    tagTypes: [...Object.values(TAGS)],
    endpoints: builder => ({
        getAuthConfig: builder.mutation({
            query: ({ userName, password }) => {
                const authorization = convertToBase64(`${userName}:${password}`);
                return {
                    url: '/authenticate',
                    method: 'GET',
                    headers: {
                        Authorization: authorization,
                    },
                    validateStatus: (_, body) => body.Authenticated,
                };
            },
        }),
        validateToken: builder.mutation({
            query: ({ token }) => ({
                url: '/WebAuthenticateUser',
                method: 'POST',
                body: { SessionToken: token },
            }),
        }),
        registerUser: builder.mutation({
            query: (body) => ({
                url: '/registerUser',
                method: 'POST',
                body: body,
            }),
        }),
        getUserInfo: builder.query({
            providesTags: [TAGS.USER_INFO],
            query: body => ({
                url: '/GetUserInfo',
                method: 'POST',
                headers: { aptoken: body.token },
                body: 'userId' in body
                    ? { OMSId: 1, UserId: body.userId }
                    : { OMSId: 1, UserName: body.userName },
            }),
        }),
        getAccountPositions: builder.query({
            query: ({ accountId, includePending, hideSmallAmounts }) => ({
                url: '/GetAccountPositions',
                method: 'POST',
                body: {
                    accountId,
                    OMSId: 1,
                    IncludePending: includePending,
                    HideSmallAmounts: hideSmallAmounts,
                },
            }),
            providesTags: [TAGS.ACCOUNT_POSITIONS],
        }),
        getProducts: builder.query({
            query: () => ({
                url: '/GetProducts',
                method: 'POST',
                body: { OMSId: 1 },
            }),
        }),
        getLevel1Summary: builder.query({
            query: () => ({
                url: '/GetLevel1Summary',
                method: 'POST',
                body: { OMSId: 1 },
            }),
            transformResponse(responseValue) {
                return responseValue.reduce((acc, item) => {
                    try {
                        const parsed = JSON.parse(item);
                        acc.push(parsed);
                    }
                    catch (err) {
                        // ignore broken items
                    }
                    return acc;
                }, []);
            },
        }),
        getInstruments: builder.query({
            query: () => ({
                url: '/getInstruments',
                method: 'POST',
                body: { OMSId: 1 },
            }),
        }),
        getVerificationLevelConfig: builder.query({
            query: ({ accountId }) => ({
                url: '/GetVerificationLevelConfig',
                method: 'POST',
                body: { OMSId: 1, AccountId: accountId },
            }),
        }),
        getAccountWithdrawInfos: builder.query({
            query: ({ accountId }) => ({
                url: '/GetAccountWithdrawInfos',
                method: 'POST',
                body: { OMSId: 1, AccountId: accountId },
            }),
        }),
        getWithdrawTemplateTypes: builder.query({
            query: args => ({
                url: '/GetWithdrawFormTemplateTypes',
                method: 'POST',
                body: { OMSId: 1, ...args },
            }),
        }),
        getWithdrawTemplateInfo: builder.query({
            query: ({ productId, AccountProviderId, TemplateName }) => ({
                url: '/GetWithdrawTemplate',
                method: 'POST',
                body: {
                    OMSId: 1,
                    ProductId: productId,
                    TemplateType: TemplateName,
                    AccountProviderId,
                },
            }),
            transformResponse(response) {
                try {
                    return JSON.parse(response.Template);
                }
                catch {
                    return {};
                }
            },
        }),
        getWithdrawFee: builder.query({
            query: args => ({
                url: '/GetWithdrawFee',
                method: 'POST',
                body: { OMSId: 1, ...args },
            }),
        }),
        createWithdrawTicket: builder.mutation({
            query: ({ TemplateForm, ...rest }) => ({
                url: '/CreateWithdrawTicket',
                method: 'POST',
                body: { OMSId: 1, TemplateForm: JSON.stringify(TemplateForm), ...rest },
                invalidateTags: [TAGS.ACCOUNT_POSITIONS],
                validateStatus(response, body) {
                    return response.status === 200 && body.result;
                },
            }),
        }),
        transferFunds: builder.mutation({
            query: ({ senderAccountId, receiverAccountId, productId, recipientEmail, amount, note, }) => ({
                url: '/TransferFunds',
                method: 'POST',
                body: {
                    OMSId: 1,
                    SenderAccountId: senderAccountId,
                    ReceiverAccountId: receiverAccountId,
                    Notes: note,
                    ReceiverUsername: recipientEmail,
                    Amount: amount,
                    ProductId: productId,
                },
                validateStatus(response, body) {
                    return response.status === 200 && body.result;
                },
            }),
            invalidatesTags: [
                TAGS.ACCOUNT_POSITIONS,
                TAGS.OPEN_MARGIN_POSITIONS,
                TAGS.CLOSED_MARGIN_POSITIONS,
            ],
            transformResponse(body) {
                try {
                    const details = JSON.parse(body.detail);
                    return { result: true, transferId: details.TransferId };
                }
                catch {
                    return { result: false };
                }
            },
            transformErrorResponse(response) {
                if (isApexErrorWithApiData(response)) {
                    try {
                        const isJSON = JSON.parse(response.message);
                        if (typeof isJSON === 'object') {
                            return {
                                ...response,
                                message: response.data.errormsg || response.message,
                            };
                        }
                    }
                    catch {
                        // return initial error
                    }
                }
                return response;
            },
        }),
        getDepositInfo: builder.query({
            query: args => ({
                url: '/GetDepositInfo',
                method: 'POST',
                body: { OMSId: 1, ...args },
            }),
            transformResponse: (res) => {
                try {
                    const addresses = JSON.parse(res?.DepositInfo);
                    return addresses ? addresses[addresses.length - 1] : '';
                }
                catch (e) {
                    getLogger()('error', e, 'apexApi.transformResponse');
                    return '';
                }
            },
        }),
        requestTransferFunds: builder.mutation({
            query: args => ({
                url: '/RequestTransferFunds',
                method: 'POST',
                body: { OMSId: 1, ...args },
            }),
        }),
        getTickerHistory: builder.query({
            query({ instrumentId, interval, timeframe }) {
                const from = new Date();
                from.setSeconds(from.getSeconds() - timeframe);
                return {
                    url: '/GetTickerHistory',
                    method: 'POST',
                    body: {
                        OMSId: 1,
                        InstrumentId: instrumentId,
                        Interval: interval,
                        FromDate: format(from, QUERY_TIME_FORMAT),
                        ToDate: format(new Date(), QUERY_TIME_FORMAT),
                    },
                };
            },
            transformResponse(data) {
                return data.map(transformFrame);
            },
        }),
        getL2Snapshot: builder.query({
            query: ({ instrumentId }) => ({
                url: '/GetL2Snapshot',
                method: 'POST',
                body: {
                    OMSId: 1,
                    InstrumentId: instrumentId,
                    Depth: 100,
                },
            }),
            transformResponse: (res) => res.map(transformOrder),
        }),
        getTradesHistory: builder.query({
            query: ({ instrumentId }) => ({
                url: '/GetTradesHistory',
                method: 'POST',
                body: {
                    OMSId: 1,
                    InstrumentId: instrumentId,
                    Depth: 50,
                },
            }),
            transformResponse: (res) => res.map(transformTradeHistory),
            merge: (currentCache, newItems) => {
                // Upsert results to cache.
                newItems.map(newItem => {
                    const index = currentCache.findIndex(item => item.tradeId === newItem.tradeId);
                    if (index > -1) {
                        currentCache[index] = newItem;
                    }
                    else {
                        currentCache.push(newItem);
                    }
                });
            },
        }),
        getTransferRequests: builder.query({
            query: ({ AccountId }) => ({
                url: '/GetRequestTransferRequestsReceived',
                method: 'POST',
                body: { PayerAccountId: AccountId, OMSId: 1 },
            }),
            providesTags: [TAGS.PENDING_REQUESTS],
            transformResponse: (res) => res.filter(el => el.Status === 'Requested'),
        }),
        confirmRequestTransfer: builder.mutation({
            query: ({ requestCode }) => ({
                url: '/ConfirmRequestTransferFunds',
                method: 'POST',
                body: { requestCode: requestCode, OMSId: 1, OperatorId: 1 },
            }),
            invalidatesTags: [TAGS.PENDING_REQUESTS, TAGS.ACCOUNT_POSITIONS],
        }),
        rejectRequestTransfer: builder.mutation({
            query: ({ requestCode }) => ({
                url: '/RejectRequestTransferFunds',
                method: 'POST',
                body: { requestCode, OMSId: 1, OperatorId: 1 },
            }),
            invalidatesTags: [TAGS.PENDING_REQUESTS],
        }),
        sendOrder: builder.mutation({
            invalidatesTags: (_, __, args) => {
                const tags = [TAGS.OPEN_MARGIN_POSITIONS];
                if (args.OrderType === 1) {
                    // Market Order
                    tags.push(TAGS.ACCOUNT_POSITIONS);
                }
                else {
                    tags.push(TAGS.OPEN_ORDERS, TAGS.CANCELLED_ORDERS);
                }
                return tags;
            },
            query: args => ({
                url: '/SendOrder',
                method: 'POST',
                body: args,
                validateStatus(response, body) {
                    return response.status === 200 && body.status === 'Accepted';
                },
            }),
        }),
        cancelOrder: builder.mutation({
            query: ({ orderId, accountId }) => ({
                url: '/CancelOrder',
                method: 'POST',
                body: { OMSId: 1, OrderId: orderId, AccountId: accountId },
            }),
            invalidatesTags: [TAGS.OPEN_ORDERS, TAGS.CANCELLED_ORDERS],
        }),
        getOrderFee: builder.query({
            query: args => {
                return {
                    url: '/GetOrderFee',
                    method: 'POST',
                    body: args,
                };
            },
        }),
        addUserAffiliateTag: builder.mutation({
            query: params => ({
                url: '/AddUserAffiliateTag',
                method: 'POST',
                body: { ...params },
                validateStatus(response, body) {
                    return response.status === 200 && body.result;
                },
            }),
        }),
        getUserAffiliateTag: builder.query({
            query: ({ UserId, OMSId }) => ({
                url: '/GetUserAffiliateTag',
                method: 'POST',
                body: { OMSId, UserId },
            }),
        }),
        getUserAffiliateCount: builder.query({
            query: ({ UserId, OMSId }) => ({
                url: '/GetUserAffiliateCount',
                method: 'POST',
                body: { OMSId, UserId },
            }),
        }),
        getOMSInfo: builder.query({
            query: ({ operatorId }) => ({
                url: '/GetOMSs',
                method: 'POST',
                body: { OperatorId: operatorId },
            }),
        }),
        getAllMarginProductConfigs: builder.query({
            query: () => ({
                url: '/GetAllMarginProductConfigs',
                method: 'POST',
                body: { OMSId: 1 },
            }),
        }),
        createDepositTicket: builder.mutation({
            query: ({ ...rest }) => ({
                url: '/CreateDepositTicket',
                method: 'POST',
                body: {
                    OMSId: 1,
                    OperatorId: 1,
                    ...rest,
                },
                // invalidateTags: [TAGS.ACCOUNT_POSITIONS],
                validateStatus(response, body) {
                    return response.status === 200 && body.result;
                },
            }),
        }),
    }),
});
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAuthConfigMutation, useRegisterUserMutation, useGetAccountPositionsQuery, useGetProductsQuery, useGetLevel1SummaryQuery, useGetInstrumentsQuery, useGetVerificationLevelConfigQuery, useValidateTokenMutation, useGetUserInfoQuery, useSendOrderMutation, useCancelOrderMutation, useGetOrderFeeQuery, useLazyGetOrderFeeQuery, useGetTickerHistoryQuery, useGetL2SnapshotQuery, useGetTradesHistoryQuery, useGetAccountWithdrawInfosQuery, useGetWithdrawTemplateTypesQuery, useGetWithdrawTemplateInfoQuery, useGetWithdrawFeeQuery, useCreateWithdrawTicketMutation, useTransferFundsMutation, useGetDepositInfoQuery, useRequestTransferFundsMutation, useGetTransferRequestsQuery, useConfirmRequestTransferMutation, useRejectRequestTransferMutation, useGetUserAffiliateTagQuery, useGetUserAffiliateCountQuery, useAddUserAffiliateTagMutation, useGetOMSInfoQuery, useGetAllMarginProductConfigsQuery, useCreateDepositTicketMutation, } = apexApi;
