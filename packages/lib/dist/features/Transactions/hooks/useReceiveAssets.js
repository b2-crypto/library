import { useGetProductsQuery } from '../../../services/apexApi';
export const useCryptoAssets = () => {
    return useGetProductsQuery(undefined, {
        selectFromResult: ({ data, ...rest }) => ({
            assets: data?.filter(p => p.ProductType === 'CryptoCurrency') || [],
            ...rest,
        }),
    });
};
export const useFiatAssets = () => {
    return useGetProductsQuery(undefined, {
        selectFromResult: ({ data, ...rest }) => ({
            assets: data?.filter(p => p.ProductType !== 'CryptoCurrency') || [],
            ...rest,
        }),
    });
};
