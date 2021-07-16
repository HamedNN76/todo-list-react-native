import { css, DefaultTheme } from 'styled-components';

const measure = (number: number): string => `${number * 8}px`;

export type Spacing = Array<number> | number;
export type SetSpace = {
  theme?: DefaultTheme;
  margin?: Spacing;
  $margin?: Spacing;
  padding?: Spacing;
  $padding?: Spacing;
};

const spaceGenerator = (space: Spacing, isMargin: boolean): string => {
  let styles = '';
  const rule = isMargin ? 'margin' : 'padding';

  if (space && typeof space === 'number') {
    styles += `${rule}: ${measure(space)};`;
  }
  if (space && Array.isArray(space)) {
    let margins = {
      top: space[0] ? measure(space[0]) : 0,
      right: space[1] ? measure(space[1]) : 0,
      bottom: space[2] ? measure(space[2]) : 0,
      left: space[3] ? measure(space[3]) : 0,
    };
    if (space.length === 2) {
      styles += `${rule}: ${measure(space[0])} ${measure(space[1])};`;
    } else {
      styles += `${rule}: ${margins.top} ${margins.right} ${margins.bottom} ${margins.left};`;
    }
  }

  return styles;
};

export const setSpace = (props: SetSpace) => {
  const { $margin, $padding } = props;

  let spaces = '';
  if ($margin) {
    spaces += spaceGenerator($margin, true);
  }
  if ($padding) {
    spaces += spaceGenerator($padding, false);
  }
  if (spaces) {
    return css`
      ${spaces}
    `;
  } else {
    return '';
  }
};
