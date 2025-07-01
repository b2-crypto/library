import { ValidateUserRegistrationRequest } from '../types/apiRequests';
import {
  ValidateUserRegistrationResponse,
  ValidateUserRegistrationResponseRaw,
} from '../types/apiResponses';
import { translate } from '../helpers/i18n';
import { commonError } from '../helpers/constants';

import { apexApi } from './apexApi';

const sumsubApi = apexApi.injectEndpoints({
  endpoints: builder => ({
    validateUserRegistration: builder.mutation<
      ValidateUserRegistrationResponse,
      ValidateUserRegistrationRequest
    >({
      query: body => ({
        url: '/ValidateUserRegistration',
        method: 'POST',
        body,
      }),
      transformResponse: (res: ValidateUserRegistrationResponseRaw) => {
        if (!res.result) {
          throw new Error(translate(commonError));
        }
        return JSON.parse(res.result) as ValidateUserRegistrationResponse;
      },
    }),
  }),
});

export const { useValidateUserRegistrationMutation } = sumsubApi;
