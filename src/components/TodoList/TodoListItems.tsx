import React from 'react';
import { TTodoListItem } from '../../types/webServices/todoList';
import { Card, FlatList, RefreshControl } from '../Kit';
import { NoTodoItem } from './NoTodoItem';
import { TodoListFilter } from './TodoListFilter';
import { TodoListItem } from './TodoListItem';

export type TodoListItemsProps = {
  items: Array<TTodoListItem> | null;
  loading: boolean;
  onRefresh: () => void;
};

export function TodoListItems(props: TodoListItemsProps) {
  const { items, loading, onRefresh } = props;

  return (
    <Card bg="tertiaryBg" padding={1} curve flex={1}>
      <TodoListFilter />
      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <TodoListItem item={item} />}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        ListEmptyComponent={NoTodoItem}
      />
    </Card>
  );
}
