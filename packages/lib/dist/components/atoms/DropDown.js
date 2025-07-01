import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, Platform, Pressable, StyleSheet, useWindowDimensions, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { testID } from '../../helpers/testId';
import { TouchableOpacity } from './TouchableOpacity';
import { BlurView } from './BlurView';
import { Box } from './Box';
const FullScreenContentWrapper = ({ top, children }) => {
    const { height } = useWindowDimensions();
    const Wrapper = Platform.OS === 'web' ? Box : BlurView;
    return (<>
      <Wrapper style={{ top, zIndex: 0 }}/>
      <Box style={{ marginTop: top }} borderBottomLeftRadius={8} borderBottomRightRadius={8} flex={1} maxHeight={0.75 * height} bg="background2">
        {children}
      </Box>
    </>);
};
const ContentWrapper = ({ children, ...rest }) => {
    return (<Box flex={1} width="100%" maxHeight={300} shadowColor="black" shadowOpacity={0.5} shadowRadius={25} shadowOffset={{ width: 0, height: 4 }} borderRadius={8} elevation={5} backgroundColor="background2" overflow={Platform.OS === 'android' ? 'hidden' : 'visible'} {...rest}>
      {children}
    </Box>);
};
export const DropDown = ({ value, items, listHeader, listItem: ListItem, dropDownTrigger: DropDownTrigger, blurBackground, width = 200, isLoading, setValue, onClose, disabled = false, ...rest }) => {
    const dropdownRef = useRef();
    const { top: safeTop } = useSafeAreaInsets();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState();
    const selectedItem = useMemo(() => items?.find(item => item.value === value), [items, value]);
    const visibleItems = useMemo(() => items.filter(item => !item.hide), [items]);
    const Wrapper = blurBackground ? FullScreenContentWrapper : ContentWrapper;
    const renderItemOption = useCallback(({ item, index }) => (<Pressable onPress={() => {
            setValue(item.value);
            setIsOpen(false);
        }} disabled={item.disabled} accessible accessibilityRole="menuitem" accessibilityLabel={item.title} {...testID(item.value.toString())} key={index}>
        <ListItem item={item}/>
      </Pressable>), [setValue, ListItem]);
    const openDropdown = useCallback(() => {
        dropdownRef.current?.measure((_fx, _fy, w, h, px, py) => {
            setDropdownPos({
                top: py + h - (Platform.OS === 'android' ? safeTop : 0),
                width: w,
                left: px,
            });
        });
        setIsOpen(true);
    }, [safeTop]);
    const toggleDropdown = useCallback(() => {
        if (disabled)
            return;
        setIsOpen(isOpenCurrent => {
            if (isOpenCurrent) {
                onClose?.();
            }
            else {
                openDropdown();
            }
            return !isOpenCurrent;
        });
    }, [disabled, openDropdown, onClose]);
    return (<>
      <TouchableOpacity ref={dropdownRef} onPress={toggleDropdown} minWidth={width} accessible accessibilityRole="combobox" disabled={disabled} {...rest}>
        <DropDownTrigger selectedItem={selectedItem} isOpen={isOpen}/>
      </TouchableOpacity>
      {isOpen && !!dropdownPos && (<Modal visible={isOpen} transparent animationType="none">
          <Pressable style={styles.dropdownListBackdrop} onPress={() => setIsOpen(false)}>
            <Wrapper {...dropdownPos}>
              {isLoading ? (<Box flex={1} justifyContent="center" alignItems="center">
                  <ActivityIndicator />
                </Box>) : (<Pressable style={styles.pressable} onPress={e => {
                    // stop propagate clicks inside the dropdown list to not be handled by backdrop.
                    e.stopPropagation();
                }}>
                  {listHeader}
                  <FlatList style={styles.list} data={visibleItems} renderItem={renderItemOption}/>
                </Pressable>)}
            </Wrapper>
          </Pressable>
        </Modal>)}
    </>);
};
const styles = StyleSheet.create({
    pressable: { flex: 1 },
    list: { flex: 1, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
    dropdownListBackdrop: {
        width: '100%',
        height: '100%',
    },
});
