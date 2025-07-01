import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
import { OrderFormValues } from '../../types';
import { testID } from '../../../../helpers/testId';

type Props = {
  /** Callback to call on button press */
  onPress: () => void;
};

export const OrderFormButton = ({ onPress }: Props) => {
  const { watch, formState } = useFormContext<OrderFormValues>();
  const op = watch('op');

  return (
    <Button
      onPress={onPress}
      disabled={!formState.isValid}
      variant={op}
      label={translate(op)}
      {...testID('submit')}
    />
  );
};
