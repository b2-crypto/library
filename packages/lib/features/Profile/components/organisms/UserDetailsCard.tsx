import React from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';

import { selectUser } from '../../../../stores/auth';
import { useGetUserInfoQuery } from '../../../../services/apexApi';
import { useSetUserConfigMutation } from '../../../../services/profileApi';
import { useModalControl } from '../../../../hooks';
import { useUserConfig } from '../../../../hooks';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { translate, getLanguage, getLanguageConfig, setLanguage } from '../../../../helpers/i18n';

import { SelectLanguageModal } from './SelectLanguageModal';
import { ProfileDataCard } from './ProfileDataCard';

export const UserDetailsCard = () => {
  const user = useAppSelector(selectUser);
  const { data: userConfig } = useUserConfig();

  const { data: userInfo } = useGetUserInfoQuery(
    user?.UserId ? { userId: user.UserId } : skipToken,
  );

  const { modalVisible, showModal, hideModal } = useModalControl();

  const [setUserConfig, { isLoading }] = useSetUserConfigMutation();
  const language = getLanguage(userConfig?.Language);

  const onUpdatePress = async (languageCode: string) => {
    if (!user) return;
    setLanguage(languageCode);
    await setUserConfig({
      userId: user.UserId,
      config: [
        {
          Key: 'Language',
          Value: languageCode,
        },
      ],
    });
    hideModal();
  };

  const fields = [
    { key: translate('common.username'), value: userInfo?.UserName },
    { key: translate('common.email'), value: userInfo?.Email },
    {
      key: translate('common.language'),
      value: language.label,
      action: translate('change'),
      onPress: showModal,
    },
  ];

  return (
    <>
      <ProfileDataCard
        headerText={translate('common.profile')}
        fields={fields}
      />
      <SelectLanguageModal
        initialValues={language.tag}
        modalVisible={modalVisible}
        isLoading={isLoading}
        languages={getLanguageConfig()}
        handleClose={hideModal}
        handleSubmit={onUpdatePress}
      />
    </>
  );
};
