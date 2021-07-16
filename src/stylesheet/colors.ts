import { DefaultTheme } from 'styled-components/native';

export const mainColors = {
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
  border: '#2B2B2B',
  red: '#b23131',
  blue: '#1f4193',
  yellow: '#ae7c00',
  green: '#007239',
  primary: '#B6E2D3',
  secondary: '#D8A7B1',
  primaryBg: '#ffffff',
  secondaryBg: '#eeeeee',
  tertiaryBg: '#dddddd',
  primaryText: '#333333',
  secondaryText: '#444444',
  disabled: '#4F4F4F',
  gray900: '#252525',
  gray800: '#474747',
  gray700: '#666666',
  gray600: '#7A7A7A',
  gray500: '#A4A4A4',
  gray400: '#C2C2C2',
  gray300: '#E5E5E5',
  gray200: '#F1F1F1',
  gray100: '#F7F7F7',
  gray50: '#FBFBFB',
  shadow: '0px 4px 4px #444',
  errorShadow: '0px 4px 4px #b23131',
  headerBg: '#D53BB2',
};

export const colors: DefaultTheme = {
  ...mainColors,
  success: mainColors.green,
  failure: mainColors.red,
  warning: mainColors.yellow,
  info: mainColors.blue,
};

export type Colors = {
  transparent: string;
  primary: string;
  secondary: string;
  primaryBg: string;
  secondaryBg: string;
  tertiaryBg: string;
  primaryText: string;
  secondaryText: string;
  disabled: string;
  white: string;
  black: string;
  border: string;
  red: string;
  blue: string;
  success: string;
  yellow: string;
  green: string;
  warning: string;
  failure: string;
  info: string;
  gray900: string;
  gray800: string;
  gray700: string;
  gray600: string;
  gray500: string;
  gray400: string;
  gray300: string;
  gray200: string;
  gray100: string;
  gray50: string;
  shadow: string;
  errorShadow: string;
  headerBg: string;
};

export type Color = keyof Colors;
