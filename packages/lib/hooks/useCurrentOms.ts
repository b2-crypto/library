import { skipToken } from '@reduxjs/toolkit/query';

import { useGetOMSInfoQuery } from '../services';

import { useUserInfo } from './useUserInfo';

export function useCurrentOms() {
  const { data: userInfo } = useUserInfo();
  return useGetOMSInfoQuery(
    userInfo ? { operatorId: userInfo.OperatorId } : skipToken,
    {
      selectFromResult: ({ data, ...rest }) => ({
        data: data?.find(oms => (oms.Id || oms.OMSId) === userInfo?.OMSId),
        ...rest,
      }),
    },
  );
}
