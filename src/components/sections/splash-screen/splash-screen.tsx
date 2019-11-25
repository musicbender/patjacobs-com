import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Curtain from '../../global/curtain';
import { SplashScreenWrapper, LogoOutterWrapper, StyledLogo } from './styles';

const SplashScreen: React.SFC = () => {
  const data = useStaticQuery(graphql`
    query {
      staticData {
        config {
          splashScreenDebug
        }
      }
    }
  `);

  return (
    <SplashScreenWrapper>
      <Curtain duration={data.staticData.config.splashScreenDebug ? 3000000 : 3000} />
      <LogoOutterWrapper>
        <StyledLogo color="aqua" debug={data.staticData.config.splashScreenDebug } />
      </LogoOutterWrapper>
    </SplashScreenWrapper>
  );
};

export default SplashScreen;
