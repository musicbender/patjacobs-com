export interface IState {
  global: {
    pageLoaded: boolean
    splashOpen: boolean
    transportOpen: boolean
    menuOpen: boolean
    mode: string
    isMobile: boolean
  },
  home: {
    aboutTop: number
    recentWorkTop: number
    skillsTop: number
  }
}

export interface IHomeActionPayload {
  didResize?: boolean
  value: number
}

export { AppState } from '../reducers';