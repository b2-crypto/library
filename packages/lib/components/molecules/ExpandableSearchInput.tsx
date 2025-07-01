import React, { useCallback, memo, useRef, useEffect, useMemo } from 'react';
import { Animated, Easing, StyleSheet, TextInput } from 'react-native';
import debounce from 'lodash/debounce';

import { Input, InputProps } from '../atoms';
import { translate } from '../../helpers/i18n';
import { ArrowLeftIcon, Search } from '../../assets/icons';

type SearchInputProps = InputProps & {
  isExpanded?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
};

// Extracted expanded state component
const ExpandedSearch = memo(
  ({
    onCollapse,
    onExpand,
    isExpanded,
    ...inputProps
  }: {
    onCollapse?: () => void;
    onExpand?: () => void;
    isExpanded?: boolean;
  } & Omit<InputProps, 'prefix'>) => {
    const inputRef = useRef<TextInput>(null);

    const handleIconPress = debounce(
      () => {
        if (isExpanded) {
          // Need a time out to wait until the input is focused
          // Otherwise, the input will not lose focus and the search will not collapse
          setTimeout(() => {
            inputRef.current?.blur();
            onCollapse?.();
          }, 100);
        } else {
          onExpand?.();
        }
      },
      200,
      { leading: true, trailing: false },
    );

    const prefix = useMemo(() => {
      const IconComponent = isExpanded ? ArrowLeftIcon : Search;
      return (
        <IconComponent width={16} height={16} onTouchEnd={handleIconPress} />
      );
    }, [isExpanded, handleIconPress]);

    const handleFocus = useCallback(() => {
      if (!isExpanded) {
        onExpand?.();
      }
    }, [isExpanded, onExpand]);

    return (
      <Input
        onFocus={handleFocus}
        size="small"
        placeholder={translate('search')}
        boxProps={{
          paddingLeft: 'sm',
          flex: isExpanded ? 1 : 0,
          maxWidth: isExpanded ? 'auto' : 43,
        }}
        prefix={prefix}
        autoCapitalize="none"
        ref={input => {
          if (input) {
            (inputRef as React.MutableRefObject<TextInput>).current = input;
          }
        }}
        {...inputProps}
      />
    );
  },
);

export const ExpandableSearchInput = (props: SearchInputProps) => {
  const { isExpanded, onExpand, onCollapse, ...inputProps } = props;
  const widthAnim = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;

  const interpolatedFlex = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // From no flex to full flex
  });

  useEffect(() => {
    // Create a new animation configuration
    const animConfig = {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    };

    // Start the animation and ensure it completes
    const animation = Animated.timing(widthAnim, animConfig);
    animation.start();

    // Clean up animation if component unmounts during animation
    return () => {
      animation.stop();
    };
  }, [isExpanded, widthAnim]);

  const handleCollapse = useCallback(() => {
    onCollapse?.();
  }, [onCollapse]);

  const handleExpand = useCallback(() => {
    onExpand?.();
  }, [onExpand]);

  return (
    <Animated.View style={[styles.container, { flex: interpolatedFlex }]}>
      <ExpandedSearch
        onCollapse={handleCollapse}
        isExpanded={isExpanded}
        onExpand={handleExpand}
        {...inputProps}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
