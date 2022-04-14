// interfaces
export type Store = {
  global: {
    pageLoaded: boolean;
    curtainState: CurtainState;
    splashActive: boolean;
    transportOpen: boolean;
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

export type CurtainState = 'start' | 'opening' | 'open' | 'closing' | 'closed' | null;

export type HomeActionPayload = {
  didResize?: boolean;
  value: number;
};

export type { AppState } from '@reducers';

export type Modes = 'light' | 'dark';
