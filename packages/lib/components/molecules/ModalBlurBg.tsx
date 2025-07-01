import React, { ReactNode } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../theme';
import { BlurView } from '../atoms';

export const ModalBlurBg = ({
  children,
  ...props
}: { children: ReactNode } & Partial<ModalProps>) => {
  const theme = useTheme<Theme>();
  return (
    <Modal
      {...props}
      customBackdrop={
        <TouchableWithoutFeedback onPress={props.onBackdropPress}>
          {/**
           * This View has been added as a workaround for the issue
           * `Exception thrown while executing UI block: -[BlurView setOnClick:]: unrecognized selector sent to instance`
           * @see https://github.com/Kureev/react-native-blur/issues/611
           */}
          <View style={styles.backdrop}>
            <BlurView
              style={[
                styles.backdrop,
                { backgroundColor: theme.colors.toolbarBlur },
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
      }>
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({ backdrop: { flex: 1 } });
