import { useTheme } from '@shopify/restyle';
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Theme } from '../../../../theme';
import { DashedBox, Text } from '../../../../components/atoms';
import { Card } from '../../../../components/molecules';
import loginScreenBGImage from '../../../../assets/images/loginScreenBG.png';
import { testID } from '../../../../helpers/testId';

type AuthScreenProps = {
  /** Optional logo component */
  logo?: React.ReactNode;
  /** Card header */
  headerText: string;
  children: React.ReactNode | React.ReactNode[];
  /** Screen footer */
  footer?: React.ReactNode | React.ReactNode[];
};

export const AuthScreen = ({
  logo,
  headerText,
  children,
  footer,
}: AuthScreenProps) => {
  const theme = useTheme<Theme>();

  return (
    <ImageBackground
      source={loginScreenBGImage}
      style={[
        styles.imgBackground,
        { backgroundColor: theme.colors.brandSolid },
      ]}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.flexGrowing}>
        {logo}
        <KeyboardAwareScrollView
          style={styles.flexGrowing}
          contentContainerStyle={[
            styles.loginFormWrap,
            { padding: theme.spacing.m },
          ]}>
          <Card alignSelf="stretch">
            <DashedBox bottomDash paddingVertical="m" paddingHorizontal="l">
              <Text
                variant="subHeadlineBold"
                color="brandSolid"
                {...testID('header')}
                accessible
                accessibilityRole="header">
                {headerText}
              </Text>
            </DashedBox>
            {children}
          </Card>
          {footer}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: { height: '100%' },
  flexGrowing: { flex: 1 },
  loginFormWrap: { alignItems: 'center' },
});
