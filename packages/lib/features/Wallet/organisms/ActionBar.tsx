import * as React from 'react';
import { BoxProps } from '@shopify/restyle';
import { useWindowDimensions } from 'react-native';

import { Theme, useTheme } from '../../../theme';
import { translate } from '../../../helpers/i18n';
import { Text, Button } from '../../../components';
import { Convert } from '../../../assets/icons';
import { Box, Checkbox } from '../../../components/atoms';
import { ExpandableSearchInput } from '../../../components/molecules/ExpandableSearchInput';

interface HideSmallAmountsCheckboxProps {
  hideSmallAmounts: boolean;
  onToggleHideSmallAmounts: (checked: boolean) => void;
  hideLabel?: boolean;
}

const HideSmallAmountsCheckbox = ({
  hideSmallAmounts,
  onToggleHideSmallAmounts,
  hideLabel = false,
}: HideSmallAmountsCheckboxProps) => (
  <Box
    marginHorizontal="s"
    padding="xs"
    borderWidth={1}
    borderRadius={6}
    flexDirection="row"
    alignItems="center"
    gap="s"
    borderColor="button2ndBorder">
    <Checkbox checked={hideSmallAmounts} onChange={onToggleHideSmallAmounts} />
    {!hideLabel && (
      <Text
        variant="bodyBold"
        color="textSecondary"
        numberOfLines={1}
        ellipsizeMode="tail">
        {translate('marginTrading.balances.hideSmallAmounts')}
      </Text>
    )}
  </Box>
);

// New component for the action bar
interface ActionBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isSearchExpanded: boolean;
  onSearchPress: () => void;
  onSearchClose: () => void;
  hideSmallAmounts: boolean;
  onToggleHideSmallAmounts: (checked: boolean) => void;
  onTransferPress: () => void;
  containerProps?: BoxProps<Theme>;
  hideTransferButton?: boolean;
}

export const ActionBar = ({
  searchValue,
  setSearchValue,
  isSearchExpanded,
  onSearchPress,
  onSearchClose,
  hideSmallAmounts,
  onToggleHideSmallAmounts,
  onTransferPress,
  containerProps,
  hideTransferButton = false,
}: ActionBarProps) => {
  const { colors, breakpoints } = useTheme();
  const { width } = useWindowDimensions();
  const isNarrowScreen = width < breakpoints.medium;
  return (
    <Box
      flexDirection="row"
      paddingVertical="s"
      paddingHorizontal="m"
      {...containerProps}>
      <ExpandableSearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        isExpanded={isSearchExpanded}
        onExpand={onSearchPress}
        onCollapse={onSearchClose}
      />
      <Box
        flexDirection="row"
        alignItems="center"
        flex={isSearchExpanded ? 0 : 1}
        justifyContent="flex-end">
        <HideSmallAmountsCheckbox
          hideSmallAmounts={hideSmallAmounts}
          onToggleHideSmallAmounts={onToggleHideSmallAmounts}
          hideLabel={isSearchExpanded}
        />
        {!hideTransferButton && (
          <Button
            variant="secondary"
            size="small"
            paddingHorizontal="m"
            onPress={onTransferPress}
            label={
              isSearchExpanded || isNarrowScreen
                ? ''
                : translate('common.transfer')
            }
            icon={
              <Convert width={16} height={16} color={colors.textSecondary} />
            }
          />
        )}
      </Box>
    </Box>
  );
};
