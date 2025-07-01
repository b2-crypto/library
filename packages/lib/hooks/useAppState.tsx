import { useState, useEffect } from 'react';
import { AppStateStatus, AppState } from 'react-native';

export const useAppState = ({
  onChange,
  onForeground,
  onBackground,
}: {
  onChange?: (state: AppStateStatus) => void;
  onForeground?: () => void;
  onBackground?: () => void;
}) => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && appState !== 'active') {
        onForeground?.();
      } else if (
        appState === 'active' &&
        nextAppState.match(/inactive|background/)
      ) {
        onBackground?.();
      }
      setAppState(nextAppState);
      onChange?.(nextAppState);
    };

    const appStateListner = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => appStateListner.remove();
  }, [onChange, onForeground, onBackground, appState]);

  // settings validation

  return { appState };
};

export default useAppState;
