import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Cny = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FF4314" cx={24} cy={24} r={24} />
      <Path
        d="M13.757 12H34.48v2.888H13.757V12Zm-2.31 8.461h25.609v2.917H29.21v9.761c0 .751.325 1.127 1.006 1.127h3.257c.355 0 .651-.231.829-.665.207-.462.355-1.877.414-4.216l2.783.866c-.207 3.264-.592 5.199-1.125 5.805-.533.578-1.303.895-2.339.895H29.33c-2.102 0-3.138-1.068-3.138-3.176V23.378h-4.382v.578c-.148 3.667-.977 6.613-2.487 8.808-1.48 2.021-3.848 3.61-7.164 4.736L10.5 34.959c3.197-1.098 5.329-2.484 6.454-4.101 1.125-1.79 1.717-4.072 1.835-6.902v-.578h-7.342v-2.917Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Cny;
Cny.color = '#FF4314';
