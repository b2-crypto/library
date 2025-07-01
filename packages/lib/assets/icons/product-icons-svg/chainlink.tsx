import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Chainlink = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 866 1000" {...props}>
    <Path
      d="m433 0-91.64 52.75-249.72 144.5L0 250v500l91.64 52.75 252 144.5 91.65 52.75 91.64-52.75 247.43-144.5L866 750V250l-91.64-52.75-249.72-144.5ZM183.28 644.5v-289L433 211l249.72 144.5v289L433 789Z"
      fill="#2a5ada"
    />
  </Svg>
);
export default Chainlink;
