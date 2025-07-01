import React, { useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Camera, CameraType } from 'react-native-camera-kit';
import { PERMISSIONS } from 'react-native-permissions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CloseIcon } from '@apex-rn/library/assets/icons';
import { Box, Text, Button } from '@apex-rn/library/components';
import { translate } from '@apex-rn/library/helpers';
import { usePermission } from '@apex-rn/library/hooks';
import { useTheme } from '@apex-rn/library/theme';

import { RootStackScreenProps } from '../routes/types';

export const Scanner = ({
  navigation,
  route: {
    params: { onGoBack },
  },
}: RootStackScreenProps<'Scanner'>) => {
  const { height, width } = useWindowDimensions();
  const [status] = usePermission(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  );
  const { colors } = useTheme();

  const { squareSize, heightBlurProps, widthBlurProps } = useMemo(() => {
    const size = 200;
    const halfHeight = (height - size) / 2;
    const halfWidth = (width - size) / 2;
    return {
      squareSize: size,
      heightBlurProps: {
        height: halfHeight,
        bg: 'white' as const,
        opacity: 0.5,
      },
      widthBlurProps: {
        width: halfWidth,
        bg: 'white' as const,
        opacity: 0.5,
      },
    };
  }, [height, width]);

  const onReadCode = useCallback(
    event => {
      onGoBack(event.nativeEvent.codeStringValue);
      navigation.goBack();
    },
    [navigation, onGoBack],
  );

  if (!status) {
    return (
      <Box justifyContent="center" alignItems="center" width="100%" flex={1}>
        {status === false ? (
          <Text variant="error">{translate('qr_scanner.blocked_status')}</Text>
        ) : (
          <ActivityIndicator size="large" color={colors.textPrimary} />
        )}
      </Box>
    );
  }

  return (
    <Box style={StyleSheet.absoluteFill}>
      <Camera
        style={StyleSheet.absoluteFill}
        cameraType={CameraType.Back}
        flashMode="off"
        scanBarcode
        onReadCode={onReadCode}
      />

      <Box style={StyleSheet.absoluteFill}>
        <Box {...heightBlurProps} />
        <Box height={squareSize} flexDirection="row">
          <Box {...widthBlurProps} />
          <Box width={squareSize} borderWidth={1} />
          <Box {...widthBlurProps} />
        </Box>
        <Box {...heightBlurProps} />
      </Box>

      <Box style={StyleSheet.absoluteFill}>
        <SafeAreaView>
          <Box flexDirection="row" mt="xl">
            <Box flex={0.2} />
            <Box flex={0.6} justifyContent="center" alignItems="center">
              <Text variant="textBold">
                {translate('qr_scanner.scan_title')}
              </Text>
            </Box>
            <Box flex={0.2} justifyContent="center" alignItems="center">
              <Button
                variant="line"
                bg="transparent"
                borderColor="border1"
                icon={<CloseIcon />}
                onPress={navigation.goBack}
              />
            </Box>
          </Box>
        </SafeAreaView>
      </Box>
    </Box>
  );
};
