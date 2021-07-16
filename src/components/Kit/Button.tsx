import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import {
  Color,
  SetBackgroundColor,
  setBackgroundColor,
  setBorder,
  SetBorder,
  setRadius,
  SetRadius,
  SetShadow,
  setShadow,
  setStyle,
  SetStyle,
  SetTypography,
} from '../../stylesheet';
import { Text } from './Text';
import {
  setAlignItems,
  SetAlignItems,
  setAlignSelf,
  SetAlignSelf,
  setFlex,
  SetFlex,
  setJustifyContent,
  SetJustifyContent,
} from '../../stylesheet/flex';
import { setSpace, SetSpace } from '../../stylesheet/space';
import { Icon } from './Icon';
import { BeatLoader } from './BeatLoader';

type StyledButtonProps = TouchableOpacityProps &
  SetBackgroundColor &
  SetBorder &
  SetRadius &
  SetStyle &
  SetAlignSelf &
  SetFlex &
  SetAlignItems &
  SetJustifyContent &
  SetSpace &
  SetShadow &
  SetTypography;
export type ButtonProps = StyledButtonProps & {
  text: string;
  filled?: boolean;
  block?: boolean;
  size?: 'sm' | 'lg' | 'xs';
  color?: Color;
  onPress?: any;
  loading?: boolean;
  startIcon?: string;
  endIcon?: string;
  iconSize?: number;
};

const setButtonBg = ({ disabled, bg, theme }: StyledButtonProps) =>
  setBackgroundColor({ bg: disabled ? 'gray900' : bg, theme });

const StyledButton: React.FunctionComponent<StyledButtonProps> = styled.TouchableOpacity<StyledButtonProps>`
  ${setButtonBg};
  ${setBorder};
  ${setRadius};
  ${setAlignSelf};
  ${setFlex};
  ${setAlignItems};
  ${setJustifyContent};
  ${setSpace};
  ${setShadow};
  ${setStyle};
`;

export function Button(props: ButtonProps): JSX.Element {
  const {
    text,
    filled = true,
    bg,
    block,
    size = 'sm',
    margin,
    color,
    alignSelf,
    disabled,
    onPress,
    loading,
    startIcon,
    endIcon,
    bold,
    iconSize = 2,
    typo,
    ...restProps
  } = props;

  let filledStyles: SetBorder & SetBackgroundColor = {
    bg,
  };
  if (!filled) {
    filledStyles.borderColor = bg;
    filledStyles.borderWidth = '1px';
    filledStyles.borderStyle = 'solid';
    filledStyles.bg = 'white';
  }
  const textColor = filled ? 'primaryText' : bg;

  return (
    <StyledButton
      {...filledStyles}
      curve
      alignSelf={alignSelf || (block ? 'stretch' : 'baseline')}
      flex
      _minWidth={size === 'lg' ? '120px' : '104px'}
      _alignItems="center"
      _justifyContent="center"
      _flexDirection="row"
      $margin={margin}
      $padding={[0, 1]}
      onPress={disabled ? undefined : onPress}
      _height={size === 'sm' ? '48px' : '60px'}
      disabled={disabled}
      shadow
      {...restProps}
    >
      {startIcon ? (
        <Icon
          name={startIcon}
          color={color || textColor}
          margin={[0, 1]}
          size={iconSize}
          bold={bold}
        />
      ) : null}
      {loading ? (
        <BeatLoader />
      ) : (
        <Text
          bold={bold}
          typo={typo}
          color={color || textColor}
          margin={[0, startIcon || endIcon ? 1 : 0]}
        >
          {text}
        </Text>
      )}
      {endIcon ? (
        <Icon
          name={endIcon}
          margin={[0, 1]}
          size={iconSize}
          color={color || textColor}
          bold={bold}
        />
      ) : null}
    </StyledButton>
  );
}
