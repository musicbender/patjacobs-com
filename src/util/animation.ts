import { CurtainState } from '@types';

export const curtainCovering = (curtainState: CurtainState): boolean => {
  return !!curtainState && curtainState !== 'covering' && curtainState !== 'covered';
};
