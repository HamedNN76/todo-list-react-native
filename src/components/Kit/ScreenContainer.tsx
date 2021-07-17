import React from 'react';
import { Card, CardProps } from './Card';
import { TouchableWithoutFeedback } from './TouchableWithoutFeedback';
import { keyboard } from '../../utils/keyboard';
import { SafeAreaView } from './SafeAreaView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from './Container';

export type ScreenContainerProps = {
  fluid?: boolean;
  dismissKeyboard?: boolean;
  safeArea?: boolean;
  bottomTab?: boolean;
} & CardProps;

export function ScreenContainer(props: ScreenContainerProps): JSX.Element {
  const {
    fluid,
    dismissKeyboard,
    children,
    safeArea,
    bottomTab,
    ...restProps
  } = props;

  const insets = useSafeAreaInsets();

  const handleOnPress = () => {
    keyboard.close();
  };

  const dismissKeyboardElement = () =>
    dismissKeyboard ? (
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <Card flex={1}>{children}</Card>
      </TouchableWithoutFeedback>
    ) : (
      children
    );

  return (
    <Container flex={1} bg="primaryBg" fluid={fluid} {...restProps}>
      {safeArea ? (
        <SafeAreaView
          marginBottom={bottomTab ? insets.bottom : undefined}
          edges={['right', 'bottom', 'left']}
        >
          {dismissKeyboardElement()}
        </SafeAreaView>
      ) : (
        dismissKeyboardElement()
      )}
    </Container>
  );
}
