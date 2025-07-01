import React from 'react';
import { Box, Checkbox, Text } from '../../../components/atoms';
import { TouchableOpacity } from 'react-native';
export const CheckableAssetItem = ({ productId, symbol, fullName, amount, decimalPlaces, notional, notionalSymbol, notionalDecimalPlaces, isSelected, onToggle, drag, isActive, }) => {
    return (<Box key={productId} flexDirection="row" alignItems="center" paddingVertical="xs" mb="xxs" borderBottomWidth={1} borderColor="textInverse" position="relative" backgroundColor={isSelected ? 'formBackground' : 'background1'}>
      {/* Checkbox visual */}
      <TouchableOpacity onPress={onToggle}>
        <Box width={20} height={20} borderRadius={4} justifyContent="center" alignItems="center" mr="s" ml="s">
          <Checkbox checked={isSelected} onChange={onToggle}/>
        </Box>
      </TouchableOpacity>

      {/* Info */}
      <Box flex={1} alignContent="center" flexDirection="column" justifyContent="space-between" style={{ zIndex: 10 }}>
        {/* Drag handle */}
        <TouchableOpacity onPressIn={drag} onLongPress={drag} disabled={isActive}>
          <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text variant="captionReg" numberOfLines={1} ellipsizeMode="tail" ml="s" fontSize={12}>
              {symbol} - {fullName}
            </Text>

            <Box flexDirection="row" alignItems="center">
              <Box alignItems="flex-end" mr="s">
                <Box flexDirection="row" alignItems="center">
                  <Text variant="bodyBold" color="textPrimary" fontSize={10}>
                    {`${amount.toFixed(decimalPlaces)} `}
                  </Text>
                  <Text variant="bodyReg" color="textPrimary" fontSize={8}>
                    {`${symbol}`}
                  </Text>
                </Box>

                <Text variant="bodyReg" color="textSecondary" fontSize={8}>
                  {`≈ ${notional.toFixed(notionalDecimalPlaces)} ${notionalSymbol}`}
                </Text>
              </Box>
              <Box height={30} borderLeftWidth={1} borderLeftColor="textInverse">
                <Text fontSize={18} variant="bodyBold" mt="s" ml="s" mr="s">
                  ⋮⋮
                </Text>
              </Box>
            </Box>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>);
};
