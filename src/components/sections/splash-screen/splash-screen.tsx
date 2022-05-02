import { FC } from 'react';
import Curtain from '@components/global/curtain';
import settings from '@configs/settings.json';
import { SplashScreenWrapper } from './styles';
import { AnimatePresence } from 'framer-motion';
import { CurtainType } from '@types';

const SplashScreen: FC = () => {
  const splashDuration = settings.splashScreenDebug ? 300 : 4;
  return (
    <SplashScreenWrapper>
      <AnimatePresence>
        <Curtain durations={[0, splashDuration, 2]} curtainType={CurtainType.SPLASH} />
      </AnimatePresence>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
