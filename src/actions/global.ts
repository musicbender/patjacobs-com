import {
  PAGE_LOADED,
  SPLASH_CHANGED,
  TRANSPORT_CHANGED,
  MENU_CHANGED,
  MODE_CHANGED,
  RECENT_WORK_TOP_SET,
  IS_MOBILE_SET
} from '../configs/constants';
import { AnyAction } from 'redux';

export function loadPage() {
  return {
    type: PAGE_LOADED
  }
}

export function changeTransport(open: boolean): AnyAction {
  return {
    type: TRANSPORT_CHANGED,
    payload: open
  }
}

export function changeSplash(open: boolean): AnyAction {
  return {
    type: SPLASH_CHANGED,
    payload: open
  }
}

export function changeMenu(open: boolean): AnyAction {
  return {
    type: MENU_CHANGED,
    payload: open
  }
}

export function setRecentWorkTop(value: number): AnyAction {
  return {
    type: RECENT_WORK_TOP_SET,
    payload: value
  }
}

export function setIsMobile(): AnyAction {
  return {
    type: IS_MOBILE_SET
  }
}
