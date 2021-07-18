import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from '../../navigation/Stack';
import { Card, Text } from '../Kit';
import { colors } from '../../stylesheet';
import { config } from '../../../config';
import { TodoListScreen } from '../../screens/TodoListScreen';
import { AddTodoScreen } from '../../screens/AddTodoScreen';
import { TodoListItemScreen } from '../../screens/TodoListItemScreen';

const todoListTitle = 'Todo List';
const addTodoTitle = 'Add Todo';

export function Navigation(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Card flex={1}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.headerBg,
              height: config.isAndroid() ? 60 : 100,
            },
            headerBackTitleStyle: {
              color: colors.white,
            },
            headerTintColor: colors.white,
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name={config.routes.todoList}
            component={TodoListScreen}
            options={{
              headerTitle: () => (
                <Text color="white" typo="xl" bold>
                  {todoListTitle}
                </Text>
              ),
            }}
          />
          <Stack.Screen
            name={config.routes.listItem}
            component={TodoListItemScreen}
            options={({ route }) => ({
              headerTitle: () => {
                return (
                  <Text color="white" typo="xl" bold>
                    {route.params.title}
                  </Text>
                );
              },
              headerBackTitle: todoListTitle,
            })}
          />
          <Stack.Screen
            name={config.routes.addTodo}
            component={AddTodoScreen}
            options={{
              headerTitle: () => (
                <Text color="white" typo="xl" bold>
                  {addTodoTitle}
                </Text>
              ),
              headerBackTitle: todoListTitle,
            }}
          />
        </Stack.Navigator>
      </Card>
    </>
  );
}
