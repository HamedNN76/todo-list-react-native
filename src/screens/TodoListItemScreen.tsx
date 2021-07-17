import React from 'react';
import { ScreenContainer, Text } from '../components/Kit';

export function TodoListItemScreen() {
  return (
    <ScreenContainer safeArea dismissKeyboard>
      <Text>Todo list item</Text>
    </ScreenContainer>
  );
}
