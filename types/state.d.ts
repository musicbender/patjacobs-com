// interfaces
export interface IStore {
    global: {
        pageLoaded: boolean;
        curtainState: CurtainState;
        splashOpen: boolean;
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
}

export type CurtainState = 'opening' | 'open' | 'closing' | 'closed';

export interface IHomeActionPayload {
    didResize?: boolean;
    value: number;
}

export { AppState } from '../src/reducers';

// enums
export type Modes = 'light' | 'dark';
