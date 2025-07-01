import { useMemo } from 'react';
import { useGetInstrumentWithLevel1 } from '../../../hooks';
import { useGetProductsQuery } from '../../../services/apexApi';
export function useInstrumentsList() {
    const { data: instruments, isLoading: isLoadingInstruments } = useGetInstrumentWithLevel1();
    const { data: products, isLoading: isLoadingProducts } = useGetProductsQuery();
    const marketsData = useMemo(() => instruments.map(instrument => ({
        ...instrument,
        Product1Name: products?.find(p => p.ProductId === instrument.Product1)
            ?.ProductFullName || '',
        Product2Name: products?.find(p => p.ProductId === instrument.Product2)
            ?.ProductFullName || '',
    })), [instruments, products]);
    return {
        data: marketsData,
        isLoading: isLoadingInstruments || !!isLoadingProducts,
    };
}
