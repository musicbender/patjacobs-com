import Curtain from '@components/global/curtain';
import { CurtainMode } from '@types';
import React, { FC } from 'react';
import { useCurtain } from 'src/hooks/use-curtain';

export default function withCurtain<P>(WrappedComponent: React.ComponentType<P>) {
  const OutputComponent: FC<P> = (props) => {
    const { curtainState, curtainCovering } = useCurtain();
    return (
      <>
        <WrappedComponent
          {...props}
          curtainState={curtainState}
          curtainCovering={curtainCovering}
        />
        <Curtain entrance={CurtainMode.FULL} exit={CurtainMode.FULL} durations={[1, 2, 1]} />
      </>
    );
  };

  return OutputComponent;
}
