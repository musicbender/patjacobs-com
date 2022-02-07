import { ABOUT_TOP_SET, RECENT_WORK_TOP_SET, SKILLS_TOP_SET } from '../constants/global';
import { AnyAction } from 'redux';
import { IHomeActionPayload } from '../types/state';

export function setAboutTop(params: IHomeActionPayload): AnyAction {
  return {
    type: ABOUT_TOP_SET,
    payload: params,
  };
}

export function setRecentWorkTop(params: IHomeActionPayload): AnyAction {
  return {
    type: RECENT_WORK_TOP_SET,
    payload: params,
  };
}

export function setSkillsTop(params: IHomeActionPayload): AnyAction {
  return {
    type: SKILLS_TOP_SET,
    payload: params,
  };
}
