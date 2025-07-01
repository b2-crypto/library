import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Blcn = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#2AABE4" cx={24} cy={24} r={24} />
      <Path
        d="M11.85 10.5h9.3c.746 0 1.35.604 1.35 1.35v9.3a1.35 1.35 0 0 1-1.35 1.35h-9.3a1.35 1.35 0 0 1-1.35-1.35v-9.3c0-.746.604-1.35 1.35-1.35Zm15 0h9.3c.746 0 1.35.604 1.35 1.35v9.3a1.35 1.35 0 0 1-1.35 1.35h-9.3a1.35 1.35 0 0 1-1.35-1.35v-9.3c0-.746.604-1.35 1.35-1.35Zm0 15h9.3c.746 0 1.35.604 1.35 1.35v9.3a1.35 1.35 0 0 1-1.35 1.35h-9.3a1.35 1.35 0 0 1-1.35-1.35v-9.3c0-.746.604-1.35 1.35-1.35Zm-15 0h9.3c.746 0 1.35.604 1.35 1.35v9.3a1.35 1.35 0 0 1-1.35 1.35h-9.3a1.35 1.35 0 0 1-1.35-1.35v-9.3c0-.746.604-1.35 1.35-1.35Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Blcn;
Blcn.color = '#2AABE4';
