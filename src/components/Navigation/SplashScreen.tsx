import React from 'react';
import { Card, Text } from '../Kit';

export function SplashScreen() {
  return (
    <Card flex={1} bg="primaryBg" alignItems="center" justifyContent="center">
      <Text bold typo="title">
        App is Loading
      </Text>
    </Card>
  );
}
