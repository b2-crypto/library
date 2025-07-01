import React from 'react';
import { PeriodFilterTabBtnsArr } from '../../helpers/constants';
import { DashedBox } from '../atoms';
import { Tabs } from '../molecules';
export const PeriodFilter = ({ separatorColor, value, onChange, }) => (<DashedBox alignItems="center" paddingHorizontal="xs" borderColor={separatorColor || 'border3'} topDash>
    <Tabs type="pills_narrow" data={PeriodFilterTabBtnsArr} value={value} onChange={onChange} centerContent/>
  </DashedBox>);
