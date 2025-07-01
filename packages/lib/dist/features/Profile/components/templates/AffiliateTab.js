import Clipboard from '@react-native-clipboard/clipboard';
import React, { useCallback, useState } from 'react';
import Toast from 'react-native-toast-message';
import { Box, Text } from '../../../../components/atoms';
import { Card, SectionHeading } from '../../../../components/molecules';
import { translate as t } from '../../../../helpers/i18n';
import { CustomToast } from '../../../../helpers/toastConfig';
import { container } from '../../../../services/container';
import { isApexError } from '../../../../types/apiResponses';
import { useAffiliate } from '../../hooks/useAffiliate';
import { AffiliateCountCard, AffiliateTagCard, AffiliateTagModal, } from '../organisms';
export const AffiliateTab = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { tag, tagCount, isLoading, refetchTag, setTag, error } = useAffiliate();
    const webBaseUrl = container.getConfigValue('webBaseUrl');
    const envUrl = encodeURI(`${webBaseUrl}signup?aff=${tag}`);
    const onSubmit = useCallback(async (newTag) => {
        if (newTag === tag || !newTag.length)
            return;
        await setTag(newTag);
        Toast.show({
            type: CustomToast.text,
            text1: t('profile.affiliate.createTagModal.success'),
        });
        setTimeout(() => {
            // This timeout is for the slight delay between the tag modification,
            // and the tag refetch. This ensures that the tag is always updated after the server modification.
            refetchTag();
            setModalVisible(false);
        }, 100);
    }, [refetchTag, setTag, tag]);
    const onCopy = useCallback(() => {
        Clipboard.setString(envUrl);
        Toast.show({
            type: CustomToast.text,
            text1: t('profile.affiliate.copyTag'),
        });
    }, [envUrl]);
    return (<Box paddingHorizontal="m">
      {!isLoading && (<AffiliateTagModal modalVisible={modalVisible} onClose={() => setModalVisible(false)} tag={tag} onSubmit={onSubmit} error={error && isApexError(error) ? error.message : undefined}/>)}
      <SectionHeading>{t('profile.affiliate.title')}</SectionHeading>
      <Card marginVertical="m" padding="m">
        <Text>{t('profile.affiliate.subTitle')}</Text>
      </Card>
      <AffiliateTagCard onPress={() => setModalVisible(true)} isLoading={isLoading} tag={tag} onCopy={onCopy} affiliateUrl={envUrl}/>
      <AffiliateCountCard isLoading={isLoading} affiliateCount={tagCount}/>
    </Box>);
};
