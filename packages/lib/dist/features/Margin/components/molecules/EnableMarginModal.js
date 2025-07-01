import * as React from 'react';
import { ScrollView, Pressable, StyleSheet } from 'react-native';
import { Box, Button, Card, CardModal, Checkbox, Text, } from '../../../../components';
import { testID, translate } from '../../../../helpers';
export function EnableMarginModal({ isEnabled, onEnable, loading, error, }) {
    const [visibleModal, setVisibleModal] = React.useState(null);
    const [termsAccepted, setTermsState] = React.useState(false);
    const onModalClose = React.useCallback(() => setVisibleModal(active => (active === 'acceptTerms' ? 'decline' : null)), [setVisibleModal]);
    const handleEnableMargin = React.useCallback(async () => {
        try {
            await onEnable();
            setVisibleModal('success');
        }
        catch {
            setVisibleModal('error');
        }
    }, [onEnable, setVisibleModal]);
    function getModalHeader() {
        switch (visibleModal) {
            case 'acceptTerms':
            case 'viewTerms':
                return translate('profile.margin.termsModalTitle');
            case 'decline':
            case 'error':
            case 'success':
            default:
                return translate('profile.margin.heading');
        }
    }
    let modalButtons = null;
    if (visibleModal === 'acceptTerms') {
        modalButtons = (<Box flexDirection="row" justifyContent="space-between" gap="m">
        <Button flex={1} label={translate('profile.margin.confirmButton')} disabled={!termsAccepted} loading={loading} onPress={handleEnableMargin} {...testID('marginAcceptTermsButton')}/>
        <Button flex={1} variant="line" label={translate('profile.margin.declineButton')} onPress={() => setVisibleModal('decline')} {...testID('marginDeclineTermsButton')}/>
      </Box>);
    }
    else if (visibleModal === 'success' ||
        visibleModal === 'error' ||
        visibleModal === 'decline') {
        modalButtons = (<Button flexDirection="column" flex={0} variant={visibleModal === 'success' ? 'primary' : 'secondary'} label={translate('common.ok')} onPress={() => setVisibleModal(null)} {...testID('marginTermsOkButton')}/>);
    }
    let modalBody = null;
    if (visibleModal === 'acceptTerms') {
        modalBody = (<>
        <Box m="m">
          <ScrollView style={styles.scrollContainer}>
            <Text color="textSecondary">
              {translate('profile.margin.termsText')}
            </Text>
          </ScrollView>
        </Box>
        <Box mx="m" mb="m">
          <Checkbox checked={termsAccepted} label={translate('profile.margin.termsCheckboxLabel')} onChange={() => setTermsState(!termsAccepted)}/>
        </Box>
      </>);
    }
    else if (visibleModal === 'viewTerms') {
        modalBody = (<>
        <Box m="m">
          <ScrollView style={styles.scrollContainer}>
            <Text color="textSecondary">
              {translate('profile.margin.termsText')}
            </Text>
          </ScrollView>
        </Box>
      </>);
    }
    else if (visibleModal === 'error') {
        modalBody = (<Box padding="m">
        <Text>{translate('profile.margin.errorModalText')}</Text>
        <Text mt="m">{error}</Text>
      </Box>);
    }
    else if (visibleModal === 'success') {
        modalBody = (<Box padding="m">
        <Text>{translate('profile.margin.successModalText')}</Text>
      </Box>);
    }
    else if (visibleModal === 'decline') {
        modalBody = (<Box padding="m">
        <Text>{translate('profile.margin.declineModalText')}</Text>
      </Box>);
    }
    return (<>
      <Card m="m" p="m">
        {isEnabled ? (<Pressable onPress={() => setVisibleModal('viewTerms')}>
            <Text m="m" textDecorationLine="underline" color="brandSolid">
              {translate('profile.margin.viewTermsButton')}
            </Text>
          </Pressable>) : (<Button label={translate('profile.margin.applyButton')} onPress={() => setVisibleModal('acceptTerms')}/>)}
      </Card>
      <CardModal isVisible={visibleModal !== null} onClose={onModalClose} kind={visibleModal === 'error' || visibleModal === 'decline'
            ? 'error'
            : 'default'} heading={getModalHeader()} footer={modalButtons}>
        {modalBody}
      </CardModal>
    </>);
}
const styles = StyleSheet.create({
    scrollContainer: {
        maxHeight: 300,
    },
});
