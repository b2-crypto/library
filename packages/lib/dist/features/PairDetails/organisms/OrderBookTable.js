import React from 'react';
import { Text, View } from '../../../components/atoms';
import { OrderBookRow } from '../molecules';
import { testID } from '../../../helpers/testId';
export const OrderBookTable = ({ data, spread }) => {
    return (<View overflow="hidden" borderRadius={14}>
      <View paddingVertical="xs">
        <Text variant="textBold" textAlign="center" accessible accessibilityLabel="Orders price difference" {...testID('ordersDiffs')}>
          {spread}
        </Text>
      </View>
      {data.map((item, index) => (<OrderBookRow row={item} key={index}/>))}
    </View>);
};
