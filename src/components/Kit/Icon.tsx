import React, { FC } from 'react';
import styled, { css } from 'styled-components/native';
import {
  SetColor,
  setColor,
  SetStyle,
  setStyle,
  SetTypography,
  setTypography,
} from '../../stylesheet';
import { SetSpace, setSpace } from '../../stylesheet/space';
import { SetAlignSelf, setAlignSelf } from '../../stylesheet/flex';
import CustomIcon from 'react-native-vector-icons/FontAwesome';

CustomIcon.loadFont();

export type IconProps = {
  name: string;
  size?: number;
} & SetColor &
  SetSpace &
  SetAlignSelf &
  SetTypography &
  SetStyle;

const setIconSize = ({ size = 1 }: IconProps) => css`
  font-size: ${size * 8}px;
`;

const StyledIcon: FC<IconProps> = styled(CustomIcon)<IconProps>`
  ${setColor};
  ${setSpace};
  ${setAlignSelf};
  ${setTypography};
  ${setIconSize};
  ${setStyle};
`;

export function Icon(props: IconProps): JSX.Element {
  const {
    name,
    margin,
    padding,
    color = 'primaryText',
    size,
    ...restProps
  } = props;

  return (
    <StyledIcon
      name={name}
      {...restProps}
      color={color}
      size={size}
      $margin={margin}
      $padding={padding}
    />
  );
}
