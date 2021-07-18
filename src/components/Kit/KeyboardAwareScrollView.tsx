import React from 'react';
import { KeyboardAwareScrollView as NativeKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ChildrenProp } from '../../types/types';

export type KeyboardAwareScrollViewProps = {
  children: ChildrenProp;
};

export function KeyboardAwareScrollView(
  props: KeyboardAwareScrollViewProps
): JSX.Element {
  const {} = props;

  return (
    <NativeKeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      enableResetScrollToCoords={false}
      {...props}
    />
  );
}
