import { ITheme } from '../types/styles';

const theme: ITheme = {
  breakpoints: {
    largest: '(max-width: 1920px)',
    extraLarge: '(max-width: 1600px)',
    max: '(max-width: 1320px)',
    medium: '(max-width: 1280px)',
    small:  '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 480px)',
    smallMobile: '(max-width: 414px)',
    tinyMobile: '(max-width: 375px)',
  },
  palette: {
    white: '#fff',
    offWhite: 'rgb(245,245,245)',
    black: 'rgb(40,40,40)',
    darkBlack: 'rgb(30, 30, 30)',
    darkerBlack: 'rgb(17, 17, 17)',
    matteBlack: '#000',
    darkerGrey: '#242424',
    darkGrey: 'rgb(57,57,57)',
    grey: 'rgb(85, 85, 85)',
    yellow: '#F9D413',
    purple: '#633DFF',
    orange: '#F98D51',
    aqua: '#32D2C9',
  },
  modePalette: {
    darkBg: 'rgb(30, 30, 30)',
    darkLines: 'rgba(0, 0, 0, 0.5)',
    lightBg: '#fff',
    lightLines: 'rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    unit: 8,
  },
  fonts: {
    futura: '"Futura", sans-serif',
    inconsolata: '"Inconsolata", "serif"',
  },
  gridSizes: {
    s: 8,
    m: 17,
    l: 34,
  },
  sizes: {
    toolbarHeight: '6em',
    mobile: {
      footerHeight: '8em',
    },
    desktop: {
      footerHeight: '5em',
    },
  },
  animate: {
    easeOut: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeIn: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
    easeInOut: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    logoIn: 'cubic-bezier(0.460, 0.000, 0.535, 1.000)',
    logoOut: 'cubic-bezier(0.155, 0.425, 0.000, 0.900)',
    slow: '750ms',
    moderate: '425ms',
    fast: '250ms',
    headerDuration: '4200ms',
    headerDelay: '4000ms',
    skillsBaseDelay: '500ms',
    skillsRevealDuration: '2000ms',
  }
}

export default theme;

