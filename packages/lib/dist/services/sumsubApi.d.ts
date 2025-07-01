import { ValidateUserRegistrationRequest } from '../types/apiRequests';
import { ValidateUserRegistrationResponse } from '../types/apiResponses';
export declare const useValidateUserRegistrationMutation: import('@reduxjs/toolkit/dist/query/react/buildHooks').UseMutation<
  import('@reduxjs/toolkit/query').MutationDefinition<
    ValidateUserRegistrationRequest,
    import('@reduxjs/toolkit/query').BaseQueryFn<
      string | import('@reduxjs/toolkit/query').FetchArgs,
      unknown,
      import('@reduxjs/toolkit/query').FetchBaseQueryError
    >,
    string,
    ValidateUserRegistrationResponse,
    'apexApi'
  >
>;
