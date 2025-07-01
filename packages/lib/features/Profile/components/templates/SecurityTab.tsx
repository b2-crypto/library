import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { TwoFactorCardProps } from '../../types';

import {
  BiometricWidget,
  PasswordResetCard,
  TwoFactorCard,
} from '../organisms';

type Props = TwoFactorCardProps & {
  /** Callback on enable biometric */
  onEnableBiometric: () => void;
};

export const SecurityTab = ({ onEnableBiometric, ...props }: Props) => (
  <ScrollView contentContainerStyle={styles.contentContainer}>
    <PasswordResetCard />
    <BiometricWidget onEnable={onEnableBiometric} />
    <TwoFactorCard {...props} />
  </ScrollView>
);

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 70,
  },
});
