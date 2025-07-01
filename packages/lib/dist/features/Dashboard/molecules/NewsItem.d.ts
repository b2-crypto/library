import React from 'react';
import { FeedItem } from 'react-native-rss-parser';
type Props = {
  sourceName: string;
  item: FeedItem;
};
export declare const NewsItem: ({
  sourceName,
  item,
}: Props) => React.JSX.Element;
export {};
