import { changeCurtainState } from '@actions/global';
import { CurtainState, Store } from '@types';
import { curtainShouldMount } from '@util/animation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type UseCurtainReturn = {
  curtainState: CurtainState;
  curtainIsMounted: boolean;
};

export const useCurtain = (): UseCurtainReturn => {
  const curtainState = useSelector((state: Store) => state.global.curtainState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurtainState('start'));
  }, []);

  return {
    curtainState,
    curtainIsMounted: curtainShouldMount(curtainState),
  };
};
