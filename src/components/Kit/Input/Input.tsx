import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  Color,
  colors,
  setBackgroundColor,
  SetBackgroundColor,
  SetBorder,
  setBorder,
  setColor,
  SetColor,
  setRadius,
  SetRadius,
  setStyle,
  SetStyle,
  setTypography,
  SetTypography,
} from '../../../stylesheet';
import { Card } from '../Card';
import { setSpace, SetSpace } from '../../../stylesheet/space';
import { TextInputProps } from 'react-native';
import { Icon } from '../Icon';
import { InputTitle } from './InputTitle';
import { InputWrapper } from './InputWrapper';
import { InputError } from './InputError';
import { InputContainer } from './InputContainer';
import { TouchableOpacity } from '../TouchableOpacity';
import { SetFlex, setFlex } from '../../../stylesheet/flex';

type StyledInputProps = SetBorder &
  SetRadius &
  SetSpace &
  SetStyle &
  SetBackgroundColor &
  SetColor &
  SetTypography &
  TextInputProps &
  SetFlex & {
    disabled?: boolean;
  };

export type InputProps = StyledInputProps & {
  title?: string;
  error?: any;
  name?: string;
  iconName?: string;
  iconColor?: Color;
  iconSize?: number;
  placeholder?: string;
  password?: boolean;
  children?: any;
  copy?: boolean;
  required?: boolean;
  wrapperBorderColor?: Color;
  containerMargin?: Array<number>;
  iconElement?: JSX.Element;
  useLocale?: boolean;
};

export const StyledInput: React.FunctionComponent<StyledInputProps> = styled.TextInput<StyledInputProps>`
  ${setBorder};
  ${setRadius};
  ${setSpace};
  ${setBackgroundColor};
  ${setColor};
  ${setTypography};
  ${setFlex};
  ${setStyle};
`;

Input.defaultProps = {
  iconSize: 2,
  required: true,
};

export function Input(props: InputProps) {
  const {
    title,
    error,
    placeholder = '',
    iconName,
    iconSize,
    iconColor,
    password,
    children,
    required,
    wrapperBorderColor,
    containerMargin,
    iconElement,
    ...restProps
  } = props;

  const theme = colors;

  const [showPassword, setShowPassword] = useState<boolean>(!password);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer containerMargin={containerMargin}>
      <InputTitle title={title} required={required} />
      <InputWrapper error={error} borderColor={wrapperBorderColor}>
        <Card
          _height="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {iconName ? (
            <>
              <Icon
                name={iconName}
                size={iconSize}
                color={iconColor || 'primaryText'}
                padding={[0, 2]}
              />
              <Card _width="1px" _height="32px" bg="border" />
            </>
          ) : null}
          {iconElement ? (
            <>
              <Card padding={[0, 2]}>{iconElement}</Card>
              <Card _width="1px" _height="32px" bg="border" />
            </>
          ) : null}
        </Card>
        {children || (
          <StyledInput
            secureTextEntry={!showPassword}
            color="black"
            placeholder={placeholder}
            placeholderTextColor={theme.gray900}
            $padding={[0, 2]}
            _height="100%"
            medium
            flex={1}
            {...restProps}
          />
        )}
        {password ? (
          <TouchableOpacity onPress={handleTogglePassword} padding={[0, 2]}>
            <Icon
              name={`eye${showPassword ? '' : '-slash'}`}
              size={2}
              color={iconColor || 'gray900'}
            />
          </TouchableOpacity>
        ) : null}
      </InputWrapper>
      {error ? <InputError error={error} children="" /> : null}
    </InputContainer>
  );
}
