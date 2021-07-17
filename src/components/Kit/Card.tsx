import React from 'react';
import {
  setBackgroundColor,
  SetBackgroundColor,
  SetRadius,
  setRadius,
  SetStyle,
  setStyle,
  setShadow,
  SetShadow,
  setBorder,
  SetBorder,
} from '../../stylesheet';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';
import { setSpace, SetSpace } from '../../stylesheet/space';
import {
  setAlignItems,
  SetAlignItems,
  setAlignSelf,
  SetAlignSelf,
  setFlex,
  SetFlex,
  setFlexDirection,
  SetFlexDirection,
  setJustifyContent,
  SetJustifyContent,
} from '../../stylesheet/flex';
import { ChildrenProp } from '../../types/types';

export type CardProps = {
  children?: ChildrenProp;
  style?: any;
} & ViewProps &
  SetBackgroundColor &
  SetRadius &
  SetStyle &
  SetShadow &
  SetBorder &
  SetSpace &
  SetFlex &
  SetAlignSelf &
  SetAlignItems &
  SetJustifyContent &
  SetFlexDirection;

const StyledCard = styled.View<CardProps>`
  ${setBackgroundColor};
  ${setRadius};
  ${setBorder};
  ${setSpace};
  ${setFlex};
  ${setAlignSelf};
  ${setAlignItems};
  ${setJustifyContent};
  ${setFlexDirection};
  ${setShadow};
  ${setStyle};
`;

export function Card(props: CardProps) {
  const { margin, padding, ...restProps } = props;

  return <StyledCard {...restProps} $margin={margin} $padding={padding} />;
}
