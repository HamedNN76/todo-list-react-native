import React from 'react';
import { BeatLoader } from './BeatLoader';
import { Card } from './Card';

export type LoadingProps = {
  loading: boolean;
  children: any;
};

export function Loading(props: LoadingProps) {
  const { loading, children } = props;

  return (
    <Card flex={1} justifyContent="center">
      {loading ? (
        <Card _position="absolute" _zIndex="9" alignSelf="center">
          <BeatLoader />
        </Card>
      ) : null}
      <Card flex={1}>{children}</Card>
    </Card>
  );
}
