import React from 'react';
import { Card, CardProps } from './Card';

export type HRProps = CardProps;

export function HR(props: HRProps) {
  return <Card borderWidth="0.5px" {...props} />;
}
