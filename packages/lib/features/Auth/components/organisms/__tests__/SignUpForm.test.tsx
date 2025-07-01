import React from 'react';

import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '../../../../../helpers/test-utils';
import { SignUpForm } from '../SignUpForm';

describe('SignUpForm', () => {
  test('should call submit with payload when all fields filled', async () => {
    const mockFn = jest.fn();

    render(<SignUpForm onSubmit={mockFn} />);

    fireEvent.changeText(screen.getByPlaceholderText('User name'), 'admin');
    fireEvent.changeText(
      screen.getByPlaceholderText('Email'),
      'admin@example.com',
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('Password'),
      'Password!123',
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('Confirm Password'),
      'Password!123',
    );
    fireEvent.press(screen.getByRole('checkbox'));

    act(() => {
      fireEvent.press(screen.getByText('Sign up'));
    });

    await waitFor(() =>
      expect(mockFn).toHaveBeenCalledWith({
        userName: 'admin',
        email: 'admin@example.com',
        password: 'Password!123',
        confirmPassword: 'Password!123',
        isAccepted: true,
      }),
    );

    await waitFor(async () =>
      expect(
        await screen.findByText('Welcome to AlphaPoint'),
      ).toBeOnTheScreen(),
    );
  });

  test('should fail validation when the checkbox is not checked', async () => {
    const mockFn = jest.fn();

    render(<SignUpForm onSubmit={mockFn} />);

    fireEvent.changeText(screen.getByPlaceholderText('User name'), 'admin');
    fireEvent.changeText(
      screen.getByPlaceholderText('Email'),
      'admin@example.com',
    );
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass');
    fireEvent.changeText(
      screen.getByPlaceholderText('Confirm Password'),
      'pass',
    );

    await act(async () => {
      fireEvent.press(screen.getByText('Sign up'));
    });

    expect(await screen.findByText('Field must be checked')).toBeOnTheScreen();

    await waitFor(() => expect(mockFn).not.toHaveBeenCalled());
  });
});
