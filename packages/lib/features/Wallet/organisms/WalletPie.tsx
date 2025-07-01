import React, { useMemo } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { formatCurrency } from '../../../helpers/format';
import { useWallets } from '../../../hooks';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectWalletList } from '../../../stores/wallet';
import { Box, Text } from '../../../components/atoms';
import { PieChart } from '../../../components/molecules';
import { Theme } from '../../../theme';
import { icons } from '../../../assets/icons/product-icons-svg';
import { testID } from '../../../helpers/testId';

type WalletPieProps = {
  isReadyToLoad?: boolean;
};

export const WalletPie = ({ isReadyToLoad }: WalletPieProps) => {
  const theme = useTheme<Theme>();

  const { data, isLoading } = useWallets({ skipQuery: !isReadyToLoad });

  const walletList = useAppSelector(selectWalletList);
  const filteredData = useMemo(() => {
    return data
      .filter(el => walletList?.[el.ProductId] !== false && el.Amount > 0)
      .sort((a, b) => (!a.Amount ? 1 : !b.Amount ? -1 : 0));
  }, [data, walletList]);

  const colors = useMemo(() => {
    return filteredData.map(el => {
      const Icon = icons[`${el.ProductSymbol.toLowerCase()}48px`];
      return Icon?.color || '#9391E7';
    });
  }, [filteredData]);

  const pieData = useMemo(() => {
    return filteredData.map(el => ({
      value: el.NotionalValue || 1,
    }));
  }, [filteredData]);

  const totalBalance = useMemo(() => {
    return filteredData?.reduce((a, b) => a + b.NotionalValue, 0);
  }, [filteredData]);

  return !isReadyToLoad || isLoading ? (
    <ActivityIndicator size="large" style={styles.spinner} />
  ) : (
    <Box
      justifyContent="center"
      alignItems="center"
      paddingTop="xl"
      marginBottom="s">
      <PieChart
        data={pieData}
        colors={colors}
        wrapperStyles={{ marginBottom: theme.spacing.l }}
        height={150}
        width={150}
      />
      <Text
        variant="headlineBold"
        color="textPrimary"
        accessible
        accessibilityLabel="Total Balance"
        {...testID('totalBalance')}>
        {isLoading
          ? ''
          : formatCurrency(
              totalBalance,
              filteredData[0]?.NotionalProductSymbol,
              filteredData[0]?.NotionalDecimalPlaces,
            )}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  spinner: {
    margin: 20,
  },
});
