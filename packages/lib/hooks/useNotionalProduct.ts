import { skipToken } from '@reduxjs/toolkit/dist/query';
import {
  useGetAccountPositionsQuery,
  useGetProductsQuery,
} from '../services/apexApi';
import { useUserInfo } from './useUserInfo';

export function useNotionalProduct() {
  const { data: userInfo } = useUserInfo();
  const { notionalProduct } = useGetAccountPositionsQuery(
    userInfo?.AccountId ? { accountId: userInfo?.AccountId } : skipToken,
    {
      selectFromResult: ({ data }) => {
        const p = data?.find(i => i.ProductId === i.NotionalProductId);
        return { notionalProduct: p };
      },
    },
  );

  return useGetProductsQuery(undefined, {
    selectFromResult: ({ data }) => {
      if (notionalProduct && data) {
        return {
          notionalProduct: data.find(
            p => p.ProductId === notionalProduct.NotionalProductId,
          ),
        };
      }
      return {};
    },
  });
}
