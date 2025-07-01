import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Copy } from '../../../../assets/icons/Copy';
import { Box, Text } from '../../../../components/atoms';
import { Button, Card } from '../../../../components/molecules';
import { translate } from '../../../../helpers/i18n';
export const AffiliateTagCard = ({ isLoading, onPress, tag, onCopy, affiliateUrl, }) => {
    return (<Card heading={<Text variant="bodyBold" fontSize={16}>
          {translate('profile.affiliate.tagCard.title')}
        </Text>} marginBottom="m" footer={<Button loading={isLoading} onPress={onPress} label={translate(`profile.affiliate.tagCard.${tag ? 'edit' : 'create'}`)}/>}>
      <Box padding="m">
        {isLoading ? (<Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>) : tag ? (<Box alignItems="center">
            <Text variant="subHeadlineReg">#{tag}</Text>
            <Box flexDirection="row" mt="m" justifyContent="center" alignItems="center">
              <Text marginHorizontal="l">{affiliateUrl}</Text>
              <TouchableOpacity onPress={onCopy}>
                <Copy />
              </TouchableOpacity>
            </Box>
          </Box>) : (<Text>{translate('profile.affiliate.tagCard.content')}</Text>)}
      </Box>
    </Card>);
};
