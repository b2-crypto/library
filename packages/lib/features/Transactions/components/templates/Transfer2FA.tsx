import React, { useCallback, useState } from 'react';
import { Box, FormItem, Input } from '../../../../components/atoms';
import { Button, Card } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';
import { useAuthenticate2FAMutation } from '../../../../services/profileApi';
import { CloseIcon } from '../../../../assets/icons';
import { translate } from '../../../../helpers/i18n';

type Props = {
  onSuccess: () => void;
  onClose: () => void;
};

export const Transfer2FA = ({ onSuccess, onClose }: Props) => {
  const [code, setCode] = useState<string>();
  const [authorize, { isError, isLoading, reset }] =
    useAuthenticate2FAMutation();

  const submit = useCallback(async () => {
    if (!code) {
      return;
    }
    const result = await authorize({ code });
    if ('data' in result && result.data.Authenticated) {
      onSuccess();
    } else {
      reset();
    }
  }, [authorize, code, onSuccess, reset]);

  return (
    <Card
      variant="elevated"
      heading={translate('transaction.confirmWith2FaTitle')}
      headingExtra={
        <Button
          variant="transparent"
          onPress={onClose}
          icon={<CloseIcon />}
          size="small"
          height={20}
        />
      }
      footer={<Button onPress={submit} loading={isLoading} label={'Send'} />}>
      <Box padding="m">
        <FormItem
          label={translate('common.2faCode')}
          error={isError ? translate('common.invalid2FaCode') : undefined}>
          <Input
            keyboardType="number-pad"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChangeText={setCode}
            {...testID('2faCode')}
            onSubmitEditing={submit}
            returnKeyType="done"
            hasError={isError}
          />
        </FormItem>
      </Box>
    </Card>
  );
};
