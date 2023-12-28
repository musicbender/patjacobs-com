import theme from 'src/lib/styles/theme';

export type Theme = typeof theme;

export type IBreakPoints = {
  desktopXXL: number;
  desktopXL: number;
  desktopL: number;
  desktopM: number;
  desktopS: number;
  tablet: number;
  mobileL: number;
  mobileM: number;
  mobileS: number;
};

export type GridPositionParams = {
  gridLines?: number[];
  index?: number;
  prop?: string;
  unit?: string;
  attach?: string;
};
