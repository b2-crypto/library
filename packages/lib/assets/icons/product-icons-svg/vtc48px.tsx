import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Vtc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#35633E" cx={24} cy={24} r={24} />
      <Path
        d="m12.518 26.425.004-.002-3.182-4.439h8.948l4.602 6.137-4.414 6.316-5.958-8.012Zm-2.856-1.417H6.696l1.595-1.914 1.371 1.914Zm9.757 10.698 6.375-9.122 14.32-20.37a24.11 24.11 0 0 1 4.565 5.597l-.015.261-19.763 28.05a1.344 1.344 0 0 1-2.177.028l-3.305-4.444Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Vtc;
Vtc.color = '#35633E';
