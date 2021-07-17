import React from 'react';
import { config } from '../../config';
import { ScreenContainer, Button, Loading, Card } from '../components/Kit';
import { TodoListItems } from '../components/TodoList/TodoListItems';
import { useFetch } from '../hooks/useFetch';
import { StackNavigationProp } from '../navigation/Stack';
import { TTodoListData } from '../types/webServices/todoList';

export type TodoListScreenProps = {
  navigation: StackNavigationProp<'TodoList'>;
};
export function TodoListScreen(props: TodoListScreenProps) {
  const { navigation } = props;

  const [todoList] = useFetch<undefined, TTodoListData, {}>('todoList.get', {
    didMount: true,
  });

  const navigateToAddTodo = () => {
    navigation.navigate(config.routes.addTodo);
  };

  return (
    <ScreenContainer bg="secondaryBg" safeArea>
      <Card flex={1} padding={[1, 0]}>
        <Loading loading={todoList.loading}>
          {todoList.data ? <TodoListItems items={todoList.data} /> : null}
        </Loading>
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
