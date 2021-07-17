import React from 'react';
import { Card, CardProps } from './Card';

export type ContainerProps = CardProps & {
  fluid?: boolean;
};

export function Container(props: ContainerProps): JSX.Element {
  const { fluid } = props;

  return <Card padding={fluid ? undefined : [0, 1.5]} {...props} />;
}
