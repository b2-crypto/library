import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { FeedItem, parse } from 'react-native-rss-parser';

import { Box, Text } from '../../../../components/atoms';
import { translate } from '../../../../helpers/i18n';
import { NewsItem } from '../../molecules';

const ESTIMATED_LIST_ITEM_SIZE = 113;

type Props = {
  sourceName: string;
  feedURL: string;
  limit?: number;
};

type FeedState = { loading: boolean; items: Array<FeedItem> };

export const NewsFeed = ({ sourceName, feedURL, limit = 10 }: Props) => {
  const [state, setState] = useState<FeedState>({ loading: true, items: [] });

  useEffect(() => {
    fetch(feedURL)
      .then(response => response.text())
      .then(parse)
      .then(feed => {
        setState({ loading: false, items: feed.items.slice(0, limit) });
      })
      .catch();
  }, [feedURL, limit]);

  const renderItem: ListRenderItem<FeedItem> = useCallback(
    ({ item }) => <NewsItem item={item} sourceName={sourceName} />,
    [sourceName],
  );

  if (state.loading) {
    return (
      <Box padding="xl">
        <ActivityIndicator size="large" />
      </Box>
    );
  } else if (state.items.length === 0) {
    return (
      <Box alignItems="center" padding="xl">
        <Text>{translate('noItems')}</Text>
      </Box>
    );
  }

  return (
    <Box minHeight={ESTIMATED_LIST_ITEM_SIZE}>
      <FlashList
        scrollEnabled={false}
        data={state.items}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        estimatedItemSize={ESTIMATED_LIST_ITEM_SIZE}
      />
    </Box>
  );
};
