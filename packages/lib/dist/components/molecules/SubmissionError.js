import React from 'react';
import { Box, Text } from '../atoms';
import { testID } from '../../helpers/testId';
import { CloseIcon } from '../../assets/icons';
import { Button } from './Button';
export const SubmissionError = ({ error, onDismiss, }) => (<Box position="relative" alignItems="center" justifyContent="center" backgroundColor="error" accessible role="alert" accessibilityRole="alert" accessibilityLabel="Submission error" {...testID('submissionError')}>
    <Text color="textInverse" textAlign="center" variant="textBold" padding="sm">
      {error.replace(/_/g, ' ')}
    </Text>
    {onDismiss && (<Button position="absolute" right={0} variant="transparent" onPress={onDismiss} icon={<CloseIcon color="white" width={16} height={16}/>} accessibilityLabel="Close" {...testID('closeButton')}/>)}
  </Box>);
