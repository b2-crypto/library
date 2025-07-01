export declare const canUseBiometrics: () => Promise<boolean>;
export declare const useBiometrics: () => {
  /** flag indicating if user enabled biometric authentication */
  isBiometricsEnabled: boolean | undefined;
  /** sets the value for the 'isBiometricsEnabled' */
  setBiometricEnabled: (
    value:
      | boolean
      | ((current: boolean | undefined) => boolean | undefined)
      | undefined,
  ) => void;
  /** shows the TouchID/FaceID native prompt */
  promptBiometrics: () => Promise<boolean>;
  /** asks for TouchID/FaceID and saves the username/password in the storage. Returns false when user doesn't pass TouchID verification. */
  enableBiometrics: ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => Promise<boolean>;
  /** clears all saved configuration */
  clearBiometrics: () => void;
  /** updates password (might be useful when user resets his password) in Web app */
  updatePassword: ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => Promise<void>;
  /** asks for TouchID/FaceID and clears biometric configuration */
  disableBiometrics: () => Promise<void>;
  /** returns username/password stored in encrypted storage (if any) */
  getCredentials: () => {
    userName: string | undefined;
    password: string | undefined;
  };
};
