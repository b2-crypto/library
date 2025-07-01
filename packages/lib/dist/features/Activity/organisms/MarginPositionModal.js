import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../../../components/atoms';
import { Button, Card, ModalBlurBg } from '../../../components/molecules';
import { CloseIcon } from '../../../assets/icons';
import { translate } from '../../../helpers/i18n';
import { PositionModalContent } from './PositionModalContent';
export const MarginPositionModal = ({ isVisible, type, onClose, onConfirm, onRepaymentItemsChange, loading, item, }) => {
    const { top } = useSafeAreaInsets();
    const repaymentItemsRef = React.useRef([]);
    const disableButton = useMemo(() => {
        return type === 'close' && repaymentItemsRef.current.length === 0;
    }, [type, repaymentItemsRef.current.length]); // <- corregido el dependency array
    if (!type) {
        return null;
    }
    return (<ModalBlurBg isVisible={isVisible} onBackdropPress={onClose} style={{ marginTop: top, justifyContent: 'flex-start' }}>
      <Card mt="s" heading={<Text variant="textBold" color="textSecondary" textAlign="justify">
            {translate(`activity.marginPosition.modalOptionHeader.${type}`)}
          </Text>} headingExtra={<Pressable onPress={onClose}>
            <CloseIcon />
          </Pressable>} footer={<Button size="big" onPress={onConfirm} label={translate('activity.submitButton')} loading={loading} disabled={disableButton}/>}>
        <PositionModalContent type={type} item={item} onSelectedItemsReady={items => {
            const current = repaymentItemsRef.current;
            const hasChanged = current.length !== items.length ||
                !current.every((item, index) => item.ProductId === items[index].ProductId);
            if (hasChanged) {
                repaymentItemsRef.current = items;
                if (onRepaymentItemsChange) {
                    onRepaymentItemsChange(items);
                }
            }
        }}/>
      </Card>
    </ModalBlurBg>);
};
