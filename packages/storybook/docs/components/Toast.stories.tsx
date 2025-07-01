import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { toastConfig, CustomToast } from '@apex-rn/library/helpers';
import { Box } from '@apex-rn/library/components';

const ToastComponent = ({ text }: { text: string }) => (
  <Toast config={toastConfig} />
);

export default {
  title: 'components/Toast',
  component: ToastComponent,
} as Meta<typeof ToastComponent>;

export const ToastStory: StoryFn<typeof ToastComponent> = ({ text }) => {
  useEffect(() => {
    Toast.show({
      type: CustomToast.text,
      text1: text,
    });
  }, [text]);

  return (
    <Box width="100%" height={400} backgroundColor="background3">
      <ToastComponent text={text} />
    </Box>
  );
};
ToastStory.storyName = 'Toast';
ToastStory.args = {
  text: 'Lorem ipsum dolor sit amet',
};
