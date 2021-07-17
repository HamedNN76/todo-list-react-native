import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { config } from '../../config';
import { ScreenContainer, Button, Card } from '../components/Kit';
import { TodoListItems } from '../components/TodoList/TodoListItems';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { StackNavigationProp } from '../navigation/Stack';
import { loadTodoList } from '../redux/modules/todoList';

export type TodoListScreenProps = {
  navigation: StackNavigationProp<'TodoList'>;
};
export function TodoListScreen(props: TodoListScreenProps) {
  const { navigation } = props;

  const todoList = useAppSelector((state) => state.todoList);
  const dispatch = useAppDispatch();

  const getTodoList = useCallback(() => {
    dispatch(loadTodoList());
  }, [dispatch]);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const navigateToAddTodo = () => {
    navigation.navigate(config.routes.addTodo);
  };

  return (
    <ScreenContainer bg="secondaryBg" safeArea padding={[0, 1]}>
      <Card flex={1} padding={[1, 0]}>
        <TodoListItems
          items={todoList.data}
          loading={todoList.loading}
          onRefresh={getTodoList}
        />
      </Card>
      <Button
        text="Add Todo"
        block
        size="lg"
        typo="md"
        bg="primary"
        startIcon="plus"
        iconSize={3}
        bold
        onPress={navigateToAddTodo}
      />
    </ScreenContainer>
  );
}
