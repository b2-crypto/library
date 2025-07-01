import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Drgn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#C91111" cx={24} cy={24} r={24} />
      <G fill="#FFF">
        <Path
          opacity={0.6}
          d="M14.1 31.17h4.227l-.108-10.99L33.96 40.163l-.05-23.598h-4.16l.108 11.102L14.106 7.63z"
        />
        <Path d="m14.1 14.93.024-7.277 19.774 25.128.083 7.413z" />
      </G>
    </G>
  </Svg>
);
export default Drgn;
Drgn.color = '#C91111';
