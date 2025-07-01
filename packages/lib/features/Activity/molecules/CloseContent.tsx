import React, { useCallback } from 'react';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import { Box, Text } from '../../../components/atoms';
import { PositionDetailsTable } from '../../../components/organisms/PositionDetailsTable';
import { translate } from '../../../helpers/i18n';
import { MarginPositionItem } from '../types';
import { useRepaymentOptions } from '../hooks/useRepaymentOptions';
import { CheckableAssetItem } from './CheckableAssetItem';
import { RepaymentAssetOption } from '../../../services';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Props = {
  item: MarginPositionItem;
  onSelectedItemsReady?: (items: RepaymentAssetOption[]) => void;
};

export const CloseContent = ({ item, onSelectedItemsReady }: Props) => {
  const {
    options,
    isLoading,
    error,
    selectedIds,
    selectedItems,
    toggleSelection,
    updateOrder,
  } = useRepaymentOptions(
    item.AccountId,
    item.PositionId,
    item.BorrowedProductId,
  );

  React.useEffect(() => {
    if (onSelectedItemsReady) {
      onSelectedItemsReady(selectedItems);
    }
  }, [onSelectedItemsReady, selectedItems]);

  const renderItem = useCallback(
    ({
      item: repayItem,
      drag,
      isActive,
    }: RenderItemParams<RepaymentAssetOption>) => (
      <ScaleDecorator>
        <CheckableAssetItem
          productId={repayItem.ProductId}
          symbol={repayItem.ProductSymbol}
          fullName={repayItem.ProductFullName}
          amount={repayItem.Amount}
          decimalPlaces={item?.PositionProductDecimalPlaces || 2}
          notional={repayItem.NotionalValue}
          notionalSymbol={item?.Product2Symbol || ''}
          notionalDecimalPlaces={item?.NotionalProductDecimalPlaces || 2}
          isSelected={selectedIds.includes(repayItem.ProductId)}
          onToggle={() => toggleSelection(repayItem.ProductId)}
          drag={drag}
          isActive={isActive}
        />
      </ScaleDecorator>
    ),
    [selectedIds, toggleSelection, item],
  );

  return (
    <Box flex={0} paddingLeft="m" paddingRight="m" mt="s">
      <Box flexDirection="column" alignItems="flex-start">
        <Text variant="captionBold" color="textSecondary" mb="s">
          {translate('activity.closeMarginPositionModal.title')}
        </Text>
        <PositionDetailsTable position={item} />
      </Box>

      <Box
        flexDirection="column"
        justifyContent="center"
        mt="m"
        alignItems="flex-start">
        <Text variant="captionBold" color="textSecondary" mb="s">
          {translate('activity.closeMarginPositionModal.transationDetail')}
        </Text>

        <Box mt="xxs" mb="m" padding="s" backgroundColor="background1">
          <Text variant="captionReg" color="textSecondary" fontSize={12}>
            <Text
              variant="captionReg"
              color="textSecondary"
              textAlign="justify"
              fontSize={12}>
              {translate(
                'activity.closeMarginPositionModal.transactionPoint1',
                {
                  Product1: item.Product1Symbol,
                  Product2: item.Product2Symbol,
                },
              )}
            </Text>
            {'\n'}
            <Text
              variant="captionReg"
              color="textSecondary"
              textAlign="justify"
              fontSize={12}>
              {translate('activity.closeMarginPositionModal.transactionPoint2')}
            </Text>
          </Text>
        </Box>
      </Box>

      <Box mt="xxs">
        {isLoading && <ActivityIndicator />}

        {error && (
          <Text variant="captionReg" color="error">
            {translate('common.error')}
          </Text>
        )}
        <GestureHandlerRootView style={{ flex: 0 }}>
          <DraggableFlatList
            data={options}
            keyExtractor={item => `${item.ProductId}`}
            onDragEnd={({ data }) => {
              requestAnimationFrame(() => updateOrder(data));
            }}
            activationDistance={10}
            renderItem={renderItem}
            animationConfig={{
              damping: 20,
              stiffness: 100,
              mass: 0.5,
              overshootClamping: true,
            }}
          />
        </GestureHandlerRootView>
      </Box>
    </Box>
  );
};
