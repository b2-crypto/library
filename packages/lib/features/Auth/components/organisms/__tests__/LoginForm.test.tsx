import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '../../../../../helpers/test-utils';
import { LoginForm } from '../LoginForm';

describe('LoginForm', () => {
  test('form submits with username and password', async () => {
    const mockFn = jest.fn();

    render(<LoginForm onSubmit={mockFn} />);

    fireEvent.changeText(screen.getByPlaceholderText('User name'), 'admin');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass');
    fireEvent.press(screen.getByText('Log In'));

    await waitFor(() => expect(mockFn).toHaveBeenCalledWith({
      userName: 'admin',
      password: 'pass',
    }, undefined));
  });
});