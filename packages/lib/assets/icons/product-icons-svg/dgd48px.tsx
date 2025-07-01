import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Dgd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F4D029" cx={24} cy={24} r={24} />
      <Path
        d="M18.75 16.5V21H8.25v-4.5h10.5Zm1.5 0h3v15h-15v-9h12v-6Zm-9 9v3h9v-3h-9Zm28.5-6h-12v9h9v-3h-6v-3h9v9h-15v-15h15v3Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Dgd;
Dgd.color = '#F4D029';
