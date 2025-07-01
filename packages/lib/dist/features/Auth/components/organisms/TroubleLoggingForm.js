import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { emailError, requiredErrorMessage, } from '../../../../helpers/constants';
import { translate } from '../../../../helpers/i18n';
import { isApexError } from '../../../../types/apiResponses';
import { Box, RadioGroup, Text } from '../../../../components/atoms';
import { FormInput, Button } from '../../../../components/molecules';
export const TroubleLoggingForm = ({ resendError, resetError, isLoading, onSubmit, }) => {
    const { watch, handleSubmit, control, clearErrors, setFocus, setValue } = useForm({
        defaultValues: { issueType: 'userName' },
        mode: 'onChange',
    });
    const radioGroupData = useMemo(() => [
        {
            value: 'userName',
            label: translate('auth.loginScreen.troublelogForgotPassword'),
        },
        {
            value: 'email',
            label: translate('auth.loginScreen.troublelogVerificationEmail'),
        },
    ], []);
    const issueType = watch('issueType');
    const error = issueType === 'email' ? resendError : resetError;
    useEffect(() => setFocus(issueType === 'userName' ? 'userName' : 'email'), [issueType]);
    return (<>
      <Box padding="m" borderBottomWidth={1} borderColor="border3">
        <Text color="textSecondary">
          {translate(`auth.loginScreen.troublelogTitle2-${issueType}`)}
        </Text>
        <Box mt="sm">
          <RadioGroup items={radioGroupData} value={issueType} onChange={v => setValue('issueType', v)}/>
        </Box>
      </Box>

      <Box padding="sm">
        {issueType === 'userName' ? (<FormInput key="userName" name="userName" autoCapitalize="none" textContentType="nickname" control={control} rules={{ required: requiredErrorMessage }} label={`${translate('auth.formField.userName')}:`} placeholder={translate('auth.formField.userName')} onSubmitEditing={handleSubmit(data => {
                clearErrors();
                onSubmit(data);
            })} enterKeyHint="done"/>) : (<FormInput key="email" name="email" autoCapitalize="none" textContentType="emailAddress" control={control} rules={{
                required: requiredErrorMessage,
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: emailError,
                },
            }} label={`${translate('auth.formField.email')}:`} placeholder={translate('auth.formField.email')} onSubmitEditing={handleSubmit(data => {
                clearErrors();
                onSubmit(data);
            })} enterKeyHint="done"/>)}
      </Box>

      <Box borderColor="transparent" borderTopColor="border3" borderWidth={1} padding="sm">
        {!!error && isApexError(error) && (<Text variant="error">{error.message}</Text>)}
        <Button marginVertical="none" loading={isLoading} variant="primary" label={translate('auth.loginScreen.sendEmail')} onPress={handleSubmit(data => {
            clearErrors();
            onSubmit(data);
        })}/>
      </Box>
    </>);
};
