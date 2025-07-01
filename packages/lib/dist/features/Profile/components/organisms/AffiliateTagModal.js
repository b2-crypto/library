import React, { useState } from 'react';
import { Box, Input, Text } from '../../../../components/atoms';
import { CardModal } from '../../../../components/organisms';
import { translate } from '../../../../helpers/i18n';
import { Button } from '../../../../components';
export const AffiliateTagModal = ({ modalVisible, onClose: handleClose, tag = '', onSubmit, error, }) => {
    const [tagValue, setTagValue] = useState(tag);
    return (<CardModal isVisible={modalVisible} onClose={handleClose} heading={translate(`profile.affiliate.createTagModal.${tag ? 'edit' : 'create'}`)} footer={<Button flexDirection="column" flex={0} label={translate(`profile.affiliate.createTagModal.${tag ? 'edit' : 'create'}`)} onPress={() => onSubmit(tagValue)}/>}>
      <Box margin="m" marginBottom="l">
        <Input placeholder={translate('profile.affiliate.createTagModal.placeholder')} value={tagValue} onChangeText={newVal => setTagValue(newVal)} autoCapitalize="none"/>
        {error && (<Text color="error" marginTop="m">
            {error}
          </Text>)}
      </Box>
    </CardModal>);
};
