import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';
const Rdd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#E30613" cx={24} cy={24} r={24} />
      <G fill="#FFF">
        <Path
          d="M23.042 40.5C14.458 40.5 7.5 33.611 7.5 25.113c0-8.498 6.958-15.387 15.542-15.387s15.542 6.89 15.542 15.387c0 8.498-6.958 15.387-15.542 15.387Zm2.682-26.366c3.623 1.483 6.228 4.274 8.076 8.037l1.396-.97c-1.568-3.767-4.461-6.729-9.116-8.65l-.356 1.583Z"
          opacity={0.75}
        />
        <Path d="M40.488 13.982c0-3.58-2.932-6.482-6.548-6.482s-6.548 2.903-6.548 6.482c0 .341.028.682.081 1.018 2.18 1.27 3.932 3.091 5.331 5.365.375.066.756.099 1.137.1 3.615 0 6.547-2.903 6.547-6.483Z" />
      </G>
    </G>
  </Svg>
);
export default Rdd;
Rdd.color = '#E30613';
