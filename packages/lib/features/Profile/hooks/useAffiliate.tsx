import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useUserInfo } from '../../../hooks';
import {
  useGetUserAffiliateTagQuery,
  useGetUserAffiliateCountQuery,
  useAddUserAffiliateTagMutation,
} from '../../../services/apexApi';
import { useCallback } from 'react';

export const useAffiliate = () => {
  const { data: userInfo } = useUserInfo();
  const apiParams = userInfo
    ? { UserId: userInfo.UserId, OMSId: 1 }
    : skipToken;

  const {
    data: tag,
    isLoading: isTagLoading,
    refetch: refetchTag,
    error: tagError,
  } = useGetUserAffiliateTagQuery(apiParams);

  const {
    data: tagCount,
    isLoading: isCountLoading,
    error: tagCountError,
  } = useGetUserAffiliateCountQuery(apiParams);

  const [addUserAffiliateTag, { error: tagMutationError }] =
    useAddUserAffiliateTagMutation();

  const setTag = useCallback(
    async (newTag: string) => {
      addUserAffiliateTag({
        OMSId: 1,
        UserId: userInfo?.UserId,
        AffiliateTag: newTag,
        AffiliateId: tag?.AffiliateId,
      });
    },
    [addUserAffiliateTag, tag?.AffiliateId, userInfo?.UserId],
  );

  return {
    tag: tag?.AffiliateTag,
    tagCount: tagCount?.Count,
    isLoading: isTagLoading || isCountLoading,
    refetchTag,
    setTag,
    error: tagError || tagCountError || tagMutationError,
  };
};
