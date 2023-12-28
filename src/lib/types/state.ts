// interfaces
export type Store = {
  global: {
    curtainState: CurtainState;
    splashActive: boolean;
    scrollCurtainActive: boolean;
    menuOpen: boolean;
    mode: Mode;
    isMobile: boolean;
  };
  home: {
    aboutTop: number;
    recentWorkTop: number;
    skillsTop: number;
  };
};

export type CurtainState = 'start' | 'covering' | 'covered' | 'uncovering' | 'uncovered' | null;

export type HomeActionPayload = {
  didResize?: boolean;
  value: number;
};

export type { AppState } from 'src/lib/reducers';

export enum Mode {
  DARK = 'dark',
  LIGHT = 'light',
}
