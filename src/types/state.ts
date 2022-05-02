// interfaces
export type Store = {
  global: {
    pageLoaded: boolean;
    curtainState: CurtainState;
    splashActive: boolean;
    scrollCurtainActive: boolean;
    menuOpen: boolean;
    mode: string;
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

export type { AppState } from '@reducers';

export type Modes = 'light' | 'dark';
