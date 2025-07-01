import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { Box } from '../../../../components/atoms';
import { useMarginPrechecks } from '../../hooks';
import { EnableMarginModal, MarginPrecheckErrors } from '../molecules';
import { useRequestMarginAccountMutation } from '../../../../services';
import { isApexError } from '../../../../types';

export const EnableMarginWidget = () => {
  const { isDenied, isMarginEnabled, isLoading, ...data } =
    useMarginPrechecks();
  const [requestMarginAccount, { isLoading: submitting, error }] =
    useRequestMarginAccountMutation();

  if (isLoading) {
    return (
      <Box m="m" justifyContent="center">
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  if (isDenied) {
    return <MarginPrecheckErrors {...data} />;
  }

  return (
    <EnableMarginModal
      isEnabled={isMarginEnabled}
      onEnable={async () => await requestMarginAccount().unwrap()}
      loading={submitting}
      error={error && isApexError(error) ? error.message : undefined}
    />
  );
};
