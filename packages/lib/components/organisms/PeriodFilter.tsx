import React from 'react';

import { PeriodFilterTabBtnsArr } from '../../helpers/constants';
import { Theme } from '../../theme';

import { DashedBox } from '../atoms';
import { Tabs } from '../molecules';

type PeriodFilterProps = {
  separatorColor?: keyof Theme['colors'];
  value: number;
  onChange: (value: number) => void;
};

export const PeriodFilter = ({
  separatorColor,
  value,
  onChange,
}: PeriodFilterProps) => (
  <DashedBox
    alignItems="center"
    paddingHorizontal="xs"
    borderColor={separatorColor || 'border3'}
    topDash>
    <Tabs
      type="pills_narrow"
      data={PeriodFilterTabBtnsArr}
      value={value}
      onChange={onChange}
      centerContent
    />
  </DashedBox>
);
