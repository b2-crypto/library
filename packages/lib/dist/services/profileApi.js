import { apexApi, TAGS } from './apexApi';
export const profileApi = apexApi.injectEndpoints({
    endpoints: builder => ({
        getUserConfig: builder.query({
            providesTags: [TAGS.USER_CONFIG],
            query: body => ({
                url: '/GetUserConfig',
                method: 'POST',
                body: 'userId' in body
                    ? { OMSId: 1, UserId: body.userId }
                    : { OMSId: 1, UserName: body.userName },
            }),
            transformResponse: (res) => {
                return res.reduce((acc, item) => {
                    acc[item.Key] = item.Value;
                    return acc;
                }, {});
            },
        }),
        setUserConfig: builder.mutation({
            invalidatesTags: [TAGS.USER_CONFIG],
            query: body => ({
                url: '/SetUserConfig',
                method: 'POST',
                body: 'userId' in body
                    ? { OMSId: 1, UserId: body.userId, Config: body.config }
                    : { OMSId: 1, UserName: body.userName, Config: body.config },
            }),
        }),
        getUserAccounts: builder.query({
            providesTags: [TAGS.USER_ACCOUNTS],
            queryFn: async (_args, _api, _extraOptions, baseQuery) => {
                const accountNumbers = await baseQuery({
                    url: '/GetUserAccounts',
                    method: 'POST',
                    body: { OMSId: 1 },
                });
                if ('data' in accountNumbers) {
                    const accounts = await Promise.all(accountNumbers.data.map(accountId => baseQuery({
                        url: '/GetAccountInfo',
                        method: 'POST',
                        body: { OMSId: 1, AccountId: accountId },
                    })));
                    return {
                        data: accounts
                            .map(r => 'data' in r && r.data)
                            .filter(Boolean),
                    };
                }
                return { error: accountNumbers.error };
            },
        }),
        getAccountInfo: builder.query({
            query: body => ({
                url: '/GetAccountInfo',
                method: 'POST',
                body: { OMSId: 1, AccountId: body.accountId },
            }),
        }),
        authenticate2FA: builder.mutation({
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
        enableGoogle2FA: builder.mutation({
            query: body => ({
                url: '/EnableGoogle2FA',
                method: 'POST',
                body,
            }),
        }),
        disable2FA: builder.mutation({
            query: body => ({
                url: '/Disable2FA',
                method: 'POST',
                body,
                validateStatus(response, responseBody) {
                    return response.status === 200 && responseBody.result;
                },
            }),
        }),
        resetPassword: builder.mutation({
            query: body => ({
                url: '/ResetPassword',
                method: 'POST',
                body,
                validateStatus(response, responseBody) {
                    return response.status === 200 && responseBody.result;
                },
            }),
        }),
        resendVerificationEmail: builder.mutation({
            query: body => ({
                url: '/ResendVerificationEmail',
                method: 'POST',
                body,
            }),
        }),
    }),
});
export const { useGetUserConfigQuery, useSetUserConfigMutation, useGetUserAccountsQuery, useGetAccountInfoQuery, useEnableGoogle2FAMutation, useAuthenticate2FAMutation, useDisable2FAMutation, useResetPasswordMutation, useResendVerificationEmailMutation, } = profileApi;
