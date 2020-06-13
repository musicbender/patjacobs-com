import {
    PAGE_LOADED,
    SPLASH_CLOSING_CHANGED,
    SPLASH_OPEN_CHANGED,
    TRANSPORT_CHANGED,
    MENU_CHANGED,
    RECENT_WORK_TOP_SET,
    IS_MOBILE_SET,
} from '../constants/constants';
import { AnyAction } from 'redux';

export function loadPage() {
    return {
        type: PAGE_LOADED,
    };
}

export function changeTransport(open: boolean, transportDuration?: number): AnyAction {
    return {
        type: TRANSPORT_CHANGED,
        payload: {
            open,
            transportDuration,
        },
    };
}

export function changeSplashClosing(closing: boolean): AnyAction {
    return {
        type: SPLASH_CLOSING_CHANGED,
        payload: closing,
    };
}

export function changeSplashOpen(open: boolean): AnyAction {
    return {
        type: SPLASH_OPEN_CHANGED,
        payload: open,
    };
}

export function changeMenu(open: boolean): AnyAction {
    return {
        type: MENU_CHANGED,
        payload: open,
    };
}

export function setRecentWorkTop(value: number): AnyAction {
    return {
        type: RECENT_WORK_TOP_SET,
        payload: value,
    };
}

export function setIsMobile(): AnyAction {
    return {
        type: IS_MOBILE_SET,
    };
}
