import React from 'react';
import styled from 'styled-components/native';
import {
  SetBackgroundColor,
  setBackgroundColor,
  SetStyle,
  setStyle,
} from '../../stylesheet';
import { setSpace, SetSpace } from '../../stylesheet/space';
import {
  setAlignItems,
  SetAlignItems,
  setFlex,
  SetFlex,
  setFlexDirection,
  SetFlexDirection,
  setJustifyContent,
  SetJustifyContent,
} from '../../stylesheet/flex';
import { TouchableOpacityProps as NativeTouchableOpacityProps } from 'react-native';
import { ChildrenProp } from '../../types/types';

export type TouchableOpacityProps = NativeTouchableOpacityProps &
  SetBackgroundColor &
  SetStyle &
  SetSpace &
  SetFlex &
  SetFlexDirection &
  SetAlignItems &
  SetJustifyContent & {
    children: ChildrenProp;
    style?: any;
  };

const StyledTouchableOpacity = styled.TouchableOpacity`
  ${setBackgroundColor};
  ${setSpace};
  ${setFlex};
  ${setFlexDirection};
  ${setJustifyContent};
  ${setAlignItems};
  ${setStyle};
`;

export function TouchableOpacity(props: TouchableOpacityProps): JSX.Element {
  const { margin, padding } = props;

  return (
    <StyledTouchableOpacity $margin={margin} $padding={padding} {...props} />
  );
}
