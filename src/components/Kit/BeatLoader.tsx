import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Color, colors } from '../../stylesheet';

export type BeatLoaderProps = {
  size?: number;
  color?: Color;
};

export function BeatLoader(props: BeatLoaderProps): JSX.Element {
  const { color = 'white' } = props;

  return <ActivityIndicator size="large" color={colors[color]} />;
}
