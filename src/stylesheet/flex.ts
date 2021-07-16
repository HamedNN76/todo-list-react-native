import { DefaultTheme } from 'styled-components';
import { setStyle } from './styled';

export type SetFlex = {
  theme?: DefaultTheme;
  flex?: number | boolean;
};
export const setFlex = (props: SetFlex) => {
  const { flex } = props;
  if (flex === true) {
    return setStyle({ _display: 'flex' });
  } else if (flex) {
    return setStyle({ _display: 'flex', _flex: flex });
  } else {
    return '';
  }
};

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'end'
  | 'start'
  | string;
export type SetAlignItems = {
  theme?: DefaultTheme;
  alignItems?: AlignItems;
};
export const setAlignItems = (props: SetAlignItems) => {
  let { alignItems } = props;

  if (alignItems) {
    return setStyle({ _alignItems: alignItems });
  } else {
    return '';
  }
};

export type JustifyContent =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end'
  | string;
export type SetJustifyContent = {
  theme?: DefaultTheme;
  justifyContent?: JustifyContent;
};
export const setJustifyContent = (props: SetJustifyContent) => {
  const { justifyContent } = props;
  if (justifyContent) {
    return setStyle({ _justifyContent: justifyContent });
  } else {
    return '';
  }
};

export type AlignSelf =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | string;
export type SetAlignSelf = {
  theme?: DefaultTheme;
  alignSelf?: AlignSelf;
};
export const setAlignSelf = (props: SetAlignSelf) => {
  const { alignSelf } = props;

  if (alignSelf) {
    return setStyle({ _alignSelf: alignSelf });
  } else {
    return '';
  }
};

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | string;
export type SetFlexDirection = {
  theme?: DefaultTheme;
  flexDirection?: FlexDirection;
};
export const setFlexDirection = (props: SetFlexDirection) => {
  const { flexDirection } = props;

  if (flexDirection) {
    return setStyle({ _flexDirection: flexDirection });
  } else {
    return '';
  }
};
