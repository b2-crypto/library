import React, { useState } from 'react';

import { Languages, translate } from '../../../../helpers/i18n';
import { Box, Text, Radio } from '../../../../components/atoms';
import { CardModal } from '../../../../components/organisms';
import { Button } from '../../../../components';

type Props = {
  initialValues: string;
  modalVisible: boolean;
  isLoading?: boolean;
  languages: Languages;
  handleClose?: () => void;
  handleSubmit: (languageCode: string) => void;
};

export const SelectLanguageModal = ({
  initialValues,
  modalVisible,
  isLoading,
  languages,
  handleClose,
  handleSubmit,
}: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState(initialValues);

  return (
    <CardModal
      isVisible={modalVisible}
      onClose={handleClose}
      heading={translate('common.language')}
      footer={
        <Button
          flexDirection="column"
          flex={0}
          loading={isLoading}
          label={translate('common.ok')}
          onPress={() => handleSubmit(selectedLanguage)}
        />
      }>
      <Box paddingTop="m" paddingHorizontal="l">
        <Text color="textSecondary">
          {translate('profile.language.selectLanguage')}
        </Text>
        <Box marginVertical="xl">
          {Object.values(languages).map((language, idx, arr) => (
            <Box
              key={language.tag}
              mb={idx + 1 !== arr.length ? 'm' : undefined}>
              <Radio
                checked={language.tag === selectedLanguage}
                label={language.label}
                onChange={() => setSelectedLanguage(language.tag)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </CardModal>
  );
};
