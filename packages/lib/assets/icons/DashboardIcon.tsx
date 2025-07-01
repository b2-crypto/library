import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from '../../types/commonTypes';

export function DashboardIcon({ fill }: IconProps) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 14H11V9H18V12C18 13.104 17.104 14 16 14ZM4 14C2.896 14 2 13.104 2 12V9H9V14H4ZM2 4C2 2.896 2.896 2 4 2H16C17.104 2 18 2.896 18 4V7H2V4ZM16 0H4C1.791 0 0 1.791 0 4V12C0 14.209 1.791 16 4 16H9H11H16C18.209 16 20 14.209 20 12V4C20 1.791 18.209 0 16 0Z"
        fill={fill}
      />
    </Svg>
  );
}
