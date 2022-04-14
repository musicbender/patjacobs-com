import { FC } from 'react';
import Curtain from '@components/global/curtain';
import settings from '@configs/settings.json';
import { SplashScreenWrapper } from './styles';
import { AnimatePresence } from 'framer-motion';
import { useCurtain } from 'src/hooks/use-curtain';

const SplashScreen: FC = () => {
  const { curtainCovering } = useCurtain({ isSplash: true });
  const splashDuration = settings.splashScreenDebug ? 300 : 3;
  return (
    <SplashScreenWrapper>
      <AnimatePresence>
        {curtainCovering && <Curtain durations={[0, splashDuration, 2]} withLogo />}
      </AnimatePresence>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
