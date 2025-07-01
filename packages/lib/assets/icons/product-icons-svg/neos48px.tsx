import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Neos = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#E5F300" cx={24} cy={24} r={24} />
      <Path
        d="m15.75 14.037 12.214 7.388v4.646l-8.571-5.15V39H15.75V14.037Zm16.5 19.926-12.214-7.388v-4.646l8.571 5.15V9h3.643v24.963Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Neos;
Neos.color = '#E5F300';
