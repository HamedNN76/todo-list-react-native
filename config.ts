import { Platform } from 'react-native';

export type Config = {
  routes: {
    todoList: 'TodoList';
    listItem: 'ListItem';
    addTodo: 'AddTodo';
  };
  baseUrl: string;
  isIos: () => boolean;
  isAndroid: () => boolean;
};

export const config: Config = {
  routes: {
    todoList: 'TodoList',
    listItem: 'ListItem',
    addTodo: 'AddTodo',
  },
  baseUrl: 'http://localhost:3030',
  isIos: () => Platform.OS === 'ios',
  isAndroid: () => Platform.OS === 'android',
};
