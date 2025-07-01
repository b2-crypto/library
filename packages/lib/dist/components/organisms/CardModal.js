import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Card } from '../molecules';
import { CloseIcon } from '../../assets/icons';
const DEFAULT_MODAL_MARGIN = 16;
export const CardModal = ({ isVisible, modalProps, modalStyles, children, onClose, ...cardProps }) => {
    const { top } = useSafeAreaInsets();
    return (<Modal style={[
            styles.modal,
            { marginTop: top + DEFAULT_MODAL_MARGIN },
            modalStyles,
        ]} {...modalProps} isVisible={isVisible} onBackdropPress={onClose}>
      <Card variant="floating" marginTop="m" marginHorizontal="m" headingExtra={onClose ? (<Button variant="transparent" onPress={onClose} icon={<CloseIcon />} size="small" height={20}/>) : null} {...cardProps}>
        {children}
      </Card>
    </Modal>);
};
const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-start',
        margin: 0,
        padding: 0,
    },
});
