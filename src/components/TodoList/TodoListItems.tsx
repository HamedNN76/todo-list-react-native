import React from 'react';
import { TTodoListItem } from '../../types/webServices/todoList';
import { Card, FlatList } from '../Kit';
import { NoTodoItem } from './NoTodoItem';
import { TodoListFilter } from './TodoListFilter';
import { TodoListItem } from './TodoListItem';

export type TodoListItemsProps = {
  items: Array<TTodoListItem>;
};

export function TodoListItems(props: TodoListItemsProps) {
  const { items } = props;

  return (
    <Card bg="tertiaryBg" padding={1} curve flex={1}>
      <TodoListFilter />
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
