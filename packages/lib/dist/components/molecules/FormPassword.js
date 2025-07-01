import { useTheme } from '@shopify/restyle';
import React, { useState } from 'react';
import { Eye } from '../../assets/icons';
import { Button } from './Button';
import { FormInput } from './FormInput';
export const FormPassword = (props) => {
    const { colors } = useTheme();
    const [visible, setVisibility] = useState(false);
    return (<FormInput autoComplete="password" {...props} secureTextEntry={!visible} suffix={<Button disabled={props.disabled} onPress={() => setVisibility(!visible)} variant="transparent" icon={<Eye width={20} height={20} color={visible ? colors.textPrimary : colors.textSecondary}/>}/>}/>);
};
