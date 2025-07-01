import React from 'react';

import { useSignUp } from '../../hooks';

import { SignUpForm } from '../organisms';

type Props = {
  onSuccess?: () => void;
};

export const SignUpTab = ({ onSuccess }: Props) => {
  const [onSubmit, { error, isLoading }] = useSignUp();

  return (
    <SignUpForm
      onSubmit={onSubmit}
      error={error}
      isLoading={isLoading}
      onSuccess={onSuccess}
    />
  );
};
