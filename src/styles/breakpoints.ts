import { IBreakPoints } from '../types/styles';

export const sizes: IBreakPoints = {
  desktopXXL: '1920px',
  desktopXL: '1600px',
  desktopL: '1320px',
  desktopM: '1280px',
  desktopS:  '1024px',
  tablet: '768px',
  mobileL: '480px',
  mobileM: '414px',
  mobileS: '375px',
};

export const devices: IBreakPoints = {
  desktopXXL: `(max-width: ${sizes.desktopXXL})`,
  desktopXL: `(max-width: ${sizes.desktopXL})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
  desktopM: `(max-width: ${sizes.desktopM})`,
  desktopS:  `(max-width: ${sizes.desktopS})`,
  tablet: `(max-width: ${sizes.tablet})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
};