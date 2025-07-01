import React, { useState, useMemo } from 'react';
import { View } from '../../../components/atoms';
import { FullScreenDropDown, Tabs, ProductPairIcon } from '../../../components/molecules';
import { translate } from '../../../helpers/i18n';
import { testID } from '../../../helpers/testId';
import { useGetProductsQuery } from '../../../services/apexApi';
export const PairHeader = ({ handleSelectedPair, instrumentId, instrumentsData, isLoading, }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dropdownItems = useMemo(() => {
        const filteredData = selectedProduct
            ? instrumentsData.filter((item) => item.Product2 === selectedProduct)
            : instrumentsData;
        return filteredData?.map(item => ({
            title: item.VenueSymbol,
            value: item.InstrumentId,
            icon: () => {
                return (<View marginRight="s">
            <ProductPairIcon size={24} symbol1={item.Product1Symbol} symbol2={item.Product2Symbol}/>
          </View>);
            },
        }));
    }, [selectedProduct, instrumentsData]);
    const { data: products } = useGetProductsQuery();
    const filterOptions = useMemo(() => products?.map(item => ({
        value: item.ProductId,
        label: item.Product,
    })) || [], [products]);
    const handleSelectProduct = (productId) => {
        setSelectedProduct(productId !== selectedProduct ? productId : null);
    };
    const filter = (<Tabs type="pills_wide" data={filterOptions} value={selectedProduct} onChange={handleSelectProduct} wrapperProps={{
            accessibilityLabel: 'Product filter',
            ...testID('product tabs'),
        }}/>);
    return (<FullScreenDropDown header={filter} value={instrumentId} setValue={handleSelectedPair} items={dropdownItems} placeholder={translate('selectAsset')} onClose={() => setSelectedProduct(null)} isLoading={isLoading} accessibilityLabel="Instrument selector" {...testID('instrumentDropdown')}/>);
};
