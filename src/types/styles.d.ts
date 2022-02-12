import theme from '@styles/theme';

// types
export type Theme = typeof theme;

// interfaces
export interface IBreakPoints {
  desktopXXL: number;
  desktopXL: number;
  desktopL: number;
  desktopM: number;
  desktopS: number;
  tablet: number;
  mobileL: number;
  mobileM: number;
  mobileS: number;
}

export interface GridPositionParams {
  gridLines?: number[] = [];
  index?: number = 0;
  prop?: string = 'left';
  unit?: string = '%';
  attach?: string = 'left';
}
