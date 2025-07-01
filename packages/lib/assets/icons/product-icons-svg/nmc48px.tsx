import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Nmc = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#186C9D" cx={24} cy={24} r={24} />
      <Path
        d="m28.892 35.25.001-.003c.22.004.45-.018.687-.074 1.314-.308 2.425-1.456 2.69-2.695l5.23-19.644-4.158-.02-3.43 12.851-9.269-12.895-.006.005.005-.013-1.533-.012-.002.002a2.828 2.828 0 0 0-.687.073c-1.313.309-2.423 1.457-2.689 2.694L10.5 35.167l4.16.018 3.427-12.85 9.271 12.896.003-.001 1.531.02Zm-9.89-16.342.724-2.715L29 29.093l-.725 2.715-9.272-12.9Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Nmc;
Nmc.color = '#186C9D';
