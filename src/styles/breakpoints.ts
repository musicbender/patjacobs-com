import { css, ThemedCssFunction } from 'styled-components'
import { IBreakPoints, ITheme } from '../types/styles';

export const sizes: IBreakPoints = {
  desktopXXL: 1920,
  desktopXL: 1600,
  desktopL: 1320,
  desktopM: 1280,
  desktopS:  1024,
  tablet: 768,
  mobileL: 480,
  mobileM: 414,
  mobileS: 375,
};

export const media = (Object.keys(sizes) as Array<keyof typeof sizes>)
  .reduce((accumulator, label) => {
    const emSize = sizes[label] / 16;

    accumulator[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${emSize}em) {
        ${css(first, ...interpolations)}
      }
    `;
    return accumulator
  }, {} as { [key in keyof typeof sizes]: ThemedCssFunction<ITheme> });