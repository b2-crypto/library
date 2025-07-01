import React from 'react';
import { useFormContext } from "react-hook-form";

import { useReceiveQR } from "../../hooks";
import { ReceiveQR } from "../molecules";
import { isApexError } from "../../../../types/apiResponses";

export const ReceiveQRWidget = () => {
  const { watch } = useFormContext<{ productId: number }>();
  const productId = watch('productId');
  const { data, error, isLoading } = useReceiveQR(productId);

  return (
    <ReceiveQR
      walletAddress={data || ''}
      error={error && isApexError(error) ? error.message : undefined}
      loading={isLoading}
    />
  );
};
