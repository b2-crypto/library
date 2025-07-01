import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, ButtonProps, Card, CardProps } from '../molecules';
import { CloseIcon } from '../../assets/icons';

const DEFAULT_MODAL_MARGIN = 16;

type Props = {
  isVisible?: boolean;
  modalProps?: ModalProps;
  modalStyles?: ViewStyle;
  bottomButtonProps?: ButtonProps;
  children: ReactNode;
  onClose?: () => void;
} & CardProps;

export const CardModal = ({
  isVisible,
  modalProps,
  modalStyles,
  children,
  onClose,
  ...cardProps
}: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <Modal
      style={[
        styles.modal,
        { marginTop: top + DEFAULT_MODAL_MARGIN },
        modalStyles,
      ]}
      {...modalProps}
      isVisible={isVisible}
      onBackdropPress={onClose}>
      <Card
        variant="floating"
        marginTop="m"
        marginHorizontal="m"
        headingExtra={
          onClose ? (
            <Button
              variant="transparent"
              onPress={onClose}
              icon={<CloseIcon />}
              size="small"
              height={20}
            />
          ) : null
        }
        {...cardProps}>
        {children}
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0,
  },
});
