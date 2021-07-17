import React from 'react';
import { Card, Text } from '../Kit';

export function NoTodoItem() {
  return (
    <Card bg="secondary" padding={1} curve>
      <Text typo="sm" _textAlign="center">
        There is no todo. You can add one by pressing "Add Todo" button
      </Text>
    </Card>
  );
}
