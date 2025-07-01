import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from '../../../theme';
import { translate } from '../../../helpers/i18n';
import { Text, Button } from '../../../components';
import { Convert } from '../../../assets/icons';
import { Box, Checkbox } from '../../../components/atoms';
import { ExpandableSearchInput } from '../../../components/molecules/ExpandableSearchInput';
const HideSmallAmountsCheckbox = ({ hideSmallAmounts, onToggleHideSmallAmounts, hideLabel = false, }) => (<Box marginHorizontal="s" padding="xs" borderWidth={1} borderRadius={6} flexDirection="row" alignItems="center" gap="s" borderColor="button2ndBorder">
    <Checkbox checked={hideSmallAmounts} onChange={onToggleHideSmallAmounts}/>
    {!hideLabel && (<Text variant="bodyBold" color="textSecondary" numberOfLines={1} ellipsizeMode="tail">
        {translate('marginTrading.balances.hideSmallAmounts')}
      </Text>)}
  </Box>);
export const ActionBar = ({ searchValue, setSearchValue, isSearchExpanded, onSearchPress, onSearchClose, hideSmallAmounts, onToggleHideSmallAmounts, onTransferPress, containerProps, hideTransferButton = false, }) => {
    const { colors, breakpoints } = useTheme();
    const { width } = useWindowDimensions();
    const isNarrowScreen = width < breakpoints.medium;
    return (<Box flexDirection="row" paddingVertical="s" paddingHorizontal="m" {...containerProps}>
      <ExpandableSearchInput value={searchValue} onChangeText={setSearchValue} isExpanded={isSearchExpanded} onExpand={onSearchPress} onCollapse={onSearchClose}/>
      <Box flexDirection="row" alignItems="center" flex={isSearchExpanded ? 0 : 1} justifyContent="flex-end">
        <HideSmallAmountsCheckbox hideSmallAmounts={hideSmallAmounts} onToggleHideSmallAmounts={onToggleHideSmallAmounts} hideLabel={isSearchExpanded}/>
        {!hideTransferButton && (<Button variant="secondary" size="small" paddingHorizontal="m" onPress={onTransferPress} label={isSearchExpanded || isNarrowScreen
                ? ''
                : translate('common.transfer')} icon={<Convert width={16} height={16} color={colors.textSecondary}/>}/>)}
      </Box>
    </Box>);
};
