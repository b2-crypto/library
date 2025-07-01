import React, { useState } from 'react';
import { Box, Text, FormItem, Input } from '../../../../components/atoms';
import { Button, Card } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';

type Props = {
  loading?: boolean;
  onSubmit: (password: string) => void;
  error?: string;
};

export const ConfirmPasswordCard = ({ onSubmit, loading, error }: Props) => {
  const [password, setPassword] = useState('');
  return (
    <Card
      marginHorizontal="m"
      heading={translate('profile.confirmPassword.cardTitle')}
      footer={
        <Button
          label={translate('profile.confirmPassword.submitButton')}
          loading={loading}
          disabled={!password.length}
          onPress={() => onSubmit(password)}
        />
      }>
      <Box padding="m">
        <Text mb="m">{translate('profile.confirmPassword.cardMessage')}</Text>
        <FormItem label={translate('profile.confirmPassword.passwordLabel')}>
          <Input
            autoComplete="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </FormItem>
        {!!error && <Text color="error" mt="m">{error}</Text>}
      </Box>
    </Card>
  );
};
