import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Smart = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FAC000" cx={24} cy={24} r={24} />
      <Path
        fill="#FFF"
        d="M21.3 16.363h11.34v-4.999H25.8V9h-2.88v2.364H15v5.181l7.92 6.819-7.92 8v5.545h7.92V39h2.88v-2.091H33v-5H21.12l8.55-8.545z"
      />
    </G>
  </Svg>
);
export default Smart;
Smart.color = '#FAC000';
