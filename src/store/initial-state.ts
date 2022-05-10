import { Mode } from '@types';

const initialState = {
  global: {
    curtainState: null,
    splashActive: true,
    scrollCurtainActive: false,
    menuOpen: false,
    mode: Mode.DARK,
    isMobile: true,
  },
  home: {
    aboutTop: 915,
    recentWorkTop: 1819,
    skillsTop: 5540,
  },
};

export default initialState;
