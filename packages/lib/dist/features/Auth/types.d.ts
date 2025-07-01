export interface UserNameFormData {
  userName: string;
}
export interface EmailFormData {
  email: string;
}
export interface PasswordFormData {
  password: string;
}
export interface ConfirmPassword {
  confirmPassword: string;
}
export interface AuthenticationFormData {
  code: string;
}
export interface LogInFormData extends UserNameFormData, PasswordFormData {}
export interface SignUpFormData
  extends LogInFormData,
    ConfirmPassword,
    EmailFormData {}
export interface UpdatePasswordFormData
  extends PasswordFormData,
    ConfirmPassword {}
export type FormValues = {
  userName: string;
  email: string;
  issueType: string;
};
