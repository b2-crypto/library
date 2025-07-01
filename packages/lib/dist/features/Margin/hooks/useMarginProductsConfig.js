import { useGetAllMarginProductsConfigsQuery } from '../../../services';
export function useMarginProductsConfig() {
    const { data: marginProductsConfig, isLoading } = useGetAllMarginProductsConfigsQuery();
    return { marginProductsConfig, isLoading };
}
