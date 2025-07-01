import React, { useMemo } from 'react';

import { translate } from '../../../../helpers/i18n';
import { AmountFieldAsset } from '../../types';

import { Box, Text } from '../../../../components/atoms';
import { ProductAmountField } from '../molecules';

type Props = {
  /** Available products for From field (used for dropdown options) */
  fromProducts: Array<AmountFieldAsset>;
  /** Available products for To field (used for dropdown options) */
  toProducts: Array<AmountFieldAsset>;
  /** Default (initial) product ID for the From field */
  defaultFromProduct?: number;
  /** Default (initial) product ID for the To field */
  defaultToProduct?: number;
  /** Currently anchored field */
  anchored: 'from' | 'to' | null;
  /** Decimal places for the From value */
  fromDecimalPlaces?: number;
  /** Decimal places for the To value */
  toDecimalPlaces?: number;
  /** Callback to change new anchored field */
  setAnchored: (newValue: 'from' | 'to' | null) => void;
};

/**
 * Renders the form body (From and To fields) for the Convert form.
 */
export const ConvertFormBody = ({
  fromProducts,
  toProducts,
  defaultFromProduct,
  defaultToProduct,
  anchored,
  fromDecimalPlaces,
  toDecimalPlaces,
  setAnchored,
}: Props) => {
  const estimatedText = useMemo(
    () => (
      <Text variant="captionReg" color="textSecondary">
        {translate('transactions.estimated_suffix')}
      </Text>
    ),
    [],
  );

  return (
    <Box paddingHorizontal="l">
      <Box mb="s">
        <ProductAmountField
          assetFieldName="from.productId"
          amountFieldName="from.amount"
          showNotionalValue
          label={translate('transactions.from')}
          products={fromProducts}
          defaultProductId={defaultFromProduct}
          isFocused={anchored === 'from'}
          onFocus={() => setAnchored('from')}
          suffix={anchored === 'to' ? estimatedText : undefined}
          showMaxButton
          decimalPlaces={fromDecimalPlaces}
        />
      </Box>
      <ProductAmountField
        assetFieldName="to.productId"
        amountFieldName="to.amount"
        showNotionalValue
        label={translate('transactions.to')}
        products={toProducts}
        defaultProductId={defaultToProduct}
        isFocused={anchored === 'to'}
        onFocus={() => setAnchored('to')}
        suffix={anchored === 'from' ? estimatedText : undefined}
        decimalPlaces={toDecimalPlaces}
      />
    </Box>
  );
};
