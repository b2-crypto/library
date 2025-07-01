import React from 'react';
import {
  SectionList,
  SectionListProps,
  StyleSheet,
} from 'react-native';

import { Box, Text } from '../../../components/atoms';
import { SectionHeading } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';

type WalletsListProps<T> = Omit<
  SectionListProps<
    T,
    {
      title: string;
      headingExtra?: React.ReactNode;
    }
  >,
  'renderSectionHeader' | 'contentContainerStyle'
> & {
  headerComponent?: React.ReactNode;
};

export const WalletsSectionList = <T,>(props: WalletsListProps<T>) => {
  return (
    <SectionList
      scrollEnabled={false}
      renderSectionHeader={({ section: { title, key, headingExtra } }) => (
        <Box marginBottom="m">
          <SectionHeading {...testID(`${key}Title`)} extra={headingExtra}>
            <Text variant="bodyBold" color="textSecondary">
              {title}
            </Text>
          </SectionHeading>
          {props.headerComponent}
        </Box>
      )}
      contentContainerStyle={styles.list}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 40,
  },
});
