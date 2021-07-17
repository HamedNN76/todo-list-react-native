import React from 'react';
import { Text, TextProps } from '../Text';

export type InputErrorProps = TextProps & {
  error: string;
};

export function InputError(props: InputErrorProps): JSX.Element | null {
  const { error, ...restProps } = props;

  return error ? (
    <Text color="failure" typo="sm" margin={[1.5, 0, 0, 0]} {...restProps}>
      {error}
    </Text>
  ) : null;
}
