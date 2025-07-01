import React from 'react';
import { Provider } from 'react-redux';

import { setUser } from '../../../../stores/auth';
import {
  createTestStore,
  mockApiSuccess,
  render,
  screen,
  waitFor,
} from '../../../../helpers/test-utils';
import { AccountBalanceWidget } from '../AccountBalance';

mockApiSuccess('/GetProducts', [
  {
    DecimalPlaces: 4,
    Product: 'USD',
    ProductFullName: 'US Dollar',
    ProductId: 1,
    ProductType: 'NationalCurrency',
  },
  {
    DecimalPlaces: 8,
    Product: 'BTC',
    ProductFullName: 'Bitcoin',
    ProductId: 2,
    ProductType: 'CryptoCurrency',
  },
  {
    DecimalPlaces: 8,
    Product: 'ETH',
    ProductFullName: 'Ethereum',
    ProductId: 3,
    ProductType: 'CryptoCurrency',
  },
  {
    DecimalPlaces: 8,
    Product: 'LTC',
    ProductFullName: 'Litcoin',
    ProductId: 4,
    ProductType: 'CryptoCurrency',
  },
]);
mockApiSuccess('/GetUserAccounts', [32]);
mockApiSuccess('/GetAccountInfo', {
  AccountId: 32,
  AccountName: 'Mock Account',
  AccountType: 'Asset',
});
mockApiSuccess('/GetUserInfo', {
  UserId: 32,
  AccountId: 32,
  UserName: 'admin',
  Email: 'admin@example.com',
});
mockApiSuccess('/GetAccountPositions', [
  {
    ProductSymbol: 'USD',
    ProductId: 1,
    Amount: 9497.782064728,
    Hold: 0.0,
    PendingDeposits: 0,
    PendingWithdraws: 0,
    NotionalProductId: 1,
    NotionalProductSymbol: 'USD',
    NotionalValue: 9497.782064728,
    NotionalHoldAmount: 0.0,
    NotionalRate: 1,
  },
  {
    ProductSymbol: 'BTC',
    ProductId: 2,
    Amount: 13.36868807,
    Hold: 0.0051,
    PendingDeposits: 0,
    PendingWithdraws: 0,
    NotionalProductId: 1,
    NotionalProductSymbol: 'USD',
    NotionalValue: 356943.971469,
    NotionalHoldAmount: 136.17,
    NotionalRate: 26700,
  },
  {
    ProductSymbol: 'ETH',
    ProductId: 3,
    Amount: 0.9,
    Hold: 0.001,
    PendingDeposits: 0,
    PendingWithdraws: 0,
    NotionalProductId: 1,
    NotionalProductSymbol: 'USD',
    NotionalValue: 1468.8,
    NotionalHoldAmount: 1.632,
    NotionalRate: 1632,
  },
  {
    ProductSymbol: 'LTC',
    ProductId: 4,
    Amount: -30,
    Hold: 0,
    PendingDeposits: 0,
    PendingWithdraws: 0,
    NotionalProductId: 1,
    NotionalProductSymbol: 'USD',
    NotionalValue: -1944.3,
    NotionalHoldAmount: 0.0,
    NotionalRate: 64.81,
  },
]);

describe('AccountBalance', () => {
  it('should calculate total balance correctly', async () => {
    const store = createTestStore();
    store.dispatch(setUser({ user: { UserId: 32, SessionToken: 'sesssion' } }));
    render(
      <Provider store={store}>
        <AccountBalanceWidget />
      </Provider>,
    );

    // loading
    await waitFor(async () =>
      expect(screen.getByLabelText('Total Balance Amount')).toHaveTextContent(
        '',
      ),
    );

    // calculated amount
    await waitFor(async () =>
      expect(screen.getByLabelText('Total Balance Amount')).toHaveTextContent(
        '$365,966.25',
      ),
    );
  });
});
