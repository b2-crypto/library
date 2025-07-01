import React from 'react';
import { useTheme } from '@shopify/restyle';
import { translate } from '../../helpers/i18n';
import { Box, Text } from '../atoms';
import { NoConnection } from '../../assets/icons';
const shadow = {
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 14,
    shadowOpacity: 0.1,
    elevation: 10,
};
export const ConnectionAlert = ({ inversed }) => {
    const theme = useTheme();
    const colors = inversed
        ? { bg: 'white', icon: 'brandSolid', text: 'textPrimary' }
        : { bg: 'brandSolid', icon: 'white', text: 'textInverse' };
    return (<Box bg={colors.bg} margin="m" padding="xl" justifyContent="center" alignItems="center" borderRadius={6} {...shadow}>
      <NoConnection height={75} width={100} fill={theme.colors[colors.icon]}/>
      <Text variant="textBold" color={colors.text} marginVertical="m" textAlign="center">
        {translate('connection.title')}
      </Text>
      <Text color={colors.text} textAlign="center">
        {translate('connection.text')}
      </Text>
    </Box>);
};
