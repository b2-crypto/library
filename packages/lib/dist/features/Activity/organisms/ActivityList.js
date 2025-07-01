import React, { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { translate } from '../../../helpers/i18n';
import { Box, DashedBox, Text } from '../../../components/atoms';
import { Card } from '../../../components/molecules';
import { ActivityImage } from '../molecules';
import { Line } from '../../../assets/icons';
import { testID } from '../../../helpers/testId';
const EmptyComponent = () => (<Card variant="elevated" marginHorizontal="m" marginVertical="s" padding="m" flexDirection="row" alignItems="center">
    <ActivityImage>
      <Line />
    </ActivityImage>
    <Box flex={1}>
      <Text variant="textBold" accessible accessibilityLabel="Empty list" {...testID('emptyList')}>
        {translate('activity.emptyList')}
      </Text>
    </Box>
    <Text variant="bodyBold">—</Text>
  </Card>);
const FooterComponent = () => (<Box height={50} justifyContent="center" alignItems="center">
    <ActivityIndicator size="small"/>
  </Box>);
const defaultKeyExtractor = (item, index) => {
    if (typeof item === 'object' && item !== null) {
        if ('id' in item) {
            return String(item.id);
        }
        if ('Id' in item) {
            return String(item.Id);
        }
    }
    return index.toString();
};
export const ActivityList = ({ listVariant = 'list', itemVariant = 'card', data, loading, refetching, hasMore, listContentStyle, ActivityItemView, onPress, loadMore, refetch, keyExtractor = (defaultKeyExtractor), }) => {
    const renderItem = useCallback(({ item, index }) => {
        if (itemVariant === 'card') {
            return (<Card variant="elevated" marginHorizontal="m" marginVertical="s" paddingVertical="xs">
            <ActivityItemView item={item} onPress={onPress} index={index}/>
          </Card>);
        }
        return (<DashedBox bottomDash>
          <ActivityItemView item={item} onPress={onPress} index={index}/>
        </DashedBox>);
    }, [itemVariant, ActivityItemView, onPress]);
    const mapVariant = data.length === 0 && !loading ? (<EmptyComponent />) : (<Box style={listContentStyle}>
        {data.map((item, index) => (<React.Fragment key={keyExtractor(item, index)}>
            {renderItem({ item, index })}
          </React.Fragment>))}
      </Box>);
    return listVariant === 'list' ? (<FlashList data={data} contentContainerStyle={listContentStyle} renderItem={renderItem} onEndReached={loadMore} onRefresh={refetch} onEndReachedThreshold={0.7} refreshing={refetching} ListEmptyComponent={!hasMore && !loading ? EmptyComponent : undefined} ListFooterComponent={loading ? FooterComponent : undefined} estimatedItemSize={ActivityItemView.estimatedItemSize || 82} keyExtractor={keyExtractor}/>) : (mapVariant);
};
