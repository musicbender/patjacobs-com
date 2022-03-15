import {
  PAGE_LOADED,
  CURTAIN_STATE_CHANGED,
  SPLASH_CHANGED,
  TRANSPORT_CHANGED,
  MENU_CHANGED,
  RECENT_WORK_TOP_SET,
  IS_MOBILE_SET,
} from '@constants/global';
import { AnyAction } from 'redux';
import { CurtainState } from '@types';

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

export function changeSplashOpen(open: boolean): AnyAction {
  return {
    type: SPLASH_CHANGED,
    payload: open,
  };
}

export function changeCurtainState(curtainState: CurtainState = null): AnyAction {
  return {
    type: CURTAIN_STATE_CHANGED,
    payload: curtainState,
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
