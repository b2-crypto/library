import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

import { canUseBiometrics } from '../hooks/useBiometrics';
import { setBioAuthStatus } from '../stores/auth';

export const formatInputCurrency = (
  inputText: string,
  decimalPlaces?: number,
): string => {
  // Remove left zeros and non-numeric symbols
  const sanitizedValue = inputText.replace(/^0+(?=\d)|[^0-9.]/g, '');

  if (typeof decimalPlaces !== 'undefined' && sanitizedValue.includes('.')) {
    const [integer, decimal] = sanitizedValue.split('.');
    return `${integer}.${decimal.substring(0, decimalPlaces)}`;
  }

  return sanitizedValue;
};

export const detectBiometricSensors = async (dispatch: Dispatch<AnyAction>) => {
  const can = await canUseBiometrics();
  console.log('canUseBiometrics', can);
  dispatch(setBioAuthStatus(can));
};
