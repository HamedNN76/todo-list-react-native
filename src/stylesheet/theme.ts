import { colors } from './colors';
import { DefaultTheme } from 'styled-components';

export type Themes = {
  light: DefaultTheme;
  dark: DefaultTheme;
};

export type Theme = 'light' | 'dark';

export const themes: Themes = {
  light: {
    ...colors,
    primaryBg: '#eee',
    secondaryBg: '#ddd',
  },
  dark: colors,
};
