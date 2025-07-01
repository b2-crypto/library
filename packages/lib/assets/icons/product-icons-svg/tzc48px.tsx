import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Tzc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#374851" cx={24} cy={24} r={24} />
      <Path
        d="M26.55 23.1v11.397c.305-.074.605-.16.9-.26v4.364a15.098 15.098 0 0 1-6 .183V23.1H16.2v-4.2h15.6v4.2h-5.25Zm2.1 15.165V33.75A10.801 10.801 0 0 0 34.8 24c0-5.965-4.835-10.8-10.8-10.8-5.965 0-10.8 4.835-10.8 10.8 0 4.3 2.513 8.013 6.15 9.75v4.515C13.342 36.308 9 30.661 9 24c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 6.661-4.342 12.308-10.35 14.265Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Tzc;
Tzc.color = '#374851';
