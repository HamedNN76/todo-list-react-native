import { Route } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from '../components/Kit';
import { NoTodoListFound } from '../components/TodoList/NoTodoListFound';
import { TodoListItemDetails } from '../components/TodoList/TodoListItemDetails';
import { useAppSelector } from '../hooks/store';
import { StackNavigationProp } from '../navigation/Stack';

export type TodoListItemScreenProps = {
  navigation: StackNavigationProp<'ListItem'>;
  route: Route<'ListItem', { id: string; title: string }>;
};

export function TodoListItemScreen(props: TodoListItemScreenProps) {
  const { route } = props;

  const todoList = useAppSelector((state) => state.todoList);

  const todoItem = todoList.data?.find((item) => item._id === route.params.id);

  return (
    <ScreenContainer safeArea dismissKeyboard padding={[1, 2]}>
      {todoItem ? <TodoListItemDetails item={todoItem} /> : <NoTodoListFound />}
    </ScreenContainer>
  );
}
