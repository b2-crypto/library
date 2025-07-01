import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Vivo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#408AF1" cx={24} cy={24} r={24} />
      <Path
        d="M34.573 15.415a2.361 2.361 0 0 1 3.286-.805c1.125.704 1.478 2.206.788 3.355-2.555 4.258-5.44 8.713-7.844 12.114C27.292 35.046 26.53 36.75 24 36.75c-2.531 0-3.102-1.504-6.712-6.684-2.145-3.076-4.835-7.193-7.906-12.053-.716-1.133-.397-2.643.712-3.373a2.36 2.36 0 0 1 3.303.727c3.036 4.804 9.89 14.815 10.623 15.708.763-.907 8.058-11.502 10.553-15.66Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Vivo;
Vivo.color = '#408AF1';
