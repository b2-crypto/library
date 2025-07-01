import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { formatNumber } from '../../../helpers/format';
import { translate } from '../../../helpers/i18n';
import { isApexError } from '../../../types/apiResponses';
import { useUserRequestConfirm } from '../hooks';
import { Box, DashedBox, Text } from '../../../components/atoms';
import { ExpandingCard } from '../../../components/molecules/ExpandingCard';
import { ModalBlurBg, ProductIcon, Button, } from '../../../components/molecules';
import { RequestDetails } from '../molecules/RequestDetails';
import { TransferRequestConfirm } from '../molecules/TransferRequestConfirm';
import { Check, Cross } from '../../../assets/icons';
import { Email } from '../../../assets/icons/Email';
export const RequestItem = ({ request }) => {
    const { submitting, onSubmit, error } = useUserRequestConfirm();
    const [type, setType] = useState();
    return (<ExpandingCard expandableContent={<RequestDetails request={request}/>}>
      <DashedBox padding="m" flexDirection="row" bottomDash>
        <ProductIcon symbol={request.symbol}/>
        <Box marginLeft="sm">
          <Box flexDirection="row" mb="xs">
            <Email />
            <Text variant="textBold" color="textSecondary" ml="xs">
              {translate('requests.request')}
            </Text>
          </Box>
          <Text variant="textBold">
            {request.symbol}{' '}
            {formatNumber(request.amount, request.decimalPlaces)}
          </Text>
          {error && isApexError(error) && (<Text textAlign="center" variant="bodyBold" color="error" mt="xs">
              {error.message}
            </Text>)}
        </Box>
        <Box justifyContent="flex-end" flex={1} flexDirection="row">
          <Button variant="primary" onPress={() => {
            setType('confirm');
        }} size="small" width={36} icon={<Check fill="white"/>} paddingTop="xs" paddingLeft="xs" elevation={2} shadowColor="brandDisabled" mr="sm"/>
          <Button variant="sell" onPress={() => {
            setType('decline');
        }} size="small" backgroundColor="reject" width={36} icon={<Cross />} paddingTop="xs" paddingLeft="xs" shadowColor="sellDisabled" elevation={2}/>
        </Box>
      </DashedBox>

      <ModalBlurBg isVisible={!!type} onBackdropPress={() => setType(null)} style={styles.modal}>
        {!!type && (<TransferRequestConfirm request={request} type={type} onClose={() => setType(null)} onSubmit={async () => {
                await onSubmit(type, request.requestCode);
                setType(null);
            }} submitting={submitting}/>)}
      </ModalBlurBg>
    </ExpandingCard>);
};
const styles = StyleSheet.create({
    modal: { justifyContent: 'flex-start', marginTop: 100 },
});
