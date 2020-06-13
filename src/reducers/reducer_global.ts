import initialState from '../store/initial-state';
import { AnyAction } from 'redux';
import {
    PAGE_LOADED,
    SPLASH_OPEN_CHANGED,
    SPLASH_CLOSING_CHANGED,
    MODE_CHANGED,
    TRANSPORT_CHANGED,
    MENU_CHANGED,
    IS_MOBILE_SET,
} from '../constants/constants';

export default function global(state = initialState.global, action: AnyAction) {
    const { type, payload } = action;
    switch (type) {
        case PAGE_LOADED:
            return { ...state, pageLoaded: true };
        case SPLASH_CLOSING_CHANGED:
            return { ...state, splashClosing: payload };
        case SPLASH_OPEN_CHANGED:
            return { ...state, splashOpen: payload };
        case TRANSPORT_CHANGED:
            return { ...state, transportOpen: payload.open };
        case MENU_CHANGED:
            return { ...state, menuhOpen: payload };
        case MODE_CHANGED:
            return { ...state, mode: payload };
        case IS_MOBILE_SET:
            return { ...state, isMobile: payload };
        default:
            return state;
    }
}
