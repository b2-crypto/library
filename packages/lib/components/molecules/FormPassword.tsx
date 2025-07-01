import { useTheme } from '@shopify/restyle';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Eye } from '../../assets/icons';
import { Theme } from '../../theme';
import { Button } from './Button';
import { FormInput, FormInputProps } from './FormInput';

export const FormPassword = <T extends FieldValues>(
  props: FormInputProps<T>,
) => {
  const { colors } = useTheme<Theme>();
  const [visible, setVisibility] = useState(false);

  return (
    <FormInput
      autoComplete="password"
      {...props}
      secureTextEntry={!visible}
      suffix={
        <Button
          disabled={props.disabled}
          onPress={() => setVisibility(!visible)}
          variant="transparent"
          icon={
            <Eye
              width={20}
              height={20}
              color={visible ? colors.textPrimary : colors.textSecondary}
            />
          }
        />
      }
    />
  );
};
