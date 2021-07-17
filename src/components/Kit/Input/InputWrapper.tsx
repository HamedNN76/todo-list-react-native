import React from 'react';
import { Card, CardProps } from '../Card';
import { ChildrenProp } from '../../../types/types';

export type InputWrapperProps = {
  children: ChildrenProp;
  error?: string;
  onClick?: Function;
} & CardProps;

export function InputWrapper(props: InputWrapperProps): JSX.Element {
  const { children, error, ...restProps } = props;

  return (
    <Card
      border
      borderColor={error ? 'failure' : 'border'}
      curve
      _height="56px"
      bg="primaryBg"
      flexDirection="row"
      alignItems="center"
      shadow={error ? 'errorShadow' : true}
      {...restProps}
    >
      {children}
    </Card>
  );
}
