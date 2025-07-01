import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
export declare const formatInputCurrency: (
  inputText: string,
  decimalPlaces?: number,
) => string;
export declare const detectBiometricSensors: (
  dispatch: Dispatch<AnyAction>,
) => Promise<void>;
