import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useMemo } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useUserInfo } from '../../../hooks';
import { useGetProductsQuery, useGetTransferRequestsQuery, } from '../../../services/apexApi';
export const useUserTransferRequests = () => {
    const { data: products, isLoading: productsLoading } = useGetProductsQuery();
    const { data: userInfo } = useUserInfo();
    const { data: requests, isLoading: requestsLoading, refetch, } = useGetTransferRequestsQuery(userInfo?.AccountId ? { AccountId: userInfo.AccountId } : skipToken);
    useFocusEffect(React.useCallback(() => {
        if (userInfo?.AccountId) {
            refetch();
        }
    }, [userInfo?.AccountId]));
    const data = useMemo(() => requests?.map(el => {
        const product = products?.find(pr => pr.ProductId === el.ProductId);
        return {
            requestCode: el.RequestCode,
            symbol: product?.Product || '',
            amount: el.Amount,
            decimalPlaces: product?.DecimalPlaces || 2,
            note: el.Notes,
            requestorUsername: el.RequestorUsername,
            date: el.CreatedTimestamp,
        };
    }), [requests, products]);
    return {
        data,
        isLoading: productsLoading || requestsLoading,
        refetch,
    };
};
