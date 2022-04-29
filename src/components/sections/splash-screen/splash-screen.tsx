import { FC } from 'react';
import Curtain from '@components/global/curtain';
import settings from '@configs/settings.json';
import { SplashScreenWrapper } from './styles';
import { AnimatePresence } from 'framer-motion';
import { useCurtain } from 'src/hooks/use-curtain';
import { CurtainMode } from '@types';

const SplashScreen: FC = () => {
  useCurtain({ isSplash: true });
  const splashDuration = settings.splashScreenDebug ? 300 : 4;
  return (
    <SplashScreenWrapper>
      <AnimatePresence>
        <Curtain durations={[0, splashDuration, 2]} isSplash />
      </AnimatePresence>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
