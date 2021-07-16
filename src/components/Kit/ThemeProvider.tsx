import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { ChildrenProp } from '../../types/types';
import { colors } from '../../stylesheet';

export type ThemeProviderProps = {
  children: ChildrenProp;
};

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
  const { children } = props;

  return <StyledThemeProvider theme={colors}>{children}</StyledThemeProvider>;
}
