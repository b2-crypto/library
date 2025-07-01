import { NavigationState, PartialRoute, Route, useNavigationState } from '@react-navigation/native';
import { RootStackParamList } from './types';

const prevScreenSelector = (state: NavigationState) => {
  const { routes, index } = state;
  if (index > 0) {
    let prevRoute = routes[index - 1] as PartialRoute<Route<string, object | undefined>>;
    while (typeof prevRoute.state?.index !== 'undefined') { 
      prevRoute = prevRoute.state.routes[prevRoute.state.index]
    };
    return prevRoute.name;
  }
  return undefined;
};

export function usePrevRouteName() {
  return useNavigationState<RootStackParamList, string | undefined>(
    prevScreenSelector,
  );
}
