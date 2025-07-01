import React from 'react';
import { translate } from '../../../helpers/i18n';
import { Text, Button, ExpandableSearchInput } from '../../../components';
import { Box, Checkbox } from '../../../components/atoms';
import { Convert } from '../../../assets/icons';
import { useTheme } from '../../../theme';
const HideSmallAmountsCheckbox = ({ hideSmallAmounts, onToggleHideSmallAmounts, hideLabel = false, }) => (<Box marginHorizontal="s" padding="xs" flex={hideLabel ? 0 : 1} borderWidth={1} borderRadius={6} flexDirection="row" alignItems="center" gap="s" borderColor="button2ndBorder">
    <Checkbox checked={hideSmallAmounts} onChange={onToggleHideSmallAmounts}/>
    {!hideLabel && (<Text variant="bodyBold" color="textSecondary" numberOfLines={1} ellipsizeMode="tail">
        {translate('marginTrading.balances.hideSmallAmounts')}
      </Text>)}
  </Box>);
export const ActionBarSearchWidget = ({ searchValue, setSearchValue, isSearchExpanded, onSearchPress, onSearchClose, hideSmallAmounts, onToggleHideSmallAmounts, onTransfer, isMarginAvailable = false, }) => {
    const { colors } = useTheme();
    return (<Box flexDirection="row" paddingVertical="s" paddingHorizontal="m">
      <ExpandableSearchInput value={searchValue} onChangeText={setSearchValue} isExpanded={isSearchExpanded} onExpand={onSearchPress} onCollapse={onSearchClose}/>
      <HideSmallAmountsCheckbox hideSmallAmounts={hideSmallAmounts} onToggleHideSmallAmounts={onToggleHideSmallAmounts} hideLabel={isSearchExpanded}/>
      <Button disabled={!isMarginAvailable} variant="secondary" size="small" paddingHorizontal="m" onPress={onTransfer} label={isSearchExpanded ? '' : translate('common.transfer')} icon={<Convert width={16} height={16} color={colors.textSecondary}/>}/>
    </Box>);
};
