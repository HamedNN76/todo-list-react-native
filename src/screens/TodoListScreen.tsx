import React from 'react';
import { config } from '../../config';
import { Button, ScreenContainer, Text } from '../components/Kit';
import { StackNavigationProp } from '../navigation/Stack';

export type TodoListScreenProps = {
  navigation: StackNavigationProp<'TodoList'>;
};

export function TodoListScreen(props: TodoListScreenProps) {
  const { navigation } = props;

  const handleNavigate = () => {
    navigation.navigate(config.routes.listItem, { id: '1' });
  };

  return (
    <ScreenContainer flex={1} bg="primaryBg">
      <Text>hi</Text>
      <Button
        text="hi there"
        startIcon="plus"
        bg="primary"
        size="lg"
        typo="lg"
        bold
        block
        iconSize={3}
        onPress={handleNavigate}
      />
    </ScreenContainer>
  );
}
