import React, { useState, useMemo } from 'react';

import { View } from '../../../components/atoms';
import { FullScreenDropDown, Tabs , ProductPairIcon } from '../../../components/molecules';
import { InstrumentLevel1 } from '../../../hooks';
import { IInstrumentWithLevel1 } from '../../../types/apiResponses';
import { translate } from '../../../helpers/i18n';
import { testID } from '../../../helpers/testId';
import { useGetProductsQuery } from '../../../services/apexApi';

interface PairHeaderProps {
  handleSelectedPair: (instrumentId: number) => void;
  instrumentId?: number;
  instrumentsData: InstrumentLevel1[];
  isLoading?: boolean;
}

export const PairHeader = ({
  handleSelectedPair,
  instrumentId,
  instrumentsData,
  isLoading,
}: PairHeaderProps) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const dropdownItems = useMemo(() => {
    const filteredData = selectedProduct
      ? instrumentsData.filter(
          (item: IInstrumentWithLevel1) => item.Product2 === selectedProduct,
        )
      : instrumentsData;

    return filteredData?.map(item => ({
      title: item.VenueSymbol,
      value: item.InstrumentId,
      icon: () => {
        return (
          <View marginRight="s">
            <ProductPairIcon
              size={24}
              symbol1={item.Product1Symbol}
              symbol2={item.Product2Symbol}
            />
          </View>
        );
      },
    }));
  }, [selectedProduct, instrumentsData]);

  const { data: products } = useGetProductsQuery();

  const filterOptions = useMemo(
    () =>
      products?.map(item => ({
        value: item.ProductId,
        label: item.Product,
      })) || [],
    [products],
  );

  const handleSelectProduct = (productId: number) => {
    setSelectedProduct(productId !== selectedProduct ? productId : null);
  };

  const filter = (
    <Tabs
      type="pills_wide"
      data={filterOptions}
      value={selectedProduct}
      onChange={handleSelectProduct}
      wrapperProps={{
        accessibilityLabel: 'Product filter',
        ...testID('product tabs'),
      }}
    />
  );

  return (
    <FullScreenDropDown
      header={filter}
      value={instrumentId}
      setValue={handleSelectedPair}
      items={dropdownItems}
      placeholder={translate('selectAsset')}
      onClose={() => setSelectedProduct(null)}
      isLoading={isLoading}
      accessibilityLabel="Instrument selector"
      {...testID('instrumentDropdown')}
    />
  );
};
