import React, { useEffect, useState } from 'react';
import { InteractionManager, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUserCurrentAccount } from '@apex-rn/library/hooks';

import {
  AccountSelector,
  MarginWallet,
  SpotWallet,
} from '@apex-rn/library/features/Wallet';
import { Screen } from '@apex-rn/library/components';

export const Wallet = () => {
  const navigation = useNavigation();
  const { isMarginAccount } = useUserCurrentAccount();
  const [showAnimation, setShowAnimation] = useState(false);

  // It's faster navigating to the Wallet if the animation component is run
  // after some delay.
  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() =>
      setShowAnimation(true),
    );
    return () => task.cancel();
  }, []);

  return (
    <Screen>
      <AccountSelector />
      <ScrollView>
        {!isMarginAccount && (
          <SpotWallet showAnimation={showAnimation} navigation={navigation} />
        )}
        {isMarginAccount && <MarginWallet />}
      </ScrollView>
    </Screen>
  );
};
