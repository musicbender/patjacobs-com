import Curtain from '@components/global/curtain';
import Curtain2 from '@components/global/curtain2';
import { CurtainMode } from '@types';
import { AnimatePresence, useIsPresent } from 'framer-motion';
import React, { FC } from 'react';
import { useCurtain } from 'src/hooks/use-curtain';

export default function withCurtain<P>(WrappedComponent: React.ComponentType<P>) {
  const OutputComponent: FC<P> = (props) => {
    const { curtainState, curtainCovering } = useCurtain();
    const isPresent = useIsPresent();
    console.log('%%% with-curtain', WrappedComponent.name, isPresent);
    return (
      <>
        <WrappedComponent
          {...props}
          curtainState={curtainState}
          curtainCovering={curtainCovering}
        />
        {/* {!curtainCovering && (
          <Curtain2 entrance={CurtainMode.FULL} exit={CurtainMode.FULL} durations={[1, 2, 1]} />
        )} */}
        <Curtain2 entrance={CurtainMode.FULL} exit={CurtainMode.FULL} durations={[1, 2, 1]} />
      </>
    );
  };

  return OutputComponent;
}
