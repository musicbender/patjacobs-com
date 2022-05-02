import {
  PAGE_LOADED,
  CURTAIN_STATE_CHANGED,
  SPLASH_CHANGED,
  SCROLL_CURTAIN_CHANGED,
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

export function changeScrollCurtain(open: boolean): AnyAction {
  return {
    type: SCROLL_CURTAIN_CHANGED,
    payload: open,
  };
}

export function changeSplashActive(open: boolean): AnyAction {
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
