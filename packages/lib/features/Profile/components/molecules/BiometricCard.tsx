import React, { useState } from 'react';
import { translate } from '../../../../helpers/i18n';

import { Button, Card } from '../../../../components/molecules';
import { Box, Text, Radio } from '../../../../components/atoms';
import { testID } from '../../../../helpers/testId';

const OPTIONS = ['yes', 'no'] as const;

type Options = (typeof OPTIONS)[number];

type Props = {
  /** Initial state for the biometric auth configuration */
  initialValue?: boolean;
  /** Handler to save the value */
  onSubmit: (value: boolean) => void;
};

export const BiometricCard = ({ initialValue, onSubmit }: Props) => {
  const defaultValue: Options = initialValue ? 'yes' : 'no';

  const [value, setValue] = useState<Options>(defaultValue);

  return (
    <Card
      marginTop="m"
      marginHorizontal="m"
      heading={translate('auth.biometrics.setup.title')}
      footer={
        <Button
          label={translate('auth.biometrics.setup.button')}
          disabled={value === defaultValue}
          onPress={() => onSubmit(value === 'yes')}
          {...testID('manageBiometric')}
        />
      }>
      <Box padding="m">
        <Text>{translate('auth.biometrics.setup.text')}</Text>
        <Box flexDirection="row" marginTop="m">
          {OPTIONS.map((option, idx) => (
            <Box
              key={option.toString()}
              mr={idx + 1 !== OPTIONS.length ? 'm' : undefined}>
              <Radio
                checked={value === option}
                label={translate(`common.${option}`)}
                onChange={() => setValue(option)}
                {...testID(option)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};
