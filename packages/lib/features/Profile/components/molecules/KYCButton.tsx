import React from 'react';

import { translate } from '../../../../helpers/i18n';
import { Text } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { useKyc } from '../../hooks';

export const KYCButton = ({
  level,
  label,
  disabled,
  onPress,
  ...props
}: {
  level: number;
  label?: string;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  const [runKyc, { isLoading, error }] = useKyc();

  const onButtonPress = () => {
    if (onPress) onPress();
    else runKyc(level);
  };

  return (
    <>
      {!!error && (
        <Text variant="error" mb="s">
          {error}
        </Text>
      )}
      <Button
        marginVertical="none"
        label={
          label ||
          translate(`profile.verification.kycButtonLabel.level${level}`)
        }
        loading={isLoading}
        onPress={onButtonPress}
        disabled={disabled}
        {...props}
      />
    </>
  );
};
