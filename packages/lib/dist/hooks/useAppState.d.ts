import { AppStateStatus } from 'react-native';
export declare const useAppState: ({
  onChange,
  onForeground,
  onBackground,
}: {
  onChange?: ((state: AppStateStatus) => void) | undefined;
  onForeground?: (() => void) | undefined;
  onBackground?: (() => void) | undefined;
}) => {
  appState: 'unknown' | 'active' | 'background' | 'inactive' | 'extension';
};
export default useAppState;
