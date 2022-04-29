import Curtain from '@components/global/curtain';
import { CurtainMode, Store } from '@types';
import React, { FC } from 'react';

export default function withCurtain<P>(WrappedComponent: React.ComponentType<P>) {
  const OutputComponent: FC<P> = (props) => {
    return (
      <>
        <WrappedComponent {...props} />
        <Curtain
          coverMode={CurtainMode.FULL}
          uncoverMode={CurtainMode.FULL}
          durations={[1, 2, 1]}
        />
      </>
    );
  };

  return OutputComponent;
}
