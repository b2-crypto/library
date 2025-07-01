import React from 'react';
import { translate } from '../../../../helpers/i18n';
import { AuthScreen } from './AuthScreen';
import { Box, Text } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { Biometric } from '../../../../assets/icons';
export const BiometricLogin = ({ headerText, isLoading, error, onConfirm, onDiscard, }) => {
    return (<AuthScreen headerText={headerText} footer={<Button size="small" mt="xl" disabled={isLoading} variant="transparent" label={translate('auth.biometrics.login.footer')} onPress={onDiscard}/>}>
      <>
        <Box padding="sm" alignItems="center" marginTop="lg">
          <Biometric />
        </Box>
        <Box padding="sm" marginTop="l">
          {!!error && (<Text variant="error" mb="sm" textAlign="center">
              {error}
            </Text>)}
          <Button flexDirection="column" label={translate('auth.biometrics.login.button')} onPress={onConfirm} loading={isLoading} mb="sm"/>
          <Button flexDirection="column" disabled={isLoading} onPress={onDiscard} label={<Text variant="button_primary" color="brandSolid">
                {translate('auth.biometrics.login.userNameAndPassword')}
              </Text>} variant="transparent"/>
        </Box>
      </>
    </AuthScreen>);
};
