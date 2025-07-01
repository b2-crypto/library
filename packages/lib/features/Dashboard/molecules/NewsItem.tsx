import React from 'react';
import { Linking } from 'react-native';
import { FeedItem } from 'react-native-rss-parser';
import {
  Box,
  DashedBox,
  Image,
  Text,
  TouchableOpacity,
} from '../../../components/atoms';

type Props = {
  sourceName: string;
  item: FeedItem;
};

export const NewsItem = ({ sourceName, item }: Props) => {
  const image = item.enclosures[0]?.url;

  return (
    <DashedBox bottomDash>
      <TouchableOpacity
        onPress={() => Linking.openURL(item.links[0]?.url)}
        padding="m"
        paddingBottom="sm">
        <Box flexDirection="row">
          {!!image && <Image source={{ uri: image }} width={56} height={56} mr="sm" />}
          <Box flex={1}>
            <Text variant="captionBold" color="brandSolid" numberOfLines={1} mb="xxs">
              {item.categories
                .map(c => c?.name)
                .filter(Boolean)
                .join(', ')}
            </Text>
            <Text color="textPrimary" numberOfLines={2}>
              {item.title}
            </Text>
          </Box>
        </Box>
        <Box
          mt="sm"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Text variant="captionBold" color="textSecondary">
            {sourceName}
          </Text>
          <Text variant="bodyReg" color="textSecondary" textAlign="right">
            {new Date(item.published).toLocaleDateString()}
          </Text>
        </Box>
      </TouchableOpacity>
    </DashedBox>
  );
};
