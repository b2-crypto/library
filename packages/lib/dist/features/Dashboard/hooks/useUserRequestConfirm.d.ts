export declare const useUserRequestConfirm: () => {
  submitting: boolean;
  onSubmit: (
    type: string | undefined | null,
    requestCode: string,
  ) => Promise<void>;
  error:
    | import('@reduxjs/toolkit/query').FetchBaseQueryError
    | import('@reduxjs/toolkit').SerializedError
    | undefined;
};
