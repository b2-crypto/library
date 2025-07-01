import { useMemo } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useUserInfo } from '../../../hooks';
import { useGetAccountWithdrawInfosQuery, useGetVerificationLevelConfigQuery, useGetWithdrawTemplateInfoQuery, useGetWithdrawTemplateTypesQuery, } from '../../../services/apexApi';
export function useWithrawTemplates(productId, providerId) {
    const { data: userInfo } = useUserInfo();
    const { data: templatesData, isLoading: templatesLoading } = useGetWithdrawTemplateTypesQuery(userInfo?.AccountId && productId
        ? { AccountId: userInfo.AccountId, ProductId: productId }
        : skipToken);
    const templates = useMemo(() => templatesData?.TemplateTypes || [], [templatesData]);
    const templateType = templates.find(t => t.AccountProviderId === providerId);
    const { data: templateInfo, isLoading: templateInfoLoading, originalArgs: templateInfoArgs, } = useGetWithdrawTemplateInfoQuery(productId && templateType ? { productId, ...templateType } : skipToken);
    const { productConfig } = useGetVerificationLevelConfigQuery(userInfo?.AccountId ? { accountId: userInfo.AccountId } : skipToken, {
        selectFromResult: ({ data, isLoading }) => ({
            productConfig: data?.Products.find(p => p.ProductId === productId),
            isLoading,
        }),
    });
    const { allowedAddressOptions } = useGetAccountWithdrawInfosQuery(userInfo?.AccountId && productConfig?.RequireWhitelistedAddress
        ? { accountId: userInfo.AccountId }
        : skipToken, {
        selectFromResult: ({ data, isLoading }) => ({
            allowedAddressOptions: data
                ?.filter(a => a.ProductId === productId)
                .map(a => ({
                value: a.AccountIdentifier,
                title: `${a.Name} - ${a.AccountIdentifier}`,
                disabled: !a.Verified,
            })) || [],
            isLoading,
        }),
    });
    return {
        templates,
        templateInfo: templateInfoArgs?.AccountProviderId === providerId &&
            templateInfoArgs?.productId === productId
            ? templateInfo
            : undefined,
        templatesLoading,
        templateInfoLoading,
        requireWhitelistedAddress: productConfig?.RequireWhitelistedAddress,
        allowedAddressOptions: productConfig?.RequireWhitelistedAddress
            ? allowedAddressOptions
            : undefined,
    };
}
