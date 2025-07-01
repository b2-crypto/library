import React from 'react';
import { QrCode } from '../../../../assets/icons';
import { useTheme } from '@shopify/restyle';
import { Button } from '../../../../components/molecules';
export const QrScannerButton = (props) => {
    const { colors } = useTheme();
    return (<Button variant="transparent" icon={<QrCode color={colors.brandSolid}/>} {...props}/>);
};
