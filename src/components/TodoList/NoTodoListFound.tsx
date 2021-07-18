import React from 'react';
import { goBack } from '../../navigation/navigation';
import { Button, Card, Text } from '../Kit';

export function NoTodoListFound() {
  return (
    <Card flex={1} alignItems="center" justifyContent="center">
      <Text typo="title" margin={[2, 0]}>
        Not Found 404
      </Text>
      <Button
        margin={[2, 0]}
        text="Back to todo list"
        block
        bg="secondary"
        size="lg"
        typo="sm"
        onPress={goBack}
        startIcon="chevron-left"
      />
    </Card>
  );
}
