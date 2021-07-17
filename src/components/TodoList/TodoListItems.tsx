import React from 'react';
import { TTodoListItem } from '../../types/webServices/todoList';
import { Card, FlatList } from '../Kit';
import { NoTodoItem } from './NoTodoItem';
import { TodoListItem } from './TodoListItem';

export type TodoListItemsProps = {
  items: Array<TTodoListItem>;
};

export function TodoListItems(props: TodoListItemsProps) {
  const { items } = props;

  return (
    <Card bg="tertiaryBg" padding={[1, 0]} curve flex={1}>
      {items.length ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <TodoListItem item={item} />}
        />
      ) : (
        <NoTodoItem />
      )}
    </Card>
  );
}
