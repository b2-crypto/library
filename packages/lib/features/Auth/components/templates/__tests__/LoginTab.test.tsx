import React from 'react';
import { Provider } from 'react-redux';

import { canUseBiometrics } from '../../../../../hooks/useBiometrics';
import { setBioAuthStatus } from '../../../../../stores/auth';
import {
  createTestStore,
  fireEvent,
  mockApiSuccess,
  render,
  screen,
  waitFor,
} from '../../../../../helpers/test-utils';
import { LoginTab } from '../LoginTab';

jest.mock('../../../../../hooks/useBiometrics', () => {
  const actual = jest.requireActual('../../../../../hooks/useBiometrics');

  return {
    __esModule: true,
    ...actual,
    canUseBiometrics: jest.fn(() => false),
  };
});

mockApiSuccess('/GetUserConfig', []);
mockApiSuccess('/getInstruments', []);
mockApiSuccess('/GetProducts', []);
mockApiSuccess('/GetLevel1Summary', []);
mockApiSuccess('/GetUserInfo', {
  UserId: 32,
  UserName: 'admin',
  Email: 'admin@example.com',
});
mockApiSuccess('/GetAccountPositions', []);

describe('LoginTab', () => {
  it('should authenticate user successfully', async () => {
    (canUseBiometrics as jest.Mock).mockResolvedValue(false);
    mockApiSuccess(
      '/authenticate',
      {
        AccountId: 1,
        Authenticated: true,
        OMSId: 1,
        SessionToken: 'session-token-base-64',
        UserId: 32,
      },
      'get',
    );
    const store = createTestStore();
    render(
      <Provider store={store}>
        <LoginTab />
      </Provider>,
    );

    fireEvent.changeText(screen.getByPlaceholderText('User name'), 'admin');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass');
    fireEvent.press(screen.getByText('Log In'));

    await waitFor(() =>
      expect(store.getState().auth.isAuthenticated).toBeTruthy(),
    );
  });

  it('should render authentication error', async () => {
    (canUseBiometrics as jest.Mock).mockResolvedValue(false);
    mockApiSuccess(
      '/authenticate',
      {
        Authenticated: false,
        errormsg: 'Invalid username or password',
      },
      'get',
    );
    const store = createTestStore();
    render(
      <Provider store={store}>
        <LoginTab />
      </Provider>,
    );

    fireEvent.changeText(screen.getByPlaceholderText('User name'), 'admin');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass');
    fireEvent.press(screen.getByText('Log In'));

    await waitFor(() =>
      expect(
        screen.getByText('Invalid username or password'),
      ).toBeOnTheScreen(),
    );
  });

  it('should call onBiometricSetup if biometrics is enabled', async () => {
    (canUseBiometrics as jest.Mock).mockResolvedValue(true);

    const mockCb = jest.fn();
    mockApiSuccess(
      '/authenticate',
      {
        AccountId: 1,
        Authenticated: true,
        OMSId: 1,
        SessionToken: 'session-token-base-64',
        UserId: 32,
      },
      'get',
    );
    const store = createTestStore();
    store.dispatch(setBioAuthStatus(true));
    render(
      <Provider store={store}>
        <LoginTab onBiometricSetup={mockCb} />
      </Provider>,
    );

    fireEvent.changeText(screen.getByPlaceholderText('User name'), 'admin');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass');
    fireEvent.press(screen.getByText('Log In'));

    await waitFor(() =>
      expect(mockCb).toHaveBeenCalledWith({
        userName: 'admin',
        password: 'pass',
      }),
    );
  });
});
