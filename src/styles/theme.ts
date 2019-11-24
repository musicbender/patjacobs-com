const theme = { 
  palette: {
    white: '#ffffff',
    offWhite: '#f5f5f5',
    black: '#282828',
    darkBlack: '#1e1e1e',
    darkerBlack: '#111111',
    matteBlack: '#000000',
    darkerGrey: '#242424',
    darkGrey: '#393939',
    grey: '#555555',
  },
  corePalette: {
    yellow: '#F9D413',
    purple: '#5e3ce6',
    orange: '#F98D51',
    aqua: '#32D2C9',
  },
  modePalette: {
    darkBg: '#1e1e1e',
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
    footerHeightM: '8em',
    footerHeightD: '5em',
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

