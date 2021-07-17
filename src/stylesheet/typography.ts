export const typography: Typography = {
  tiny: '12px',
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '20px',
  xl: '24px',
  title: '36px',
};

export type Typography = {
  tiny: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  title: string;
};

export type Typo = keyof Typography;
