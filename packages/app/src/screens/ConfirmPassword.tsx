import React, { useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { translate } from '@apex-rn/library/helpers';
import { useBiometrics, useUserInfo } from '@apex-rn/library/hooks';
import { isApexError } from '@apex-rn/library/types';
import { ScreenHeader, Screen } from '@apex-rn/library/components';
import { ConfirmPasswordCard } from '@apex-rn/library/features/Profile';
import { useGetAuthConfigMutation } from '@apex-rn/library/services';

import { RootStackScreenProps } from '../routes/types';

export const ConfirmPassword = ({
  navigation,
}: RootStackScreenProps<'ConfirmPassword'>) => {
  const { data: userInfo } = useUserInfo();
  const [authenticate, { isLoading, error }] = useGetAuthConfigMutation();
  const { enableBiometrics } = useBiometrics();

  const handleSubmit = useCallback(
    async (password: string) => {
      if (!userInfo?.UserName) {
        return;
      }

      const result = await authenticate({
        userName: userInfo.UserName,
        password,
      });

      if ('data' in result && result.data.Authenticated) {
        const status = await enableBiometrics({
          userName: userInfo.UserName,
          password,
        });

        status && navigation.goBack();
      }
    },
    [authenticate, enableBiometrics, navigation, userInfo?.UserName],
  );

  return (
    <Screen edges={['left', 'right', 'top']}>
      <ScreenHeader
        title={translate('screens.confirmPassword')}
        onBackPress={navigation.goBack}
      />
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        <ConfirmPasswordCard
          loading={isLoading}
          error={error && isApexError(error) ? error.message : undefined}
          onSubmit={handleSubmit}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({ scrollContent: { paddingBottom: 60 } });
