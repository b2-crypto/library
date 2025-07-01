import { translate } from '../helpers/i18n';
import { commonError } from '../helpers/constants';
import { apexApi } from './apexApi';
const sumsubApi = apexApi.injectEndpoints({
    endpoints: builder => ({
        validateUserRegistration: builder.mutation({
            query: body => ({
                url: '/ValidateUserRegistration',
                method: 'POST',
                body,
            }),
            transformResponse: (res) => {
                if (!res.result) {
                    throw new Error(translate(commonError));
                }
                return JSON.parse(res.result);
            },
        }),
    }),
});
export const { useValidateUserRegistrationMutation } = sumsubApi;
