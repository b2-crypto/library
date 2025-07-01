import React from 'react';
import { StyleSheet } from 'react-native';

import { Box, Text } from '../../../components/atoms';
import { CardModal } from '../../../components/organisms';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { Button, ProductIcon } from '../../../components/molecules';
import { Transfer } from '../../../assets/icons';

import { MarginWalletItemType } from './MarginWalletItem';

type Props = {
  modalVisible: boolean;
  handleClose?: () => void;
  productItem: MarginWalletItemType | undefined;
  onTransferPress: () => void;
};

export const MarginProductDetailsModal = ({
  modalVisible,
  handleClose,
  productItem,
  onTransferPress,
}: Props) => {
  if (!productItem) {
    return null;
  }

  const {
    ProductSymbol,
    ProductFullName,
    TotalAmount,
    DecimalPlaces,
    NotionalProductSymbol,
    TotalAmountNotional,
    AvailableAmount,
    AvailableNotional,
    LiabilityAmount,
    LiabilityAmountNotional,
    OnHoldNotional,
    UsedMargin,
    UsedMarginNotional,
    OnHoldAmount,
  } = productItem;

  return (
    <CardModal
      isVisible={modalVisible}
      onClose={handleClose}
      heading={
        <Box flexDirection="row" alignItems="center">
          <ProductIcon symbol={ProductSymbol} size={32} />
          <Text variant="textBold" color="textPrimary" marginLeft="s">
            {ProductSymbol} {ProductFullName}
          </Text>
        </Box>
      }
      modalStyles={styles.modal}>
      <Box padding="m" gap="m">
        <Box>
          <Text variant="headlineBold" marginTop="xs">
            {formatNumber(TotalAmount, DecimalPlaces)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.productDetails.totalBalance')} (
            {ProductSymbol})
          </Text>
          <Box flexDirection="row" alignItems="flex-end">
            <Text
              variant="bodyBold"
              color="textPrimary"
              marginTop="xs"
              marginRight="xs">
              {formatNumber(TotalAmountNotional)}
            </Text>
            <Text color="textSecondary">
              {translate('marginTrading.productDetails.totalBalance')} (
              {NotionalProductSymbol})
            </Text>
          </Box>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(AvailableAmount, DecimalPlaces)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.productDetails.availableBalance')} (
            {ProductSymbol})
          </Text>
          <Box flexDirection="row" alignItems="flex-end">
            <Text
              variant="bodyBold"
              color="textPrimary"
              marginTop="xs"
              marginRight="xs">
              {formatNumber(AvailableNotional)}
            </Text>
            <Text color="textSecondary">
              {translate('marginTrading.productDetails.availableBalance')} (
              {NotionalProductSymbol})
            </Text>
          </Box>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(OnHoldAmount, DecimalPlaces)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.productDetails.onHold')} ({ProductSymbol})
          </Text>
          <Box flexDirection="row" alignItems="flex-end">
            <Text
              variant="bodyBold"
              color="textPrimary"
              marginTop="xs"
              marginRight="xs">
              {formatNumber(OnHoldNotional)}
            </Text>
            <Text color="textSecondary">
              {translate('marginTrading.productDetails.onHold')} (
              {NotionalProductSymbol})
            </Text>
          </Box>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(LiabilityAmount, DecimalPlaces)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.productDetails.liability')} (
            {ProductSymbol})
          </Text>
          <Box flexDirection="row" alignItems="flex-end">
            <Text
              variant="bodyBold"
              color="textPrimary"
              marginTop="xs"
              marginRight="xs">
              {formatNumber(LiabilityAmountNotional)}
            </Text>
            <Text color="textSecondary">
              {translate('marginTrading.productDetails.liability')} (
              {NotionalProductSymbol})
            </Text>
          </Box>
        </Box>

        <Box>
          <Text variant="headlineBold" color="textPrimary" marginTop="xs">
            {formatNumber(UsedMargin, DecimalPlaces)}
          </Text>
          <Text color="textSecondary">
            {translate('marginTrading.productDetails.usedMargin')} (
            {ProductSymbol})
          </Text>
          <Box flexDirection="row" alignItems="flex-end">
            <Text
              variant="bodyBold"
              color="textPrimary"
              marginTop="xs"
              marginRight="xs">
              {formatNumber(UsedMarginNotional)}
            </Text>
            <Text color="textSecondary">
              {translate('marginTrading.productDetails.usedMargin')} (
              {NotionalProductSymbol})
            </Text>
          </Box>
          <Button
            variant="secondary"
            onPress={onTransferPress}
            label={translate('common.transfer')}
            icon={<Transfer />}
            marginTop="m"
          />
        </Box>
      </Box>
    </CardModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    marginTop: 0,
  },
});
