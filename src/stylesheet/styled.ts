import { Color } from './colors';
import { css, DefaultTheme } from 'styled-components';
import { Typo, typography } from './typography';
import { AlignItems, AlignSelf, JustifyContent } from './flex';
import { camelCase } from '../validators/regex';
import { Curve, curves } from './curves';

export type SetStyle = {
  theme?: DefaultTheme;
  _overflow?: 'hidden' | 'visible' | 'auto';
  _color?: string;
  _backgroundColor?: string;
  _border?: string;
  _borderWidth?: string;
  _borderStyle?: string;
  _borderColor?: string;
  _boxShadow?: string;
  _borderRadius?: string;
  _textAlign?: 'left' | 'center' | 'right' | string;
  _display?: 'flex' | 'inline-flex' | 'none';
  _flex?: number;
  _alignItems?: AlignItems;
  _justifyContent?: JustifyContent;
  _alignSelf?: AlignSelf;
  _flexDirection?: string;
  _width?: string;
  _minWidth?: string;
  _maxWidth?: string;
  _height?: string;
  _maxHeight?: string;
  _minHeight?: string;
  _padding?: string;
  _flexWrap?: string;
  _position?: 'relative' | 'absolute' | 'fixed';
  _transform?: string;
  _borderTopWidth?: string;
  _borderRightWidth?: string;
  _borderBottomWidth?: string;
  _borderLeftWidth?: string;
  _top?: string;
  _right?: string;
  _bottom?: string;
  _left?: string;
  _zIndex?: string;
  _margin?: string;
  _visibility?: string;
  _opacity?: string;
  _elevation?: number;
};
export const setStyle = (props: SetStyle) => {
  const stylesToString = Object.keys(props).reduce(
    (acc: string, rule: string) => {
      // @ts-ignore
      const cssValue = props[rule];

      if (rule.charAt(0) === '_' && cssValue) {
        let cssRule = rule
          .replace('_', '')
          .replace(camelCase, '$1-$2')
          .toLowerCase();
        acc += `${cssRule}: ${cssValue};`;
      }
      return acc;
    },
    ''
  );

  return css`
    ${stylesToString}
  `;
};

export type SetColor = {
  color?: Color;
  theme?: DefaultTheme;
};
export const setColor = (props: SetColor) =>
  props?.color && props.theme
    ? setStyle({ _color: props.theme[props.color] })
    : '';

export type SetBackgroundColor = {
  bg?: Color;
  theme?: DefaultTheme;
};
export const setBackgroundColor = (props: SetBackgroundColor) =>
  props?.bg && props.theme
    ? setStyle({ _backgroundColor: props.theme[props.bg] })
    : '';

export type SetBorder = {
  border?: boolean | string;
  theme?: DefaultTheme;
  borderColor?: Color;
  borderWidth?: string;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
};
export const setBorder = (props: SetBorder) => {
  const { border, theme, borderColor, borderStyle, borderWidth } = props;
  if (border === true) {
    return setStyle({
      _border: `1px solid ${theme?.[borderColor || 'border']}`,
    });
  } else if (border) {
    return setStyle({ _border: border });
  } else if (borderColor || borderStyle || borderWidth) {
    return setStyle({
      _borderWidth: borderWidth || '1px',
      _borderStyle: borderStyle || 'solid',
      _borderColor: theme?.[borderColor || 'border'],
    });
  } else {
    return '';
  }
};

export type SetShadow = {
  theme?: DefaultTheme;
  shadow?: boolean | Color;
};
export const setShadow = (props: SetShadow) => {
  const { shadow, theme } = props;

  if (shadow === true) {
    return setStyle({ _boxShadow: theme?.shadow, _elevation: 8 });
  } else if (shadow) {
    return setStyle({ _boxShadow: theme?.[shadow], _elevation: 8 });
  } else {
    return '';
  }
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type SetTypography = {
  typo?: Typo;
  medium?: boolean;
  bold?: boolean;
  theme?: DefaultTheme;
  enNumeric?: boolean;
};
export const setTypography = (props: SetTypography) => {
  const { typo = 'xs', bold, medium } = props;

  let styles = '';
  if (!typo && !bold) {
    return '';
  }
  if (typo) {
    styles += `font-size: ${typography[typo]};`;
  }
  if (medium) {
    styles += 'font-weight: 300;';
  } else if (bold) {
    styles += 'font-weight: 500;';
  } else {
    styles += 'font-weight: 400;';
  }

  return css`
    ${styles}
  `;
};

export type SetRadius = {
  theme?: DefaultTheme;
  curve?: boolean | Curve;
};
export const setRadius = (props: SetRadius) => {
  if (props?.curve === true) {
    return setStyle({ _borderRadius: curves.sm });
  } else if (props?.curve) {
    return setStyle({ _borderRadius: curves[props.curve] });
  } else {
    return '';
  }
};
