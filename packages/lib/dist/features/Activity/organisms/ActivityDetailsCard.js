import React from 'react';
import { Box, DashedBox, Text } from '../../../components/atoms';
import { SubmissionError } from '../../../components/molecules';
import { Card } from '../../../components/molecules';
import { testID } from '../../../helpers/testId';
export const ActivityDetailsCardInfo = ({ amount, currency, product, activityType, activityTypeColor = 'textSecondary', orderType, userInfo, valuesInfo, }) => (<DashedBox bottomDash paddingVertical="m" paddingHorizontal="l">
    <Box flexDirection="row" alignItems="baseline" marginBottom="sm" accessible accessibilityLabel="Amount" {...testID('amount')}>
      <Text variant="headlineReg" mr="xs">
        {amount}
      </Text>
      <Text variant="textBold">{currency}</Text>
    </Box>
    <Box flexDirection="row" justifyContent="space-between">
      <Box>
        <Box flexDirection="row" accessible accessibilityLabel="Type">
          <Text variant="bodyBold" color={activityTypeColor} mr="xxs" {...testID('type')}>
            {activityType}
          </Text>
          <Text variant="bodyBold" {...testID('product')}>
            {product}
          </Text>
        </Box>
        {!!orderType && (<Text variant="bodyReg" color="textSecondary" mt="xxs" accessible accessibilityLabel="Order Type" {...testID('orderType')}>
            {orderType}
          </Text>)}
        {userInfo?.map(({ title, value }) => (<Box mt="s" key={title} accessible accessibilityLabel={title} {...testID(title)}>
            <Text variant="captionReg" color="textSecondary">
              {title}
            </Text>
            <Text variant="bodyReg">{value}</Text>
          </Box>))}
      </Box>
      <Box>
        {valuesInfo?.map(({ title, value }, idx) => (<Box flexDirection="row" alignItems="baseline" justifyContent="flex-end" mb={idx + 1 !== valuesInfo.length ? 'xxs' : undefined} key={title} accessible accessibilityLabel={title} {...testID(title)}>
            <Text variant="captionReg" color="textSecondary" marginRight="xs">
              {title}:
            </Text>
            <Text>{value}</Text>
          </Box>))}
      </Box>
    </Box>
  </DashedBox>);
export const ActivityDetailsCardStatus = ({ activityStatus, activityTextColor, activityId, time, }) => (<Box paddingVertical="m" paddingHorizontal="l">
    <Box flexDirection="row" justifyContent="space-between">
      <Box>
        <Text variant="bodyBold" color={activityTextColor} marginBottom="xxs" {...testID('status')}>
          {activityStatus}
        </Text>
        <Text variant="bodyReg" color="textSecondary" {...testID('id')}>
          {activityId}
        </Text>
      </Box>
      <Box alignItems="flex-end" accessible accessibilityLabel="Date and time" {...testID('timestamp')}>
        <Text variant="bodyReg" color="textSecondary" marginBottom="xxs">
          {new Date(time).toLocaleDateString()}
        </Text>
        <Text variant="bodyReg" color="textSecondary">
          {new Date(time).toLocaleTimeString()}
        </Text>
      </Box>
    </Box>
  </Box>);
export const ActivityDetailsCard = ({ icon, title, extraIcon, amount, currency, product, activityType, activityTypeColor, orderType, userInfo, valuesInfo, activityStatus, activityTextColor, activityId, time, footer, error, }) => {
    return (<Card variant="elevated" margin="m" heading={<Box flexDirection="row" alignItems="center" accessible accessibilityLabel="Title" {...testID('title')}>
          {icon}
          <Text variant="subHeadlineBold" ml="sm">
            {title}
          </Text>
        </Box>} headingExtra={extraIcon ? (<Box width={36} height={36} alignItems="center" justifyContent="center" borderWidth={2} borderRadius={36} borderColor="border3">
            {extraIcon}
          </Box>) : null} footer={footer}>
      <ActivityDetailsCardInfo amount={amount} currency={currency} product={product} activityType={activityType} activityTypeColor={activityTypeColor} orderType={orderType} userInfo={userInfo} valuesInfo={valuesInfo}/>
      <ActivityDetailsCardStatus activityStatus={activityStatus} activityTextColor={activityTextColor} activityId={activityId} time={time}/>
      {error && <SubmissionError error={error}/>}
    </Card>);
};
