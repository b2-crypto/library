import React from 'react';
import { Pressable, PressableProps } from 'react-native';

import { translate } from '../../../../helpers/i18n';
import { Text } from '../../../../components/atoms';

export const MaxButton = (props: PressableProps) => (
  <Pressable {...props}>
    <Text variant="captionBold" color="brandSolid">
      {translate('max')}
    </Text>
  </Pressable>
);
