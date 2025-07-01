import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Bnb = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F3BA2F" cx={24} cy={24} r={24} />
      <Path
        d="M18.174 21.606 24 15.78l5.829 5.83 3.39-3.39L23.999 9l-9.215 9.216 3.39 3.39ZM9 24l3.39-3.39L15.78 24l-3.39 3.39L9 24Zm9.174 2.394L24 32.22l5.829-5.83 3.391 3.39h-.001L23.999 39l-9.215-9.216-.005-.005 3.395-3.385ZM32.22 24l3.39-3.39 3.39 3.39-3.39 3.39-3.39-3.39Zm-4.782-.003.003.002-.001.002-3.44 3.44-3.437-3.437-.005-.005.005-.005.602-.602.292-.293L24 20.558l3.44 3.44h-.002Z"
        fill="#FFF"
      />
    </G>
  </Svg>
);
export default Bnb;
Bnb.color = '#F3BA2F';
