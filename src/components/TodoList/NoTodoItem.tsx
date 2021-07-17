import React from 'react';
import { useAppSelector } from '../../hooks/store';
import { Card, Text } from '../Kit';
import { filters } from './TodoListFilter';

export function NoTodoItem() {
  const { form } = useAppSelector((state) => state.todoList);

  return (
    <Card bg="secondary" padding={1} curve>
      <Text typo="sm" _textAlign="center">
        {`There is no ${filters[form]?.title || 'todo'}.`}
      </Text>
    </Card>
  );
}
