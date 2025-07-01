import React from 'react';
import { Box, Text, TouchableOpacity } from '../../../components/atoms';
import { ProductIcon } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
export const WalletItem = ({ symbol, name, subTitle, amount, secondaryAmount, subTitleColor = 'textSecondary', onPress, }) => {
    const subTitleComponent = (<Text variant="bodyBold" color={subTitleColor} {...testID(`${symbol}Subtitle`)}>
      {subTitle}
    </Text>);
    return (<Box flexDirection="row" justifyContent="space-between" alignItems="center" padding="l" paddingRight="m">
      <Box flexDirection="row" alignItems="center">
        <ProductIcon symbol={symbol} size={44}/>
        <Box marginLeft="m">
          <Text variant="subHeadlineBold" marginBottom="s" {...testID(`${symbol}Name`)}>
            {name}
          </Text>
          {onPress ? (<TouchableOpacity onPress={onPress}>
              {subTitleComponent}
            </TouchableOpacity>) : (subTitleComponent)}
        </Box>
      </Box>
      <Box flex={1} maxWidth="50%" paddingLeft="m">
        <Text textAlign="right" variant="subHeadlineReg" {...testID(`${symbol}Amount`)} numberOfLines={1} ellipsizeMode="tail">
          {amount || '—'}
        </Text>
        {!!secondaryAmount && (<Text textAlign="right" fontWeight="700" variant="bodyBold" color="textSecondary" marginTop="xs" {...testID(`${symbol}NotionalAmount`)} numberOfLines={1} ellipsizeMode="tail">
            {secondaryAmount}
          </Text>)}
      </Box>
    </Box>);
};
