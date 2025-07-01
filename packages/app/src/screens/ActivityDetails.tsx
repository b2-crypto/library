import { useNavigation } from '@react-navigation/native';
import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';
import React, { useCallback } from 'react';
import { translate } from '@apex-rn/library/helpers';
import { Box, ScreenHeader, Screen } from '@apex-rn/library/components';
import {
  AccountTransactionDetails,
  MarginPositionDetails,
  OrderDetails,
  WalletActivityDetails,
} from '@apex-rn/library/features/Activity';

import { usePrevRouteName } from '../routes/usePrevRouteName';
import { RootStackScreenProps } from '../routes/types';

export const ActivityDetails = ({
  route: { params },
}: RootStackScreenProps<'ActivityDetails'>) => {
  const navigation = useNavigation();
  const prevRouteName = usePrevRouteName() || 'Activity';

  const handleSuccessAction = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderCard = useCallback(() => {
    switch (params.type) {
      case 'order':
        return (
          <OrderDetails item={params.item} onOrderCancel={navigation.goBack} />
        );
      case 'wallet':
        return <WalletActivityDetails item={params.item} />;
      case 'accountTransaction':
        return <AccountTransactionDetails item={params.item} />;
      case 'position':
        return (
          <MarginPositionDetails
            item={params.item}
            onSuccess={handleSuccessAction}
          />
        );
      default:
        return <Box />;
    }
  }, [params, navigation, handleSuccessAction]);

  return (
    <Screen>
      <ScreenHeader
        title={translate(`screens.${camelCase(prevRouteName)}`, {
          defaultValue: startCase(prevRouteName),
        })}
        onBackPress={navigation.goBack}
      />
      {renderCard()}
    </Screen>
  );
};
