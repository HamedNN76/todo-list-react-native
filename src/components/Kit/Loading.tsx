import React from 'react';
import { BeatLoader } from './BeatLoader';
import { Card } from './Card';

export type LoadingProps = {
  loading: boolean;
  children: any;
};

export function Loading(props: LoadingProps) {
  const { loading, children } = props;

  return <Card flex={1}>{loading ? <BeatLoader /> : children}</Card>;
}
