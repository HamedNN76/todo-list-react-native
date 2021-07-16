import React from 'react';
import { StatusBar } from 'react-native';
import { Stack } from '../../navigation/Stack';
import { Card, Text } from '../Kit';
import { colors } from '../../stylesheet';
import { config } from '../../../config';
import { TodoListScreen } from '../../screens/TodoListScreen';

export function Navigation(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Card bg="primaryBg" flex={1}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.headerBg,
              height: 100,
            },
            headerTitle: ({ children }) => (
              <Text color="white" typo="xl" bold>
                {children}
              </Text>
            ),
          }}
        >
          <Stack.Screen
            name={config.routes.todoList}
            component={TodoListScreen}
          />
          <Stack.Screen
            name={config.routes.listItem}
            component={TodoListScreen}
          />
        </Stack.Navigator>
      </Card>
    </>
  );
}
