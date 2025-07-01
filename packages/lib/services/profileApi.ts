import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import {
  ApexResponse,
  Auth2FAResponseType,
  Auth2FAType,
  GetAccountInfoResponse,
  ResetPasswordResponseType,
  ResetPasswordType,
  GetUserConfigRawResponse,
  GetUserConfigResponse,
} from '../types/apiResponses';

import { apexApi, TAGS } from './apexApi';

export const profileApi = apexApi.injectEndpoints({
  endpoints: builder => ({
    getUserConfig: builder.query<
      Partial<GetUserConfigResponse>,
      { userId: number } | { userName: string }
    >({
      providesTags: [TAGS.USER_CONFIG],
      query: body => ({
        url: '/GetUserConfig',
        method: 'POST',
        body:
          'userId' in body
            ? { OMSId: 1, UserId: body.userId }
            : { OMSId: 1, UserName: body.userName },
      }),
      transformResponse: (res: GetUserConfigRawResponse) => {
        return res.reduce((acc, item) => {
          acc[item.Key] = item.Value;
          return acc;
        }, {} as Record<string, string>);
      },
    }),
    setUserConfig: builder.mutation<
      Partial<GetUserConfigResponse>,
      { userId?: number; userName?: string; config: any }
    >({
      invalidatesTags: [TAGS.USER_CONFIG],
      query: body => ({
        url: '/SetUserConfig',
        method: 'POST',
        body:
          'userId' in body
            ? { OMSId: 1, UserId: body.userId, Config: body.config }
            : { OMSId: 1, UserName: body.userName, Config: body.config },
      }),
    }),
    getUserAccounts: builder.query<Array<GetAccountInfoResponse>, void>({
      providesTags: [TAGS.USER_ACCOUNTS],
      queryFn: async (_args, _api, _extraOptions, baseQuery) => {
        const accountNumbers = await baseQuery({
          url: '/GetUserAccounts',
          method: 'POST',
          body: { OMSId: 1 },
        });
        if ('data' in accountNumbers) {
          const accounts = await Promise.all(
            (accountNumbers.data as number[]).map(accountId =>
              baseQuery({
                url: '/GetAccountInfo',
                method: 'POST',
                body: { OMSId: 1, AccountId: accountId },
              }),
            ),
          );
          return {
            data: accounts
              .map(r => 'data' in r && r.data)
              .filter(Boolean) as Array<GetAccountInfoResponse>,
          };
        }
        return { error: accountNumbers.error as FetchBaseQueryError };
      },
    }),
    getAccountInfo: builder.query<
      GetAccountInfoResponse,
      { accountId: number }
    >({
      query: body => ({
        url: '/GetAccountInfo',
        method: 'POST',
        body: { OMSId: 1, AccountId: body.accountId },
      }),
    }),
    authenticate2FA: builder.mutation<Auth2FAResponseType, Auth2FAType>({
      query: body => ({
        url: '/Authenticate2FA',
        method: 'POST',
        headers: body.pending2FaToken
          ? { pending2FaToken: body.pending2FaToken }
          : undefined,
        body: { code: body.code },
        validateStatus(response, responseBody) {
          return response.status === 200 && responseBody.Authenticated;
        },
      }),
    }),
    enableGoogle2FA: builder.mutation<
      { GoogleQRCode: string; ManualCode: string },
      void
    >({
      query: body => ({
        url: '/EnableGoogle2FA',
        method: 'POST',
        body,
      }),
    }),
    disable2FA: builder.mutation<ApexResponse, void>({
      query: body => ({
        url: '/Disable2FA',
        method: 'POST',
        body,
        validateStatus(response, responseBody) {
          return response.status === 200 && responseBody.result;
        },
      }),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponseType,
      ResetPasswordType
    >({
      query: body => ({
        url: '/ResetPassword',
        method: 'POST',
        body,
        validateStatus(response, responseBody) {
          return response.status === 200 && responseBody.result;
        },
      }),
    }),
    resendVerificationEmail: builder.mutation<ApexResponse, { Email: string }>({
      query: body => ({
        url: '/ResendVerificationEmail',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetUserConfigQuery,
  useSetUserConfigMutation,
  useGetUserAccountsQuery,
  useGetAccountInfoQuery,
  useEnableGoogle2FAMutation,
  useAuthenticate2FAMutation,
  useDisable2FAMutation,
  useResetPasswordMutation,
  useResendVerificationEmailMutation,
} = profileApi;
