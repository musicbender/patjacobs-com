import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurtainState } from '@actions/global';
import { CurtainState, Store } from '@types';
import { curtainCovering } from '@util/animation';

type UseCurtainOptions = { doStart?: boolean; isSplash?: boolean };

type UseCurtainReturn = {
  curtainState: CurtainState;
  curtainCovering: boolean;
};

export const useCurtain = ({
  doStart = true,
  isSplash = false,
}: UseCurtainOptions = {}): UseCurtainReturn => {
  const curtainState = useSelector((state: Store) => state.global.curtainState);
  const splashActive = useSelector((state: Store) => state.global.splashActive);
  const dispatch = useDispatch();

  const disabled = splashActive && !isSplash;

  useEffect(() => {
    // console.log('$$$ use-curtain splash state', doStart, splashActive, isSplash, !splashActive || isSplash);
    console.log('$$$ use-curtain', curtainState, `covering: ${curtainCovering(curtainState)}`);
    if (doStart && !disabled) dispatch(changeCurtainState('start'));
  }, []);

  return {
    curtainState,
    curtainCovering: curtainCovering(curtainState),
  };
};
