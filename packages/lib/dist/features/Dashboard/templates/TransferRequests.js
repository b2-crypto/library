import React from 'react';
import { Box } from '../../../components/atoms';
import { useUserTransferRequests } from '../hooks';
import { RequestItem } from '../organisms/RequestItem';
export const TransferRequests = () => {
    const { data, isLoading } = useUserTransferRequests();
    return (<Box>
      {!!data?.length && !isLoading && <RequestItem request={data[0]}/>}
    </Box>);
};
