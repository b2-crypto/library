import React, { useMemo } from 'react';
import { useController } from 'react-hook-form';
import { ProductIcon, SmallDropDown } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { testID } from '../../../../helpers/testId';
export const AssetField = ({ assets, label, isLoading }) => {
    const { field } = useController({
        name: 'productId',
    });
    const options = useMemo(() => assets.map(el => ({
        title: `${el.Product} ${el.ProductFullName}`,
        value: el.ProductId,
        icon: () => <ProductIcon symbol={el.Product} size={24}/>,
    })), [assets]);
    return (<SmallDropDown value={field.value} setValue={field.onChange} items={options} dropDownLabel={label} labelColor="textSecondary" placeholder={translate('selectAsset')} isLoading={isLoading} accessibilityLabel={translate('selectAsset')} {...testID('assetDropdown')} flex={1}/>);
};
