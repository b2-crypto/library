import React from 'react';
import Toast, { BaseToastProps, ToastConfig } from 'react-native-toast-message';

import { Box, Text, TouchableOpacity } from '../components/atoms';
import { CloseIcon } from '../assets/icons';

export const CustomToast = {
  text: 'text' as const,
  success: 'success' as const,
  error: 'error' as const,
};

interface ToastContentProps extends BaseToastProps {
  bgColor: 'brandBackground' | 'positive' | 'error';
}

const ToastContent = ({
  text1,
  text2,
  bgColor,
  ...props
}: ToastContentProps) => {
  return (
    <Box width="100%">
      <Box
        flex={1}
        marginHorizontal="m"
        padding="m"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        borderRadius={12}
        bg={bgColor}
        {...props}>
        <Box flexDirection="column">
          {text1 && (
            <Text variant="textBold" color="textInverse">
              {text1}
            </Text>
          )}
          {text2 && <Text color="textInverse">{text2}</Text>}
        </Box>
        <TouchableOpacity onPress={() => Toast.hide()}>
          <CloseIcon color="white" />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};
export const toastConfig: ToastConfig = {
  text: props => <ToastContent {...props} bgColor="brandBackground" />,
  success: props => <ToastContent {...props} bgColor="positive" />,
  error: props => <ToastContent {...props} bgColor="error" />,
};
