import React from 'react';

import { Box, Text } from '../../../../components/atoms';
import { Button, Card } from '../../../../components/molecules';
import { testID } from '../../../../helpers/testId';

type ProfileDataCardProps = {
  /** Card header text */
  headerText: string;
  /** Card fields */
  fields: {
    key: string;
    /** Field value */
    value: string | undefined;
    /** Action name */
    action?: string;
    /** Callback when press on field */
    onPress?: () => void;
  }[];
};

export const ProfileDataCard = ({
  headerText,
  fields,
}: ProfileDataCardProps) => (
  <Card heading={headerText}>
    {fields.map(({ key: fieldKey, value, action, onPress }, index) => (
      <Box
        key={fieldKey}
        height={36}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="m"
        borderColor="border3"
        borderBottomWidth={index !== fields.length - 1 ? 1 : 0}
        accessible
        accessibilityLabel={fieldKey}>
        <Box width={95}>
          <Text variant="bodyReg" color="textSecondary">
            {fieldKey}
          </Text>
        </Box>
        <Box flex={1}>
          <Text numberOfLines={1} {...testID(fieldKey)}>
            {value}
          </Text>
        </Box>
        {!!action && !!onPress && (
          <Button
            size="small"
            variant="transparent"
            onPress={onPress}
            label={
              <Text variant="bodyBold" color="brandSolid">
                {action}
              </Text>
            }
            accessibilityLabel={action}
            {...testID('actionButton')}
          />
        )}
      </Box>
    ))}
  </Card>
);
