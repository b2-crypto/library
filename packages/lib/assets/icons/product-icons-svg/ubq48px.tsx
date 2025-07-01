import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Ubq = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#00EA90" cx={24} cy={24} r={24} />
      <Path
        d="m27.322 11.262 11.666 6.101-11.24 6.891-.426-12.992Zm-6.644 25.412L9.013 30.572l11.238-6.89.427 12.992Z"
        fillOpacity={0.698}
        fill="#FFF"
      />
      <Path
        d="M38.988 31.018 22.768 40.5V27.197l16.22-9.834v13.655Zm-29.976-14.1L25.232 7.5v13.252l-16.22 9.82V16.917Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Ubq;
Ubq.color = '#00EA90';
