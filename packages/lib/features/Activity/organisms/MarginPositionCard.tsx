import * as React from 'react';
import { PositionLong, PositionShort } from '../../../assets/icons';
import { Box, DashedBox, Text } from '../../../components/atoms';
import { Button, Card, ProductPairIcon } from '../../../components/molecules';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { testID } from '../../../helpers/testId';
import { MarginPositionItem } from '../types';

type Props = {
  item: MarginPositionItem;
  onCancel?: () => void;
  onClose?: () => void;
  onRepay?: () => void;
  cancelLoading?: boolean;
  error?: string;
  isProcessed?: boolean;
};

export const MarginPositionCard = ({
  item,
  onCancel,
  onClose,
  onRepay,
  cancelLoading,
  error,
  isProcessed = false,
}: Props) => {
  return (
    <Card
      variant="elevated"
      margin="m"
      heading={
        <Box
          flexDirection="row"
          alignItems="center"
          accessible
          accessibilityLabel="Title"
          {...testID('title')}>
          <ProductPairIcon
            symbol1={item.Product1Symbol}
            symbol2={item.Product2Symbol}
          />
          <Box
            flexDirection="column"
            ml="sm"
            justifyContent="center"
            alignItems="flex-start">
            <Text variant="subHeadlineBold">
              {item.PositionType} {item.PositionProductSymbol}
            </Text>
            <Text variant="captionBold" color="textSecondary" mt="xs">
              {item.InstrumentSymbol}
            </Text>
          </Box>
        </Box>
      }
      headingExtra={
        <Box
          width={36}
          height={36}
          alignItems="center"
          justifyContent="center"
          borderWidth={2}
          borderRadius={36}
          borderColor="border3">
          {item.PositionType === 'Long' && <PositionLong />}
          {item.PositionType === 'Short' && <PositionShort />}
        </Box>
      }
      footer={
        item.Status === 'Open' && (
          <>
            <Box flex={0} flexDirection="column">
              {!!error && (
                <Text color="error" textAlign="center" mb="m">
                  {error}
                </Text>
              )}
              {!isProcessed && (
                <Box flex={0} flexDirection="row" justifyContent="space-around">
                  {item.PositionState === 'Open' &&
                    item.BorrowedAmount === 0 &&
                    onCancel && (
                      <Button
                        loading={cancelLoading}
                        variant="brandOpposite"
                        label={translate(
                          'activity.marginPosition.cancelButton',
                        )}
                        onPress={onCancel}
                        size="big"
                        padding="s"
                        paddingRight="xl"
                        paddingLeft="xl"
                      />
                    )}
                  {item.PositionState === 'Open' && onClose && (
                    <Button
                      loading={cancelLoading}
                      variant="brandOpposite"
                      label={translate('activity.marginPosition.closeButton')}
                      onPress={onClose}
                      size="big"
                      padding="s"
                      paddingRight="xl"
                      paddingLeft="xl"
                    />
                  )}
                  {onRepay && (
                    <Button
                      loading={cancelLoading}
                      variant="brandOpposite"
                      label={translate('activity.marginPosition.repayButton')}
                      onPress={onRepay}
                      size="big"
                      padding="s"
                      paddingRight="xl"
                      paddingLeft="xl"
                    />
                  )}
                </Box>
              )}
            </Box>
          </>
        )
      }>
      <Box my="sm" mx="m">
        <DashedBox
          bottomDash
          borderColor="formBorder"
          py="sm"
          flexDirection="row"
          justifyContent="space-between">
          <Box width="30%">
            <Text variant="captionBold">
              {formatNumber(
                item.PositionAmount,
                item.BorrowedProductDecimalPlaces,
                true,
              )}
            </Text>
            <Text variant="captionReg" color="textSecondary" mt="xxs">
              {translate('activity.marginPosition.amount', {
                symbol: item.BorrowedProductSymbol,
              })}
            </Text>
          </Box>
          <Box width="40%">
            <Text variant="captionBold">
              {formatNumber(
                item.NotionalValue,
                item.NotionalProductDecimalPlaces,
                true,
              )}
            </Text>
            <Text variant="captionReg" color="textSecondary" mt="xxs">
              {translate('activity.marginPosition.value', {
                symbol: item.NotionalProductSymbol,
              })}
            </Text>
          </Box>
          <Box width="25%">
            <Text variant="captionBold">
              {formatNumber(
                item.BorrowedAmount,
                item.BorrowedProductDecimalPlaces,
                true,
              )}
            </Text>
            <Text variant="captionReg" color="textSecondary" mt="xxs">
              {translate('activity.marginPosition.borrowed', {
                symbol: item.BorrowedProductSymbol,
              })}
            </Text>
          </Box>
        </DashedBox>
        <Box py="sm" flexDirection="row" justifyContent="space-between">
          <Box width="30%">
            <Text variant="captionBold">
              {formatNumber(
                item.NotionalCostBasis,
                item.NotionalProductDecimalPlaces,
                true,
              )}
            </Text>
            <Text variant="captionReg" color="textSecondary" mt="xxs">
              {translate('activity.marginPosition.costBasis', {
                symbol: item.NotionalProductSymbol,
              })}
            </Text>
          </Box>
          <Box width="40%">
            <Text variant="captionBold">
              {formatNumber(
                item.InterestAccrued,
                item.PositionProductDecimalPlaces,
                true,
              )}
            </Text>
            <Text variant="captionReg" color="textSecondary" mt="xxs">
              {translate('activity.marginPosition.interestAccured', {
                symbol: item.PositionProductSymbol,
              })}
            </Text>
          </Box>
          <Box width="25%">
            {item.Status === 'Open' ? (
              <>
                <Text
                  variant="captionBold"
                  color={item.UnrealizedPnL < 0 ? 'error' : undefined}>
                  {item.UnrealizedPnL < 0
                    ? `(${formatNumber(
                        Math.abs(item.UnrealizedPnL),
                        item.NotionalProductDecimalPlaces,
                        true,
                      )})`
                    : formatNumber(
                        item.UnrealizedPnL,
                        item.NotionalProductDecimalPlaces,
                        true,
                      )}
                </Text>
                <Text variant="captionReg" color="textSecondary" mt="xxs">
                  {translate('activity.marginPosition.unrealizedPnL')}
                </Text>
              </>
            ) : (
              <>
                <Text
                  variant="captionBold"
                  color={item.RealizedPnL < 0 ? 'error' : undefined}>
                  {item.RealizedPnL < 0
                    ? `(${formatNumber(
                        Math.abs(item.RealizedPnL),
                        item.NotionalProductDecimalPlaces,
                        true,
                      )})`
                    : formatNumber(
                        item.RealizedPnL,
                        item.NotionalProductDecimalPlaces,
                        true,
                      )}
                </Text>
                <Text variant="captionReg" color="textSecondary" mt="xxs">
                  {translate('activity.marginPosition.realizedPnL')}
                </Text>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
