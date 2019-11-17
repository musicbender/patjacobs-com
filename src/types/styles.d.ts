export interface ITheme {
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
    footerHeightM: string;
    footerHeightD: string;
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

export interface IBreakPoints {
  desktopXXL: number
  desktopXL: number
  desktopL: number
  desktopM: number
  desktopS:  number
  tablet: number
  mobileL: number
  mobileM: number
  mobileS: number
};