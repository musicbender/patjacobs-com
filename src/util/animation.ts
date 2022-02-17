import { CurtainState } from '@types';

export const curtainInClose = (curtainState: CurtainState): boolean => {
  return curtainState === 'closing' || curtainState === 'closed';
};
