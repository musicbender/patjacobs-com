import { ABOUT_TOP_SET, RECENT_WORK_TOP_SET, SKILLS_TOP_SET } from '@constants/global';
import { AnyAction } from 'redux';
import { HomeActionPayload } from '@types';

export function setAboutTop(params: HomeActionPayload): AnyAction {
  return {
    type: ABOUT_TOP_SET,
    payload: params,
  };
}

export function setRecentWorkTop(params: HomeActionPayload): AnyAction {
  return {
    type: RECENT_WORK_TOP_SET,
    payload: params,
  };
}

export function setSkillsTop(params: HomeActionPayload): AnyAction {
  return {
    type: SKILLS_TOP_SET,
    payload: params,
  };
}
