import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Gbx = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1666AF" cx={24} cy={24} r={24} />
      <Path
        d="M23.548 16.51v3.09h-7.05c-.915 0-2.041.32-2.88.914-1.039.738-1.618 1.843-1.618 3.49 0 1.648.58 2.753 1.619 3.49.838.596 1.964.915 2.878.915h3.001V31.5h-3c-1.492 0-3.211-.488-4.58-1.46C10.075 28.733 9 26.683 9 24.005c0-2.679 1.076-4.729 2.917-6.036 1.37-.972 3.089-1.46 4.58-1.46h7.05Zm-7.499 9.272V22.69h7.5V31.5H20.55v-5.718H16.05Zm12.448-6.191V16.5H39v15H25.498V19.6h3v8.81H36v-8.82h-7.503Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Gbx;
Gbx.color = '#1666AF';
