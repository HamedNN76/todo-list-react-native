import { Alert } from 'react-native';

export const toast = (message: string) => {
  Alert.alert(message);
};
