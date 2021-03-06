import initialState from '../store/initial-state';
import { AnyAction } from 'redux';
import {
    PAGE_LOADED,
    CURTAIN_STATE_CHANGED,
    MODE_CHANGED,
    SPLASH_CHANGED,
    TRANSPORT_CHANGED,
    MENU_CHANGED,
    IS_MOBILE_SET,
} from '../constants/constants';

export default function global(state = initialState.global, action: AnyAction) {
    const { type, payload } = action;
    switch (type) {
        case PAGE_LOADED:
            return { ...state, pageLoaded: true };
        case CURTAIN_STATE_CHANGED:
            return { ...state, curtainState: payload };
        case SPLASH_CHANGED:
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
