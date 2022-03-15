import { CurtainState } from '@types';

export const curtainShouldMount = (curtainState: CurtainState): boolean => {
  return !!curtainState && curtainState !== 'closing' && curtainState !== 'closed';
};
