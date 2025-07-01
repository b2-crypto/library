import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
const Wax = (props) => (<Svg width={24} height={24} viewBox="0 0 48 48" {...props}>
    <G fillRule="nonzero" fill="none">
      <Circle fill="#F89022" cx={24} cy={24} r={24}/>
      <Path d="M42 28.443h-3.546l-2.515-2.154-2.507 2.145h-2.997l-1.432-1.74h-4.938l1.25-1.543h2.427l-1.849-2.263-6.458 7.862H16.44l1.869-2.283h-3.122L13.5 23.736l-1.674 4.694H8.66L6 21.062h2.43l1.788 5.02L12 21.084h3l1.777 4.986 1.776-4.987h2.438l-2.682 7.384.597-.73 5.478-6.666H27.4l4.558 5.562 2.193-1.886-6.938-5.997h3.562L42 28.443Zm-3.517-4.458L36.81 22.55l1.669-1.422 3.377.002-3.373 2.854Z" fill="#FFF"/>
    </G>
  </Svg>);
export default Wax;
Wax.color = '#F89022';
