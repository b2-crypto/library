import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Icx = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#1FC5C9" cx={24} cy={24} r={24} />
      <Path
        d="m16.944 33.707 3.246-3.245A7.5 7.5 0 0 0 30.462 20.19l3.245-3.246A11.946 11.946 0 0 1 36 24c0 6.627-5.373 12-12 12-2.637 0-5.076-.85-7.056-2.293Zm-2.651-2.651A11.946 11.946 0 0 1 12 24c0-6.627 5.373-12 12-12 2.637 0 5.076.85 7.056 2.293l-3.246 3.245A7.5 7.5 0 0 0 17.538 27.81l-3.245 3.246ZM36 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 39a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Icx;
Icx.color = '#1FC5C9';
