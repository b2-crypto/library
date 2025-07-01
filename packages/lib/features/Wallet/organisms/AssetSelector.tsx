import React, { useMemo } from 'react';

import { ProductIcon, FullScreenDropDown } from '../../../components/molecules';
import { UserWallet } from '../../../hooks';
import { translate } from '../../../helpers/i18n';

interface AssetSelectorProps {
  setSelectedId: (instrumentId: number) => void;
  product?: UserWallet;
  products: UserWallet[];
  isLoading: boolean;
}

const createProductIcon = (symbol: string) => () =>
  <ProductIcon size={24} symbol={symbol} />;

export const AssetSelector = ({
  product,
  setSelectedId,
  products,
  isLoading,
}: AssetSelectorProps) => {
  const dropdownItems = useMemo(
    () =>
      products?.map(({ Product, ProductId, ProductFullName }) => ({
        title: `${Product} ${ProductFullName}`,
        value: ProductId,
        icon: createProductIcon(Product),
      })) || [],
    [products],
  );

  return (
    <FullScreenDropDown
      value={product?.ProductId}
      setValue={setSelectedId}
      items={dropdownItems}
      placeholder={translate('selectAsset')}
      isLoading={isLoading}
      accessibilityLabel="Product dropdown"
    />
  );
};
