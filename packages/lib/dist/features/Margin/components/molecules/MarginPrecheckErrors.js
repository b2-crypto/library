import * as React from 'react';
import { translate } from '../../../../helpers';
import { Box, Card, Text } from '../../../../components';
export const MarginPrecheckErrors = ({ minDeposit, isVLEligible, isEnoughFunds, isAccountFrozen, }) => {
    const heading = React.useMemo(() => {
        if (isAccountFrozen) {
            return translate('profile.margin.accountFrozenHeading');
        }
        if (!isEnoughFunds && !isVLEligible) {
            return translate('profile.margin.notEligibleAndNoFundsHeading');
        }
        if (!isEnoughFunds) {
            return translate('profile.margin.notEnoughFundsHeading');
        }
        return translate('profile.margin.notAllowedHeading');
    }, [isAccountFrozen, isEnoughFunds, isVLEligible]);
    const description = React.useMemo(() => {
        if (isAccountFrozen) {
            return translate('profile.margin.accountFrozenText');
        }
        if (!isEnoughFunds && !isVLEligible) {
            return translate('profile.margin.notEligibleAndNoFundsText', {
                symbol: minDeposit.symbol,
                value: minDeposit.value.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                }),
            });
        }
        if (!isEnoughFunds) {
            return translate('profile.margin.notEnoughFundsText', {
                symbol: minDeposit.symbol,
                value: minDeposit.value.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                }),
            });
        }
        return translate('profile.margin.notAllowedText');
    }, [isAccountFrozen, isEnoughFunds, isVLEligible, minDeposit]);
    return (<Card m="m" backgroundColor="error">
      <Box m="m">
        <Text variant="textBold" color="white">
          {heading}
        </Text>
        <Text mt="m" color="white">
          {description}
        </Text>
      </Box>
    </Card>);
};
