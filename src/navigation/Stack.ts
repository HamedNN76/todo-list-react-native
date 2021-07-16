import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp as LibraryProp } from '@react-navigation/stack/lib/typescript/src/types';

type RootStackParamList = {
  TodoList: undefined;
  ListItem: {
    id: string;
  };
};

export type StackNavigationProp<ScreenName extends keyof RootStackParamList> =
  LibraryProp<RootStackParamList, ScreenName>;

export const Stack = createStackNavigator<RootStackParamList>();