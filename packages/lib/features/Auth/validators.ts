import * as yup from 'yup';
import {
  checkboxError,
  confirmPasswordError,
  emailError,
  passwordValidation,
  passwordValidError,
  radioError,
  numericOnlyError,
  requiredErrorMessage,
} from '../../helpers/constants';

export const schemaToken = yup.object().shape({
  code: yup
    .string()
    .max(6)
    .matches(/[0-9]/, numericOnlyError)
    .required(requiredErrorMessage),
});

export const shemaUpdatePassword = yup.object().shape({
  password: yup
    .string()
    .required(requiredErrorMessage)
    .matches(passwordValidation, passwordValidError),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], confirmPasswordError)
    .required(requiredErrorMessage),
});

export const schemaEmail = yup.object().shape({
  email: yup.string().email(emailError).required(requiredErrorMessage),
  issueType: yup.string().required(radioError),
});

export const schemaLogIn = yup.object().shape({
  userName: yup.string().required(requiredErrorMessage),
  password: yup.string().required(requiredErrorMessage),
});

export const sendSchema = yup.object().shape({
  emailAddress: yup.string().email(emailError),
  amount: yup.string().max(8).required(requiredErrorMessage),
});

export const schemaSignUp = yup.object().shape({
  userName: yup.string().required(requiredErrorMessage),
  email: yup.string().email(emailError).required(requiredErrorMessage),
  password: yup
    .string()
    .required(requiredErrorMessage)
    .matches(passwordValidation, passwordValidError),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], confirmPasswordError)
    .required(requiredErrorMessage),
  isAccepted: yup.boolean().default(true).oneOf([true], checkboxError),
});
