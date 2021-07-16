import React from 'react';
import { Card, CardProps } from './Card';

export function ScreenContainer(props: CardProps) {
  return <Card flex={1} padding={[1, 2]} {...props} />;
}
