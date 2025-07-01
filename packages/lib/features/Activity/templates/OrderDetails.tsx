import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import camelCase from 'lodash/camelCase';

import { Box, Text } from '../../../components/atoms';
import { CloseIcon } from '../../../assets/icons';
import { translate } from '../../../helpers/i18n';
import { orderSideToImage } from '../../../helpers/activity';
import { formatUSD, formatCrypto } from '../../../helpers/format';
import { commonError } from '../../../helpers/constants';
import { OrderActivity } from '../../../types/apiResponses';
import { isApexError } from '../../../types/apiResponses';
import { useModalControl } from '../../../hooks';

import {
  ProductPairIcon,
  Button,
  ModalBlurBg,
  Card,
} from '../../../components/molecules';
import { ActivityDetailsCard } from '../organisms';
import { useCancelOrder } from '../hooks';

export const OrderDetails = ({
  item,
  onOrderCancel,
}: {
  item: OrderActivity;
  onOrderCancel?: () => void;
}) => {
  const isOpen = item.status === 'Working';
  const { modalVisible, hideModal, showModal } = useModalControl();
  const [cancelOrder, { isLoading: cancelingOrder, isError, error }] =
    useCancelOrder();

  const handlePress = async () => {
    await cancelOrder(item.id).unwrap();
    onOrderCancel?.();
  };

  return (
    <>
      <ActivityDetailsCard
        title={item.symbol}
        icon={
          item.iconSymbols ? (
            <ProductPairIcon
              symbol1={item.iconSymbols[0]}
              symbol2={item.iconSymbols[1]}
            />
          ) : undefined
        }
        extraIcon={orderSideToImage(item.side)}
        amount={formatCrypto(item.amount, item.decimalPlaces)}
        currency={item.currency}
        product={item.symbol}
        activityType={item.side}
        activityTypeColor={item.side === 'Buy' ? 'buy' : 'sell'}
        orderType={item.type}
        valuesInfo={[
          {
            title: translate('activity.avgPrice'),
            value: formatUSD(item.avgPrice),
          },
          ...(item.limitPrice
            ? [
                {
                  title: translate('activity.limitPrice'),
                  value: formatUSD(item.limitPrice),
                },
              ]
            : []),
        ]}
        activityStatus={translate(
          `activity.orderStatus.${camelCase(item.status)}`,
        )}
        activityTextColor={
          isOpen
            ? 'buy'
            : item.status === 'FullyExecuted'
            ? 'textSecondary'
            : 'error'
        }
        activityId={item.id}
        time={item.timestamp}
        footer={
          isOpen ? (
            <Button
              loading={cancelingOrder}
              variant="danger"
              label={translate('activity.cancelOrder')}
              onPress={showModal}
              flex={0}
              marginVertical="none"
            />
          ) : undefined
        }
        error={
          isError
            ? isApexError(error)
              ? error.message
              : translate(commonError)
            : null
        }
      />
      {isOpen && (
        <ModalBlurBg
          isVisible={modalVisible}
          onBackdropPress={hideModal}
          style={styles.modal}>
          <Card
            variant="elevated"
            heading={translate('activity.cancelOrderModal.heading')}
            headingExtra={
              <Pressable onPress={hideModal}>
                <CloseIcon />
              </Pressable>
            }
            footer={
              <Button
                size="big"
                onPress={handlePress}
                label={translate('confirm')}
                loading={cancelingOrder}
              />
            }>
            <Box padding="m">
              <Text color="textSecondary" textAlign="center">
                {translate('activity.cancelOrderModal.message')}
              </Text>
            </Box>
          </Card>
        </ModalBlurBg>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modal: { justifyContent: 'flex-start', marginTop: 100 },
});
