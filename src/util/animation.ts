import { CurtainState } from '@types';

export const curtainCovering = (curtainState: CurtainState): boolean => {
  return !!curtainState && curtainState !== 'covering' && curtainState !== 'covered';
};

export const scrollToTop = () => {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};
