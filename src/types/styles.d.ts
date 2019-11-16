export interface ITheme {
  breakpoints: {
    largest: string,
    extraLarge: string
    max: string
    medium: string
    small:  string
    tablet: string
    mobile: string
    smallMobile: string
    tinyMobile: string
  }
  palette: {
    white: string
    offWhite: string
    black: string
    darkBlack: string
    darkerBlack: string
    matteBlack: string
    darkerGrey: string
    darkGrey: string
    grey: string
    yellow: string
    purple:string
    orange:string
    aqua: string
  }
  modePalette: {
    darkBg: string
    darkLines: string
    lightBg: string
    lightLines: string
  }
  spacing: {
    unit: number
  }
  fonts: {
    futura: string;
    inconsolata: string;
  }
  gridSizes: {
    s: number
    m:  number
    l:  number
  }
  sizes: {
    toolbarHeight: string;
    mobile: {
      footerHeight: string;
    }
    desktop: {
      footerHeight: string;
    }
  }
  animate: {
    easeOut: string
    easeIn: string
    easeInOut: string
    logoIn: string
    logoOut: string
    slow: string
    moderate: string
    fast: string
    headerDuration: string
    headerDelay: string
    skillsBaseDelay: string
    skillsRevealDuration: string
  }
}