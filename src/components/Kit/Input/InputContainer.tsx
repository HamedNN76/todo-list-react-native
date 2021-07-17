import React from 'react';
import { Card, CardProps } from '../Card';
import { ChildrenProp } from '../../../types/types';
import { SetStyle } from '../../../stylesheet';

export type InputContainerProps = {
  children: ChildrenProp;
  containerMargin: Array<number>;
} & SetStyle &
  CardProps;

InputContainer.defaultProps = {
  containerMargin: [0, 0, 4, 0],
};

export function InputContainer(props: InputContainerProps): JSX.Element {
  const { children, containerMargin, ...restProps } = props;

  return (
    <Card margin={containerMargin} {...restProps}>
      {children}
    </Card>
  );
}
