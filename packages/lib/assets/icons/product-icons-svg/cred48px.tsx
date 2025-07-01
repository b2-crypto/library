import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Cred = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#37E8A3" cx={24} cy={24} r={24} />
      <Path
        d="m18.204 23.95 5.222 5.238 13.695-13.786L39 17.308 23.426 33l-7.1-7.145 1.878-1.906Zm3.165-.467L29.796 15l1.879 1.906-8.423 8.487-1.883-1.91Zm-3.414 7.247-1.854 1.868L9 25.454l1.877-1.905 7.078 7.181Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Cred;
Cred.color = '#37E8A3';
