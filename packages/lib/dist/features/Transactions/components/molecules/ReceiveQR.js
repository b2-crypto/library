import React from 'react';
import { ActivityIndicator } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import { useTheme } from '@shopify/restyle';
import { translate } from '../../../../helpers/i18n';
import { Box, Text } from '../../../../components/atoms';
import { Button } from '../../../../components/molecules';
import { CustomToast } from '../../../../helpers/toastConfig';
import { testID } from '../../../../helpers/testId';
export const ReceiveQR = ({ walletAddress, error, loading = false }) => {
    const { colors } = useTheme();
    if (error || loading) {
        return (<Box alignItems="center" justifyContent="center" width="100%" borderColor="border3" borderWidth={1} borderRadius={6} padding="xl" minHeight={50}>
        {error ? (<Text color="error">{error}</Text>) : (<ActivityIndicator size="large" color={colors.textPrimary}/>)}
      </Box>);
    }
    return (<Box alignItems="center">
      <Box padding="m" pb="xl" mb="m" borderColor="border3" borderWidth={1} borderRadius={6} width="100%" alignItems="center" justifyContent="center">
        <Text marginBottom="m" variant="bodyBold" color="textSecondary">
          {translate('transactions.scanToReceive')}
        </Text>
        <Box padding="s" bg="white" borderRadius={6} accessible accessibilityLabel="QR Code" {...testID('walletAdressQR')}>
          <QRCode size={130} value={walletAddress}/>
        </Box>
      </Box>
      <Text variant="bodyBold" color="textSecondary" marginVertical="s">
        {translate('transactions.orCopy')}
      </Text>
      <Button variant="transparent" label={<Text variant="bodyReg" color="brandSolid">
            {walletAddress}
          </Text>} alignItems="flex-start" accessible accessibilityLabel="Copy wallet address" {...testID('copyAddress')} onPress={() => {
            Clipboard.setString(walletAddress);
            Toast.show({
                type: CustomToast.text,
                text1: translate('transactions.walletAddressCopied'),
            });
        }}/>
    </Box>);
};
