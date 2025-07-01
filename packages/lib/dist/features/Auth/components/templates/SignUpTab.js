import React from 'react';
import { useSignUp } from '../../hooks';
import { SignUpForm } from '../organisms';
export const SignUpTab = ({ onSuccess }) => {
    const [onSubmit, { error, isLoading }] = useSignUp();
    return (<SignUpForm onSubmit={onSubmit} error={error} isLoading={isLoading} onSuccess={onSuccess}/>);
};
