import React from 'react';
import { Box, Input } from '../atoms';
import { Platform } from 'react-native';
import { translate } from '../../helpers/i18n';
import { Search } from '../../assets/icons';
import { testID } from '../../helpers/testId';
export const SearchHeader = (props) => (<Box paddingTop={Platform.OS === 'ios' ? undefined : 's'} paddingBottom="s" paddingHorizontal="m" borderWidth={1} borderColor="transparent" borderBottomColor="border3">
    <Input size="small" placeholder={translate('search')} boxProps={{ paddingHorizontal: 'sm' }} prefix={<Search width={20} height={20}/>} autoCapitalize="none" accessibilityRole="search" accessibilityLabel="Search" {...testID('search')} {...props}/>
  </Box>);
