import { CurtainState, Store } from '@types';
import { curtainCovering } from '@util/animation';
import { useSelector } from 'react-redux';

type UseCurtainReturn = {
  curtainState: CurtainState;
  curtainCovering: boolean;
};

export const useCurtain = (): UseCurtainReturn => {
  const curtainState = useSelector((state: Store) => state.global.curtainState);
  return {
    curtainState,
    curtainCovering: curtainCovering(curtainState),
  };
};
