import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import {
  useAppSelector,
  useBiometrics,
  useUserConfig,
} from '@apex-rn/library/hooks';
import { selectIsAuthenticated } from '@apex-rn/library/stores';
import { getLogger } from '@apex-rn/library/services';
import { getLanguage } from '@apex-rn/library/helpers';

import {
  ActivityDetails,
  AuthLanding,
  BiometricLogin,
  BuySell,
  ConfirmPassword,
  ConvertScreen,
  HomeNavigator,
  PairDetails,
  ReceiveScreen,
  Scanner,
  SendScreen,
  SetupBiometric,
  TransferScreen,
  TroubleLogging,
  TwoFactAuthentication,
  TwoFactorActivation,
  TwoFactorDisable,
  UpdatePassword,
  WalletDetail,
  DepositScreen,
  WithdrawScreen,
} from '../screens';

import { RootStack } from './RootStack';

const userPart = (
  <RootStack.Group>
    <RootStack.Screen
      name="Home"
      component={HomeNavigator}
      options={{ gestureEnabled: false }}
    />

    {/* Markets */}
    <RootStack.Screen name="PairDetails" component={PairDetails} />

    {/* Scanner */}
    <RootStack.Screen name="Scanner" component={Scanner} />

    {/* Scanner */}
    <RootStack.Screen name="WalletDetail" component={WalletDetail} />

    {/* Activity */}
    <RootStack.Screen name="ActivityDetails" component={ActivityDetails} />

    {/* Profile */}
    <RootStack.Screen
      name="TwoFactorActivation"
      component={TwoFactorActivation}
    />
    <RootStack.Screen name="TwoFactorDisable" component={TwoFactorDisable} />
    <RootStack.Screen name="ConfirmPassword" component={ConfirmPassword} />

    {/* Transaction */}
    <RootStack.Group screenOptions={{ animation: 'slide_from_bottom' }}>
      <RootStack.Screen name="CreateOrder" component={BuySell} />
      <RootStack.Screen name="ReceiveScreen" component={ReceiveScreen} />
      <RootStack.Screen name="SendScreen" component={SendScreen} />
      <RootStack.Screen name="ConvertScreen" component={ConvertScreen} />
      <RootStack.Screen name="Transfer" component={TransferScreen} />
      <RootStack.Screen name="DepositScreen" component={DepositScreen} />
      <RootStack.Screen name="WithdrawScreen" component={WithdrawScreen} />
    </RootStack.Group>
  </RootStack.Group>
);

const authPart = (
  <RootStack.Group>
    <RootStack.Screen name="AuthLanding" component={AuthLanding} />
    <RootStack.Screen name="TwoFactAuth" component={TwoFactAuthentication} />
    <RootStack.Screen name="TroubleLogging" component={TroubleLogging} />
    <RootStack.Screen name="UpdatePassword" component={UpdatePassword} />
    <RootStack.Screen
      name="SetupBiometric"
      options={{ presentation: 'containedTransparentModal' }}
      component={SetupBiometric}
    />
  </RootStack.Group>
);

const biometricPart = (
  <RootStack.Screen name="BiometricLogin" component={BiometricLogin} />
);

export const RootNavigator = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const { data: config } = useUserConfig();
  const language = config?.Language || getLanguage().tag;

  const { isBiometricsEnabled } = useBiometrics();

  const routeNameRef = useRef<string>();
  const navigationRef = createNavigationContainerRef();

  const handleNavigationReady = useCallback(() => {
    routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;

    getLogger()(
      'debug',
      '=== SCREEN - ' + routeNameRef.current,
      'RootNavigator',
    );
  }, [navigationRef]);

  const handleTrackRouteChange = useCallback(() => {
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;

    if (routeNameRef.current !== currentRouteName) {
      getLogger()('debug', '=== SCREEN - ' + currentRouteName, 'RootNavigator');
    }

    routeNameRef.current = currentRouteName;
  }, [navigationRef]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleNavigationReady}
      onStateChange={handleTrackRouteChange}>
      <RootStack.Navigator
        key={language}
        screenOptions={{
          headerShown: false,
          navigationBarColor: 'transparent',
        }}>
        {isAuthenticated ? (
          userPart
        ) : (
          <>
            {!!isBiometricsEnabled && biometricPart}
            {authPart}
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
