import * as React from 'react';
import { Transfer } from '../../../../assets/icons';
import { Text } from '../../../../components/atoms';
import { translate } from '../../../../helpers/i18n';
import { testID } from '../../../../helpers/testId';
import { useTheme } from '../../../../theme';
import { TransactionFormHeader } from '../atoms';
export const TransferFormHeader = ({ onClose }) => {
    const { colors } = useTheme();
    return (<TransactionFormHeader iconBoxProps={{
            borderWidth: 1,
            borderColor: 'button2ndBorder',
            backgroundColor: 'button2ndBackground',
        }} icon={<Transfer color={colors.textSecondary}/>} onClose={onClose}>
      <Text variant="textBold" {...testID('transferTitle')}>
        {translate('transactions.transferAssetsTitle')}
      </Text>
    </TransactionFormHeader>);
};
