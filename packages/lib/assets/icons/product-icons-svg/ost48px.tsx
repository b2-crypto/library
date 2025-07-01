import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Ost = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#BBDFD0" cx={24} cy={24} r={24} />
      <Path
        d="M34.623 35.997c-2.653-2.59-5.925-3.662-9.544-3.885-3.08-.19-6.024.326-8.778 1.736a10.724 10.724 0 0 0-2.754 2c-.054.055-.114.102-.17.152a15.914 15.914 0 0 1-1.565-23.24c6.482-6.98 17.76-7.022 24.301-.073a15.904 15.904 0 0 1-1.49 23.31ZM18.03 23.693c.002 3.241 2.655 5.85 5.956 5.855 3.319.006 6.005-2.608 6.008-5.848.003-3.228-2.702-5.873-6-5.864-3.294.007-5.966 2.63-5.964 5.857Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Ost;
Ost.color = '#BBDFD0';
