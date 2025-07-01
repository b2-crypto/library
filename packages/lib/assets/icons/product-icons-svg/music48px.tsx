import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Music = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#FFF" cx={24} cy={24} r={24} />
      <Path
        d="M27.976.34A24 24 0 0 0 24 0C10.74 0 0 10.74 0 24c0 5.09 1.6 9.794 4.29 13.697 1.65-2.424 5.455-4.097 9.868-4.097 3.03 0 5.77.8 7.733 2.085L27.976.339Zm12.751 6.472c4.146 9.164.51 14.06.51 14.06-2.813-8.46-10.958-9.696-10.958-9.696S24.92 40.048 24.92 40.412c0 3.127-3.321 5.77-7.83 6.57A24.054 24.054 0 0 0 24 48c13.26 0 24-10.74 24-24 0-6.74-2.788-12.824-7.273-17.188Z"
        fill="#FBBF02"
      />
    </G>
  </Svg>
);
export default Music;
Music.color = '#FFF';
