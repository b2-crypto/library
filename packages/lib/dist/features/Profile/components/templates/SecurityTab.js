import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BiometricWidget, PasswordResetCard, TwoFactorCard, } from '../organisms';
export const SecurityTab = ({ onEnableBiometric, ...props }) => (<ScrollView contentContainerStyle={styles.contentContainer}>
    <PasswordResetCard />
    <BiometricWidget onEnable={onEnableBiometric}/>
    <TwoFactorCard {...props}/>
  </ScrollView>);
const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 70,
    },
});
