import React from 'react';
import {
  setBackgroundColor,
  SetBackgroundColor,
  setColor,
  SetColor,
  setShadow,
  SetShadow,
  SetStyle,
  setStyle,
  setTypography,
  SetTypography,
  setRadius,
  SetRadius,
  setBorder,
  SetBorder,
} from '../../stylesheet';
import styled from 'styled-components/native';
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
import { toLocalStringRegex } from '../../validators/regex';
import { TextProps as NativeTextProps } from 'react-native';

export type TextProps = {
  children?: string | number;
  localeString?: boolean | any;
} & SetBackgroundColor &
  SetColor &
  SetShadow &
  SetTypography &
  SetSpace &
  SetStyle &
  SetFlex &
  SetAlignSelf &
  SetAlignItems &
  SetJustifyContent &
  SetRadius &
  SetFlexDirection &
  SetBorder &
  NativeTextProps;

const StyledText: React.FunctionComponent<TextProps> = styled.Text<TextProps>`
  ${setColor};
  ${setBackgroundColor};
  ${setShadow};
  ${setTypography};
  ${setSpace};
  ${setFlex};
  ${setAlignItems};
  ${setAlignSelf};
  ${setJustifyContent};
  ${setRadius};
  ${setFlexDirection};
  ${setBorder};
  ${setStyle};
`;

export function Text(props: TextProps) {
  const {
    children,
    margin,
    padding,
    localeString = false,
    color = 'primaryText',
    ...restProps
  } = props;

  let text = children || '';
  if (localeString) {
    text = text.toString().replace(toLocalStringRegex, ',');
  }

  return (
    <StyledText
      {...restProps}
      $margin={margin}
      $padding={padding}
      localeString={localeString}
      color={color}
    >
      {text}
    </StyledText>
  );
}
