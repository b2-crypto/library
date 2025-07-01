import React from 'react';
import { View } from '../../../components/atoms';
import { TableCell } from '../../../components/molecules';
export const PairStatsRow = ({ row, isLastRow }) => {
    return (<View borderBottomColor="border3" borderBottomWidth={isLastRow ? 0 : 1} flexDirection="row">
      {row.map((cell, index) => (<View key={cell.title} borderRightColor="border3" borderRightWidth={index === row.length - 1 ? 0 : 1} flex={1}>
          <TableCell title={cell.title} value={cell.value} valueColor={cell.valueColor}/>
        </View>))}
    </View>);
};
