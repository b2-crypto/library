import React from 'react';
import { icons } from '../../assets/icons/product-icons-svg';
import { Text, Box } from '../atoms';
import { testID } from '../../helpers/testId';
export const getProductIcon = (symbol) => {
    const iconName = `${symbol.toString().toLowerCase()}48px`;
    return iconName in icons ? icons[iconName] : null;
};
export const ProductIcon = ({ symbol, size = 36, disabled = false, style, }) => {
    const Icon = getProductIcon(symbol);
    return Icon ? (<Icon height={size} width={size} opacity={disabled ? 0.3 : 1} style={style}/>) : (<Box width={size} height={size} borderRadius={size / 2} backgroundColor="cryptoDefault" alignItems="center" justifyContent="center" accessible accessibilityLabel={symbol} {...testID('productIcon')} style={style}>
      <Text fontSize={size * 0.625} lineHeight={size * 0.75} fontWeight="700" color="textInverse">
        {symbol[0].toUpperCase()}
      </Text>
    </Box>);
};
export const ProductPairIcon = ({ symbol1, symbol2, size = 36, }) => (<Box flexDirection="row" alignItems="center" accessible accessibilityLabel={`${symbol1}${symbol2}`} {...testID('instrumentIcon')}>
    <Box zIndex={9}>
      <ProductIcon symbol={symbol1} size={size}/>
    </Box>
    <Box left={size * -0.22}>
      <ProductIcon symbol={symbol2} size={size}/>
    </Box>
  </Box>);
