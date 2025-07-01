import * as React from 'react';
import isNumber from 'lodash/isNumber';
import { Text, View } from '../../../components/atoms';
import { formatUSD } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { useWallets } from '../../../hooks';
import { testID } from '../../../helpers/testId';
export const AccountBalance = ({ totalBalance, direction: direction = 'vertical', ...props }) => {
    if (direction === 'horizontal') {
        return (<View variant="totalBalance" {...props} flexDirection="row" justifyContent="space-between" alignItems="center">
        <Text variant="textBold" color="textPrimary">
          {translate('dashboard.balanceLabel')}
        </Text>
        <Text variant="subHeadlineReg" color="textPrimary" accessible accessibilityLabel="Total Balance Amount" {...testID('totalBalance')}>
          {!isNumber(totalBalance) ? '' : formatUSD(totalBalance)}
        </Text>
      </View>);
    }
    return (<View variant="totalBalance" {...props}>
      <Text variant="bodyBold" color="textPrimary">
        {translate('dashboard.balanceLabel')}
      </Text>
      <Text marginTop="xs" variant="headlineBold" color="textPrimary" accessible accessibilityLabel="Total Balance Amount" {...testID('totalBalance')}>
        {!isNumber(totalBalance) ? '' : formatUSD(totalBalance)}
      </Text>
    </View>);
};
export const AccountBalanceWidget = (props) => {
    const { data: walletData, isLoading } = useWallets({});
    const totalBalance = React.useMemo(() => {
        return walletData?.reduce((a, b) => a + b.NotionalValue, 0);
    }, [walletData]);
    return (<AccountBalance totalBalance={isLoading ? undefined : totalBalance} {...props}/>);
};
