import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Xmg = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#004A80" cx={24} cy={24} r={24} />
      <Path
        d="m34.5 29.31-2.224 8.19H13.5v-1.37l10.185-11.578-9.98-12.564V10.5h18.497l.644 6.378h-1.185c-.78-1.453-1.444-2.54-1.99-3.263-.547-.721-1.034-1.17-1.464-1.347-.302-.148-.72-.253-1.25-.317a16.32 16.32 0 0 0-1.91-.096h-5.254l7.873 9.81v.472l-9.732 11.047h11.107c.547 0 1.047-.13 1.5-.39.454-.26.847-.587 1.179-.98.331-.383.639-.82.921-1.31a12.33 12.33 0 0 0 .747-1.533l1.112.34Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Xmg;
Xmg.color = '#004A80';
